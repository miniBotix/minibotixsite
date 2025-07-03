function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Orders");
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.product,
    data.price,
    data.email
  ]);

  MailApp.sendEmail({
    to: "YOUR_EMAIL@gmail.com",
    subject: "🛒 New Order Received - " + data.product,
    htmlBody: "New order for <b>" + data.product + "</b><br>Price: ₹" + data.price + "<br>Email: " + data.email
  });

  return ContentService.createTextOutput("OK");
}
