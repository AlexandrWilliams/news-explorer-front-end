import {userReq} from './userClass.js';
// what includes in this module
//	Header :
//		validation,
//		popUp,		
//		header,
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
							<input class="popUp__input" type="email" autocomplete="on" name="email" minlength="6" maxlength="30" placeholder="Введите почту" required>
							<span id="error-email" class="error-sms error-sms__name"></span>
							<span class="popUp__input-line"></span>
							<label class="popUp__label popUp__label_password" for="password">Пароль</label>
							<input class="popUp__input" type="password" autocomplete="on" name="password" minlength="8" maxlength="16" placeholder="Введите пароль" required>
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
							<input class="popUp__input" autocomplete="on" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту" required>
							<span class="popUp__input-line"></span>
							<span id="error-email" class="error-sms error-sms__name"></span>
							<label class="popUp__label popUp__label_password" for="password">Пароль</label>
							<input class="popUp__input" autocomplete="on" type="password" name="password" minlength="8" maxlength="16" placeholder="Введите пароль" required>
							<span class="popUp__input-line"></span>
							<span id="error-password" class="error-sms error-sms__name"></span>
							<label class="popUp__label popUp__label_name" for="name">Имя</label>
							<input class="popUp__input" autocomplete="on" type="text" name="userName" minlength="4" maxlength="16" placeholder="Введите свое имя" required>
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

const langRu = { 
			  validationLenghtEmail: 'Email быть от 6 до 30 символов, и содержать @',
			  validationLenghtPassword: 'Должно быть от 8 до 16 символов',
			  validationLenghtName: 'Имя должно содержать минимум 4 символа',
			  required: 'Это обязательное поле'
};


class Validator {

	preValidator(formType){
		let form

		if (formType === "signIn"){
			form = document.forms.signIn;
		} else if(formType === "signUp"){
			form = document.forms.signUp;
		}
		form.addEventListener('input', (e)=>{
			if (e.name !== 'submit') {
				console.log()
				this.profileEditorHandler(form)
			}
		})
		form.addEventListener('submit', (e)=>{
			e.preventDefault();
		})
	}

	validator (e) {
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
	}

	profileEditorHandler(e) {
		let submitButton = document.querySelector('.popUp__submit');
	    
	    event.preventDefault();

	    const inputs = Array.from(e.elements);    
	   
	    let valid = true;

	    inputs.forEach((e) => {
	      if (e.name !== 'submit') {
	        if (!this.validator(e)) { 
	          valid = false;
	        }
	      } 
	    });

	    if (valid) {
	    	submitButton.classList.add('popUp__submit_active');
	    }

	    e.addEventListener('submit', (elem)=>{
	    	if (submitButton.classList.contains('popUp__submit_active')) {
	   	    	async function sendRequest(){
	    			let res = await userReq.sendReq(e);
	    			return res;
	    		}
	    		sendRequest();
	    		e.reset();
	    		submitButton.classList.remove('popUp__submit_active');
				return ;
	    	}
	
		})
	}
}

const validator = new Validator();

class PopUp {

