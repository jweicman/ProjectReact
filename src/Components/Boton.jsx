export const Boton = ({texto, color}) => {
    const estilos = {
        backgroundolor : color,
        color:"white"
    }

    return <button style={estilos}>{texto}</button>
};

