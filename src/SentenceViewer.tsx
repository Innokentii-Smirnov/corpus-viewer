import {Sentence, Token} from '@pictalk-speech-made-easy/conllu-parser';
import {MultiwordToken, isMultiword, groupTokens} from './multiwordToken';
import {MultiwordTokenViewer} from './MultiwordTokenViewer';

interface IProps {
  sentence: Sentence;
}

export function SentenceViewer({sentence}: IProps) {
  const tokens = groupTokens(sentence);
  return (
    <div className="sentence-viewer">
      {tokens.map((token: MultiwordToken | Token, index: number) =>
        isMultiword(token)
        ? <MultiwordTokenViewer multiwordToken={token} key={index}/>
        : <MultiwordTokenViewer multiwordToken={{form: token.form, words: [token]}} key={index}/>
      )}
    </div>
  );
}
