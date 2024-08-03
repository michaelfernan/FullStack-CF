import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3399',
});

export const fetchNotas = async () => {
  try {
    const response = await api.get('/orders');
    console.log('data', response)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar notas fiscais:', error);
    throw error;
  }
};
export const fetchProviderData = async (providerId) => {
  try {
    const response = await api.get(`/providers/${providerId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar dados do cedente com ID ${providerId}:`, error);
    throw error;
  }
};