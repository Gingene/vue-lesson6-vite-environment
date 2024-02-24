import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { http, path } from '@/api';
import { useLoadingStore } from './loading';

const { setIsLoading } = useLoadingStore();

export const useProductStore = defineStore('product', () => {
  const products = ref([]);
  const pagination = ref({});
  const categories = ref({});
  const filterCondition = ref('');

  const getProducts = async (page = 1) => {
    setIsLoading();
    const { data } = await http.get(`${path.products}/?page=${page}`);
    products.value = data.products;
    pagination.value = data.pagination;
    categories.value = Object.groupBy(data.products, ({ category }) => category);
    setIsLoading();
  };

  // const getProductAll = async () => {
  //   const { data } = await http.get(`${path.products}/all`);
  //   categories.value = Object.groupBy(data.products, ({ category }) => category);
  //   console.log(data);
  // };

  const changeFilterCondition = (condition) => {
    console.log(condition);
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
    pagination,
    categories,
    filterCondition,
    filterProducts,
    getProducts,
    changeFilterCondition,
  };
});
