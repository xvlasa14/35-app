/**
 * Database 'supabase' connection
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sgkikgiohrquotizkjct.supabase.co'
const supabaseKey = 'sb_publishable_sdVBuKBfl2O_8j-9YjD44g_HJJImPgu'

export const supabase = createClient(supabaseUrl, supabaseKey)