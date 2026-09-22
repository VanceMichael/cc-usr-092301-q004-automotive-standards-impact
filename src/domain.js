// 解析项目共享的领域资料。
export function parseDomain(raw) {
  const value = JSON.parse(raw);
  const complete = value.domain && value.version >= 1 && value.sample_id && value.record_types?.length >= 4 && value.workflow_states?.length >= 4 && value.facts?.length >= 3 && value.sample;
  if (!complete) throw new Error('领域资料缺少必要内容');
  return value;
}
