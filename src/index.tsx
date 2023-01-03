import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'src/redux'
import App from './App'
import 'src/styles/globals.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
