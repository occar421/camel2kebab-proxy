import camel2kebab from "../index";

it("should return the key as a string when bracket notation", function() {
  expect(camel2kebab[1]).toBe("1");
});
