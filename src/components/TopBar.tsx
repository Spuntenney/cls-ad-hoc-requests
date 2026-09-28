import { sampleUser } from '../config'

type TopBarProps = {
  title: string
}

export function TopBar({ title }: TopBarProps) {
  return (
    <header className="topbar">
      <h1>{title}</h1>
      <div className="user-chip">{sampleUser.name}</div>
    </header>
  )
}
