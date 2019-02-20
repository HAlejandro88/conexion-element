/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../conexion-element.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const element = await fixture("<conexion-element></conexion-element>");
    assert.strictEqual(element.url, '');
  });

  it('prueba de led',async ()=>{
    const led = await fixture("<conexion-element></conexion-element>");
    led.addEventListener("led-green",(event)=>{
      assert.strictEqual(event.detail,"http://localhost:3000/green")
    });
  });

  it('prueba dispàtch',async ()=>{
    const con = await fixture("<conexion-element></conexion-element>");
    con.addEventListener("led-change",(event)=>{
      assert.strictEqual(event.detail,"http://localhost:3000/red")
    });

  });
});
