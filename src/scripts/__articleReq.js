const url = 'https://api.alexanderwilliams.us';
const headersOptions = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				};

class ArticlesReq {
	getNews(article){
		const date = new Date();
		date.setDate(date.getDate() - 7)
		//console.log(date.toISOString().slice(0, 10))
		const url = `https://newsapi.org/v2/everything?q=${article}&from=${date.toISOString().slice(0, 10)}-$}&sortBy=popularity&apiKey=3c48624ca3ff47eb9d50ce64b52e3f1e`;
		const req = new Request(url);
		return fetch(req)
		    .then((res) => {
		        if (res.ok) {
		          return res.json();
		        } return Promise.reject(`Error:${res.status}`);
	      	})
	}
	deleteFromFavorite(cardId){
		return fetch(`${url}/articles/${cardId}`, { //https://api.alexanderwilliams.us/signin
			  mode : 'cors',
		      method: 'DELETE',
		      redirect: 'follow',
	    	  credentials: 'include',
		      headers: headersOptions,
		    })
		    .then((res) => {
		        if (res.ok) {
		            return	res.json();
		        } return Promise.reject(`Error:${res.status}`);
	      	})
	      	.then((response) => {
		            return true;
	      	})
	}
	addToFavoriteNews(e){
		return fetch(`${url}/articles`, { //https://api.alexanderwilliams.us/signin
			  mode : 'cors',
		      method: 'POST',
		      redirect: 'follow',
	    	  credentials: 'include',
		      headers: headersOptions,
		      body: JSON.stringify({
		      		"keyword": e.keyword,
					"title": e.title,
					"text": e.txt,
					"date": e.date,
					"source": e.source,
					"link": e.link,
					"image": e.image
				}),
			      redirect: 'follow'
		    })
		    .then((res) => {
		        if (res.ok) {
		            return	res.json();
		        } return Promise.reject(`Error:${res.status}`);
	      	})
	      	.then((response) => {
		            return response;
	      	})
	}
	getFavoriteCards(){
		return fetch(`${url}/articles`, { //https://api.alexanderwilliams.us/signin
				mode : 'cors',
			    method: 'GET',
			    redirect: 'follow',
		    	credentials: 'include',
			    headers: headersOptions,
		    })
		    .then((res) => {
		        if (res.ok) {
		            return	res.json();
		        } return Promise.reject(`Error:${res.status}`);
	      	})
	      	.then((response)=>{
				return response;
	      	})
	}
}

//const artcileClass = new ();

export default ArticlesReq;

///// Search News /////////////////
//API Key 3c48624ca3ff47eb9d50ce64b52e3f1e
//keyword when searching news
//https://newsapi.org/v2/everything?q=bitcoin&apiKey=3c48624ca3ff47eb9d50ce64b52e3f1e
// var url = 'http://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2020-04-14&' +
//           'sortBy=popularity&' +
//           'apiKey=3c48624ca3ff47eb9d50ce64b52e3f1e';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
