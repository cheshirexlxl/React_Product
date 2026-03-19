import React, { useEffect, useState } from 'react'
import { productApi } from '../api/productApi';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { SquarePen } from 'lucide-react';

const ProductDetail = () => {

  const { id } = useParams(); 
  const navigate = useNavigate();
  const { getProduct } = productApi;
  const [product, setProduct] = useState(null);

  const formatNumber = (value) => Number(value ?? 0).toLocaleString('ko-KR');

  useEffect(() => {
      getProduct(id).then(res => setProduct(res.data));
    }, [id]);

  return (
    <Layout>
      <div className='bg-white p-4 rounded shadow'>
        {product ? (
          <div className='flex items-start gap-4'>
            <div className='flex flex-col flex-1 gap-4'>
              <div className='font-semibold'>{product.name}</div>
              <div className='flex items-center gap-4 text-sm text-gray-600'>
                <p>가격: <span className='text-xl font-semibold text-blue-500'>{formatNumber(product.price)}</span> 원</p>
                <p className='opacity-50'>|</p>
                <p>재고: <span className='font-semibold text-black'>{formatNumber(product.stock)}</span> 개</p>
              </div>
            </div>
            <button 
              className='text-xs bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 cursor-pointer
                         flex gap-2 items-center' 
              onClick={() => navigate(`/products/${product.id}/edit`)}
            >
                <SquarePen size={16} /> 수정하기
            </button>
          </div>
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
    </Layout>
  )
}

export default ProductDetail