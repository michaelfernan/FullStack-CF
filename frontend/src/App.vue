<template>
  <div >

    <b-container fluid>
      <b-row no-gutters>
     
        <b-col cols="3" class="sidebar">
          <SidebarComponent />
        </b-col>

        <b-col cols="9">
          <NavbarComponent />
          <b-container fluid >
            <router-view></router-view>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
  },
};
</script>

