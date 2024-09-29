import { render } from 'solid-js/web'
import { App } from './app'
import '@vuuui/styles/vuuui.scss'
import './index.scss'

const root = document.getElementById('root')
render(() => <App />, root!)
