import {useState} from 'react';
import {ConlluDocument, Sentence} from '@pictalk-speech-made-easy/conllu-parser';
import {SentenceViewer} from './SentenceViewer';
import {makeSearchQuery, matchesQuery} from './search/searchQuery';
import {SearchForm} from './search/SearchForm';
import {defaultLookupConfig} from './search/lookupConfig';

type SearchQueryFieldType = 'Gender'| 'Number'| 'Case'| 'Definite'| 'VerbForm'|
  'Mood'| 'Tense'| 'Person'| 'Voice'| 'Degree'| 'PronType';
const searchQueryFields: SearchQueryFieldType[] = [
  'Gender', 'Number', 'Case', 'Definite', 'VerbForm',
  'Mood', 'Tense', 'Person', 'Voice', 'Degree', 'PronType'
];

interface IProps {
  conlluDocument: ConlluDocument;
}

export function CorpusViewer({conlluDocument}: IProps) {
  const initialQuery = makeSearchQuery(searchQueryFields);
  const [query, setQuery] = useState(initialQuery);
  const {sentences} = conlluDocument;
  const filteredSentences = sentences.filter(sentence => sentence.tokens.some(token =>
    token.feats !== '_' && matchesQuery(token.feats, query, defaultLookupConfig)
  ));
  return (
    <div>
    <SearchForm initialQuery={initialQuery}
                onSubmit={query => setQuery(query)}/>
    <div>
      {filteredSentences.map((sentence: Sentence, index: number) => <SentenceViewer sentence={sentence} key={index}/>)}
    </div>
    </div>
  );
}
