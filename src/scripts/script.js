import {login, HeaderSetName, userReq} from './__headers.js';
import {articleClass, cardTxt, buildSavedNews} from './__buildSavedNews.js';

HeaderSetName();

//SavedNews Build
if (document.querySelector('title').textContent === 'SavedNews') {
	async function getSavedNews(){
		return articleClass.getFavoriteCards()
			.then((res)=>{
				return buildSavedNews(res);
			})
			.catch((error) => {
			    console.log('error', error);
			    return;
			});
		
	}
	getSavedNews();
}
/// обработка после атворизации///////////////////////////////////
let keyword;

if (document.querySelector('title').textContent !== 'SavedNews') {
	const formSearch = document.forms.search;
	let cards;
	formSearch.addEventListener('submit', (e) => {
		event.preventDefault();

		//search for content
		const contentClear = document.querySelector('.newscard-block');
		if (contentClear != undefined) {
			contentClear.remove();
		}

		let article;
		const inputs = formSearch.elements;
		inputs.forEach((e)=>{
			(e.name === 'search')?article = e.value:false;
		})
		
		articleClass.getNews(article)
			.then((res) => {
				cards = res.articles;
				preloder(res.articles, article)
				return;
	      	})
		  	.catch((err) => {
		  		console.log(err);
		  		errSetUp(false , err);
		  	});
	  });
}

//build Cards 3 at one time
const aboutAuthor = document.querySelector('.about-author');//section after newscard
const newscardErrSectionHTML = `<section class="newscard-error">
			<img class="newscard-error__img" src="./img/error.png" alt="error">
			<h3 class="newscard-error__title" >Ничего не найдено</h3>
			<h4 class="newscard-error__descripition" >К сожалению по вашему запросу ничего не найдено.</h4>
		</section>`;
const newscardSectionHTML = `<section class="newscard-block">
			<div class="newscard__main-conteiner">
				<h2 class="newscard-block__title">Результаты поиска</h2>
				<div class="newscard__conteiner"></div>
				</div>
				<!--<button class="newscard-block__button">Показать еще</button>-->
			</div>
		</section>`;
const preloderSectionHTML = `<section class="preloader">
			<i class="circle-preloader circle-preloader__deactiveted"></i>
			<h4 class="preloader__description">Идёт поиск новостей</h4>
		</section>`;
let arrWithNews;
function errSetUp(bool, errTxt){
	if (document.querySelector('.newscard-error') != undefined) {
		document.querySelector('.newscard-error').remove();
	}
	if (bool) {
		return;
	}
	aboutAuthor.insertAdjacentHTML('beforeBegin', newscardErrSectionHTML);
	if (errTxt) {
		const errTitle = document.querySelector('.newscard-error__title');
		const errDescrition = document.querySelector('.newscard-error__descripition');
		errTitle.textContent = 'Произошла непредвиденная ошибка';
		errDescrition.textContent = `Тип ошибки : ${errTxt}`;
	}
}
function preloder(e, searchWord){
	errSetUp(true);
	arrWithNews = e;
	//console.log(e[1]);
	aboutAuthor.insertAdjacentHTML('beforeBegin', preloderSectionHTML);
	const activePreloder = document.querySelector('.preloader');

	setTimeout(response, 1500);
	function response(){
		activePreloder.remove();
		if (e.length === 0) {
			errSetUp(false);
			return;
		} 
		keyword = searchWord;
		buildCards(e);

	}
	return arrWithNews;
}
function buildCards(arr){
	let counter = 0;
	const showQtyCard = 3;
	let htmlForCard = `<!--Section with Cards-->`;
	try {
		while(counter < showQtyCard) {
			countPlace(arr.shift());
			counter = counter + 1;
		}
	}
	catch (err) {
		document.querySelector('.newscard-block__button').remove();
	}
			
	function countPlace(elem){
		//00 month 0000

		let card = `<div class="newscard" keyword="${keyword}">
						<img class="newscard__img" src="${elem.urlToImage}" alt="news photo" onerror="this.onerror=null;this.src='./img/img_not_found.png';">
						<div class="newscard__save newscard__save_hover">
							<span>Войдите, чтобы сохранять статьи</span>
						</div>
						<div class="newscard__txt-conteiner">
							<h4 class="newscard__date" date="${elem.publishedAt}">${cardTxt.giveDate(elem.publishedAt)}</h4>
							<h3 class="newscard__title"><a href="${elem.url}" alt="news">${cardTxt.title(elem.title)}</a></h3>
							
							<p class="newscard__txt">${cardTxt.description(elem.description)}</p>
							<h4 class="newscard__owner">${elem.source.name}</h4>
						</div>
					</div>`;
		htmlForCard = htmlForCard + `\n` + card;
		return htmlForCard;
	}

	if (document.querySelectorAll('.newscard').length === 0) {
		aboutAuthor.insertAdjacentHTML('beforeBegin', newscardSectionHTML);
		const newsCardConteiner = document.querySelector('.newscard__conteiner');
		newsCardConteiner.addEventListener('mouseover', favoriteMouseOverHandler);
		newsCardConteiner.addEventListener('mouseout', favoriteMouseOutHandler);
		newsCardConteiner.addEventListener('click', cardClickHandler);
		newsCardConteiner.insertAdjacentHTML('beforeend', htmlForCard);
		newsCardConteiner.insertAdjacentHTML('afterend', '<button class="newscard-block__button">Показать еще</button>');
		const moreNewsBtn  = newsCardConteiner.parentNode.parentNode.querySelector('.newscard-block__button');
		moreNewsBtn.addEventListener('click', (e)=>{
			buildCards(arrWithNews)
		})
	} else if (document.querySelectorAll('.newscard').length > 1) {
		const newsCardConteiner = document.querySelector('.newscard__conteiner');
		newsCardConteiner.insertAdjacentHTML('beforeend', htmlForCard);
	}
	cardTxt.setCardDescription();
	
	return arrWithNews = arr;
}

