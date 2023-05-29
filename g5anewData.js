const firebaseConfig = {
  apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
  authDomain: "teachingrecord-6b575.firebaseapp.com",
  databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
  projectId: "teachingrecord-6b575",
  storageBucket: "teachingrecord-6b575.appspot.com",
  messagingSenderId: "1097574891233",
  appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
};

firebase.initializeApp(firebaseConfig);

var my5aAll = firebase.database().ref('myNotePad');
function submitForm(e) {
  e.preventDefault();
  var id = getElementVal('myid');
  var date = getElementVal('myDate');
  var times = getElementVal('myTimes');
  var weeks = getElementVal('myWeeks');
  var month = getElementVal('myMonth');
  var other = getElementVal('myother');
  saveData(id, date, times, weeks, month, other);

}
const saveData = (id, date, times, weeks, month, other) => {
  var newData = my5aAll.push();
  newData.set({
    id: id,
    date: date,
    times: times,
    weeks: weeks,
    month: month,
    other: other,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
function selectAllData() {
  document.getElementById('myNewInput').innerHTML = "";
  studentN0 = 0;
  firebase.database().ref('myNotePad').once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var id = CurrentRecord.val().id;
          var date = CurrentRecord.val().date;
          var times = CurrentRecord.val().times;
          var weeks = CurrentRecord.val().weeks;
          var month = CurrentRecord.val().month;
          var other = CurrentRecord.val().other;
          addItemsToTable(id, date, times, weeks, month, other);
        }
      );
    });
}
window.onload = selectAllData;
var studentN0;
// var studentN0Pop;
//   studentN0Pop=0;

var stdList = [];
// var stdListPop = [];
function addItemsToTable(id, date, times, weeks, month, other) {
  var tbody = document.getElementById('myNewInput');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');




  stdList.push([id, date, times, weeks, month, other]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = date;
  td3.innerHTML = times;
  td4.innerHTML = weeks;
  td5.innerHTML = month;
  td6.innerHTML = other;


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);

  td2.innerHTML = `<button type="button" class="button-6" role="button" data-toggle="modal" data-target="#exampleModal" onclick="Fillbox(${studentN0})">${date}</button>`;
  tbody.appendChild(trow);
}


var Mid = document.getElementById('myid');
var Mdate = document.getElementById('myDate');
var Mtimes = document.getElementById('myTimes');
var Mweeks = document.getElementById('myWeeks');
var Mmonth = document.getElementById('myMonth');
var Mother = document.getElementById('myother');


var BtnSubmit = document.getElementById('mySubmit');
var BtnUpdate = document.getElementById('myUpdate');
var BtnDele = document.getElementById('myDele');
var BtnClearBox = document.getElementById('myClear');
var BtnClearAll = document.getElementById('myClearAll');


function Fillbox(index) {
  if (index == null) {
    BtnSubmit.style.display = 'inline-block';
    BtnUpdate.style.display = 'none';
    BtnDele.style.display = 'none';
    BtnClearBox.style.display = 'none';

  }
  else {
    --index;
    Mid.value = stdList[index][0];
    Mdate.value = stdList[index][1];
    Mtimes.value = stdList[index][2];
    Mweeks.value = stdList[index][3];
    Mmonth.value = stdList[index][4];
    Mother.value = stdList[index][5];
    BtnClearBox.style.display = 'inline-block';

    BtnSubmit.style.display = 'none';
    BtnUpdate.style.display = 'inline-block';
    BtnDele.style.display = 'inline-block';
  }
}
NewBox();
function NewBox() {
  BtnSubmit.style.display = 'inline-block';
  BtnUpdate.style.display = 'none';
  BtnDele.style.display = 'none';
  BtnClearBox.style.display = 'none';

  var Mid = document.getElementById('myid');
  var Mdate = document.getElementById('myDate');

  Mid.value = "";
  Mdate.value = "";
}

function AddStd(e) {
  firebase.database().ref("myNotePad/" + Mdate.value).set(
    {
      id: Mid.value,
      date: Mdate.value,
      times: Mtimes.value,
      weeks: Mweeks.value,
      month: Mmonth.value,
      other: Mother.value,
    },
  )
  selectAllData();
  // window.location.reload();
  e.preventDefault();


}
function UpStd(e) {
  firebase.database().ref("myNotePad/" + Mdate.value).update(
    {
      id: Mid.value,
      date: Mdate.value,
      times: Mtimes.value,
      weeks: Mweeks.value,
      month: Mmonth.value,
      other: Mother.value,
    },
  )
  selectAllData();
  e.preventDefault();
  // window.location.reload();

}
function DelStd(e) {
  firebase.database().ref("myNotePad/" + Mdate.value).remove().then(
    function () {
      selectAllData();
      // window.location.reload();
      e.preventDefault();

    }
  )
}
function DelStdAll() {
  firebase.database().ref("myNotePad").remove();

  // window.location.reload();
}

