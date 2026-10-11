import {
  test,
  expect
} from '../../fixtures/test.fixture';

test(
  'Valid API login',
  async ({ api }) => {

    const response =
      await api.post('/auth/login', {

        data: {
          username: 'emilys',
          password: 'emilyspass'
        }

      });
      expect(response.ok())
      .toBeTruthy();

    const body =
      await response.json();

    expect(body.accessToken)
      .toBeTruthy();
  }
);

test(
  'Invalid API login',
  async ({ api }) => {

    const response =
      await api.post('/auth/login', {

        data: {
          username: 'invalid-user',
          password: 'invalid-password'
        }

      });

    expect(response.ok())
      .toBeFalsy();

    expect(response.status())
      .toBe(400);
  }
);