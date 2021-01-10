import { blk, mods, sblk, smods } from "../bem"

describe("blk", () => {
  test("accepts strings", () => {
    expect(blk("x", "a", "b", "c")).toEqual("x x--a x--b x--c")
  })

  test("accepts a list of strings", () => {
    expect(blk("x", ["a", "b", "c"])).toEqual("x x--a x--b x--c")
  })

  test("accepts nested lists", () => {
    expect(blk("x", [[["a"]], "b"])).toEqual("x x--a x--b")
  })

  test("ignores non-string values", () => {
    expect(blk("x", false, null, 1, /a/, [undefined, true])).toEqual("x")
  })
})

describe("sblk", () => {
  test("accepts strings", () => {
    expect(sblk("x", "a", "b", "c")).toEqual(".x.x--a.x--b.x--c")
  })

  test("accepts a list of strings", () => {
    expect(sblk("x", ["a", "b", "c"])).toEqual(".x.x--a.x--b.x--c")
  })

  test("accepts nested lists", () => {
    expect(sblk("x", [[["a"]], "b"])).toEqual(".x.x--a.x--b")
  })

  test("ignores non-string values", () => {
    expect(sblk("x", false, null, 1, /a/, [undefined, true])).toEqual(".x")
  })
})

describe("mods", () => {
  test("accepts strings", () => {
    expect(mods("x", "a", "b", "c")).toEqual("x--a x--b x--c")
  })

  test("accepts a list of strings", () => {
    expect(mods("x", ["a", "b", "c"])).toEqual("x--a x--b x--c")
  })

  test("accepts nested lists", () => {
    expect(mods("x", [[["a"]], "b"])).toEqual("x--a x--b")
  })

  test("ignores non-string values", () => {
    expect(mods("x", false, null, 1, /a/, [undefined, true])).toEqual("")
  })
})

describe("smods", () => {
  test("accepts strings", () => {
    expect(smods("x", "a", "b", "c")).toEqual(".x--a.x--b.x--c")
  })

  test("accepts a list of strings", () => {
    expect(smods("x", ["a", "b", "c"])).toEqual(".x--a.x--b.x--c")
  })

  test("accepts nested lists", () => {
    expect(smods("x", [[["a"]], "b"])).toEqual(".x--a.x--b")
  })

  test("ignores non-string values", () => {
    expect(smods("x", false, null, 1, /a/, [undefined, true])).toEqual("")
  })
})

