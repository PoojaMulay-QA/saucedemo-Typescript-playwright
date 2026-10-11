export const checkoutData = [

  {
    name: 'Valid checkout',

    firstName: 'Puja',

    lastName: 'QA',

    postalCode: '411001',

    result: 'success'
  },

  {
    name: 'Missing first name',

    firstName: '',

    lastName: 'QA',

    postalCode: '411001',

    result: 'error',

    error: 'First Name is required'
  },

  {
    name: 'Missing last name',

    firstName: 'Puja',

    lastName: '',

    postalCode: '411001',

    result: 'error',

    error: 'Last Name is required'
  },

  {
    name: 'Missing postal code',

    firstName: 'Puja',

    lastName: 'QA',

    postalCode: '',

    result: 'error',

    error: 'Postal Code is required'
  }

] as const;