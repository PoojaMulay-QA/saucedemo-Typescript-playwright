import {
  expect,
  Locator,
  Page
} from '@playwright/test';

export class InventoryPage {

  readonly page: Page;
  readonly title: Locator;
  readonly cart: Locator;
  readonly menuButton: Locator;
  readonly logout: Locator;

  readonly backpackAdd: Locator;
  readonly backpackRemove: Locator;

  readonly sortDropdown: Locator;

  constructor(page: Page) {

    this.page = page;

    this.title =
      page.locator('[data-test="title"]');

    this.cart =
      page.locator('[data-test="shopping-cart-link"]');

    this.menuButton =
      page.getByRole('button', {
        name: 'Open Menu'
      });

    this.logout =
      page.getByRole('link', {
        name: 'Logout'
      });

    this.backpackAdd =
      page.locator(
        '[data-test="add-to-cart-sauce-labs-backpack"]'
      );

    this.backpackRemove =
      page.locator(
        '[data-test="remove-sauce-labs-backpack"]'
      );

    this.sortDropdown =
      page.locator(
        '[data-test="product-sort-container"]'
      );
  }

  async verifyPage(): Promise<void> {

    await expect(this.page)
      .toHaveURL(/inventory\.html/);

    await expect(this.title)
      .toHaveText('Products');
  }

  async addBackpack(): Promise<void> {

    await this.backpackAdd.click();
  }

  async removeBackpack(): Promise<void> {

    await this.backpackRemove.click();
  }

  async openCart(): Promise<void> {

    await this.cart.click();
  }

  async sortLowToHigh(): Promise<void> {

    await this.sortDropdown.selectOption('lohi');
  }

  async logoutUser(): Promise<void> {

    await this.menuButton.click();

    await this.logout.click();
  }
}