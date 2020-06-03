<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn @click="callback()">Atualizar Token</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Main',

  data: () => ({
  }),
  methods: {
    callback () {
      window.open("https://api.rd.services/auth/dialog?client_id=9eca469f-fe26-42bf-9c05-0ae6dfde2b40&redirect_url=https://rdstationcallback.web.app/callback");
    }
  }
}
</script>
