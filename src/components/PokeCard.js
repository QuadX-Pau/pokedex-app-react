import React from 'react';

const PokeCard = ({id, image, name, type, weight, height, stats, statsName, _callback }) => {
    const style = type + " card-container";
    return (
        <div className={style}>
            <div className="number"><strong>#{id}</strong></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h2>{name}</h2>
                <small><strong>Type:</strong> {type}</small>
                <small><strong>Weight:</strong> {weight} lbs</small>
                <small><strong>Height:</strong> {height} cm</small>
                <table className="stats-container">
                    <tr>
                        {statsName.map((stats) => (
                        <th><small>{stats}</small></th>
                    ))}
                    </tr>
                    <tr>
                    {stats.map((stats) => (
                        <td><small>{stats}</small></td>
                    ))}
                    </tr>
                </table>
                    
                
            </div>
        </div>
    )
}


export default PokeCard