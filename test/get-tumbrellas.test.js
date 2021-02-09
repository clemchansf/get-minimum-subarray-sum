import { expect } from "chai"
import getUmbrellas from "../src/get-umbrellas.js"

describe("get min elements in sizes for people required", () => {
  xit("get min count in small array with exactly single match", () => {
    let actual = getUmbrellas(10, [1, 2, 3, 6, 10])
    expect(actual).equal(1)
  })

  xit("get min count in two matches one smaller than the other", () => {
    let actual = getUmbrellas(12, [1, 2, 3, 6, 10])
    expect(actual).equal(4)
  })

  xit("get no answer to be -1", () => {
    let actual = getUmbrellas(40, [1, 2, 3, 6, 10])
    expect(actual).equal(-1)
  })

  xit("30 + 3 = 33, shorted distance is 2", () => {
    let actual = getUmbrellas(33, [1, 4, 30, 3, 10, 5])
    expect(actual).equal(2)
  })

  it("30 + 3 = 33, shorted distance is 1", () => {
    let actual = getUmbrellas(33, [1, 4, 28, 33, 30, 3, 10, 5])
    expect(actual).equal(1)
  })
})