//Divid score tables
//October
function adder() {
  var num1 = parseFloat(document.getElementById('mySoct').value);
  var num2 = parseFloat(document.getElementById('myWoct').value);
  var num3 = parseFloat(document.getElementById('myLoct').value);
  var num4 = parseFloat(document.getElementById('myRoct').value);

  var get = num1 + num2 + num3 + num4;
  var total = get / 4;
  total = parseFloat(total).toFixed(2);//កន្លែងកំណត់ទសភាគលេខ
  document.getElementById("myAoct").value = total;

}
function divid() {
  var num5 = parseFloat(document.getElementById('myScoreoct').value);
  var score = num5;
  var get = score / 3;
  get = parseFloat(get).toFixed(2);
  document.getElementById("myWoct").value = get;
  document.getElementById("myLoct").value = get;
  document.getElementById("myRoct").value = get;
}

//Novmber
function adder1() {
  var num5 = parseFloat(document.getElementById('mySnov').value);
  var num6 = parseFloat(document.getElementById('myWnov').value);
  var num7 = parseFloat(document.getElementById('myLnov').value);
  var num8 = parseFloat(document.getElementById('myRnov').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAnov").value = total1;

}
function divid1() {
  var num6 = parseFloat(document.getElementById('myScorenov').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWnov").value = get2;
  document.getElementById("myLnov").value = get2;
  document.getElementById("myRnov").value = get2;

}
//December
function adder2() {
  var num5 = parseFloat(document.getElementById('mySdec').value);
  var num6 = parseFloat(document.getElementById('myWdec').value);
  var num7 = parseFloat(document.getElementById('myLdec').value);
  var num8 = parseFloat(document.getElementById('myRdec').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAdec").value = total1;

}
function divid2() {
  var num6 = parseFloat(document.getElementById('myScoredec').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);

  document.getElementById("myWdec").value = get2;
  document.getElementById("myLdec").value = get2;
  document.getElementById("myRdec").value = get2;

}
//January
function adder3() {
  var num5 = parseFloat(document.getElementById('mySjan').value);
  var num6 = parseFloat(document.getElementById('myWjan').value);
  var num7 = parseFloat(document.getElementById('myLjan').value);
  var num8 = parseFloat(document.getElementById('myRjan').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAjan").value = total1;

}
function divid3() {
  var num6 = parseFloat(document.getElementById('myScorejan').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);

  document.getElementById("myWjan").value = get2;
  document.getElementById("myLjan").value = get2;
  document.getElementById("myRjan").value = get2;

}
//February
function adder4() {
  var num5 = parseFloat(document.getElementById('mySfeb').value);
  var num6 = parseFloat(document.getElementById('myWfeb').value);
  var num7 = parseFloat(document.getElementById('myLfeb').value);
  var num8 = parseFloat(document.getElementById('myRfeb').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAfeb").value = total1;

}
function divid4() {
  var num6 = parseFloat(document.getElementById('myScorefeb').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);

  document.getElementById("myWfeb").value = get2;
  document.getElementById("myLfeb").value = get2;
  document.getElementById("myRfeb").value = get2;

}
//1st 4 months
function adder5() {
  var num5 = parseFloat(document.getElementById('myNov').value);
  var num6 = parseFloat(document.getElementById('myDec').value);
  var num7 = parseFloat(document.getElementById('myJan').value);
  var num8 = parseFloat(document.getElementById('myFeb').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my1Score4").value = total1;

}
//1st Semester Exam
function adder6() {
  var num5 = parseFloat(document.getElementById('my1Se').value);
  var total1 = num5 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my1Sa").value = total1;

}
//1st Semester Result
function adder7() {
  var num5 = parseFloat(document.getElementById('my1SeR').value);
  var num6 = parseFloat(document.getElementById('my1MonR').value);

  var get2 = num5 + num6;
  var total1 = get2 / 2;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my1SaR").value = total1;

}

//February
function adder8() {
  var num5 = parseFloat(document.getElementById('mySmar').value);
  var num6 = parseFloat(document.getElementById('myWmar').value);
  var num7 = parseFloat(document.getElementById('myLmar').value);
  var num8 = parseFloat(document.getElementById('myRmar').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAmar").value = total1;

}
function divid8() {
  var num6 = parseFloat(document.getElementById('myScoremar').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWmar").value = get2;
  document.getElementById("myLmar").value = get2;
  document.getElementById("myRmar").value = get2;

}
//April-May
function adder9() {
  var num5 = parseFloat(document.getElementById('mySma').value);
  var num6 = parseFloat(document.getElementById('myWma').value);
  var num7 = parseFloat(document.getElementById('myLma').value);
  var num8 = parseFloat(document.getElementById('myRma').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAma").value = total1;

}
function divid9() {
  var num6 = parseFloat(document.getElementById('myScorema').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWma").value = get2;
  document.getElementById("myLma").value = get2;
  document.getElementById("myRma").value = get2;

}
//June
function adder10() {
  var num5 = parseFloat(document.getElementById('mySjun').value);
  var num6 = parseFloat(document.getElementById('myWjun').value);
  var num7 = parseFloat(document.getElementById('myLjun').value);
  var num8 = parseFloat(document.getElementById('myRjun').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAjun").value = total1;

}
function divid10() {
  var num6 = parseFloat(document.getElementById('myScorejun').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWjun").value = get2;
  document.getElementById("myLjun").value = get2;
  document.getElementById("myRjun").value = get2;

}
//July
function adder16() {
  var num5 = parseFloat(document.getElementById('mySjuly').value);
  var num6 = parseFloat(document.getElementById('myWjuly').value);
  var num7 = parseFloat(document.getElementById('myLjuly').value);
  var num8 = parseFloat(document.getElementById('myRjuly').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAjuly").value = total1;

}
function divid16() {
  var num6 = parseFloat(document.getElementById('myScorejuly').value);
  var score1 = num6;
  var get2 = score1 / 3;
  get2 = parseFloat(get2).toFixed(2);
  document.getElementById("myWjuly").value = get2;
  document.getElementById("myLjuly").value = get2;
  document.getElementById("myRjuly").value = get2;

}

//2nd 4 months
function adder11() {
  var num5 = parseFloat(document.getElementById('myMar').value);
  var num6 = parseFloat(document.getElementById('myMay').value);
  var num7 = parseFloat(document.getElementById('myJune').value);
  var num8 = parseFloat(document.getElementById('myJuly').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  document.getElementById("my2Score4").value = total1;

}
//2nd Semester Exam
function adder12() {
  var num5 = parseFloat(document.getElementById('my2Se').value);
  var total1 = num5 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my2Sa").value = total1;

}
//2nd Semester Result
function adder13() {
  var num5 = parseFloat(document.getElementById('my2SeR').value);
  var num6 = parseFloat(document.getElementById('my2MonR').value);

  var get2 = num5 + num6;
  var total1 = get2 / 2;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("my2SaR").value = total1;

}

//Annual Year
function adder14() {
  var num5 = parseFloat(document.getElementById('my1SaY').value);
  var num6 = parseFloat(document.getElementById('my2SaY').value);

  var get2 = num5 + num6;
  var total1 = get2 / 2;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAaY").value = total1;

}


//Save to excel
function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('input5aOct');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
    XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}
//Clear text in Box
function clearBox() {
  document.getElementById('mySoct').value = "";
  document.getElementById('myWoct').value = "";
  document.getElementById('myLoct').value = "";
  document.getElementById('myRoct').value = "";
  document.getElementById('myAoct').value = "";
  document.getElementById('myKoct').value = "";
  document.getElementById('myScoreoct').value = "";
  //November
  document.getElementById('mySnov').value = "";
  document.getElementById('myWnov').value = "";
  document.getElementById('myLnov').value = "";
  document.getElementById('myRnov').value = "";
  document.getElementById('myAnov').value = "";
  document.getElementById('myKnov').value = "";
  document.getElementById('myScorenov').value = "";


}
function clearAll() {
  document.getElementById('myName').value = "";
  document.getElementById('myID').value = "";
  document.getElementById('mySex').value = "";
  document.getElementById('mySoct').value = "";
  document.getElementById('myWoct').value = "";
  document.getElementById('myLoct').value = "";
  document.getElementById('myRoct').value = "";
  document.getElementById('myAoct').value = "";
  document.getElementById('myKoct').value = "";
  document.getElementById('myScoreoct').value = "";
  //November
  document.getElementById('mySnov').value = "";
  document.getElementById('myWnov').value = "";
  document.getElementById('myLnov').value = "";
  document.getElementById('myRnov').value = "";
  document.getElementById('myAnov').value = "";
  document.getElementById('myKnov').value = "";
  document.getElementById('myScorenov').value = "";


}

//Save to excel
function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('input5aOct');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
    XLSX.writeFile(wb, fn || ('Student Report Grade 5A.' + (type || 'xlsx')));
}

//Sorting without change N0
$('th:not(:first-child)').click(function () {
  var table = $(this).parents('table').eq(0)
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
  this.asc = !this.asc
  if (!this.asc) { rows = rows.reverse() }
  for (var i = 0; i < rows.length; i++) {
    $(rows[i]).find('td:first').text(i + 1);
    table.append(rows[i]);
  }
})
function comparer(index) {
  return function (a, b) {
    var valA = getCellValue(a, index), valB = getCellValue(b, index)
    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
  }
}
function getCellValue(row, index) { return $(row).children('td').eq(index).text() }

//Input Text
function myInputText() {
  var inputMonth = document.getElementById('myMonth').value;
  var inputDate = document.getElementById('myDate').value;
  document.getElementById('textMonth').innerHTML = inputMonth;
}

//Hiden Calliborate
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function myPicAdd() {
  var img = document.getElementById("imgView");
  var inputLink = document.getElementById("picLink");
  var getLink = inputLink.value;
  img.src = getLink;
}