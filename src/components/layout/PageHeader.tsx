type PageHeaderProps = {
  subtitle?: string
}

export function PageHeader({ subtitle }: PageHeaderProps) {
  return (
    <header className="space-y-1">
      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        ♠️ ALLPOKER
      </h1>
      {subtitle ? (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
    </header>
  )
}
