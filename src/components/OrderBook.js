import React from 'react';
import PropTypes, { object } from 'prop-types';
import {Grid, Row, Col } from 'react-bootstrap';
import * as getters from '../utils/getters';
import OrderTable from './internal/OrderTable';

const askSize = {label : 'Ask Size', value : getters.getSize, sortable : false};
const askPrice = {label : 'Ask Price', value : getters.getPrice, sortable : true};
const bidSize = {label : 'Bid Size', value : getters.getSize, sortable : false};
const bidPrice = {label : 'Bid Price', value : getters.getPrice, sortable : true};

export class OrderBook extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let askSizeColumn = Object.assign({}, askSize, this.props.askSize);
    let askPriceColumn = Object.assign({}, askPrice, this.props.askPrice);
    let bidSizeColumn = Object.assign({}, bidSize, this.props.bidSize);
    let bidPriceColumn = Object.assign({}, bidPrice, this.props.bidPrice);
    this.setState({askSizeColumn, askPriceColumn, bidSizeColumn, bidPriceColumn});    
  }

  componentWillReceiveProps( newPros ) {
  }

  render() {
    return (
      <div className="card">
        <div className="card-title" >
          {this.props.headerText}
        </div>
        <div>
          <OrderTable 
            className={this.props.verticalLayout ? '' : "width-50 display-inline-block"}
            items={this.props.asks} 
            sizeColumn={this.state.askSizeColumn}
            priceColumn={this.state.askPriceColumn}
            extraColumns={this.props.askExtraColumns} 
          />
          <OrderTable 
            className={this.props.verticalLayout ? '' : "width-50 display-inline-block"}
            items={this.props.bids} 
            sizeColumn={this.state.bidSizeColumn} 
            priceColumn={this.state.bidPriceColumn} 
            extraColumns={this.props.bidExtraColumns} 
          />
        </div>
      </div>
    );
  }
}

OrderBook.defaultProps = {
  headerText: 'Order Book',
  sizeFormat: '0.00000000',
  priceFormat: '00.00',
  verticalLayout: false,
  spreadText: 'SPREAD',
  spreadFormat: '0.00',
}

export default OrderBook;
