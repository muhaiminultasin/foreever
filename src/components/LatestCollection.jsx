import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);
    console.log(latestProduct)

    useEffect(() => {
        setLatestProduct(products.slice(0,10));
    },[]);

  return (
    <div className='my-10'>
      <div className='text-3xl  text-center py-8'>
        <Title text1={"Latest"} text2={"Collections"}/>
        <p className='w-2/3 mx-auto text-sm sm:text-base text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, repellendus!</p>
      </div>

        {/* products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
            {
                latestProduct.map((item,index) => {
                    return <ProductItem key={index} id={item.id} images={item.image} name={item.name} price={item.price}/>
                })
            }
        </div>

    </div>
  )
}

export default LatestCollection;
