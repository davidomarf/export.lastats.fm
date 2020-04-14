import React from 'react';
import cx from 'classnames';
import styles from './Title.module.scss';

const Title = (props: {
  title: string;
  onClick: () => void;
  clicked?: boolean;
}) => {
  const { title, clicked, onClick } = props;

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
