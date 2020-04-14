import React, { useState, ChangeEvent } from 'react';

import Title from './Title';

import styles from './Configuration.module.scss';
import { Options } from './Types';

const Cleaning = (props: { updateConfig: (options: Options) => void }) => {
  const [clicked, setClicked] = useState(false);
  const { updateConfig } = props;

  const handleSelections = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <>
      <Title
        title="Clean data"
        clicked={clicked}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && (
        <div className={styles['box-form']}>
          <label> Start </label>
          <input type="checkbox"></input>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            onChange={handleSelections}
          />
          <label htmlFor="vehicle1"> I have a bike</label>
          <br />
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            onChange={handleSelections}
          />
          <label htmlFor="vehicle2"> I have a car</label>
          <br />
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
            onChange={handleSelections}
          />
          <label htmlFor="vehicle3"> I have a boat</label>
          <br />
        </div>
      )}
    </>
  );
};

export default Cleaning;
