<script setup>
import { onMounted, ref } from "vue";

const itemData = ref([]);

const getData = async () => {
	return fetch("/api/fetchNotion").then((res) => res.json());
};
const kebabCase = (str) =>
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.join("-")
		.toLowerCase();

onMounted(() => {
	getData().then((data) => {
		itemData.value = data.response.results;
	});
});

</script>

<template>
	<main>
		<article v-for="item in itemData">
			<h1 class="title">{{ item.properties.Name.title[0].plain_text }}</h1>
			<img :src="item.properties.Image.files[0].file.url" :alt="item.properties.Alt.formula.string" />
			<p>{{ item.properties.Description.rich_text[0].plain_text }}</p>
			<router-link :to="item.id">
				<button>Check out the {{ item.properties.Name.title[0].plain_text }} symbol</button>
			</router-link>
			<!-- <router-link :to="kebabCase(item.properties.Name.title[0].plain_text)">
				<button>View Symbol</button>
			</router-link> -->
		</article>
	</main>
</template>

<style scoped>
main {
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
}
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
