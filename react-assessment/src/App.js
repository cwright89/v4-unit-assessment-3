import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import './App.css';
import { Component } from 'react';
import data from './data';

class App extends Component{
  constructor(){
    super()
    this.state ={
      books: data
    }
    
  }
  
  render() {
  return (
    <div className="App">
      <Header class="Header"/>
      <BookList class="BookList" books={this.state.books}/>
      <Shelf class="Shelf"/>
    </div>
  );
}
}

export default App;
