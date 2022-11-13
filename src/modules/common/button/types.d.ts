export type buttonProps = {
  name: string
  id?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean | false
}
