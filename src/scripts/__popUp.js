import {validatorContainer} from './__validatorContainer.js';

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
							<span class="popUp__input-line"></span>
							<span id="error-email" class="error-sms error-sms__name"></span>
							<label class="popUp__label popUp__label_password" for="password">Пароль</label>
							<input class="popUp__input" type="password" autocomplete="on" name="password" minlength="8" maxlength="16" placeholder="Введите пароль" required>
							<span class="popUp__input-line"></span>
							<span id="error-password" class="error-sms error-sms__name"></span>
							<label id="errorServer" class="error-sms errorServer"></label>
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
							<label id="errorServer" class="error-sms errorServer"></label>
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

class PopUp {

	setAuth(pageConteiner){
		pageConteiner.insertAdjacentHTML('afterbegin', popUpSectionHtml);
		pageConteiner.querySelector('.popUp').insertAdjacentHTML('beforeend', popUpSignInHtml);
	}
	popUp(signUpTrue) {
		const iconCaller = document.querySelector('.header__mobile-icon');
		const shadowSpanHeader = document.querySelector('.header__span');

		const popUpSection = document.querySelector('.popUp');
		let popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
		const popUpTitle = popUpConteiner.querySelector('.popUp__title').textContent;
		let popUpSubmitSignUp;
		let popUpSuccessefull;

		if(window.innerWidth < 680) {
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
		//console.log(popUpTitle)popUpTitle.textContent === "Регистрация"
		if(signUpTrue === true){
			//server return successefull response
			popUpConteiner.remove();
			popUpSection.insertAdjacentHTML('beforeend', popUpSignUpSuccessefull);
			popUpSuccessefull = popUpSection.querySelector('.popUp__conteiner_successefull');
			return;
		} else if (signUpTrue === "signIn") {
			mobilePopUpRemove();
			return;
		} else if (signUpTrue === "setListeners") {
			validatorContainer('signIn');

			popUpSection.addEventListener('click', popUpClickHandler);
			document.addEventListener('keydown', popUpEscReaction);

			function popUpEscReaction(e){
				if (e.key === 'Escape') {
					popUpSection.remove();
					document.removeEventListener('keydown', popUpEscReaction);
				}
			}

			function popUpClickHandler(e) {
				const eClass = e.target.className;
				(eClass === 'popUp__background')?popUpSection.remove():false;
				if(eClass === 'popUp__close-icon'){
					mobilePopUpRemove();
				};
				if(eClass === 'popUp__signup') {
					popUpConteiner.remove();
					popUpSection.insertAdjacentHTML('beforeend', popUpSignUpHtml);
					validatorContainer('signUp');
					popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
					popUpSubmitSignUp = popUpConteiner.querySelector('.popUp__submit_signUp');
				};
				if (eClass === 'popUp__signin') {
					popUpConteiner.remove();
					popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
					popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
					validatorContainer('signIn');
				};
				if (eClass === 'popUp__successefull-description') {
					popUpSuccessefull = popUpSection.querySelector('.popUp__conteiner_successefull');
					popUpSuccessefull.remove();
					popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
					popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
					validatorContainer('signIn');
				};
			}
		}
	}
}

const popUp = new PopUp();

export {title, popUp};