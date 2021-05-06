import { makeStyles, Select, styled, Theme } from '@material-ui/core'

export const StyledSelect = styled(Select)<Theme>(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeightBold,
  height: theme.spacing(4.5),
  '& .MuiSelect-root': {
    padding: '0 15px',
  },
}))

export const MenuList = makeStyles(theme => ({
  menu: {
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: theme.palette.primary.dark,
    '& option': {
      height: theme.spacing(4.5),
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
    },
    '& option:nth-child(even)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))
