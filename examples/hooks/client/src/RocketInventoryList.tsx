import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Row, Col } from 'reactstrap';

const GET_ROCKET = gql`
 query getRocket ($id: ID) {
  rocket(id: $id) {
    model
    year
    stock
  }
}
`;

export function RocketInventoryList() {
  const { loading, data } = useQuery(GET_ROCKET, {fetchPolicy: 'no-cache', variables: {id: 1}});
  const { loading: loading2, data: data2 } = useQuery(GET_ROCKET, {fetchPolicy: 'no-cache', variables: {id: 1}});
  debugger;
  return (
    <Row className="rocket-inventory-list mt-4">
      <Col sm="12">
        <div>{loading || loading2 ? 'loading...' : <div>{data.rocket.model} {data2.rocket.model}</div>}</div>
      </Col>
    </Row>
  );
}
