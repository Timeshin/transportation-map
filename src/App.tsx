import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()

	return (
		<div className='App'>
			<button type='button' onClick={() => dispatch({ type: 'ACTION' })}>
				Click
			</button>
		</div>
	)
}

export default App
