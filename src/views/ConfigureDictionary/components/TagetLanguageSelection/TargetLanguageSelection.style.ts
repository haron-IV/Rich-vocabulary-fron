import { Container, styled, Theme } from '@material-ui/core'

export const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
})

export const SelectionBox = styled('div')<Theme>(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.dark,
  padding: theme.spacing(5, 15),
  marginTop: '25%',
  minHeight: '55vh',
  width: '85%',
  borderRadius: 3,
}))
