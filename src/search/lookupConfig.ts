export type LookupConfig = {
  ignoreCase: boolean;
}

export const defaultLookupConfig: LookupConfig = {
  ignoreCase: true,
}

export function preprocessForLookup(value: string, lookupConfig: LookupConfig): string {
  const {ignoreCase} = lookupConfig;
  if (ignoreCase) {
    value = value.toLowerCase();
  }
  return value;
}
