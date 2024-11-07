export interface Airline {
  _id: string
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
  __v: number
}

export interface PassengerData {
  _id: string
  name: string
  trips: number
  airline?: Airline[]
  __v: number
}

export interface PassengerResponse {
  totalPassengers: number
  totalPages: number
  data: PassengerData[]
}

export interface MessageState {
  message: string
}

export interface EventState {
  data: Data | null
}

export type Data = PassengerData
export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}