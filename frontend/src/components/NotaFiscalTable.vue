<template>
  <section class="container-tabela">
    <header class="header">
      <img :src="iconTable" alt="Icon" class="header-icon" />
      <h3 class="header-text">Notas fiscais</h3>
    </header>
    <p class="header-subtext">Visualize as notas fiscais que você tem.</p>
    <div v-if="loading" class="loader"></div>

    <div >
      <div class="table-container">
        <table class="table">
          <thead>
            <tr class="table-header">
              <th class="header-item">NOTA FISCAL</th>
              <th class="header-item">SACADO</th>
              <th class="header-item">CEDENTE</th>
              <th class="header-item">EMISSÃO</th>
              <th class="header-item">VALOR</th>
              <th class="header-item" style="width: 110px;">STATUS</th>
              <th class="header-item"></th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr class="table-row" v-for="nota in notas" :key="nota.id">
              <td class="table-nf">{{ nota.nNf }}</td>
              <td class="table-emet">{{ nota.buyer.name }}</td>
              <td class="table-provider">{{ nota.provider.name }}</td>
              <td class="table-emission">{{ nota.emissionDate }}</td>
              <td class="table-value">{{ nota.value }}</td>
              <td class="table-status">{{ nota.orderStatusProvider }}</td>
              <td class="table-but">
                <b-button @click="openProviderModal(nota.providerId)" variant="outline-primary">{{ nota.acao }}</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <ProviderModal :show="showModal" :providerData="providerData" @close="showModal = false" />
  </section>
</template>

<script>
import { fetchNotas, fetchProviderData } from '@/services/api';
import ProviderModal from './ProviderModal.vue';

export default {
  components: {
    ProviderModal,
  },
  data() {
    return {
      iconTable: require('@/assets/icontable.png'),
      notas: [],
      showModal: false,
      loading: true,

      providerData: {},
    };
  },
  mounted() {
    this.getNotas();
  },
  methods: {
    async getNotas() {
      try {
        const result = await fetchNotas();
        console.log(result)
        this.notas = result.map(nota => ({
          id: nota.id,
          nNf: nota.nNf,
          buyer: nota.buyer,
          provider: nota.provider,
          providerId: nota.providerId,
          emissionDate: new Date(nota.emissionDate).toLocaleDateString(),
          value: `R$ ${(nota.value / 100).toFixed(2)}`,
          orderStatusProvider: nota.orderStatusProvider === "0" ? 'Pendente' : 'Concluído',
          acao: 'Dados do cedente'
        }));

      } catch (error) {
        console.error('Erro ao buscar notas fiscais:', error);
      }
    finally {
        this.loading = false;
      }
    },
    async openProviderModal(providerId) {
      try {
        const providerData = await fetchProviderData(providerId);
        console.log(providerData)
        this.providerData = providerData;
        this.showModal = true;
      } catch (error) {
        console.error('Erro ao buscar dados do cedente:', error);
      }
    }
  }
};
</script>

<style src="@/styles/NotaFiscalTable.css"></style>
