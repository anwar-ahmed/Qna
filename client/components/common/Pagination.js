import React, { Component } from 'react';
import './Common.css';
import {Pagination} from 'react-bootstrap';


class extPagination extends Component {
  handleSelect = (eventKey) => {
    this.props.handleSelect(eventKey);
  }

  render()
  {
    return(
      <div className='Pagination-style'>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          bsSize='small'
          items={Math.ceil(this.props.total / this.props.items)}
          maxButtons={4}
          activePage={this.props.activePage}
          onSelect={this.handleSelect} />
      </div>
    );
  }
}


export default extPagination;