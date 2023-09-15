import React from 'react';

const PokeCard = ({id, image, name, type, _callback }) => {
    const style = type + " card-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}


export default PokemonThumb