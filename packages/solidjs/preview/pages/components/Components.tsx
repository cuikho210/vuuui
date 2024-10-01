import { Container } from '../../../src'
import { setLayoutStore } from '../../stores/layout.store'
import { Buttons } from './Buttons'
import { Colors } from './Colors'
import './Components.scss'
import { Inputs } from './Inputs'
import { Overlay } from './Overlay'
import { Spinner } from './Spinner'

export const Components = () => {
  setLayoutStore('activeNavbar', 1)

  return (
    <Container md>
      <Colors />
      <br />
      <Spinner />
      <br />
      <Buttons />
      <br />
      <Inputs />
      <br />
      <Overlay />
      <br />
    </Container>
  )
}
