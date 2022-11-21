import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api/Index";
import UseForm from "../hooks/UseForm";
import Center from "./Center";

const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login() {

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(getFreshModel);

    const login = e => {
        if(validate())
            createAPIEndpoint(ENDPOINTS.participant)
                .post(values)
                .then(res => console.log(res))
                .catch(error => console.log(error))
    } 

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    return (    
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{textAlign:'center'}}>
                    <Typography variant='h3' sx={{my:3}}>Quiz App</Typography>
                    <Box sx={{
                        '& .MuiTextField-root':{
                            m:1, // ou margin:!
                            width:'90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit={login}>
                            <TextField
                                label='Email'
                                name="email"
                                variant="outlined"
                                value={values.email}
                                onChange={handleInputChange} 
                                {...(errors.email && { error: true, helperText: errors.email })}
                            />
                            <TextField
                                label='Name'
                                name="name"
                                variant="outlined" 
                                value={values.name}
                                onChange={handleInputChange}
                                {...(errors.name && { error: true, helperText: errors.name })}
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                size='large' 
                                sx={{ width: '90%' }} > 
                                Entrar
                            </Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}