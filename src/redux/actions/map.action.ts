import MapActions from 'src/types/actions/mapActions.enum'
import { ISelectCoords, ISetPathCoords, ISetError } from 'src/types/actions/mapActions.interface'
import { IRoutes } from 'src/types/services/MapService.interface'
import { ICoords, IError } from 'src/types/stores/mapStore.interface'

const selectCoordsAction = (coordsData: ICoords): ISelectCoords => ({
	type: MapActions.SELECT_COORDS,
	payload: coordsData
})

const setPathCoordsAction = (pathCoords: IRoutes['geometry']['coordinates']): ISetPathCoords => ({
	type: MapActions.SET_PATH_COORDS,
	payload: pathCoords
})

const setError = (error: IError | null): ISetError => ({
	type: MapActions.SET_ERROR,
	payload: error
})

export { selectCoordsAction, setPathCoordsAction, setError }
