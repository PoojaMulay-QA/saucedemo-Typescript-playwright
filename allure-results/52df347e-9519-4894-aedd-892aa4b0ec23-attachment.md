# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\inventory.spec.ts >> Logout @smoke
- Location: tests\ui\inventory.spec.ts:60:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Logout' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - button "All Items" [active] [ref=e13] [cursor=pointer]
                - button "Dynamic Catalog" [ref=e14] [cursor=pointer]
                - link "About" [ref=e16] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                - button "Logout" [ref=e17] [cursor=pointer]
                - button "Reset App State" [ref=e18] [cursor=pointer]
              - generic [ref=e19]:
                - button "Close Menu" [ref=e20] [cursor=pointer]
                - img "Close Menu" [ref=e21]
        - generic [ref=e22]: Swag Labs
        - button "Cart, empty" [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]: Products
        - generic [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Name (A to Z)
          - combobox "Sort products" [ref=e31]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e32]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - button "View details for Sauce Labs Backpack" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - button "View details for Sauce Labs Backpack" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Sauce Labs Backpack
              - generic [ref=e44]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e45]:
              - generic [ref=e46]: $29.99
              - button "Add to cart" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - button "View details for Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - button "View details for Sauce Labs Bike Light" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Sauce Labs Bike Light
              - generic [ref=e56]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e57]:
              - generic [ref=e58]: $9.99
              - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e62] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e66] [cursor=pointer]:
                - generic [ref=e67]: Sauce Labs Bolt T-Shirt
              - generic [ref=e68]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e69]:
              - generic [ref=e70]: $15.99
              - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e74] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Sauce Labs Fleece Jacket
              - generic [ref=e80]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e81]:
              - generic [ref=e82]: $49.99
              - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button "View details for Sauce Labs Onesie" [ref=e86] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]:
              - button "View details for Sauce Labs Onesie" [ref=e90] [cursor=pointer]:
                - generic [ref=e91]: Sauce Labs Onesie
              - generic [ref=e92]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e93]:
              - generic [ref=e94]: $7.99
              - button "Add to cart" [ref=e95] [cursor=pointer]
        - generic [ref=e96]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e98] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e99]
          - generic [ref=e100]:
            - generic [ref=e101]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e102] [cursor=pointer]:
                - generic [ref=e103]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e104]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e105]:
              - generic [ref=e106]: $15.99
              - button "Add to cart" [ref=e107] [cursor=pointer]
  - contentinfo [ref=e108]:
    - list [ref=e109]:
      - listitem [ref=e110]:
        - link "X" [ref=e111] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e112]:
        - link "Facebook" [ref=e113] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e114]:
        - link "LinkedIn" [ref=e115] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e116]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import {
  2  |   expect,
  3  |   Locator,
  4  |   Page
  5  | } from '@playwright/test';
  6  | 
  7  | export class InventoryPage {
  8  | 
  9  |   readonly page: Page;
  10 |   readonly title: Locator;
  11 |   readonly cart: Locator;
  12 |   readonly menuButton: Locator;
  13 |   readonly logout: Locator;
  14 | 
  15 |   readonly backpackAdd: Locator;
  16 |   readonly backpackRemove: Locator;
  17 | 
  18 |   readonly sortDropdown: Locator;
  19 | 
  20 |   constructor(page: Page) {
  21 | 
  22 |     this.page = page;
  23 | 
  24 |     this.title =
  25 |       page.locator('[data-test="title"]');
  26 | 
  27 |     this.cart =
  28 |       page.locator('[data-test="shopping-cart-link"]');
  29 | 
  30 |     this.menuButton =
  31 |       page.getByRole('button', {
  32 |         name: 'Open Menu'
  33 |       });
  34 | 
  35 |     this.logout =
  36 |       page.getByRole('link', {
  37 |         name: 'Logout'
  38 |       });
  39 | 
  40 |     this.backpackAdd =
  41 |       page.locator(
  42 |         '[data-test="add-to-cart-sauce-labs-backpack"]'
  43 |       );
  44 | 
  45 |     this.backpackRemove =
  46 |       page.locator(
  47 |         '[data-test="remove-sauce-labs-backpack"]'
  48 |       );
  49 | 
  50 |     this.sortDropdown =
  51 |       page.locator(
  52 |         '[data-test="product-sort-container"]'
  53 |       );
  54 |   }
  55 | 
  56 |   async verifyPage(): Promise<void> {
  57 | 
  58 |     await expect(this.page)
  59 |       .toHaveURL(/inventory\.html/);
  60 | 
  61 |     await expect(this.title)
  62 |       .toHaveText('Products');
  63 |   }
  64 | 
  65 |   async addBackpack(): Promise<void> {
  66 | 
  67 |     await this.backpackAdd.click();
  68 |   }
  69 | 
  70 |   async removeBackpack(): Promise<void> {
  71 | 
  72 |     await this.backpackRemove.click();
  73 |   }
  74 | 
  75 |   async openCart(): Promise<void> {
  76 | 
  77 |     await this.cart.click();
  78 |   }
  79 | 
  80 |   async sortLowToHigh(): Promise<void> {
  81 | 
  82 |     await this.sortDropdown.selectOption('lohi');
  83 |   }
  84 | 
  85 |   async logoutUser(): Promise<void> {
  86 | 
  87 |     await this.menuButton.click();
  88 | 
> 89 |     await this.logout.click();
     |                       ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  90 |   }
  91 | }
```