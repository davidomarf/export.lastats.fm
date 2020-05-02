import React from "react";
import cx from "classnames";
import styles from "./Title.module.scss";

type TitleProps = {
  title: string;
  onClick: () => void;
  clicked?: boolean;
};

const Title = ({ title, clicked, onClick }: TitleProps) => {
  return (
    <>
      <div
        className={cx(styles.checkbox, { [styles.clicked]: clicked })}
        onClick={onClick}
      >
        <input type="checkbox" checked={clicked} readOnly></input>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Title;
