interface ImportMetaEnv{
    readonly VITE_SUPABASE_API_KEY:string,
    readonly VITE_SUPABASE_URL:string
    readonly VITE_TMDB_API_KEY:string,
    readonly VITE_TMDB_API_READ_ACCESS_KEY:string
}

interface ImportMeta{
    readonly env: ImportMetaEnv
}