let usdDollar = document.querySelector("[name='dollar']");
let egyPound = document.querySelector(".result");

usdDollar.oninput = function () {
  egyPound.innerHTML = `{${usdDollar.value}} USD Dollar = {${(
    usdDollar.value * 49.8
  ).toFixed(2)}} Egyptian Pound`;
};

usdDollar.setAttribute("min", 0);
