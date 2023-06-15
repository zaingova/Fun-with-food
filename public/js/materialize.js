document.addEventListener('DOMContentLoaded', function () {
  const home = document.querySelector(".homeTooltip");
  const logout = document.querySelector(".logoutTooltip");
  const login = document.querySelector(".loginTooltip");
  let homeTip = M.Tooltip.init(home, {
  });

  let logoutTip = M.Tooltip.init(logout, {
  });

  let loginTip = M.Tooltip.init(login, {
  });
})
