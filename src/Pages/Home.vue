<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";

const itemData = ref([]);

const getData = async () => {
	return fetch("/api/fetchNotion").then((res) => res.json());
};

onMounted(() => {
	
	getData().then((data) => {
		itemData.value = data.response.results;
	});
});
</script>

<template>
	<main>
		<Card
			v-for="item in itemData"
			:title="item.properties.Name.title[0].plain_text"
			:imgSrc="item.properties.Image.files[0].file.url"
			:imgAlt="item.properties.Alt.formula.string"
			:desc="item.properties.Description.rich_text[0].plain_text"
			:thisPageId="item.id"
		/>
	</main>
</template>