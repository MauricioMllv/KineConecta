import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'K!n3.6988',
    database: 'kinecone_db'
    
})
