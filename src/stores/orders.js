import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { http, adminPath } from '@/api';
import { useLoadingStore } from './loading';
import { useToast } from '@/components/ui/toast/use-toast';

const { setIsLoading } = useLoadingStore();
const { toast } = useToast();

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref([]);

  const getOrders = async () => {
    setIsLoading();
    const { data } = await http.get(`${adminPath.orders}`);
    console.log(data);
    orders.value = data.orders;
    setIsLoading();
  };

  const togglePaidState = async (order) => {
    const payload = { data: { ...order, is_paid: !order.is_paid } };
    const { data } = await http.put(`${adminPath.order}/${order.id}`, payload);
    toast({
      title: data.message,
      description: '',
    });
    getOrders();
  };

  const deleteOrder = async (id) => {
    setIsLoading();
    const { data } = await http.delete(`${adminPath.order}/${id}`);
    toast({
      title: data.message,
      description: '',
    });
    getOrders();
    setIsLoading();
  };

  const deleteAllOrders = async () => {
    setIsLoading();
    const { data } = await http.delete(`${adminPath.orders}/all`);
    toast({
      title: data.message,
      description: '',
    });
    getOrders();
    setIsLoading();
  };

  return { orders, getOrders, togglePaidState, deleteOrder, deleteAllOrders };
});
