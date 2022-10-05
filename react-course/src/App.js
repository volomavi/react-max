import Todo from "./components/Todo";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  return (
    <div>
      <h1>Todo</h1>
      <Todo text="1. put laundry in washing machine" />
      <Todo text="2. put wet laundry in dryer" />
      <Todo text="3. put laundry in clean laundry bin" />
      <Todo text="4. fold laundry" />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>To do 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          put laundry in washing machine
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>To do 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          put wet laundry in dryer
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>To do 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          put laundry in clean laundry bin
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>To do 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          fold laundry
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
