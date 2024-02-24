<template>
  <section class="container p-20">
    <h2 class="text-center mb-6 lg:mb-10">使用者後台登入</h2>
    <div class="flex justify-center">
      <form @submit="onSubmit" class="w-1/2 space-y-4 lg:space-y-6">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>信箱:</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="請輸入帳號"
                v-bind="componentField"
                autocomplete="username"
              />
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>密碼:</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="請輸入密碼"
                v-bind="componentField"
                autocomplete="current-password"
                inputmode="numeric"
              />
            </FormControl>
            <FormDescription> </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit" class="w-full"> 登入 </Button>
      </form>
    </div>
  </section>
</template>

<script setup>
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
import { useToast } from '@/components/ui/toast/use-toast';
import { useUserStore } from '@/stores/user';

const { toast } = useToast();
const { login } = useUserStore();

const formSchema = toTypedSchema(
  z.object({
    username: z.string({ required_error: '必填' }).email('信箱格式不正確'),
    password: z.string({ required_error: '必填' }),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  const payload = {
    username: values.username,
    password: values.password,
  };

  login(payload);

  toast({
    title: '登入中...',
    description: '',
    // description: h(
    //   'pre',
    //   { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
    //   h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    // ),
  });
});
</script>
