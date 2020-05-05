import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function _getState() {
    return state;
  }

  function _dispatch(action) {
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) listeners[i]();
  }

  function _subscribe(listener) {
    listeners.push(listener);
  }

  return {
    getState: _getState,
    dispatch: _dispatch,
    subscribe: _subscribe,
  };
}

export default createStore(reducer);
