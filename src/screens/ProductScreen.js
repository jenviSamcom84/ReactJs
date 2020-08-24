import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct} from '../actions/productActions';


function ProductScreen(props) {
 
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
   const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(detailsProduct(props.match.params.id));

  }, []);// eslint-disable-line react-hooks/exhaustive-deps
 
 
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <>
          <div className="details">
          <div style={{alignItems:'center',display:'flex',justifyContent:'center',backgroundColor:'blue',fontWeight:500,height:50,color:'white'}}>Product Details</div>
                   <div className="details-info">
              <ul>
                <li><div style={{display:'flex',flexDirection:'row'}}>
              <div style={{fontWeight:'bold'}}>

  Product Name:              </div>{product.name}
  </div>
                </li>
                <li><div style={{display:'flex',flexDirection:'row'}}>
              <div style={{fontWeight:'bold'}}>

              Description:            </div>  {product.description}
  </div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
              <li><div style={{display:'flex',flexDirection:'row'}}>
              <div style={{fontWeight:'bold'}}>

              Price:            </div>  {product.price}
  </div>
                </li>
                
              </ul>
            </div>
          </div>
        
        </>
      )}
    </div>
  );
}
export default ProductScreen;
