const { test, expect } = require('@playwright/test');

test('SauceDemo: login, add product, verify cart, logout', async ({ page }) => {
    // Navigating to the SauceDemo login page
    await page.goto('https://www.saucedemo.com/');

    // Logging in with valid credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Adding product to the cart
    await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');

    // Go to the cart page
    await page.click('.shopping_cart_link');

    // Verifying the product name in the cart
    const productName = await page.textContent('.inventory_item_name');
    expect(productName).toBe('Sauce Labs Bike Light');


    await page.click('#react-burger-menu-btn');  // Open menu
    await page.click('#logout_sidebar_link');    // Click logout
});
