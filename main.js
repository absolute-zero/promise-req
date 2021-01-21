const req = (method, url, headers, body) => {
    return  new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        for(let key in headers){
            xhr.setRequestHeader(key, headers[key])
        }

        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        xhr.onload = () => {
            if (xhr.status !== 200) {
                reject({
                    "status": this.status,
                    "statusText": this.statusText
                });
            } else {
                resolve(this.response)
            }
        };

        xhr.onerror = () => {
            reject({
                'status': xhr.status,
                'statusText': xhr.statusText,
                'description': 'load error'
            });
        };

        if(method === 'GET' || body === undefined) {
            xhr.send();
        }else {
            xhr.send(body);
        }
    })
};