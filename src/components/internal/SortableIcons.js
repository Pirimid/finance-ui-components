import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col } from 'react-bootstrap';

export class SortableIcons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        this.props.currentColumn === this.props.sortedColumn && (this.props.sequence === 1 ? (<i className='fa fa-arrow-down' ></i>) : 
          (this.props.sequence === -1 ? <i className='fa fa-arrow-up' ></i> : ''))
    );
  }
}

// SortableIcons.defaultProps = {
//   currentColumn: '',
//   sortedColumn: '',
//   sequence :  0,
// }

export default SortableIcons;
