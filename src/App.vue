<template>
  <RouterView />
  <LoadingComponent />
  <Toaster />
</template>

<script setup>
import Toaster from '@/components/ui/toast/Toaster.vue';
import LoadingComponent from './components/layout/LoadingComponent.vue';
</script>

<style scoped></style>
