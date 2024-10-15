<template>
  <div class="guide">
    <RouterLink class="guide__link" to="/brokers">
      <img alt="navigate" width="24" height="24" src="@/assets/img/pointer.svg" />
      Back to data broker list
    </RouterLink>
    <LoaderComponent v-if="loading" />
    <div class="guide-content" v-html="pageHtml" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';
import { RouterLink } from 'vue-router';
import { loadMarkdownFile } from '@/utils';
import LoaderComponent from '@/components/LoaderComponent.vue';

const props = defineProps({
  fileName: {
    type: String,
    required: true
  }
});

const pageHtml = ref('');
const loading = ref(true);

const openUrl = website => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];

    if (tab) {
      chrome.tabs.update(tab.id, { url: website });
    } else {
      chrome.tabs.create({ url: website });
    }
  });
};

const loadMarkdown = async broker => {
  try {
    const markdown = await loadMarkdownFile(broker);
    const markdownHTML = await marked(markdown);

    pageHtml.value = markdownHTML;
  } catch (error) {
    pageHtml.value = 'Something went wrong';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadMarkdown(props.fileName);

  document.querySelector('.guide-content').addEventListener('click', e => {
    if (e.target.tagName === 'A' && e.target.href.startsWith('http')) {
      openUrl(e.target.href);
    }
  });
});
</script>

<style src="@/assets/styles/pages/guide.scss" lang="scss" />
