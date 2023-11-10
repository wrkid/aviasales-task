import { clearData, getTicketsData, searchStoped } from "../actions"

const fetchSearchId = async () => {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    const res = await response.json()
    return res.searchId
}

export const fetchData = () => dispatch => {
    dispatch(clearData());
    fetchSearchId()
      .then(async indexId => {
        let done = false;
        while (!done) {
          try {
            const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${indexId}`);
            const json = await response.json();
            if (response.status === 200 && !json.stop) {
              dispatch(getTicketsData(json.tickets));
            }
            if (json.stop) {
              dispatch(searchStoped());
              done = true;
            }
          } catch (err){
            
          }
       }
    })
  }
