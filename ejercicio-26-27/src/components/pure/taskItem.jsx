import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Modal, useModal, Button, Text, Card } from "@nextui-org/react";

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  const { setVisible, bindings } = useModal();

  return (
    <Card
      css={{
        width: "90%",
        padding: "1px 20px !important",
        marginTop: "4px",
      }}
    >
      <Card.Body
        css={{
          padding: "0px !important",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text key={task.id}>{task.name}</Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RemoveRedEyeIcon
            onClick={() => setVisible(true)}
            sx={{ cursor: "pointer" }}
          />
          {task.completed ? (
            <ToggleOnIcon
              onClick={() => {
                toggleTask(task);
              }}
              sx={{ color: "green", cursor: "pointer" }}
            />
          ) : (
            <ToggleOffIcon
              onClick={() => {
                toggleTask(task);
              }}
              sx={{ color: "gray", cursor: "pointer" }}
            />
          )}
          <DeleteForeverIcon
            onClick={() => {
              deleteTask(task);
            }}
            sx={{ color: "red", cursor: "pointer" }}
          />
        </div>
      </Card.Body>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" h5 size={18}>
            Description's Task
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">{task.description}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default TaskItem;
