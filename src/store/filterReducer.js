const initialState = {
  'all': true,
  '0': true,
  '1': true,
  '2': true,
  '3': true,
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeState':
      const prevState = state[action.payload.id];
      const key = action.payload.id;
      if (key === 'all' && state['0'] === false) {
        return {
          'all': true,
          '0': true,
          '1': true,
          '2': true,
          '3': true,
        }
      } else if (key === 'all' && state['0'] === true) {
        return {
          'all': false,
          '0': false,
          '1': false,
          '2': false,
          '3': false,
        }
      } else {
        const newState = {...state, [key]: !prevState}
        if (newState['0'] === true && newState['1'] === true && newState['2'] === true && newState['3'] === true){
          return {
            'all': true,
            '0': true,
            '1': true,
            '2': true,
            '3': true,
          }
        } else {
          return {...newState, 'all': false }
        }
      }
    default:
      return state;
  }
}