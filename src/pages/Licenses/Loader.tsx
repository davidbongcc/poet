import * as React from 'react';
import { Route } from 'react-router';
import { Saga } from 'redux-saga';

import PageLoader, { ReducerDescription } from '../../components/PageLoader';
import { LicensesLayout } from './Layout';

interface LicensesState {
}

export class Licenses extends PageLoader<LicensesState, Object> {

  component = LicensesLayout;

  initialState() {
    return {};
  }

  routeHook(key: string) {
    return [<Route path="/licenses" key={key} component={this.container()} />]
  }

  reducerHook<State>(): ReducerDescription<LicensesState> {
    return null;
  }

  sagaHook(): Saga {
    return null;
  }

  select(state: any, ownProps: any): Object {
    if (!state.session || !state.session.user || !state.session.user.id)
      return {};

    return { userId: state.session.user.id };
  }
}
