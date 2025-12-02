import { CartContext } from "./CartContext";
import { useState } from "react";


export const CartProvider = ({children}) => {
const [cart,setCart] = useState([]);

const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
};

const addItem = (item) => {
    if (exists(item.id)) {
        // alert("El producto ya existe en el carrito");
        // return;
        const updatedCart = cart.map((prod) => {
            if (prod.id === item.id) {
                return {...prod, quantity: prod.quantity+item.quantity};
            }else {
                return prod;
            }            
        });
        setCart(updatedCart);
        alert("Agregado al carrito");
    }else {

    setCart([...cart, item]);
    alert(`${item.name} agregado`);
    }
};

const clearCart = () => {
    setCart([]);
};

const deletedItem = (id) => {
    const filtered = cart.filter((p)=> p.id!==id);
    setCart(filtered);
    alert("Producto eliminado");
}

const getTotalItems = () => {
    // if (cart.length) {
    //     return cart.length;
    // };
    const totalItems = cart.reduce((acc,p)=> acc + p.quantity,0);
    return totalItems;
};

const total = () =>{
    const total = cart.reduce((acc,p)=>acc+p.price*p.quantity,0);

    return Math.round(total*100/100);
};

const checkOut = () => {
    const ok = confirm("Desea terminar la compra?");
    clearCart();
}
const values = {cart, addItem, clearCart, getTotalItems, deletedItem,total, checkOut};


    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};