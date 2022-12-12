const apiUrl = 'https://jsonplaceholder.typicode.com';

export default async function apiHandler({ endpoint, method }) {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, { method });

    if (response.status === 404)
      return {
        status: response.status,
        message: 'there was a problem with the api',
        isError: true,
      };

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('apiHandler - error', error);
  }
}
