import { Outlet, useMatches } from 'react-router'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/layout/PageHeader'

type RouteHandle = {
  subtitle?: string
}

function getPageSubtitle(matches: ReturnType<typeof useMatches>) {
  return [...matches]
    .reverse()
    .map((match) => (match.handle as RouteHandle | undefined)?.subtitle)
    .find((subtitle): subtitle is string => Boolean(subtitle))
}

export function AppLayout() {
  const matches = useMatches()
  const subtitle = getPageSubtitle(matches)

  return (
    <div className="min-h-svh bg-muted px-4 py-6">
      <PageContainer>
        <div className="overflow-hidden rounded-xl bg-card text-card-foreground shadow-sm">
          <div className="border-b border-border px-6 py-6">
            <PageHeader subtitle={subtitle} />
          </div>
          <main className="px-6 py-6">
            <Outlet />
          </main>
        </div>
      </PageContainer>
    </div>
  )
}
