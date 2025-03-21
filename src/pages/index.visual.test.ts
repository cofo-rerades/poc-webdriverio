import { $, browser, expect } from "@wdio/globals";

describe("Index page Visual regression", () => {
  it("should visual check  for a page ", async () => {
    await browser.url("/");
    const elem = await $("h1");
    expect(await elem.getText()).toBe("Search Flights");
    // take a visual snapshot of the whole screen
    await expect(browser).toMatchScreenSnapshot("index-page");
  });
  it("should visual check for an  individual element", async () => {
    await browser.url("/");
    // take a visual snapshot of an element
    await expect($("#departure")).toMatchElementSnapshot("departure-calendar");
  });

  it("should visual check for a state (hover) on an element", async () => {
    await browser.url("/");
    const elem = await $(".btn");
    elem.moveTo();
    // take a visual snapshot of an element
    await expect($(".btn")).toMatchElementSnapshot("hover-btn");
  });
});
