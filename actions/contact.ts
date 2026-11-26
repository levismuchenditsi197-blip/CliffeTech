"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  service?: string;
  businessSize?: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const { error } = await supabase.from("contacts").insert({
      full_name: formData.fullName,
      company_name: formData.companyName || null,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || null,
      business_size: formData.businessSize || null,
      message: formData.message,
      status: "new",
    });

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: "Failed to submit form. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
