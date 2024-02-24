<template>
  <section class="container">
    <main class="lg:grid lg:grid-cols-4 space-y-4 lg:space-y-6 gap-6">
      <div class="col-span-3 space-y-6 lg:space-y-10 mt-6 lg:mt-10">
        <h1>{{ product.title }}</h1>
        <div>
          <img :src="product.imageUrl" :alt="product.title" />
        </div>
        <div class="text-xl space-y-6 lg:space-y-10">
          <div>
            <h2 class="font-bold">商品敘述:</h2>
            <p>
              {{ product.description }}
            </p>
          </div>
          <div>
            <h2 class="font-bold">商品備註:</h2>
            <p>
              {{ product.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center space-y-4">
        <div class="line-through">原價 每{{ product.origin_price }}/{{ product.unit }}</div>
        <div class="text-through text-lg">
          <strong>促銷價: {{ product.price }}</strong>
        </div>

        <div class="space-y-6">
          <Slider v-model="buyQuantity" :default-value="[1]" :min="1" :max="10" :step="1" />
          <p class="flex items-center">
            <span class="me-4">購買數量</span>
            <span class="text-lg">{{ buyQuantity.join('') }}</span>
          </p>
          <Button class="w-full" @click="buyProduct(route.params.id, buyQuantity[0])"
            >立即購買</Button
          >
        </div>
      </div>
    </main>
  </section>
</template>
<script setup>
import { ref, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cart';

import { Slider } from '@/components/ui/slider';

const route = useRoute();
const { buyProduct } = useCartStore();
const http = inject('http');
const path = inject('path');

const product = ref({});
const buyQuantity = ref([1]);

const getProduct = async (id) => {
  const { data } = await http.get(`${path.product}/${id}`);
  product.value = data.product;
};

onMounted(() => {
  getProduct(route.params.id);
});
</script>
