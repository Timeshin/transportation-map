import { call, put, takeEvery } from '@redux-saga/core/effects'
import { AxiosError } from 'axios'
import MapService from 'src/services/Map.service'
import MapActions from 'src/types/actions/mapActions.enum'
import { ISelectCoords } from 'src/types/actions/mapActions.interface'
import { IGetPathCoordsResponse } from 'src/types/services/MapService.interface'
import { ICoords, IError } from 'src/types/stores/mapStore.interface'
import { setError, setPathCoordsAction } from '../actions/map.action'

function* fetchPathCoords(coordsData: ICoords) {
	try {
		const { routes }: IGetPathCoordsResponse = yield call(MapService.getMapPathCoords, coordsData)

		yield put(setPathCoordsAction(routes[0].geometry.coordinates))
	} catch (error) {
		console.log(error)
		const errorMessage =
			(error as AxiosError<{ message: string; code: string }>).response?.data?.code || (error as AxiosError).message
		const errorData: IError = {
			error: (error as AxiosError).message,
			message: errorMessage
		}

		yield put(setError(errorData))
	}
}

function* getPathCoordsWatcher() {
	yield takeEvery(MapActions.SELECT_COORDS, (actionProps: ISelectCoords) => fetchPathCoords(actionProps.payload))
}

export { getPathCoordsWatcher }
