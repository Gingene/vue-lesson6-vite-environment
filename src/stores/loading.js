import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false);
  const message = ref('');
  const setIsLoading = (msg = '請稍等') => {
    isLoading.value = !isLoading.value;
    message.value = msg;
  };
  // const setLoadingMessage = (msg = '請稍等') => {
  //   message.value = msg;
  // };
  return { isLoading, message, setIsLoading };
});
