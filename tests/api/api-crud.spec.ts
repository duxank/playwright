import { test, expect } from '@playwright/test';

test('Full CRUD cycle on JSONPlaceholder', async ({ request }) => {
  // --- GET ---
  const getResponse = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );
  expect(getResponse.status()).toBe(200);
  const getBody = await getResponse.json();
  console.log('GET:', getBody);

  // --- POST ---
  const newPost = {
    title: 'Playwright Test Post',
    body: 'This is a test post created via Playwright API test',
    userId: 123,
  };

  const postResponse = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: newPost,
    }
  );
  expect(postResponse.status()).toBe(201);
  const postBody = await postResponse.json();
  console.log('POST:', postBody);

  // --- PUT ---
  const updatedPost = {
    ...postBody,
    title: 'Updated Playwright Post',
    body: 'This post has been updated via PUT',
  };

  // PUT on an existing post (id=1)
  const putResponse = await request.put(
    `https://jsonplaceholder.typicode.com/posts/1`,
    { data: { ...updatedPost, id: 1 } }
  );
  expect(putResponse.status()).toBe(200);

  const putBody = await putResponse.json();
  console.log('PUT:', putBody);

  // --- DELETE ---
  const deleteResponse = await request.delete(
    `https://jsonplaceholder.typicode.com/posts/${postBody.id}`
  );
  expect(deleteResponse.status()).toBe(200); // JSONPlaceholder returns 200
  console.log('DELETE response status:', deleteResponse.status());
});
