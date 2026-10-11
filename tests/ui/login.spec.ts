import { test,expect} from '../../fixtures/test.fixture';

import {loginData} from '../../test-data/loginData';

for (const data of loginData) {

  test(
    `Login - ${data.name}`,
    async ({
      loginPage,
      page
    }) => {

      await loginPage.goto();

      await loginPage.login(
        data.username,
        data.password
      );

      if (data.result === 'success') {

        await expect(page)
          .toHaveURL(/inventory\.html/);

        await expect(
          page.locator('[data-test="title"]')
        ).toHaveText('Products');

      } else {

        await loginPage.verifyLoginError(
          data.error
        );
      }
    }
  );
}