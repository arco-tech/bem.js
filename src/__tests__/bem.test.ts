import { blk, mod, sblk, smod } from "../bem"

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

describe("mod", () => {
  test("accepts strings", () => {
    expect(mod("x", "a", "b", "c")).toEqual("x--a x--b x--c")
  })

  test("accepts a list of strings", () => {
    expect(mod("x", ["a", "b", "c"])).toEqual("x--a x--b x--c")
  })

  test("accepts nested lists", () => {
    expect(mod("x", [[["a"]], "b"])).toEqual("x--a x--b")
  })

  test("ignores non-string values", () => {
    expect(mod("x", false, null, 1, /a/, [undefined, true])).toEqual("")
  })
})

describe("smod", () => {
  test("accepts strings", () => {
    expect(smod("x", "a", "b", "c")).toEqual(".x--a.x--b.x--c")
  })

  test("accepts a list of strings", () => {
    expect(smod("x", ["a", "b", "c"])).toEqual(".x--a.x--b.x--c")
  })

  test("accepts nested lists", () => {
    expect(smod("x", [[["a"]], "b"])).toEqual(".x--a.x--b")
  })

  test("ignores non-string values", () => {
    expect(smod("x", false, null, 1, /a/, [undefined, true])).toEqual("")
  })
})

