import easyportalAPI from '../config/api';

export async function loginUser(userData) {
	const response = await easyportalAPI.post('/users/sign-in', userData);
	console.log ("response is (signIn): ", response)
	console.log ("response data is (SignIn): ", userData)
	return response.data;
}

export async function logoutUser(data) {
	sessionStorage.clear(data);
    return easyportalAPI.post('/users/sign-out');
}

export async function registerUser(userInfo) {
	const response = await easyportalAPI.post('/users/sign-up', userInfo);
	console.log ("response is (signUp): ", response)
	console.log ("response data is (SignUp): ", userInfo)
	return response.data;
}

// Get loggedInUser from localStorage
export function getLoggedInUser() {
	return localStorage.getItem('loggedInUser');
}
export function getAdminUser() {
	return localStorage.getItem('adminUser');
}

// Store loggedInUser displayName in local storage
export function setLoggedInUser(user) {
	console.log('setting user: ', user);
	user
		? localStorage.setItem('loggedInUser', user)
		: localStorage.removeItem('loggedInUser');
}

export function setAdminUser(admin) {
	console.log('setting admin: ', admin);
	admin
		? localStorage.setItem('adminUser', admin)
		: localStorage.removeItem('adminUser');
}