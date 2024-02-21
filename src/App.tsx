import { useState } from "react";

import {
	ElevatedButton,
	FilledButton,
	OutlinedButton,
	TextButton,
	IconButton,
} from ".";

import {
	RiBubbleChartLine,
	RiSunLine,
	RiMoonLine,
	RiEthLine,
	RiHome2Line,
} from "@remixicon/react";

function setThemeMode(mode: "light" | "dark") {
	document.documentElement.setAttribute("data-theme", mode);
}

function toThemeLight() {
	setThemeMode("light");
}

function toThemeDark() {
	setThemeMode("dark");
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	if (currentTheme == "dark") toThemeLight();
	else toThemeDark();
}

const Space = (props: {children?: any}) => <div style={{
	display: "flex",
	justifyContent: 'flex-start',
	alignItems: 'center',
	flexWrap: 'wrap',
	columnGap: '8px',
	rowGap: '16px',
}}>
	{props.children}
</div>;

const Actions = () => {
	const [disabled, setDisabled] = useState(false);
	const [loading, setLoading] = useState(false);

	return <>
		<h2>Actions</h2>
		<h3>Buttons</h3>

		<Space>
			<ElevatedButton
				onClick={() => setDisabled(!disabled)}
				loading={loading}
			> Toggle disabled </ElevatedButton>

			<ElevatedButton
				icon={<RiSunLine />}
				onClick={toThemeLight}
				disabled={disabled}
				loading={loading}
			>Light mode</ElevatedButton>

			<FilledButton onClick={() => setLoading(!loading)}>
				Toggle loading
			</FilledButton>

			<FilledButton
				icon={<RiMoonLine />}
				onClick={toThemeDark}
				disabled={disabled}
				loading={loading}
			>Dark mode</FilledButton>

			<OutlinedButton>OutlinedButton</OutlinedButton>

			<OutlinedButton
				icon={<RiEthLine />}
				onClick={toggleTheme}
				disabled={disabled}
				loading={loading}
			>Toggle theme</OutlinedButton>

			<TextButton>TextButton</TextButton>

			<TextButton
				icon={<RiHome2Line />}
				disabled={disabled}
				loading={loading}
			>With icon</TextButton>

			<IconButton
				icon={<RiBubbleChartLine />}
				disabled={disabled}
				loading={loading}
				title="IconButton"
			/>
		</Space>
	</>;
}

const Communication = () => <>
	<h2>Communication</h2>
	<h3>Badge</h3>
</>;

const App = () => {
	return <main style={{
		padding: '8px',
	}}>
		<Actions />
		<Communication />
	</main>;
}

export default App;
