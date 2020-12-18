import React, { Component } from "react";


 class BookList extends Component{
   constructor () {
       super();
       this.state = {
           
       }
   }
     
     
    render(){
        let list = this.props.books.map([id,title,author,image]) 
        
    return(
        <div>
        <div>List</div>
        <div>{list}</div>
        </div>
    )
}
 }
export default BookList