"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL || "cliffelikanga@gmail.com";

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
    const { error } = await resend.emails.send({
      from: "CliffeTech Website <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      replyTo: formData.email,
      subject: `New Contact Form Submission - ${formData.fullName}`,
      text: [
        `Name: ${formData.fullName}`,
        `Company: ${formData.companyName || "-"}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Service Required: ${formData.service || "-"}`,
        `Business Size: ${formData.businessSize || "-"}`,
        "",
        "Message:",
        formData.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send message. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
