import { Editor } from '@tiptap/core'
import { Accessor } from 'solid-js'
import { JSX, Component, Signal } from 'solid-js'

// TextInput
export interface TextInputProps
  extends JSX.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
  model?: Signal<string>
}
export type TextInputComponent = Component<TextInputProps>

// FileInput
export interface FileInputProps extends TextInputProps {
  model?: Signal<FileList | null>
}
export type FileInputComponent = Component<FileInputProps>

// Checkbox
export interface CheckboxProps extends Omit<TextInputProps, 'icon'> {
  model?: Signal<boolean>
}
export type CheckboxComponent = Component<CheckboxProps>

// Radio
export interface RadioProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}
export type RadioComponent = Component<RadioProps>

// Slider
export interface SliderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  model?: Signal<number>
  min?: number | string
  max?: number | string
  step?: number | string
}
export type SliderComponent = Component<SliderProps>
