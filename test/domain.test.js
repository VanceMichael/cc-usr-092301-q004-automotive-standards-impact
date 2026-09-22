import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parseDomain } from '../src/domain.js';

test('公开领域资料字段完整', async () => {
  const raw = await readFile(new URL('../fixtures/domain.json', import.meta.url), 'utf8');
  const value = parseDomain(raw);
  assert.equal(value.domain, 'automotive-standards-impact');
  assert.ok(value.workflow_states.length >= 4);
});
