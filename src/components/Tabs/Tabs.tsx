import React, { FC } from 'react';

import classes from '../Tabs/Tabs.module.scss';

const Tabs: FC = () => {
  return (
    <div className={classes.tabs}>
      <button className={classes.btn}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={classes.btn}>САМЫЙ БЫСТРЫЙ</button>
      <button className={classes.btn}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};

export default Tabs;
