import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
// https://medium.com/canariasjs/creando-componentes-en-react-y-publicando-en-npm-16eee85f9fba

import './index.css';

const Item = ({picture, icon, action}) =>{
    return(
        <div onClick={action} className='container_images'>
            <img alt='' loading='lazy' src={picture} className='pictures' />
            {
                icon&&
                    <Fragment>
                        <div className='card_select' />
                        <img alt='' src={icon} className='card_icon' />
                    </Fragment>
            }
        </div>
    )
}

function Carousel({pictures, direction='left', icon, height=400, width=400, borderRadius=30, space=30, velocity=50, action}){
    useEffect(()=>{
        if(pictures){
            let imagesAux = pictures.concat(pictures);//  combine two arrays
            // let array = Array(pictures.length * 2);
            // array.fill(false)
            // setState(()=> array)

            setImages(()=> imagesAux)
        }
        const auxH = typeof height=='number'? `${height}px`:height
        const auxW = typeof width=='number'? `${width}px`:width
        const auxBr = typeof borderRadius=='number'? `${borderRadius}px`:borderRadius
        const auxSp = typeof space=='number'? `${space}px`:space

        document.documentElement.style.setProperty('--height', `${auxH}`)
        document.documentElement.style.setProperty('--width', `${auxW}`)
        document.documentElement.style.setProperty('--border-radius', `${auxBr}`)
        document.documentElement.style.setProperty('--space', `${auxSp}`)
        document.documentElement.style.setProperty('--velocity', `${velocity}s`)
    },[pictures])

    const [images, setImages] = useState([])
    return (
        <div className='container'>
            <div className={`container_carousel carousel_${direction}`}>
                {
                    images&&
                    images.map((i,j)=>(
                        <Item key={j}
                            picture={i}
                            icon={icon}
                            action={action} />
                    ))
                }
            </div>
        </div>
    );
};

Carousel.propTypes = {
    pictures:       PropTypes.arrayOf(PropTypes.string).isRequired,
    icon:           PropTypes.string,
    direction:      PropTypes.oneOf(['left', 'right']), // This is enum
    height:         PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width:          PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    borderRadius:   PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    space:          PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    velocity:       PropTypes.number,
    action:         PropTypes.func,
}

export default Carousel;