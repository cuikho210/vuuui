import { JSX, Component } from 'solid-js'

export interface ContainerProps extends JSX.HTMLAttributes<HTMLElement> {
  xs?: boolean
  sm?: boolean
  md?: boolean
}

export type ContainerComponent = Component<ContainerProps>
