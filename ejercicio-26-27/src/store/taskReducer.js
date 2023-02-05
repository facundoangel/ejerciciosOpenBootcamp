import { actionsTask } from "./action";
import PropType from "prop-types";

const taskReducer = (state = [], action) => {
  if (!action) return [];

  const { type, payload } = action;
  switch (type) {
    case actionsTask.ADD_TASK:
      return [...state, payload];

    case actionsTask.DELETE_TASK:
      return state.filter((task) => task.id !== payload.id);

    case actionsTask.TOGGLE_TASK:
      return state.map((task) =>
        task.id === payload.id ? { ...task, completed: !task.completed } : task
      );

    default:
      return state;
  }
};

taskReducer.propTypes = {
  action: PropType.objectOf(
    {
      type: PropType.string.isRequired,
      payload: PropType.objectOf({
        id: PropType.number.isRequired,
        description: PropType.string.isRequired,
        completed: PropType.bool.isRequired,
      }).isRequired,
    }.isRequired
  ),
};

export default taskReducer;
