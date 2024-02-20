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

const Actions = () => {
	const [disabled, setDisabled] = useState(false);

	return <>
		<h2>Actions</h2>

		<Space>
			<ElevatedButton onClick={() => setDisabled(!disabled)}>
				Toggle disabled
			</ElevatedButton>

			<ElevatedButton
				icon={<RiSunLine />}
				onClick={toThemeLight}
				disabled={disabled}
			>Light mode</ElevatedButton>

			<FilledButton>FilledButton</FilledButton>

			<FilledButton
				icon={<RiMoonLine />}
				onClick={toThemeDark}
				disabled={disabled}
			>Dark mode</FilledButton>

			<OutlinedButton>OutlinedButton</OutlinedButton>

			<OutlinedButton
				icon={<RiEthLine />}
				onClick={toggleTheme}
				disabled={disabled}
			>Toggle theme</OutlinedButton>

			<TextButton>TextButton</TextButton>

			<TextButton
				icon={<RiHome2Line />}
				disabled={disabled}
			>With icon</TextButton>

			<IconButton
				icon={<RiBubbleChartLine />}
				disabled={disabled}
				title="IconButton"
			/>
		</Space>
	</>;
}

const App = () => {
	return <main style={{
		padding: '8px',
	}}>
		<Actions />
	</main>;
}

export default App;
