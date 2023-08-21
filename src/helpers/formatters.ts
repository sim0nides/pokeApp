export const normalizeKebabCase = (value?: string | null) => {
  if (!value) return ''
  value = value.replace(/-./g, (substr) => ` ${substr[1].toUpperCase()}`)
  return value[0].toUpperCase() + value.slice(1)
}
