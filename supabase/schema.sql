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

-- ---------------------------------------------------------------------------
-- Educational topic configs (AI-generated or manual)
-- ---------------------------------------------------------------------------
CREATE TABLE topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vertical text NOT NULL,
  slug text NOT NULL,
  topic text NOT NULL,
  config jsonb NOT NULL,
  status text NOT NULL DEFAULT 'draft',
  generated boolean NOT NULL DEFAULT false,
  seo_title text,
  seo_description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(vertical, slug)
);
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
-- Topics are public pages -- readable by all, writable by service role only
CREATE POLICY "topics_public_read" ON topics FOR SELECT USING (true);

-- Topic-level analytics (page views, CTA clicks, scroll depth, FAQ expansions)
CREATE TABLE topic_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid REFERENCES topics(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE topic_analytics ENABLE ROW LEVEL SECURITY;
-- Analytics writable by all (anonymous tracking), readable by service role
CREATE POLICY "topic_analytics_anon_insert" ON topic_analytics FOR INSERT WITH CHECK (true);
