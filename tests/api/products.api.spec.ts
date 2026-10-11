import {
  test,
  expect
} from '../../fixtures/test.fixture';

test(
  'GET products @smoke',
  async ({ api }) => {

    const response =
      await api.get('/products');

    expect(response.ok())
      .toBeTruthy();

    const body =
      await response.json();

    expect(
      body.products.length
    ).toBeGreaterThan(0);
  }
);

test(
  'GET single product',
  async ({ api }) => {

    const response =
      await api.get('/products/1');

    expect(response.status())
      .toBe(200);

    const body =
      await response.json();

    expect(body.id)
      .toBe(1);

    expect(body.title)
      .toBeTruthy();
  }
);

test(
  'POST product',
  async ({ api }) => {

    const response =
      await api.post('/products/add', {

        data: {
          title: 'Playwright Test Product',
          price: 99
        }

      });

    expect(response.status())
      .toBe(201);

    const body =
      await response.json();

    expect(body.title)
      .toBe('Playwright Test Product');
  }
);

test(
  'DELETE product',
  async ({ api }) => {

    const response =
      await api.delete('/products/1');

    expect(response.status())
      .toBe(200);

    const body =
      await response.json();

    expect(body.isDeleted)
      .toBeTruthy();
  }
);