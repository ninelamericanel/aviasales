import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { StateType, TabsType, TicketType } from 'types';
import * as actions from 'store/actionCreators';

import classes from './Tabs.module.scss';

interface Props {
  tabs: TabsType[];
  setTab: (id: number) => void;
  sort: (callback: (id: number) => number) => void;
}

const Tabs: FC<Props> = ({ tabs, setTab, sort }) => {
  const handleClickTab = (id: number) => {
    setTab(id);
  };
  return (
    <div className={classes.tabs}>
      {tabs.map((tab) => {
        return (
          <button
            key={tab.id}
            className={tab.isActive ? classes.btnActive : classes.btn}
            onClick={() => handleClickTab(tab.id)}
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
  const { setTab, sortActionCreator } = bindActionCreators(actions, dispatch);
  return {
    setTab: (id: number) => setTab(id),
    sort: (callback: (id: number) => number) => sortActionCreator(callback),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
