import './StickersPage.css';
import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import stickers_list from '../../database/stickers_list.json';
import accessories_list from '../../database/accessories_list.json';


const StickersPage: FC = () => {
    const { id } = useParams();

    const whichCategory = (id: any) => {
        if (id === "stickers") {
            return stickers_list;
        } else if (id === "accessories") {
            return accessories_list;
        }
    }

    const category = whichCategory(id);

    return <>
        <div className='main-div'>
            {id === "stickers" ? <p className='catHeader'>Stickers</p> :
                <p className='catHeader'>Accessories</p>
            }
            {category!.length > 0 ? 
                category!.map(item => (
                    <div className='anItem'>
                        <Link to={`/items/${item.id}`} className='itemLink'>
                            <img className='itemIMG' src={process.env.PUBLIC_URL + `/Products_Images/${item.src}`} alt=''></img>
                            <p className='itemTitle'>{item.name}</p>
                        </Link>  
                    </div>
                ))
            : <p>No Items!</p>}
        </div>
    </>
}

export default StickersPage;