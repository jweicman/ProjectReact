import { useState } from "react";
export const Form = () => {
    // const [user, setUser] = useState({
    //     name:"", 
    //     email:"", 
    //     password:"",
    // });
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Funcion ${nombre} ${email} ${pass}`)
        setNombre("");
        setEmail("");
        setEmail("");
    }

    return <form onSubmit={handleSubmit}> 
    <input type="text" placeholder="Ingrese nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
    <input type="email" placeholder="Ingrese email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder="Ingrese contraseña" name="pass" value={pass} onChange={(e) => setPass(e.target.value)}/>
    <input type="submit" value={"Enviar"} />
    </form>
};

