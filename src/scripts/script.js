
const logInButton = document.querySelector('.header__button_auth');
const pageConteiner = document.querySelector('.page__conteiner');
const popUpSectionHtml = `
		<section class="popUp">
			<div class="popUp__background"></div>
		</section>`;
const popUpSignInHtml = `
			<div class="popUp__conteiner">
				<img class="popUp__close-icon" src="img/close.png" alt="close icon">
				<h3 class="popUp__title" >Вход</h3>
				<form class="popUp__login-form" name="logIn" action="post" method="POST">
					<label class="popUp__label popUp__label_email" for="email">Email</label>
					<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту">
					<span class="popUp__input-line"></span>
					<label class="popUp__label popUp__label_password" for="password">Пароль</label>
					<input class="popUp__input" type="password" name="password" minlength="6" maxlength="16" placeholder="Введите пароль">
					<span class="popUp__input-line"></span>
					<input class="popUp__submit" type="submit" name="submit" value="Войти">
					<h4 class="popUp__under-button-txt">или <span class="popUp__signup">Зарегистрироваться</span></h4>
				</form>
			</div>`;
const popUpSignUpHtml = `
			<div class="popUp__conteiner">
				<img class="popUp__close-icon" src="img/close.png" alt="close icon">
				<h3 class="popUp__title" >Регистрация</h3>
				<form class="popUp__login-form" name="logIn" action="post" method="POST">
					<label class="popUp__label popUp__label_email" for="email">Email</label>
					<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту">
					<span class="popUp__input-line"></span>
					<label class="popUp__label popUp__label_password" for="password">Пароль</label>
					<input class="popUp__input" type="password" name="password" minlength="6" maxlength="16" placeholder="Введите пароль">
					<span class="popUp__input-line"></span>
					<label class="popUp__label popUp__label_name" for="name">Имя</label>
					<input class="popUp__input" type="text" name="name" minlength="6" maxlength="16" placeholder="Введите свое имя">
					<span class="popUp__input-line"></span>
					<input class="popUp__submit popUp__submit_signUp" type="submit" name="submit" value="Зарегистрироваться">
					<h4 class="popUp__under-button-txt">или <span class="popUp__signin">Войти</span></h4>
				</form>
			</div>`;
const popUpSignUpSuccessefull = `
			<div class="popUp__conteiner_successefull">
				<img class="popUp__close-icon" src="img/close.png" alt="close icon">
				<h3 class="popUp__title" >Пользователь успешно зарегистрирован!</h3>
				<h4 class="popUp__successefull-description" >Выполнить вход</h4>
			</div>`

logInButton.addEventListener('click', (e)=>{
	pageConteiner.insertAdjacentHTML('afterbegin', popUpSectionHtml);
	pageConteiner.querySelector('.popUp').insertAdjacentHTML('beforeend', popUpSignInHtml);
	popUp();
})
function popUp() {
	const popUpSection = document.querySelector('.popUp');
	let popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
	let popUpSubmitSignUp;
	let popUpSuccessefull;
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
		}
		if(eClass === 'popUp__signup') {
			popUpConteiner.remove();
			popUpSection.insertAdjacentHTML('beforeend', popUpSignUpHtml);
			popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
			popUpSubmitSignUp = popUpConteiner.querySelector('.popUp__submit_signUp');
		};
		if (eClass === 'popUp__signin') {
			popUpConteiner.remove();
			popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
			popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
		}
		if(eClass === 'popUp__submit_signUp') {
			//server return successefull response
			popUpConteiner.remove();
			popUpSection.insertAdjacentHTML('beforeend', popUpSignUpSuccessefull);
			popUpConteiner = popUpSection.querySelector('.popUp__conteiner_successefull');
		}
		if (eClass === 'popUp__successefull-description') {
			popUpConteiner.remove();
			popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
			popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
		}
	})
}
/// header mobile 
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

const logo = document.querySelector('.header__logo');
const buttons = document.querySelectorAll('.header__button');
const exitImg = document.querySelector('.header__button_exit-icon');
const title = document.querySelector('title');

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
/// обработка после атворизации