import { JSX, Component } from 'solid-js'

export interface DuckSpinnerProps extends JSX.HTMLAttributes<HTMLElement> {
  size?: string
  thin?: boolean
}

export type DuckSpinnerComponent = Component<DuckSpinnerProps>
