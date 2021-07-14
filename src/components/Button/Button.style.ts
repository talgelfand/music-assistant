import { withStyles, Button } from "@material-ui/core"

export const StyledButton = withStyles({
  root: {
    display: "block",
    marginTop: "50px",
    background: "#D78A76",
    color: "#FFF",
  },
})(Button)
