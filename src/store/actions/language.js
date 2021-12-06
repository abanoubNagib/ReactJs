export const ChangeLanguage = (payload) => {
    return {
      type: "SET_LANGUAGE",
      payload,
    };
  }

  export const systemLang = (data) => {
    return {
      type: "SET_SYSTEM_LANG",
      payload: data,
    };
  };
  