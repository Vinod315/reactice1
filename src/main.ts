import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import{createClient,SupabaseClient} from '@supabase/supabase-js'

declare global{
  interface Window{
    supabase:SupabaseClient,

  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


const supabase=createClient(
  'https://rpvduhepbspzhsqilqpo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdmR1aGVwYnNwemhzcWlscXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjA4ODUsImV4cCI6MjA2OTAzNjg4NX0.5tqzgP5UknaQqWk-AE1pkKGRaySPHaIeo_6IEBjxlC4',
  {
    auth: {
      detectSessionInUrl: false,
      persistSession: true,
      autoRefreshToken: true
    }
  }
);
window.supabase=supabase;

(window as any).handleCredentialResponse = async (response: any) => {
  // Send the token to your backend for verification
  const { data, error } = await (window as any).supabase.auth.signInWithIdToken({
    provider: 'google',
    token: response.credential,
  });

  const event = new CustomEvent('onUserSignIn', { detail: { data, error } });
  window.dispatchEvent(event);
};