<script setup>
import { Primitive } from 'radix-vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '.';

const props = defineProps({
  variant: { type: null, required: false },
  size: { type: null, required: false },
  as: { type: String, required: false, default: 'button' },
  class: { type: null, required: false },
  asChild: { type: Boolean, required: false },
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
