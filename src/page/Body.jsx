import React  from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Button} from '@mui/material';
import  './Box.css';
import jsPDF from 'jspdf';



function Box(props) {
  function generatePdf() {
  const doc = new jsPDF();
  const Text = JSON.stringify(transcript);
  const Text2 = Text.replace(/['"]+/g, '');
  const text = Text2;
  doc.text(text, 10, 10, { maxWidth: 200 });
  doc.save('Typer.pdf');
}

const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

    return (
        <div className='main'>
              <h1 style={{textAlign:"center",margin: '20px auto'}}>Typer</h1>
              <h2>Microphone: {listening ? 'on' : 'off'}</h2>
              <h2 className='main2'>{transcript}</h2>
              <div className='button'>
                  <Button variant="contained" onClick={SpeechRecognition.startListening}>Start</Button>
                  <Button variant="contained" onClick={SpeechRecognition.stopListening}>Stop</Button>
                  <Button  variant="contained"  onClick={resetTranscript}>Reset</Button>
                  <Button variant="contained" onClick={generatePdf}>Generate PDF</Button>
              </div>
        </div>
    );
}

export default Box;