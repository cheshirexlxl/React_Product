import React, { useEffect, useState } from 'react'
import { productApi } from '../api/productApi';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const ProductDetail = () => {

  const { id } = useParams(); 
  const navigate = useNavigate();
  const { getProduct } = productApi;
  const [product, setProduct] = useState(null);

  useEffect(() => {
      getProduct(id).then(res => setProduct(res.data));
    }, [id]);

  return (
    <Layout>
      <div>
        {product ? (
          <div>
            <h1>상품명: {product.name}</h1>
            <p>가격: {product.price}</p>
            <p>재고: {product.stock}</p>
            <button onClick={() => navigate(`/products/${product.id}/edit`)}>수정하기</button>
          </div>
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
    </Layout>
  )
}

export default ProductDetail