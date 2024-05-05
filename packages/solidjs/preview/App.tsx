import { createSignal } from 'solid-js'

import {
	Container, Spacer,
	DuckSpinner,
	ElevatedButton, FilledButton, TextButton, OutlinedButton, IconButton,
} from "../src"

import {
	RiHeartLine, RiHeart2Line, RiHeart3Line, RiHeartsLine,
	RiToggleLine, RiLoaderLine,
} from 'solidjs-remixicon';

const [disabled, setDisabled] = createSignal(true);
const [loading, setLoading] = createSignal(true);

const Spinner = <section>
	<h2>Spinner</h2><br />

	<Spacer>
		<DuckSpinner />
		<DuckSpinner size="32" />
		<DuckSpinner size="64" thin />
	</Spacer>
</section>

const Buttons = <section>
	<h2>Buttons</h2><br />

	<Spacer>
		<ElevatedButton>Normal</ElevatedButton>
		<ElevatedButton disabled={disabled()}>Disabled</ElevatedButton>
		<ElevatedButton icon={<RiHeartLine />}>Icon</ElevatedButton>
		<ElevatedButton loading={loading()}>Loading</ElevatedButton>
	</Spacer><br />

	<Spacer>
		<FilledButton>Normal</FilledButton>
		<FilledButton disabled={disabled()}>Disabled</FilledButton>
		<FilledButton icon={<RiHeart2Line />}>Icon</FilledButton>
		<FilledButton loading={loading()}>Loading</FilledButton>
	</Spacer><br />
	
	<Spacer>
		<TextButton>Normal</TextButton>
		<TextButton disabled={disabled()}>Disabled</TextButton>
		<TextButton icon={<RiHeart3Line />}>Icon</TextButton>
		<TextButton loading={loading()}>Loading</TextButton>
	</Spacer><br />

	<Spacer>
		<OutlinedButton>Normal</OutlinedButton>
		<OutlinedButton disabled={disabled()}>Disabled</OutlinedButton>
		<OutlinedButton icon={<RiHeartsLine />}>Icon</OutlinedButton>
		<OutlinedButton loading={loading()}>Loading</OutlinedButton>
	</Spacer><br />

	<Spacer>
		<IconButton
			onClick={() => setDisabled(!disabled())}
			title='Toggle disabled'
		><RiToggleLine size="2rem" /></IconButton>

		<IconButton
			onClick={() => setLoading(!loading())}
			title='Toggle loading'
		><RiLoaderLine size="2rem" /></IconButton>

		<IconButton disabled={disabled()}><RiHeart2Line size="2rem" /></IconButton>
		<IconButton loading={loading()}><RiHeart3Line size="2rem" /></IconButton>
	</Spacer><br />
</section>

export const App = () => <Container md>
	<h1>VuuUI</h1><br />

	{Spinner} <br />
	{Buttons}
</Container>

export default App
