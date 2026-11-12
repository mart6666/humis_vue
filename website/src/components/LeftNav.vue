<script setup>
import {useRouter} from 'vue-router'
</script>

<template>
  <nav class="left-nav">
    <router-link v-for="(route, index) in useRouter().options.routes
    .filter(route => route.meta.hideMe !== true)"
                 :key="index"
                 :to="{ name: route.name }"
    >
      {{ route.meta.prettyName }}
    </router-link>

  </nav>
</template>

<style scoped>
nav.left-nav {
  margin: 20px 20px 0;

  a {
    display: block;
    text-transform: uppercase;
    font-size: 10px;
    color: var(--black);
    border-bottom: 2px solid var(--engDeptGreen);
    text-decoration: none;
    padding: 10px 0 10px 10px;

    &:hover {
      background-color: var(--engDeptGreen);
      color: #fff;
    }

    &.active {
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>