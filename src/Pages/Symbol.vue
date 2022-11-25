<script setup>
import { NotionRenderer, getPageBlocks } from "vue3-notion";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// const pageId = "e29cfe4a51344770a9b0014352e6b5ef";
const route = useRoute();
const pageId = route.params.symbolId.toString();

const data = ref();

onMounted(async () => {
	data.value = await getPageBlocks(pageId);
});
</script>

<template>
	<router-link to="/">
		<button>Back to homepage</button>
	</router-link>
	<NotionRenderer v-if="data" :blockMap="data" fullPage />
</template>

<style>
@import "vue3-notion/dist/style.css"; /* optional Notion-like styles */
</style>
