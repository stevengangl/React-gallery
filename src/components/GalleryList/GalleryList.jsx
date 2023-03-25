import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ list }) {
    console.log('inside GL comp', list)

    return (
        <>
            {list.map((list) => (


                <GalleryItem list={list} />


            ))
            }

        </>
    )
}

export default GalleryList;




