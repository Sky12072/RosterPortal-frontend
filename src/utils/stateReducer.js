export default function reducer (state, action) {
	switch(action.type) {
        // data in action.data is data coming from fetching to an API. ie. Mongo database, firebase.
        case 'updateRoster': {
            return {
                ...state,
                Monday: action.data,
                Tuesday: action.data,
                Wednesday: action.data,
                Thursday: action.data,
                Friday: action.data,
                Saturday: action.data,
                Sunday: action.data
            }
        }
		case 'setLoggedInUser': {
			return {
				...state,
				displayName: action.data
			}
		}
		case 'setToken': {
			return {
                ...state,
				token: action.data
			}
        }
        case 'setUserClaims': {
            return {
                ...state,
                userClaims: action.data
            }
		}
		default: return state
	}
}
