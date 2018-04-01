import camel2kebab from "../index";

it("should return the transformed string when 2 word in lowerCamelCase", async () => {
  expect(camel2kebab.fooBar).toBe("foo-bar");
});

it("should return the transformed string when 3 word in lowerCamelCase", async () => {
  expect(camel2kebab.fooBarBaz).toBe("foo-bar-baz");
});
