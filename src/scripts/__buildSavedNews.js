import ArticlesReq from './__articleReq.js';
import {userReq} from './__headers.js';
import {cardTxt} from './__cardTxt';

const articleClass = new ArticlesReq();

async function buildSavedNews(arr){
	if(arr.data.length > 0){
		// <section class="article">
		// 		<h3 class="article__description">Сохранённые статьи</h3>
		// 		<h1 class="article__title">Грета, у вас 5 сохранённых статей</h1>
		// 		<h3 class="article__find-result">По ключевым словам: <span>Природа</span>, <span>Тайга</span> и <span>2 другим</span></h3>
		// 	</section>
		let htmlForCard = `<!--Section with Cards-->`;
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
			htmlForCard = htmlForCard + `\n` + card;
			return htmlForCard;
		}		//aboutAuthor.insertAdjacentHTML('beforeBegin', newscardSectionHTML);
		const newsCardConteiner = document.querySelector('.newscard__conteiner');
		newsCardConteiner.addEventListener('click', (e)=>{
			if(e.target.classList.contains('newscard__delete')){
				const card = e.target.parentNode;
				const cardId = card.getAttribute('card_id');
			 	new Promise((resolve, reject) => {
			  		resolve(articleClass.deleteFromFavorite(cardId));
				})
				.then((res) => {
					if(res){
						card.remove();
					};
					return;
				})
				.catch((err)=>{
					console.log(err);
					return;
				})
			}
		})
		newsCardConteiner.insertAdjacentHTML('beforeend', htmlForCard);
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

export {articleClass, cardTxt, buildSavedNews};