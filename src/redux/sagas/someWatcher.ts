import { call, takeLatest } from '@redux-saga/core/effects'

function* worker() {
	try {
		yield new Promise((res, rej) =>
			setTimeout(() => {
				rej('error')
			}, 1000)
		)
	} catch (error) {
		console.log(error)
	}
}

function* crashWatcher() {
	yield takeLatest('ACTION', worker)
}

function* nextWatcher() {
	yield call(() => {
		console.log('works')
	})
}

export { crashWatcher, nextWatcher }
