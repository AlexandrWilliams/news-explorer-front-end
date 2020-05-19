const url = 'https://api.alexanderwilliams.us';
const headersOptions = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				};

class UserReq {
	setName(){
		return fetch(`${url}/users/me`, { //https://api.alexanderwilliams.us/users/me
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
	            return true;
      	})
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
	          return true;
	        }
	        return Promise.reject(`Error:${res.status}`);
      	})
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
			return true;
		})
	}
}

const userReq = new UserReq();

export { userReq };