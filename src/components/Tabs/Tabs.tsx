import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { StateType, TabsType } from 'types';
import * as actions from 'store/actions';

import classes from './Tabs.module.scss';

interface Props {
  tabs: TabsType[];
  setTab: (id: number) => void;
}

const Tabs: FC<Props> = ({ tabs, setTab }) => {
  return (
    <div className={classes.tabs}>
      {tabs.map((tab) => {
        return (
          <button
            key={tab.id}
            className={tab.isActive ? classes.btnActive : classes.btn}
            onClick={() => setTab(tab.id)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    tabs: state.TabsReducer.tabs,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { setTab } = bindActionCreators(actions, dispatch);
  return {
    setTab: (id: number) => setTab(id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
