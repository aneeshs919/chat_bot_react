export interface MessageType {
  responses?: ResponseItem[]
  text?: string
  isBot: boolean
}

export interface ResponseItem {
  sender: string
  message: string
  defaultMessage?: string
  options?: {
    text: string
    value: string
  }[]
}

export interface ChatObj {
  name?: string
  defaultMessage?: string
  sender: string
  triggers: string[]
  responses: ResponseItem[]
}

export interface HotelDetailsProps {
  data: HotelDetailsType;
}

export interface HotelDetailsType {
  name: string
  package: string
  rating: {
    count: number
    star: number
  }
  description: string
  features: {
    'room service': boolean
    spa: boolean
    'private beach area': boolean
    '24 hr security': boolean
    'beach chairs': boolean
    'fitness center': boolean
    '3 restaurants': boolean
  }
  event_spaces: {
    'garden event space': boolean
    'garden dining room': boolean
    'Zen meeting': boolean
  }
}
