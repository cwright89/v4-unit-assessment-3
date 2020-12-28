import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import './App.css';
import { Component } from 'react';
import data from './data';

class App extends Component{
  constructor(){
    console.log(data)
    super()
    this.state ={
      books: data
    }
    
  }
  
  render() {
    console.log(this.state.data)
  return (
    <div className="App">
      <Header />
      <BookList  books={this.state.books}/>
      <Shelf />
    </div>
  );
}
}

export default App;
