export const fetchData = fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD0U05SvtznlDBoKdePVTU8XUkZzPJEqTA')
    .then(response => response.json())


export const getContent = fetch('http://127.0.0.1:8000/api/get').then(response => response.json());

export const postContent = (data: any) => fetch('http://127.0.0.1:8000/api/post',
    {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
    })

