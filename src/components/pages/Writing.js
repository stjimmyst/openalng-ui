import React, { Component, useState } from 'react';
import { Typography, Grid, TextField, Box} from '@mui/material';
import { Container } from '@mui/system';
import { OLSection1, OLSection2, OLSection3, OLSection4 } from '../section';
import { OLSectionBox, OLBox, OLContainer, OLButton } from '../../styles/ol';
import Timer from '../timer/Timer';

const spacing = 1
const imagetitle = "h7"

const Writing = () => {
  const [title, setTitle] = useState("word count:");
  //const for Task Achevements
  const [taResponse, setTaResponse] = useState("");
  const [taResponseScore, setTaResponseScore] = useState("");

  const [ccResponse, setCcResponse] = useState("");
  const [ccResponseScore, setCcResponseScore] = useState("");

  const [lrResponse, setLrResponse] = useState("");
  const [lrResponseScore, setLrResponseScore] = useState("");

  const [graResponse, setGraResponse] = useState("");
  const [graResponseScore, setGraResponseScore] = useState("");

  const [overallResponseScore, setOverallResponseScore] = useState("");

  const [currentAnswer, setCurrentAnswer] = useState("")
  const [taskDefinition, setTaskDefinition] = useState('press the button to generate question')
  const HandleChange = e => {
    const inp = e.target.value;
    setCurrentAnswer(inp)
    const words = inp.split(" ").length
    setTitle("word count: " + words.toString())

  }
  const [showResults, setShowResults] = useState('hidden')
  const handleClose = (visible) => {
    EstimateAnswer()
  };

  //   fetch('/exams/english/celpip/speaking/task1').then(res => res.json()).then(data => {
  //     setTaskDefinition(data.task);
  // });
  async function GetTask() {
    const response = await fetch("/getRandomTopic", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setTaskDefinition(data.topic);
  };

  async function EstimateAnswer() {
    const response = await fetch("/estimateAnswer", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: taskDefinition,
        answer: currentAnswer
      })
    });
    const data = await response.json();
    const ta = data.body.ta.band
    const cc = data.body.cc.band
    const lr = data.body.lr.band
    const gra = data.body.gra.band
    setTaResponse(data.body.ta.comment);
    setTaResponseScore(ta);

    setCcResponse(data.body.cc.comment);
    setCcResponseScore(cc);

    setLrResponse(data.body.lr.comment);
    setLrResponseScore(lr);

    setGraResponse(data.body.gra.comment);
    setGraResponseScore(gra);

    var overall = Math.round(((parseInt(ta) + parseInt(cc) + parseInt(lr) + parseInt(gra)) / 4) * 2) / 2
    console.log(overall)
    setOverallResponseScore(overall.toString());
    setShowResults('visible')
  }

  return (
    <Container>
      <OLBox height={600}>
        <Grid container spacing={{ xs: 1, md: spacing }} >
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent='flex-start'>
              <OLButton onClick={e => GetTask()}>
                Generate Question
              </OLButton>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent='flex-end'>
              <Timer></Timer>
            </Box>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={2}>
            <OLBox></OLBox>
          </Grid>
          <Grid item xs={8}>
            <OLBox>
              <TextField
                style={{ textAlign: 'left' }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={5}
                value={taskDefinition}
                fullWidth="true"
              />
              {/* <Typography variant='h7'>{taskDefinition}</Typography> */}
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox></OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox></OLBox>
          </Grid>
          <Grid item xs={8}>
            <OLBox >
              <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                fullWidth="true"
                //floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={10} id="IeltsIputText" onChange={HandleChange} />
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox></OLBox>
          </Grid>
          <Grid item xs={12}>
            <OLBox>
              <Typography id="myWordCout">{title}</Typography>
            </OLBox>
          </Grid>
          <Grid item xs={12}>
            <OLBox>
              <OLButton onClick={() => handleClose('visible')}>Estimate</OLButton>
            </OLBox>
          </Grid>

          {/* <Grid item xs={3}>
         <OLBox></OLBox>
         </Grid>
         <Grid item xs={6}>
         <OLBox>
         <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                fullWidth="true"
                floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={10} id="IeltsIputText" onChange={console.log("alala") }
                
            />
            <Typography>Some text here</Typography>
         </OLBox>
         </Grid>
         <Grid item xs={3}>
         <OLBox></OLBox>
         </Grid> */}

          {/* <Grid item xs={12}>
                    <OLContainer>
                        <Typography variant="h2">Your question here</Typography>
                        <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={20} id="IeltsIputText" onChange={console.log("alala")}
            />
                    </OLContainer>
                </Grid> */}


        </Grid>
      </OLBox>
      <OLSectionBox sx={{ visibility: showResults }}>
        <Grid container spacing={{ xs: 1, md: spacing }} >
          <Grid item xs={2}>
            <OLBox>
            </OLBox>
          </Grid>
          <Grid item xs={2}>
          <Box justifyContent='center' alignItems='center'>
              <Typography>Task Achevements</Typography>
              <Typography>{taResponseScore}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box justifyContent='center' alignItems='center' flexDirection="column">
              <Typography>Coherence & Cohesion</Typography>
              <Typography>{ccResponseScore}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
          <Box justifyContent='center' alignItems='center' display="column">
              <Typography>Lexical Resource</Typography>
              <Typography>{lrResponseScore}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
          <Box justifyContent='center' alignItems='center'>
              <Typography>Grammatical Range and Accuracy</Typography>
              <Typography>{graResponseScore}</Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <OLBox>
            </OLBox>
          </Grid>
          {/* textblox */}
          <Grid item xs={2}>
            <OLBox>
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox>
              <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                fullWidth="true"
                //floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={10} id="IeltsIputText" value={taResponse} />
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox>
              <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                fullWidth="true"
                //floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={10} id="IeltsIputText" value={ccResponse} />
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox>
              <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                fullWidth="true"
                //floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={10} id="IeltsIputText" value={lrResponse} />
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox>
              <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                fullWidth="true"
                //floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={10} id="IeltsIputText" value={graResponse} />
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <OLBox>
            </OLBox>
          </Grid>
          <Grid item xs={12}>
            <OLBox>
              <Typography>Overall: {overallResponseScore}</Typography>
            </OLBox>
          </Grid>

        </Grid>

      </OLSectionBox>

      {/* <Grid container spacing={{ xs: 5, md: 5 }} >
        <Grid item xs={12}>
          <Box display="flex" justifyContent='center'>
            <Box display="flex" justifyContent='center' flexDirection='column'>
              <Typography>Overall: 7</Typography>
              <Typography>Overall: 7</Typography>
            </Box>
            <Box display="flex" justifyContent='center' flexDirection='column'>
              <Typography>Overall: 8</Typography>
              <Typography>Overall: 8</Typography>
            </Box>
          </Box>
        </Grid>

      </Grid> */}
      <OLSectionBox>

      </OLSectionBox>
    </Container>
  )
};

export default Writing;