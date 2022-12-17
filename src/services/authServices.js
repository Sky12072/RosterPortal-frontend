import easyportalAPI from '../config/api';

export async function loginUser(userData) {
	const response = await easyportalAPI.post('/users/sign-in', userData);
	console.log ("response is (signIn): ", response)
	console.log ("response data is (SignIn): ", userData)
	return response.data;
}

export async function logoutUser() {
	sessionStorage.clear();
    return easyportalAPI.post('/users/sign-out');
}

export async function registerUser(userInfo) {
	const response = await easyportalAPI.post('/users/sign-up', userInfo);
	console.log ("response is (signUp): ", response)
	console.log ("response data is (SignUp): ", userInfo)
	return response.data;
}

// All Mongo Services

// Get MongoUser
export async function getMongoUser() {
	const response = await easyportalAPI.get('/employees')
	console.log("Response is: ", response)
	console.log("Response DATA is: ", response.data)
	console.log("Response DATA NAME is: ", response.data.allEmployees.name)
	console.log(response.data)
	return response.data;
}

export async function getOneMongoUser(id) {
	const response = await easyportalAPI.get(`/employees/${id}`)
	console.log("Response is: ", response)
	console.log("Response DATA is: ", response.data)
	
	console.log(response.data)
	return response.data;
}

// // Store loggedInUser displayName in local storage
// export function setLoggedInUser(user) {
// 	console.log('setting user: ', user);
// 	user
// 		? localStorage.setItem('loggedInUser', user)
// 		: localStorage.removeItem('loggedInUser');
// }

// export function setAdminUser(admin) {
// 	console.log('setting admin: ', admin);
// 	admin
// 		? localStorage.setItem('adminUser', admin)
// 		: localStorage.removeItem('adminUser');
// }