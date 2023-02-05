import { useContext } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import ImageTask from "../../assets/task-image.jpg";
import TaskContext from "../../context/taskContext";
import TaskItem from "../pure/taskItem";
import { actionsTask } from "../../store/action";

const TaskList = ({ toggleDraw }) => {
  const tasks = useContext(TaskContext).state.task;
  const actions = useContext(TaskContext).dispatch;

  const handleToggle = (task) => {
    actions.dispatchTask({
      type: actionsTask.TOGGLE_TASK,
      payload: {
        id: task.id,
        description: task.description,
        completed: task.completed,
      },
    });
  };

  const handleDeleteTask = (task) => {
    actions.dispatchTask({
      type: actionsTask.DELETE_TASK,
      payload: {
        id: task.id,
      },
    });
  };

  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          top: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text size={16} weight="bold" transform="uppercase" color="#ffffffAA">
          Task' List
        </Text>
        <Col css={{ overflowY: "auto !important", height: "230px" }}>
          <div>
            {tasks.length !== 0 &&
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  toggleTask={handleToggle}
                  deleteTask={handleDeleteTask}
                />
              ))}
          </div>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={ImageTask}
          style={{ filter: "brightness(70%)" }}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row sx={{ padding: 3 }}>
          <Col>
            <Text color="#000" size={12}>
              Add a task from menu lateral
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end" style={{ padding: "10px 20px" }}>
              <Button flat auto rounded color="secondary" onPress={toggleDraw}>
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Add Task
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default TaskList;
