import { Card, Button, TextField, Typography, Link, CardMedia } from "@mui/material";
import { useState } from "react";
import { addJohariQuizData } from "../../firebase/firestore";
import docImg from "../../images/doc.png"
const Questions = [
  {
    name: "Q1",
    title: "Open and candid in dealings with others",
    type: "text",
  },
  {
    name: "Q2",
    title: "Respect and accept others' comments/ reactions",
    type: "text",
  },
  {
    name: "Q3",
    title: "Tests for agreement rather than assumes it",
    type: "text",
  },
  {
    name: "Q4",
    title: "Freely admits when confused or lacking knowledge",
    type: "text",
  },
  {
    name: "Q5",
    title: "Keen to reveal own position on issues",
    type: "text",
  },
  {
    name: "Q6",
    title: "Takes initiative in asking for others' views",
    type: "text",
  },
  {
    name: "Q7",
    title: "Open in describing feelings about others' actions",
    type: "text",
  },
  {
    name: "Q8",
    title: "Makes relevant/ pertinent contributions to issues",
    type: "text",
  },
  {
    name: "Q9",
    title: "Tries hard to understand the feelings of others",
    type: "text",
  },
  {
    name: "Q10",
    title: "Encourages feedback on own ideas and actions",
    type: "text",
  },
];

function SurveyComponent() {
  const userDetails = localStorage.getItem("userData");

  const [johariData, setJohariData] = useState(null);
  const [sum, setSum] = useState(0);
  const [quesOpen, setQuesOpen] = useState(true);

  async function handleJohariSubmit() {
    // send data to database
    await addJohariQuizData({
      email: userDetails.email,
      questions: johariData,
      result: sum,
      date: new Date().toDateString(),
    });

    // console.log(data);
    alert("Your score is " + sum);
  }

  function handleChange(e) {
    const value = parseInt(e.target.value);
    setSum((prev) => prev + value);
    setJohariData({
      ...johariData,
      [e.target.name]: value,
    });
  }

  return (
    <>
    <Card style={{margin:"0em",padding:"2em", borderRadius:"0", background:"#1f1f1f", color:"#ffffff"}}>
        <Typography align="center" fontWeight="bold" gutterBottom variant="h5">Stress Management Test</Typography>
        <Typography variant="body2">Please read through the behaviours given below and mark yourself on a
        scale of 1 to 10 depending on which value you think best reflects your
        character. A value of 10 would reflect the behaviour described as being
        extremely characteristic, 5 as being somewhat characteristic and 1 as
        being uncharacteristic.</Typography>
        
      </Card>
     
      {quesOpen === true ? (
        <form style ={{paddingBottom:"10em"}}>
          {Questions.map((Question) => {
            return (
              <Card key={Question.name} style={{display:"flex", flexDirection:"column", paddingBottom:"1em", paddingLeft:"2em"}}>
                <label>
                  <span style={{ fontWeight: "bold", width:"80vw", display:"flex", flexDirection:"column",  }}>
                    {Question.name}
                    {". "}
                    {Question.title}.{" "}
                  </span>
                </label>
                <TextField id="filled-number" label="Number"
                  type={"number"}
                  InputProps={{ inputProps: { max: 100, min: 10 } }}
                  style={{width:"40vw"}}
                  name={Question.name}
                  // value={johariData.}
                  onChange={handleChange}
                  
                  placeholder={"Your Answer Here"}
                  required
                />
              </Card>
            );
          })}
          <br />
          <Button
        variant="contained"
          style={{ color:"#ffffff", background:"#1f1f1f",marginLeft:"2em" }}
          type="submit"
          onClick={(e) => {
            handleJohariSubmit();
            console.log(sum);
            setQuesOpen(false);
            e.preventDefault();
          }}
        >
          Submit
        </Button>
         
        </form>
      ) : (
         (sum>=25)?
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
      )}
    </>
  );
}

export default SurveyComponent;
