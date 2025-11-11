-- Add is_featured column to machines table
ALTER TABLE public.machines 
ADD COLUMN is_featured boolean NOT NULL DEFAULT false;

-- Add a comment to explain the column
COMMENT ON COLUMN public.machines.is_featured IS 'Marks if this machine should be featured on the home page (max 3)';

-- Create an index for faster queries
CREATE INDEX idx_machines_is_featured ON public.machines(is_featured) WHERE is_featured = true;