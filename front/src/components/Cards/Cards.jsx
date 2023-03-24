import Card from '../Card/Card';
import styles from "./Cards.module.css";

export default function Cards({characters, onClose}) {
   
   return(
      <div className={styles.boxContainer}>
         {characters.map(({id,name,gender,species,image}) =>{
               return(
               <Card
               id = {id}
               name={name}
               gender={gender}
               species={species}
               image={image}
               onClose={onClose}
               />
               );
            })}

      </div>
   );
}
