import { createSignal } from "solid-js"
import { RiEmotionHappyLine, RiCloseLine } from "solidjs-remixicon"
import { Spacer, ElevatedButton, Dialog, TextButton } from "../../../src"

export const Overlay = () => {
	const [dialogOpen, setDialogOpen] = createSignal(false)

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
