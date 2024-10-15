<template>
  <footer :class="footerClass">
    <ul class="footer__list">
      <li>
        <a href="https://onerep.com/blog/yourcontrol-free-data-broker-removal-extension" target="_blank"
          >About YourControl</a
        >
      </li>
      <li>
        <a href="https://onerep.com/blog/yourcontrol-free-data-broker-removal-extension#brokers-id" target="_blank"
          >Public vs Non-Public data brokers</a
        >
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const footerClass = computed(() => {
  return route.name === 'home' ? 'footer footer--no-border' : 'footer';
});
</script>
