const url = 'https://api.alexanderwilliams.us';
const headersOptions = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				};

class ArticlesReq {
	getNews(article){
		let date = new Date();
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
		    .catch((error) => {
		    	console.log(error);
		    	errSetUp(false);
		    });
	}
	addToFavoriteNews(e){
		let card = e.parentNode;
		//save button
		let save = card.querySelector('.newscard__save');
		if (save.classList.contains('.newscard__save_active')) {
			let cardId = card.getAttribute('card_id');
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
	      			save.classList.toggle('newscard__save_hover');
	      			save.classList.toggle('newscard__save_active');
		            return;
	      	})
		    .catch((error) => {
		    	console.log('error', error);
		    	return;
		    });
			return;
		}
		let keyword = card.getAttribute('keyword');
		let txtConteiner = card.querySelector('.newscard__txt-conteiner');
		let title = txtConteiner.querySelector('.newscard__title').textContent;
		let txt = txtConteiner.querySelector('.newscard__txt').textContent;
		let date = txtConteiner.querySelector('.newscard__date').getAttribute('date');
		let source = txtConteiner.querySelector('.newscard__owner').textContent;
		let link = txtConteiner.querySelector('.newscard__title').childNodes[0].getAttribute('href');
		let image = card.querySelector('.newscard__img').getAttribute('src');
		console.log(date);
		return fetch(`${url}/articles`, { //https://api.alexanderwilliams.us/signin
			  mode : 'cors',
		      method: 'POST',
		      redirect: 'follow',
	    	  credentials: 'include',
		      headers: headersOptions,
		      body: JSON.stringify({
		      		"keyword": keyword,
					"title": title,
					"text": txt,
					"date": date,
					"source": source,
					"link": link,
					"image": image
				}),
			      redirect: 'follow'
		    })
		    .then((res) => {
		        if (res.ok) {
		            return	res.json();
		        } return Promise.reject(`Error:${res.status}`);
	      	})
	      	.then((response) => {
	      			save.classList.toggle('newscard__save_hover');
	      			save.classList.toggle('newscard__save_active');
	      			card.setAttribute('card_id', response.data._id);
		            return;
	      	})
		    .catch((error) => {
		    	console.log('error', error);
		    	return;
		    });
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
		    .catch((error) => {
		    	console.log('error', error);
		    	return;
		    });
	}
	deleteFavoriteNews(e){
		let card = e.parentNode;
		let cardId = card.getAttribute('card_id');

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
		     		card.remove();
		            return;
		     	})
		    .catch((error) => {
		    	console.log('error', error);
		    	return;
		    });
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
