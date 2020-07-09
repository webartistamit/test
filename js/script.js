var myArray = new Array();

myArray[0] = "<div class='blocks block-light-blue'>1</div>";
myArray[1] = "<div class='blocks block-medium-blue'>2</div>";
myArray[2] = "<div class='blocks block-dark-blue'>3</div>";
myArray[3] = "<div class='blocks block-medium-blue'>4</div>";
myArray[4] = "<div class='blocks block-dark-blue'>5</div>";
myArray[5] = "<div class='blocks block-gray-color'>6</div>";
myArray[6] = "<div class='blocks block-gray-color'>7</div>";
myArray[7] = "<div class='blocks block-light-blue'>8</div>";
myArray[8] = "<div class='blocks block-dark-blue'>9</div>";


function shuffle(arra1) {
  var ctr = arra1.length,
    temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1.join(" ");
}



document.getElementById("shufflesbtn").onclick = function() {
  var showallnumber = shuffle(myArray);
  document.getElementById('numbershow').innerHTML = showallnumber
}

var shorting = new Array(shuffle(myArray));

function sortfun(sortnums) {
  var len = sortnums.length;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      if (sortnums[j] > sortnums[j + 1]) {
        var t = sortnums[j];
        sortnums[j] = sortnums[j + 1];
        sortnums[j + 1] = t;
      }
    }
  }
  return sortnums;
}


document.getElementById("sortbtn").onclick = function() {
  sortfun(shorting);
document.getElementById('numbershow').innerHTML = shorting;

}
