import {ConlluDocument, Sentence} from '@pictalk-speech-made-easy/conllu-parser';
import {SentenceViewer} from './SentenceViewer';

interface IProps {
  conlluDocument: ConlluDocument;
}

export function CorpusViewer({conlluDocument}: IProps) {
  const {sentences} = conlluDocument;
  return (
    <div>
      {sentences.map((sentence: Sentence, index: number) => <SentenceViewer sentence={sentence} key={index}/>)}
    </div>
  );
}
