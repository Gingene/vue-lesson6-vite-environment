<template>
  <div class="loading" ref="loadingDom" v-show="isLoading">
    <div class="loading-window flex flex-col justify-center">
      <div class="h-[300px]"></div>
      <p class="text-white drop-shadow-light">{{ message }}</p>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '@/stores/loading';

const { isLoading, message } = storeToRefs(useLoadingStore());
</script>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1056;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  opacity: 0.5;
  z-index: -1;
}

.loading-window {
  color: #055160;
  background-color: #cff4fc;
  background-color: transparent;
  border-color: #b6effb;
  width: 80%;
  padding: 1.5rem;
}

.loading-window p {
  text-align: center;
  font-size: 1.5rem;
}
</style>
