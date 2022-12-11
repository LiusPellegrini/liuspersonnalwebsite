import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://efgwkhlbkwmcubgheuov.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZ3draGxia3dtY3ViZ2hldW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzMzYxMzIsImV4cCI6MTk4MzkxMjEzMn0.NemRP3QSs0PSR2YpQsX33Wo7JNzxIrT5VD0_eNKGMSw'
);
