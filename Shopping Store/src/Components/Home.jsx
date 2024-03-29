import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { incrementCart } from '../Redux/storeSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data));
  }, []);

  const cards = products.map(product => (
    <div className="card col-md-3 mb-3 mt-lg-5 mt-sm-5" key={product.id}>
      <img className="card-img-top d-flex justify-content-center align-items-center" src={product.image} alt="Card image cap" style={{ width: "40%" }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text h6">Price : ${product.price}</p>
      </div>
      <div className='d-flex justify-content-center'>
        <a href="#" className="btn btn-outline-primary d-flex align-items-center my-3"
          onClick={() => dispatch(incrementCart(product))}> Add to Cart </a>
      </div>
    </div>
  ));

  return (
    <div className="main-content" style={{ paddingTop: "30px" }}>
      <h1 className="text-center mt-5 mb-2">Welcome Home</h1>
      <div className='row p-lg-1 p-md-3 p-sm-3 m-2'>
        {cards}
      </div>
    </div>
  );
}

export default Home;
