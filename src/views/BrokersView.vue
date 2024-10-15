<template>
  <div v-if="dbsSections.length" class="brokers">
    <h1 class="brokers__heading">Manage your data</h1>
    <div class="brokers__list">
      <details v-for="section in dbsSections" :key="section.priority"
        :class="['brokers-section', { accented: section.accented }]">
        <summary>
          <h2 class="brokers-section__title">{{ section.title }}</h2>
          <p class="brokers-section__text">{{ section.description }}</p>
          <img class="brokers-section__icon" alt="show" width="22" height="22" src="@/assets/img/arrow.svg" />
        </summary>
        <ul class="brokers-section__list">
          <li v-for="(broker, index) in section.dataBrokerList" :key="index">
            <RouterLink class="brokers-section__link"
              :to="{ name: 'guide', params: { fileName: broker.dataBrokerName.toLowerCase() } }">
              {{ broker.dataBrokerName }}

              <img alt="navigate" width="24" height="24" src="@/assets/img/pointer.svg" />
            </RouterLink>
          </li>
        </ul>
      </details>
    </div>
    <div class="brokers-info">
      <b> <img alt="info" width="24" height="24" src="@/assets/img/info.svg" /> How it works </b>
      <p>
        YourControl helps you manage your data with key brokers that don’t have public online directories. You’ll get a
        prioritized list with clear instructions for each broker. The extension opens the necessary pages on their
        sites, letting you securely manage your data without third-party involvement.
      </p>
    </div>
  </div>
  <LoaderComponent v-else />
</template>

<script setup>
import { getBrokerList } from '@/utils';
import { ref, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';
import LoaderComponent from '@/components/LoaderComponent.vue';

const dbsSections = ref([]);

const fetchData = async () => {
  try {
    const data = await getBrokerList();

    dbsSections.value = data.dbsSections;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

onBeforeMount(async () => {
  await fetchData();
});
</script>

<style src="@/assets/styles/pages/brokers.scss" lang="scss" />
