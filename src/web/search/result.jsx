import * as React from 'react'

import { Table } from 'antd'
import { Container, Title, ApiValue } from '../atoms'

export const Search = ApiValue((props, ownProps) => {
  },
  result => {
    return (<Container>
      <Title>Results for <strong>"{this.props.query}"</strong></Title>
    </Container>)
  }
)