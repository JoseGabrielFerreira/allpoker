import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const SUBTITLE =
  'Nunca mais use papel para controlar sua sessão de poker.'

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle>Nova Sessão</CardTitle>
            <CardDescription>
              Inicie uma nova sessão e registre buy-ins, cash out e gere
              automaticamente o resumo para cobrança.
            </CardDescription>
          </CardHeader>
          <CardFooter className="border-t-0 bg-transparent">
            <Button
              render={<Link to="/session/new" />}
              nativeButton={false}
              className="h-11 w-full"
              size="lg"
            >
              Nova Sessão
            </Button>
          </CardFooter>
        </Card>

        <Card className="transition-shadow hover:shadow-md">
          <CardHeader>
            <CardTitle>Histórico</CardTitle>
            <CardDescription>Consulte sessões anteriores.</CardDescription>
          </CardHeader>
          <CardFooter className="border-t-0 bg-transparent">
            <Button className="h-11 w-full" disabled size="lg">
              Em breve
            </Button>
          </CardFooter>
        </Card>
      </div>

      <footer className="pt-2 text-center text-xs text-muted-foreground">
        Made with ❤️ for poker nights.
      </footer>
    </div>
  )
}
