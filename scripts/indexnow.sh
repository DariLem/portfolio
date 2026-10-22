#!/usr/bin/env bash
# Отправка URL в IndexNow (Bing + Яндекс).
#   scripts/indexnow.sh                  — все URL из sitemap.xml
#   scripts/indexnow.sh URL [URL ...]    — только указанные (например, новая статья)
# Файл ключа https://darilem.com/<KEY>.txt должен лежать в корне сайта и не удаляться.
set -euo pipefail

HOST="darilem.com"
KEY="5b03c97ae893305d8fbcf11efe9d592e"
ENDPOINTS=("https://www.bing.com/indexnow" "https://yandex.com/indexnow")

if [ $# -gt 0 ]; then
  urls=("$@")
else
  mapfile -t urls < <(curl -fsS "https://$HOST/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's/<\/\?loc>//g')
fi

for u in "${urls[@]}"; do
  case "$u" in
    "https://$HOST/"*) ;;
    *) echo "Пропущен (не $HOST): $u" >&2; exit 1 ;;
  esac
done

list=$(printf '"%s",' "${urls[@]}")
payload="{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":[${list%,}]}"

echo "URL к отправке: ${#urls[@]}"
for ep in "${ENDPOINTS[@]}"; do
  code=$(curl -sS -o /dev/null -w '%{http_code}' -X POST "$ep" \
    -H 'Content-Type: application/json; charset=utf-8' --data "$payload")
  echo "$ep -> HTTP $code"
done
# 200/202 — принято; 403 — ключ не найден на сайте; 422 — URL не с этого домена; 429 — слишком часто
