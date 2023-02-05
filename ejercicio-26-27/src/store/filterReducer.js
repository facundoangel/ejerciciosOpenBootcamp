import { ACTIONFILTER } from "./action";

const filterReducer = (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONFILTER:
      return payload;

    default:
      return state;
  }
};

export default filterReducer;
