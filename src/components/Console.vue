<template>
  <article class="wrapper">
    <h1 class="heading wrapper__heading">See, or check console</h1>
    <article v-for="log in data" class="console">
      <header class="console__header">
        <h2 class="heading console__heading">id: {{log.id}}</h2>
        <h3 class="heading">Name: {{log.name}}</h3>
        <img :src="log.image" alt="cock" class="console__image">
      </header>
      <p class="text">Message: {{log.message}}</p>
      <p class="text">Time: {{new Date(log.timestamp)}}</p>
      <div>
        <pre v-for="stroke in log.stack" class="console__log">{{stroke}}</pre>
      </div>
    </article>
  </article>
</template>

<script>
export default {
  name: "Console",
  props: {
    data: {
      type: Array,
    }
  },
}
</script>

<style scoped>
.wrapper {
  padding: 1rem;
  display: grid;
  grid-gap: .5rem;
}
.wrapper__heading {
  margin-bottom: 1rem;
}
.heading {
  white-space: nowrap;
  align-self: start;
}
.console {
  padding: 2rem;
  display: grid;
  grid-gap: 1.5rem;
  background: hsl(0, 0%, 0%);
}
.console:hover {
  cursor: alias;
}
.console__header {
  width: 100%;
  display: grid;
  grid-template-columns: auto 200px;
  justify-content: start;
  align-items: center;
  grid-gap: 1rem;
}
.console__heading {
  align-self: end;
}
.console__image {
  position: relative;
  grid-column: 1;
  grid-row: span 2 / 1;
  width: 200px;
  height: 200px;
  object-fit: cover;
  transition: all .5s ease-out;
  cursor: zoom-out;
}
.console__image:hover {
  cursor:
    url("https://free-png.ru/wp-content/uploads/2021/03/Design-Hand-Isometric-Pixel-Art-6169b23e.png"), grabbing;
  transform: scale(3) translate(50%, 25%);
}
</style>
