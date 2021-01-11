export function blk(block: string, ...modifiers: any[]): string {
  return `${block} ${mod(block, modifiers)}`.trim()
}

export function mod(block: string, ...modifiers: any[]): string {
  return modifiers
    .map((modifier: any) => {
      if (typeof modifier === "string") {
        return `${block}--${modifier}`
      } else if (Array.isArray(modifier)) {
        return mod(block, ...modifier)
      }
    })
    .filter((modifier: string | undefined) => modifier)
    .join(" ")
}

export function sblk(block: string, ...modifiers: any[]): string {
  return `.${block}${smod(block, modifiers)}`
}

export function smod(block: string, ...modifiers: any[]): string {
  return modifiers
    .map((modifier: any) => {
      if (typeof modifier === "string") {
        return `.${block}--${modifier}`
      } else if (Array.isArray(modifier)) {
        return smod(block, ...modifier)
      }
    })
    .filter((modifier: string | undefined) => modifier)
    .join("")
}
