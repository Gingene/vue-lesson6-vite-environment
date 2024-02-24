<template>
  <section class="container">
    <main class="space-y-6 lg:space-y-10">
      <h2>產品介紹</h2>
      <div>
        <h3>種類</h3>
        <ul class="flex flex-wrap gap-2">
          <li><Button variant="ghost" @click="changeFilterCondition('')">全部</Button> |</li>
          <li v-for="(category, index) in Object.keys(categories)" :key="categories[index]">
            <Button variant="ghost" @click="changeFilterCondition(category)">{{ category }}</Button>
            |
          </li>
        </ul>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <li v-for="product in filterProducts" :key="product.id">
          <Card>
            <CardHeader class="md:h-[420px] xl:h-[400px]">
              <img
                :src="product.imageUrl"
                :alt="product.title"
                class="object-cover h-[300px] md:h-[250px] xl:h-[200px]"
              />
              <CardTitle class="py-4">{{ product.title }}</CardTitle>
              <CardDescription>{{ product.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex justify-between items-center">
                <span class="line-through"
                  >原價 每{{ product.origin_price }}/{{ product.unit }}</span
                >
                <span class="text-through text-lg">
                  <strong>促銷價: {{ product.price }}</strong>
                </span>
              </div>
              <!-- <Slider
                v-model="buyQuantity"
                :default-value="[1]"
                :min="1"
                :max="10"
                :step="1"
                class="py-4"
              /> -->
            </CardContent>
            <CardFooter class="justify-between">
              <!-- <Button variant="outline-primary" @click="buyProduct">立即購買</Button> -->
              <Button>
                <router-link :to="`/products/${product.id}`">查看詳細</router-link>
              </Button>
            </CardFooter>
          </Card>
        </li>
      </ul>
      <div class="flex justify-center">
        <Pagination
          v-slot="{ page }"
          :total="pagination.total_pages * 10"
          :sibling-count="1"
          show-edges
          :default-page="1"
        >
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst @click="getProducts" />
            <PaginationPrev @click="getProducts(pagination.current_page - 1)" />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button
                  class="w-10 h-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'"
                  @click="getProducts(item.value)"
                >
                  {{ item.value }}
                </Button>
              </PaginationListItem>
              <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext @click="getProducts(pagination.current_page + 1)" />
            <PaginationLast @click="getProducts(pagination.total_pages)" />
          </PaginationList>
        </Pagination>
      </div>
    </main>
  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/product';
// import { useCartStore } from '@/stores/cart';

// import { Slider } from '@/components/ui/slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination';

const { getProducts, changeFilterCondition } = useProductStore();
const { filterProducts, pagination, categories } = storeToRefs(useProductStore());
// const { buyProduct } = useCartStore();
// const buyQuantity = ref([1]);

onMounted(() => {
  getProducts();
});
</script>
