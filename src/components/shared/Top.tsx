import Flex from './Flex'
import Text from './Text'
import { css } from '@emotion/react'

interface TopProps {
  title: string
  subTitle: string
}

const Top = ({ title, subTitle }: TopProps) => {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text typography="t4">{title}</Text>
      <Text typography="t7" bold={true}>
        {subTitle}
      </Text>
    </Flex>
  )
}

const containerStyles = css`
  padding: 24px;
`

export default Top
