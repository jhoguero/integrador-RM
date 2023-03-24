import React from "react";
import {NavLink} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={styles.navBar}>
        <SearchBar onSearch={this.props.onSearch} />
        <div className={styles.links}>
          <NavLink to="/about" className={styles.links}>
              <span>About</span>
          </NavLink>
          <NavLink to="/" className={styles.links}><span>logout</span></NavLink>
          <NavLink to="/home" className={styles.links}><span>Home</span></NavLink>   
          <NavLink to="/favorites" className={styles.links}><span>Favorites</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;


