var myHeaders = new Headers();
myHeaders.append("x-api-key", "e9850496e3fa470b9f1ca8627b8303c4");
myHeaders.append("Authorization", "Basic NDI1NzI6U09Nd2NzckV0LjFQNkdFWEJJVFVtZTA5YUV0dGFXRFd3SU9ZQVlqVC12NA==");
myHeaders.append("Cookie", "Q6dA7j3mn3WPBQVV6Vru5CbQXv0q+I9ddZfGro+PognXQwjWM8bM6VGC=v1UdlRgw__XO+; __cflb=0H28vP5GxS7vgVH4MZT6rB7QcDNQ8jpmHaN1cfyE7As; bungleanon=sv=BAAAAACtTgAAAAAAAEveEwQAAAAAAAAAAAAAAADEnxFYVPDaCEAAAACKqgDt6YbukUhkkteevSz8bvYnXHIL492M8oHsZjVtDEZyjtv4azM/4D5JQX2KqifUhCKepyATm2/C08cpjIfb&cl=MC4yMDE0MS42ODQxMDk1NQ==; bungled=6547675847753298509; bungledid=B9jraAzZr0lLvA0MOFoHU96zeBFYVPDaCAAA");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018451018706/?components=200", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));