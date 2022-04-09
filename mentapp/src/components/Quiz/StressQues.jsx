import { FormControl, FormControlLabel,Button, FormLabel, RadioGroup ,Radio, Card, CardActionArea, Typography, Link, CardMedia} from "@mui/material";
import React, { useState } from "react";
import docImg from "../../images/doc.png"
const Questions = [
  {
    name: "Q1",
    title: "I usually do not bring work home at night ",
    type: "text",
  },
  {
    name: "Q2",
    title: "Have enough hours in the day to do all the things that I must do",
    type: "text",
  },
  {
    name: "Q3",
    title:
      "I do not deny or ignore problems in the hope that they will go away",
    type: "text",
  },
  {
    name: "Q4",
    title: "I do the jobs myself to ensure they are done properly",
    type: "text",
  },
  {
    name: "Q5",
    title: "I plan and do things accordingly",
    type: "text",
  },
  {
    name: "Q6",
    title:
      "I do not feel that there are too many deadlines in my work / life that are difficult to meet",
    type: "text",
  },
  {
    name: "Q7",
    title: "I have confidence in my abilities.",
    type: "text",
  },
  {
    name: "Q8",
    title: "I rarely have guilty feelings if I relax and do nothing",
    type: "text",
  },
  {
    name: "Q9",
    title:
      "I am unable to perform tasks as well as I used to, my judgment is clouded or not as good as it was",
    type: "text",
  },
  {
    name: "Q10",
    title: "I feel refreshed when I wake after an adequate sleep ",
    type: "text",
  },
];

function StressQues() {
  const [data, setData] = useState(null);
  const [sum, setSum] = useState(0);
  const [quesOpen, setQuesOpen] = useState(true);
  function handleSubmit() {
    // send data to database
    console.log(data);

  }

  function handleChange(e) {
    const value = parseInt(e.target.value);
    setSum((prev) => prev + value);
    setData({
      ...data,
      [e.target.name]: value,
    });
  }

  return (
    <>
      <Card style={{margin:"0em",padding:"2em", borderRadius:"0", background:"#1f1f1f", color:"#ffffff"}}>
        <Typography align="center" fontWeight="bold" gutterBottom variant="h5">Stress Management Test</Typography>
        <Typography variant="body2">Because everyone reacts to stress in his or her own way, no one stress
        test can give you a complete diagnosis of your stress levels. This
        stress test is intended to give you an overview only. Please see a
        Stress Management Consultant for a more in depth analysis. Answer all
        the questions but just tick one box that applies to you, either yes or
        no. Answer yes, even if only part of a question applies to you. Take
        your time, but please be completely honest with your answers:</Typography>
        
      </Card>
      {quesOpen === true ? (
      <form style={{paddingBottom:"10em"}}>
        {Questions.map((Question) => {
          return (
<Card style={{paddingTop:"1em", paddingLeft:"1em", marginLeft:"1em", marginBottom:"-0.2em"}}>
            <FormControl>
  <FormLabel style={{width:"80vw"}}id="demo-controlled-radio-buttons-group">{Question.title}</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name={Question.name}
    onChange={handleChange}
  >
    <FormControlLabel value="1" control={<Radio />} label="Yes" />
    <FormControlLabel value="0" control={<Radio />} label="No" />
  </RadioGroup>
</FormControl>
</Card>
          );
        })}
        <br />
        <Button
        variant="contained"
          style={{ color:"#ffffff", background:"#1f1f1f",marginLeft:"2em" }}
          type="submit"
          onClick={(e) => {
            handleSubmit();
            setQuesOpen(false);
            e.preventDefault();
          }}
        >
          Submit
        </Button>

      </form> ):(
           (sum>=5)?
           <Card style ={{padding:"0.5em", margin:"2em",}}id="not help">
             <Typography align="center" gutterBottom variant="h4">You are Good!</Typography>
             <Typography aligh ="center" variant ="h6">If you still want to talk to our consultant, <Link href="/booking" underline="always">{'click here.'}</Link></Typography>
           
           <CardMedia
           component="img"
           height="340"
           image={docImg}
           alt="dactarSahab"
         />
           </Card>
           :
           <Card style ={{padding:"0.5em", margin:"2em",}}id="not help">
           <Typography align="center" gutterBottom variant="h4">Hi there,!</Typography>
           <Typography aligh ="center" variant ="h6">You might need to talk to our consultants, please <Link href="/booking" underline="always">{'click here.'}</Link></Typography>
         
         <CardMedia
         component="img"
         height="340"
         image={docImg}
         alt="dactarSahab"
       />
         </Card>
         )
      }
      </>
      )}
    

export default StressQues;
