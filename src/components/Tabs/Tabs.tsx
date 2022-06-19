import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { StateType, TabsType } from 'types';
import * as actions from 'store/actionCreators';

import classes from './Tabs.module.scss';

interface Props {
  tabs: TabsType[];
  click: (id: number) => void;
}

const Tabs: FC<Props> = ({ tabs, click }) => {
  return (
    <div className={classes.tabs}>
      {/*<button className={classes.btnActive}>dd</button>*/}
      {/*<button className={classes.btn}>sss</button>*/}
      {/*<button className={classes.btn}>ss</button>*/}
      {tabs.map((tab) => {
        return (
          <button key={tab.id} className={tab.isActive ? classes.btnActive : classes.btn} onClick={() => click(tab.id)}>
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
  const { clickActionCreator } = bindActionCreators(actions, dispatch);
  return {
    click: (id: number) => clickActionCreator(id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
