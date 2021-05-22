import { ReactElement, useState } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useToggle } from 'shared/hooks'
import {
  Arrow,
  Icon,
  Select,
  SelectList,
  SelectWrapper,
  SelectListItem,
  SearchField,
} from './SearchableSelect.style'

interface SearchableSelectProps {
  startIcon?: ReactElement
  placeholder: string | ReactElement
  arrowEl?: ReactElement
  listItems: string[]
  maxHeight?: string | number
  itemHeight: string | number
  value: string | number
  onSelect?: (value: string | number) => void
}
const SearchableSelect = ({
  startIcon,
  placeholder,
  arrowEl,
  listItems,
  maxHeight,
  itemHeight,
  value,
  onSelect = () => {},
}: SearchableSelectProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const [searchQuery, setSearchQuery] = useState<string | number>('')
  const handleOnSelect = (value: string | number) => {
    onSelect(value)
    toggleIsOpen()
  }

  return (
    <SelectWrapper maxHeight={maxHeight}>
      <Grid container alignItems="center" justify="center">
        {isOpen && (
          <SearchField
            focused={isOpen}
            variant="standard"
            autoFocus
            onChange={e => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        )}
        <Select
          item
          container
          alignItems="center"
          justify="space-evenly"
          xs={12}
          onClick={() => toggleIsOpen()}
          itemHeight={itemHeight}
        >
          <Icon item xs={1}>
            {startIcon}
          </Icon>
          <Grid item xs={9}>
            <Box color="primary">
              {!isOpen && <Typography>{value || placeholder}</Typography>}
            </Box>
          </Grid>
          <Arrow item xs={1} menuOpened={isOpen}>
            {arrowEl}
          </Arrow>
        </Select>

        <SelectList menuOpened={isOpen} maxHeight={maxHeight}>
          {listItems
            .filter(item => item.match(searchQuery as string))
            .map((item: string | number) => (
              <SelectListItem
                itemHeight={itemHeight}
                button
                disableRipple
                key={`listItem-${item}`}
                onClick={() => handleOnSelect(item)}
              >
                <Button fullWidth>{item}</Button>
              </SelectListItem>
            ))}
        </SelectList>
      </Grid>
    </SelectWrapper>
  )
}

export default SearchableSelect
