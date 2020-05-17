import ArticlesReq from './newsClass.js';
import {userReq} from './headers.js';

const articleClass = new ArticlesReq();

class CardTxt {
	giveDate(e){
		//"2020-03-25T13:15:58Z"
		let date = new Date(e.slice(0, 10));
		let month = date.getMonth();
		if (month === 0) {
			month = 'Января';
		} else if (month === 1) {
			month = 'Февраля';
		} else if (month === 2) {
			month = 'Марта';
		} else if (month === 3) {
			month = 'Апреля';
		} else if (month === 4) {
			month = 'Майя';
		} else if (month === 5) {
			month = 'Июня';
		} else if (month === 6) {
			month = 'Июля';
		} else if (month === 7) {
			month = 'Августа';
		} else if (month === 8) {
			month = 'Сентября';
		} else if (month === 9) {
			month = 'Октября';
		} else if (month === 10) {
			month = 'Ноября';
		} else if (month === 11) {
			month = 'Декабря';
		} 
		let str = date.getDate() + ' ' + month + ' ' + date.getFullYear();
		return str;
	}
	title(txt){
		if (txt.length > 50) {
			let shrink = txt.slice(0, 50);
			while(shrink[shrink.length] === ' ') {
				shrink = shrink.slice(0, (shrink.length - 1));
			} 
			return shrink + '...';
		} else {
			return txt;
		}
	}
	description(txt){
		const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
		let str = txt.replace(expression, '');

		if (str.length > 200) {
			let shrink = str.slice(0, 200);
			while(shrink[shrink.length] === ' ') {
				shrink = shrink.slice(0, (shrink.length - 1));
			} 
			return shrink + '...';
		} else {
			return str;
		}
	}
	setCardDescription(){
		const newscardTxtMainCont = document.querySelectorAll('.newscard__txt-conteiner');
		const windowWidth = window.innerWidth;
		if (windowWidth < 1350 && windowWidth >= 1250) {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(230, e)});
			}
		} else if (windowWidth < 1250 && windowWidth > 690) {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(220, e)});
			}
		} else if (windowWidth <= 690) {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(185, e)});
			}
		} else {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(235, e)});
			}
		}
		//setEclipsis
		function setEclipsis(myHeight, elem){
			let heightOfElem = elem.offsetHeight;
			let newscardTxt = elem.querySelector('.newscard__txt');
			let str = newscardTxt.textContent;
			let compare = true;
			while(myHeight < heightOfElem) {
			 	str = str.slice(0, -1);
				newscardTxt.textContent = str + '...';
				heightOfElem = elem.offsetHeight;
			}
		}
	}
}


const cardTxt = new CardTxt();

class FavoriteCardsSetUp {
	buildFavoriteCards(arr){
		async function buildSavedSetUp(arr){
			console.log(arr);
			if(arr.data.length > 0){
				// <section class="article">
				// 		<h3 class="article__description">Сохранённые статьи</h3>
				// 		<h1 class="article__title">Грета, у вас 5 сохранённых статей</h1>
				// 		<h3 class="article__find-result">По ключевым словам: <span>Природа</span>, <span>Тайга</span> и <span>2 другим</span></h3>
				// 	</section>
				let preSetHtmlForCard = `<!--Section with Cards-->`;
				let dataForCards = arr.data;
				let keyword = [];
				dataForCards.map((e)=>{
					if(!keyword.includes(e.keyword)){
						keyword.push(e.keyword);
					}
				});

				let name = await userReq.setName();
				let article = document.querySelector('.article');
				let articleTitle = article.querySelector('.article__title');
				let articleFindResult = article.querySelector('.article__find-result');
				articleTitle.textContent = name +', у вас ' + dataForCards.length + ' сохранённых статей';
				articleFindResult.insertAdjacentHTML('beforeend', setArticlesKeyword(keyword));

				function setArticlesKeyword(keyword){
					let str;
					if (keyword.length > 3) {
						str = `По ключевым словам: <span>${keyword[0]}</span>, <span>${keyword[1]}</span>, <span>${keyword[2]}</span> и <span>${keyword.length - 3} другим.</span>`;
					}
					else if (keyword.length >= 3) {
						str = `По ключевым словам: <span>${keyword[0]}</span>, <span>${keyword[1]}</span> и  <span>${keyword[2]}</span>.`;
					} else if (keyword.length === 2){
						str  = `По ключевым словам: <span>${keyword[0]}</span>, <span>${keyword[1]}</span>.`;
					} else if (keyword.length === 1){
						str = `По ключевым словам: <span>${keyword[0]}</span>.`;
					} return str;
				}

				dataForCards.forEach((e)=>{
					countPlace(e);
				});	
				function countPlace(elem){
					//00 month 0000
					//console.log(elem)
					let card = `<div class="newscard" card_id="${elem._id}">
									<img class="newscard__img" src="${elem.image}" alt="news photo" onerror="this.onerror=null;this.src='./img/img_not_found.png';">
									<span class="newscard__keyword">${elem.keyword}</span>
									<div class="newscard__delete">
										<span>Убрать из сохранённых</span>
									</div>
									<div class="newscard__txt-conteiner">
										<h4 class="newscard__date" date="${elem.date}">${cardTxt.giveDate(elem.date)}</h4>
										<h3 class="newscard__title"><a href="${elem.link}" alt="news">${cardTxt.title(elem.title)}</a></h3>
										<p class="newscard__txt">${elem.text}</p>
										<h4 class="newscard__owner">${elem.source}</h4>
									</div>
								</div>`;
					preSetHtmlForCard = preSetHtmlForCard + `\n` + card;
					return preSetHtmlForCard;
				}

				//aboutAuthor.insertAdjacentHTML('beforeBegin', newscardSectionHTML);
				const newsCardConteiner = document.querySelector('.newscard__conteiner');
				newsCardConteiner.addEventListener('click', (e)=>{
					if(e.target.classList.contains('newscard__delete')){
						articleClass.deleteFavoriteNews(e.target);
					}
				})
				newsCardConteiner.insertAdjacentHTML('beforeend', preSetHtmlForCard);
				cardTxt.setCardDescription();
				return;
			} else {
				async function setNoArticles(){
					let name = await userReq.setName();
					let main = document.querySelector('.main__conteiner');
					let footer = document.querySelector('.footer');
					let htmlSection = 	`<main class="main__conteiner">
											<section class="article">
												<h3 class="article__description">Сохранённые статьи</h3>
												<h1 class="article__title">${name}, у вас 0 сохранённых статей</h1>
												<h3 class="article__find-result">Ключевые слова не найдены.</h3>
											</section>
											<section class="newscard-block">
													<h1 style="text-align: center; padding: 50px 0 ;">Похоже что у вас нет сохранённых статей!</h1>
											</section>
										</main>`;
					main.remove();
					footer.insertAdjacentHTML('beforebegin', htmlSection);
				}
				return setNoArticles()
			}
		}
		return buildSavedSetUp(arr);
	}
}

const favoriteCardsSetUp = new FavoriteCardsSetUp();

export {articleClass, cardTxt, favoriteCardsSetUp};
