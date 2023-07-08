import * as fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

fs.copyFile(
  path.resolve(__dirname, '../types/persian-components.d.ts'),
  path.resolve(__dirname, '../dist/persian-components.d.ts'),
  (err) => {
    if (err) throw err
    console.log('types was copied to dist')
  }
)
