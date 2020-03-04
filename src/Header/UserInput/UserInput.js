import React from "react";

import styles from "./UserInput.module.scss"

const Header = () => {
    return(
        <div className = {styles["user-input"]}>
            <input placeholder="Username"></input>
            <button>Start</button>
        </div>
    )
}

export default Header;
