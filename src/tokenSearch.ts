import {Token} from '@pictalk-speech-made-easy/conllu-parser';
import {SearchQuery, matchesQuery} from './search/searchQuery';
import {defaultLookupConfig} from './search/lookupConfig';

type TokenQueryField = 'Gender' | 'Number'| 'Case'| 'Definite' | 'VerbForm' |
  'Mood' | 'Tense' | 'Person' | 'Voice' | 'Degree' | 'PronType';

export const tokenQueryFields: TokenQueryField[] = [
  'Gender', 'Number', 'Case', 'Definite', 'VerbForm',
  'Mood', 'Tense', 'Person', 'Voice', 'Degree', 'PronType'
]

export function tokenMatchesQuery(token: Token, query: SearchQuery<TokenQueryField>): boolean {
  return token.feats !== '_' && matchesQuery(token.feats, query, defaultLookupConfig);
}
