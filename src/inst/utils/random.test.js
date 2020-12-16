import {onceFrom} from "./random";

describe("once from", () => {
  it("Expected Exception Test", () => {
    const response = onceFrom(1);

    expect(response).toThrow('Number argument need must be more than two');
  });
});


