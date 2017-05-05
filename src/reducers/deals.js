import Enum from '../utils/Enum'

const initialState = {
  title: 'Сделки',
  items: [],
  searchQuery: '',
  activeState: Enum.defaultStateDeals,
  sortBy: { code: 'date', type: 'desc' },
  loading: false,
  loaded: false
}

const deals = (state = initialState, action) => {
  let payload = action.payload

  switch (action.type) {
    case 'GET_DEALS_REQUEST':
      return { ...state, loading: true }

    case 'GET_DEALS_SUCCESS':
      return { ...state,
        items: payload,
        loading: false,
        loaded: true
      }

    case 'GET_DEALS_FAIL':
      return { ...state, error: true }

    case 'CREATE_DEAL_SUCCESS':
      state.items.push(payload)
      return { ...state,
        items: state.items.concat()
      }

    case 'CREATE_DEAL_FAIL':
      return { ...state }

    case 'UPDATE_DEAL_SUCCESS':
      let updated = state.items.filter(item => item._id !== payload._id)
      updated.push(payload)
      return { ...state,
        items: updated
      }

    case 'UPDATE_DEAL_FAIL':
      return { ...state }

    case 'DELETE_DEAL_SUCCESS':
      return { ...state, 
        items: state.items.filter(item => item._id !== payload)
      }

    case 'DELETE_DEAL_FAIL':
      return { ...state}

    case 'FILTER_DEALS_BY_STATE':
      return { ...state, activeState: payload }

    case 'FILTER_DEALS_BY_SEARCH':
      return { ...state, searchQuery: payload }

    case 'SORT_DEALS_DATA':
      return { ...state, sortBy: payload }

    default:
      return state
  }
}

export default deals
