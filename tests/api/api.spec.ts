import { test, expect } from '@playwright/test';

test('GET a post from JSONPlaceholder', async ({ request }) => {
  // Send GET request
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  // Check response status
  expect(response.status()).toBe(200);

  // Parse JSON
  const body = await response.json();

  // Validate some data
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('title');
  expect(body.userId).toBeGreaterThan(0);

  console.log(body); // optional: see full response
});

test('POST a new post to JSONPlaceholder', async ({ request }) => {
  const newPost = {
    title: 'My Playwright Test Post',
    body: 'This is a test post created via Playwright API test',
    userId: 123,
  };

  // Send POST request
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: newPost,
    }
  );

  // Check response status
  expect(response.status()).toBe(201); // 201 = Created

  // Parse JSON response
  const body = await response.json();

  // Validate returned data
  expect(body).toMatchObject(newPost);
  expect(body).toHaveProperty('id'); // JSONPlaceholder returns an id

  console.log(body); // Optional: see what the API returned
});
