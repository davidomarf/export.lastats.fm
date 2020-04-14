import React, { useState, ChangeEvent } from 'react';

import Title from './Title';

import styles from './Configuration.module.scss';
import { Options } from './Types';

const Files = (props: { updateConfig: (options: Options) => void }) => {
  const [clicked, setClicked] = useState(false);
  const [numberOfFiles, setNumberOfFiles] = useState(0);
  const [sizeOfFiles, setSizeOfFiles] = useState(0);

  const { updateConfig } = props;

  const handleNumberOfFiles = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfFiles(Number(e.target.value));
    updateConfig({
      fileSeparation: { number: numberOfFiles },
    });
  };

  const handleSizeOfFiles = (e: ChangeEvent<HTMLInputElement>) => {
    setSizeOfFiles(Number(e.target.value));
    updateConfig({
      fileSeparation: { size: sizeOfFiles },
    });
  };

  return (
    <>
      <Title
        title="Separate in files"
        clicked={clicked}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && (
        <div className={styles['box-form']}>
          <label>
            <input type="radio" id="number" name="by" value="number" />
            By number of files
            <input
              type="number"
              min="0"
              onChange={handleNumberOfFiles}
              placeholder={numberOfFiles.toString()}
              disabled={sizeOfFiles > 0}
            ></input>
          </label>
          <label>
            <input type="radio" id="size" name="by" value="size" />
            By size of files
            <input
              type="number"
              min="0"
              onChange={handleSizeOfFiles}
              placeholder={sizeOfFiles.toString()}
              disabled={numberOfFiles > 0}
            ></input>
          </label>
        </div>
      )}
    </>
  );
};

export default Files;
