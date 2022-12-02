import { LOGIN_USER, LOGOUT_USER } from "./action-type";

const initialState = { 
  user: {}
};

const reducer = (state = initialState, action) => {
    
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.data
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {}
      };

      default: return state;

  }

};

export default reducer;
