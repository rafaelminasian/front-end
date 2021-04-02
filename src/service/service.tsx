export const getFonts = fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD0U05SvtznlDBoKdePVTU8XUkZzPJEqTA')
    .then(response => response.json())


export const getContent = fetch('https://rhubarb-custard-78604.herokuapp.com/public/api/get').then(response => response.json());

export const postContent = (data: any) => fetch('https://rhubarb-custard-78604.herokuapp.com/public/api/post',
    {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
    })

