const loginForm = document.getElementById('loginForm');
const userName = document.getElementById('username');
const password = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
})

function onSubmit() {
	console.log('==> username', userName.value);
	console.log('==> password', password.value);
	const myForm = {
		userName: userName.value,
		password: password.value
	}

	console.log(myForm);
}