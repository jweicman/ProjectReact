import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = ({titulo}) => {
    // estado
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch("/data/products.json")
        .then((res)=>{
            if(!res.ok) {
                throw new Error("Hubo un problema al buscar productos");
            }
            return res.json();
        })
        .then((data) => {
            setProducts(data);
        }).catch((err)=> {
            console.log(err);
        }
        );
    },[]);
    // llamada

    return ( 
        <section>
        <h1>{titulo}</h1>
        <ItemList lista={products}/>
    </section>
    );
};
