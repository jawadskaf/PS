import axios from 'axios';
import React, { useState,useEffect } from 'react';
import "../styles.css";
// import SearchPage from '../components/SearchPage'
import SearchBar from 'search-bar-react'
// import SearchField from "react-search-field";

function GameOfThrones(){
    
    const [books, setBooks] = useState(null);
    const [booksFiltered, setBooksFiltered] = useState(null);
    
    const [input, setInput] = useState('');

    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
const SearchPage = (props) => {
    
}
  
    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data)
        setBooksFiltered(response.data)
        console.log(response.data);
        console.log(books)
        console.log(booksFiltered)
        console.log(response.data.authors)
    }

    const updateInput = async (input) => {
        const filtered = books.filter(book => {
            console.log(books)
            console.log(booksFiltered)
            console.log(book)
            console.log(book.name)
            // {books &&
            //     books.map((book, index) => {
            
                    return book.name.includes(input)
        })
        
            // }})
            
        setInput(input);
        setBooksFiltered(filtered);
     }
  
    useEffect( () => {fetchData()},[]);

    return (
        
        <div className="App">
            
          <h1>Game of Thrones Books</h1>
          <SearchBar 
input={input} 
onChange={updateInput}
/>
          <div className="books">
         
            {booksFiltered &&
              booksFiltered.map((book, index) => {
                return (
                    
                  <div className="book" key={index}>
                         
                    <h3>Book Name</h3>
                    <h2>{book.name}</h2>
               
                    <div className="details">
                      <p>👨: {book.authors}</p>
                      <p>📖: {book.numberOfPages}</p>
                      <p>🏘️: {book.country}</p>
                      <p>⏰: {book.released}</p>
                      <p>⏰: {book.publisher}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      );
    }

export default GameOfThrones;




