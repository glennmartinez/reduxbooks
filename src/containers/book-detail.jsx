import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  
  render() {
    //this caters for first load
    if(!this.props.book){
      return <div> Select a book player.</div>;
    }
    //now we have the 'active' book from the reducer and action
    return (
      <div>
        <h3>Details for: </h3>
        <div>{this.props.book.title} </div>
         <div>Pages: {this.props.book.pages} </div>
      </div>
    );
  }
}



function mapStateToProps(state) {
  // whatever is returned will show up as props inside booklist
  //this is a global prop from reducers.index
  return {
    book: state.activeBook
  }
  
}

//this binds the boject and state
export default connect(mapStateToProps)(BookDetail);