import { $, browser, expect } from "@wdio/globals";

describe("Avaliability page Visual regression for TAB", () => {
  it("should visual check  for tabs ", async () => {
    await browser.url("/availability-and-fare.html");
    await browser.saveTabbablePage("index-tabbable", {});
    expect(await browser.checkTabbablePage("index-tabbable")).toBe(0);
  });
});
