import {headerClass, popUp} from './headers.js';

const url = 'https://api.alexanderwilliams.us';
const headersOptions = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				};

class UserReq {
	resetName(bool) {
		async function getName() {
  			let name = await userReq.setName();
  			bool = (name === "Авторизоваться")?false:true;
  			let res = headerClass.setHeader(name, bool);
  			return bool;
		}
	  	return getName();
	}

	setName(){
		let name = fetch(`${url}/users/me`, { //https://api.alexanderwilliams.us/users/me
			method: 'GET',
			mode: 'cors',
			headers: headersOptions,
			credentials: 'include',
		})
		.then((res) => {
			if (res.ok) {
				return res.json()
			} return Promise.reject(`Error:${res.status}`);
		})
		.then((res) => {
			return res.name;
		})
		.catch((error) => {
			userReq.savedNewsSignOut();
			return 'Авторизоваться';
		});
		return name;
	}

	sendReq(e){
		let form = e;
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
			async function setHeader(){
				let  res = await userReq.signIn(email, password);
				if (res) {
					popUp.popUp('signIn');
					userReq.resetName(true);
					return true;
				}
			}
			return setHeader();
		} else if (name !== undefined) {
			//create user
			//console.log(email, password, name);
			async function setHeader(){
				let res = await userReq.signUp(email, password, name);
				if (res) {
					popUp.popUp(true);
					userReq.resetName(true);
					return true;
				}
			}
			return setHeader();
		}
	}

	signIn(email, pass) {
		return fetch(`https://api.alexanderwilliams.us/signin`, { //https://api.alexanderwilliams.us/signin
			mode : 'cors',
		    method: 'POST',
		    redirect: 'follow',
	    	credentials: 'include',
		    headers: headersOptions,
	    	body: JSON.stringify({
		        "email": email,
		        "password": pass
		    })
	    })
	    .then((res) => {
	        if (res.ok) {
	            return	res.json();
	        } return Promise.reject(`Error:${res.status}`);
      	})
      	.then((response) => {
	        	 //resetName();
	        	// popUp('signIn');
	        	// login = true;
	            return true;
      	})
	    .catch((error) => {
	    	console.log('error', error);
	    	return false;
	    });
	}

	signUp(email, pass, name) {
		return fetch(`https://api.alexanderwilliams.us/signup`, {
			mode : 'cors',
		    method: 'POST',
		    redirect: 'follow',
	    	credentials: 'include',
		    headers: headersOptions,
	    	body: JSON.stringify({
	      		"name": name,
	        	"email": email,
	        	"password": pass
	    	})
	    })
	    .then((res) => {
	        if (res.ok) {
	        //	popUp(true);
	          return true;
	        }
	        return Promise.reject(`Error:${res.status}`);
      	})
      	.catch((error) => {
				console.log('error', error);
				return false;
		});
	}

	signOutUser(){
		return fetch(`${url}/users/me`, { //https://api.alexanderwilliams.us/users/me
			method: 'DELETE',
			mode: 'cors',
	    	credentials: 'include',
		    headers: headersOptions,
		})
		.then((res) => {
			if (res.ok) {
				return res.json()
			} return Promise.reject(`Error:${res.status}`);
		})
		.then((res) => {
			userReq.savedNewsSignOut();
			userReq.resetName(false)
			return false;
		})
		.catch((error) => {
			console.log('error', error);
		});
	}

	savedNewsSignOut(){
	  (document.querySelector('title').textContent === 'SavedNews' && !login)?window.location.replace('https://alexandrwilliams.github.io/news-explorer-front-end/'):false;
	  (document.querySelector('title').textContent === 'SavedNews')?window.location.replace('https://alexandrwilliams.github.io/news-explorer-front-end/'):false;
	  return;
	}
}

const userReq = new UserReq();

export { userReq };