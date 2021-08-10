const assert = require('chai').assert;
const tail = require('../tail');


//TEST CODE
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns undefined for []", () => {
    const result = tail([]);
    assert.strictEqual((result[1]), undefined);

  });
});




