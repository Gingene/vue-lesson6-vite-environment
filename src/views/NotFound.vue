<template>
  <HeaderNav />
  <main class="container">
    <div class="text-center">這裡甚麼都沒有~</div>

    <div class="text-center">
      <Button>
        <RouterLink to="/"> 點我回首頁 </RouterLink>
      </Button>
    </div>
  </main>
</template>
<script setup>
import HeaderNav from '@/components/layout/HeaderNav.vue';
import { Button } from '@/components/ui/button';
</script>
