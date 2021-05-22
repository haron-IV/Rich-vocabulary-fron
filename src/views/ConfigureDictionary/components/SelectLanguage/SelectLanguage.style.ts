import { makeStyles, styled, TextField, Theme } from '@material-ui/core'
import { SearchableSelect } from 'shared/components'

// export const StyledSearchableSelect = styled(SearchableSelect)<Theme>(
//   ({ theme }) => ({
//     backgroundColor: theme.palette.primary.dark,
//     color: theme.palette.primary.contrastText,
//     fontWeight: theme.typography.fontWeightBold,
//     height: 30,
//     width: '100%',
//     backgroundColor: 'red',
//     height: theme.spacing(4.5),
//     '& .MuiSelect-root': {
//       padding: '0 15px',
//     // },
//     '& .select': {
//       backgroundColor: 'red',
//     },
//   })
// )

interface StyledTextFieldProps {
  visible: boolean
}
export const StyledTextField = styled(TextField)<Theme, StyledTextFieldProps>(
  ({ visible, theme }) => ({
    marginTop: 28,
    height: theme.spacing(4.5),
    zIndex: 999,
    color: 'red',
    opacity: visible ? 1 : 0,
  })
)

export const MenuList = makeStyles(theme => ({
  menu: {
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: theme.palette.primary.dark,
    maxHeight: 300,
    marginLeft: -38,
    width: 'calc(575px - 38px)',
    // width: '100%', // TODO: add icons width
    '& option': {
      height: theme.spacing(4.5),
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
    },
    '& option:nth-child(even)': {
      backgroundColor: theme.palette.background.default,
    },
    // '& option[aria-selected="true"]': {
    //   backgroundColor: 'red',
    // }, // not working still blue
  },
}))
