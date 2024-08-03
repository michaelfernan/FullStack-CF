<template>
    <div class="modal" v-if="show">
      <div class="modal-container">
        <div class="modal-header">
          <h5 class="modal-title">{{ providerData.name }}</h5>
          <button type="button" class="close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-content">
          <p><strong>ID:</strong> {{ providerData.id }}</p>
          <p><strong>Nome:</strong> {{ providerData.name }}</p>
          <p><strong>Nome Comercial:</strong> {{ providerData.tradingName }}</p>
          <p><strong>Email:</strong> {{ providerData.email }}</p>
          <p><strong>Endereço:</strong> {{ providerData.address }}</p>
          <p><strong>Telefone:</strong> {{ providerData.phoneNumber }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
      providerData: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-header {
    background-color: #00ad8c; 
    color: #fff;
    padding: 15px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    border-radius: 10px 10px 0 0;
  }
  
  .modal-content {
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
  }
  
  .modal-container {
    margin: auto 1em;
    color: #2c2c2c;
    background-color: #fff;
    border-radius: 20px 20px 10px 10px;
    max-width: 500px;
    width: 100%;
  }
  
  .close {
    color: #fff;
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: #e0e0e0;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  