import styles from "./Card.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";



export default function Card({id,name,gender,species,image,onClose}) {
   const dispatch = useDispatch(); 
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false);

 const handleFavorite = () =>{
         if(isFav){
            setIsFav(false);
            dispatch(deleteFavorite(id));
         }
         else{
            setIsFav(true);
            dispatch(addFavorite({id,name,gender,species,image,onClose}))
         }
      }

      useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);



   return (
      <div className={styles.box}>
         {
            isFav ? (
                <button onClick={handleFavorite}>❤️</button>
            ) : (
                <button onClick={handleFavorite}>🤍</button>
            )
         }

         <div className={styles.Buttons} onClick={()=>onClose(id)}>X</div>
        <NavLink to={`/detail/${id}`}>
         <h2>Name:{name}</h2>
         </NavLink>
         <img src={image} alt="" className={styles.boxImage}/>

         <h2>Gender:{gender}</h2>
         <h2>Species:{species}</h2>     
      </div>
   );
}
