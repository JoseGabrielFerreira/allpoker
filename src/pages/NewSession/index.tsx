import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const TITLE = 'Nova Sessão'
export const SUBTITLE = 'Configure sua mesa antes do primeiro buy-in.'

export default function NewSession() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações da Sessão</CardTitle>
          <CardDescription>
            Defina o nome da mesa e o valor padrão de entrada.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="session-name">Nome da sessão</Label>
            <Input
              id="session-name"
              name="session-name"
              placeholder="Ex.: Quinta Poker"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="default-buy-in">Buy-in padrão</Label>
            <div className="relative">
              <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-sm text-muted-foreground">
                R$
              </span>
              <Input
                id="default-buy-in"
                name="default-buy-in"
                className="pl-9"
                inputMode="decimal"
                placeholder="50"
                type="number"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Jogadores</CardTitle>
          <CardDescription>
            Adicione os participantes da sessão.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-border px-4 py-8 text-center">
            <Users
              aria-hidden="true"
              className="size-8 text-muted-foreground"
            />
            <p className="text-sm text-muted-foreground">
              Nenhum jogador adicionado.
            </p>
          </div>

          <Button className="h-11 w-full" disabled size="lg">
            + Adicionar Jogador
          </Button>
        </CardContent>
      </Card>

      <Button className="h-11 w-full" disabled size="lg">
        Iniciar Sessão
      </Button>
    </div>
  )
}
