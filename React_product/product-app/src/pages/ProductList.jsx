import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';
import Layout from '../components/Layout';
import { Trash2 } from 'lucide-react';

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
        {
          products.length === 0 ? (
              <div className='bg-white p-4 rounded shadow'>
                  등록된 상품이 없습니다.
              </div>
          ) :
          (            
            <div className='grid grid-cols-3 gap-4'>
              {products.map(product => (
                <div key={product.id} className='flex flex-col gap-4 bg-white p-4 rounded shadow'>
                  <div className='font-semibold'>{product.name}</div>
                  <div className='flex gap-2 mt-auto'>
                    <button 
                      className='flex-1 text-xs bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer' 
                      onClick={() => navigate(`/products/${product.id}`)}>
                        상세보기
                    </button>
                    <button 
                      className='text-xs bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 cursor-pointer' 
                      onClick={() => handleDelete(product.id)}>
                        <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        }
    </Layout>
  )
}

export default ProductList