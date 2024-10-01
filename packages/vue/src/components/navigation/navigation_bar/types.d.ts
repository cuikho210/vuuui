import { JSX, Component } from 'solid-js'

export interface NavigationBarProps extends JSX.HTMLAttributes<HTMLElement> {}
export type NavigationBarComponent = Component<NavigationBarProps>

export interface NavigationBarButtonProps
  extends JSX.HTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: JSX.Element
  iconActive?: JSX.Element
}
export type NavigationBarButtonComponent = Component<NavigationBarButtonProps>

export interface AppBarProps extends JSX.HTMLAttributes<HTMLElement> {
  leading?: JSX.Element
  title?: string
  actions?: JSX.Element[]
}
export type AppBarComponent = Component<AppBarProps>
