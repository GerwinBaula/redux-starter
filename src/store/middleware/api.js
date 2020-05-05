import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });
    // General Success Scenario
    dispatch(actions.apiCallSuccess(response.data)); // No reducer
    // Specific Success Scenario
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General Error Scenario
    dispatch(actions.apiCallFailed(error.message)); // No reducer
    // Specific Error Scenario
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
