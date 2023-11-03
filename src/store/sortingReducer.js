const initialState = {
  sortState: 'tab1',
}

export const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeSortState': 
      return {...state, sortState: action.payload.value};
    default:
      return state;
  }
}