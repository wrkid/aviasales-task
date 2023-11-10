const initialState = {
  data: [],
  stop: false
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKETS_DATA':
      return {...state, data: [...state.data, ...action.payload]};
    case 'SEARCH_STOPED':
      return {...state, stop: true}
    case 'CLEAR_DATA':
      return initialState;
    default:
      return state;
  }
}