let login = false;

async function resetName() {
  let response = await setName();
  setHeaders(response);
  return;
};
resetName();

function setHeaders(name){
	const headertoRemove = document.querySelector('.header__conteiner');
	(!headertoRemove)?false:headertoRemove.remove();
	const header = document.querySelector('.header__main-conteiner');
	const headerAintAuth = `<ul class="header__conteiner">
							<li>
								<a class="header__button header__button_main" title="NewsExplorer" href="https://alexandrwilliams.github.io/news-explorer-front-end/">
								Главная
								<span class="header__button_active"></span>
								</a>
							</li>
							<li>
								<button class="header__button header__button_auth">Авторизоваться</button>
							</li>
						</ul>`;
	const headerAuth = `<ul class="header__conteiner">
						<li>
							<a class="header__button header__button_main" title="NewsExplorer" href="https://alexandrwilliams.github.io/news-explorer-front-end/">
							Главная
							<span class="header__button_active"></span>
							</a>
						</li>
						<li>
							<a class="header__button header__button_save" title="SavedNews" href="https://alexandrwilliams.github.io/news-explorer-front-end/saved_news/">Сохранённые статьи</a>
						</li>
						<li>
							<button class="header__button header__button_auth">${name}
								<span class="header__button_exit-icon header__button_exit-icon_black"></span>
							</button>
						</li>
					</ul>`;
	if (login) {
		header.insertAdjacentHTML('beforeend', headerAuth);
		if (document.querySelector('title').textContent === 'SavedNews') {
			console.log('log')
			let mainBtn = document.querySelector('.header__button_main');
			let savedNewsBtn = document.querySelector('.header__button_save');
			mainBtn.querySelector('span').remove();
			savedNewsBtn.insertAdjacentHTML('beforeend', `<span class="header__button_active"></span>`);
		}
	} else {
		header.insertAdjacentHTML('beforeend', headerAintAuth);
	}
	headersListener();
	return;
};

const title = document.querySelector('title');
	const jumpToFile = (title.textContent === 'SavedNews')?'../img/close.png':'img/close.png';

	const popUpSectionHtml = `
			<section class="popUp">
				<div class="popUp__background"></div>
			</section>`;
	const popUpSignInHtml = `
				<div class="popUp__conteiner">
					<img class="popUp__close-icon" src="${jumpToFile}" alt="close icon">
					<h3 class="popUp__title" >Вход</h3>
					<form novalidate class="popUp__login-form" name="signIn" action="https://api.alexanderwilliams.us/signin" method="POST">
						<label class="popUp__label popUp__label_email" for="email">Email</label>
						<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту" required>
						<span id="error-email" class="error-sms error-sms__name"></span>
						<span class="popUp__input-line"></span>
						<label class="popUp__label popUp__label_password" for="password">Пароль</label>
						<input class="popUp__input" type="password" name="password" minlength="8" maxlength="16" placeholder="Введите пароль" required>
						<span class="popUp__input-line"></span>
						<span id="error-password" class="error-sms error-sms__name"></span>
						<input class="popUp__submit" type="submit" name="submit" value="Войти">
						<h4 class="popUp__under-button-txt">или <span class="popUp__signup">Зарегистрироваться</span></h4>
					</form>
				</div>`;
	const popUpSignUpHtml = `
				<div class="popUp__conteiner">
					<img class="popUp__close-icon" src="${jumpToFile}" alt="close icon">
					<h3 class="popUp__title" >Регистрация</h3>
					<form novalidate class="popUp__login-form" name="signUp" action="https://api.alexanderwilliams.us/signup" method="POST">
						<label class="popUp__label popUp__label_email" for="email">Email</label>
						<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту" required>
						<span class="popUp__input-line"></span>
						<span id="error-email" class="error-sms error-sms__name"></span>
						<label class="popUp__label popUp__label_password" for="password">Пароль</label>
						<input class="popUp__input" type="password" name="password" minlength="8" maxlength="16" placeholder="Введите пароль" required>
						<span class="popUp__input-line"></span>
						<span id="error-password" class="error-sms error-sms__name"></span>
						<label class="popUp__label popUp__label_name" for="name">Имя</label>
						<input class="popUp__input" type="text" name="userName" minlength="4" maxlength="16" placeholder="Введите свое имя" required>
						<span class="popUp__input-line"></span>
						<span id="error-userName" class="error-sms error-sms__name"></span>
						<input class="popUp__submit popUp__submit_signUp" type="submit" name="submit" value="Зарегистрироваться">
						<h4 class="popUp__under-button-txt">или <span class="popUp__signin">Войти</span></h4>
					</form>
				</div>`;
	const popUpSignUpSuccessefull = `
				<div class="popUp__conteiner popUp__conteiner_successefull">
					<img class="popUp__close-icon" src="${jumpToFile}" alt="close icon">
					<h3 class="popUp__title" >Пользователь успешно зарегистрирован!</h3>
					<h4 class="popUp__successefull-description" >Выполнить вход</h4>
				</div>`;

