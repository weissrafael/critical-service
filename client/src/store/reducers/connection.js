export const CONFIG = "connection/CONFIG";
export const CREATE = "connection/CREATE";
export const SUCCESS = "connection/SUCCESS";

const INITIAL_VALUES = {
  connected: false,
};

export default function reducer(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        connected: true,
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
