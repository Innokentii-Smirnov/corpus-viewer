import {Token} from '@pictalk-speech-made-easy/conllu-parser';

interface IProps {
  token: Token;
}

export function WordViewer({token}: IProps) {
  const {form, misc} = token;
  const {MSeg, MGloss} = misc === '_' ? {MSeg: '', MGloss: ''} : misc;
  return (
    <div className="word-viewer">
      <div className="word-field">{form}</div>
      <div className="word-field">{MSeg}</div>
      <div className="word-field">{MGloss}</div>
    </div>
  );
}
