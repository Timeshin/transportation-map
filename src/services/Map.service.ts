import { AxiosInstance } from 'axios'
import fetchInstance from 'src/config/fetchInstance'
import { IGetPathCoordsResponse } from 'src/types/services/MapService.interface'
import { ICoords } from 'src/types/stores/mapStore.interface'

class MapService {
	private readonly apiInstance: AxiosInstance

	constructor(instance: AxiosInstance) {
		this.apiInstance = instance
	}

	getMapPathCoords = async ({ lngFrom, latFrom, lngTo, latTo }: ICoords) => {
		const { data } = await this.apiInstance.get<IGetPathCoordsResponse>(
			`route/v1/driving/${lngFrom},${latFrom};${lngTo},${latTo}`,
			{
				params: {
					overview: 'full',
					geometries: 'geojson'
				}
			}
		)

		return data
	}
}

export default new MapService(fetchInstance)
