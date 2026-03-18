import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';
import Layout from '../components/Layout';

const ProductList = () => {
  
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { getProducts, deleteProduct } = productApi;

  // 목록 불러오기
  const fetchProducts = () => {
    getProducts().then(res => setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();  // 컴포넌트 마운트 시 1회 실행
  }, []);

  // 삭제 처리
  const handleDelete = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteProduct(id).then(() => fetchProducts());  // 삭제 후 목록 갱신
    }
  };


  return (
    <Layout>
      <div className='grid grid-cols-2 gap-4'>
        {
          products.length === 0 ? (
              <div>
                  등록된 상품이 없습니다.
              </div>
          ) :
          (            
              products.map(product => (
                <div key={product.id} className='bg-white p-4 rounded shadow'>
                  <span>{product.name}</span>
                  <button onClick={() => navigate(`/products/${product.id}`)}>상세보기</button>
                  <button onClick={() => handleDelete(product.id)}>삭제</button>
                </div>
              ))
          )
        }
      </div>
    </Layout>
  )
}

export default ProductList