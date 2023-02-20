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
		<div class="btn">
			<router-link :to="thisPageId"> Check out the <strong>{{ title }}</strong> symbol </router-link>
		</div>
	</article>
</template>
