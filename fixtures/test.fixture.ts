import { test as base, expect, APIRequestContext } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/Inventorypage';
import { CartPage } from '../Pages/cartpage';
import { CheckoutPage } from '../Pages/checkoutPage';


type Fixtures = {

  loginPage: LoginPage;

  inventoryPage: InventoryPage;

  cartPage: CartPage;

  checkoutPage: CheckoutPage;

  api: APIRequestContext;
};

export const test =
  base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {

      await use(
        new LoginPage(page)
      );
    },

    inventoryPage: async ({ page }, use) => {

      await use(
        new InventoryPage(page)
      );
    },

    cartPage: async ({ page }, use) => {

      await use(
        new CartPage(page)
      );
    },

    checkoutPage: async ({ page }, use) => {

      await use(
        new CheckoutPage(page)
      );
    },

    api: async ({ playwright }, use) => {

      const api =
        await playwright.request.newContext({

          baseURL:
            'https://dummyjson.com',

          extraHTTPHeaders: {
            Accept: 'application/json'
          }

        });

      await use(api);

      await api.dispose();
    }
  });

export { expect };