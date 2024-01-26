

export interface BoardListTypes {
  onClickSave: (number: number) => () => void
  savedPosts: Record<number, boolean>
}