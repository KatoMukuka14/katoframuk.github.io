var windowWidth = window.innerWidth;
const clientaleTable = document.getElementById('clientaleTable')

const setclientaleTableWidth = () =>{

    const clientaleTableWrapper = window.getComputedStyle(clientaleTable.parentElement, null);

    clientaleTable.setAttribute('style', `width: calc(${clientaleTableWrapper.width}-${clientaleTableWrapper.paddingLeft}-${clientaleTableWrapper.paddingRight});`);
}

document.addEventListener('DOMContentLoaded', () => {
	setclientaleTableWidth();
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*THIS SECTION HANDLES THE PAGES SMOOTH SCROLL BEHAVIOR WHEN A MENU ITEM IS PRESSED*/

const rootWrapper = document.getElementById('rootWrapper')
const sectionLinks = document.querySelectorAll('a[href^="#"]');

sectionLinks.forEach(trigger => {

	trigger.onclick = (e) => {
		
		e.preventDefault();
		let hash = e.currentTarget.getAttribute('href');
		let target = document.querySelector(hash);
		let headerOffset = 70;
		let elementPosition = target.offsetTop;
		let offsetPosition = elementPosition - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});

		// if(hash === '#pageFooter' && !e.currentTarget.classList.contains('sectionLink')){

		// 	document.querySelector('#contactInfo').classList.add('pulse');

		// 	setTimeout(() => {
		// 		document.querySelector('#contactInfo').classList.remove('pulse');
		// 	  }, "3000");
			
		// }

	};

});

/////////////////////////////////////////////////////////////////////////////////////////////////////

const toggleBodyVisibility = (event) => {

	const scwParent = event.currentTarget.parentElement;
	const expand_btn = event.currentTarget.querySelector(`.expand_btn`);

	scwParent.querySelector(`.scwBody`).classList.toggle("expand_body");
	expand_btn.classList.toggle("rotate180");
	event.currentTarget.classList.toggle("expand_title")
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

const navBar = document.querySelector('#navBarWrapper');
const navBarStateWrapper = document.querySelector('#navBarStateWrapper');
const inactiveState = document.querySelector('#inactiveState');
const activeState = document.querySelector('#activeState');
const humMenuPanel = document.querySelector('#humMenuPanel');

const isDivAtTopOfScreen = (navBar) => {

    var divRect = navBar.getBoundingClientRect();
	var check = false;
	navBar.style.position = "absolute";
    
    if (divRect.top <= 0 && window.scrollY > 235) {

		if(navBar.style.position != "fixed"){
			check = true;
		}
		
    } else {
		check = false;
    }
	
	return check;
	
}

const styleActiveNavBar = (navBar) => {
	navBar.style.position = "fixed"
	navBar.style.top = "0"

	navBarStateWrapper.classList.add('navBarStateWrapper-active');
	inactiveState.classList.add('inactiveState-hidden');
	activeState.classList.add('activeState-show');
}

const styleInactiveNavBar = (navBar) => {
	navBar.style.position = "absolute"
	navBar.style.top = "200px"

	navBarStateWrapper.classList.remove('navBarStateWrapper-active');
	inactiveState.classList.remove('inactiveState-hidden');
	activeState.classList.remove('activeState-show');

	document.querySelector('#humMenuPanel').classList.remove('humMenuPanel-show');
	document.querySelector('#humMenuBtn').classList.add("rotate180");
}

window.addEventListener('scroll', () => {

    var atTop = isDivAtTopOfScreen(navBar);

	if(atTop){
		styleActiveNavBar(navBar)
	}else{
		styleInactiveNavBar(navBar)
	}

});

const showHumMenuPanel = (event) =>{

	humMenuPanel.classList.toggle('humMenuPanel-show');
	event.currentTarget.classList.toggle("rotate180");
}
