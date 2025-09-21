function unmergeAllCells() {
  // Get the active spreadsheet and all sheets
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = spreadsheet.getSheets();
  
  // Loop through each sheet
  sheets.forEach(function(sheet) {
    console.log(`Processing sheet: ${sheet.getName()}`);
    
    // Get all merged ranges in the current sheet
    const mergedRanges = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).getMergedRanges();
    
    // Unmerge each merged range
    mergedRanges.forEach(function(range) {
      range.breakApart();
    });
    
    console.log(`Unmerged ${mergedRanges.length} ranges in sheet: ${sheet.getName()}`);
  });
  
  console.log('All merged cells have been unmerged!');
  SpreadsheetApp.getUi().alert('All merged cells have been unmerged across all sheets!');
}

function unmergeCurrentSheet() {
  // Get the active sheet only
  const sheet = SpreadsheetApp.getActiveSheet();
  
  console.log(`Processing current sheet: ${sheet.getName()}`);
  
  // Get all merged ranges in the current sheet
  const mergedRanges = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).getMergedRanges();
  
  // Unmerge each merged range
  mergedRanges.forEach(function(range) {
    range.breakApart();
  });
  
  console.log(`Unmerged ${mergedRanges.length} ranges in sheet: ${sheet.getName()}`);
  SpreadsheetApp.getUi().alert(`Unmerged ${mergedRanges.length} merged ranges in the current sheet!`);
}

function unmergeSpecificRange() {
  // Example: Unmerge cells in a specific range (A1:Z100)
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getRange('A1:Z100');
  
  const mergedRanges = range.getMergedRanges();
  
  mergedRanges.forEach(function(mergedRange) {
    mergedRange.breakApart();
  });
  
  console.log(`Unmerged ${mergedRanges.length} ranges in the specified area`);
  SpreadsheetApp.getUi().alert(`Unmerged ${mergedRanges.length} merged ranges in the specified area!`);
}