function favoriteMouseOverHandler(e){
	const bool = isUserSignIn(e);
	if(e.target.classList.contains('newscard__save')){
    	if(!bool){
			e.target.querySelector('span').style.display = 'flex';
		}else{
			e.target.querySelector('span').style.display = 'none';
		}		
	}
}

function favoriteMouseOutHandler(e){
	const bool = isUserSignIn(e);
	if(e.target.classList.contains('newscard__save')){
    	if(!bool){
			e.target.querySelector('span').style.display = 'none';
		}
	}
}

function isUserSignIn(elem){
	const name = document.querySelector('.header__button_auth');
	if(name.textContent === 'Авторизоваться'){
		return false;
	} else if(name.textContent !== 'Авторизоваться'){
		return true;
	}
}

async function cardClickHandler(e){
	const bool = isUserSignIn(e);
	if (e.target.classList.contains('newscard__save') && bool) {
		const card = e.target.parentNode;
		//save button
		const save = card.querySelector('.newscard__save');
		if (save.classList.contains('newscard__save_active')) {
			const cardId = card.getAttribute('card_id');
			articleClass.deleteFromFavorite(cardId)
			.then((res) => {
				if(res){
					save.classList.toggle('newscard__save_hover');
			    	save.classList.toggle('newscard__save_active');
				} return Promise.reject(`Error:${res.status}`);
	      	})
		  	.catch((err) => {
		  		console.log(err);
		  		return;
		  	});
			
		} else if (!save.classList.contains('newscard__save_active')){
			const card = e.target.parentNode;
			const keyword = card.getAttribute('keyword');
			const txtConteiner = card.querySelector('.newscard__txt-conteiner');
			const title = txtConteiner.querySelector('.newscard__title').textContent;
			const txt = txtConteiner.querySelector('.newscard__txt').textContent;
			const date = txtConteiner.querySelector('.newscard__date').getAttribute('date');
			const source = txtConteiner.querySelector('.newscard__owner').textContent;
			const link = txtConteiner.querySelector('.newscard__title').childNodes[0].getAttribute('href');
			const image = card.querySelector('.newscard__img').getAttribute('src');
			const options = {
				keyword : keyword,
				txtConteiner : txtConteiner,
				title : title,
				txt : txt,
				date : date,
				source : source,
				link : link,
				image : image,
			};
			return articleClass.addToFavoriteNews(options)
				.then((res)=>{
					if(res){
						save.classList.toggle('newscard__save_hover');
				     	save.classList.toggle('newscard__save_active');
				     	card.setAttribute('card_id', res.data._id);
				     	return;
					} return Promise.reject(`Error:${res.status}`);
				})
				.catch((error) => {
			    	console.log('error', error);
			    	return false;
			    });
		}
	}
}

//scritp auto refresh for eclipses
window.addEventListener("resize", ()=>{
	cardTxt.setCardDescription();
});