<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home">
    <div class="home__heading">
      <img alt="YourControl logo" src="@/assets/img/logo.svg" width="311" height="36" />
      <p>A free privacy tool courtesy of Onerep</p>
    </div>
    <div class="home__content">
      <p>
        Onerep’s free privacy tool puts you in control of your personal information with TransUnion and 20+ non-public
        data brokers.
        <a href="https://onerep.com/blog/yourcontrol-free-data-broker-removal-extension" target="_blank">Learn more</a>
      </p>
    </div>
    <RouterLink class="btn" to="/brokers">Start controlling your data</RouterLink>
  </div>
</template>

<style src="@/assets/styles/pages/home.scss" lang="scss" />
