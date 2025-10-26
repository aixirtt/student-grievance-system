// Minimal stubbed supabase client to keep the frontend compiling during development.
// Replace with real `createClient` from @supabase/supabase-js when wiring auth/data.

type QueryResult = { data: any[] | null; error: any | null };

const makeChain = (result: QueryResult) => ({
  order: (_col: string, _opts?: any) => Promise.resolve(result),
});

const supabase = {
  from: (_table: string) => ({
    select: (_cols?: string) => makeChain({ data: [], error: null }),
  }),
  // Keep an exported auth object stub if other files import it later
  auth: {
    signIn: async () => ({ data: null, error: null }),
    signOut: async () => ({ error: null }),
  },
};

export { supabase };
