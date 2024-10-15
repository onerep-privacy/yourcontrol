<template>
  <div class="component-spinner">
    <img src="@/assets/img/loader.svg" width="34" height="34" alt="Loading" />
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.component-spinner {
  position: fixed;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
