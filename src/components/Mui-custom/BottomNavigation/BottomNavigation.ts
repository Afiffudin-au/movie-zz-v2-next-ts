import { BottomNavigationAction, withStyles } from '@material-ui/core'
export const BottomNavigationStyled = withStyles((theme) => ({
  root: {
    color: '#354a4e',
  },
  selected: {
    color: '#2d6d9a !important',
  },
  iconOnly: {
    color: '#2d6d9a !important',
    outline: 0,
  },
}))(BottomNavigationAction)
