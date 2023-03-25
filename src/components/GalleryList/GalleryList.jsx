import React from "react";

function GalleryList({ list }) {
    console.log('inside GL comp', list)

    return (
        <>
            <div className="groupOne">
                {list.map((pic) => (

                    <img src={pic.path} />

                ))}
            </div>




        </>

    )
}

export default GalleryList;


{/* <div id='pic1'>
<img src="images/goat_small.jpg" alt="goat" />
</div>
<div id='pic2'>
<img src="images/aussy_Small.jpeg" alt="goat" />
</div>
<div id='pic3'>
<img src="images/psilocybin_Small.jpeg" alt="goat" />
</div> */}