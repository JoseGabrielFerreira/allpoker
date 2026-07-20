import type { Player } from './Player'

export interface Session {
  id: string
  title: string
  defaultBuyIn?: number
  pixKey?: string
  createdAt: Date
  status: 'active' | 'finished'
  players: Player[]
}
