import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { CheckboxType, StateType } from 'types';
import * as actions from 'store/actionCreators';

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

const mapStateToProps = (state: StateType) => {
  return {
    checkboxes: state.FilterReducer.checkboxes,
    checkboxAll: state.FilterReducer.checkboxAll,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { checkActionCreator, checkAllActionCreator, checkAutomaticActionCreator } = bindActionCreators(
    actions,
    dispatch
  );
  return {
    check: (id: number) => checkActionCreator(id),
    checkAll: checkAllActionCreator,
    checkAutomatic: checkAutomaticActionCreator,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
