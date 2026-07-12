import {test} from "@playwright/test"

test("login", async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
    //modified

    //TM2

    //TM1
    //branch1
}
)
