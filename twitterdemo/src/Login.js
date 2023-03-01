import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import * as Yup from "yup"
import { useFormik } from 'formik';

function Login() {
    const loginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required").min(5, "no less than 5 characters"),
        email: Yup.string().email("Enter a valid email address").required("Email is required"),
        password: Yup.string().required("Password is required").max(10, "no more than 10 characters")
            .matches(/[@$!%*#?&]+/, "One special character")
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
    return (
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
            <form onSubmit={formik.handleSubmit}>
                <Stack direction={"column"} spacing={3}>
                    <Typography sx={{ textAlign: "center", color: "#bbb" }} variant='h3'>Login Page</Typography>
                    <TextField
                        variant='filled'
                        label="Username"
                        name="username"
                        placeholder='PLease enter the username'
                        type={"text"}
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.username && formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                        variant='filled'
                        label="Email"
                        placeholder='PLease enter the email'
                        type={"email"}
                        name="email"
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />
                    <TextField
                        variant='filled'
                        label="Password"
                        placeholder='PLease enter the password'
                        type={"password"}
                        name="password"
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button type="submit" sx={{ padding: "10px", borderRadius: "40px" }} variant="contained" >
                        <Typography variant='h5'>Login</Typography>
                    </Button>
                </Stack>
            </form>
        </Box >)
}

export default Login