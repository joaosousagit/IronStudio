-- Create storage bucket for machine images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'machine-images',
  'machine-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
);

-- Create RLS policies for machine images bucket
CREATE POLICY "Machine images are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'machine-images');

CREATE POLICY "Admins can upload machine images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'machine-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update machine images"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'machine-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete machine images"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'machine-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);