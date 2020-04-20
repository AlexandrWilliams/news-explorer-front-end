const logInButton = document.querySelector('.header__button_auth');
const pageConteiner = document.querySelector('.main__conteiner');

const logo = document.querySelector('.header__logo');
const buttons = document.querySelectorAll('.header__button');
const exitImg = document.querySelector('.header__button_exit-icon');
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
					<input class="popUp__input" type="text" name="name" minlength="4" maxlength="16" placeholder="Введите свое имя">
					<span class="popUp__input-line"></span>
					<span id="error-name" class="error-sms error-sms__name"></span>
					<input class="popUp__submit popUp__submit_signUp" type="submit" name="submit" value="Зарегистрироваться">
					<h4 class="popUp__under-button-txt">или <span class="popUp__signin">Войти</span></h4>
				</form>
			</div>`;
const popUpSignUpSuccessefull = `
			<div class="popUp__conteiner_successefull">
				<img class="popUp__close-icon" src="${jumpToFile}" alt="close icon">
				<h3 class="popUp__title" >Пользователь успешно зарегистрирован!</h3>
				<h4 class="popUp__successefull-description" >Выполнить вход</h4>
			</div>`

logInButton.addEventListener('click', (e)=>{
	pageConteiner.insertAdjacentHTML('afterbegin', popUpSectionHtml);
	pageConteiner.querySelector('.popUp').insertAdjacentHTML('beforeend', popUpSignInHtml);
	popUp();
})
function popUp(signUpTrue) {
	const popUpSection = document.querySelector('.popUp');
	let popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
	let popUpSubmitSignUp;
	let popUpSuccessefull;
	preValidator('signIn');
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
			preValidator('signUp');
			popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
			popUpSubmitSignUp = popUpConteiner.querySelector('.popUp__submit_signUp');
		};
		if (eClass === 'popUp__signin') {
			popUpConteiner.remove();
			popUpSection.insertAdjacentHTML('beforeend', popUpSignInHtml);
			popUpConteiner = popUpSection.querySelector('.popUp__conteiner');
			preValidator('signIn');
		}
		if(eClass === 'popUp__submit_signUp' || signUpTrue === true) {
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
//authorization
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
	      } else if (e.name === 'name') {
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
    	console.log(e)
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
function sendReq(form){
	let email;
	let password;
	let name;
	form.elements.forEach((e)=>{
		(e.name === 'email')?email = e.value:false;
		(e.name === 'password')?password = e.value:false;
		(e.name === 'name')?name = e.value:false;
	})
	console.log(email, password, name)
	if (name === undefined) {
		fetch("https://api.alexanderwilliams.us/signin", {
			  mode : 'no-cors',
		      method: 'POST',
		      headers: {
		      	'Access-Control-Allow-Origin': '*',
			    'Content-Type': 'application/json'
			  },
		      body: JSON.stringify({
		        "email": email,
		        "password": password
		      }),
		      redirect: 'follow'
		    }
	    )
	    .then((res) => {
	        if (res.ok) {
	        	console.log(true)
	          return res.json();
	        } return Promise.reject(`Error:${res.status}`);
      	})
	    .catch(error => console.log('error', error));
	} else if (name) {
		fetch(`https://api.alexanderwilliams.us/signup`, {
		  mode : 'no-cors',
	      method: 'POST',
	      headers: {
	      	'Access-Control-Allow-Origin': '*',
	        'Content-Type': 'application/json'
	      }, 
	      body: JSON.stringify({
	        email: email,
	        password: password,
	        name: name,
	      }),
		  redirect: 'follow'
	    })
	    .then((res) => {
        if (res.ok) {
        	popUp(true)
        	console.log(true)
          return res.json();
        } console.log(false)
        return Promise.reject(`Error:${res.status}`);
      });
	}
}
/// обработка после атворизации
//API Key 3c48624ca3ff47eb9d50ce64b52e3f1e
const formSearch = document.forms.search;
formSearch.addEventListener('submit', (e) => {
	event.preventDefault();
	let article;
	let inputs = formSearch.elements;
	inputs.forEach((e)=>{
		(e.name === 'search')?article = e.value:false;
	})
	let date;
	const url = `https://newsapi.org/v2/everything?q=${article}&from=2020-04-07&sortBy=popularity&apiKey=3c48624ca3ff47eb9d50ce64b52e3f1e`;
	const req = new Request(url);
	fetch(req)
	    .then((res) => {
	    	console.log(res.json());
	        if (res.ok) {
	          return res.json();
	        } return Promise.reject(`Error:${res.status}`);
      	})
	    .catch(error => console.log('error', error));
})
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