function headersListener(){
	const logInButton = document.querySelector('.header__button_auth');
	const pageConteiner = document.querySelector('.main__conteiner');

	const logo = document.querySelector('.header__logo');
	const buttons = document.querySelectorAll('.header__button');
	const exitImg = document.querySelector('.header__button_exit-icon');

	logInButton.addEventListener('click', (e)=>{
		if (!login) {
			pageConteiner.insertAdjacentHTML('afterbegin', popUpSectionHtml);
			pageConteiner.querySelector('.popUp').insertAdjacentHTML('beforeend', popUpSignInHtml);
			popUp('setListeners');
			preValidator('signIn');
		} else if (login) {
			signOutUser();
		}
	})
	mobileHeader();
};

function popUp(signUpTrue) {
	const popUpSection = document.querySelector('.popUp');
	let popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
	let popUpSubmitSignUp;
	let popUpSuccessefull;

	if(signUpTrue === true){
		//server return successefull response
		popUpConteiner.remove();
		popUpSection.insertAdjacentHTML('beforeend', popUpSignUpSuccessefull);
		popUpSuccessefull = popUpSection.querySelector('.popUp__conteiner_successefull');
		return;
	} else if (signUpTrue === "signIn") {
		popUpSection.remove();
		return;
	} else if (signUpTrue === "setListeners") {
		popUpSection.addEventListener('click', (e) => {
			const eClass = e.target.className;
			(eClass === 'popUp__background')?popUpSection.remove():false;
			if(eClass === 'popUp__close-icon'){
				if(window.innerWidth < 680){
					iconCaller.style.display = 'block';
					iconCaller.classList.toggle('header__mobile-icon_close');
					popUpSection.remove();
				} else {
					popUpSection.remove();
				}
			};
			if(eClass === 'popUp__signup') {
				popUpConteiner.remove();
				popUpSection.insertAdjacentHTML('beforeend', popUpSignUpHtml);
				preValidator('signUp');
				popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
				popUpSubmitSignUp = popUpConteiner.querySelector('.popUp__submit_signUp');
			};
			if (eClass === 'popUp__signin') {
				popUpConteiner.remove();
				popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
				popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
				preValidator('signIn');
			};
			if (eClass === 'popUp__successefull-description') {
				popUpSuccessefull = popUpSection.querySelector('.popUp__conteiner_successefull');
				popUpSuccessefull.remove();
				popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
				console.log(true + 'im work')
				popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
				preValidator('signIn');
			};
		})
	}
}

