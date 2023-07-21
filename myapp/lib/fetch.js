// @/lib/fetch.js
export async function request(url, method = 'GET', headers = {}, body = null) {
    const options = {
      method,
      headers,
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    const response = await fetch(url, options);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
  
    return data;
  }
  