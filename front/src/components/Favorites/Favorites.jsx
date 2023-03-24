import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import styles from "../Card/Card.module.css";


const Favorites = () => {
  const {myFavorites} = useSelector((state) => state);

  return (
    <div>
      {myFavorites.map((character) => {
        return (
          <div>
            <NavLink to={`/detail/${character.id}`}>
              <h2>Name:{character.name}</h2>
            </NavLink>
            <img src={character.image} alt="" className={styles.boxImage} />

            <h2>Gender:{character.gender}</h2>
            <h2>Species:{character.species}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
