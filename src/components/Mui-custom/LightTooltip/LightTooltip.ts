import { Tooltip, withStyles } from "@material-ui/core";

export const LightTooltip = withStyles((theme) => ({
  arrow: {
    color: '#084966',
  },
  tooltip: {
    background: 'rgb(53,74,78)',
    backgroundImage: 'linear-gradient(90deg, rgba(53,74,78,1) 0%, rgba(8,73,102,1) 0%, rgba(8,73,102,1) 30%, rgba(9,108,106,1) 68%, rgba(9,121,107,1) 91%)',
    color: 'white',
    boxShadow: theme.shadows[5],
    fontSize: 15,
  },
}))(Tooltip);