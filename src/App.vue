<script setup lang="ts">
import './css/index.css'
</script>

<template>
	<header class="w-full border-b border-stone-200 bg-white">
		<nav class="mx-auto flex w-[80vw] items-center gap-3 py-4">
			<RouterLink
				to="/"
				class="rounded-md px-4 py-2 font-semibold text-stone-700 hover:bg-pink-50 hover:text-pink-600"
				active-class="bg-pink-600 text-white hover:bg-pink-600 hover:text-white"
			>
				Home
			</RouterLink>
			<RouterLink
				to="/library"
				class="rounded-md px-4 py-2 font-semibold text-stone-700 hover:bg-pink-50 hover:text-pink-600"
				active-class="bg-pink-600 text-white hover:bg-pink-600 hover:text-white"
			>
				Library
			</RouterLink>
		</nav>
	</header>

	<RouterView />
</template>
