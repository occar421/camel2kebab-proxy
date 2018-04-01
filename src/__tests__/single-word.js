import camel2kebab from "../index";

it("should return the key as a string when 1 word", async () => {
  expect(camel2kebab.foo).toBe("foo");
});
