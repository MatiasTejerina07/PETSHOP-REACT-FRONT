import { Input } from "@material-tailwind/react";
import React from "react";

export default function Inputs({ nombre, placeholder, value, type, onChange, clases }) {
    return (
        <div className="w-full">
            <Input
                type={type}
                label={nombre}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}




