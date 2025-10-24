import { useState } from "react";

export const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        /*Forma de actualizar un estado con el valor "previo" a mi actualizacion: por convencion, se le llama "prev" o "prevEstado"
        Esta forma utiliza una funcion con un parametro que siempre traera el ultimo valor del estado
        antes de actualizar con lo nuevo*/
        setUser((prevUser) => ({ ...prevUser, [name]: value }));

        //Forma de actualizar un estado de forma directa:
        // setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Funciona ${user.name} ${user.email} ${user.pass}`)
        setUser({name:"", email:"", pass:""});
    }



    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Ingrese nombre"
            name="name"
            value={user.name}
            onChange={handleChange}
        />
        <input
            type="email"
            placeholder="Ingrese email"
            name="email"
            value={user.email}
            onChange={handleChange}
        />
        <input
            type="password"
            placeholder="Ingrese contraseña"
            name="pass"
            value={user.pass}
            onChange={handleChange}
        />
        <input
            type="submit"
            value={"Enviar"}
        />
    </form>
};

// export default Form;