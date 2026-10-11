import {test,expect} from '../../fixtures/test.fixture';

import { checkoutData} from '../../test-data/checkoutData';

for (const data of checkoutData) {

  test(
    `Checkout - ${data.name}`,
    async ({
      loginPage,
      inventoryPage,
      cartPage,
      checkoutPage,
      page
    }) => {

      // LOGIN

      await loginPage.goto();

      await loginPage.login(
        'standard_user',
        'secret_sauce'
      );

      // INVENTORY

      await inventoryPage.verifyPage();

      await inventoryPage.addBackpack();

      // CART

      await inventoryPage.openCart();

      await cartPage.verifyPage();

      await cartPage.checkout();

      // CHECKOUT

      await expect(page)
        .toHaveURL(
          /checkout-step-one\.html/
        );

      await checkoutPage.fillCustomerDetails(

        data.firstName,

        data.lastName,

        data.postalCode
      );

      await checkoutPage.continue();

      // VALIDATION

      if (data.result === 'success') {

        await expect(page)
          .toHaveURL(
            /checkout-step-two\.html/
          );

        await checkoutPage.finish();

        await checkoutPage
          .verifyOrderComplete();

      } else {

        await checkoutPage
          .verifyError(data.error);
      }
    }
  );
}