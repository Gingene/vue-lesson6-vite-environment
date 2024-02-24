import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_API, VITE_PATH } = import.meta.env;

function alertMessage(icon, msg) {
  Swal.fire({
    icon,
    text: msg,
  });
}

const http = axios.create({
  baseURL: `${VITE_API}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 攔截器
http.interceptors.request.use(
  (config) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*)|^.*$/, '$1');
    if (token) {
      config.headers.Authorization = token;
    }
    return config; // 必須回傳config，否則axios會拋出錯誤
  },
  (err) => {
    return Promise.reject(err);
  },
);

http.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res;
  },
  (err) => {
    console.log(err);
    if (!err.response) {
      alertMessage('error', '是不是沒有連接伺服器呢? 請看console><');
      return Promise.reject(err);
    }
    const { status } = err.response;
    switch (status) {
      case 401:
        alertMessage('error', '請重新登入');
        break;
      case 403:
        alertMessage('error', '權限不足');
        break;
      case 404:
        alertMessage('error', '對不起找不到你要的><');
        break;
      default:
        alertMessage('error', '發生錯誤了 請看console><');
        break;
    }
    // console.error(`狀態碼${status} 錯誤訊息${statusText}`);
    return Promise.reject(err); // 必須回傳err，否則axios會拋出錯誤
  },
);

const path = {
  products: `/api/${VITE_PATH}/products`,
  product: `/api/${VITE_PATH}/product`,
  carts: `/api/${VITE_PATH}/carts`,
  cart: `/api/${VITE_PATH}/cart`,
  order: `/api/${VITE_PATH}/order`,
};

const adminPath = {
  products: `/api/${VITE_PATH}/admin/products`,
  product: `/api/${VITE_PATH}/admin/product`,
  orders: `/api/${VITE_PATH}/admin/orders`,
  order: `/api/${VITE_PATH}/admin/order`,
  login: '/admin/signin',
  logout: '/logout',
  check: '/api/user/check',
};

export { http, path, adminPath };
