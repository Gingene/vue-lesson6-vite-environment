<template>
  <header class="bg-primary text-primary-foreground">
    <nav class="container flex lg:grid lg:grid-cols-12 py-4">
      <div class="col-span-2 text-lg lg:text-xl inline-flex items-center me-auto">
        <a :href="`${location.origin}${location.pathname}#/`">巧克力點心坊</a>
      </div>
      <div class="lg:hidden space-x-3">
        <Popover v-if="$route.name !== 'order'">
          <PopoverTrigger as-child>
            <Button variant="outline" class="relative">
              <ShoppingCart />
              <Badge
                variant="destructive"
                class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                >{{ cart.length }}</Badge
              >
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <ul class="text-sm lg:text-base space-y-4" v-if="cart.length">
              <li v-for="cartProduct in cart" :key="cartProduct.id" class="flex justify-between">
                <span>
                  {{ cartProduct.product.title }}
                </span>
                <span> x {{ cartProduct.qty }} </span>
              </li>
              <div class="border-t-2">
                <div class="flex justify-between py-6">
                  <span>金額</span>
                  <span>${{ finalTotal }}</span>
                </div>
                <RouterLink to="/order">
                  <Button class="w-full" variant="outline-primary"> 去結帳 </Button>
                </RouterLink>
              </div>
            </ul>
            <div v-else>購物車還沒有商品</div>
          </PopoverContent>
        </Popover>
        <Button @click="toggleDarkTheme(!isDark)" variant="secondary">
          <Sun v-if="isDark" />
          <Moon v-else />
        </Button>
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" class="bg-primary">
            <VisuallyHidden class="hidden">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription> </SheetDescription>
              </SheetHeader>
            </VisuallyHidden>

            <ul class="text-sm lg:text-base space-y-4">
              <li>
                <SheetClose as-child>
                  <RouterLink to="/products">商品區</RouterLink>
                </SheetClose>
              </li>
              <li>
                <SheetClose>
                  <RouterLink to="/login" v-if="!cookies.get('hexUid')">
                    <Button variant="outline"> 登入 </Button>
                  </RouterLink>
                  <RouterLink to="/admin" v-else>
                    <Button variant="outline"> 後台管理 </Button>
                  </RouterLink>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div class="hidden col-span-3 lg:block">
        <ul class="flex justify-around items-center h-full text-sm lg:text-base">
          <li>
            <RouterLink to="/products">
              <Button variant="ghost">商品區</Button>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="col-span-3"></div>

      <div class="hidden lg:col-span-4 lg:flex justify-between">
        <Button @click="toggleDarkTheme(!isDark)" variant="secondary">
          <Sun v-if="isDark" />
          <Moon v-else />
        </Button>
        <Popover v-if="$route.name !== 'order'">
          <PopoverTrigger as-child>
            <Button variant="outline" class="relative">
              <ShoppingCart />
              <Badge
                variant="destructive"
                class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                >{{ cart.length }}</Badge
              >
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <ul class="text-sm lg:text-base space-y-4" v-if="cart.length">
              <li v-for="cartProduct in cart" :key="cartProduct.id" class="flex justify-between">
                <span>
                  {{ cartProduct.product.title }}
                </span>
                <span> x {{ cartProduct.qty }} </span>
              </li>
              <div class="border-t-2">
                <div class="flex justify-between py-6">
                  <span>金額</span>
                  <span>${{ finalTotal }}</span>
                </div>
                <RouterLink to="/order">
                  <Button class="w-full" variant="outline-primary"> 去結帳 </Button>
                </RouterLink>
              </div>
            </ul>
            <div v-else>購物車還沒有商品</div>
          </PopoverContent>
        </Popover>

        <RouterLink to="/login" v-if="!cookies.get('hexUid')">
          <Button variant="outline"> 登入 </Button>
        </RouterLink>
        <RouterLink to="/admin" v-else>
          <Button variant="outline"> 後台管理 </Button>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cart';

import { VisuallyHidden } from 'radix-vue';
import { Sun, Moon, AlignJustify, ShoppingCart } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import useTheme from '@/hooks/useTheme';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCookies } from '@vueuse/integrations/useCookies';

const { toggleDarkTheme, isDark } = useTheme();
const cookies = useCookies();
const { getCart } = useCartStore();
const { cart, finalTotal } = storeToRefs(useCartStore());

onMounted(() => {
  getCart();
});
</script>
<style lang="scss" scoped>
.active {
  @apply text-secondary-foreground border-secondary;
}
</style>
