<template>
  <div>
       <div class="layout-container">
      <aside>
        <SidebarComponent />
      </aside>
      <main class="h-main-content">
        <section class="h-container">
          <article class="h-content-container">
            <div class="h-home">
              <h1 class="h-bem-vindo">Bem-vindo à</h1>
              <img :src="imagem" alt="Logo da empresa" class="h-imagem" />
            </div>
          </article>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';


export default {
  name: 'HomePage',
  components: {
    SidebarComponent,
   },
  data() {
    return {
      imagem: require('@/assets/Logo-home.jpeg'),
    };
  },
};
</script>

<style scoped>
@import "@/styles/Home.css";
</style>
