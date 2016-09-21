
export default function reducer(state={
  fetching: false,
  fetched: false,
  downloads: {},
  error: null
}, action) {
  switch(action.type) {

    case "FETCH_DOWNLOADS_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_DOWNLOADS_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_DOWNLOADS_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: false,
        downloads: {...action.payload.data}
      };
      break;
    }

  }

  return state;
}
