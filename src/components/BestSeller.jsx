import React, { useContext, useState, useEffect } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

  const {products} = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if(products) {
      const bestProduct = products.filter((item) => {return item.bestSeller === true});
    setBestSeller(bestProduct.slice(0,4));
    }
  },[products])

  return (  
    <div className="my-10 text-center" >
      <div className='text-3xl text-center py-8'>
        <Title text1={"BEST"} text2={"SELLERS"}/>
        <p className='sm:w-2/3 mx-auto text-sm sm:text-base text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, totam.</p>
      </div>
        {/* Products */}
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {BestSeller.map((item, index) => {
          return <ProductItem key={index} id={item.id} images={item.images[0]} name={item.name} price={item.price}/>
        })}
      </div>

    </div>

  )
}

export default BestSeller;
