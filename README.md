# React Redux Shop

## Description

This project serves as an experimental starter kit for building a fully functional shop system based on react redux.

## Run demo

```shell
npm install && npm run dev
```

## Stripe Payment (*Optional*)

To make use of the stripe payment integration you will have to register at stripe.com and obtain your own publishable api key.
Replace the string below in *./src/config/lib.js* with your key and 'Stripe' will work.

```js
...

export const STRIPE_API_KEY = 'your_stripe_api_key_here';

...
```