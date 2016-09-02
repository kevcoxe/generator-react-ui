
export default function reducer(state={
  fetching: false,
  fetched: false,
  test: [],
  error: null
}, action) {
  switch(action.type) {

    case "FETCH_TEST_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_TEST_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_TEST_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: false,
        test: [...state.test]
      };
      break;
    }

  }

  return state;
}
