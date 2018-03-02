/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import OrderBook from './components/OrderBook';
import './styles/styles.scss';

const props = {
  asks: [
    { size : 0.01879000 , price : 11235.123356, mySize : 2.90908766 , exchange : 'GDAX' },
    { size : 0.02279837 , price : 11230.113344, mySize : 2.90909000 , exchange : 'GDAX' },
    { size : 0.05579837 , price : 11230.113322, mySize : 2.90909087 , exchange : 'Bitfinex' },
    { size : 0.01879000 , price : 11229.113311, mySize : 2.90908766 , exchange : 'Binance' },
    { size : 0.02279837 , price : 11222.123344, mySize : 2.90909000 , exchange : 'Bittrex' },
    { size : 0.05579837 , price : 11212.123322, mySize : 2.90909087 , exchange : 'Bitfinex' },
    { size : 0.01879000 , price : 11212.123316, mySize : 2.90908766 , exchange : 'Krakan' },
    { size : 0.02279837 , price : 11211.123344, mySize : 2.90909000 , exchange : 'CEX.IO' },
    { size : 0.05579837 , price : 11210.123322, mySize : 2.90909087 , exchange : 'GDAX' },
    { size : 0.01279837 , price : 11207.123312, mySize : 2.90909099 , exchange : 'Bitfinex' },
    { size : 0.13879837 , price : 11204.123300, mySize : 2.90909022 , exchange : 'Krakan' },
    { size : 0.01279837 , price : 11203.123312, mySize : 2.90909099 , exchange : 'Bittrex' },
    { size : 0.13879837 , price : 11201.123300, mySize : 2.90909022 , exchange : 'HitBTC' },
    { size : 0.01279837 , price : 11200.123312, mySize : 2.90909099 , exchange : 'GDAX' },
    { size : 0.01879000 , price : 11200.123006, mySize : 2.90908766 , exchange : 'Binance' },
    { size : 0.02279837 , price : 11200.120000, mySize : 2.90909000 , exchange : 'GDAX' }
  ],
  bids: [
    { size : 0.02279837 , price : 11320.123344, mySize : 2.90909000 , exchange : 'CEX.IO' },
    { size : 0.05579837 , price : 11318.123322, mySize : 2.90909087 , exchange : 'GDAX' },
    { size : 0.01279837 , price : 11318.123312, mySize : 2.90909099 , exchange : 'Bitfinex' },
    { size : 0.13879837 , price : 11318.123300, mySize : 2.90909022 , exchange : 'Krakan' },
    { size : 0.01279837 , price : 11316.123312, mySize : 2.90909099 , exchange : 'Bittrex' },
    { size : 0.13879837 , price : 11313.123300, mySize : 2.90909022 , exchange : 'HitBTC' },
    { size : 0.01279837 , price : 11313.123312, mySize : 2.90909099 , exchange : 'GDAX' },
    { size : 0.01879000 , price : 11307.123356, mySize : 2.90908766 , exchange : 'Binance' },
    { size : 0.01879000 , price : 11329.123356, mySize : 2.90908766 , exchange : 'GDAX' },
    { size : 0.02279837 , price : 11324.123344, mySize : 2.90909000 , exchange : 'GDAX' },
    { size : 0.05579837 , price : 11324.123322, mySize : 2.90909087 , exchange : 'Bitfinex' },
    { size : 0.01879000 , price : 11324.123356, mySize : 2.90908766 , exchange : 'Binance' },
    { size : 0.02279837 , price : 11323.123344, mySize : 2.90909000 , exchange : 'Bittrex' },
    { size : 0.05579837 , price : 11323.123322, mySize : 2.90909087 , exchange : 'Bitfinex' },
    { size : 0.01879000 , price : 11322.123356, mySize : 2.90908766 , exchange : 'Krakan' },
    { size : 0.02279837 , price : 11305.123344, mySize : 2.90909000 , exchange : 'GDAX' },
  ],
  askExtraColumns : [
    {label : 'Exchange', value : function(data) { return data.exchange }, onClick : function(data) { debugger; } },
  ],
  bidExtraColumns : [
    {label : 'Exchange', value : function(data) { return data.exchange }, onClick : function(data) { debugger; }},
  ],  
}

render(
  <AppContainer>
    <div style={{width:'30%', height: 300}} >
      <OrderBook  {...props} />
    </div>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/OrderBook', () => {
    const NewRoot = require('./components/OrderBook').default;
    render(
      <AppContainer>
      <div style={{width:'30%', height: 300}} >
        <NewRoot {...props} />
      </div>  
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
