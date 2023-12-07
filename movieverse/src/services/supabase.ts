import { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabaseClient = new SupabaseClient(supabaseUrl, supabaseApiKey);

export {supabaseClient}