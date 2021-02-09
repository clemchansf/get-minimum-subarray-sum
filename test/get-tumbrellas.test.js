import { expect } from "chai"
import getUmbrellas from "../src/get-umbrellas.js"

describe("get min elements in sizes for people required", () => {
  it("get min count in small array with exactly single match", () => {
    let actual = getUmbrellas(10, [1, 2, 3, 6, 10])
    expect(actual).equal(1)
  })

  it("get min count in two matches one smaller than the other", () => {
    let actual = getUmbrellas(12, [1, 2, 3, 6, 10])
    expect(actual).equal(4)
  })

  it("get no answer to be -1", () => {
    let actual = getUmbrellas(40, [1, 2, 3, 6, 10])
    expect(actual).equal(-1)
  })

  it("30 + 3 = 33, shorted distance is 2", () => {
    let actual = getUmbrellas(33, [1, 4, 30, 3, 10, 5, 18])
    expect(actual).equal(2)
  })

  it("30 + 3 = 33, shorted distance is 1", () => {
    let actual = getUmbrellas(33, [1, 4, 28, 30, 3, 10, 5, 33])
    expect(actual).equal(1)
  })

  it("very long array, ~1000 elements", () => {
    let actual = getUmbrellas(
      (301 * 302) / 2,
      [].concat(
        ...Array(300)
          .fill()
          .map((x, i) => i + 1) /* len 300 */,
        ...Array(298) /* [1...300, 1].length == 301, */
          .fill()
          .map((x, i) => i + 1),
        299 + 301 /*  [1..298 + 299 + 301].length === 300 */,
        (300 * 301) / 2 /* len 1, but 301 */,
        ...Array(200)
          .fill()
          .map((x, i) => i + 1),
        ...Array(200)
          .fill()
          .map((x, i) => i + 1)
      )
    )
    expect(actual).equal(300)
  })
})
