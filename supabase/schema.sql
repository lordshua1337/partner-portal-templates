-- Partner Portal Templates Database Schema

-- User profiles
CREATE TABLE user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  display_name text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users_own_profile" ON user_profiles FOR ALL USING (auth.uid() = id);

-- Saved template configurations
CREATE TABLE saved_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  template_id text NOT NULL,
  name text NOT NULL,
  config jsonb DEFAULT '{}',
  html_snapshot text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE saved_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users_own_templates" ON saved_templates FOR ALL USING (auth.uid() = user_id);

-- Analytics events
CREATE TABLE analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  event_type text NOT NULL,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth_read_own" ON analytics_events FOR SELECT USING (auth.uid() = user_id);
