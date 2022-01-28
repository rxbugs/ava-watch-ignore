import path from 'path'
import { promises as fsPromises } from 'fs'

import test from 'ava'
import del from 'del'
import mkdirp from 'mkdirp'

test.beforeEach(async (t) => {
  const root = 'tmp'
  await mkdirp(root)
  t.context.dst = await fsPromises.mkdtemp(path.join(root, 'foo-'))
})

test.afterEach.always(async (t) => {
  await del(t.context.dst)
})

test('bug', async (t) => {
  t.pass()
})

