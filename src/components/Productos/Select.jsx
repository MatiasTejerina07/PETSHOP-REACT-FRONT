import { Select, Option } from "@material-tailwind/react";

export default function Selects() {
    return (
        <div className="w-56">
            <Select label="Selecciona un filtro">
                <Option>Precio de mayor a menor</Option>
                <Option>Precio de menor a mayor</Option>
                <Option>Ordenar de a Z</Option>
                <Option>Ordenar de Z a</Option>
            </Select>
        </div>
    );
}