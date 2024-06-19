import { createSignal } from 'solid-js'

import {
	Container, Spacer,
	DuckSpinner,
	ElevatedButton, FilledButton, TextButton, OutlinedButton, IconButton,
	TextInput, ColorInput, FileInput,
	Checkbox, Radio, Slider, Switch,
	Dialog,
	NavigationBar, NavigationBarButton,
} from "../src"

import {
	RiHeartLine, RiHeart2Line, RiHeart3Line, RiHeartsLine,
	RiToggleLine, RiLoaderLine, RiFlowerLine, RiSketching,
	RiEmotionHappyLine, RiPaletteLine, RiCloseLine, RiFileLine,
	RiHomeLine, RiBookLine, RiGroupLine, RiSettingsLine,
	RiHomeFill, RiSettingsFill, RiGroupFill, RiBookFill,
} from 'solidjs-remixicon';

const Navigation = () => {
	const [index, setIndex] = createSignal(0)

	return <section>
		<h2>Navigation</h2><br />

		<NavigationBar>
			<NavigationBarButton
				icon={<RiHomeLine />}
				iconActive={<RiHomeFill />}
				active={index() == 0}
				onclick={() => setIndex(0)}
			>Trang Chủ</NavigationBarButton>

			<NavigationBarButton
				icon={<RiBookLine />}
				iconActive={<RiBookFill />}
				active={index() == 1}
				onclick={() => setIndex(1)}
			>Học Tập</NavigationBarButton>

			<NavigationBarButton
				icon={<RiGroupLine />}
				iconActive={<RiGroupFill />}
				active={index() == 2}
				onclick={() => setIndex(2)}
			>Trò Chuyện</NavigationBarButton>

			<NavigationBarButton
				icon={<RiSettingsLine />}
				iconActive={<RiSettingsFill />}
				active={index() == 3}
				onclick={() => setIndex(3)}
			>Cài Đặt</NavigationBarButton>
		</NavigationBar>
	</section>
}

const Overlay = () => {
	const [dialogOpen, setDialogOpen] = createSignal(false);

	return <section>
		<h2>Overlay</h2><br />

		<Spacer>
			<ElevatedButton
				icon={<RiEmotionHappyLine />}
				onClick={() => setDialogOpen(true)}
			>Open dialog</ElevatedButton>

			<Dialog
				model={[dialogOpen, setDialogOpen]}
				backdropClose
				title='This is a very very very very very very very very loooong title'
				closeButton={
					<TextButton onClick={() => setDialogOpen(false)}>
						<RiCloseLine />
					</TextButton>
				}
			> Test dialog ahihi </Dialog>
		</Spacer>
	</section>
}

const Inputs = () => {
	const [files, setFiles] = createSignal<FileList | null>(null)
	const [sliderValue, setSliderValue] = createSignal(20)

	return <section>
		<h2>Inputs</h2><br />

		<p>Common</p><br />
		<Spacer>
			<TextInput
				placeholder='Text input'
				icon={<RiSketching />}
			/>

			<ColorInput
				placeholder='Color input'
				icon={<RiPaletteLine />}
			/>

			<FileInput
				model={[files, setFiles]}
				placeholder={files()?.item(0)?.name || 'File input'}
				icon={<RiFileLine />}
			/>
		</Spacer><br />

		<p>Checkbox</p><br />
		<Checkbox placeholder='Ahihi' />
		<Checkbox placeholder='Ahaha' />
		<br />
		
		<p>Radio</p><br />
		<Radio placeholder='Ahihi' name='test-radio' />
		<Radio placeholder='Ahaha' name='test-radio' />
		<br />

		<p>Slider {sliderValue()}</p><br />
		<Slider min='15' max='50' model={[sliderValue, setSliderValue]} /><br />
		<Slider min='15' max='100' model={[sliderValue, setSliderValue]} />
		<br />

		<p>Switch</p><br />
		<Switch placeholder='Sasa' />
		<Switch placeholder='Lily' />
		<br />
	</section>
}

