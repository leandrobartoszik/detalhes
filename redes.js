const btnEl = document.querySelector('.btn');

const toggleOptions = {} => {
	const wrapperEl = document.querySelector('.wrapper');
	const iconEl = btnEl.querySelector('i');

	wrapperEl.classList.toggle('active');

	if (inconEl.classList.contains('ri-share-line')) {
		inconEl.classList
		.replace('ri-share-line', 'ri-close-line');
	}else{
		inconEl.classList
		.replace('ri-close-line', 'ri-share-line'); 
	}
};

btnEl.addEventListener('click', toggleOptions);


/*mascara para input
const Cleave = window.Cleave;
new Cleave('#cpf', {
	delemiters: [ '.', '.', '-'],
	blocks: [3, 3, 3, 2],
	numericOnly: true
});*/