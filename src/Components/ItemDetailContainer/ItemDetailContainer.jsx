import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const {id} = useParams();

    // useEffect(()=> {
    //     fetch("/data/products.json").then(
    //         (res)=>{
    //             if(!res.ok) {
    //                 throw new error("No se encontro el detalle");
                    
    //             };
    //             return res.json();
    //         }
    //     )
    //     .then((data) => {
    //         const found = data.find((p) => p.id === id);
    //         if (found) {
    //             setDetail(found);
    //         } else {
    //             throw new error("No se encontro el detalle");
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log("err");
    //     });
    // },[id]);

 useEffect(()=> {
        getProductById(id)
        .then((data)=> setDetail(data))
        .catch((err)=>{
            console.log("err");
        });
    },[id]);    



    return (
        <main>
             <ItemDetail detail={detail} />
            {/* {Object.keys(detail).length ?(
                <ItemDetail detail={detail} />
            ):(
                <p> Cargando... </p>
            )} */}
        </main>
        );
};