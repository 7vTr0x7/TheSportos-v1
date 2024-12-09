export const nextPageHandler = (length, page, setPage, setFadeClass, pages) => {
  if (length > page * pages) {
    setFadeClass("fade-in-right");
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setFadeClass("fade-out-left");
    }, 300);
  }
};

export const prevPageHandler = (length, page, setPage, setFadeClass) => {
  if (page > 1) {
    setFadeClass("fade-in-left");
    setTimeout(() => {
      setPage((prev) => prev - 1);
      setFadeClass("fade-out-right");
    }, 300);
  }
};
