import { MapContainerComponent, MapContent, TableComponent } from 'src/components'

const App = () => (
	<div className='wrapper'>
		<TableComponent />
		<MapContainerComponent>
			<MapContent />
		</MapContainerComponent>
	</div>
)

export default App
