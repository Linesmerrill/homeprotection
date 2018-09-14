function myCreateFunction() {
  var table = document.getElementById("myTable");
  var values = [];
  $.each($('#newRoom').serializeArray(), function(i, field) {
    values.push(field.value)
    row = table.insertRow(i);
    var cell = row.insertCell(i%1);
    cell.innerHTML = field.value
  });
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}