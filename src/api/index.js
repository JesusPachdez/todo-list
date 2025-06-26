const apiUrl = 'http://localhost:3001';

export default async function apiHandler({ endpoint, method, body }) {
  try {
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${apiUrl}/${endpoint}`, config);

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
    return {
      status: 500,
      message: 'Network error or server unavailable',
      isError: true,
    };
  }
}
