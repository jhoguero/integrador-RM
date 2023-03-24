import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Card/Card.module.css";
import axios from "axios"

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "http://localhost:3001/rickandmorty/detail/";
    /* const KEY = "d3d9a36d85fe.fe8f603fd403c451414a"; */

    axios(`${URL_BASE}/character/${detailId}`).then((response) =>
      setCharacter(response.data)
    );
  
  }, []);

  return (
    <div className={styles.backBox}>
      {character.name ? (
        <div className={styles.boxDetail}>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
