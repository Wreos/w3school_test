const { assert } = require("console");


const titleRow = 1
const url = 'https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all'


describe('SQLTest', function () {

  test('Check record after SELECT', function (browser) {
    browser
      .url(url)
      .execute('return window.editor.getValue();')
      .execute("window.editor.setCursor(editor.firstLine());")
      .execute("window.editor.setValue('SELECT * FROM Customers;');")
      .click('.ws-btn')
      .isVisible("xpath", "//*[text() = 'Giovanni Rovelli']")
      .isVisible("xpath", "//*[text() = 'Via Ludovico il Moro 22']")
      .end();
  });

  test('Add new record', function (browser) {
    browser
      .url(url)
      .execute('return window.editor.getValue();')
      .execute("window.editor.setCursor(editor.firstLine());")
      .execute("window.editor.setValue('INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) VALUES (\"WhiteBear\", \"Mikhail Shishkin\", \"2nd Mirgorodskaya, 9\", \"Novosibirsk\",\"630058\", \"Russian Federation\");');")
      .click('.ws-btn')
      .isVisible("xpath", "//*[text() = 'You have made changes to the database. Rows affected: 1']")
      .end();
  });


  test('Update all the fields of record', function (browser) {
    browser
      .url(url)
      .execute('return window.editor.getValue();')
      .execute("window.editor.setCursor(editor.firstLine());")
      .execute("window.editor.setValue('UPDATE Customers SET CustomerName = \"Michael\", ContactName = \"Jorriew\", Address = \"Lenina, 10\", City = \"Irkutsk\", PostalCode = \"664081\", Country = \"Russia\" WHERE CustomerID = 1');")
      .click('.ws-btn')
      .isVisible("xpath", "//*[text() = 'You have made changes to the database. Rows affected: 1']")
      .end();
  });


  test('Test amount of records where city is London', function (browser) {

    browser
      .url(url)
      .execute('return window.editor.getValue();')
      .execute("window.editor.setCursor(editor.firstLine()); window.editor.setValue('SELECT * FROM Customers WHERE City=\"London\";');")
      .click('.ws-btn')
      .isVisible("xpath", "//*[text() = 'Number of Records: 6']")
      browser.expect.elements('.w3-table-all>tbody>tr').count.to.equal(6 + titleRow) // первая строка всегда выводится - это заголовок
      browser.end();
  });


  test('Restore database', function (browser) {
    browser
      .url(url)
      .click('.w3-btn')
      .acceptAlert()
      .isVisible("xpath", "//*[text() = 'The database is fully restored.']")
      .end();
  });


});
