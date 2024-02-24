import { ref } from 'vue';
import { defineStore } from 'pinia';
import { http, adminPath } from '@/api';
import { useToast } from '@/components/ui/toast/use-toast';

const { toast } = useToast();

export const useUserStore = defineStore('user', () => {
  // const setUser = (value) => {
  //     user.value = value;
  // }
  // const getUser = () => {
  //     return user.value;
  // }
  // const clearUser = () => {
  //     user.value = {};
  // }
  const login = async (loginData) => {
    const { data } = await http.post(adminPath.login, loginData);
    const { token, expired, uid } = data;

    document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
    document.cookie = `hexUid=${uid}`;
    location.href = `${location.origin}/#/admin/products`;

    toast({
      title: data.message,
      description: '為您跳轉後台管理',
      // description: h(
      //   'pre',
      //   { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      //   h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
      // ),
    });
  };

  const checkAdmin = async () => {
    try {
      const { data } = await http.post(adminPath.check);

      toast({
        title: data.message,
        description: '歡迎回來',
      });
    } catch (err) {
      location.href = '/login';
    }
  };

  const logout = async () => {
    const { data } = await http.post(adminPath.logout);
    // console.log(data);

    document.cookie = `hexToken=;expires=${new Date(0)}`;
    document.cookie = `hexUid=`;

    location.href = '/';
    toast({
      title: `${data.message}`,
      description: '',
    });
  };

  return { login, logout, checkAdmin };
});
