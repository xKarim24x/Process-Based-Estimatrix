// create DIV element and append to the table cell
function createInputTxtCell(cell, style) {
    var div = document.createElement('div'), // create DIV element
        input = document.createElement('input'); // create text node
    div.appendChild(input);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

function createInputNbrCell(cell, style){
    var div = document.createElement('div');
    var num = document.createElement('input');
    num.setAttribute('type', 'number');
    div.appendChild(num);
    div.setAttribute('class', style);
    div.setAttribute('className', style);
    cell.appendChild(div);
}

function createTextCell(cell, text, style){
    var div = document.createElement('div');
    var txt = document.createTextNode(text);
    div.appendChild(txt);
    div.setAttribute('class', style);
    div.setAttribute('className', style);
    cell.appendChild(div);
}

function createDeleteCell(cell, current, iD, style){
    var div = document.createElement('div');
    var btn = document.createElement('button');
    var div2 = document.createElement('div');
    var image = document.createElement('img')
    image.setAttribute('src', 'images/trash.svg');  
    div2.appendChild(image);
    btn.setAttribute('type', 'button');
    btn.setAttribute('id', 'del' + iD);
    btn.setAttribute('onclick', 'javascript:deleteRow('+current+')');
    btn.appendChild(div2);
    div.appendChild(btn);
    div.setAttribute('class', style);
    div.setAttribute('className', style);
    cell.appendChild(div);
}