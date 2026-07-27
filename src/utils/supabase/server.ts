import { createServerClient } from "@supabase/ssr";
import { getCookie, setCookie } from "vinxi/http";

export const createClient = () => {
  return createServerClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.VITE_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          // Typically SSR just needs get/set for specific ones
          // If needed we can parse all from headers, but an empty array is a safe default
          return [];
        },
        get(name: string) {
          return getCookie(name);
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              setCookie(name, value, options);
            });
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing user sessions.
          }
        },
      },
    },
  );
};
