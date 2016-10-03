
export default function reducer(state={
  fetching: false,
  fetched: true,
  <%= name %>: [],
  error: null
}, action) {
  switch(action.type) {

    case "FETCH_<%= actionName %>_PENDING": {
      return {...state,
        fetching: true,
        fetched: false
      };
      break;
    }
    case "FETCH_<%= actionName %>_REJECTED": {
      return {...state,
        fetching: false,
        fetched: true,
        error: action.payload
      };
      break;
    }
    case "FETCH_<%= actionName %>_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: true,
        <%= name %>: [...state.<%= name %>]
      };
      break;
    }

  }

  return state;
}
