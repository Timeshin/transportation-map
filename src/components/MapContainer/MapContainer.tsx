import { FC, ReactNode } from 'react'
import { MapContainer } from 'react-leaflet'
import { useAppSelector } from 'src/hooks/redux'
import { selectMapStore } from 'src/redux/selectors/selectors'

import 'leaflet/dist/leaflet.css'
import './MapContainer.css'

interface IMapContainer {
	children: ReactNode
}

const MapContainerComponent: FC<IMapContainer> = ({ children }) => {
	const { selectedCoords, isLoading, error } = useAppSelector(selectMapStore)

	if (error) {
		return <h1 className='error'>{error.message || error.error}</h1>
	}

	return (
		<>
			<MapContainer
				className='map'
				center={[selectedCoords?.latFrom || 59.83567701, selectedCoords?.lngTo || 30.29496392]}
				zoom={4}
				scrollWheelZoom
			>
				{children}
			</MapContainer>
			{isLoading && <div className='hide-block' />}
		</>
	)
}

export default MapContainerComponent
