<template>
  <Sheet>
    <SheetTrigger class="absolute top-1/2 -translate-x-1/3" as-child>
      <Button class="rounded-full px-4 py-7" type="button" id="boardButton">
        <ChevronsRight />
      </Button>
    </SheetTrigger>
    <SheetContent :side="'left'" class="bg-secondary pt-8">
      <VisuallyHidden>
        <SheetHeader class="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription> </SheetDescription>
        </SheetHeader>
      </VisuallyHidden>
      <SheetClose as-child>
        <Button class="absolute top-1/2 right-0 translate-x-2/3 rounded-full px-4 py-7 -z-1">
          <ChevronsLeft />
        </Button>
      </SheetClose>
      <nav class="flex flex-col justify-between h-full">
        <ul class="space-y-6">
          <li v-for="link in adminLink" :key="link.name">
            <RouterLink :to="link.link" class="block w-full">
              <SheetClose class="w-full">
                <Button
                  type="button"
                  class="w-full"
                  :variant="route.path === link.link ? 'default' : 'outline-primary'"
                  >{{ link.name }}</Button
                >
              </SheetClose>
            </RouterLink>
          </li>
        </ul>
        <ul class="space-y-6">
          <li>
            <AlertDialog>
              <AlertDialogTrigger as-child>
                <Button type="button" class="w-full">登出</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>您確定要登出嗎?</AlertDialogTitle>
                  <AlertDialogDescription> </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500 closeButton"
                  >
                    取消
                  </AlertDialogCancel>
                  <AlertDialogAction
                    class="border-destructive border bg-transparent text-foreground hover:bg-destructive closeButton"
                    @click="logout"
                    >確定</AlertDialogAction
                  >
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </li>
          <li class="text-end">
            <Button @click="toggleDarkTheme(!isDark)">
              <Sun v-if="isDark" />
              <Moon v-else />
            </Button>
          </li>
        </ul>
      </nav>
    </SheetContent>
  </Sheet>
</template>
<script setup>
import { onMounted } from 'vue';
import { VisuallyHidden } from 'radix-vue';
import { ChevronsRight, ChevronsLeft, Sun, Moon } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import useTheme from '@/hooks/useTheme';
import { useUserStore } from '@/stores/user';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const { toggleDarkTheme, toggleTheme, isDark } = useTheme();
const route = useRoute();
const { logout } = useUserStore();

const adminLink = [
  {
    name: '產品管理',
    link: '/admin/products',
  },
  {
    name: '訂單管理',
    link: '/admin/orders',
  },
  {
    name: '回前台',
    link: '/',
  },
];

onMounted(() => {
  toggleDarkTheme(true);
  toggleTheme('theme-blue');
});
</script>
