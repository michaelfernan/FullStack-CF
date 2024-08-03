<template>
  <aside class="sidebar">
    <div class="sider-logo">
      <img :src="logo" alt="Cashforce Logo" class="logo">
    </div>
    <div class="menu-item" @click="navigateTo('home')">
      <div class="icon-bar" :class="{ 'select': selected === 'home' }"></div>
      <div class="frame-667">
        <img :src="icon" alt="Menu Icon" class="icon">
        <span class="nav-text">Home</span>
      </div>
    </div>
    <div class="menu-item" @click="navigateTo('notasfiscais')">
      <div class="icon-bar" :class="{ 'select': selected === 'notasfiscais' }"></div>
      <div class="frame-667">
        <img :src="icon" alt="Menu Icon" class="icon">
        <span class="nav-text">Notas fiscais</span>
      </div>
    </div>
   
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      icon: require('@/assets/iconmenu.png'),
      logo: require('@/assets/logo.png'),
      selected: '' 
    };
  },
  mounted() {
  
    if (this.$route.path === '/notasfiscais') {
      this.selected = 'notasfiscais';
    } else {
      this.selected = 'home';
    }
  },
  methods: {
    navigateTo(route) {
      this.selected = route;
      this.$router.push({ name: route === 'home' ? 'Home' : 'NotasFiscais' });
    }
  }
}
</script>

<style scoped>
@import "@/styles/SidebarComponent.css";
</style>
