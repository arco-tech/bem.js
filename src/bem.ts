export function blk(block: string, ...modifiers: any[]): string {
  return `${block} ${mods(block, modifiers)}`.trim()
}

export function mods(block: string, ...modifiers: any[]): string {
  return modifiers
    .map((modifier: any) => {
      if (typeof modifier === "string") {
        return `${block}--${modifier}`
      } else if (Array.isArray(modifier)) {
        return mods(block, ...modifier)
      }
    })
    .filter((modifier: string | undefined) => modifier)
    .join(" ")
}

export function sblk(block: string, ...modifiers: any[]): string {
  return `.${block}${smods(block, modifiers)}`
}

export function smods(block: string, ...modifiers: any[]): string {
  return modifiers
    .map((modifier: any) => {
      if (typeof modifier === "string") {
        return `.${block}--${modifier}`
      } else if (Array.isArray(modifier)) {
        return smods(block, ...modifier)
      }
    })
    .filter((modifier: string | undefined) => modifier)
    .join("")
}
