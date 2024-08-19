<template>
  <Header /> 
  <RouterView />
</template>

<script setup lang="ts">
import Header from '@/shared/components/Header.vue';
import { RouterView } from 'vue-router'
</script>
