<script setup>
import {useRouter} from 'vue-router'
</script>

<template>
  <nav class="left-nav">
    <router-link :to="{ name: 'about' }">About us</router-link>

    <a href="#">Faculty &amp; staff</a>

    <a href="#">Undergraduate students</a>

    <a href="#">Graduate students</a>

    <a href="#">Courses &amp; syllabi</a>

    <a href="#">News &amp; announcements</a>

    <a href="#">Friends &amp; alumni</a>

    <router-link :to="{ name: 'contact-us' }">Contact us</router-link>


    <router-link v-for="(route, index) in useRouter().options.routes"
                 v-text="route.meta.prettyName"
                 :to="{ name: route.name }"
    />

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