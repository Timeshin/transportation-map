import { all, call } from '@redux-saga/core/effects'
import { crashWatcher, nextWatcher } from './someWatcher'

export default function* rootSaga() {
	const sagas = [crashWatcher, nextWatcher]

	yield all(sagas.map((saga) => call(saga)))
}
