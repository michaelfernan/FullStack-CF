<template>
  <div class="h-container">
    <div class="h-content-container">
      <div class="home">
        <h3>Bem-vindo à página inicial!</h3>
        <img :src="imagem" alt="imagem logo da empresa grande" class="imagem" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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