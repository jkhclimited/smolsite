import './ProductPage.css';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../database/all_items_list.json';

const ProductsPage: FC = () => {
    const { id } = useParams();

    const findProduct = ( targetID: String ) => {
        for (var i = 0; i < Products.length; i++) {
            if (Products[i].id === targetID) {
                return Products[i];
            }
        }
    }

    const thisProduct = findProduct(id as String);
    const thisImages = thisProduct?.images;

    console.log(thisProduct);

    return <>
        {thisImages?.length! > 0 ? 
            <div className='item-main-div'>
                {thisImages?.map(image => (
                    <img className='item-images' src={process.env.PUBLIC_URL + `/Products_Images/${image}`} alt=''></img>
                ))}
                <div className='item-texts'>
                    <div className='item-name'>{thisProduct?.name}</div>
                    <div className='item-price'>{thisProduct?.price}</div>
                </div>
                <p className='item-description'>{thisProduct?.description}</p>
            </div>
        :
        <div className='item-main-div-single'>
            <img className='item-main-image' src={process.env.PUBLIC_URL + `/Products_Images/${thisProduct?.src}`} alt=''></img>
                <div className='item-texts'>
                    <div className='item-name-single'>{thisProduct?.name}</div>
                    <div className='item-price-single'>{thisProduct?.price}</div>
                </div>
            <p className='item-description-single'>{thisProduct?.description}</p>
        </div>
        }
    </>
}

export default ProductsPage;