function mobileHeader(){
		/// header mobile 
	const logo = document.querySelector('.header__logo');
	const buttons = document.querySelectorAll('.header__button');
	const exitImg = document.querySelector('.header__button_exit-icon');

	const iconCaller = document.querySelector('.header__mobile-icon');
	const headerContainer = document.querySelector('.header__main-conteiner');
	const headerButtonContainer = document.querySelector('.header__conteiner');
	const shadowSpanHeader = document.querySelector('.header__span');
	const authButton = document.querySelector('.header__button_auth');

	iconCaller.addEventListener('click', (e) => {
		whiteScheme()
		iconCaller.classList.toggle('header__mobile-icon_close');
		shadowSpanHeader.classList.toggle('header__mobile-shadow');
		headerContainer.classList.toggle('header__conteiner_mobile');
		headerButtonContainer.classList.toggle('header__button-conteiner_mobile');
	});
	shadowSpanHeader.addEventListener('click', (e) => {
		if(e.target.classList.contains('header__mobile-shadow')){
			whiteScheme()
			iconCaller.classList.toggle('header__mobile-icon_close');
			shadowSpanHeader.classList.toggle('header__mobile-shadow');
			headerContainer.classList.toggle('header__conteiner_mobile');
			headerButtonContainer.classList.toggle('header__button-conteiner_mobile');
		}
	});
	if (window.innerWidth < 680) {
		authButton.addEventListener('click', (e) => {
			if(e.target.classList.contains('header__button_auth')){
				whiteScheme()
				iconCaller.style.display = 'none';
				shadowSpanHeader.classList.toggle('header__mobile-shadow');
				headerContainer.classList.toggle('header__conteiner_mobile');
				headerButtonContainer.classList.toggle('header__button-conteiner_mobile');
			}
		})
	}
	function whiteScheme() {
		if (title.textContent === 'SavedNews') {
			logo.classList.toggle('header__logo-white-scheme');
			buttons.forEach((e)=>{
				e.classList.toggle('header__button-white-scheme');
			})
			iconCaller.classList.toggle('header__mobile-icon_black');
			exitImg.classList.toggle('header__button_exit-icon_black');
		}
	}
};
//authorization//////////////////////////////////////////////
function preValidator(formType){
	let form
	if (formType === "signIn"){
		form = document.forms.signIn;
	} else if(formType === "signUp"){
		form = document.forms.signUp;
	}
	form.addEventListener('input', (e)=>{
		if (e.name !== 'submit') {
			profileEditorHandler(form)
		}
	})
	form.addEventListener('submit', (e)=>{
		e.preventDefault();
	})
}

const langRu = { 
	  validationLenghtEmail: 'Email быть от 6 до 30 символов, и содержать @',
	  validationLenghtPassword: 'Должно быть от 8 до 16 символов',
	  validationLenghtName: 'Имя должно содержать минимум 4 символа',
	  required: 'Это обязательное поле'
}

function validator (e) {
	  const error = document.querySelector(`#error-${e.name}`);
	  let submitButton = document.querySelector('.popUp__submit');
	  if (!e.checkValidity()) {
	      if (e.value.length === 0) {
	        error.textContent = langRu.required;
	      } else if (e.name === 'email') {
	        error.textContent = langRu.validationLenghtEmail;
	      } else if (e.name === 'password') {
	        error.textContent = langRu.validationLenghtPassword;
	      } else if (e.name === 'userName') {
	      	error.textContent = langRu.validationLenghtName;
	      }
	      submitButton.classList.remove('popUp__submit_active')
	      return false;
	  }

	  error.textContent = '';
	  return true;
};

