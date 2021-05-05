import { Select, styled, Theme } from '@material-ui/core'

export const StyledSelect = styled(Select)<Theme>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}))
