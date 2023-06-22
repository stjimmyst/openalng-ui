import React, { Component, useState } from 'react';
import { Grid, Box, TextField, Typography, CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import { OLSectionBox, OLBox, OLContainer, OLButton } from '../../styles/ol';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const spacing = 1
const imagetitle = "h7"

const Speaking = () => {

  const [taskDefinition, setTaskDefinition] = useState('Past your own question or press the button to generate a random question')
  const [transcription, setTranscription] = useState('transcription')
  const [estimateButton, setEstimateButton] = useState('hidden')
  
  const [audioBlob, setAudioBlob] = useState();
  const [response, setResponse] = useState('');
  const [showResults, setShowResults] = useState('hidden')

  const [title, setTitle] = useState("word count:");
  //const for Task Achevements
  const [fcResponse, setFcResponse] = useState("");
  const [fcResponseScore, setFcResponseScore] = useState("");

  const [pResponse, setPResponse] = useState("");
  const [pResponseScore, setPResponseScore] = useState("");

  const [lrResponse, setLrResponse] = useState("");
  const [lrResponseScore, setLrResponseScore] = useState("");

  const [graResponse, setGraResponse] = useState("");
  const [graResponseScore, setGraResponseScore] = useState("");

  const [overallResponseScore, setOverallResponseScore] = useState("");

  const [currentAnswer, setCurrentAnswer] = useState("")

  const HandleChangeQuestion = e => {
    const inp = e.target.value;
    console.log(inp)
    setTaskDefinition(inp)
  }
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    audio.type = "audio/mpeg";
    // document.body.appendChild(audio);
    setEstimateButton('visible')
  };

  async function GetTask() {
    const response = await fetch("/getRandomSpeakingTopic", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setTaskDefinition(data.topic);
  };

  async function GetText(input_blob) {
    const audioBlob = input_blob;
    console.log(audioBlob);
    const audiofile = new File([audioBlob], "audiofile.mp3", {
      type: "audio/mpeg",
    });
    const formData = new FormData();
    formData.append("file", audiofile);


    const obj = {
      question: taskDefinition
    };
    const json = JSON.stringify(obj);
    const blob = new Blob([json], {
      type: 'application/json'
    });
    formData.append("question", json);


    console.log(formData);
    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const response = await fetch("/voice", {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    const fc = data.response.fc.band
    const lr = data.response.lr.band
    const gra = data.response.gra.band
    const p = data.response.p.band
    setFcResponse(data.response.fc.comment);
    setFcResponseScore(fc);

    setPResponse(data.response.p.comment);
    setPResponseScore(p);

    setLrResponse(data.response.lr.comment);
    setLrResponseScore(lr);

    setGraResponse(data.response.gra.comment);
    setGraResponseScore(gra);

    var overall = Math.round(((parseInt(fc) + parseInt(p) + parseInt(lr) + parseInt(gra)) / 4) * 2) / 2
    console.log(overall)
    setOverallResponseScore(overall.toString());
    setTranscription(data.transcription)
    setShowResults('visible')
  };

  return (
    <Container>
      <OLBox height={400}>
        <Grid container spacing={{ xs: 1, md: 4 }} >
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
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <OLBox>
              <TextField
                style={{ textAlign: 'left' }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={5}
                fullWidth="true"
                value={taskDefinition}
                onChange={HandleChangeQuestion}
              />
              {/* <Typography variant='h7'>{taskDefinition}</Typography> */}
            </OLBox>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Box display="flex" justifyContent='center'>
              <AudioRecorder
                onRecordingComplete={
                  (blob) => {
                    addAudioElement(blob);
                    setAudioBlob(blob);
                  }}
                recorderControls={recorderControls}
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent='center' sx={{ visibility: estimateButton }}>
            <OLButton onClick={e => GetText(audioBlob)}>
                Estimate
              </OLButton>
            </Box>
          </Grid>
          

        </Grid>
      </OLBox>
      <OLBox sx={{ visibility: showResults }} height={100}>
        <Grid container spacing={{ xs: 1, md: 4 }} justifyContent='center' >
          <Grid item xs={8}>
            <Box display="flex" justifyContent='center'>
              <TextField
                sx={{ border: 0 }}
                style={{ textAlign: 'center' }}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={3}
                fullWidth="true"
                value={transcription}
              />
            </Box>
          </Grid>
        </Grid>
      </OLBox>
      <OLSectionBox sx={{ visibility: showResults }}height={200}>
        <Grid container spacing={{ xs: 1, md: spacing }} >
          <Grid item xs={2}>
            <OLBox>
            </OLBox>
          </Grid>
          <Grid item xs={2}>
            <Box justifyContent='center' alignItems='center'>
            <Box height={100}>
              <Typography align='center'>Fluency and Coherence</Typography>
              </Box>
              <Box>
              <Typography align='center'>{fcResponseScore}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box justifyContent='center' alignItems='center' flexDirection="column">
            <Box height={100}>
              <Typography align='center'>Lexical Resource</Typography>
              </Box>
              <Box>
              <Typography align='center'>{lrResponseScore}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box justifyContent='center' alignItems='center' display="column">
              <Box height={100}>
              <Typography align='center'>Grammatical Range and Accuracy</Typography>
              </Box>
              <Box>
              <Typography align='center'>{graResponseScore}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box justifyContent='center' alignItems='center'>
            <Box height={100}>
              <Typography align='center'>Pronunciation</Typography>
              </Box >
              <Box>
              <Typography align='center'>{pResponseScore}</Typography>
              </Box>
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
                rows={10} id="IeltsIputText" value={fcResponse} />
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
              <TextField style={{ textAlign: 'left' }}
                hintText="Message Field"
                fullWidth="true"
                //floatingLabelText="MultiLine and FloatingLabel"
                multiline
                rows={10} id="IeltsIputText" value={pResponse} />
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

    </Container>
  )
};

export default Speaking;