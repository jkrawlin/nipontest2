const __memoryStoreTmp: Record<string, string> = {};
const safeStorageTmp = {
  getItem(k: string) { try { return (globalThis as any).localStorage?.getItem(k) ?? __memoryStoreTmp[k] ?? null; } catch { return __memoryStoreTmp[k] ?? null; } },
  setItem(k: string, v: string) { try { (globalThis as any).localStorage?.setItem(k,v); } catch { /* ignore */ } __memoryStoreTmp[k]=v; }
};

// TemporaryEmployee service removed in simplified version.
export class TemporaryEmployeeService {
  static getAll(){ return []; }
  static calculateEarnings(){ return 0; }
}
