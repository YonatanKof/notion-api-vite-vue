<script setup>
import Symbol from "../Pages/Symbol.vue";

const props = defineProps({
	title: String,
	imgSrc: String,
	imgAlt: String,
	desc: String,
	thisPageId: String,
});
const kebabCase = (str) =>
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.join("-")
		.toLowerCase();
</script>

<template>
	<article :this-symbol-page-id="thisPageId">
		<h1 class="title">{{ title }}</h1>
		<img :src="imgSrc" :alt="imgAlt" />
		<p>{{ desc }}</p>
		<router-link :to="thisPageId">
			<button>Check out the {{ title }} symbol</button>
		</router-link>
	</article>
</template>

<style scoped>
article {
	background-color: bisque;
	color: firebrick;
	border-radius: 0.5rem;
	padding: 2rem;
}
img {
	width: 100%;
	max-width: 20rem;
}
.title {
	font-size: 1.5rem;
	line-height: 1.25;
}
</style>
