import React, { useState } from "react";

import styles from "./Configuration.module.scss";

import Period from "./Period";
import Cleaning from "./Cleaning";
import Files from "./Files";
import { Options } from "./Types";

type ConfigurationProps = {
  setConfig: Function;
};

const Configuration = ({ setConfig }: ConfigurationProps) => {
  const defaultConfiguration: Options = {
    cleanData: { duplicatedScrobbles: true }
  };

  // const [config, setConfig] = useState(defaultConfiguration as Options);

  const updateConfig = (options: Options) => {
    // setConfig({ ...config, ...options });
  };

  return (
    <div className={styles["configuration"]}>
      <p>Now you'll configure how you want your data to be downloaded.</p>
      <p>
        Leave the fields empty if you want to use the default configuration.
      </p>
      <Period updateConfig={updateConfig} />
      <Cleaning updateConfig={updateConfig} />
      <Files updateConfig={updateConfig} />
    </div>
  );
};

export default Configuration;
