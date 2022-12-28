import { ReactNode } from 'react'
import { InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  description: string
}

export function InfoWithIcon({ icon, description }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <div>{icon}</div>
      {description}
    </InfoWithIconContainer>
  )
}
