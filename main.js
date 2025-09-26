function showLoading() {
  const loader = document.getElementById("loader");
  const letter = document.getElementById("letterBox");
  
  
  loader.classList.add("show");

  setTimeout(() => {
    loader.classList.remove("show");
    letter.classList.add("show");
  }, 2500);
}
