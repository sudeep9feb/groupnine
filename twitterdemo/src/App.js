import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import './App.css';
import * as Yup from "yup"
import { Form, FormikProvider, useFormik } from 'formik';

function App() {

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Enter a valid email address").required("Email is required"),
    password: Yup.string().required("Password is required")
  })

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Submitting");
      setTimeout(() => {
        console.log(values.username);
        console.log(values.password);
      }, 2000)
    }
  })

  const { errors, touched, handleSubmit, getFieldProps } = formik

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          maxWidth={"350px"}
          margin="auto"
          marginTop={10}
          boxShadow="3px 3px 3px 3px #ccc"
          sx={{ "&:hover": { boxShadow: "4px 4px 4px 4px #ccc" } }}
          padding={5}

        >
          <Stack direction={"column"} spacing={3}>
            <Typography sx={{ textAlign: "center", color: "#bbb" }} variant='h3'>Login Page</Typography>
            <TextField
              variant='filled'
              label="Username"
              placeholder='PLease enter the username'
              type={"text"}
              {...getFieldProps("username")}
              error={Boolean(touched.username && errors.username)}
              helperText={touched.username && errors.username}
            />
            <TextField
              variant='filled'
              label="Email"
              placeholder='PLease enter the email'
              type={"text"}
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email} />
            <TextField
              variant='filled'
              label="Password"
              placeholder='PLease enter the password'
              type={"password"}
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
            <Button type="submit" sx={{ padding: "10px", borderRadius: "40px" }} variant="contained" ><Typography variant='h5'>Login</Typography></Button>
          </Stack>
        </Box >
      </Form>
    </FormikProvider>


  );
}

export default App;
