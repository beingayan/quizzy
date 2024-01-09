export const fetchPost = (apiUrl, formData) => {
    console.log("api",apiUrl)
    return new Promise((resolve, reject) => {
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data); // Resolve the promise with the fetched data
        })
        .catch(error => {
          reject(error); // Reject the promise with the error
        });
    });
  };
  