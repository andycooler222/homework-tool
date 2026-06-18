const { createClient } = require('@supabase/supabase-js');
const SB_URL = 'https://eyqbflykrgnopqxncyzl.supabase.co';
const SB_KEY = 'sb_publishable_dIqF0694gYRmNvEdeVspUg_VJmjLeLE';
const sb = createClient(SB_URL, SB_KEY);

async function createTable() {
  try {
    // Try exec_sql if available
    const { data, error } = await sb.rpc('exec_sql', {
      sql: `
CREATE TABLE IF NOT EXISTS wrong_questions (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  topic TEXT,
  question_text TEXT NOT NULL,
  wrong_answer TEXT,
  correct_answer TEXT,
  mistake_reason TEXT,
  mastery_status TEXT DEFAULT 'unmastered',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
`
    });
    if (error) {
      console.log('exec_sql failed:', error.message);
    } else {
      console.log('Table created via exec_sql');
    }
  } catch (e) {
    console.log('exec_sql not available:', e.message);
  }
}

createTable();
