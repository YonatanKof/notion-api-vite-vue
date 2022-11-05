<script setup>
import { onMounted, ref } from "vue";

const itemData = ref([]);

const getData = async () => {
	return fetch("/api/fetchNotionPage").then((res) => res.json());
};

onMounted(() => {
	getData().then((data) => {
		itemData.value = data.pageMD;
	});
});
</script>

<template>
	<h1>Symbol</h1>
	<h2>{{ $route.params.symbol }}</h2>
	<code v-for="item in itemData">{{ item }}</code>
</template>
