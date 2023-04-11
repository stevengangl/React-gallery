import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import GalleryList from "../GalleryList/GalleryList";

function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setGalleryList(response.data)
        // console.log('in get looking at photos:', galleryList)
      })
      .catch((error) => {
        alert('alert')

      })
  }
  // {i am passing this put function as a prop}
  const addLike = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then(response => {
        getPhotos()
      })
      .catch(error => {
        alert('error')
        console.log('error', error)
      })
  }

  const deleteItem = (id) => {
    axios
      .delete(`/gallery/delete/${id}`)
      .then((response) => {
        console.log(response)
        getPhotos();
      })
      .catch((error) => {
        console.log('error')
      });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      {/* like={addLike} is passing the function as a prop */}
      <GalleryList list={galleryList} like={addLike} deleteMe={deleteItem}/>
    </div>
  );
}

export default App;
