import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { productApi } from '../api/productApi';
import Layout from '../components/Layout';

const ProductForm = () => {

  const { id } = useParams(); 
  const navigate = useNavigate();
  const { getProduct, createProduct, updateProduct } = productApi;
  const isEdit = !!id;

  const [form, setForm] = useState({ name: '', price: '', stock: '' });

  useEffect(() => {
    if (isEdit) {
      // 수정 모드: 기존 데이터 불러오기
      getProduct(id).then(res => setForm(res.data));
    } else {
      // 등록 모드: 입력값 초기화
      setForm({ name: '', price: '', stock: '' });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert('상품명을 입력하세요.');
      return;
    }
    if (form.price === '' || Number(form.price) < 0) {
      alert('가격은 0 이상의 숫자를 입력하세요.');
      return;
    }
    if (form.stock === '' || Number(form.stock) < 0) {
      alert('재고는 0 이상의 숫자를 입력하세요.');
      return;
    }

    if (isEdit) {
      updateProduct(id, form).then(() => navigate('/'));
    } else {
      createProduct(form).then(() => navigate('/'));
    }
  };

  return (
    <Layout>
        <div className='bg-white p-4 rounded shadow'>
          <form onSubmit={handleSubmit}>  
              <div className='flex gap-4 text-sm'>
                <div className='flex flex-1 flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <label className='flex-[0_1_6rem] font-semibold'>상품명</label>
                    <input className='flex-1 border border-gray-300 rounded p-2' 
                      name="name"  
                      value={form.name}  
                      onChange={handleChange} placeholder="상품명을 입력하세요." 
                    />
                  </div>
                  <div className='flex items-center gap-4'>
                    <label className='flex-[0_1_6rem] font-semibold'>가격</label>
                    <input className='flex-1 border border-gray-300 rounded p-2' 
                      name="price"  
                      value={form.price}  
                      onChange={handleChange} placeholder="가격을 입력하세요." 
                    />
                  </div>
                  <div className='flex items-center gap-4'>
                    <label className='flex-[0_1_6rem] font-semibold'>재고</label>
                    <input className='flex-1 border border-gray-300 rounded p-2' 
                      name="stock"  
                      value={form.stock}  
                      onChange={handleChange} placeholder="재고를 입력하세요." 
                    />
                  </div>                  
                </div>
                <button 
                  type="submit" 
                  className='flex-[0_1_8rem] font-semibold bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer'>
                  {isEdit ? '수정' : '등록'}
                </button>
              </div>            
          </form>
        </div>
    </Layout>
  )
}

export default ProductForm