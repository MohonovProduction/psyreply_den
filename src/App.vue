<template>
  <div class="wrapper">
    <auth v-if="needAuth" @submit="getData" />
    <console v-else />
  </div>
</template>

<script>
import Auth from '@/components/Auth';
import Console from '@/components/Console'

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
      this.needAuth = false
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
