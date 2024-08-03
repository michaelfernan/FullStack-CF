<template>
  <div class="main-container">
    <div class="content-container">
      <NotaFiscalTable />
    </div>
  </div>
</template>

<script>
import NotaFiscalTable from '../components/NotaFiscalTable.vue'

export default {
  name: 'NotasFiscais',
  components: {

    NotaFiscalTable,
  },
}
</script>

<style src="@/styles/NotasFiscais.css"></style>
