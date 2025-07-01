function changeCharacteristic() {
  let CharEl = document.getElementById("characteristic");
  let Chars = ["Creative", "Social", "Expressive", "Bright"];
  let CurChar = 0;
  if (CurChar == 3) {
    CurChar = 0;
  } else {
    CurChar = CurChar + 1;
  };
  CharEl.innerHTML = Chars[CurChar];
};

setInterval (changeCharacteristic, 3000);
