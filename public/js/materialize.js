// Materialize CSS script -> allows the navbar tooltips to work
document.addEventListener('DOMContentLoaded', function () {
  const home = document.querySelector(".homeTooltip");
  const logout = document.querySelector(".logoutTooltip");
  const login = document.querySelector(".loginTooltip");

  // initializes each tool tip button
  let homeTip = M.Tooltip.init(home, {
  });

  let logoutTip = M.Tooltip.init(logout, {
  });

  let loginTip = M.Tooltip.init(login, {
  });
})
