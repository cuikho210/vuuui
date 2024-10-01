import { createSignal } from 'solid-js'
import { RiSketching, RiPaletteLine, RiFileLine } from 'solidjs-remixicon'
import {
  Spacer,
  TextInput,
  ColorInput,
  FileInput,
  Checkbox,
  Radio,
  Slider,
  Switch,
} from '../../../src'

export const Inputs = () => {
  const [files, setFiles] = createSignal<FileList | null>(null)
  const [sliderValue, setSliderValue] = createSignal(20)

  return (
    <section>
      <h2>Inputs</h2>
      <br />

      <p>Common</p>
      <br />
      <Spacer>
        <TextInput placeholder="Text input" icon={<RiSketching />} />

        <ColorInput placeholder="Color input" icon={<RiPaletteLine />} />

        <FileInput
          model={[files, setFiles]}
          placeholder={files()?.item(0)?.name || 'File input'}
          icon={<RiFileLine />}
        />
      </Spacer>
      <br />

      <p>Checkbox</p>
      <br />
      <Checkbox placeholder="Ahihi" />
      <Checkbox placeholder="Ahaha" />
      <br />

      <p>Radio</p>
      <br />
      <Radio placeholder="Ahihi" name="test-radio" />
      <Radio placeholder="Ahaha" name="test-radio" />
      <br />

      <p>Slider {sliderValue()}</p>
      <br />
      <Slider min="15" max="50" model={[sliderValue, setSliderValue]} />
      <br />
      <Slider min="15" max="100" model={[sliderValue, setSliderValue]} />
      <br />

      <p>Switch</p>
      <br />
      <Switch placeholder="Sasa" />
      <Switch placeholder="Lily" />
      <br />
    </section>
  )
}
