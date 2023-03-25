import React from "react";

function GalleryItem({list}){
    console.log('inside gallery item()',list)



    return (
        <>
            <div className="gallery">

                
                    <div className='galleryItems' key={list.id}>
                        <img src={list.path} width='150px' height='150px' />
                        <p>{list.title}</p>  
                        <button>love it!</button>
                        <p>{list.likes} people love this</p>
                    </div>
                
            </div>




        </>

    )
}

export default GalleryItem;