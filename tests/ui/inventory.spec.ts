import { test,expect} from '../../fixtures/test.fixture';

type InventoryTestFixtures = {
  loginPage: import('../../Pages/LoginPage').LoginPage;
  inventoryPage: import('../../Pages/Inventorypage').InventoryPage;
};

const typedTest = test.extend<InventoryTestFixtures>({});

typedTest('Add and remove backpack @smoke',async ({
    loginPage,
    inventoryPage
  }) => {

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage.verifyPage();

    await inventoryPage.addBackpack();

    await expect(
      inventoryPage.backpackRemove
    ).toBeVisible();

    await inventoryPage.removeBackpack();

    await expect(
      inventoryPage.backpackAdd
    ).toBeVisible();
  }
);

typedTest(
  'Sort products low to high',
  async ({
    loginPage,
    inventoryPage
  }) => {

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage.sortLowToHigh();

    await expect(
      inventoryPage.sortDropdown
    ).toHaveValue('lohi');
  }
);

typedTest(
  'Logout @smoke',
  async ({
    loginPage,
    inventoryPage,
    page
  }) => {

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage.logoutUser();

    await expect(page)
      .toHaveURL(/\/$/);

    await expect(
      loginPage.loginButton
    ).toBeVisible();
  }
);