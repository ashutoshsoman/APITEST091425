// @ts-check
import { test, expect , request } from '@playwright/test';

test('postRequest', async ({ request }) => {
         
  const response  = await request.post("https://simple-grocery-store-api.glitch.me/carts");
  
  console.log(response);

  console.log(await response.json());

});