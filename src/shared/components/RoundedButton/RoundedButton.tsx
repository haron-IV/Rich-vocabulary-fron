import { Button, ButtonProps, styled } from '@material-ui/core'

interface RoundedButtonProps extends ButtonProps {
  width?: number
  height?: number
}
const RoundedButton = styled(Button)(
  ({ width, height }: RoundedButtonProps) => ({
    borderRadius: height,
    width: width,
    height: height,
  })
)

export default RoundedButton
