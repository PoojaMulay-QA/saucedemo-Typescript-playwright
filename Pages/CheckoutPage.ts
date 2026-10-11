import {expect,Locator,Page} from '@playwright/test';

export class CheckoutPage {

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;

  readonly continueButton: Locator;
  readonly finishButton: Locator;

  readonly errorMessage: Locator;
  readonly completeMessage: Locator;

  constructor(
    readonly page: Page
  ) {

    this.firstName =
      page.getByPlaceholder('First Name');

    this.lastName =
      page.getByPlaceholder('Last Name');

    this.postalCode =
      page.getByPlaceholder('Zip/Postal Code');

    this.continueButton =
      page.getByRole('button', {
        name: 'Continue'
      });

    this.finishButton =
      page.getByRole('button', {
        name: 'Finish'
      });

    this.errorMessage =
      page.locator('[data-test="error"]');

    this.completeMessage =
      page.getByText(
        'Thank you for your order!'
      );
  }

  async fillCustomerDetails(
    firstName: string,
    lastName: string,
    postalCode: string
  ): Promise<void> {

    await this.firstName.fill(firstName);

    await this.lastName.fill(lastName);

    await this.postalCode.fill(postalCode);
  }

  async continue(): Promise<void> {

    await this.continueButton.click();
  }

  async finish(): Promise<void> {

    await this.finishButton.click();
  }

  async verifyError(
    message: string
  ): Promise<void> {

    await expect(
      this.errorMessage
    ).toBeVisible();

    await expect(
      this.errorMessage
    ).toContainText(message);
  }

  async verifyOrderComplete(): Promise<void> {

    await expect(this.page)
      .toHaveURL(/checkout-complete\.html/);

    await expect(
      this.completeMessage
    ).toHaveText(
      'Thank you for your order!'
    );
  }
}