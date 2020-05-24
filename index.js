function formatRoute(path, options) {
  if (typeof path !== "string") {
    throw new Error("Path must be of type string");
  }

  if (typeof options !== "object") {
    throw new Error("Second Parameters must be of type object");
  }

  const keys = Object.keys(options);

  keys.forEach((item) => {
    var replace = `:${item}`;
    var re = new RegExp(replace, "g");
    path = path.replace(re, options[item]);
  });

  return path;
}
exports.formatRoute = formatRoute;
