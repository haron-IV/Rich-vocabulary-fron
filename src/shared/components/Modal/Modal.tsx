import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
  styled,
} from '@material-ui/core'
import { ReactNode } from 'react'

interface ModalProps {
  title: string
  content: ReactNode
  footer: ReactNode
  isOpen: boolean
}

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}))

const Modal = ({ title, content, footer, isOpen }: ModalProps) => {
  return (
    <Dialog onClose={() => {}} open={isOpen}>
      <DialogTitle>
        <Title variant="h3">{title}</Title>
      </DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions>{footer}</DialogActions>
    </Dialog>
  )
}

export default Modal
