import { useState } from "react";
import validation from "./validation";
import styles from "../Form/Form.module.css";

const Form =({login})=>{
    const [userData,setuserData]= useState({
        username:"",
        password:""
    })
    const [errors,setErrors]= useState({
        username:"",
        password:""
    })

    const handleInputChange =(event)=>{
        setuserData({
            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit} className={styles.StyleForm}>
            <label htmlFor="username">Username:</label>
            <input type="text"  name="username" value={userData.username} onChange={handleInputChange} className={styles.InputStyle}/>
            {errors.username && <p>{errors.username} </p>}
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value ={userData.password} onChange={handleInputChange} className={styles.InputStyle} />
            {errors.password && <p>{errors.password} </p>}
            <button className={styles.ButtonStyle}>LOGIN</button>
        </form>
    )
}
export default Form;