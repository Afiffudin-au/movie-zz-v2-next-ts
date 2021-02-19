import { BottomNavigationAction,withStyles } from "@material-ui/core";
export const BottomNavigationStyled = withStyles((theme) => ({
  selected : {
    color: '#448aff !important'
  },
  iconOnly : {
    color :' #607d8b',
    outline: 0
  }
}))(BottomNavigationAction);