<template>
  <section class="container py-20 lg:py-32">
    <div class="text-end">
      <Dialog>
        <DialogTrigger>
          <Button variant="outline-primary" @click="resetProduct">
            <PlusCircle />
            <span class="ms-2">新增產品</span>
          </Button>
        </DialogTrigger>
        <DialogContent class="lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl bg-secondary">
          <DialogHeader>
            <DialogTitle class="text-xl">新增產品</DialogTitle>
            <DialogDescription> </DialogDescription>
          </DialogHeader>
          <ScrollArea class="border h-[500px] lg:h-[800px] p-4">
            <form>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-10">
                  <div class="space-y-4">
                    <Label class="text-base" for="main-product">主要圖片</Label>
                    <Input
                      id="main-product"
                      v-model="tempProduct.imageUrl"
                      placeholder="請輸入圖片"
                    />
                    <img class="object-cover" :src="tempProduct.imageUrl" alt="" />
                  </div>
                  <div
                    v-for="(item, index) in tempProduct.imagesUrl"
                    :key="index"
                    class="space-y-4"
                  >
                    <h3 class="mb-4">新增多圖</h3>
                    <Label :for="'product-image' + (index + 1)">圖片網址{{ index + 1 }}</Label>
                    <Input
                      :id="'product-image' + (index + 1)"
                      v-model="tempProduct.imagesUrl[index]"
                      placeholder="請輸入圖片"
                    />
                    <img class="object-cover" :src="tempProduct.imagesUrl[index]" alt="" />
                  </div>
                  <div v-if="tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] !== ''">
                    <Button variant="outline-primary" @click="tempProduct.imagesUrl.push('')">
                      新增圖片
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="destructive"
                      class="w-full"
                      @click="tempProduct.imagesUrl.pop()"
                    >
                      刪除圖片
                    </Button>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-6">
                  <div class="col-span-2 space-y-4">
                    <Label class="text-base" for="product-title">標題</Label>
                    <Input
                      id="product-title"
                      v-model="tempProduct.title"
                      placeholder="請輸入標題"
                    />
                  </div>
                  <div class="space-y-4">
                    <Label class="text-base" for="product-category">分類</Label>
                    <Input
                      id="product-category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="space-y-4">
                    <Label class="text-base" for="product-unit">單位</Label>
                    <Input id="product-unit" v-model="tempProduct.unit" placeholder="請輸入單位" />
                  </div>
                  <div class="space-y-4">
                    <Label class="text-base" for="product-origin-price">原價</Label>
                    <Input
                      id="product-origin-price"
                      type="number"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="space-y-4">
                    <Label class="text-base" for="product-price">價格</Label>
                    <Input
                      id="product-price"
                      type="number"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    />
                  </div>
                  <div class="space-y-4 col-span-2 border-t-2 border-foreground pt-10">
                    <Label class="text-base" for="product-description">產品描述</Label>
                    <Textarea
                      id="product-description"
                      v-model="tempProduct.description"
                      placeholder="請輸入產品描述"
                    />
                  </div>
                  <div class="space-y-4 col-span-2">
                    <Label class="text-base" for="product-content">說明內容</Label>
                    <Textarea
                      id="product-content"
                      v-model="tempProduct.content"
                      placeholder="請輸入產品說明內容"
                    />
                  </div>
                  <div class="flex">
                    <Input
                      id="product-enabled"
                      type="checkbox"
                      class="size-6 me-2"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <Label class="text-base" for="product-enabled">是否啟用</Label>
                  </div>
                </div>

                <DialogFooter class="lg:col-start-2">
                  <DialogClose as-child>
                    <Button
                      type="button"
                      class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500 closeButton"
                      >取消</Button
                    >
                  </DialogClose>

                  <Button type="button" variant="outline-primary" @click="postProduct">確認</Button>
                </DialogFooter>
              </div>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
    <Table>
      <TableCaption>產品列表</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]"> 分類 </TableHead>
          <TableHead>商品名稱</TableHead>
          <TableHead>原價 / 售價</TableHead>
          <TableHead>是否啟用</TableHead>
          <TableHead class="text-right"> 編輯 </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="product in filterProducts" :key="product.id">
          <TableCell class="font-medium"> {{ product.category }} </TableCell>
          <TableCell>{{ product.title }}</TableCell>
          <TableCell>{{ product.origin_price }} / {{ product.price }}</TableCell>
          <TableCell>{{ product.is_enabled === 1 ? '是' : '否' }}</TableCell>
          <TableCell class="text-right space-x-2">
            <Dialog>
              <DialogTrigger>
                <Button variant="outline-primary" @click="editProduct(product)"> 編輯 </Button>
              </DialogTrigger>
              <DialogContent class="lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
                <DialogHeader>
                  <DialogTitle class="text-xl">編輯產品</DialogTitle>
                  <DialogDescription> </DialogDescription>
                </DialogHeader>
                <ScrollArea class="border h-[500px] lg:h-[800px] p-4">
                  <form>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div class="space-y-10">
                        <div class="space-y-4">
                          <Label class="text-base" for="main-product">主要圖片</Label>
                          <Input
                            id="main-product"
                            v-model="tempProduct.imageUrl"
                            placeholder="請輸入圖片"
                          />
                          <img class="object-cover" :src="tempProduct.imageUrl" alt="" />
                        </div>
                        <div
                          v-for="(item, index) in tempProduct.imagesUrl"
                          :key="index"
                          class="space-y-4"
                        >
                          <h3 class="mb-4">新增多圖</h3>
                          <Label :for="'product-image' + (index + 1)"
                            >圖片網址{{ index + 1 }}</Label
                          >
                          <Input
                            :id="'product-image' + (index + 1)"
                            v-model="tempProduct.imagesUrl[index]"
                            placeholder="請輸入圖片"
                          />
                          <img class="object-cover" :src="tempProduct.imagesUrl[index]" alt="" />
                        </div>
                        <div v-if="tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] !== ''">
                          <Button variant="outline-primary" @click="tempProduct.imagesUrl.push('')">
                            新增圖片
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="destructive"
                            class="w-full"
                            @click="tempProduct.imagesUrl.pop()"
                          >
                            刪除圖片
                          </Button>
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-6">
                        <div class="col-span-2 space-y-4">
                          <Label class="text-base" for="product-title">標題</Label>
                          <Input
                            id="product-title"
                            v-model="tempProduct.title"
                            placeholder="請輸入標題"
                          />
                        </div>
                        <div class="space-y-4">
                          <Label class="text-base" for="product-category">分類</Label>
                          <Input
                            id="product-category"
                            v-model="tempProduct.category"
                            placeholder="請輸入分類"
                          />
                        </div>
                        <div class="space-y-4">
                          <Label class="text-base" for="product-unit">單位</Label>
                          <Input
                            id="product-unit"
                            v-model="tempProduct.unit"
                            placeholder="請輸入單位"
                          />
                        </div>
                        <div class="space-y-4">
                          <Label class="text-base" for="product-origin-price">原價</Label>
                          <Input
                            id="product-origin-price"
                            type="number"
                            v-model="tempProduct.origin_price"
                            placeholder="請輸入原價"
                          />
                        </div>
                        <div class="space-y-4">
                          <Label class="text-base" for="product-price">價格</Label>
                          <Input
                            id="product-price"
                            type="number"
                            v-model="tempProduct.price"
                            placeholder="請輸入售價"
                          />
                        </div>
                        <div class="space-y-4 col-span-2 border-t-2 border-foreground pt-10">
                          <Label class="text-base" for="product-description">產品描述</Label>
                          <Textarea
                            id="product-description"
                            v-model="tempProduct.description"
                            placeholder="請輸入產品描述"
                          />
                        </div>
                        <div class="space-y-4 col-span-2">
                          <Label class="text-base" for="product-content">說明內容</Label>
                          <Textarea
                            id="product-content"
                            v-model="tempProduct.content"
                            placeholder="請輸入產品說明內容"
                          />
                        </div>
                        <div class="flex">
                          <input
                            id="product-enabled"
                            type="checkbox"
                            class="size-6 me-2"
                            v-model="tempProduct.is_enabled"
                            :true-value="1"
                            :false-value="0"
                          />
                          <Label class="text-base" for="product-enabled">是否啟用</Label>
                        </div>
                      </div>

                      <DialogFooter class="lg:col-start-2">
                        <DialogClose as-child>
                          <Button
                            type="button"
                            class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500 closeButton"
                            >取消</Button
                          >
                        </DialogClose>

                        <Button
                          type="button"
                          variant="outline-primary"
                          @click="putProduct(product.id)"
                          >確認</Button
                        >
                      </DialogFooter>
                    </div>
                  </form>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger as-child>
                <Button variant="destructive">刪除</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>您確定要刪除產品嗎?</AlertDialogTitle>
                  <AlertDialogDescription> {{ product.title }} </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    class="border-lime-700 border bg-transparent text-foreground hover:bg-lime-500 closeButton"
                  >
                    取消
                  </AlertDialogCancel>
                  <AlertDialogAction
                    class="border-destructive border bg-transparent text-foreground hover:bg-destructive closeButton"
                    @click="deleteProduct(product.id)"
                    >確定</AlertDialogAction
                  >
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div class="flex justify-center my-6 lg:my-10">
      <Pagination
        v-slot="{ page }"
        :total="pagination?.total_pages * 10"
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
  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { PlusCircle } from 'lucide-vue-next';
import { useAdminProductStore } from '@/stores/adminProduct';

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

import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/components/ui/toast/use-toast';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';

const { getProducts, resetProduct, postProduct, editProduct, putProduct, deleteProduct } =
  useAdminProductStore();
const { filterProducts, pagination, tempProduct } = storeToRefs(useAdminProductStore());
// const { toast } = useToast();

// toast({
//     title: '登入中...',
//     description: '',
//     // description: h(
//     //   'pre',
//     //   { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
//     //   h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
//     // ),
//   });
onMounted(() => {
  getProducts();
});
</script>
