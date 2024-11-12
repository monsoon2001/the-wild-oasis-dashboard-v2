import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://plcdyjjhxjzbqwpmqhqh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsY2R5ampoeGp6YnF3cG1xaHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxOTYwNDcsImV4cCI6MjA0NTc3MjA0N30.ezuDFj4k89xuzyYdkvEsZE0z_RVfG1VuOMXoHCiZJAo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
