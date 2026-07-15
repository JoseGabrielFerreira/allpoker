import { Outlet } from 'react-router'
import { PageContainer } from '@/components/layout/PageContainer'
import { PageHeader } from '@/components/layout/PageHeader'

export function AppLayout() {
  return (
    <div className="min-h-svh bg-muted px-4 py-6">
      <PageContainer>
        <div className="overflow-hidden rounded-xl bg-card text-card-foreground shadow-sm">
          <div className="border-b border-border px-6 py-6">
            <PageHeader />
          </div>
          <main className="px-6 py-6">
            <Outlet />
          </main>
        </div>
      </PageContainer>
    </div>
  )
}
