import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Button } from "@heroui/react";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const {productId} = useParams();
  const {products,currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  // State for showing first image in array when we have nuktiple image to show in the page 
  const [image,setImage] = useState("");
  const [size,setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if(item.id === productId) {
        setProductData(item);
        setImage(item.images[0])
      }
    })
  };

  useEffect(() => {
    fetchProductData();
  },[productId,products]);

  return productData ? <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100">
    {/* product data */}
    <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row"> 
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row sm:[20%]">
          <div className="w-[20%] flex  sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal">
            {productData.images.map((item, index) => {
              return <img onClick={() => {
                setImage(item);
              }} src={item} key={index} alt="" className="w-full sm:w-full sm:mb-2 flex-shrink-0 cursor-pointer" />
            })}
          </div>

          <div className="w-full sm:w-[80%]">
          <img src={image} alt="" className="w-full"/>
        </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>

          <div className="flex gap-1 mt-1 items-center">
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_icon_dull} alt="" className="w-3 5"/>
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency} {productData.price}</p>
          <p className=" text-gray-500 md:w-4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 mt-8">
            <p>Select size</p>
            <div className="flex gap-4 ">
              {
                productData.sizes.map((item,index) => {
                  return <button key={index} onClick={() => setSize(item)} className={`w-10 h-8  bg-gray-100 cursor-pointer ${item === size ? "border border-orange-400" : ""}`}>{item}</button>
                })
              }
            </div>
          </div>
          <Button className="rounded-none text-white bg-black mt-8">Add to cart</Button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500">
            <p>100% original product</p>
            <p>Cash on delivery available</p>
            <p>7 days money back guarantee based on condition</p>
          </div>
        </div>
    </div>

    <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
  </div>
  :
  <div className=""><h1>hello world</h1></div>;
};

export default Product;
