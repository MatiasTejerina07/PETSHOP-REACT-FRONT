import { Input } from "@material-tailwind/react";

export default function Inputs({ nombre, placeholder, value, type }) {
    return (
        <div className="w-full">
            <Input type={type} label={nombre} placeholder={placeholder} value={value} required />
        </div>
    );
}