import {Token, Sentence} from '@pictalk-speech-made-easy/conllu-parser';

export type MultiwordToken = {
  form: string;
  words: Token[];
}

export function isMultiword(token: Token | MultiwordToken): token is MultiwordToken{
  return 'words' in token;
}

export function groupTokens(sentence: Sentence): Array<Token | MultiwordToken> {
  const tokens: Array<Token | MultiwordToken> = [];
  for (let i = 0; i < sentence.tokens.length; i++) {
    const token = sentence.tokens[i];
    if (token.id.includes('-')) {
      const [start, end] = token.id.split('-');
      const wordCount = parseInt(end) - parseInt(start) + 1;
      const words: Token[] = [];
      for (let j = i + 1; j <= i + wordCount; j++) {
        words.push(sentence.tokens[j]);
      }
      const multiwordToken = {form: token.form, words};
      tokens.push(multiwordToken);
      i += wordCount;
    } else {
      tokens.push(token);
    }
  }
  return tokens;
}
