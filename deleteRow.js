var numRowsDeleted = -1;
var currentComparison = 0;
var deletedRow = Array(100);
deletedRow[0] = 0;
var temp = Array(2);

function deleteRow(current){
    numRowsDeleted++;
    var tbl = document.getElementById('my-table');
    
    if(numRowsDeleted == 0){
        tbl.deleteRow(current);
        deletedRow[numRowsDeleted] = current;

    }
    else if(current - numRowsDeleted >= deletedRow[numRowsDeleted - 1]){
        tbl.deleteRow(current - numRowsDeleted);
        deletedRow[numRowsDeleted] = current - numRowsDeleted;
    }
    else{
        tbl.deleteRow(current);
        deletedRow[numRowsDeleted] = current;

        for(let i = 0; i < numRowsDeleted; i++){
            
            if(i == 0){
                temp[0] = deletedRow[0];
                deletedRow[0] = current;
            }
            else if(i % 2 == 0){
                temp[0] = deletedRow[i];
                deletedRow[i] = temp[1];
            }
            else{
                temp[1] = deletedRow[i];
                deletedRow[i] = temp[0];
            }
        }
    }

    var rowC = 0;
    var iD = "";
    var tempCell;
    var temp = 0;
    var oldID = "";

    for(let i = 2; i < tbl.rows.length; i++){
        rowC++;
        var colC = 0;
        for(let j = 2; j < tbl.rows[0].cells.length; j++){
            colC++;
            iD = colC + "," + rowC;
            tempCell = tbl.rows[i].cells[j];
            temp = parseFloat(tempCell.childNodes[0].value);
            tempCell.innerHTML = "<input type='number' value='"+ temp + "' id='" + iD +"'>";
        }
    }

    numFunctions = numFunctions - 1;
}