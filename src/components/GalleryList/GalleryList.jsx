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
                            // had to add key for the component to be able to tell them apart
                <GalleryItem  key={list.id} list={list} like={like} deleteMe={deleteMe} />
            ))
            }
            </div>
        </>
    )
}

export default GalleryList;




