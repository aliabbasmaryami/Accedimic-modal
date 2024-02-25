import React, { useEffect, useState } from "react";
import "./Transcript.css";
import axios from 'axios'
const Transcript = () => {
  const [products, setProducts] = useState(null);

  const getData = async () =>{
    try{
      const {data} = await axios.get("https://dummyjson.com/products")
      setProducts(data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
getData();
  }, [])
  
  return (
    <div className="tanscript-main">
      {/* <h1 className="transcript-heading">School Transcript</h1>
      <div className="transcript-child">
        <div className="t-child-input-1">
        <label htmlFor="School Name">SCHOOL NAME</label>
        <input type="text" name="text" id="text" />
        </div>
        <div className="t-child-input-2">
        <label htmlFor="School Name">SCHOOL ADDRESS</label>
        <input type="text" name="text" id="text" />
        </div>
        <div className="t-child-input-3">
        <label htmlFor="School Name">SCHOOL PHONE</label>
        <input type="text" name="text" id="text" />
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div> */}

      {
        products && products.products.map((product)=>{
          return <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        })
      }
    </div>
  );
};

export default Transcript;