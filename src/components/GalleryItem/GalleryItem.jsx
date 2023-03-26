import React, { useState } from "react";

function GalleryItem({ list, like, deleteMe }) {
    // console.log('inside gallery item()')

    const [toggleSwitch, setToggleSwitch] = useState(true)


    const toggleImage = () => {
        setToggleSwitch(!toggleSwitch)
    }

    return (
        <>

            <div className='galleryItems' key={list.id}>

                {
                    toggleSwitch ?
                        <img className='image' src={list.path} width='125px' height='125px' onClick={() => toggleImage()} /> :
                        <p className='ptag' onClick={() => toggleImage()}  >{list.description}   </p>
                }

                <p>{list.title}</p>
                <button onClick={() => like(list.id)}>love it!</button>
                <button onClick={() => deleteMe(list.id)}>Delete</button>
                <p>{list.likes} people love this</p>
            </div>

        </>

    )
}

export default GalleryItem;