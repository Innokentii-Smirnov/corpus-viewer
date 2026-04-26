import { SearchQueryField, matchesField } from './searchQueryField';
import { LookupConfig } from './lookupConfig';

export type SearchQuery<F extends string> = SearchQueryField<F>[];

export function matchesQuery<F extends string>(obj: Partial<{ [key in F]: string | undefined }>, query: SearchQuery<F>,
                                               lookupConfig: LookupConfig): boolean {
  return query.every(field => matchesField(obj, field, lookupConfig));
}

export function selectMatching<F extends string, T extends { [key in F]: string }>(objects: T[], query: SearchQuery<F>,
                                                                                   lookupConfig: LookupConfig): T[] {
  return objects.filter(obj => matchesQuery(obj, query, lookupConfig));
}

export function makeSearchQuery<F extends string>(fields: F[]): SearchQuery<F> {
  return fields.map(field => ({
    name: field,
    value: '',
    mode: 'substring',
    fuzzy: true
  }));
}
