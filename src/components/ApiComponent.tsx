import * as React from "react";
import * as Constants from '../constants';
import { connect } from 'react-redux';

export type ApiParamsFn = (props: any) => ApiRequestParams;
export type RenderFn = (props: any) => JSX.Element;

export interface ApiRequestParams {
  url: string;
}

export interface ApiComponentProps {
  error: any
  loading: any
  apiParamsFn: ApiParamsFn
  draw: RenderFn
  dispatchRequest: (payload: any) => void
}

class ApiComponent<T extends ApiComponentProps, S> extends React.Component<T, S> {

  componentWillMount() {
    this.fetchIfNeeded(this.props);
  }

  componentWillReceiveProps(newProps: T) {
    this.fetchIfNeeded(newProps);
  }

  fetchIfNeeded(props: T) {
    if (!props.loading && !props.error) {
      props.dispatchRequest(this.props.apiParamsFn(props));
    }
  }

  renderLoading() {
    return <span>Loading...</span>;
  }

  renderError() {
    return <span>{this.props.error}</span>;
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    }
    if (this.props.error) {
      return this.renderError();
    }
    return this.props.draw(this.props);
  }

}

function mapStateToProps(apiParamsFn: ApiParamsFn, renderFn: RenderFn, state: any, ownProps: any) {
  console.log('ApiComponent.mapStateToProps', state);
  return {
    ...state.fetch.claim, ...ownProps, apiParamsFn, draw: renderFn
  };
}

export default (apiParamsFn: ApiParamsFn, renderFn: RenderFn) =>
  connect(mapStateToProps.bind(null, apiParamsFn, renderFn), {
    dispatchRequest: (payload) => ({ type: Constants.fetchRequest, payload })
  })(ApiComponent);