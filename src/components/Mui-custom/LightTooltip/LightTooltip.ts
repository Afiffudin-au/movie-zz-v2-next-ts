import { Tooltip, withStyles } from "@material-ui/core";

export const LightTooltip = withStyles((theme) => ({
  arrow: {
    color: 'black',
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[5],
    fontSize: 15,
  },
}))(Tooltip);