import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Title from './Title';

const RelatedProducts = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy);
        }
    },products)

  return (
    <div className='text-3xl my-10 text-center'>
        <Title text1={"Related"} text2={"Products"}/>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-8'>
        {related.map((item, index) => {
          return <ProductItem key={index} id={item.id} images={item.images[0]} name={item.name} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
