const initialValue = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false,
  
}

export default (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_CONTACT_PENDING':
      return {
        ...state,
        isLoading: true
      }

    case 'GET_CONTACT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFinish: true,
        data: action.payload.data
      };

    case 'GET_CONTACT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: 'Error Network'
      };

    case 'CREATE_CONTACT': 
      state.data.push(action.payload);
      return state

    case 'DELETE_CONTACT':
      return {
        ...state, data: state.data.filter(item => item.id !== action.payload)
      }
    
    case 'EDIT_CONTACT':
      return {
        data: state.data.map(item => (item.id == action.payload.id) ? action.payload : item)
      }
      default:
      return state;
  }
}