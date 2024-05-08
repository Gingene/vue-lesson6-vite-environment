<template>
  <HeaderNav />
  <main class="container">
    <div class="text-center">這裡甚麼都沒有~</div>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
      </AccordionItem>
    </Accordion>

    <div class="text-center">
      <Button>
        <RouterLink to="/"> 點我回首頁 </RouterLink>
      </Button>
    </div>
  </main>
</template>
<script setup>
import HeaderNav from '@/components/layout/HeaderNav.vue';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
</script>
