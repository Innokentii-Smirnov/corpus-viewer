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
    <div className="with-margins">
      <p>MSeg and MGloss stand for morpheme segmentation and glossing,
      Gloss is the translation and upos the part of speech:
      NOUN, VERB, ADJ, ADV, INTJ, PROPN (proper noun), ADP (adposition),
      AUX (auxiliary), CCONJ and SCONJ (coordinating and subordinating
      conjunctions), PART (particle), NUM (numeral), PRON (pronoun)
      and DET (determiner).</p>
      <p>The values of the morphosyntactic properties
      can be found in <a href="https://universaldependencies.org/u/feat/index.html"
                         target="_blank" rel="noopener noreferrer">
      the Universal Dependencies documentation.
      </a>.
      They are sometimes spelled differently than those in morpheme glossing,
      e. g. Sing and Plur, not SG and PL.
      The MGloss field can be used to search
      for Leipzig-style morphosyntactic properties.</p>
      <p>The search in all fields is case-insensitive.</p>
    </div>
    <div className="with-margins">
    <SearchForm initialQuery={initialQuery}
                onSubmit={query => setQuery(query)}/>
    </div>
    <div>
      {filteredSentences.map((sentence: Sentence, index: number) => <SentenceViewer sentence={sentence} query={query} key={index}/>)}
    </div>
    </div>
  );
}
