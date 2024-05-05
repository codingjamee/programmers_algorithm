function solution(s, n) {
  return s
    .split("")
    .map((string) => {
      let code = string.charCodeAt(0);
      const isUpperCase = string.toUpperCase() === string;
      const isLowerCase = string.toLowerCase() === string;

      if (!isUpperCase && !isLowerCase) return string;

      if (isUpperCase) {
        code = ((code - 65 + n) % 26) + 65;
      }
      if (isLowerCase) {
        code = ((code - 97 + n) % 26) + 97;
      }

      if (string === " ") return string;

      return String.fromCharCode(code);
    })
    .join("");
}
