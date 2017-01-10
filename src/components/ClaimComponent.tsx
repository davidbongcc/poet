import { HexString } from '../common'
import ApiComponent, { ApiComponentProps, ApiRequestParams } from './ApiComponent'

export interface ClaimProps extends ApiComponentProps {
  id: HexString
  publicKey: HexString
  signature: HexString
  attributes: any
}

function apiParamsFn(props: any): ApiRequestParams {
  return {
    url: `http://localhost:4000/claims/${props.id}`
  }
}

export default ApiComponent.bind(null, apiParamsFn);