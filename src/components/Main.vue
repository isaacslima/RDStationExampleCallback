<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn @click="callback()">Teste auth</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'Main',

  data: () => ({
    clienteId: "9eca469f-fe26-42bf-9c05-0ae6dfde2b40",
    redirectUrl: "https://rdstationcallback.web.app/callback"
  }),
  methods: {
    callback () {
      let url = `https://api.rd.services/auth/dialog?client_id=${this.clienteId}&redirect_url=${this.redirectUrl}`
      axios.get(url)
      .then(res => {
          console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
    }
  }
}
</script>
