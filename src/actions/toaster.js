export const SHOW_TOAST = "SHOW_TOAST";
export const HIDE_TOAST = "HIDE_TOAST";

export const showToast = payload => ({
  type: SHOW_TOAST,
  payload
});

export const hideToast = () => ({
  type: HIDE_TOAST
});

export const showProgress = () => {
  return showToast([{ type: "progress", message: "Loading..." }]);
};
