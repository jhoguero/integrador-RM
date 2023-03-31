import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  
  const Location = useLocation();
  
  const navigate = useNavigate();

  const [characters,setCharacters]= useState([]);
   const [access,setAccess]= useState(false);

   const username = "nombre@gmail.com";
   const password = "123asd"

   const login = (userData)=>{
      if(userData.username === username && userData.password === password){
         setAccess(true)
         navigate("/home");
      }
   }
   useEffect(()=>{
      !access && navigate("/")
   },[access])


  const onSearch = (id) => {
    const URL_BASE = `http://localhost:3001/rickandmorty`;
   /*  const KEY = "d3d9a36d85fe.fe8f603fd403c451414a"; */

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldchars) => [...oldchars, data]);
        } else {
          alert("Carta duplicada");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <h1 className="title">RICK AND MORTY CARDS</h1>
      <div>
      {Location.pathname === "/" ? <Form login={login}/>:<Nav onSearch={onSearch} />}
      </div>
      <Routes>
       <Route path="/home" element= {<Cards characters={characters} onClose={onClose}/>}/>
       <Route path="/about" element= {<About />} />
       <Route path = "/detail/:detailId" element= {<Detail />} />
       <Route path = "/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
