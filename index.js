var XLSX = require('xlsx');
var wb = XLSX.readFile("sheet.xls");
console.log(XLSX.utils.sheet_to_csv(wb.Sheets.Sheet1));