const Buttons = () => {
	const [disabled, setDisabled] = createSignal(true);
	const [loading, setLoading] = createSignal(true);
	const [active, setActive] = createSignal(true);

	return <section>
		<h2>Buttons</h2><br />

		<Spacer>
			<ElevatedButton>Normal</ElevatedButton>
			<ElevatedButton disabled={disabled()}>Disabled</ElevatedButton>
			<ElevatedButton active={active()} disabled>Active</ElevatedButton>
			<ElevatedButton icon={<RiHeartLine />}>Icon</ElevatedButton>
			<ElevatedButton loading={loading()}>Loading</ElevatedButton>
		</Spacer><br />

		<Spacer>
			<FilledButton>Normal</FilledButton>
			<FilledButton disabled={disabled()}>Disabled</FilledButton>
			<FilledButton active={active()} disabled>Active</FilledButton>
			<FilledButton icon={<RiHeart2Line />}>Icon</FilledButton>
			<FilledButton loading={loading()}>Loading</FilledButton>
		</Spacer><br />
		
		<Spacer>
			<TextButton>Normal</TextButton>
			<TextButton disabled={disabled()}>Disabled</TextButton>
			<TextButton active={active()} disabled>Active</TextButton>
			<TextButton icon={<RiHeart3Line />}>Icon</TextButton>
			<TextButton loading={loading()}>Loading</TextButton>
		</Spacer><br />

		<Spacer>
			<OutlinedButton>Normal</OutlinedButton>
			<OutlinedButton disabled={disabled()}>Disabled</OutlinedButton>
			<OutlinedButton active={active()} disabled>Active</OutlinedButton>
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
				disabled={disabled()}
			><RiLoaderLine size="2rem" /></IconButton>

			<IconButton
				onClick={() => setActive(!active())}
				title='Toggle active'
				active={active()}
			><RiFlowerLine size="2rem" /></IconButton>

			<IconButton disabled={disabled()}><RiHeart2Line size="2rem" /></IconButton>
			<IconButton loading={loading()}><RiHeart3Line size="2rem" /></IconButton>
		</Spacer><br />
	</section>
}

const Spinner = () => <section>
	<h2>Spinner</h2><br />

	<Spacer>
		<DuckSpinner />
		<DuckSpinner size="32" />
		<DuckSpinner size="64" thin />
	</Spacer>
</section>

const Color = (props: {color: string}) => {
	const size = '4rem';

	return <div style={{
		'background-color': props.color,
		'border-radius': 'var(--vuuui-radius)',
		width: size,
		height: size,
	}}></div>
}

const Colors = () => <section>
	<h2>Colors</h2><br />

	<Spacer>
		<div>
			<small><i>Primary</i></small>
			<Spacer wrap='nowrap'>
				<Color color='var(--vuuui-color-primary--text)' />
				<Color color='var(--vuuui-color-primary--dark)' />
				<Color color='var(--vuuui-color-primary)' />
				<Color color='var(--vuuui-color-primary--light)' />
				<Color color='var(--vuuui-color-primary--lighter)' />
			</Spacer>
		</div>

		<div>
			<small><i>Alternative</i></small>
			<Spacer wrap='nowrap'>
				<Color color='var(--vuuui-color-alt--text)' />
				<Color color='var(--vuuui-color-alt--dark)' />
				<Color color='var(--vuuui-color-alt)' />
				<Color color='var(--vuuui-color-alt--light)' />
				<Color color='var(--vuuui-color-alt--lighter)' />
			</Spacer>
		</div>

		<div>
			<small><i>Text</i></small>
			<Spacer wrap='nowrap'>
				<Color color='var(--vuuui-color-text)' />
				<Color color='var(--vuuui-color-text-info)' />
				<Color color='var(--vuuui-color-text-success)' />
				<Color color='var(--vuuui-color-text-warning)' />
				<Color color='var(--vuuui-color-text-danger)' />
			</Spacer>
		</div>

		<div>
			<small><i>Background</i></small>
			<Spacer wrap='nowrap'>
				<Color color='var(--vuuui-color-bg)' />
				<Color color='var(--vuuui-color-bg-info)' />
				<Color color='var(--vuuui-color-bg-success)' />
				<Color color='var(--vuuui-color-bg-warning)' />
				<Color color='var(--vuuui-color-bg-danger)' />
			</Spacer>
		</div>
	</Spacer>
</section>

export const App = () => <Container md>
	<h1>VuuUI</h1><br />

	<Colors /> <br />
	<Spinner /> <br />
	<Buttons /> <br />
	<Inputs /> <br />
	<Overlay /> <br />
	<Navigation /> <br />
</Container>

export default App
