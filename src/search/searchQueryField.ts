import { LookupConfig, preprocessForLookup } from './lookupConfig';

export type SearchMode = 'substring' | 'whole word' | 'pattern';

export type SearchQueryField<F extends string> = {
  name: F;
  value: string;
  mode: SearchMode;
  fuzzy: boolean;
}

export const searchModes = ['substring', 'whole word', 'pattern'];
export const regExpFlags = 'iu';

export function matchesField<F extends string>(obj: Partial<{ [key in F]: string | undefined }>, field: SearchQueryField<F>,
                                               lookupConfig: LookupConfig): boolean {
  if (field.value === '') {
    return true;
  }
  let inputObjectValue = obj[field.name];
  if (inputObjectValue === undefined) {
    return false;
  }
  let searchedValue = field.value;
  if (field.fuzzy) {
    inputObjectValue = preprocessForLookup(inputObjectValue, lookupConfig);
    searchedValue = preprocessForLookup(searchedValue, lookupConfig);
  }
  switch (field.mode) {
    case 'substring': {
      return inputObjectValue.includes(searchedValue);
    }
    case 'whole word': {
      return inputObjectValue === searchedValue;
    }
    case 'pattern': {
      const regExp = new RegExp(searchedValue, regExpFlags);
      return regExp.test(inputObjectValue);
    }
  }
}
