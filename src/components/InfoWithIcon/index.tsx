import { ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  description: string | ReactNode
  colorIcon?: string
}

export function InfoWithIcon({
  icon,
  description,
  colorIcon,
}: InfoWithIconProps) {
  const { color } = useTheme()

  return (
    <InfoWithIconContainer variant={colorIcon ?? color.brand['yellow-dark']}>
      <div>{icon}</div>
      {description}
    </InfoWithIconContainer>
  )
}
