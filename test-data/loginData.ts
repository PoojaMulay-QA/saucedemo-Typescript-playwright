export const loginData = [

  {
    name: 'Valid login',

    username: 'standard_user',

    password: 'secret_sauce',

    result: 'success'
  },

  {
    name: 'Invalid username',

    username: 'invalid_user',

    password: 'secret_sauce',

    result: 'error',

    error:
      'Username and password do not match any user in this service'
  },

  {
    name: 'Invalid password',

    username: 'standard_user',

    password: 'wrong_password',

    result: 'error',

    error:
      'Username and password do not match any user in this service'
  },

  {
    name: 'Locked user',

    username: 'locked_out_user',

    password: 'secret_sauce',

    result: 'error',

    error:
      'Sorry, this user has been locked out'
  }

] as const;
