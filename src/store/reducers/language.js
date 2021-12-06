const INITIAL_STATE = {
    lang: "EN",
    system: "AR",
  };
  
  export default function languageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_LANGUAGE":
        return {
          ...state,
          lang: action.payload,
        };
        
      case "SET_SYSTEM_LANG":
        return {
          ...state,
          system: action.payload,
        };
      default:
        return state;
    }
  }
  