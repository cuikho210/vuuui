import { setLayoutStore } from '../../stores/layout.store'
import { Container } from '../../../src'

export const About = () => {
  setLayoutStore('activeNavbar', 2)

  return (
    <Container md>
      <h2>VuuUI</h2>
      <p>
        <a href="https://github.com/cuikho210/vuuui">
          https://github.com/cuikho210/vuuui
        </a>
      </p>
      <br />
      <p>
        <a href="https://github.com/cuikho210">Cuikho210</a>
      </p>
      <p>tonykms210@gmail.com</p>
    </Container>
  )
}
