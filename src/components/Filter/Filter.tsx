import React, { FC } from 'react';

import classes from './Filter.module.scss';
import burger from './burger.svg';

const Filter: FC = () => {
  return (
    <div className={classes.filter}>
      <div className={classes.header}>
        <img className={classes.burger} src={burger} alt="Раскрыть фильтер"></img>
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <label className={classes.label}>
        <input className={classes.checkbox} type="checkbox"></input>
        Все
      </label>
      <label className={classes.label}>
        <input className={classes.checkbox} type="checkbox"></input>
        Без пересадок
      </label>
      <label className={classes.label}>
        <input className={classes.checkbox} type="checkbox"></input>1 пересадка
      </label>
      <label className={classes.label}>
        <input className={classes.checkbox} type="checkbox"></input>2 пересадки
      </label>
      <label className={classes.label}>
        <input className={classes.checkbox} type="checkbox"></input>3 пересадки
      </label>
    </div>
  );
};

export default Filter;
