import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


function HomeScreen(props) {
 const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBusinesses = () => {
      try{
      dispatch(listProducts(category));}catch(e){
console.log("error",e)
      }
   };
 fetchBusinesses();

  }, [category]);// eslint-disable-line react-hooks/exhaustive-deps



  return (
    <>
      {category && <h2>{category}</h2>}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
        <div style={{alignItems:'center',display:'flex',justifyContent:'center',backgroundColor:'black',fontWeight:500,height:50,color:'white'}}>Product List</div>
          {products.map((product) => (

          
            <li key={product.id} >
              <div className="product" >
                <div className="product-name">
                  <Link to={'/product/' + product.id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.model}</div>
                <div className="product-price">${product.price}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;
