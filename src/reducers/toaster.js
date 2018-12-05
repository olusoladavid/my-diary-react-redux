import { SHOW_TOAST, HIDE_TOAST } from "../actions/toaster";

const initialState = {
  visible: false,
  toasts: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_TOAST:
      return { ...state, visible: true, toasts: [...payload] };

    case HIDE_TOAST:
      return { ...state, visible: false, toasts: [] };

    default:
      return state;
  }
};
