import './Accessories.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import accessories_list from '../../database/accessories_list.json';


const AccessoriesPage: FC = () => {
    const accessories = accessories_list;

    return <>
        <div className='accessories-main-div'>
            <p className='accessories-header'>Accessories</p>
            {accessories.length > 0 ?
                accessories.map(accessory => (
                    <div className='anAccessory'>
                        <Link to={`/items/${accessory.id}`} className='accessoriesLink'>
                            <img className='accessoriesIMG' src={process.env.PUBLIC_URL + `/Products_Images/${accessory.src}`} alt=''></img>
                            <p className='accessoriesTitle'>{accessory.name}</p>
                        </Link>
                    </div>
                )) 
            : <p>No Accessories!</p>}
        </div>
    </>
}

export default AccessoriesPage;