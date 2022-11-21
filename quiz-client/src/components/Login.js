import { TextField } from "@mui/material";
import React from "react";

export default function Longin() {
    return (    
        <form noValidate autoComplete="off">
            <TextField
                label='Email'
                name="email"
                variant="outlined"
            />
        </form>
    )
}