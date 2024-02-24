import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { http, path } from '@/api';
import { useToast } from '@/components/ui/toast/use-toast';
import { useLoadingStore } from './loading';

const { toast } = useToast();
// const { setIsLoading } = useLoadingStore();

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const finalTotal = ref(0);
  const total = ref(0);

  const getCart = async () => {
    // setIsLoading('正為您加入購物車');
    const { data } = await http.get(path.cart);
    cart.value = data.data.carts;
    console.log(cart.value);
    finalTotal.value = data.data.final_total;
    total.value = data.data.total;
  };

  const buyProduct = async (product_id, qty) => {
    const payload = {
      data: {
        product_id,
        qty,
      },
    };
    const { data } = await http.post(path.cart, payload);
    const cartData = data.data;
    // setIsLoading();
    toast({
      title: `商品${cartData.product.title}${data.message}`,
      description: `目前購物車數量${cartData.qty}`,
    });
    getCart();
  };

  const removeCartProduct = async (cartId) => {
    const { data } = await http.delete(`${path.cart}/${cartId}`);
    toast({
      title: `商品${data.message}`,
      description: '',
    });
    getCart();
  };

  const removeCartAllProduct = async () => {
    const { data } = await http.delete(path.carts);
    console.log(data);
    toast({
      title: '購物車已清空',
      description: '',
    });
    getCart();
  };

  return { cart, finalTotal, total, getCart, buyProduct, removeCartProduct, removeCartAllProduct };
});
