var Rooms = [];

function myCreateFunction() {
  var table = document.getElementById("myTable");
  var inputValue = document.getElementById("inputState");
  row = table.insertRow(-1);
  var cell = row.insertCell(-1);
  // cell.className = "clickable-row"
  // cell.innerHTML = inputValue.options[inputValue.selectedIndex].value
  cell.innerHTML = '<a data-toggle="modal" data-target="#exampleModal">' + inputValue.options[inputValue.selectedIndex].value + '</a>'
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}
