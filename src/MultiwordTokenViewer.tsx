import {Token} from '@pictalk-speech-made-easy/conllu-parser';
import {MultiwordToken} from './multiwordToken';
import {WordViewer} from './WordViewer';
import {TokenSearchQuery} from './tokenSearch';

interface IProps {
  multiwordToken: MultiwordToken;
  query: TokenSearchQuery;
}

export function MultiwordTokenViewer({multiwordToken, query}: IProps) {
  const {form, words} = multiwordToken;
  return (
    <div className="multiword-token-viewer">
      <div className="multiword-token-form">
        {form}
      </div>
      <div className="multiword-token-words">
        {words.map((word: Token, index: number) => <WordViewer token={word} query={query} key={index}/>)}
      </div>
    </div>
  );
}
