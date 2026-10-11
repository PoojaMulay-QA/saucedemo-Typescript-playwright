import dotenv from 'dotenv';
dotenv.config();
export const env={
    baseurl:process.env.BASE_URL ||
    '',
    username:
    process.env.SAUCE_USERNAME || '',
    password:
    process.env.SAUCE_PASSWORD || '',
    firstName:
    process.env.SAUCE_FIRSTNAME || '',
    lastName:
    process.env.SAUCE_LASTNAME || '',
    postalcode:
    process.env.POSTAL_CODE || '',
    apiBaseUrl:
    process.env.API_BASE_URL || '',
}