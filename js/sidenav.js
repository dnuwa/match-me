const openNav = () => {
  document.querySelector("#sidebar").style.width = "208px";
  document.querySelector("#main").style.marginLeft = "208px";
};

const closeNav = () => {
  document.querySelector("#sidebar").style.width = "0";
  document.querySelector("#main").style.marginLeft = "0";
};
