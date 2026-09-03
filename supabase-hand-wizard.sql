-- 손안의 마법사 A01 · 짧은 개인 링크 저장소
-- Supabase > SQL Editor에서 한 번만 실행하세요.

create table if not exists public.hand_wizard_cards (
  id text primary key,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.hand_wizard_cards enable row level security;

-- 익명 사용자는 새 카드 생성만 허용합니다.
drop policy if exists "hand wizard public insert" on public.hand_wizard_cards;
create policy "hand wizard public insert"
on public.hand_wizard_cards
for insert
to anon, authenticated
with check (
  id ~ '^[A-Za-z0-9]{8,24}$'
  and jsonb_typeof(payload) = 'object'
  and coalesce(length(payload->>'name'), 0) between 1 and 20
  and coalesce(length(payload->>'message'), 0) <= 240
);

grant insert on table public.hand_wizard_cards to anon, authenticated;
revoke select, update, delete on table public.hand_wizard_cards from anon, authenticated;

-- 전체 목록 조회를 막고, 충분히 긴 무작위 ID를 알고 있을 때만 1건을 반환합니다.
create or replace function public.get_hand_wizard_card(p_id text)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select payload
  from public.hand_wizard_cards
  where id = p_id
    and p_id ~ '^[A-Za-z0-9]{8,24}$'
  limit 1;
$$;

revoke all on function public.get_hand_wizard_card(text) from public;
grant execute on function public.get_hand_wizard_card(text) to anon, authenticated;

-- UPDATE / DELETE는 공개 브라우저에서 허용하지 않습니다.
