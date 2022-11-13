export type paginationProps = {
  page: number
  totalPages: number
  clickEvent: {
    next: React.MouseEventHandler<HTMLButtonElement>
    prev: React.MouseEventHandler<HTMLButtonElement>
  }
  isDisabled: {
    next: boolean
    prev: boolean
  }
}
