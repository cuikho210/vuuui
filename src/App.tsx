import ElevatedButton from "./components/actions/ElevatedButton";
import FilledButton from "./components/actions/FilledButton";
import OutlinedButton from "./components/actions/OutlinedButton";
import TextButton from "./components/actions/TextButton";
import IconButton from "./components/actions/IconButton";

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
	if (currentTheme == "light") toThemeDark();
	else toThemeLight();
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

const Actions = () => <>
	<h2>Actions</h2>

	<Space>
		<ElevatedButton>ElevatedButton</ElevatedButton>

		<ElevatedButton
			icon={<RiSunLine />}
			onClick={toThemeLight}
		>Light mode</ElevatedButton>

		<FilledButton>FilledButton</FilledButton>

		<FilledButton
			icon={<RiMoonLine />}
			onClick={toThemeDark}
		>Dark mode</FilledButton>

		<OutlinedButton>OutlinedButton</OutlinedButton>

		<OutlinedButton
			icon={<RiEthLine />}
			onClick={toggleTheme}
		>Toggle theme</OutlinedButton>

		<TextButton>TextButton</TextButton>

		<TextButton
			icon={<RiHome2Line />}
		>With icon</TextButton>

		<IconButton
			icon={<RiBubbleChartLine />}
			title="IconButton"
		/>
	</Space>
</>;

const App = () => {
	return <main style={{
		padding: '8px',
	}}>
		<Actions />
	</main>;
}

export default App;
