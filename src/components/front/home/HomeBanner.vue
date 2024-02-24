<template>
  <main class="container">
    <h1 class="font-bold text-4xl md:text-5xl">探索巧克力的美妙</h1>
    <div class="grid lg:grid-cols-4 gap-6">
      <div class="lg:col-span-3">
        <img
          src="https://images.unsplash.com/photo-1602540738621-e7dfebf0af79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
        />
      </div>
      <div class="flex items-center">
        <Button variant="outline-primary" class="w-full">
          <router-link to="/products" class="inline-flex items-center">
            探索更多<MoveRight class="ms-2" />
          </router-link>
        </Button>
      </div>
    </div>
  </main>
</template>
<script setup>
import { MoveRight } from 'lucide-vue-next';
</script>
<style lang=""></style>
