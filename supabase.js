import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://egdotoxdqmemjjdsgvhp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZG90b3hkcW1lbWpqZHNndmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDAyNjgsImV4cCI6MjA2ODUxNjI2OH0.-soEkqAvjIx7cov9bCIbXznKGTrIAozvpgptRIbyrW0'; // your anon key
export const supabase = createClient(supabaseUrl, supabaseKey);
