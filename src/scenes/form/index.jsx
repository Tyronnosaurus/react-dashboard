import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    adress1: "",
    adress2: ""
}

// Regex to validate phone numbers
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2-4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// This ensures fields enforce rules (a certain format, whether or not they are required...) and what message to show when a rule is not followed
const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    adress1: yup.string().required("required"),
    adress2: yup.string().required("required")
})


const Form = () => {

    const isNonMobile = useMediaQuery("(min-width:600px");

    const handleFormSubmit = (values) => {console.log(values)}  // For now we don't do anything important with the submitted form data

    return(
        <Box margin="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile">
                <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                 sx={{
                                    "& > div": {gridColumn: isNonMobile ? undefined : "span 4"},    /* 4 columns */
                                 
                                 }}>
                                {/* The error attribute uses !! to cast to bool, and show error when user clicks on field */}
                                <TextField fullWidth variant="filled" type="text" label="First Name" onBlur={handleBlur} onChange={handleChange}
                                           value={values.firstName} name="firstName" error={!!touched.firstName && !!errors.firstName}
                                           helperText={touched.firstName && errors.firstName} sx={{gridColumn: "span 2"}}/>

                                <TextField fullWidth variant="filled" type="text" label="Last Name" onBlur={handleBlur} onChange={handleChange}
                                           value={values.lastName} name="lastName" error={!!touched.lastName && !!errors.lastName}
                                           helperText={touched.lastName && errors.lastName} sx={{gridColumn: "span 2"}}/>

                                <TextField fullWidth variant="filled" type="text" label="Email" onBlur={handleBlur} onChange={handleChange}
                                           value={values.email} name="email" error={!!touched.email && !!errors.email}
                                           helperText={touched.email && errors.email} sx={{gridColumn: "span 4"}}/>

                                <TextField fullWidth variant="filled" type="text" label="Contact number" onBlur={handleBlur} onChange={handleChange}
                                           value={values.contact} name="contact" error={!!touched.contact && !!errors.contact}
                                           helperText={touched.contact && errors.contact} sx={{gridColumn: "span 4"}}/>

                                <TextField fullWidth variant="filled" type="text" label="Address 1" onBlur={handleBlur} onChange={handleChange}
                                           value={values.address1} name="address1" error={!!touched.address1 && !!errors.address1}
                                           helperText={touched.address1 && errors.address1} sx={{gridColumn: "span 4"}}/>

                                <TextField fullWidth variant="filled" type="text" label="Address 2" onBlur={handleBlur} onChange={handleChange}
                                           value={values.address2} name="address2" error={!!touched.address2 && !!errors.address2}
                                           helperText={touched.address2 && errors.address2} sx={{gridColumn: "span 4"}}/>
                            </Box>
                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button type="submit" color="secondary" variant="contained">
                                    Create New User
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Header>
        </Box>
    )

}

export default Form;