function profileEditorHandler(e) {
	let submitButton = document.querySelector('.popUp__submit');

    event.preventDefault();

    const inputs = Array.from(e.elements);    
   
    let valid = true;

    inputs.forEach((e) => {
      if (e.name !== 'submit') {
        if (!validator(e)) { 
          valid = false;
        }
      } 
    });

    if (valid) {
    	submitButton.classList.add('popUp__submit_active');
	    e.addEventListener('submit', (elem)=>{
			sendReq(e);
			e.reset();
			submitButton.classList.remove('popUp__submit_active')
		})
    }
}
//setName()
async function setName(){
	let name = await fetch(`https://api.alexanderwilliams.us/users/me`, { //https://api.alexanderwilliams.us/users/me
			    method: 'GET',
			    mode: 'cors',
			    headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
			    },
			    credentials: 'include',
			})
			.then((res) => {
				if (res.ok) {
					return res.json()
				} return Promise.reject(`Error:${res.status}`);
			})
			.then((res) => {
				login = true;
				return res.name;
			})
			.catch((error) => {
				savedNewsSigOut();
				return 'Авторизоваться';
			});
	return name;
}
function sendReq(form){
	let email;
	let password;
	let name;
	form.elements.forEach((e)=>{
		(e.name === 'email')?email = e.value:false;
		(e.name === 'password')?password = e.value:false;
		(e.name === 'userName')?name = e.value:false;
	});
	console.log(name, email, password)
	//login user
	if (name === undefined) {
		fetch(`https://api.alexanderwilliams.us/signin`, { //https://api.alexanderwilliams.us/signin
		  mode : 'cors',
	      method: 'POST',
	      redirect: 'follow',
    	  credentials: 'include',
	      headers: new Headers({
		      Accept: 'application/json',
		      'Content-Type': 'application/json',
		    }),
	      body: JSON.stringify({
		        "email": email,
		        "password": password
		      }),
		      redirect: 'follow'
	    })
	    .then((res) => {
	        if (res.ok) {
	            return	res.json();
	        } return Promise.reject(`Error:${res.status}`);
      	})
      	.then((response) => {
	        	resetName();
	        	popUp('signIn');
	        	login = true;
	            return;
      	})
	    .catch(error => console.log('error', error));
	} else if (name) {         //create user
		fetch(`https://api.alexanderwilliams.us/signup`, {
		  mode : 'cors',
	      method: 'POST',
	      headers: new Headers({
		      Accept: 'application/json',
		      'Content-Type': 'application/json',
		    }),
	      body: JSON.stringify({
	      	"name": name,
	        "email": email,
	        "password": password
	      }),
		  redirect: 'follow'
	    })
	    .then((res) => {
        if (res.ok) {
        	popUp(true);
          return res.json();
        }
        return Promise.reject(`Error:${res.status}`);
      });
	}
}
function signOutUser(){
	fetch(`https://api.alexanderwilliams.us/users/me`, { //https://api.alexanderwilliams.us/users/me
			    method: 'DELETE',
			    mode: 'cors',
			    headers : {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
			    },
			    credentials: 'include',
			})
			.then((res) => {
				if (res.ok) {
					return res.json()
				} return Promise.reject(`Error:${res.status}`);
			})
			.then((res) => {
				login = false;
				savedNewsSigOut();
				setHeaders('Авторизоваться');
				return;
			})
			.catch((error) => {
				console.log('error', error);
			});

}
//Saved News signOu or Check
function savedNewsSigOut(){
	  (document.querySelector('title').textContent === 'SavedNews' && !login)?window.location.replace('https://alexandrwilliams.github.io/news-explorer-front-end/'):false;
	  (document.querySelector('title').textContent === 'SavedNews')?window.location.replace('https://alexandrwilliams.github.io/news-explorer-front-end/'):false;
	  return;
};
/// обработка после атворизации///////////////////////////////////
/// Search News /////////////////
//API Key 3c48624ca3ff47eb9d50ce64b52e3f1e
//keyword when searching news
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
		
		getNews(article)
			.then((res) => {
				cards = res.articles;
				preloder(res.articles, article)
				
	      })
	  	.catch((err) => console.log(err));
	  });
}
//find News
function getNews(article){
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
//build Cards 6 at one time
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
		while( counter < 6) {
			countPlace(arr.shift());
			counter = counter + 1;
		}
	}
	catch (err) {
		document.querySelector('.newscard-block__button').remove();
	}
			
	function countPlace(elem){
		//00 month 0000
		//console.log(elem)
		let card = `<div class="newscard" keyword="${keyword}">
						<img class="newscard__img" src="${elem.urlToImage}" alt="news photo" onerror="this.onerror=null;this.src='./img/img_not_found.png';">
						<div class="newscard__save newscard__save_hover">
							<span>Войдите, чтобы сохранять статьи</span>
						</div>
						<div class="newscard__txt-conteiner">
							<h4 class="newscard__date" date="${elem.publishedAt}">${giveDate(elem.publishedAt)}</h4>
							<h3 class="newscard__title"><a href="${elem.url}" alt="news">${title(elem.title)}</a></h3>
							
							<p class="newscard__txt">${elem.description}</p>
							<h4 class="newscard__owner">${elem.source.name}</h4>
						</div>
					</div>`;
		function title(txt){
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
				addToFavoriteNews(e.target);

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


	setCardDescription();
	
	return arrWithNews = arr;
}

function giveDate(e){
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
function setCardDescription(){
		const newscardTxtMainCont = document.querySelectorAll('.newscard__txt-conteiner');
		const windowWidth = window.innerWidth;
		if (windowWidth < 1350 && windowWidth >= 1250) {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(220, e)});
			}
		} else if (windowWidth < 1250 && windowWidth > 680) {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(210, e)});
			}
		} else if (windowWidth <= 680) {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(185, e)});
			}
		} else {
			setTimeout(go, 50)
			function go(){
				newscardTxtMainCont.forEach(e=>{setEclipsis(225, e)});
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

function addToFavoriteNews(e){
	let card = e.parentNode;
	//save button
	let save = card.querySelector('.newscard__save');
	if (save.classList.contains('.newscard__save_active')) {
		let cardId = card.getAttribute('card_id');
		fetch(`https://api.alexanderwilliams.us/articles/${cardId}`, { //https://api.alexanderwilliams.us/signin
		  mode : 'cors',
	      method: 'DELETE',
	      redirect: 'follow',
    	  credentials: 'include',
	      headers: new Headers({
		      Accept: 'application/json',
		      'Content-Type': 'application/json',
		    }),
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
	fetch(`https://api.alexanderwilliams.us/articles`, { //https://api.alexanderwilliams.us/signin
		  mode : 'cors',
	      method: 'POST',
	      redirect: 'follow',
    	  credentials: 'include',
	      headers: new Headers({
		      Accept: 'application/json',
		      'Content-Type': 'application/json',
		    }),
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
};
//scritp auto refresh for eclipses
window.addEventListener("resize", ()=>{
	setCardDescription();
});

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

/////////// SAVED NEWS SCRIPTS
if (document.querySelector('title').textContent === 'SavedNews') {
	getFavoriteCards();
}

function getFavoriteCards(){
	fetch(`https://api.alexanderwilliams.us/articles`, { //https://api.alexanderwilliams.us/signin
		  mode : 'cors',
	      method: 'GET',
	      redirect: 'follow',
    	  credentials: 'include',
	      headers: new Headers({
		      Accept: 'application/json',
		      'Content-Type': 'application/json',
		    }),
	    })
	    .then((res) => {
	        if (res.ok) {
	            return	res.json();
	        } return Promise.reject(`Error:${res.status}`);
      	})
      	.then((response)=>{
			buildFavoriteCards(response);
			return;
      	})
	    .catch((error) => {
	    	console.log('error', error);
	    	return;
	    });
}

async function buildFavoriteCards(arr){
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

		let name = await setName();
		let article = document.querySelector('.article');
		let articleTitle = article.querySelector('.article__title');
		let articleFindResult = article.querySelector('.article__find-result');
		articleTitle.textContent = name +', у вас ' + dataForCards.length + ' сохранённых статей';
		articleFindResult.insertAdjacentHTML('beforeend', setArticlesKeyword(keyword));

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
								<h4 class="newscard__date" date="${elem.date}">${giveDate(elem.date)}</h4>
								<h3 class="newscard__title"><a href="${elem.link}" alt="news">${title(elem.title)}</a></h3>
								<p class="newscard__txt">${elem.text}</p>
								<h4 class="newscard__owner">${elem.source}</h4>
							</div>
						</div>`;
			function title(txt){
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
			preSetHtmlForCard = preSetHtmlForCard + `\n` + card;
			return preSetHtmlForCard;
		}

		//aboutAuthor.insertAdjacentHTML('beforeBegin', newscardSectionHTML);
		const newsCardConteiner = document.querySelector('.newscard__conteiner');
		newsCardConteiner.addEventListener('click', (e)=>{
			if(e.target.classList.contains('newscard__delete')){
				deleteFavoriteNews(e.target);
			}
		})
		newsCardConteiner.insertAdjacentHTML('beforeend', preSetHtmlForCard);
		setCardDescription();
		return;
	} else {
		setNoArticles()
	};
}
function deleteFavoriteNews(e){
	let card = e.parentNode;
	console.log(e);
	let cardId = card.getAttribute('card_id');

	fetch(`https://api.alexanderwilliams.us/articles/${cardId}`, { //https://api.alexanderwilliams.us/signin
	  mode : 'cors',
      method: 'DELETE',
      redirect: 'follow',
   	  credentials: 'include',
      headers: new Headers({
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }),
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
	return;
};

function setArticlesKeyword(keyword){
	let str;
			if (keyword.length > 2) {
				str = `По ключевым словам: <span>${keyword[0]}</span>, <span>${keyword[1]}</span> и <span>${keyword.length} другим.</span>`;
			} else if (keyword.length === 2){
				str  = `По ключевым словам: <span>${keyword[0]}</span>, <span>${keyword[1]}</span>.`;
			} else if (keyword.length === 1){
				str = `По ключевым словам: <span>${keyword[0]}</span>.`;
			} return str;
};

async function setNoArticles(){
	let name = await setName();
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