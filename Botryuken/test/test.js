const assert = require("assert");
const index = require("../index.js");

describe("changes given text", function() {
    it("change", function() {
      assert.equal(index.changeText("a name","a message"), "**a name says**\na message \n\n**Alex says**\nREEEEEEEEEEEEEEE Dark souls is too hard for me and the community is toxic WAAAAAAAAAAAAAH");
    });
});