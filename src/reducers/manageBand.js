export default function manageBand(state = {
  bands: [{name: "state is working"}],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      return [...state.bands, action.payload]

    default:
      return state
  }
};
