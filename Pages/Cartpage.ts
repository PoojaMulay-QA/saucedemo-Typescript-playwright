import {
  expect,
  Page
} from '@playwright/test';

export class CartPage {

  constructor(
    readonly page: Page
  ) {}

  async verifyPage(): Promise<void> {

    await expect(this.page)
      .toHaveURL(/cart\.html/);

    await expect(
      this.page.locator('[data-test="title"]')
    ).toHaveText('Your Cart');
  }

  async checkout(): Promise<void> {

    await this.page
      .getByRole('button', {
        name: 'Checkout'
      })
      .click();
  }
}