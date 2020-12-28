import React, { Component } from "react";


 class BookList extends Component{
      
 
      render(){
        
        
    return(
        <div>
        <h2>List</h2>
        <div>{this.props.books.map(book => {
            return (<div>{book.id}<br></br>{book.title}<br></br>{book.author}<br></br>{book.img}</div>)
        })}</div>
        </div>
    )
}
 }
export default BookList