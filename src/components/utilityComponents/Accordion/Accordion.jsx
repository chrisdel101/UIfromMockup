import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Icon from '../Icon/Icon'
import './index.css'

// import './index.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}))

function ControlledExpansionPanels(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  // get first panel open on load
  function setAttributes(i) {
    return [
      { defaultExpanded: true },
      { expanded: expanded === `panel2` },
      { expanded: expanded === `panel3` }
    ]
  }

  return (
    <div className={`${classes.root} accordion`}>
      {Object.values(props.drawers).map((drawer, i) => {
        return (
          <ExpansionPanel
            key={i}
            {...setAttributes(i)[i]}
            onChange={handleChange(`panel${i + 1}`)}
            className="expansion-panel"
          >
            <ExpansionPanelSummary
              className="expansion-panel-inner"
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i + 1}bh-content`}
              id={`panel${i + 1}bh-header`}
            >
              <Icon type={drawer.icon} i={i} />
              <Typography className={`${classes.heading} panel-heading`}>
                {' '}
                {drawer.heading}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                I am an expansion panel
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

export default ControlledExpansionPanels
