<template>
	<div class="this-bg">
		<div>
			<h1>Loading</h1>
			<div class="spinner"></div>
		</div>
	</div>
</template>
<style scoped>
h1 {
	opacity: 0.5;
}
.this-bg {
	width: 100%;
	height: 32rem;
	height: 85dvh;
	background: var(--color-system-invert-100);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
}
.spinner {
	width: 8rem;
	height: 8rem;
	background-color: var(--color-system-40);

	border-radius: 100%;
	-webkit-animation: sk-scaleout 1s infinite ease-in-out;
	animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
	0% {
		-webkit-transform: scale(0);
	}
	100% {
		-webkit-transform: scale(1);
		opacity: 0;
	}
}

@keyframes sk-scaleout {
	0% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	100% {
		-webkit-transform: scale(1);
		transform: scale(1);
		opacity: 0;
	}
}
</style>
