class CardTxt {
	giveDate(e){
		//"2020-03-25T13:15:58Z"
		const date = new Date(e.slice(0, 10));
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
		const str = date.getDate() + ' ' + month + ' ' + date.getFullYear();
		return str;
	}
	title(txt){
		if (txt.length > 50) {
			let shrinkTxt = txt.slice(0, 50);
			while(shrinkTxt[shrinkTxt.length] === ' ') {
				shrinkTxt = shrinkTxt.slice(0, (shrinkTxt.length - 1));
			} 
			return shrinkTxt + '...';
		} else {
			return txt;
		}
	}
	description(txt){
		const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
		const str = txt.replace(regex, '');

		if (str.length > 200) {
			let shrinkTxt = str.slice(0, 200);
			while(shrinkTxt[shrinkTxt.length] === ' ') {
				shrinkTxt = shrinkTxt.slice(0, (shrinkTxt.length - 1));
			} 
			return shrinkTxt + '...';
		} else {
			return str;
		}
	}
	setCardDescription(){
		const newscardTxt = document.querySelectorAll('.newscard__txt-conteiner');
		const windowWidth = window.innerWidth;
		if (windowWidth < 1350 && windowWidth >= 1250) {
			setTimeout(go, 50)
			function go(){
				newscardTxt.forEach(e=>{setEclipsis(230, e)});
			}
		} else if (windowWidth < 1250 && windowWidth > 690) {
			setTimeout(go, 50)
			function go(){
				newscardTxt.forEach(e=>{setEclipsis(220, e)});
			}
		} else if (windowWidth <= 690) {
			setTimeout(go, 50)
			function go(){
				newscardTxt.forEach(e=>{setEclipsis(185, e)});
			}
		} else {
			setTimeout(go, 50)
			function go(){
				newscardTxt.forEach(e=>{setEclipsis(235, e)});
			}
		}
		//setEclipsis
		function setEclipsis(myHeight, elem){
			let heightOfElem = elem.offsetHeight;
			const newscardTxt = elem.querySelector('.newscard__txt');
			let str = newscardTxt.textContent;
			while(myHeight < heightOfElem) {
			 	str = str.slice(0, -1);
				newscardTxt.textContent = str + '...';
				heightOfElem = elem.offsetHeight;
			}
		}
	}
}


const cardTxt = new CardTxt();

export {cardTxt};
