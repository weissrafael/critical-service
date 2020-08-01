export const CONFIG = "connection/CONFIG";
export const CREATE = "connection/CREATE";
export const SUCCESS = "connection/SUCCESS";
export const SET_CONNECTION = "connection/SET_CONNECTION";

const INITIAL_VALUES = {
  connection: null,
  connected: false,
};

export default function reducer(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        connected: true,
      };
    case SET_CONNECTION:
      return {
        ...state,
        connection: action.connection,
      };
    default:
      return state;
  }
}

export function configConnection() {
  return {
    type: CONFIG,
  };
}

export function createConnection(event) {
  return {
    type: CREATE,
    event,
  };
}

export function successConnection() {
  return {
    type: SUCCESS,
  };
}

export function setConnection(connection) {
  return { type: SET_CONNECTION, connection };
}
