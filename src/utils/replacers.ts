
export const removeCSSComment: [RegExp, () => string] = [
  /\/\*.+?\*\//,
  (): string => ''
]

export const correctURLs = (baseUrl: string): [RegExp, (u: string) => string] => [
  /url\(.*?\)/g,
  (url) => url.replace(/&#x27;/, '\''+ baseUrl).replace(/&#x27;/, '\'')
]
