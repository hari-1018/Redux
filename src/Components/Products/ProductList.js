import React from 'react';
import products from '../../Database/products.json';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css';
import { addProductToCart, incrementQuantity, decrementQuantity } from '../../Cart/Cart';

const ProductList = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getProductQuantity = (productId) => {
    const product = cartList.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <section className='container'>
      {products.map((product, key) => (
        <div key={key} className='product-card'>
          <div className='details'>
            <img src={product.image} alt={product.brand} />
            <h2>{product.brand}</h2>
            <p>{product.model}</p>
            <h3>Price: $ {product.price}</h3>
            <button className='add-cart' onClick={() => dispatch(addProductToCart(product))}>
              Add to Cart
            </button>
          </div>

          {getProductQuantity(product.id) > 0 && (
            <div className='quantity'>
              <button
                className='cart-button'
                onClick={() => dispatch(decrementQuantity(product.id))}
                disabled={getProductQuantity(product.id) === 1}
              >
                -
              </button>
              <div className='count-button'>{getProductQuantity(product.id)}</div>
              <button className='cart-button' onClick={() => dispatch(incrementQuantity(product.id))}>
                +
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
