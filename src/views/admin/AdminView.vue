<template>
  <AdminNav />
  <div v-if="route.fullPath === '/admin'">後台管理系統 請點及左側按鈕打開控制面板</div>
  <RouterView />
</template>
<script setup>
import AdminNav from '@/components/layout/AdminNav.vue';
import { useRoute } from 'vue-router';
// import { useAdminProductStore } from '@/stores/adminProduct';
// import { useOrdersStore } from '@/stores/orders';

// const { getProducts } = useAdminProductStore();
// const { getOrders } = useOrdersStore();

// getProducts();
// getOrders();
const route = useRoute();
</script>
