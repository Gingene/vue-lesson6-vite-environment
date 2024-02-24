<template>
  <section class="container py-20 lg:py-32">
    <div class="text-end">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="destructive" :disabled="!orders?.length">刪除所有訂單</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>您真的確定要刪除所有訂單嗎?</AlertDialogTitle>
            <AlertDialogDescription class="text-destructive">
              此操作無法回復，所有訂單將會被刪除
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500 closeButton"
            >
              取消
            </AlertDialogCancel>
            <AlertDialogAction
              class="border-destructive border bg-transparent text-foreground hover:bg-destructive closeButton"
              @click="deleteAllOrders"
              >確定</AlertDialogAction
            >
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    <Table>
      <TableCaption>訂單列表</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead> 訂單時間 </TableHead>
          <TableHead>客戶名稱</TableHead>
          <TableHead>訂單價格</TableHead>
          <TableHead>訂單留言</TableHead>
          <TableHead>付款情況</TableHead>
          <TableHead class="text-right"> 編輯 </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="order in orders" :key="order.id">
          <TableCell class="font-medium">
            {{ useDateFormat(order.create_at * 1000, 'YYYY-MM-DD HH:mm:ss') }}
          </TableCell>
          <TableCell>
            <Dialog>
              <DialogTrigger as-child>
                <Button variant="ghost">
                  {{ order.user.name }}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>客戶詳細資訊</DialogTitle>
                  <DialogDescription> </DialogDescription>
                </DialogHeader>
                <div class="flex flex-col">
                  <span v-for="(info, key) in order.user" :key="info.name">
                    {{ key }} / {{ info }}
                  </span>
                </div>
                <DialogFooter>
                  <DialogClose as-child>
                    <Button variant="ghost"> 關閉 </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </TableCell>
          <TableCell>{{ order.total }}</TableCell>
          <TableCell>{{ order.message }}</TableCell>
          <TableCell>
            <Button variant="outline-primary" @click="togglePaidState(order)">
              {{ order.is_paid ? '已付款' : '尚未付款' }}
            </Button>
          </TableCell>

          <AlertDialog>
            <AlertDialogTrigger as-child>
              <Button variant="destructive">刪除</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>您確定要刪除訂單嗎?</AlertDialogTitle>
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
                  @click="deleteOrder(order.id)"
                  >確定</AlertDialogAction
                >
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableRow>
      </TableBody>
    </Table>
  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useOrdersStore } from '@/stores/orders';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

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

import { useDateFormat } from '@vueuse/core';

const { getOrders, togglePaidState, deleteOrder, deleteAllOrders } = useOrdersStore();
const { orders } = storeToRefs(useOrdersStore());

onMounted(() => {
  getOrders();
});
</script>
