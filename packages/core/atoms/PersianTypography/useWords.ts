export const useWords = () => {
  const cutHalfSpace = (word: string) => word.replace(' ', '\u200c')

  return {
    cutHalfSpace
  }
}

export default useWords
