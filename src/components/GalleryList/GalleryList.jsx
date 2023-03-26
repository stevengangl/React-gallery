import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

//I am giving myself access to the put function 
//with the like prop
//see app.jsx for where it starts its journey
function GalleryList({ list, like, deleteMe }) {
    // console.log('inside GL comp')

    return (
        <>
        <div className='gallery' >
            {list.map((list) => (

                <GalleryItem list={list} like={like} deleteMe={deleteMe} />
            ))
            }
            </div>
        </>
    )
}

export default GalleryList;




