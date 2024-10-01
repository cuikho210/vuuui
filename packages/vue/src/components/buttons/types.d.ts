export interface ButtonBaseProps {
  loading?: boolean
  disabled?: boolean
  active?: boolean
}

export type IconButtonProps = Omit<ButtonBaseProps, 'defaultClassName'>
