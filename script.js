var myHeaders = new Headers();
myHeaders.append("x-api-key", "e9850496e3fa470b9f1ca8627b8303c4");
myHeaders.append("Authorization", "Basic NDI1NzI6U09Nd2NzckV0LjFQNkdFWEJJVFVtZTA5YUV0dGFXRFd3SU9ZQVlqVC12NA==");
//myHeaders.append("Cookie", "__cflb=0H28vP5GxS7vgVH4MZT6rB7QcDNQ8jpmFtu3BPdYQaF; bungleanon=sv=BAAAAACuTgAAAAAAAKuHcQQAAAAAAAAAAAAAAADd6WMc4vHaCEAAAAD63p7kMx2KZmz25pQvWZDjNf+CHPfbCFDS4LsH0vKSArDN4+8BNp9iedoQKq4XYqyE42If05tbsJksVlskDWSr&cl=MC4yMDE0Mi43NDU0OTE2Mw==; bungled=1898624053759548391; bungledid=B6DIMu6YyLJJgbAqqC3mFh3HwmMc4vHaCAAA");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://www.bungie.net/Platform/Destiny2/1/Profile/4611686018451018706/?components=205", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));