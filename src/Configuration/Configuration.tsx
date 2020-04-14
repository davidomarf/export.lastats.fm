import React, { useState, useEffect } from 'react';

import styles from './Configuration.module.scss';

import Period from './Period';
import Cleaning from './Cleaning';
import Files from './Files';
import { Options } from './Types';

const Configuration = () => {
  const defaultConfiguration: Options = {
    cleanData: { duplicatedScrobbles: true },
  };

  const [config, setConfig] = useState(defaultConfiguration as Options);

  const updateConfig = (options: Options) => {
    setConfig({ ...config, ...options });
  };

  useEffect(() => {
    console.log(config);
  });

  return (
    <div className={styles['configuration']}>
      <Period updateConfig={updateConfig} />
      <Cleaning updateConfig={updateConfig} />
      <Files updateConfig={updateConfig} />
    </div>
  );
};

export default Configuration;
