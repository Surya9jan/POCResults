
//const {Builder, By, Key, until, webdriver} = require('selenium-webdriver');
//let driver =  new Builder().forBrowser('explorer').build();
var { defineSupportCode } = require('cucumber');
var assert = require('assert');
var { webdriver } = require('selenium-webdriver');
// const browser = new webdriver.Builder()
//   .usingServer()
//   .withCapabilities({'browserName': 'chrome' })
//   .build();

//const {Builder, By, Key, until} = require('selenium-webdriver');

// let driverPromise = new Builder()
//     .forBrowser('chrome')
//     .build();

// driverPromise.then(driver => driver.get('http://localhost:3000/'))

// const {Builder, By, Key, until} = require('selenium-webdriver');

// async function main() {
//     let driver = await new Builder()
//         .forBrowser('chrome')
//         .build();

//   await driver.get('http://www.google.com/ncr')
  
//   const element = await driver.findElement(By.name('q'))
  
//   await element.sendKeys('webdriver', Key.RETURN)
//   await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
//   await driver.quit()
// }
// main()



defineSupportCode(function ({ Given, When, Then }) {

    // function CustomWorld() {
    //     console.log('I am here');
    //     this.driver = new webdriver.Builder()
    //       .forBrowser('chrome')
    //       .build();
    //       return this.driver.get('http://localhost:3000/');
    //   }
      
    // Given('I visit a ToDo app', function () {
    //     //this.driver.manage().timeouts().implicitlyWait(10, 1000000);
    //     return this.driver.get('http://crossbrowsertesting.github.io/todo-app.html');
    //     //return this.driver.get('http://localhost:3000/');
    //     //CustomWorld();
    // });

    // When('I click some ToDos', function () {
    //     this.driver.findElement(webdriver.By.name("todo-4")).click();
    //     return this.driver.findElement(webdriver.By.name("todo-5")).click();
    // });

    // Then('I add another ToDo to our list', function () {
    //     this.driver.findElement(webdriver.By.id("todotext")).sendKeys("Run your first Selenium Test");
    //     return this.driver.findElement(webdriver.By.id("addbutton")).click();
    // });

    // When('I archive my old ToDos', function () {
    //     return this.driver.findElement(webdriver.By.linkText("archive")).click()
    // });

    // Then('I should have 4 ToDos', function () {
    //     return this.driver.findElements(webdriver.By.className('ng-pristine ng-untouched ng-valid'))
    //         .then(function (elems) {
    //             assert.equal(elems.length, 4);
    //         });
    // });
});