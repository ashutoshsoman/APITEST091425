
// @ts-check
import { test, expect , request } from '@playwright/test';

test('getDemoBlazeEntries', async ({ request }) => {
         
  const response  = await request.get("https://api.demoblaze.com/entries");
  
  console.log(response);

  console.log(await response.json());

});



