function camelCase(obj) {
  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(camelCase);
  }

  // Handle objects
  if (obj !== null && typeof obj === "object") {
    const result = {};

    Object.keys(obj).forEach((key) => {
      const newKey = key
        .split("_")
        .map((str, index) =>
          index === 0 ? str : str[0].toUpperCase() + str.slice(1)
        )
        .join("");

      result[newKey] = camelCase(obj[key]);
    });

    return result;
  }

  // Primitive values
  return obj;
}
