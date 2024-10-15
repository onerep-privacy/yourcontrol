import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import GuideView from '@/views/GuideView.vue';
import FooterView from '@/views/FooterView.vue';
import BrokersView from '@/views/BrokersView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        footer: FooterView
      }
    },
    {
      path: '/brokers',
      name: 'brokers',
      components: {
        default: BrokersView,
        footer: FooterView
      }
    },
    {
      path: '/guide/:fileName',
      name: 'guide',
      props: true,
      component: GuideView
    }
  ]
});

export default router;
