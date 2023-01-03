import { PathCoords } from '../stores/mapStore.interface'

export interface IGetPathCoordsResponse {
	code: string
	routes: IRoutes[]
	waypoints: IWays[]
}

export interface IRoutes {
	geometry: {
		coordinates: PathCoords[]
	}
	type: string
	legs: ILegs[]
	weight_name: string
	weight: number
	duration: number
	distance: number
}

export interface ILegs {
	steps: number[]
	summary: string
	weight: number
	duration: number
	distance: number
}

export interface IWays {
	hint: string
	distance: number
	name: string
	location: PathCoords
}
