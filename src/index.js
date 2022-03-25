// import "./index.css";
//
// const close = document.querySelector("#modal-close");
// const modal = document.querySelector('#modal');
// const modalOpen = document.querySelector('#modal-open');
//
// console.log("hello");
// // function modalToggler() {
// // 	if (!close || !modalOpen || !modal) {
// // 		return;
// // 	}
//
// // 	modalOpen.addEventListener('click', () => {
// // 		modal.style.visibility = 'visible';
// // 		document.body.overflow = 'hidden';
// // 	});
// //
// // 	close.addEventListener('click', () => {
// // 		modal.style.visibility = 'hidden';
// // 		document.body.overflow = 'initial';
// // 	});
// // };
//
// modalOpen.addEventListener('click', (e) => {
// 	if (!close || !modalOpen || !modal) {
// 		return;
// 	}
// 	console.log("Opa!")
// 	modal.style.visibility = 'visible';
// 	document.body.overflow = 'hidden';
// });
//
// close.addEventListener('click', () => {
// 	if (!close || !modalOpen || !modal) {
// 		return;
// 	}
// 	modal.style.visibility = 'hidden';
// 	document.body.overflow = 'initial';
// });

(function() {
	const close = document.getElementById('modal-close');
	const modal = document.getElementById('modal');
	const modalOpen = document.getElementById('modal-open');

	if (!close || !modalOpen || !modal) {
		return;
	}

	modalOpen.addEventListener('click', () => {
		modal.style.display = 'block';
		document.body.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		modal.style.display = 'none';
		document.body.overflow = 'initial';
	});
})();
