import React from 'react';
import {Col} from 'reactstrap';
import './CryptoOutput.css';

const CryptoOutput = props => {
  return (
   <Col md="4" sm="6" xs="12">
   <div className="CryptoOutput">
   <h1>{props.crypto}</h1>
   <p className="price">{props.price}$</p>
   <p className="symbol">{props.symbol}</p>
   </div>
   </Col>
  );
}

export default CryptoOutput;