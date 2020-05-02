import React, { useState, ChangeEvent, FormEvent } from "react";

import styles from "./UserInput.module.scss";

type UserInputProps = {
  setUser: Function;
};

const UserInput = ({ setUser }: UserInputProps) => {
  const [user, setLocalUser] = useState("");

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser(user);
      }}
      className={styles["user-input"]}
    >
      <input
        placeholder="Username"
        onChange={(e: ChangeEvent) =>
          setLocalUser((e as ChangeEvent<HTMLInputElement>).target.value)
        }
      ></input>
      <button type="submit" disabled={user.length === 0}>
        Start
      </button>
    </form>
  );
};

export default UserInput;
