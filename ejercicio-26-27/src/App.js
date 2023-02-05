import { Grid } from "@mui/material";
import NavbarApp from "./components/container/navbarApp";
import "./App.css";
import TaskList from "./components/container/taskList";
import React, { useEffect, useReducer, useState } from "react";
import DrawerApp from "./components/pure/drawerApp";

//IMPORTACIONES DE ESTADO GLOBAL
import TaskContext from "./context/taskContext";
import taskReducer from "./store/taskReducer";
import filterReducer from "./store/filterReducer";

function App() {
  const [task, dispatchTask] = useReducer(taskReducer, []);
  const [filter, dispatchFilter] = useReducer(filterReducer, "SHOW_ALL");
  const [stateDrawer, setDrawer] = useState(false);

  const valueContext = {
    state: { task, filter },
    dispatch: {
      dispatchTask,
      dispatchFilter,
    },
  };

  useEffect(() => {
    dispatchFilter({ type: "CHANGE_FILTER", payload: "SHOW_COMPLETED" });
    dispatchTask({
      type: "ADD_TASK",
      payload: {
        id: 1,
        name: "Name Tarea 1",
        description: "Tarea 1",
        completed: false,
      },
    });
    dispatchTask({
      type: "ADD_TASK",
      payload: {
        id: 2,
        name: "Name Tarea 2",
        description: "Tarea 2",
        completed: true,
      },
    });
    dispatchTask({
      type: "ADD_TASK",
      payload: {
        id: 3,
        name: "Name Tarea 3",
        description: "Tarea 3",
        completed: true,
      },
    });
    dispatchTask({
      type: "ADD_TASK",
      payload: {
        id: 4,
        name: "Name Tarea 4",
        description: "Tarea 4",
        completed: true,
      },
    });
    dispatchTask({
      type: "ADD_TASK",
      payload: {
        id: 5,
        name: "Name Tarea 5",
        description: "Tarea 5",
        completed: true,
      },
    });
    dispatchTask({
      type: "ADD_TASK",
      payload: {
        id: 6,
        name: "Name Tarea 6",
        description: "Tarea 6",
        completed: true,
      },
    });
  }, []);

  return (
    <>
      <TaskContext.Provider value={valueContext}>
        <NavbarApp />
        <main>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "calc(100vh - 60px)",
              justifyContent: "flex-start",
            }}
          >
            <Grid
              item
              className="imagen-bg"
              // style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover" }}
              sx={{
                width: "100%",
                minHeight: "200px",
              }}
            ></Grid>
            <Grid
              item
              sx={{
                width: "100%",
                flexGrow: 20,
                maxWidth: "40vw",
                marginTop: "-100px",
              }}
            >
              <TaskList toggleDraw={() => setDrawer(!stateDrawer)} />
            </Grid>
          </Grid>
        </main>
        <DrawerApp
          stateDrawer={stateDrawer}
          toggleDraw={() => setDrawer(!stateDrawer)}
        />
      </TaskContext.Provider>
    </>
  );
}

export default App;
