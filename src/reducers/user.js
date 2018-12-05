const initialState = {
  name: "Olusola"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, ...payload };

    default:
      return state;
  }
};
