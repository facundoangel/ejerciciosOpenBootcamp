import Drawer from "@mui/material/Drawer";
import { actionsTask } from "../../store/action";
import { useContext } from "react";
import TaskContext from "../../context/taskContext";
import { Box } from "@mui/system";
import { Input, Spacer, Button, Text, Badge } from "@nextui-org/react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function DrawerApp({ stateDrawer, toggleDraw }) {
  const dispatchTask = useContext(TaskContext).dispatch.dispatchTask;

  const objectValidationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  //return a number random between 1 and 100
  const randomId = () => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <Drawer
      anchor="left"
      open={stateDrawer}
      onClose={toggleDraw}
      sx={{ position: "relative" }}
    >
      <CancelIcon
        onClick={toggleDraw}
        sx={{
          position: "absolute",
          right: "7px",
          top: "7px",
          cursor: "pointer",
        }}
      />
      <Box
        sx={{
          px: 5,
          py: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Text h2>Complete the Task's Fields</Text>
        <Spacer y={3} />

        {/* ================== IMPLEMENTACION FORMIK===================================== */}

        <Formik
          initialValues={{ name: "", description: "" }}
          validationSchema={objectValidationSchema}
          onSubmit={(values) => {
            dispatchTask({
              type: actionsTask.ADD_TASK,
              payload: { ...values, id: randomId() },
            });
            toggleDraw();
          }}
        >
          {() => (
            <Form>
              <Field name="name">
                {({ field, form: { touched, errors } }) => (
                  <>
                    <Input
                      name="name"
                      clearable
                      underlined
                      labelPlaceholder="Task' Name"
                      css={{ minWidth: "300px" }}
                      {...field}
                    />
                    {errors && touched && (
                      <ErrorMessage name="name">
                        {(msg) => (
                          <>
                            <Spacer y={0.5} />
                            <Badge color="error" variant="bordered">
                              {msg}
                            </Badge>
                          </>
                        )}
                      </ErrorMessage>
                    )}
                  </>
                )}
              </Field>

              <Spacer y={2} />
              <Field type="text" name="description">
                {({ field, form: { errors, touched } }) => (
                  <>
                    <Input
                      clearable
                      underlined
                      labelPlaceholder="Task' Description"
                      css={{ minWidth: "300px" }}
                      {...field}
                    />
                    {errors && touched && (
                      <ErrorMessage name="description">
                        {(msg) => (
                          <>
                            <Spacer y={0.5} />
                            <Badge color="error" variant="bordered">
                              {msg}
                            </Badge>
                          </>
                        )}
                      </ErrorMessage>
                    )}
                  </>
                )}
              </Field>

              <Spacer y={3} />
              <Button type="submit" shadow color="gradient" auto>
                Add Task
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
  );
}
