import './StickersPage.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import stickers_list from '../../database/stickers_list.json';


const StickersPage: FC = () => {
    const stickers = stickers_list;

    return <>
        <div className='stickers-main-div'>
            <p className='stickers-header'>Stickers</p>
            {stickers.length > 0 ? 
                stickers.map(sticker => (
                    <div className='aSticker'>
                        <Link to={`/items/${sticker.id}`} className='stickerLink'>
                            <img className='stickerIMG' src={process.env.PUBLIC_URL + `/Products_Images/${sticker.src}`} alt=''></img>
                            <p className='stickerTitle'>{sticker.name}</p>
                        </Link>  
                    </div>
                ))
            : <p>No Stickers!</p>}
        </div>
    </>
}

export default StickersPage;