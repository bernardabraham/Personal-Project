function makeRequest(method, url, userData) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {

            if (xhr.status >= 200 && xhr.status <= 299) {
                //console.log(xhr.responseText);
                if (xhr.responseText.length > 0) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } else {
                reject('Error!: ' + xhr.responseText);
            }
        }
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        if (method === 'POST') {
            xhr.send(JSON.stringify(userData));

        } else {
            xhr.send();
        }
    });
}