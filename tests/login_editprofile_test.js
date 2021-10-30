const {Builder, By, Key, until} = require('selenium-webdriver');
const test_email = "abc@xyz.com";
const test_password = "123";
const test_pet_first_name = "grsdfsfass";
const test_pet_last_name = "soilsdfsddsf";
const test_pet_breed = "shadsfsdfdsrk";
const test_pet_gender = "alsdfsdfl";
const test_biography = "testing automated script 123456234932y89432894239";


(async function test_login_editprofile() {
    let driver = await new Builder().forBrowser('chrome').build();

    // log in

    await driver.get('https://doggos.herokuapp.com/login');

    await driver.findElement(By.name('email')).sendKeys(test_email, Key.TAB);

    await driver.findElement(By.name('password')).sendKeys(test_password, Key.ENTER);

    var current_url = await driver.getCurrentUrl();

    if (current_url == "https://doggos.herokuapp.com/profile"){
        console.log("succesfully logged in");
    }else{
        console.log("failed to log in");
    }

    // click edit profile button

    let editProfileButton = driver.findElement(By.linkText('Edit Profile'));

    const actions = driver.actions({async: true});

    await actions.doubleClick(editProfileButton).perform();

    current_url = await driver.getCurrentUrl();

    if (current_url == "https://doggos.herokuapp.com/edit"){
        console.log("clicked edit successfully");
    }else{
        console.log("failed to click edit");
    }

    // enter new information and save 

    await driver.findElement(By.name('firstname')).sendKeys(test_pet_first_name, Key.TAB);

    await driver.findElement(By.name('lastname')).sendKeys(test_pet_last_name, Key.TAB);

    await driver.findElement(By.name('breed')).sendKeys(test_pet_breed, Key.TAB);

    await driver.findElement(By.name('gender')).sendKeys(test_pet_gender, Key.TAB);

    await driver.findElement(By.name('bio')).sendKeys(test_biography, Key.TAB, Key.ENTER);

    driver.quit();
})();