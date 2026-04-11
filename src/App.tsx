import React, {useState, useEffect} from 'react';
import {ConlluDocument, parseConllu} from '@pictalk-speech-made-easy/conllu-parser';
import './App.css';
import {CorpusViewer} from './CorpusViewer';

const corpusUrl = 'https://raw.githubusercontent.com/Innokentii-Smirnov/OldNubianUDTreebank/refs/heads/main/OldNubian.conllu';

const defaultCorpus: ConlluDocument = {
    format: 'conllu',
    metadata: {},
    sentences: []
}

export default function App() {
  const [corpus, setCorpus] = useState(defaultCorpus);

  useEffect(() => {
    fetch(corpusUrl)
      .then(response => response.text())
      .then(text => {
        setCorpus(parseConllu(text));
    });
  }, [])

  return (
    <CorpusViewer conlluDocument={corpus}/>
  );
}
