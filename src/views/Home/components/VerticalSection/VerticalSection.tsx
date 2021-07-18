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

const ContentWrapper = styled(Grid)(({ theme }) => ({
  overflow: 'hidden',
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
        <Box my={8}>
          <Typography variant="h3" align="center">
            {title}
          </Typography>
        </Box>

        <ContentWrapper container item xs={12} justify="center">
          {children}
        </ContentWrapper>
      </VerticalSectionWrapper>
    </Grid>
  )
}

export default VerticalSection
