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
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateProduct(id, form).then(() => navigate('/'));
    } else {
      createProduct(form).then(() => navigate('/'));
    }
  };

  return (
    <Layout>
        <form onSubmit={handleSubmit}>
            <input name="name"  value={form.name}  onChange={handleChange} placeholder="상품명" />
            <input name="price" value={form.price} onChange={handleChange} placeholder="가격" />
            <input name="stock" value={form.stock} onChange={handleChange} placeholder="재고" />
            <button type="submit">{isEdit ? '수정' : '등록'}</button>
        </form>
    </Layout>
  )
}

export default ProductForm