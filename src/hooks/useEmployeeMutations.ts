// Legacy mutation hooks disabled after employee model bifurcation.
// Export inert stubs to prevent runtime errors until UI migrated to new create/update flows.
export function useCreateEmployee() { return { mutateAsync: async () => { throw new Error('Legacy create disabled'); } } as any; }
export function useUpdateEmployee() { return { mutateAsync: async () => { throw new Error('Legacy update disabled'); } } as any; }