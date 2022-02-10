var numActivities = 0;
var iD = "";

// append column to the HTML table
function appendColumn() {
    var tbl = document.getElementById('my-table'); // table reference
    var i;
    numActivities++;

    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {

        if(i == 0){
            createInputTxtCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), 'col');
        }
        else if(i == 1){
            createTextCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "Hours", 'col');
        }
        else
        {
            var cell = tbl.rows[i].insertCell(tbl.rows[i].cells.length);
            createInputNbrCell(cell, 'col');
            iD = numActivities + "," + (i-1);
            cell.innerHTML = "<input type='number' id='" + iD +"'>";
        }
    }
}