/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../conexion-element.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<conexion-element></conexion-element>");
    assert.strictEqual(_element.hello, "Hello World!");
  });
});
