import MapActions from 'src/types/actions/mapActions.enum'
import { MapReducerActions } from 'src/types/actions/mapActions.interface'
import { InitialMapState } from 'src/types/stores/mapStore.interface'

const initialState: InitialMapState = {
	selectedCoords: null,
	pathCoords: null,
	isLoading: false,
	error: null
}

const mapReducer = (state = initialState, action: MapReducerActions): InitialMapState => {
	switch (action.type) {
		case MapActions.SELECT_COORDS:
			return {
				...state,
				selectedCoords: action.payload,
				isLoading: true
			}
		case MapActions.SET_PATH_COORDS:
			return {
				...state,
				pathCoords: action.payload,
				isLoading: false
			}
		case MapActions.SET_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default mapReducer
