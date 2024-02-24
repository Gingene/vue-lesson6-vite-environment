import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { http, adminPath } from '@/api';
import { useLoadingStore } from './loading';
import { useToast } from '@/components/ui/toast/use-toast';

const { setIsLoading } = useLoadingStore();
const { toast } = useToast();

export const useAdminProductStore = defineStore('adminProduct', () => {
  const products = ref([]);
  const tempProduct = ref({
    title: '',
    category: '',
    unit: '',
    origin_price: '',
    price: '',
    description: '',
    content: '',
    is_enabled: 1,
    imageUrl: '',
    imagesUrl: [''],
  });
  const pagination = ref({});
  const categories = ref({});
  const filterCondition = ref('');

  const getProducts = async (page = 1) => {
    setIsLoading();
    console.log(page);
    const { data } = await http.get(`${adminPath.products}/?page=${page}`);
    products.value = data.products;
    pagination.value = data.pagination;
    categories.value = Object.groupBy(data.products, ({ category }) => category);
    setIsLoading();
  };

  const resetProduct = () => {
    tempProduct.value = {
      title: '',
      category: '',
      unit: '',
      origin_price: '',
      price: '',
      description: '',
      content: '',
      is_enabled: 1,
      imageUrl: '',
      imagesUrl: [''],
    };
  };

  const postProduct = async () => {
    setIsLoading();
    const closeButton = document.querySelector('.closeButton');
    const { data } = await http.post(`${adminPath.product}`, {
      data: tempProduct.value,
    });

    toast({
      title: '產品已登錄',
      description: '',
    });
    resetProduct();
    getProducts();
    setIsLoading();

    closeButton.click();
  };

  const editProduct = (product) => {
    tempProduct.value = { ...product };
  };

  const putProduct = async (id) => {
    setIsLoading();
    const closeButton = document.querySelector('.closeButton');
    const { data } = await http.put(`${adminPath.product}/${id}`, {
      data: tempProduct.value,
    });
    // console.log(data);

    toast({
      title: '產品已修改',
      description: '',
    });
    resetProduct();
    getProducts();
    setIsLoading();

    closeButton.click();
  };

  const deleteProduct = async (id) => {
    setIsLoading();
    console.log(id);
    const { data } = await http.delete(`${adminPath.product}/${id}`);
    // console.log(data);

    toast({
      title: '產品已刪除',
      description: '',
    });
    getProducts();
    setIsLoading();
  };

  const changeFilterCondition = (condition) => {
    filterCondition.value = condition;
  };

  const filterProducts = computed(() => {
    if (filterCondition.value === '') {
      return products.value;
    } else {
      return products.value.filter(({ category }) => category === filterCondition.value);
    }
  });

  return {
    products,
    tempProduct,
    pagination,
    categories,
    filterCondition,
    filterProducts,
    getProducts,
    resetProduct,
    postProduct,
    editProduct,
    putProduct,
    deleteProduct,
    changeFilterCondition,
  };
});
