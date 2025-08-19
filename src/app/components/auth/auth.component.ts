// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { createClient, SupabaseClient } from '@supabase/supabase-js';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-auth',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './auth.component.html'
// })
// export class AuthComponent {

//   FullName = '';
//   Password = '';
//   Location = '';

//   private supabase: SupabaseClient;

//   constructor() {
//     // Initialize Supabase
//     this.supabase = createClient(
//       'https://rpvduhepbspzhsqilqpo.supabase.co', // 🔹 Replace with your Supabase project URL
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdmR1aGVwYnNwemhzcWlscXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjA4ODUsImV4cCI6MjA2OTAzNjg4NX0.5tqzgP5UknaQqWk-AE1pkKGRaySPHaIeo_6IEBjxlC4' // 🔹 Replace with your Supabase anon key
//     );
//   }

//   async saveUser() {
//     // Get currently logged-in user from Supabase Auth
//     const { data: { user }, error: userError } = await this.supabase.auth.getUser();

//     if (userError || !user) {
//       console.error('User not logged in!', userError);
//       return;
//     }

//     // Insert or update in `Logged_inUsers` table
//     const { data, error } = await this.supabase
//       .from('Logged_inUsers') // 🔹 Your table name
//       .upsert([
//         {
//           id: user.id, // From Supabase Auth
//           FullName: this.FullName,
//           Password: this.Password,
//           Location: this.Location
//         }
//       ]);

//     if (error) {
//       console.error('Error saving data:', error);
//     } else {
//       console.log('Data saved successfully:', data);
//     }
//   }
// }
