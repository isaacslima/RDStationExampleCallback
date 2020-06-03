<template>
  <v-app>
    <v-content>
      <h1>Callback</h1>
    </v-content>
  </v-app>
</template>


<script>
import axios from 'axios';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  mounted () {
    let code = this.$route.query.code;
    let url = `http://localhost:54660/weatherforecast`

    axios.post(url, code)
    .then(res => {
        console.log(res);
    })
    .catch((error) => {
      console.log(error); 
    })
    .finally(() => {});
    
  },
};
</script>