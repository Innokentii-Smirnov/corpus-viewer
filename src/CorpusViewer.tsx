import {useState} from 'react';
import {ConlluDocument, Sentence} from '@pictalk-speech-made-easy/conllu-parser';
import {SentenceViewer} from './SentenceViewer';
import {makeSearchQuery} from './search/searchQuery';
import {SearchForm} from './search/SearchForm';
import {tokenQueryFields, tokenMatchesQuery} from './tokenSearch'

interface IProps {
  conlluDocument: ConlluDocument;
}

export function CorpusViewer({conlluDocument}: IProps) {
  const initialQuery = makeSearchQuery(tokenQueryFields);
  const [query, setQuery] = useState(initialQuery);
  const {sentences} = conlluDocument;
  const filteredSentences = sentences.filter(sentence => sentence.tokens.some(token =>
    tokenMatchesQuery(token, query)
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
