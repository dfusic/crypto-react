import React, { Component } from 'react';
import CryptoOutput from './Components/CryptoOutput';
import { Container, Row } from 'reactstrap';
import './App.css';

class App extends Component {
  state = {
    cryptoList: [],
    currentCrypto: '',
    ready: true
  }
  GetLatestCrypto = () => {
   fetch('https://api.coinmarketcap.com/v2/ticker/?limit=9')
    .then((response)=>{
      return response.json();
      
    }).then((myjson)=>{
      //get all object values from API
      let cryptoList = Object.values(myjson.data);
      //array that will store object values
      let cryptoListArr = [];
      //loop through objects and push object value to array
      cryptoList.map((cryptoObject)=>{
        cryptoListArr.push(cryptoObject);
        return cryptoListArr;
      })
      //state is equal to new crypto array
      this.setState({
        cryptoList: cryptoListArr
      })
    })
  }
  // when component mounts, invoke API and get data
  componentDidMount(){
    this.GetLatestCrypto();
  }

  render() {
    let cryptoOutput = null;
    if(this.state.cryptoList.length>0){
      cryptoOutput = (
        this.state.cryptoList.map((obj)=>{
          return <CryptoOutput 
          key={obj.id}
          crypto={obj.name}
          price={obj.quotes.USD.price}
          symbol={obj.symbol}
          />
        })
      )
    }
    return (
      <Container>
        <Row>
          {cryptoOutput}
        </Row>
      </Container>
    );
  }
}

export default App;
