import React from 'react';





function BannerComponent({type ,src}){
    return(

        <img className = {type} src = {src}>
        </img>
    )
}

export default BannerComponent;

