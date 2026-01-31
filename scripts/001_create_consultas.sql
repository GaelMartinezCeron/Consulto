-- Tabla de consultas para Web@ Consul
CREATE TABLE IF NOT EXISTS public.consultas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  empresa TEXT,
  tipo_consulta TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  estado TEXT DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.consultas ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones públicas (cualquiera puede enviar una consulta)
CREATE POLICY "allow_public_insert" ON public.consultas
FOR INSERT TO anon, authenticated
WITH CHECK (true);

-- Política para permitir lectura solo a usuarios autenticados (admins)
CREATE POLICY "allow_authenticated_select" ON public.consultas
FOR SELECT TO authenticated
USING (true);

-- Política para permitir actualizaciones a usuarios autenticados
CREATE POLICY "allow_authenticated_update" ON public.consultas
FOR UPDATE TO authenticated
USING (true);
