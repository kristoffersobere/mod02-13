/*toggle button hide sidebar*/
var toggleIcon = document.querySelector('#toggleIcon');
 toggleIcon.addEventListener('click',function() {
 	
 	console.log('toggleIcon is working');

 	var header = document.querySelector('header');
 	header.style.left = '-20%';

 	var main = document.querySelector('main');
 	main.style.marginLeft = '0';
 		
 	var toggleIcon = document.querySelector('#toggleIcon');
 	toggleIcon.setAttribute('hidden', 'hidden');

 	var toggleIcon1 = document.querySelector('#toggleIcon1');
 	toggleIcon1.removeAttribute('hidden');
 })


/*toggle button hide sidebar*/
var toggleIcon1 = document.querySelector('#toggleIcon1');
 toggleIcon1.addEventListener('click',function() {
 	
 	console.log('toggleIcon is working');

 	var header = document.querySelector('header');
 	header.style.left = '0%';

 	var main = document.querySelector('main');
 	main.style.marginLeft = '20%';
 		
 	var toggleIcon = document.querySelector('#toggleIcon');
 	toggleIcon.removeAttribute('hidden');
 	

 	var toggleIcon1 = document.querySelector('#toggleIcon1');
 	toggleIcon1.setAttribute('hidden', 'hidden');
 })
