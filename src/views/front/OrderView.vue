<template>
  <section class="container lg:grid lg:grid-cols-3 gap-6 py-6 lg:py-10">
    <main class="col-span-2">
      <Table>
        <TableCaption>請填寫訂單資料</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead> 商品名 </TableHead>
            <TableHead>單價</TableHead>
            <TableHead>數量</TableHead>
            <TableHead class="text-right"> 價格 </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="cartProduct in cart" :key="cartProduct.id">
            <TableCell class="font-medium flex items-center space-x-3">
              <Button
                variant="ghost"
                class="hover:bg-destructive"
                @click="removeCartProduct(cartProduct.id)"
                ><MinusCircle />
              </Button>
              <span>{{ cartProduct.product.title }}</span>
            </TableCell>
            <TableCell>{{ cartProduct.product.price }}</TableCell>
            <TableCell>x {{ cartProduct.qty }}</TableCell>
            <TableCell class="text-right"> NT${{ cartProduct.final_total }} </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="3"> 總計 </TableCell>
            <TableCell class="text-right font-bold"> NT${{ finalTotal }} </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div class="text-end">
        <Button @click="removeCartAllProduct" :disabled="!cart.length">刪除購物車</Button>
      </div>
    </main>
    <div>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>收件人姓名:</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="請輸入帳號"
                v-bind="componentField"
                autocomplete="name"
              />
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="tel">
          <FormItem>
            <FormLabel>收件人電話:</FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="請輸入電話"
                v-bind="componentField"
                autocomplete="tel"
              />
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>收件人信箱:</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="請輸入信箱"
                v-bind="componentField"
                autocomplete="email"
              />
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="address">
          <FormItem>
            <FormLabel>收件人地址:</FormLabel>
            <FormControl>
              <Input
                type="address"
                placeholder="請輸入地址"
                v-bind="componentField"
                autocomplete="address"
              />
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="payment">
          <FormItem>
            <FormLabel>請選擇付款方式</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
                <SelectTrigger>
                  <SelectValue placeholder="請選擇付款方式" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>付款方式</SelectLabel>
                    <SelectItem value="信用卡"> 信用卡 </SelectItem>
                    <SelectItem value="ATM"> ATM </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="message">
          <FormItem>
            <FormLabel>留言</FormLabel>
            <FormControl>
              <Textarea v-bind="componentField" />
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit"> 送出訂單 </Button>
      </form>
    </div>
  </section>
</template>
<script setup>
// import { h } from 'vue';
import { storeToRefs } from 'pinia';
import { MinusCircle } from 'lucide-vue-next';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from '@/components/ui/table';

import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useCartStore } from '@/stores/cart';
import { useToast } from '@/components/ui/toast/use-toast';

import { http, path } from '@/api';

const { getCart, removeCartProduct, removeCartAllProduct } = useCartStore();
const { cart, finalTotal } = storeToRefs(useCartStore());
const { toast } = useToast();

const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({ required_error: '必填' })
      .min(3, '使用者名稱至少需要 3 個字元')
      .max(50, '使用者名稱最多 50 個字元'),
    tel: z.string({ required_error: '必填' }).min(9),
    email: z.string({ required_error: '必填' }).email('信箱格式不正確'),
    address: z.string({ required_error: '必填' }).min(8, { message: '地址至少為 8 個字元' }),
    payment: z.string({ required_error: '必填' }),
    message: z.string(),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const postOrder = async (payload) => {
  const { data } = await http.post(path.order, payload);
  toast({
    title: data.message,
    description: `訂單金額${data.total} 謝謝您的訂購`,
  });
  getCart();
};

const onSubmit = form.handleSubmit((values) => {
  const payload = {
    data: {
      user: {
        name: values.name,
        email: values.email,
        tel: values.tel,
        address: values.address,
      },
      message: values.message,
    },
  };
  toast({
    title: '請稍等，正為您準備訂單',
    // description: h(
    //   'pre',
    //   { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
    //   h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    // ),
  });
  postOrder(payload);
});
</script>
<style lang="scss">
th,
td {
  white-space: nowrap;
}
</style>
