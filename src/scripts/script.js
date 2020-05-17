import {HeaderSetName, userReq} from './headers.js';
import {articleClass, cardTxt, favoriteCardsSetUp} from './favoriteSetUp.js';


let login = HeaderSetName(false);
//SavedNews Build
if (document.querySelector('title').textContent === 'SavedNews') {
	async function getSavedNews(){
		const savedArr = await articleClass.getFavoriteCards();
		return favoriteCardsSetUp.buildFavoriteCards(savedArr);
	}
	getSavedNews();
}

//Saved News signOut or Check
function savedNewsSigOut(){
	  (document.querySelector('title').textContent === 'SavedNews' && !login)?window.location.replace('https://alexandrwilliams.github.io/news-explorer-front-end/'):false;
	  (document.querySelector('title').textContent === 'SavedNews')?window.location.replace('https://alexandrwilliams.github.io/news-explorer-front-end/'):false;
	  return;
};

/// обработка после атворизации///////////////////////////////////
let keyword;

if (document.querySelector('title').textContent !== 'SavedNews') {
	const formSearch = document.forms.search;
	let cards;
	formSearch.addEventListener('submit', (e) => {
		event.preventDefault();

		//search for content
		let contentClear = document.querySelector('.newscard-block');
		if (contentClear != undefined) {
			contentClear.remove();
		}

		let article;
		let inputs = formSearch.elements;
		inputs.forEach((e)=>{
			(e.name === 'search')?article = e.value:false;
		})
		
		articleClass.getNews(article)
			.then((res) => {
				cards = res.articles;
				preloder(res.articles, article)
				return;
				
	      })
	  	.catch((err) => console.log(err));
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
function errSetUp(bool){
	if (document.querySelector('.newscard-error') != undefined) {
		document.querySelector('.newscard-error').remove();
	}
	if (bool) {
		return;
	}
	aboutAuthor.insertAdjacentHTML('beforeBegin', newscardErrSectionHTML);
}
function preloder(e, searchWord){
	errSetUp(true);
	arrWithNews = e;
	//console.log(e[1]);
	aboutAuthor.insertAdjacentHTML('beforeBegin', preloderSectionHTML);
	let activePreloder = document.querySelector('.preloader');

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
	
	let preSetHtmlForCard = `<!--Section with Cards-->`;
	try {
		while( counter < 3) {
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
		preSetHtmlForCard = preSetHtmlForCard + `\n` + card;
		return preSetHtmlForCard;
	}

	if (document.querySelectorAll('.newscard').length === 0) {
		aboutAuthor.insertAdjacentHTML('beforeBegin', newscardSectionHTML);
		const newsCardConteiner = document.querySelector('.newscard__conteiner');
		newsCardConteiner.addEventListener('mouseover', (e)=>{
			if(e.target.classList.contains('newscard__save')){
				if(!login){
					e.target.querySelector('span').style.display = 'flex';
				}
			}
		});
		newsCardConteiner.addEventListener('mouseout', (e)=>{
			if(e.target.classList.contains('newscard__save')){
    			e.target.querySelector('span').style.display = 'none';
			}
		});
		newsCardConteiner.addEventListener('click', (e)=>{
			if(e.target.classList.contains('newscard__save')){
				articleClass.addToFavoriteNews(e.target);

			}
		});
		newsCardConteiner.insertAdjacentHTML('beforeend', preSetHtmlForCard);
		newsCardConteiner.insertAdjacentHTML('afterend', '<button class="newscard-block__button">Показать еще</button>');
		const moreNewsBtn  = newsCardConteiner.parentNode.parentNode.querySelector('.newscard-block__button');
		moreNewsBtn.addEventListener('click', (e)=>{
			buildCards(arrWithNews)
		})
	} else if (document.querySelectorAll('.newscard').length > 1) {
		const newsCardConteiner = document.querySelector('.newscard__conteiner');
		newsCardConteiner.insertAdjacentHTML('beforeend', preSetHtmlForCard);
	}
	cardTxt.setCardDescription();
	
	return arrWithNews = arr;
}

//scritp auto refresh for eclipses
window.addEventListener("resize", ()=>{
	cardTxt.setCardDescription();
});