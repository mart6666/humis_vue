<script setup>

</script>

<template>
  <nav>
    <router-link :to="{ name: 'about' }">About us</router-link>

    <a href="#">Faculty &amp; staff</a>
    <a href="undergrad.html">Undergraduate students</a>
    <a href="graduate.html">Graduate students</a>
    <a href="#">Courses &amp; syllabi</a>
    <a href="#">News &amp; announcements</a>
    <a href="#">Friends &amp; Alumni</a>
    <a href="contact-us.html">Contact us</a>
  </nav>
</template>

<style scoped>
nav {
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

    &.active{
      font-weight: bold;
    }
  }
}
</style>