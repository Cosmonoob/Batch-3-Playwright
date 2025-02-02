// @ts-check
import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Testcase Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    //User Login
    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user'); 

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await expect(buttonLogin).toBeEnabled();
    await buttonLogin.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // User Add to cart
    const addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
    await expect(addToCart).toBeVisible();
    await expect(addToCart).toHaveText("Add to cart");
    await addToCart.click();

    const removebutton = page.locator('#remove-sauce-labs-backpack');
    await expect(removebutton).toHaveText('Remove');

    const addToCart1 = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');    
    await expect(addToCart1).toBeVisible();
    await expect(addToCart1).toHaveText("Add to cart");
    await addToCart1.click();


    const removebutton1 = page.locator('#remove-sauce-labs-bolt-t-shirt ');
    await expect(removebutton1).toHaveText('Remove');

    // User Click shopping cart
    const shoppingCart = page.locator('.shopping_cart_link');
    await expect(shoppingCart).toBeEnabled();
    await shoppingCart.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    // User Checkout Item
    const checkoutButton = page.locator('#checkout');
    await expect(checkoutButton).toBeVisible();
    await expect(checkoutButton).toHaveText("Checkout");
    await checkoutButton.click();
    await expect (page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    // User Fill the checkout form
    const formName = page.locator('#first-name');
    await formName.fill('Cosmo');
    await expect(formName).toHaveValue('Cosmo');

    const formFirstName = page.locator('#last-name');
    await formFirstName.fill('Force');
    await expect(formFirstName).toHaveValue('Force');

    const formPostal = page.locator('#postal-code');
    await formPostal.fill('30144');
    await expect(formPostal).toHaveValue('30144');

    const continueButton = page.locator('#continue');
    await continueButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    // User Done Checkput Flow
    const finishButton = page.locator('#finish');
    await finishButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

    // Thank you page
    const thankyouPage = page.locator('.complete-header');
    await expect(thankyouPage).toHaveText('Thank you for your order!');
});
