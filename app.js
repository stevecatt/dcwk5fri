let newsArticles = document.getElementById("newsArticles")

let newsItems = []

let newsArtNews = []

 fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
 .then (function(response){return response.json()})
 .then (function (json){
    for (let i =0; i<json.length; i++){
        let newURLS = `https://hacker-news.firebaseio.com/v0/item/${json[i]}.json?print=pretty`
        fetch(newURLS)
        .then (function(responses){
            return responses.json()
        })
        .then (function(json2){
            //console.log(json2)
            newsArtNews.push ({title: json2.title, time: json2.time, by: json2.by, url: json2.url
                
                 
        })
        displayNews() 
            


            })

            
    }



    })
    //console.log(newsArtNews)
    
    function displayNews(){
        let newsLiArticles = newsArtNews.map((art)=>{
            //console.log(art.title)
            return `
            <h3>${art.title}</h3>
            <li>${art.by}</li>
            <a href ="${art.url}">${art.url} </a>

           ` 
        })
        newsArticles.innerHTML= newsLiArticles.join('')
        //console.log(newsLiArticles)
    }



   

   
    
 
 

