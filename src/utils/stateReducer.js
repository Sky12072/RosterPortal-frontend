export default function reducer (state, action) {
	switch(action.type) {
        // case 'setRosters': {
        //     return {
        //         ...state,
        //         rosters: action.data
        //     }
        // }
        // case 'addRoster': {
        //     return {
        //         ...state,
        //         rosters: [action.data, ...state.rosters]
        //     }
        // }
        // case 'deleteRoster': {
        //     const updatedRosters = state.rosterss.filter((roster) => {
        //         return roster.id !== parseInt(action.data)
        //     })
        //     return {
        //         ...state,
        //         rosters: updatedRosters
        //     }
        // }

        // case 'updateRoster': {
        //     const roster = state.rosters.find((roster) => roster.id === action.data.id)
        //     const updatedRoster = Object.assign(roster, action.data)

        //     const otherRosters = state.predictions.filter((roster) => roster.id !== action.data.id)
        //     return {
        //         ...state,
        //         rosters: [updatedRoster, ...otherRosters]
        //     }
        // }
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
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
