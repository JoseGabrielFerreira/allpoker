import type { BuyIn } from './BuyIn'

export interface Player {
  id: string
  name: string
  buyIns: BuyIn[]
  cashOut?: number
}
