import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

//I am giving myself access to the put function 
//with the like prop
//see app.jsx for where it starts its journey
function GalleryList({ list, like }) {
    console.log('inside GL comp', list, like)

    return (
        <>
        <div class='gallery' >
            {list.map((list) => (

                <GalleryItem list={list} like={like} />
            ))
            }
            </div>
        </>
    )
}

export default GalleryList;




