const assert = require("assert");
const { describe, it } = require("mocha");
const reptlie = require("../src/reptile");

describe("#reptile.js", () => {
  it("test", async () => {
    const arr = await reptlie.getNews(1, "topnews");
    console.log(arr);
  });
});
