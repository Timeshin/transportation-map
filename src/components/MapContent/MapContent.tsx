import { useEffect } from 'react'
import { Marker, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet'
import { polylinePathOptions } from './Map.meta'
import { useAppSelector } from 'src/hooks/redux'
import { selectPathCoords } from 'src/redux/selectors/selectors'
import L from 'leaflet'

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const MapContent = () => {
	const { pathCoords, selectedCoords } = useAppSelector(selectPathCoords)
	const map = useMap()

	useEffect(() => {
		if (!selectedCoords) return

		map.fitBounds([
			[selectedCoords.latFrom, selectedCoords.lngFrom],
			[selectedCoords.latTo, selectedCoords.lngTo]
		])
	}, [map, selectedCoords])

	return (
		<>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Polyline pathOptions={polylinePathOptions} positions={pathCoords || false} />
			{selectedCoords && (
				<>
					<Marker position={[selectedCoords.latFrom, selectedCoords.lngFrom]}>
						<Tooltip>From</Tooltip>
					</Marker>
					<Marker position={[selectedCoords.latTo, selectedCoords.lngTo]}>
						<Tooltip>To</Tooltip>
					</Marker>
				</>
			)}
		</>
	)
}

export default MapContent
