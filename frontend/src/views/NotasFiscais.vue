<template>
  <main>
    <section>
      <article>
        <NotaFiscalTable />
      </article>
    </section>
  </main>
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
