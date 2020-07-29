let WebSocketServer = require('ws').Server
let fs = require("fs")

let stocks
try {
	stocks = JSON.parse(fs.readFileSync("stocks.json"))
	console.log("Successfully loaded stocks data.")

} catch {
	throw Error("Could not load stocks data.")
}
let stockSymbols = stocks.map(stock => stock.symbol)
console.log(`Supported stock symbols: ${stockSymbols}`)

const generatePrice = (startingPrice) => {
  let marketWeighting = Number(Math.random() * 0.1) * -1;
  let volatility = Number(Math.random() * 0.1);
  let maxMovement = Number((startingPrice * 0.01 ) + (volatility * marketWeighting));
  let movement = Number(maxMovement * Math.random());
  movement = Number(Math.random() < 0.5) ? -Math.abs(movement) : Math.abs(movement);
  let significantMovement = Number(Math.random() < 0.01) ? 10 : 1;
  return Number(startingPrice + movement * significantMovement);
}

let wss = new WebSocketServer({port: 8080})

console.log("WebSocket server is listening on port 8080.")

let getConnectedEvent = () => {
    let event = {
        event: "connected",
        supportedSymbols: stockSymbols,
        stocksData: stocks,
        message: "All stocks data is not real and is generated solely for demo purposes."
    }
    return JSON.stringify(event)
}

let getDisconnectingEvent = (reason) => {
	let event = {
		event: "disconnecting",
		reason: reason
	}
	return JSON.stringify(event)
}

let getErrorEvent = (reason) => {
	let event = {
		event: "error",
		reason: reason
	}
	return JSON.stringify(event)
}

let getStockUpdateEvent = (connectionInfo, stock) => {
	let event = {
		event: "stocks-update",
		stocks: {}
	}
  let stockInfo = stocks.find(e => e.symbol === stock)
	if (stockInfo) {
      stockInfo.basePrice = generatePrice(stockInfo.basePrice);
			event.stocks[stock] = stockInfo.basePrice;
  }
	return JSON.stringify(event)
}

let disconnect = (ws, reason) => {
	ws.send(getDisconnectingEvent(reason))
	ws.terminate()
}

let handleSubscribe = (ws, parsedMessage, connectionInfo) => {
	if (parsedMessage.stocks instanceof Array) {
		parsedMessage.stocks.forEach(stock => {
			if (stocks.some(e => e.symbol === stock)) {
				if (!connectionInfo.stocksToWatch.includes(stock)) {
					connectionInfo.stocksToWatch.push(stock)
				}
			} else {
				ws.send(getErrorEvent("invalid stock symbol"))
			}
		})
	} else {
		ws.send(getErrorEvent("invalid message"))
	}
}

let handleUnsubscribe = (ws, parsedMessage, connectionInfo) => {
	if (parsedMessage.stocks instanceof Array) {
		parsedMessage.stocks.forEach(stock => {
			let i = connectionInfo.stocksToWatch.indexOf(stock)
			if (i > -1) {
				connectionInfo.stocksToWatch.splice(i, 1)
			}
		})
	} else {
		ws.send(getErrorEvent("invalid message"))
	}
}

let randInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

wss.on('connection', (ws) => {

	ws.send(getConnectedEvent())

	let connectionInfo = {
		isActive: true,
		stocksToWatch: [],
		stocksUpdateCount: 0,
    stockWatchers: {}
	}

	ws.pingInterval = setInterval(() => {
		if (!connectionInfo.isActive) {
			disconnect(ws, "connection inactive")
		} else {
			connectionInfo.isActive = false
			ws.ping()
		}
	}, 15000)


	update = () => {
		connectionInfo.stocksToWatch.forEach(stock => {
      if (connectionInfo.stockWatchers[stock] === undefined) {
        watch(stock);
      }
    });
	}
  ws.stocksInterval = setInterval(update, 1000);

  watch = (stock) => {
	  let i = connectionInfo.stocksToWatch.indexOf(stock);
    if (i > -1) {
      let event = getStockUpdateEvent(connectionInfo, stock);
      ws.send(event);
      connectionInfo.stockWatchers[stock] = setTimeout(() => watch(stock), randInterval(10, 200));
    } else {
      clearTimeout(connectionInfo.stockWatchers[stock]);
      delete connectionInfo.stockWatchers[stock];
    }
  }

	ws.connectionTimeout = setTimeout(() => {
		disconnect(ws, "connection time exceeds 5 minutes")
	}, 300000)

	ws.on('message', (message) => {
		connectionInfo.isActive = true

		if (message.length > 300) {
			ws.send(getErrorEvent("message too long"))
			return
		}

		let parsedMessage
		try {
			parsedMessage = JSON.parse(message)
		} catch {
			ws.send(getErrorEvent("invalid message"))
			return
		}

		if (parsedMessage.event === "subscribe") {
			handleSubscribe(ws, parsedMessage, connectionInfo)
		} else if (parsedMessage.event === "unsubscribe") {
			handleUnsubscribe(ws, parsedMessage, connectionInfo)
		}
	})

	ws.on('close', () => {
		clearInterval(ws.pingInterval)
		clearInterval(ws.stocksInterval)
		clearTimeout(ws.connectionTimeout)
    for (var stock in connectionInfo.stockWatchers) clearTimeout(connectionInfo.stockWatchers[stock]);
  });


	ws.on('pong', () => {
        connectionInfo.isActive = true
    });
})
