import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col } from 'react-bootstrap';
import SortableIcons from './SortableIcons'
import Numeral from 'numeral'

export class OrderTable extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ askColWidth : (100/(this.props.extraColumns.length + 2)) + '%' });    
    this.setState({ items : Object.assign([], this.props.items)});
  }

  componentWillReceiveProps( newPros ) {
    if( newPros.extraColumns.length !== this.props.extraColumns.length ) {
     this.setState({ askColWidth : (100/(newPros.extraColumns.length + 2)) + '%' });
    }
    if( newPros.items.length !== this.props.items.length || newPros.items[0] !== this.props.items[0] ) {
      this.setState({ items : Object.assign([],this.props.items) });
    }  
  }

  enableSorting = (column) => {
    return (() => {
      if(column.sortable ) {
        let sequence = 1;
        if(this.state.sortedColumn === column ) {
          if(this.state.sequence === 0) {
            sequence = 1;
          } else if(this.state.sequence === 1) {
            sequence = -1;
          } else if(this.state.sequence === -1) {
            sequence = 0;
          }  
        }
        this.setState({ sortedColumn : column, sequence : sequence });
      }
    }).bind(this)
  }

  render() {

    let items = this.props.items;
    if(this.state.sortedColumn && this.state.sequence !== 0) {
      items = this.state.items.sort((a, b) => {
        let x,y;
        if( typeof this.state.sortedColumn.value(a) === "string" ) {
          x = this.state.sortedColumn.value(a).toUpperCase();
          y = this.state.sortedColumn.value(b).toUpperCase();
        } else if( typeof this.state.sortedColumn.value(a) === "number" ) {
          x = this.state.sortedColumn.value(a);
          y = this.state.sortedColumn.value(b);
        }

        if( x > y ) {
          return this.state.sequence;
        } else if( x < y )  {
          return -1 * this.state.sequence;
        } else {
          return 0;
        }

      });
    }

    return (
      <div >
        <div className="card-panel-header clearfix">
          <div className="pull-left" onClick={this.enableSorting(this.props.sizeColumn)} style={{width: this.state.askColWidth}}>
            <label >
              {this.props.sizeColumn.label}
              <SortableIcons 
                currentColumn={this.props.sizeColumn.label} 
                sortedColumn={this.state.sortedColumn && this.state.sortedColumn.label} 
                sequence ={this.state.sequence} />
            </label>
          </div>
          <div className="pull-left" onClick={this.enableSorting(this.props.priceColumn)} style={{width: this.state.askColWidth}} >
            <label >
              {this.props.priceColumn.label}
              <SortableIcons 
                currentColumn={this.props.priceColumn.label} 
                sortedColumn={this.state.sortedColumn && this.state.sortedColumn.label} 
                sequence ={this.state.sequence} />
            </label>
            </div>
          {this.props.extraColumns.map((column, i) => (
            <div className="pull-left" onClick={this.enableSorting(column)} key={i} style={{width: this.state.askColWidth}}>
              <label >
                {column.label}
                <SortableIcons 
                  currentColumn={column.label} 
                  sortedColumn={this.state.sortedColumn && this.state.sortedColumn.label} 
                  sequence ={this.state.sequence} />
              </label>
            </div>
          ))}
        </div>
        <div className="card-panel-body">
          {items.map((object, rowIndex) => (
            <div key={rowIndex} className="card-panel-body-rows clearfix">
              <div className="pull-left" style={{width: this.state.askColWidth}}>
                <span onClick={this.props.sizeColumn.onClick} >{Numeral(this.props.sizeColumn.value(object)).format(this.props.sizeColumn.format)}</span>
              </div>
              <div className="pull-left" style={{width: this.state.askColWidth}}>
                <span onClick={this.props.priceColumn.onClick} >{this.props.priceColumn.value(object)}</span>
              </div>

              {this.props.extraColumns.map((column, colIndex) => (
                <div key={colIndex} className="pull-left" style={{width: this.state.askColWidth}}>
                  <span onClick={column.onClick} >{column.value(object)}</span>
                </div>
              ))}
            </div>))}
        </div>
      </div>
    );
  }
}

// OrderTable.defaultProps = {
//   items: [],
//   sizeColumn: {label : 'Ask Size', value : getters.getSize, onClick : () => {}, shorting : false},
//   priceColumn :  {label : 'Ask Price', value : getters.getPrice, onClick : () => {}},
//   extraColumns : [],
// }

export default OrderTable;
