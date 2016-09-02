
export default function reducer(state={
  fetching: false,
  fetched: false,
  <%= name %>: [],
  error: null
}, action) {
  switch(action.type) {

    case "FETCH_<%= actionName %>_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_<%= actionName %>_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_<%= actionName %>_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: false,
        <%= name %>: [...state.<%= name %>]
      };
      break;
    }

  }

  return state;
}
