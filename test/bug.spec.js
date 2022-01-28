import path from 'path'
import { promises as fsPromises } from 'fs'

import test from 'ava'
import mkdirp from 'mkdirp'

test.beforeEach(async (t) => {
  const root = 'tmp'
  await mkdirp(root)
  t.context.dst = await fsPromises.mkdtemp(path.join(root, 'foo-'))
})

test('bug', async (t) => {
  await fsPromises.writeFile(path.join(t.context.dst, 'foo'), 'bar')
  t.pass()
})

