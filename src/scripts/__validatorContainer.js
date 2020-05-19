import {HeaderSetName, userReq} from './__headers.js';
import {popUp} from './__popUp';

const langRu = { 
			  validationLenghtEmail: 'Email быть от 6 до 30 символов, и содержать @',
			  validationLenghtPassword: 'Должно быть от 8 до 16 символов',
			  validationLenghtName: 'Имя должно содержать минимум 4 символа',
			  required: 'Это обязательное поле'
};


function validatorContainer(e) {
	const submitButton = document.querySelector('.popUp__submit');

	let form;

	preValidator(e);

	function preValidator(formType){
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
		form.addEventListener('submit', sendReq);
	}

	function validator (e) {
		  const error = document.querySelector(`#error-${e.name}`);
		  
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

	function profileEditorHandler(e) {   
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
	    }
	}

	function sendReq(e){
	   	e.preventDefault();
		if (submitButton.classList.contains('popUp__submit_active')) {
			form.removeEventListener('submit', sendReq);
			let email;
			let password;
			let name;
			form.elements.forEach((e)=>{
				(e.name === 'email')?email = e.value:false;
				(e.name === 'password')?password = e.value:false;
				(e.name === 'userName')?name = e.value:false;
			});
			//login user
			if (name === undefined) {
				new Promise(function(res, rej){
						res(userReq.signIn(email, password));
					})
					.then((res)=>{
						if (res) {
							HeaderSetName();
							form.reset();
				    		submitButton.classList.remove('popUp__submit_active');
				    		popUp.popUp('signIn');
							return true;
						} return Promise.reject(`Error:${res.status}`);
					})
					.catch(err => errorHandler(err));
				return;
			} else if (name !== undefined) {
				//create user
				//console.log(email, password, name);
				new Promise(function(res, rej){
						res(userReq.signUp(email, password, name));
					})
					.then((res)=>{
						if (res) {
							form.reset();
				    		submitButton.classList.remove('popUp__submit_active');
				    		popUp.popUp(true);
							return true;
						} return Promise.reject(`Error:${res.status}`);
					})
					.catch(err => errorHandler(err));
				return;
			}
	    }
	}

	function errorHandler(err){
		const errorServer = document.querySelector('#errorServer');
		form.reset();
		submitButton.classList.remove('popUp__submit_active');
		errorServer.textContent = err;
		setTimeout(function(){errorServer.textContent = '';}, 2000);
	}
}

export {validatorContainer};