	setAuth(pageConteiner){
		pageConteiner.insertAdjacentHTML('afterbegin', popUpSectionHtml);
		pageConteiner.querySelector('.popUp').insertAdjacentHTML('beforeend', popUpSignInHtml);
	}
	popUp(signUpTrue) {
		let iconCaller = document.querySelector('.header__mobile-icon');
		let shadowSpanHeader = document.querySelector('.header__span');
		const callValidation = validator;

		const popUpSection = document.querySelector('.popUp');
		let popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
		let popUpSubmitSignUp;
		let popUpSuccessefull;

		if(window.innerWidth < 680) {
			console.log('work')
			iconCaller.style.display = 'none';
			shadowSpanHeader.classList.add('header__mobile-shadow');
		}

		function mobilePopUpRemove(){
			if(window.innerWidth < 680){
				iconCaller.style.display = 'block';
				shadowSpanHeader.classList.remove('header__mobile-shadow');
				popUpSection.remove();
			} else {
				popUpSection.remove();
			}
		}

		if(signUpTrue === true){
			//server return successefull response
			console.log('ty')
			popUpConteiner.remove();
			popUpSection.insertAdjacentHTML('beforeend', popUpSignUpSuccessefull);
			popUpSuccessefull = popUpSection.querySelector('.popUp__conteiner_successefull');
			return;
		} else if (signUpTrue === "signIn") {
			mobilePopUpRemove();
			return;
		} else if (signUpTrue === "setListeners") {

			callValidation.preValidator('signIn');

			popUpSection.addEventListener('click', (e) => {
				const eClass = e.target.className;
				console.log(eClass);
				(eClass === 'popUp__background')?popUpSection.remove():false;
				if(eClass === 'popUp__close-icon'){
					mobilePopUpRemove();
				};
				if(eClass === 'popUp__signup') {
					popUpConteiner.remove();
					popUpSection.insertAdjacentHTML('beforeend', popUpSignUpHtml);
					callValidation.preValidator('signUp');
					popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
					popUpSubmitSignUp = popUpConteiner.querySelector('.popUp__submit_signUp');
				};
				if (eClass === 'popUp__signin') {
					popUpConteiner.remove();
					popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
					popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
					callValidation.preValidator('signIn');
				};
				if (eClass === 'popUp__successefull-description') {
					popUpSuccessefull = popUpSection.querySelector('.popUp__conteiner_successefull');
					popUpSuccessefull.remove();
					popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
					console.log(true + 'im work')
					popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
					callValidation.preValidator('signIn');
				};
			})
		}
	}
}

const popUp = new PopUp();

class Headers {
	setHeader(name, login) {
		this.name = name;
		this.login = login;
		this.headertoRemove = document.querySelector('.header__main-conteiner');
		this.headerContainer = document.querySelector('header');
		this.removeOldHeader(this.headertoRemove);
		this.headerSetHtml(this.name);
	}

	removeOldHeader(header){
		(!header)?false:header.remove();
	}
	headerSetHtml(name){
		const  headerIconStyle = (title.textContent === 'SavedNews')?"header__mobile-icon header__mobile-icon_black":"header__mobile-icon";
		const headerAintAuth = `
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
		const headerAuth = `
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
			this.headerContainer.insertAdjacentHTML('beforeend', headerAuth);
			if (document.querySelector('title').textContent === 'SavedNews') {
				this.mainBtn = document.querySelector('.header__button_main');
				this.savedNewsBtn = document.querySelector('.header__button_save');
				this.mainBtn.querySelector('span').remove();
				this.savedNewsBtn.insertAdjacentHTML('beforeend', `<span class="header__button_active"></span>`);
			}
		} else {
			this.headerContainer.insertAdjacentHTML('beforeend', headerAintAuth);
		}
		
		this.headersListener(this.getElementForHeader());
		return;
	}
	getElementForHeader(){
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
	headersListener(options){
		options.logInButton.addEventListener('click', (e)=>{
			if (!this.login) {
				popUp.setAuth(options.pageConteiner);
				popUp.popUp('setListeners');
			} else if (this.login) {
				userReq.signOutUser();
			}
		})

		this.mobileHeader(options);
	}
	mobileHeader(options){
		function setMobileHeaderElements(){
			whiteScheme()
			console.log('toggleCheck')
			options.iconCaller.classList.add('header__mobile-icon_close');
			options.shadowSpanHeader.classList.add('header__mobile-shadow');
			options.headerContainer.classList.add('header__conteiner_mobile');
			options.headerButtonContainer.classList.add('header__button-conteiner_mobile');
		}
		function removeMobileHeaderElements(){
			whiteScheme()
			console.log('toggleCheck')
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
				console.log('ty')
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
}

const headerClass = new Headers();

function HeaderSetName(bool) {
	async function getName() {
  		let name = await userReq.setName();
  		bool = (name === "Авторизоваться")?false:true;
  		let res = headerClass.setHeader(name, bool);
  		return bool;
	};
	 	
	return getName();
}

export {
	HeaderSetName,
	headerClass,
	popUp,
	userReq,
}