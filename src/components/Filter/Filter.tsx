import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { CheckboxType } from 'types';

import { InitialStateType } from '../../store/initialState';

import classes from './Filter.module.scss';
import burger from './burger.svg';

interface Props {
  checkboxes: CheckboxType[];
  check: (id: number) => void;
  checkAll: () => void;
  checkAutomatic: () => void;
  checkboxAll: boolean;
}

const Filter: FC<Props> = ({ checkboxes, checkAutomatic, checkboxAll, check, checkAll }) => {
  useEffect(() => {
    const checkedCheckboxes = checkboxes.map((item) => item.isChecked);
    if (!checkedCheckboxes.includes(false)) checkAutomatic();
  }, [checkboxes]);
  return (
    <div className={classes.filter}>
      <div className={classes.header}>
        <img className={classes.burger} src={burger} alt="Раскрыть фильтер" />
        <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      </div>
      <label className={checkboxAll ? classes.labelActive : classes.label}>
        <input className={classes.checkbox} type="checkbox" onChange={checkAll} />
        Все
      </label>
      {checkboxes.map((checkbox) => {
        return (
          <label key={checkbox.id} className={checkbox.isChecked ? classes.labelActive : classes.label}>
            <input className={classes.checkbox} type="checkbox" onChange={() => check(checkbox.id)} />
            {checkbox.name}
          </label>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: InitialStateType) => {
  return {
    checkboxes: state.checkboxes,
    checkboxAll: state.checkboxAll,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    check: (id: number) => dispatch({ type: 'CHECK', id }),
    checkAll: () => dispatch({ type: 'CHECK_ALL' }),
    checkAutomatic: () => dispatch({ type: 'CHECK_AUTOMATIC' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
