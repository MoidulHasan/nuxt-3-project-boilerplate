<template>
	<Html :class="`${theme == 'dark' ? 'dark' : ''}`">
		<Body
			class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
		>
			<NuxtLayout>
				<NuxtLoadingIndicator
					:height="5"
					:duration="3000"
					:throttle="400"
				/>
				<NuxtPage />
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">
	import { AppSetup } from "./utils/app";
	import { ITheme } from "./utils/theme";

	AppSetup();

	const theme = computed(() => useState<ITheme>("theme.current"));
</script>

<style scoped></style>
