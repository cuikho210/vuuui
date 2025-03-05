<script lang="ts">
	import { Spacer, Card } from '$lib/index.js'
</script>

{#snippet color(value: string, size = '3rem')}
	<div
		style:background-color={value}
		style:border-radius="var(--vuuui-radius)"
		style:width={size}
		style:height={size}
	></div>
{/snippet}

<Card xs>
	<h2>Colors</h2>
	<br />

	<Spacer justify="center" direction="column">
		<div>
			<small>
				<i>Primary</i>
			</small>
			<Spacer wrap="nowrap">
				{@render color('var(--vuuui-color-primary--text)')}
				{@render color('var(--vuuui-color-primary--dark)')}
				{@render color('var(--vuuui-color-primary)')}
				{@render color('var(--vuuui-color-primary--light)')}
				{@render color('var(--vuuui-color-primary--lighter)')}
			</Spacer>
		</div>

		<div>
			<small>
				<i>Alternative</i>
			</small>
			<Spacer wrap="nowrap">
				{@render color('var(--vuuui-color-alt--text)')}
				{@render color('var(--vuuui-color-alt--dark)')}
				{@render color('var(--vuuui-color-alt)')}
				{@render color('var(--vuuui-color-alt--light)')}
				{@render color('var(--vuuui-color-alt--lighter)')}
			</Spacer>
		</div>

		<div>
			<small>
				<i>Text</i>
			</small>
			<Spacer wrap="nowrap">
				{@render color('var(--vuuui-color-text)')}
				{@render color('var(--vuuui-color-text-info)')}
				{@render color('var(--vuuui-color-text-success)')}
				{@render color('var(--vuuui-color-text-warning)')}
				{@render color('var(--vuuui-color-text-danger)')}
			</Spacer>
		</div>

		<div>
			<small>
				<i>Background</i>
			</small>
			<Spacer wrap="nowrap">
				{@render color('var(--vuuui-color-bg)')}
				{@render color('var(--vuuui-color-bg-info)')}
				{@render color('var(--vuuui-color-bg-success)')}
				{@render color('var(--vuuui-color-bg-warning)')}
				{@render color('var(--vuuui-color-bg-danger)')}
			</Spacer>
		</div>
	</Spacer>
</Card>
