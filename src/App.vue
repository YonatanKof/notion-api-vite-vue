<script setup>
import Card from "./components/Card.vue";
</script>

<template>
	<main>
		<Card />
		<Card />
		<Card />
		<Card />
	</main>
</template>

<style scoped>
main{
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
