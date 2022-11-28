<template>
  <div class="wrapper">
    <auth v-if="needAuth" @submit="getData" />
    <console :data="data" v-else />
  </div>
</template>

<script>
import Auth from '@/components/Auth';
import Console from '@/components/Console'
import Logger from '@/api/Logger/index';

export default {
  name: 'App',
  components: {
    Auth, Console
  },
  data() {
    return {
      data: null,
      needAuth: true
    }
  },
  methods: {
    getData(n) {
      console.log(n)
      Logger.getAll(n)
        .then(res => {
          localStorage.setItem('passphrase', n)
          res.json().then(r => this.data = r)
          this.needAuth = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

#app {
  font-family: 'Source Code Pro', monospace;
  background: hsl(0, 2%, 8%);
  color: hsl(87, 65%, 43%);
  min-height: 100vh;
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
