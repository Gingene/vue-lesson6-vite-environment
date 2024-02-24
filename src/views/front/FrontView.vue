<template>
  <HeaderNav />
  <RouterView />
</template>
<script setup>
import { onMounted } from 'vue';
import HeaderNav from '@/components/layout/HeaderNav.vue';
import useTheme from '@/hooks/useTheme';

const { toggleDarkTheme, toggleTheme } = useTheme();

onMounted(() => {
  toggleDarkTheme(true);
  toggleTheme('theme-blue');
});
</script>
