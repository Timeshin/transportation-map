import { IRoutes } from '../services/MapService.interface'
import { ICoords, IError } from '../stores/mapStore.interface'
import MapActions from './mapActions.enum'

export interface ISelectCoords {
	type: MapActions.SELECT_COORDS
	payload: ICoords
}

export interface ISetPathCoords {
	type: MapActions.SET_PATH_COORDS
	payload: IRoutes['geometry']['coordinates']
}

export interface ISetError {
	type: MapActions.SET_ERROR
	payload: IError | null
}

type MapReducerActions = ISelectCoords | ISetPathCoords | ISetError

export type { MapReducerActions }
