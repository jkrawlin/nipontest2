// Simple localStorage mock for Vitest environment
if (typeof globalThis.localStorage === 'undefined') {
  const store: Record<string,string> = {};
  globalThis.localStorage = {
    getItem: (k: string) => (k in store ? store[k] : null),
    setItem: (k: string, v: string) => { store[k] = v; },
    removeItem: (k: string) => { delete store[k]; },
    clear: () => { Object.keys(store).forEach(k=> delete store[k]); },
    key: (i: number) => Object.keys(store)[i] || null,
    get length() { return Object.keys(store).length; }
  } as any;
}
