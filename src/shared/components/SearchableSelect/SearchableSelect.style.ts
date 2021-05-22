import {
  Grid,
  List,
  ListItem,
  styled,
  TextField,
  Theme,
} from '@material-ui/core'

interface SelectWrapperProps {
  maxHeight?: string | number
}
export const SelectWrapper = styled('div')<Theme, SelectWrapperProps>(
  ({ theme, maxHeight }) => ({
    backgroundColor: theme.palette.primary.dark,
    maxHeight,
    overflow: 'hidden',
    position: 'relative',
    padding: theme.spacing(1),
    width: '100%',
    borderRadius: 3,
  })
)
interface SelectProps {
  itemHeight?: string | number
}
export const Select = styled(Grid)<Theme, SelectProps>(({ itemHeight }) => ({
  height: itemHeight || '30px',
  width: '100%',
  cursor: 'pointer',
  '& > *': {
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
}))

export const Icon = styled(Grid)({
  '& > *': {
    position: 'absolute',
  },
})

interface ArrowProps {
  menuOpened: boolean
}
export const Arrow = styled(Icon)<Theme, ArrowProps>(({ menuOpened }) => ({
  justifyContent: 'flex-end',
  '& > svg': {
    transition: 'transform linear 100ms',
    transform: `rotate(${menuOpened ? 0 : 180}deg)`,
  },
}))

interface SelectListProps extends ArrowProps {
  maxHeight?: string | number
}
export const SelectList = styled(List)<Theme, SelectListProps>(
  ({ menuOpened, maxHeight }) => ({
    padding: 0,
    transition: 'max-height linear 100ms',
    maxHeight: menuOpened ? maxHeight : 0,
    overflowY: 'scroll',
    width: '100%',
  })
)

interface SelectListItemProps extends SelectProps {}
export const SelectListItem = styled(ListItem)<Theme, SelectListItemProps>(
  ({ itemHeight }) => ({
    height: itemHeight || '30px',
    width: '100%',
    color: 'red',
    '&::nth-child(even)': {
      color: 'red',
    },
    '& .MuiButton-label': {
      width: '100%',
      display: 'block',
      textAlign: 'left',
    },
  })
)

interface SearchFieldProps extends Partial<ArrowProps> {}
export const SearchField = styled(TextField)<Theme, SearchFieldProps>(
  ({ theme, menuOpened }) => ({
    zIndex: theme.zIndex.max,
    position: 'absolute',
    top: 0,
    width: '70%',
  })
)
