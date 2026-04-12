import {Token} from '@pictalk-speech-made-easy/conllu-parser';
import {MultiwordToken} from './multiwordToken';
import {WordViewer} from './WordViewer';

interface IProps {
  multiwordToken: MultiwordToken;
}

export function MultiwordTokenViewer({multiwordToken}: IProps) {
  const {form, words} = multiwordToken;
  return (
    <div className="multiword-token-viewer">
      <div className="multiword-token-form">
        {form}
      </div>
      <div className="multiword-token-words">
        {words.map((word: Token, index: number) => <WordViewer token={word} key={index}/>)}
      </div>
    </div>
  );
}
