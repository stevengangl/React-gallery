import React, { useState } from "react";

function GalleryItem({ list, like }) {
    console.log('inside gallery item()', list, like)

    const [toggleSwitch, setToggleSwitch] = useState(true)


    const toggleImage = () => {
        setToggleSwitch(!toggleSwitch)
    }

    return (
        <>

            <div className='galleryItems' key={list.id}>

                {
                    toggleSwitch ?
                        <img src={list.path} width='125px' height='125px' onClick={() => toggleImage()} /> :
                        <p onClick={() => toggleImage()}  >{list.description}   </p>
                }

                <p>{list.title}</p>
                <button onClick={() => like(list.id)}>love it!</button>
                <p>{list.likes} people love this</p>
            </div>

        </>

    )
}

export default GalleryItem;