import {Token} from '@pictalk-speech-made-easy/conllu-parser';
import {SearchQuery, matchesQuery} from './search/searchQuery';
import {defaultLookupConfig} from './search/lookupConfig';

type TokenQueryField = 'form' | 'MSeg' | 'MGloss' | 'Gloss' | 'upos' | 'Gender' | 'Number'| 'Case'
| 'Definite' | 'VerbForm' | 'Mood' | 'Tense' | 'Person' | 'Voice' | 'Degree' | 'PronType';

export const tokenQueryFields: TokenQueryField[] = [
  'form', 'MSeg', 'MGloss', 'Gloss', 'upos', 'Gender', 'Number', 'Case', 'Definite', 'VerbForm',
  'Mood', 'Tense', 'Person', 'Voice', 'Degree', 'PronType'
]

export function tokenMatchesQuery(token: Token, query: SearchQuery<TokenQueryField>): boolean {
  const {feats, misc} = token;
  const searchableObject = {
    ...token,
    ...(feats !== '_' ? feats : {}),
    ...(misc !== '_' ? misc : {}),
  }
  return token.feats !== '_' && matchesQuery(searchableObject, query, defaultLookupConfig);
}
