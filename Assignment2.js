

function table()
{
   var table = '';
   var rows = 15;
   var cols = 15;
   for(var r = 1; r <= rows; r++){
   
   table += '<tr>';
   for(var c = 1; c <= cols; c++){
   
   table += '<td>' + r + ',' +c + '</td>';
   }
   
   table += '</tr>';
   }
   
 document.write('<table border=1 >'  + table + '</table>');
    
 }
 
 function table2()
{
   var table = '';
   var rows = document.getElementById("row").value;
   var cols = document.getElementById("col").value;
   for(var r = 1; r <= rows; r++){
   
   table += '<tr>';
   for(var c = 1; c <= cols; c++){
   
   table += '<td>' + r + ',' +c + '</td>';
   }
   
   table += '</tr>';
   }
   
 document.write('<table border=1 >'  + table + '</table>');
    
 }


