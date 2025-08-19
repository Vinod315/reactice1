import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://rpvduhepbspzhsqilqpo.supabase.co', // Replace with your Supabase project URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdmR1aGVwYnNwemhzcWlscXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjA4ODUsImV4cCI6MjA2OTAzNjg4NX0.5tqzgP5UknaQqWk-AE1pkKGRaySPHaIeo_6IEBjxlC4' // Replace with your Supabase public anon key
    );
  }

  /**
   * Access the Supabase client
   */
  get client(): SupabaseClient {
    return this.supabase;
  }

  /**
   * Sign in with Google OAuth
   */
  async signInWithGoogle() {
    return await this.supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  /**
   * Get the currently authenticated user
   */
  async getUser() {
    return await this.supabase.auth.getUser();
  }

  /**
   * Update the user's profile
   */
  async updateProfile(userId: string, fullName: string,Password: string,Location:string) {
    return await this.supabase
      .from('profiles')
      .upsert({
        id: userId,
        full_name: fullName,
        Password: Password,
        Location: Location,
      });
  }
}
