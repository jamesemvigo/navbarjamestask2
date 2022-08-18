import React, {useState,useEffect} from 'react'
import './productList.css'

// This component-will-show-list of Products in Tile View
export default function ProductList(){
    const[product, setProduct] = useState([]);
    useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    setProduct(data.products);
    });
}, []);
    return <div className = "product-container">

    {product && product.length > 0 && product.map((p)=>{
    return(  
    <div className='product-wrapper'>
    <img className='product-image' src={p.images[0]} alt={p.description}/>
  
    <h2>{p.title}</h2>
    <h5>{p.description}</h5>
    <h5 className='price'>price : ${p.price}</h5>
    </div>
  );
})}
</div>
}
