export const debounceSetFilter = (callback: (key: string, value: string) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (key: string, value: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(key, value), 500);
  };
};

export const debounceCallback = (callback: (value: string) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (value: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(value), 510);
  };
};
