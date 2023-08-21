const appTitle = (title?: string): string => {
  const base = 'PokeApp'
  if (!title) return base
  return `${base} | ${title}`
}

export default appTitle
