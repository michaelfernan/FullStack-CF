<template>
  <nav class="sidebar">
    <header class="sider-logo">
      <img :src="logo" alt="Cashforce Logo" class="logo img-fluid">
    </header>
    <ul class="menu-list">
      <li class="menu-item" @click="navigateTo('home')">
        <div class="icon-bar" :class="{ 'select': selected === 'home' }"></div>
        <div class="frame-667 d-flex align-items-center">
          <img :src="icon" alt="Menu Icon" class="icon">
          <span class="nav-text">Home</span>
        </div>
      </li>
      <li class="menu-item" @click="navigateTo('notasfiscais')">
        <div class="icon-bar" :class="{ 'select': selected === 'notasfiscais' }"></div>
        <div class="frame-667 d-flex align-items-center">
          <img :src="icon" alt="Menu Icon" class="icon">
          <span class="nav-text">Notas fiscais</span>
        </div>
      </li>
    </ul>
  </nav>
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
