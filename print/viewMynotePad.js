//November
function myPrintNov() {
  document.getElementById("tbody3").innerHTML = "";
  document.getElementById("tbodySave3").innerHTML = "";

  stdNumber = 0;
  firebase
    .database()
    .ref("5aAllData")
    .once("value", function (AllRecordsPrint) {
      AllRecordsPrint.forEach(function (CurrentRecord) {
        addClassNov();
      });
      GetData2(AllRecordsPrint);
      GetDataSave2(AllRecordsPrint);
      v
    });
}

function GetData2(datas) {
  let tbody = document.getElementById("tbody3");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingNov = data.val().speakingNov;
    var writingNov = data.val().writingNov;
    var listeningNov = data.val().listeningNov;
    var readingNov = data.val().readingNov;
    var averageNov = data.val().averageNov;
    var myKh = data.val().myKh;


    students.push({
      name,
      sex,
      speakingNov,
      writingNov,
      listeningNov,
      readingNov,
      averageNov,
      myKh,
    });
  });

  students.sort(function (a, b) { return b.averageNov - a.averageNov });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averageNov;
    let studentsWithRank = students.filter(
      (student) => student.averageNov === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let tr = `
            <td>${No}</td>
            <td>${student.name}</td>
            <td>${student.sex}</td>
            <td>${student.speakingNov}</td>
            <td>${student.writingNov}</td>
            <td>${student.listeningNov}</td>
            <td>${student.readingNov}</td>
            <td>${student.averageNov}</td>
            <td>${student.Rank}</td>
    `;
    tbody.innerHTML += tr;
  });
}
function GetDataSave2(datas) {
  let tbody = document.getElementById("tbodySave3");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingNov = data.val().speakingNov;
    var writingNov = data.val().writingNov;
    var listeningNov = data.val().listeningNov;
    var readingNov = data.val().readingNov;
    var averageNov = data.val().averageNov;
    var myKh = data.val().myKh;


    students.push({
      myKh,
      sex,
      speakingNov,
      writingNov,
      listeningNov,
      readingNov,
      averageNov,
    });
  });

  // students.sort(function(a,b){return b.averageNov - a.averageNov });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averageNov;
    let studentsWithRank = students.filter(
      (student) => student.averageNov === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let tr = `
            <td>${No}</td>
            <td>${student.myKh}</td>
            <td>${student.sex}</td>
            <td>${student.speakingNov}</td>
            <td>${student.writingNov}</td>
            <td>${student.listeningNov}</td>
            <td>${student.readingNov}</td>
            <td>${student.averageNov}</td>
    `;
    tbody.innerHTML += tr;
  });
}

function myNov() {
  var newstr = document.getElementById("myNovPrint").innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML = newstr;
  window.print();
  document.body.innerHTML = oldstr;
  return false;
}
function addClassNov() {
  var els = document.querySelectorAll("#myNovemberT td:nth-child(8)");
  var len = els.length;
  for (var i = 0, len = els.length; i < len; i++) {
    els[i].classList.add("myScoreNov"); //To add class on top of existing ones
  }
}
function saveNov(type, fn, dl) {
  var elt = document.getElementById("myNovemberSaveT");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || "Grade 5A November." + (type || "xlsx"));
}
