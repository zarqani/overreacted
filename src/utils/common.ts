export const setDarkClassName = () => {
  if (
    localStorage?.colorScheme === "dark" ||
    (!("colorScheme" in localStorage) &&
      window?.matchMedia?.("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
