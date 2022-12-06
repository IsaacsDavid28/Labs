function apiCall(){
    let url = "https://www.reddit.com/r/aww/.json";
    fetch(url).then(response => response.json()).then(redditData=> {
        // console.log(redditData);

        for(let i=0;i<redditData.data.children.length; i++){

        const post = redditData.data.children[i].data
        const title = document.createElement('h1');
        const img = document.createElement('img');
        const url = document.createElement('a');
    
        title.innerText = post.title;
        img.src = post.thumbnail;
        url.innerText = post.url
        url.href = post.url

        document.body.appendChild(title)
        document.body.appendChild(img)
        document.body.appendChild(url)
        
        }
    })
}

apiCall();