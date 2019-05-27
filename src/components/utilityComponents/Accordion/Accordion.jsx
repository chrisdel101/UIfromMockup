import React from 'react'
import Icon from '../Icon/Icon'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './index.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  expansionPanelInner: {
    minHeight: '75px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

function SimpleExpansionPanel(props) {
  const classes = useStyles()
  return (
    <div className={`${classes.root} accordion`}>
      {Object.values(props.drawers).map((drawer, i) => {
        return (
          <ExpansionPanel key={i} className="expansion-panel">
            <ExpansionPanelSummary
              className="expansion-panel-inner"
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i + 1}a-content"
            id="panel${i + 1}a-header`}
            >
              <Icon type={drawer.icon} i={i} />
              <Typography className={`${classes.heading} panel-heading`}>
                {drawer.heading}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{drawer.text}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </div>
  )
}

export default SimpleExpansionPanel
