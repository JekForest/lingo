import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from "./schema"

const sql = neon(process.env.DATABASE_URL!)
// const db = drizzle({ client: sql, schema })
const db = drizzle(sql, { schema })
//可能有问题

export default db
