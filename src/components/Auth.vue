<template>
  <article class="wrapper">
    <h1 class="heading form__heading">Welcume to the club, baby</h1>
    <input autofocus @keydown.enter="this.$emit('submit', phrase)" v-model="phrase" type="text" class="input form__input">
<!--    <button @click="this.$emit('submit', phrase)" class="btn form__btn">Inject</button>-->
  </article>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      phrase: null
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-gap: 1rem;
  background: #000;
  padding: 2rem;
}

.input {
  padding: .3rem;
  border: 3px solid hsl(100, 61%, 34%);
  background: #000;
  outline: none;
  color: inherit;
  font-family: inherit;
}
</style>
