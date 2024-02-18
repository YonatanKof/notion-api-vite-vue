<script setup>
import { onMounted, ref } from 'vue';
import Card from '../components/Card.vue';

const itemData = ref([]);
const dbMetadata = ref([]);
const isLoading = ref(true);
const getData = async () => {
	return fetch('/api/fetchNotion').then((res) => res.json());
};

onMounted(() => {
	getData().then((data) => {
		dbMetadata.value = data.dbResponse;
		itemData.value = data.response.results;
		isLoading.value = false;
	});
});
</script>

<template>
	<!-- <h1 v-if="dbMetadata.title" class="main-title">{{ dbMetadata.title[0].plain_text }}</h1> -->
	<h1 class="main-title">Flowchart info</h1>
	<div v-if="isLoading === false">
		<h3 class="sub-title">
			<a target="_blank" v-if="dbMetadata.description" :href="dbMetadata.description[1].href">
				Link to assets on Dropbox
			</a>
			|
			<a target="_blank" :href="dbMetadata.url">Link to Notion database</a>
		</h3>
		<main>
			<Card
				v-if="itemData"
				v-for="item in itemData"
				:title="item.properties.Name.title[0].plain_text"
				:imgSrc="item.properties.Image.files[0].file.url"
				:imgAlt="item.properties.Alt.formula.string"
				:desc="item.properties.Description.rich_text[0].plain_text"
				:thisPageId="item.id"
			/>
		</main>
	</div>
	<div v-else><h1>Loading...</h1></div>
</template>
