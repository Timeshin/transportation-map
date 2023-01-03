import { all, call } from '@redux-saga/core/effects'
import { getPathCoordsWatcher } from './mapSaga'

export default function* rootSaga() {
	const sagas = [getPathCoordsWatcher]

	yield all(sagas.map((saga) => call(saga)))
}
