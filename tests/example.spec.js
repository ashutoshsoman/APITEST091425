// @ts-check
import { test, expect , request } from '@playwright/test';

test('getAllProducts', async ({ request }) => {
         
  const response  = await request.get("https://simple-grocery-store-api.glitch.me/products");
  
  console.log(response);

  console.log(await response.json());

});