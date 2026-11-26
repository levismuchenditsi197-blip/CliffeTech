-- Create contacts table for storing contact form submissions
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  service VARCHAR(255),
  business_size VARCHAR(100),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add comments
COMMENT ON TABLE contacts IS 'Contact form submissions from the website';
COMMENT ON COLUMN contacts.status IS 'Status: new, contacted, converted, closed';

-- Create index for faster queries
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated access only (admin access)
CREATE POLICY "Admins can view all contacts" ON contacts
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can update contacts" ON contacts
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins can delete contacts" ON contacts
  FOR DELETE TO authenticated USING (true);