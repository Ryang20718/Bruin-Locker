

//basic function that builds the form using index.html as the template
function doGet(e) {
     return HtmlService
     .createTemplateFromFile('index')
     .evaluate()
     .setSandboxMode(HtmlService.SandboxMode.NATIVE);
}
 



function writeForm(form) {
  try {  
    var Combo = form.Combo; //these match to the named fields in your form
    var Number = form.Number;
    
    var ss = SpreadsheetApp.openById('INSERT YOUR ID HERE'); //the ID of the spreadsheet you want to write to
    var sheet = ss.getActiveSheet();
    var newRow = sheet.getLastRow()+1;//go to the first blank row   
     
    
    var timezone = "GMT-8"; //PST TIME
    var timestamp_format = "MM-dd-yyyy HH:mm:ss"; // Timestamp Format. 
    var updateColName = "Number";
    var timeStampColName = "Timestamp";
    
    
    
    //writes the form data to the spreadsheet
    var range = sheet.getRange(newRow, 1);    
    range.setValue(Utilities.formatDate(new Date(), timezone, timestamp_format));
    range = sheet.getRange(newRow, 2);
    range.setValue(Combo);
    range = sheet.getRange(newRow, 3);
    range.setValue(Number);
    

var confirmation = "I've remembered your locker information";
    return confirmation;
  } catch (error) {
     
    return error.toString();
  }
}


function readForm(form){
  var ss = SpreadsheetApp.openById('INSERT YOUR ID HERE'); //the ID of the spreadsheet you want to write to
    var sheet = ss.getActiveSheet();
  var app = SpreadsheetApp;
  var targetSheet = app.getActiveSpreadsheet().getActiveSheet();
  var newRow = sheet.getLastRow();//go to the last row
  var readCombo = targetSheet.getRange(newRow, 2).getValue();
  var readNumber = targetSheet.getRange(newRow, 3).getValue();
  var totalInfo = "Locker Num is: " + readNumber + "\n" + "Locker Combo: " + readCombo;
  return totalInfo;
  
}





