import { Box, Typography } from '@material-ui/core'
import { fade, Grid, styled } from '@material-ui/core'
import { PropsWithChildren } from 'react'

const VerticalSectionWrapper = styled('div')(({ theme }) => ({
  height: '85vh',
  borderRadius: 4,
  background: `linear-gradient(180deg, ${fade(
    theme.palette.primary.light,
    0.62
  )} 0%, ${fade(theme.palette.primary.dark, 0.62)} 100%)`,
  backdropFilter: 'blur(5px)',
  display: 'flex',
  flexDirection: 'column',
}))

interface VerticalSectionProps {
  title: string
}
const VerticalSection = ({
  children,
  title,
}: PropsWithChildren<VerticalSectionProps>) => {
  return (
    <Grid item xs={4}>
      <VerticalSectionWrapper>
        <Grid container>
          <Grid item xs={12}>
            <Box my={8}>
              <Typography variant="h3" align="center">
                {title}
              </Typography>
            </Box>
          </Grid>
          <Grid container item xs={12} justify="center">
            {children}
          </Grid>
        </Grid>
      </VerticalSectionWrapper>
    </Grid>
  )
}

export default VerticalSection
