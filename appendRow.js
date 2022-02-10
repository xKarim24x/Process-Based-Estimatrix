// append row to the HTML table
var numFunctions = 0;
var delID = 0;

function appendRow() {
    var tbl = document.getElementById('my-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    numFunctions++;

    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        
        if(i == 0)
        {
            createInputTxtCell(row.insertCell(i), 'hot');
        }
        else if(i == 1){
            delID++;
            createDeleteCell(row.insertCell(i), (tbl.rows.length - 1), delID, 'hot')
        }
        else{
            var cell = row.insertCell(i);
            createInputNbrCell(cell, 'hot');
            iD = (i-1) + "," + numFunctions;
            cell.innerHTML = "<input type='number' id='" + iD +"'>";
        }
    }


}