import { JSX, Component } from 'solid-js'

export interface SpacerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  gap?: string
  wrap?: JSX.CSSProperties['flex-wrap']
  justify?: JSX.CSSProperties['justify-content']
  align?: JSX.CSSProperties['align-items']
}

export type SpacerComponent = Component<SpacerProps>
