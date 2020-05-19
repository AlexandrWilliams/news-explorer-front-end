import {userReq} from './__userReq.js';
import {title, popUp} from './__popUp.js';
// what includes in this module
//	Header :	
//		header,

class Headers {
	setHeader(name, login) {
		this.name = name;
		this.login = login;
		this.headertoRemove = document.querySelector('.header__main-conteiner');
		this.headerContainer = document.querySelector('header');
		this.__removeOldHeader(this.headertoRemove);
		this.__headerSetHtml(this.name);
	}

	__removeOldHeader(header){
		(!header)?false:header.remove();
	}
	__headerSetHtml(name){
		const  headerIconStyle = (title.textContent === 'SavedNews')?"header__mobile-icon header__mobile-icon_black":"header__mobile-icon";
		const headerAintLogin = `
		<div class="header__main-conteiner">
			<a class="header__logo" title="NewsExplorer" href="https://alexandrwilliams.github.io/news-explorer-front-end/">NewsExplorer</a>
			<div class="${headerIconStyle}"></div>
			<ul class="header__conteiner">
				<li>
					<a class="header__button header__button_main" title="NewsExplorer" href="https://alexandrwilliams.github.io/news-explorer-front-end/">
					Главная
					<span class="header__button_active"></span>
					</a>
				</li>
				<li>
					<button class="header__button header__button_auth">Авторизоваться</button>
				</li>
			</ul>
		</div>
		<span class="header__span"></span>`;
		const headerLogin = `
		<div class="header__main-conteiner">
			<a class="header__logo" title="NewsExplorer" href="https://alexandrwilliams.github.io/news-explorer-front-end/">NewsExplorer</a>
			<div class="${headerIconStyle}"></div>
			<ul class="header__conteiner">
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
			</ul>
		</div>
		<span class="header__span"></span>`;
		if (this.login) {
			this.headerContainer.insertAdjacentHTML('beforeend', headerLogin);
			if (document.querySelector('title').textContent === 'SavedNews') {
				this.mainBtn = document.querySelector('.header__button_main');
				this.savedNewsBtn = document.querySelector('.header__button_save');
				this.mainBtn.querySelector('span').remove();
				this.savedNewsBtn.insertAdjacentHTML('beforeend', `<span class="header__button_active"></span>`);
			}
		} else {
			this.headerContainer.insertAdjacentHTML('beforeend', headerAintLogin);
		}
		
		this.__headersListener(this.__getElementForHeader());
		return;
	}
	__getElementForHeader(){
		const options = {
			title : document.querySelector('title'),
			logInButton : document.querySelector('.header__button_auth'),
			pageConteiner : document.querySelector('.main__conteiner'),
			logo : document.querySelector('.header__logo'),
			buttons : document.querySelectorAll('.header__button'),
			exitImg : document.querySelector('.header__button_exit-icon'),
			iconCaller : document.querySelector('.header__mobile-icon'),
			headerContainer : document.querySelector('.header__main-conteiner'),
			headerButtonContainer : document.querySelector('.header__conteiner'),
			shadowSpanHeader : document.querySelector('.header__span'),
			authButton : document.querySelector('.header__button_auth'),
		}
		return options;
		
	}
	__headersListener(options){
		options.logInButton.addEventListener('click', (e)=>{
			if (!this.login) {
				popUp.setAuth(options.pageConteiner);
				popUp.popUp('setListeners');
			} else if (this.login) {
				new Promise(function(res, rej){
					res(userReq.signOutUser());
				})
				.then((res)=>{
					if (res) {
						HeaderSetName();
						return;
					} return Promise.reject(`Error:${res.status}`);
				})
				.catch(err => console.log(err))
			}
		})

		this.__mobileHeader(options);
	}
	__mobileHeader(options){
		function setMobileHeaderElements(){
			whiteScheme()
			options.iconCaller.classList.add('header__mobile-icon_close');
			options.shadowSpanHeader.classList.add('header__mobile-shadow');
			options.headerContainer.classList.add('header__conteiner_mobile');
			options.headerButtonContainer.classList.add('header__button-conteiner_mobile');
		}
		function removeMobileHeaderElements(){
			whiteScheme()
			options.iconCaller.classList.remove('header__mobile-icon_close');
			options.shadowSpanHeader.classList.remove('header__mobile-shadow');
			options.headerContainer.classList.remove('header__conteiner_mobile');
			options.headerButtonContainer.classList.remove('header__button-conteiner_mobile');
		}
		function listeners(e){
			if (!e.target.classList.contains('header__mobile-icon_close') && !options.headerContainer.classList.contains('header__conteiner_mobile')) {
				setMobileHeaderElements();
				return;
			} else if(e.target.classList.contains('header__mobile-icon_close')){
				removeMobileHeaderElements();
				return;
			} else if(e.target.classList.contains('header__mobile-shadow')){
				removeMobileHeaderElements();
				return;
			} else if(e.target.classList.contains('header__button_auth')){
				removeMobileHeaderElements();
				return;
			}
		}

		options.iconCaller.removeEventListener('click', listeners);
		options.shadowSpanHeader.removeEventListener('click', listeners);
		options.authButton.removeEventListener('click', listeners);

		options.iconCaller.addEventListener('click', listeners);
		options.shadowSpanHeader.addEventListener('click', listeners);
		// console.log(window.innerWidth < 680)
		if (window.innerWidth < 680) {
			options.authButton.addEventListener('click', listeners);
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
	}

	savedNewsSignOut(bool){
		if (!bool) {
			(document.querySelector('title').textContent === 'SavedNews')?window.location.replace('https://alexandrwilliams.github.io/news-explorer-front-end/'):false;
		}
	  return;
	}
}

const headerClass = new Headers();

function HeaderSetName(bool){
	const promisse = new Promise((resolve, reject) => {
  	resolve(userReq.setName());
	})
	.then((e) => {
		bool = true;
		headerClass.setHeader(e, bool);
		return bool;
	})
	.catch((err) => {
		bool = false;
		headerClass.savedNewsSignOut(false);
		headerClass.setHeader("Авторизоваться", bool);
		console.log(err);
		return bool;
	})
	return promisse;
}

export {
	HeaderSetName,
	headerClass,
	userReq,
}