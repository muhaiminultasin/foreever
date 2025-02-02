import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState(['relavent']);


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(String(search).toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    } 

    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }
    
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    // filter product copy
    let fpCopy = filterProducts.slice();

    switch(sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) =>  a.price - b.price ));
        break;
      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);

  useEffect(() => {
    sortProduct();
  },[sortType])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter section */}
      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="my-2 text-lg  flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className="w-2 rotate-90  sm:hidden"
          />
        </p>
        {/* filter by category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden sm:block"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Category</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Man"}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Woman"}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Kids"}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* /filter subcategory    */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Topwear"}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 ">
        <div className="flex  justify-between items-center gap-y-6  mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />

          <select
          onChange={(e)=> setSortType(e.target.value)}
            name=""
            id=""
            className="px-3 py-2 outline-none border w-fit"
          >
            <option className="text-[14px]" value="relavent">Sort by: Relavent </option>
            <option className="text-[14px]" value="low-high">Sort by: Low to high</option>
            <option className="text-[14px]" value="high-low">Sort by: High to low</option>
          </select>
        </div>

        {/* products mapping */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map(({ images, name, price,id }, index) => {
            return (
              <ProductItem
                key={index}
                id={id}
                images={images[0]}
                price={price}
                name={name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
