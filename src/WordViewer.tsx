import {Token} from '@pictalk-speech-made-easy/conllu-parser';
import {TokenSearchQuery, tokenMatchesQuery} from './tokenSearch';

interface IProps {
  token: Token;
  query: TokenSearchQuery;
}

export function WordViewer({token, query}: IProps) {
  const {form, misc} = token;
  const {MSeg, MGloss} = misc === '_' ? {MSeg: '', MGloss: ''} : misc;
  const matchedQuery = tokenMatchesQuery(token, query) &&
    query.some(field => field.value !== '');
  const className = matchedQuery ? "word-viewer bold" : "word-viewer";
  return (
    <div className={className}>
      <div className="word-field">{form}</div>
      <div className="word-field">{MSeg}</div>
      <div className="word-field">{MGloss}</div>
    </div>
  );
}
