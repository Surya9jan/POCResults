var { webdriver } = require('selenium-webdriver');
const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
let output = null;

defineSupportCode(function ({ Given, Then, When }) {
    function AccessMyApp() {
        console.log('I am here');
        this.driver = new webdriver.Builder()
          .forBrowser('chrome')
          .build();
          return this.driver.get('http://localhost:3000/');
      }
      
    // Given('I visit a ToDo app', function () {
    //     //this.driver.manage().timeouts().implicitlyWait(10, 1000000);
    //     //return this.driver.get('http://crossbrowsertesting.github.io/todo-app.html');
    //     //return this.driver.get('http://localhost:3000/');
    //     AccessMyApp();
    // });

    Given('I am on the login page', function () {
        AccessMyApp();
        // Write code here that turns the phrase above into concrete actions
        output = 'This is my login page';
    });

    When('I fill in USERID with {string} in USERID field', function (string) {
        // Write code here that turns the phrase above into concrete actions
        output = 'success';
    });

    When('I fill in PASSWORD with {string} in PASSWORD field', function (string) {
        // Write code here that turns the phrase above into concrete actions
        output = 'success';
    });

    When('I press Login Button', function () {
        // Write code here that turns the phrase above into concrete actions
        output = 'success';
    });

    Then('I should be on the Dashboard page with menu items list', function (dataTable) {
        // Write code here that turns the phrase above into concrete actions
        output = 'success';
    });
});