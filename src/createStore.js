export default function createStore(reducer) { //Stores accept reducers as arguments

  //state
    let state;

  //action
    function dispatch(action) {
      state = reducer(state, action);
      render();
    }

    function getState() {
      return state;
    }

    dispatch({type: '@@INIT'})

  //new state
  return {
    dispatch: dispatch,
    getState: getState
  }
}


function render() {
  const container = document.getElementById('container');
}
