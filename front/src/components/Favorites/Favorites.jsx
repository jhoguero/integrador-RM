import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div className={styles.containerFavorites}>
      {myFavorites.map((character) => {
        return (
          <div className={styles.box}>
            <NavLink to={`/detail/${character.id}`}>
              <h2>Name:{character.name}</h2>
            </NavLink>
            <img src={character.image} alt="" />

            <h2>Gender:{character.gender}</h2>
            <h2>Species:{character.species}</h2>
            <h2>Status:{character.status}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
