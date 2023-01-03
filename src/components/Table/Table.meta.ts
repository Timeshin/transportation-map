import { ColumnsType } from 'antd/es/table'

interface IDataTypes {
	key: number
	ticketNumber: string
	latFrom: number
	lngFrom: number
	latTo: number
	lngTo: number
}

const dataSource: IDataTypes[] = [
	{
		key: 1,
		ticketNumber: '№1',
		latFrom: 59.84660399,
		lngFrom: 30.29496392,
		latTo: 59.82934196,
		lngTo: 30.42423701
	},
	{
		key: 2,
		ticketNumber: '№2',
		latFrom: 59.82934196,
		lngFrom: 30.42423701,
		latTo: 59.82761295,
		lngTo: 30.41705607
	},
	{
		key: 3,
		ticketNumber: '№3',
		latFrom: 59.83567701,
		lngFrom: 30.38064206,
		latTo: 59.84660399,
		lngTo: 30.29496392
	},
	{
		key: 4,
		ticketNumber: '№4',
		latFrom: 59.84660399,
		lngFrom: 30.29496392,
		latTo: 59.82761295,
		lngTo: 30.41705607
	},
	{
		key: 5,
		ticketNumber: '№5',
		latFrom: 59.83567701,
		lngFrom: 30.38064206,
		latTo: 59.84660399,
		lngTo: 30.29496392
	}
]

const columns: ColumnsType<IDataTypes> = [
	{
		title: 'Номер заявки',
		dataIndex: 'ticketNumber',
		key: 'ticketNumber'
	},
	{
		title: 'Координаты ОТ lat',
		dataIndex: 'latFrom',
		key: 'latFrom'
	},
	{
		title: 'Координаты ОТ lng',
		dataIndex: 'lngFrom',
		key: 'lngFrom'
	},
	{
		title: 'Координаты ДО lat',
		dataIndex: 'latTo',
		key: 'latTo'
	},
	{
		title: 'Координаты ДО lng',
		dataIndex: 'lngTo',
		key: 'lngTo'
	}
]

export { dataSource, columns }

export type { IDataTypes }
