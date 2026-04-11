import {Sentence, Token} from '@pictalk-speech-made-easy/conllu-parser';
import {WordViewer} from './WordViewer';

interface IProps {
  sentence: Sentence;
}

export function SentenceViewer({sentence}: IProps) {
  const {tokens} = sentence;
  return (
    <div className="sentence-viewer">
      {tokens.map((token: Token, index: number) => <WordViewer token={token} key={index}/>)}
    </div>
  );
}
