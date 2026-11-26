-- Allow anonymous users to insert contacts (for contact form submissions)
CREATE POLICY "Anyone can submit contacts" ON contacts
  FOR INSERT TO anon WITH CHECK (true);