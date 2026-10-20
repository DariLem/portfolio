window.PROJECTS = [
  {
    id: 46,
    name: "Аудит SaaS-конструктора ИИ-ботов перед коммерческим запуском",
    nameEn: "AI Bot Builder SaaS Audit Before Commercial Launch",
    role: "Аудит",
    description: "Провела полный продуктовый аудит SaaS-платформы (конструктор ИИ-ботов) перед масштабным запуском на онлайн-школы и первых бизнес-клиентов. Обнаружила критический баг в биллинге — система некорректно списывала деньги (11 рублей за 6 простых сообщений). Выявила: зависание чата после 3–4 вопросов, поле ввода уходило под экран, подключение к Telegram и ВКонтакте без единой подсказки. Провела конкурентный анализ и расставила приоритеты доработок. Баг устранён до запуска — репутация и деньги первых клиентов сохранены. Продукт направлен на срочную двухнедельную доработку. По итогам получила долгосрочный контракт на развитие продукта.",
    descriptionEn: "Conducted a full product audit of an AI bot builder SaaS platform before its large-scale launch to online schools and first business clients. Found a critical billing bug (11 RUB charged for 6 simple messages). Identified: chat freezing after 3–4 messages, input field going off-screen, no onboarding hints for Telegram and VK integration. Delivered a competitive analysis and prioritised fix list. Bug fixed before launch — client reputation and first-user funds protected. Product sent for urgent 2-week revision. Secured long-term contract to develop the product further.",
    integrations: ["Телеграм", "ВКонтакте"],
  },
  {
    id: 101,
    name: "24Логист — автоматизация контроля водителей для транспортных компаний",
    nameEn: "24Logist — Automated Driver Control for Trucking Companies",
    role: "Сервис",
    description: "24Логист — SaaS-сервис автоматического контроля водителей для транспортных и логистических компаний, который заменяет ручной обзвон диспетчером. Система сама отправляет водителю 4 напоминания по этапам рейса — «Готов к рейсу?», «Забрал груз?», «Как дорога?», «Груз доставлен?» — через WhatsApp, MAX и резервный SMS-канал (МТС), а статус рейса обновляется на live-канбан-доске каждые 10 секунд. Рейсы и водители загружаются из Excel одним файлом, дубли не создаются повторно. Встроена аналитика надёжности: рейтинг водителей и перевозчиков по опозданиям и молчанию, среднее время ответа водителя (в среднем 6 минут), статистика доставки по каналам связи. Данные каждой компании изолированы в отдельной схеме PostgreSQL, все действия менеджеров логируются. Спроектировала архитектуру и разработала сервис целиком: backend на FastAPI, интеграции с WhatsApp/MAX/SMS и фронтенд; сервис развёрнут в продакшене.",
    descriptionEn: "24Logist is a SaaS platform that automates driver control for trucking and logistics companies, replacing manual dispatcher phone calls. It automatically sends drivers four scheduled check-ins per trip — ready to depart, cargo picked up, en-route status, cargo delivered — via WhatsApp, MAX and a backup SMS channel (MTS), with trip status shown on a live Kanban board that refreshes every 10 seconds. Trips and drivers import straight from a single Excel file with automatic duplicate detection. Built-in reliability analytics rank drivers and carriers by delays and unanswered messages and track average driver response time (around 6 minutes). Each company's data is isolated in its own PostgreSQL schema, with full manager action logging. Designed the architecture and built the product end-to-end: FastAPI backend, WhatsApp/MAX/SMS integrations and frontend; deployed to production.",
    integrations: ["WhatsApp", "MAX", "SMS", "Excel", "PostgreSQL", "FastAPI"],
    images: [
      "assets/images/projects/logist/hero.jpg",
      "assets/images/projects/logist/funnel.jpg",
      "assets/images/projects/logist/kanban.jpg",
      "assets/images/projects/logist/channels.jpg",
      "assets/images/projects/logist/analytics.jpg",
      "assets/images/projects/logist/security.jpg"
    ]
  },
  {
    id: 102,
    name: "AI ProfitFlow — ИИ-поиск поставщиков и каналов сбыта",
    nameEn: "AI ProfitFlow — AI-Powered Supplier & Sales Channel Finder",
    role: "Сервис",
    description: "AI ProfitFlow — десктоп-приложение для Windows, которое автоматизирует поиск поставщиков и каналов сбыта с помощью ИИ: от запроса до готового коммерческого предложения в почте, без часов ручного поиска по Google и Excel. Два режима в одном окне: «Поставщики» — где купить нужный товар по городу и региону, и «Каналы сбыта» — кому его продать. ИИ сам генерирует поисковые запросы и разбирает выдачу Google/SerpAPI с резервным каналом через DuckDuckGo, парсит цены, наличие и контакты с сайтов (включая сложные страницы — через Playwright), дедуплицирует домены и отсеивает агрегаторы. Каждое предложение получает ИИ-оценку: плюсы, минусы, риски, рекомендация. Из отобранных позиций одним кликом собирается текст коммерческого предложения и уходит через Gmail (OAuth 2.0) прямо из приложения. Результаты выгружаются в Excel, история поисков и КП хранится в локальной SQLite-базе. Поисковый и аналитический слой работает через ProTalk — единый API к нескольким LLM, Google и Perplexity. Спроектировала архитектуру и разработала продукт целиком: десктоп-интерфейс на CustomTkinter, парсинг и ИИ-интеграции, сервер лицензирования на FastAPI с шифрованием ключей; приложение распространяется как один .exe без установки Python.",
    descriptionEn: "AI ProfitFlow is a Windows desktop app that automates supplier and sales-channel discovery with AI, taking a request all the way to a ready commercial offer in the inbox — no more hours spent manually searching Google and juggling spreadsheets. It has two modes in one window: \"Suppliers\" — where to buy a given product by city and region, and \"Sales Channels\" — who to sell it to. AI generates the search queries itself and parses Google/SerpAPI results with a DuckDuckGo fallback, scrapes prices, availability and contacts from vendor sites (including hard-to-parse pages via Playwright), deduplicates domains and filters out marketplaces. Every offer gets an AI score: pros, cons, risks, recommendation. Selected items are turned into a commercial proposal in one click and sent straight from the app via Gmail (OAuth 2.0). Results export to Excel, with search and proposal history kept in a local SQLite database. The search and analysis layer runs through ProTalk, a single API in front of several LLMs, Google and Perplexity. Designed the architecture and built the product end-to-end: the CustomTkinter desktop UI, scraping and AI integrations, and a FastAPI license server with key encryption; ships as a single .exe with no Python install required.",
    integrations: ["ProTalk API", "Google", "Gmail", "Excel", "Playwright"],
    images: [
      "assets/images/projects/zacupka/cover.jpg",
      "assets/images/projects/zacupka/interface.jpg",
      "assets/images/projects/zacupka/workflow.jpg",
      "assets/images/projects/zacupka/features.jpg",
      "assets/images/projects/zacupka/stack.jpg",
      "assets/images/projects/zacupka/results.jpg"
    ]
  },
  {
    id: 103,
    name: "SEO Agent — ИИ-автопилот для SEO- и GEO-контента",
    nameEn: "SEO Agent — AI Autopilot for SEO & GEO Content",
    role: "Сервис",
    description: "SEO Agent — ИИ-автопилот на Python, который по расписанию собирает ключевые запросы, пишет SEO-статьи под поисковую выдачу и ответы нейросетей (GEO) и публикует их на сайт только после одобрения владельца в Telegram. Цепочка работы: по расписанию (по умолчанию пн и чт в 09:00) Claude предлагает до 30 тем под нишу → агент собирает поисковые подсказки Google, Яндекса, Bing и YouTube и оценивает интерес через Google Trends (опционально — реальную частотность из Яндекс.Вордстата) → запросы кластеризуются, а каждая тема получает оценку соответствия нише 0–10 и проверку на пересечение с уже опубликованными статьями → для топ-3 тем строится план и пишется статья на 1 500–2 500 слов, затем автоматическая SEO-проверка (ключ в заголовке и первых 100 словах, плотность 0,5–2,5 %, структура H2/H3, meta-теги, читабельность) и автоисправление замечаний → готовый текст целиком приходит в Telegram с кнопками «Опубликовать» и «Отклонить» → после одобрения агент одним коммитом добавляет страницу в блог на GitHub Pages, запись в каталог статей и ссылку в sitemap.xml. Под ИИ-поисковики каждая статья оформляется так, чтобы её можно было процитировать: блок «Коротко» с прямым ответом в 2–3 предложениях в самом начале, раздел FAQ с микроразметкой FAQPage, разметка Article (schema.org), canonical, Open Graph, дата обновления и блок об авторе. Чтобы текст не звучал как типовой ИИ-контент, агент использует профиль бизнеса и только реальные факты и кейсы автора — выдумывать цифры, цены и цитаты ему запрещено. Польза: регулярный контент-маркетинг без копирайтера и без ручной рутины — владелец тратит минуты на вычитку, а не часы на семантику и написание; расход на ИИ под контролем (дневной и месячный лимит статей, дешёвая модель для лёгких задач, оценка стоимости одной статьи около $0,13). Рабочий результат в продакшене: блог darilem.com, в котором агент опубликовал серию статей средним объёмом около 2 100 слов с SEO-оценкой 91 из 100. Доступно из РФ: в коммерческой версии ИИ подключается через ProTalk — российский сервис доступа к нейросетям (в том числе семейства Claude), поэтому оплата идёт российской картой, а не нужны ни зарубежный счёт, ни обход блокировок (с российских IP прямые API Anthropic и OpenRouter недоступны). Провайдер переключается в настройках: Anthropic, OpenRouter или ProTalk. Спроектировала и разработала систему целиком: сбор и кластеризация запросов, генерация и проверка статей, Telegram-бот, веб-панель на FastAPI, публикация на GitHub Pages/WordPress/через API, резервные копии базы и развёртывание на VPS как systemd-службы.",
    descriptionEn: "SEO Agent is a Python AI autopilot that collects search queries on a schedule, writes SEO articles built for both search results and AI answer engines (GEO), and publishes them to a website only after the owner approves them in Telegram. The pipeline: on a schedule (Mon and Thu at 09:00 by default) Claude proposes up to 30 topics for the niche → the agent gathers search suggestions from Google, Yandex, Bing and YouTube and gauges interest with Google Trends (optionally real query frequency from Yandex Wordstat) → queries are clustered, and every topic gets a 0–10 niche-fit score plus an overlap check against already published articles → for the top 3 topics it builds an outline and writes a 1,500–2,500-word article, then runs an automatic SEO check (keyword in the title and the first 100 words, 0.5–2.5% density, H2/H3 structure, meta tags, readability) and auto-fixes the findings → the full text lands in Telegram with Publish and Reject buttons → once approved, the agent adds the page to the GitHub Pages blog, the article index and sitemap.xml in a single commit. For AI search engines each article is formatted to be quotable: a \"Short answer\" block with a direct 2–3-sentence answer at the very top, a FAQ section with FAQPage markup, Article schema.org markup, canonical, Open Graph, an updated-on date and an author block. To avoid generic AI-sounding text, the agent works from a business profile and the author's real facts and cases only — inventing numbers, prices or quotes is forbidden. Benefit: steady content marketing without a copywriter or manual routine — the owner spends minutes proofreading instead of hours on keyword research and writing, while AI spend stays under control (daily and monthly article caps, a cheaper model for light tasks, roughly $0.13 per article). Proven in production: the darilem.com blog, where the agent published a series of articles averaging about 2,100 words with an SEO score of 91 out of 100. Works from Russia: the commercial version connects its AI through ProTalk, a Russian gateway to neural networks (including the Claude family), so it can be paid for with a Russian bank card — no foreign account or workaround needed (direct Anthropic and OpenRouter APIs are blocked from Russian IPs). The provider is switched in settings: Anthropic, OpenRouter or ProTalk. Designed and built the whole system: query collection and clustering, article generation and validation, a Telegram bot, a FastAPI web dashboard, publishing to GitHub Pages/WordPress/custom API, database backups and VPS deployment as a systemd service.",
    integrations: ["Claude API", "ProTalk", "Telegram", "Google Trends", "Яндекс.Вордстат", "GitHub Pages", "WordPress", "FastAPI", "SQLite"],
    images: [
      "assets/images/projects/seo-agent/dashboard.jpg",
      "assets/images/projects/seo-agent/clusters.jpg",
      "assets/images/projects/seo-agent/articles.jpg",
      "assets/images/projects/seo-agent/schedule.jpg",
      "assets/images/projects/seo-agent/blog-result.jpg"
    ]
  },
  {
    id: 105,
    name: "Mirra — ИИ-платформа личного бренда для Instagram",
    nameEn: "Mirra — AI Personal-Brand Platform for Instagram",
    role: "Сервис",
    description: "Mirra — веб-платформа для экспертов, коучей и предпринимателей, которая перенимает манеру общения автора, обучает его цифрового двойника по фотографиям, пишет посты в его стиле и публикует их в Instagram: весь цикл личного бренда без съёмок и ежедневного копирайтинга. Цепочка работы: экспресс-интервью из 5 вопросов с ИИ-агентом на Google ADK (или глубокая распаковка — 44 вопроса в 4 блоках: идентичность, профессия, формирующие этапы, внутренний мир; можно отвечать голосом и сохранять черновик) → карточка бренда: ниша, аудитория, ценности, тон, цели и 3 концепции позиционирования на выбор → по 10–15 фотографиям обучается персональная LoRA-модель лица, а дальше любая сцена описывается текстом по-русски, с ручной настройкой силы сходства → ИИ-чат «Контент-план» превращает широкие темы в список конкретных постов, которые одним действием отправляются в черновики и в календарь → копирайтер на Gemini 2.5 Flash пишет текст и слайды карусели в тоне автора, а семантический поиск (эмбеддинги Gemini) подмешивает в пост подходящие личные истории из распаковки → «Агент №2» проверяет пост перед публикацией: лимит Instagram 2 200 символов, хэштеги, призыв к действию, спам-триггеры, оценка первой строки (хука) и прогноз вовлечённости с альтернативными вариантами → симулятор показывает, как пост будет выглядеть в ленте → публикация в Instagram сразу или по расписанию через Publora (карусели, одиночные фото, Reels из своих видео) или выгрузка ZIP со слайдами. Польза: эксперт тратит время на ответы в интервью и вычитку, а не на съёмки, поиск тем и написание текстов; посты звучат его словами, а не как типовая нейросеть, и выходят по плану, а не «то густо, то пусто». Для владельца сервиса есть админ-панель: роли, квоты на фото и хранилище, учёт расходов на генерацию по каждому клиенту, журнал ошибок; все изменяющие действия защищены CSRF-токенами. Статус: закрытый бета-тест на 7 участников; оживление фото и автомонтаж роликов (Remotion) уже собраны и включаются отдельным флагом. Спроектировала и разработала продукт целиком: backend на Flask и SQLite, ИИ-агентов и промпты, обучение LoRA, интеграцию публикации и интерфейс.",
    descriptionEn: "Mirra is a web platform for experts, coaches and entrepreneurs that learns the author's voice, trains a digital twin from their photos, writes posts in their style and publishes them to Instagram — the whole personal-brand cycle without photo shoots or daily copywriting. The pipeline: a 5-question express interview with an AI agent built on Google ADK (or a deep unpacking of 44 questions in 4 blocks — identity, profession, formative years, inner world — with voice input and draft saving) → a brand card: niche, audience, values, tone, goals and 3 positioning concepts to choose from → a personal face LoRA model is trained on 10–15 photos, after which any scene is described in plain Russian text, with manual control of likeness strength → the Content Plan AI chat turns broad themes into a list of concrete posts that go to drafts and the calendar in one action → a Gemini 2.5 Flash copywriter writes the caption and carousel slides in the author's tone, while semantic search (Gemini embeddings) pulls matching personal stories from the interview into the post → \"Agent #2\" checks the post before publishing: Instagram's 2,200-character limit, hashtags, call to action, spam triggers, a score for the opening line (hook) and an engagement forecast with alternative hooks → a simulator shows how the post will look in the feed → it is published to Instagram right away or on schedule via Publora (carousels, single photos, Reels from your own videos), or exported as a ZIP of slides. Benefit: the expert spends time answering the interview and proofreading, not on shoots, topic hunting and writing; posts sound like them rather than generic AI, and go out on a plan instead of in bursts. The owner gets an admin panel with roles, photo and storage quotas, per-client generation cost tracking and an error log; every state-changing action is CSRF-protected. Status: closed beta for 7 participants; photo animation and automatic video montage (Remotion) are built and gated behind a feature flag. Designed and built the whole product: the Flask/SQLite backend, AI agents and prompts, LoRA training, publishing integration and the interface.",
    integrations: ["Gemini API", "Google ADK", "Publora", "Instagram", "Flask", "SQLite"],
    images: [
      "assets/images/projects/mirra/brand-interview.jpg",
      "assets/images/projects/mirra/content-plan.jpg",
      "assets/images/projects/mirra/copywriter.jpg",
      "assets/images/projects/mirra/preview-publish.jpg",
      "assets/images/projects/mirra/calendar.jpg"
    ]
  },
  {
    id: 106,
    name: "AffDesk — Telegram-воронка с ИИ-менеджером и сквозной аналитикой",
    nameEn: "AffDesk — Telegram Funnel with an AI Sales Manager and End-to-End Attribution",
    role: "Сервис",
    description: "AffDesk — SaaS-кабинет для команд, которые привлекают клиентов через Telegram: он соединяет рекламу, Telegram-бота с ИИ-менеджером, партнёрскую программу и клиентскую базу и показывает путь каждого лида от клика до депозита. Цепочка работы: трекинг-ссылка фиксирует UTM, IP и устройство и присваивает клику click_id → кнопка лендинга открывает бота по персональной ссылке t.me/бот?start=click_id, поэтому источник лида известен с первой секунды → бот принимает заявку в канал, приветствует и по ключевым словам понимает, кто готов к диалогу → ИИ-менеджер (по умолчанию gpt-4o-mini, свой ключ OpenAI на каждый проект) ведёт диалог по сценарию из конструктора: продукт, цель, стиль и шаги скрипта собираются в промпт автоматически; ИИ видит гео, язык, регистрацию и число депозитов клиента, подмешивает до 6 подходящих записей базы знаний и отправляет персональную ссылку регистрации → слова-триггеры передают диалог живому менеджеру без затрат на ИИ, ИИ тоже может эскалировать сам → партнёрская платформа присылает постбэки (регистрация, первый депозит, повторные депозиты, выводы, комиссии; готовые шаблоны Pocket Partners и универсальные вебхуки), и они привязываются к тому же лиду по click_id → первый депозит автоматически выдаёт трейдеру одноразовую ссылку в закрытый VIP-канал по правилам с порогом суммы → серверные конверсии уходят в Facebook Conversions API с дедупликацией по event_id → рассылки по сегментам (статус диалога, гео, наличие депозита, теги) с прогрессом в реальном времени и защитой от дублей. В кабинете 9 разделов: дашборд, боты, рассылки, клиенты (импорт из xlsx, csv и Google Sheets, цветные теги, история диалога и заметки), трейдеры с воронкой «клики → атрибуция → регистрации → FTD» и таблицей кампаний с выручкой и комиссией, доступ к каналам, база знаний с автоисточниками (RSS и веб-страницы по расписанию), события и настройки. Надёжность: идемпотентная обработка постбэков, автоповтор неудачных событий, отдельная очередь проблемных событий и журнал для аудита. Польза: видно, какая реклама реально приносит депозиты; лиды получают ответ мгновенно и круглосуточно, а менеджеры — только тёплые диалоги с историей переписки; VIP-доступ и прогрев работают без ручной рутины. Платформа мультитенантная: данные каждого кабинета изолированы, вход по JWT с bcrypt, токены ботов и API-ключи хранятся зашифрованными, есть панель суперадминистратора с тарифами (от 2 900 до 39 000 ₽ в месяц, включая white-label). Спроектировала и разработала сервис целиком: backend на FastAPI с PostgreSQL, Redis и Celery, Telegram-ботов на aiogram, фронтенд на Next.js, развёртывание в Docker с автодеплоем через GitHub Actions; сервис работает в продакшене.",
    descriptionEn: "AffDesk is a SaaS control panel for teams that acquire customers through Telegram: it ties together advertising, a Telegram bot with an AI sales manager, an affiliate program and the customer base, and shows each lead's path from click to deposit. The pipeline: a tracking link records UTMs, IP and device and assigns the click a click_id → the landing-page button opens the bot via a personal deep link t.me/bot?start=click_id, so the lead's source is known from the first second → the bot approves the channel join request, sends a welcome and uses keywords to tell who is ready to talk → the AI manager (gpt-4o-mini by default, with a separate OpenAI key per project) runs the conversation from a scenario builder: product, goal, style and script steps are compiled into the prompt automatically; the AI sees the client's geo, language, registration and deposit count, injects up to 6 relevant knowledge-base entries and sends a personal registration link → trigger words hand the chat to a human manager without spending AI tokens, and the AI can escalate on its own → the affiliate platform sends postbacks (registration, first deposit, repeat deposits, withdrawals, commissions; ready-made Pocket Partners templates plus generic webhooks), which attach to the same lead by click_id → a first deposit automatically gives the trader a one-time invite link to a private VIP channel, based on rules with a minimum deposit → server-side conversions go to the Facebook Conversions API with event_id deduplication → segmented broadcasts (conversation status, geo, deposit, tags) with live progress and duplicate protection. The panel has 9 sections: dashboard, bots, broadcasts, clients (import from xlsx, csv and Google Sheets, colored tags, chat history and notes), traders with a clicks → attribution → registrations → FTD funnel and a campaign table with revenue and commission, channel access, a knowledge base with auto-sources (RSS and web pages on a schedule), events and settings. Reliability: idempotent postback processing, automatic retries of failed events, a dead-letter queue and an audit log. Benefit: you see which ads actually bring deposits; leads get an instant reply around the clock while managers receive only warm conversations with full history; VIP access and nurturing run without manual routine. The platform is multi-tenant: each cabinet's data is isolated, login uses JWT with bcrypt, bot tokens and API keys are stored encrypted, and a superadmin panel manages plans (from 2,900 to 39,000 RUB per month, including white-label). Designed and built the whole service: a FastAPI backend with PostgreSQL, Redis and Celery, Telegram bots on aiogram, a Next.js frontend, and Docker deployment with auto-deploy via GitHub Actions; the service runs in production.",
    integrations: ["Telegram", "OpenAI API", "Facebook Conversions API", "Pocket Partners", "Google Sheets", "FastAPI", "PostgreSQL", "Next.js"],
    images: [
      "assets/images/projects/affdesk/funnel-campaigns.jpg",
      "assets/images/projects/affdesk/ai-scenario.jpg",
      "assets/images/projects/affdesk/clients.jpg",
      "assets/images/projects/affdesk/client-card.jpg",
      "assets/images/projects/affdesk/mailings.jpg",
      "assets/images/projects/affdesk/channel-access.jpg"
    ]
  },
  {
    id: 100,
    name: "Садовод — AI-помощник огородника",
    nameEn: "Sadovod — AI Garden Assistant",
    role: "Мобильное приложение",
    description: "Интеллектуальное мобильное приложение для садоводов и огородников. Включает в себя AI-аватара для консультаций, базу данных посадок, умные уведомления о поливе с учетом погоды и дневник роста растений. Помогает автоматизировать уход за садом и повысить урожайность.",
    descriptionEn: "Smart mobile application for gardeners. Features an AI avatar for consultations, planting database, smart watering notifications based on weather, and a plant growth diary. Helps automate garden care and increase yields.",
    integrations: ["Flutter", "Firebase", "OpenAI API", "Weather API", "RuStore"],
    rustore: "https://www.rustore.ru/catalog/app/com.sadovod.sadovod",
    images: [
      "assets/images/projects/sadovod/photo_5438508936089770118_y.jpg",
      "assets/images/projects/sadovod/photo_5438508936089770120_y.jpg",
      "assets/images/projects/sadovod/photo_5438508936089770121_y.jpg",
      "assets/images/projects/sadovod/photo_5438508936089770122_y.jpg",
      "assets/images/projects/sadovod/photo_5438508936089770123_y.jpg"
    ]
  },
  {
    id: 1,
    name: "Нейро-сотрудник по продаже растений и препаратов",
    nameEn: "Plant & Supplement Sales Assistant",
    role: "Консультант",
    integrations: ["Сайт"],
    youtube: "https://youtube.com/shorts/soTUsz_SibQ",
    description: "Консультирует клиентов по ассортименту растений и препаратов, помогает с выбором и оформлением заказа."
  },
  {
    id: 2,
    name: "Нейро-сотрудник iWAI для курса E-commerce 360",
    nameEn: "iWAI E-commerce 360 Course Consultant",
    role: "Консультант",
    integrations: ["Сайт"],
    youtube: "https://youtube.com/shorts/O_-RVWJ6qFw",
    description: "Отвечает на вопросы о курсе E-commerce 360, помогает потенциальным студентам с записью и выбором формата обучения."
  },
  {
    id: 3,
    name: "Нейро-сотрудник для департамента специализированного питания Danone Berkut",
    nameEn: "Danone Berkut Specialized Nutrition Consultant",
    role: "Консультант",
    integrations: ["Сайт"],
    youtube: null,
    description: "Консультирует по продуктам специализированного питания Danone, помогает специалистам и клиентам найти подходящее решение."
  },
  {
    id: 4,
    name: "Нейро-сотрудник для медицинского центра в Испании",
    nameEn: "Medical Center Consultant (Spain)",
    role: "Консультант",
    integrations: ["Сайт"],
    youtube: null,
    description: "Консультирует пациентов медицинского центра, отвечает на вопросы об услугах и помогает записаться на приём."
  },
  {
    id: 5,
    name: "Нейро-сотрудник Лена для мебельной фабрики",
    nameEn: "Lena — AI Consultant for a Furniture Factory",
    role: "Консультант",
    integrations: ["WhatsApp", "Битрикс24", "Сайт", "Телеграм"],
    youtube: null,
    description: "Нейро-сотрудник Лена — ИИ-консультант (чат-бот) для мебельной фабрики и её магазинов, который в WhatsApp, Telegram и на сайте отвечает на частые вопросы покупателей до и после покупки мебели и даёт точную информацию о товарах и услугах компании. Запрос клиента: создать нейро-сотрудника для ответов на часто задаваемые вопросы и консультирования клиентов до и после покупки. Что умеет Лена: рассказывает о продукции и каталоге товаров; консультирует по вопросам партнёрства и о самой фабрике; даёт ссылки на акции, адреса магазинов и гарантийные обязательства; присылает инструкцию по сборке мебели; сложные вопросы и оформление заказов передаёт оператору. Какие проблемы закрывает: клиент получает ответ сразу, без ожидания менеджера; снижается нагрузка на операторов — типовые вопросы больше не отнимают их время; растёт удовлетворённость клиентов благодаря оперативным консультациям; проще узнать всё о товарах и условиях покупки в одном диалоге. Польза для бизнеса: лучше клиентский сервис и выше лояльность покупателей к компании, а операторы занимаются заказами и сложными случаями, а не повторяющимися вопросами.",
    descriptionEn: "Lena is an AI consultant (chatbot) for a furniture factory and its stores that answers customers' frequent questions on WhatsApp, Telegram and the website before and after a furniture purchase and gives accurate information about the company's products and services. The client's request: build an AI employee to answer FAQs and advise customers before and after they buy. What Lena does: presents the products and the catalog; answers questions about partnership and the factory itself; shares links to promotions, store addresses and warranty terms; sends furniture assembly instructions; hands complex questions and orders over to a human operator. Problems it solves: customers get an answer instantly instead of waiting for a manager; operator workload drops because routine questions no longer take their time; customer satisfaction grows thanks to fast consultations; everything about products and purchase terms is available in one conversation. Business benefit: better customer service and stronger customer loyalty, while operators focus on orders and complex cases instead of repetitive questions."
  },
  {
    id: 6,
    name: "Нейро-сотрудник для магазина ТМ Технолоджи",
    nameEn: "TM Technology Store Consultant",
    role: "Консультант",
    integrations: ["Сайт"],
    youtube: null,
    description: "Помогает посетителям магазина с выбором техники, отвечает на вопросы о характеристиках и наличии товаров."
  },
  {
    id: 7,
    name: "Нейро-сотрудник для риэлтерской компании",
    nameEn: "Real Estate Agency Lead Specialist",
    role: "Специалист по заявкам",
    integrations: ["WhatsApp", "Битрикс24", "Сайт", "Телеграм"],
    youtube: null,
    description: "Принимает заявки от клиентов, квалифицирует запросы на покупку и аренду недвижимости и передаёт их риэлторам."
  },
  {
    id: 8,
    name: "Нейро-сотрудник для Компании 5карт",
    nameEn: "5kart Company Consultant",
    role: "Консультант",
    integrations: ["Notion", "Сайт"],
    youtube: null,
    description: "Консультирует клиентов компании 5карт по продуктам и услугам, принимает обращения и обрабатывает запросы."
  },
  {
    id: 9,
    name: "Нейро-сотрудник для компании по перетяжке мебели",
    nameEn: "Furniture Reupholstery Company Consultant",
    role: "Консультант",
    integrations: ["WhatsApp", "Телеграм"],
    youtube: null,
    description: "Консультирует клиентов по услугам перетяжки мебели, помогает рассчитать стоимость и записаться на замер."
  },
  {
    id: 10,
    name: "Нейро-сотрудник для компании по продаже автозапчастей из Китая",
    nameEn: "Chinese Auto Parts Sales Consultant",
    role: "Консультант",
    integrations: ["WhatsApp", "Битрикс24", "Инстаграм", "Сайт", "Телеграм"],
    youtube: null,
    description: "Помогает клиентам подобрать и заказать автозапчасти из Китая, отвечает на вопросы о наличии и сроках доставки."
  },
  {
    id: 11,
    name: "Нейро-сотрудник для салона продажи Б/У автомобилей",
    nameEn: "Used Car Dealership Lead Specialist",
    role: "Специалист по заявкам",
    integrations: ["Сайт"],
    youtube: null,
    description: "Собирает заявки от покупателей подержанных автомобилей, уточняет параметры поиска и передаёт менеджерам салона."
  },
  {
    id: 12,
    name: "Нейро-сотрудник для интернет-магазина автокосметики",
    nameEn: "Auto Cosmetics Online Store Consultant",
    role: "Консультант",
    integrations: ["WhatsApp", "Телеграм"],
    youtube: null,
    description: "Консультирует покупателей по ассортименту автокосметики, рекомендует продукты под конкретные задачи."
  },
  {
    id: 13,
    name: "Нейро-сотрудник для аренды недвижимости sergiotabasco",
    nameEn: "Sergiotabasco Property Rental Specialist",
    role: "Специалист по заявкам",
    integrations: ["WhatsApp", "Телеграм"],
    youtube: null,
    description: "Принимает заявки на аренду недвижимости, квалифицирует клиентов и организует показы объектов."
  },
  {
    id: 14,
    name: "Нейро-сотрудник для ответов на вопросы о книге Творец в Творце",
    nameEn: "Creator in the Creator Book Q&A Mentor",
    role: "Наставник",
    integrations: ["WhatsApp", "Instagram", "Телеграм"],
    youtube: null,
    description: "Отвечает на вопросы читателей о книге «Творец в Творце», помогает глубже понять концепции и идеи автора."
  },
  {
    id: 15,
    name: "Нейро-сотрудник для туристической компании Авиафлот (трансфер)",
    nameEn: "Aviaflot Travel Transfer Specialist",
    role: "Специалист по заявкам",
    integrations: ["Битрикс24", "Сайт"],
    youtube: null,
    description: "Принимает заявки на трансферы, уточняет маршрут и детали поездки, передаёт информацию в Битрикс24."
  },
  {
    id: 16,
    name: "Нейро-сотрудник для маркетолога",
    nameEn: "Marketer Personal Assistant",
    role: "Личный ассистент",
    integrations: ["Google Календарь", "Телеграм"],
    youtube: null,
    description: "Помогает маркетологу планировать задачи, управлять расписанием через Google Календарь и не терять важные дедлайны."
  },
  {
    id: 17,
    name: "Нейро-сотрудник для школы Айтигенио",
    nameEn: "Aitygenio School Consultant",
    role: "Консультант",
    integrations: ["WhatsApp", "Сайт", "Телеграм"],
    youtube: null,
    description: "Консультирует потенциальных студентов школы Айтигенио по программам обучения и условиям поступления."
  },
  {
    id: 18,
    name: "Нейро-сотрудник для сервисного центра Стандарт Н",
    nameEn: "Standart N Service Center Consultant",
    role: "Консультант",
    integrations: ["Сайт", "Телеграм"],
    youtube: null,
    description: "Консультирует клиентов сервисного центра по видам ремонта, срокам и стоимости услуг."
  },
  {
    id: 19,
    name: "Нейро-сотрудник для сервиса по массовым рассылкам в WhatsApp",
    nameEn: "WhatsApp Bulk Messaging Service Internal Bot",
    role: "Внутренние процессы",
    integrations: ["Телеграм"],
    youtube: null,
    description: "Автоматизирует внутренние операционные процессы сервиса массовых рассылок, снижая нагрузку на команду."
  },
  {
    id: 20,
    name: "Нейро-сотрудник для продажи по подписке в Телеграм",
    nameEn: "Telegram Subscription Sales Assistant",
    role: "Личный ассистент",
    integrations: ["Телеграм"],
    youtube: null,
    description: "Сопровождает подписчиков Telegram-канала, помогает с оформлением подписки и отвечает на вопросы об условиях."
  },
  {
    id: 21,
    name: "Нейро-сотрудник для подбора мероприятия (полноценный бизнес в одном боте)",
    nameEn: "Event Selection Sales Manager Bot",
    role: "Менеджер по продажам",
    integrations: ["Notion", "Телеграм"],
    youtube: null,
    description: "Полноценный бизнес-бот: подбирает мероприятия под запрос клиента, ведёт продажу билетов и фиксирует данные в Notion."
  },
  {
    id: 22,
    name: "Нейро-сотрудник для записи на консультацию",
    nameEn: "Consultation Booking Sales Manager",
    role: "Менеджер по продажам",
    integrations: ["WhatsApp", "Сайт", "Телеграм"],
    youtube: null,
    description: "Записывает клиентов на консультации, квалифицирует запросы и увеличивает конверсию входящего трафика."
  },
  {
    id: 23,
    name: "Нейро-сотрудник для агентства недвижимости",
    nameEn: "Real Estate Agency Sales Manager",
    role: "Менеджер по продажам",
    integrations: ["WhatsApp", "Битрикс24", "Сайт", "Телеграм"],
    youtube: "https://youtube.com/shorts/W0AnLbsIWMc",
    description: "Ведёт продажи в агентстве недвижимости: квалифицирует клиентов, презентует объекты и передаёт горячие лиды в Битрикс24."
  },
  {
    id: 24,
    name: "Эксперт в области виниловых пластинок",
    nameEn: "Vinyl Records Expert Consultant",
    role: "Консультант",
    integrations: ["Телеграм"],
    youtube: "https://youtube.com/shorts/qjJ6ObKbVWY",
    description: "Консультирует коллекционеров и любителей музыки по виниловым пластинкам: история, редкость, стоимость и уход."
  },
  {
    id: 25,
    name: "Нейро-сотрудник для магазина продуктов",
    nameEn: "Grocery Store Consultant",
    role: "Консультант",
    integrations: ["Битрикс24", "Сайт"],
    youtube: "https://youtube.com/shorts/DSK6GVJzjXg",
    description: "Помогает покупателям с выбором продуктов, отвечает на вопросы о наличии и составе товаров."
  },
  {
    id: 26,
    name: "Нейро-сотрудник для бизнес форума Россия.Фитнес",
    nameEn: "Russia.Fitness Business Forum Consultant",
    role: "Консультант",
    integrations: ["WhatsApp", "Телеграм"],
    youtube: null,
    description: "Консультирует участников форума по программе, спикерам и условиям участия в бизнес-форуме фитнес-индустрии."
  },
  {
    id: 27,
    name: "Нейро-психолог",
    nameEn: "Neuro-Psychologist Mentor Bot",
    role: "Наставник",
    integrations: ["Телеграм"],
    youtube: "https://youtube.com/shorts/N2MA91OfrJQ",
    description: "Выступает в роли психолога-наставника: задаёт вопросы, помогает разобраться в ситуации и предлагает техники саморефлексии."
  },
  {
    id: 28,
    name: "Экосистема для обучения сотрудников компании",
    nameEn: "Corporate Employee Training Ecosystem",
    role: "Наставник",
    integrations: ["Notion", "Телеграм"],
    youtube: null,
    description: "Обучает новых и действующих сотрудников через структурированные модули, тесты и базу знаний в Notion."
  },
  {
    id: 29,
    name: "Нейро-сотрудник для школы подготовки к ЕГЭ. Экзаменатор",
    nameEn: "Unified State Exam Prep School — Examiner",
    role: "Наставник",
    integrations: ["Google таблица", "Телеграм"],
    youtube: null,
    description: "Проводит пробные экзамены по материалам ЕГЭ, оценивает ответы учеников и фиксирует результаты в Google Таблицах."
  },
  {
    id: 30,
    name: "Нейро-сотрудник для автоматизации согласования оплаты",
    nameEn: "Payment Approval Automation Bot",
    role: "Внутренние процессы",
    integrations: ["API Телеграм", "Google таблица"],
    youtube: "https://youtube.com/shorts/STNuDSMKAl4",
    description: "Автоматизирует процесс согласования платежей внутри компании: уведомляет ответственных и фиксирует статусы в Google Таблицах."
  },
  {
    id: 31,
    name: "Нейро-сотрудник для Школы подготовки к ЕГЭ. Учитель биологии",
    nameEn: "Unified State Exam Prep — Biology Teacher",
    role: "Наставник",
    integrations: ["Google таблица", "Телеграм"],
    youtube: "https://youtube.com/shorts/WoIF-M-iQqY",
    description: "Объясняет темы по биологии в формате ЕГЭ, отвечает на вопросы учеников и отслеживает прогресс в Google Таблицах."
  },
  {
    id: 32,
    name: "Нейро-сотрудник Координатор проектов",
    nameEn: "Project Coordinator Internal Bot",
    role: "Внутренние процессы",
    integrations: ["API Телеграм", "Google таблица", "Телеграм"],
    youtube: null,
    description: "Координирует выполнение задач внутри команды, напоминает о дедлайнах и обновляет статусы проектов в Google Таблицах."
  },
  {
    id: 33,
    name: "Нейро-сотрудник консультант по продаже элитной недвижимости",
    nameEn: "Luxury Real Estate Sales Consultant",
    role: "Консультант",
    integrations: ["AmoCRM", "WhatsApp", "Телеграм"],
    youtube: null,
    description: "Консультирует состоятельных клиентов по элитной недвижимости, квалифицирует запросы и передаёт сделки в AmoCRM."
  },
  {
    id: 34,
    name: "Нейро-сотрудник Экзаменатор",
    nameEn: "Examiner Mentor Bot",
    role: "Наставник",
    integrations: ["Google таблица", "Телеграм"],
    youtube: null,
    description: "Проводит тестирование и экзамены, автоматически проверяет ответы и записывает результаты в Google Таблицы."
  },
  {
    id: 35,
    name: "Нейро-сотрудник туроператор",
    nameEn: "Tour Operator Consultant Bot",
    role: "Консультант",
    integrations: ["Google таблица", "Телеграм"],
    youtube: null,
    description: "Помогает клиентам подобрать туры по параметрам, отвечает на вопросы о направлениях и оформляет заявки."
  },
  {
    id: 36,
    name: "Нейро-сотрудник по оформлению договоров",
    nameEn: "Contract Processing Internal Bot",
    role: "Внутренние процессы",
    integrations: ["Телеграм"],
    youtube: null,
    description: "Автоматизирует сбор данных и оформление договоров, снижая время на рутинную документацию."
  },
  {
    id: 37,
    name: "Нейро-сотрудник Фотограф",
    nameEn: "Photographer Personal Assistant",
    role: "Личный ассистент",
    integrations: ["Сторонний сервис", "Телеграм"],
    youtube: null,
    description: "Помогает фотографу управлять заявками, расписанием съёмок и коммуникацией с клиентами."
  },
  {
    id: 38,
    name: "Нейро-сотрудник Преподаватель для обучения сотрудников",
    nameEn: "Corporate Training Teacher Bot",
    role: "Наставник",
    integrations: ["API Телеграм", "Google таблица", "Телеграм"],
    youtube: null,
    description: "Обучает сотрудников корпоративным стандартам и процедурам, проводит тесты и фиксирует прогресс."
  },
  {
    id: 39,
    name: "Нейро-сотрудник Повар",
    nameEn: "Personal Chef Assistant",
    role: "Личный ассистент",
    integrations: ["Notion", "Телеграм"],
    youtube: null,
    description: "Помогает планировать меню, предлагает рецепты под доступные продукты и ведёт базу кулинарных идей в Notion."
  },
  {
    id: 40,
    name: "Консультант по трейдингу",
    nameEn: "Trading Consultant Bot",
    role: "Консультант",
    integrations: ["API Телеграм", "API ПроТолк", "Google таблица", "Телеграм"],
    youtube: null,
    description: "Консультирует трейдеров по стратегиям, отвечает на вопросы о рынке и фиксирует аналитику в Google Таблицах."
  },
  {
    id: 41,
    name: "HR по холодной базе",
    nameEn: "Cold Database HR Manager",
    role: "HR-менеджер",
    integrations: ["API Телеграм", "НН.ру", "Телеграм"],
    youtube: null,
    description: "Обрабатывает холодную базу кандидатов с HH.ru, проводит первичный скрининг и отбирает подходящих соискателей."
  },
  {
    id: 42,
    name: "Поисковик по бьюти-трендам",
    nameEn: "Beauty Trends Search Assistant",
    role: "Личный ассистент",
    integrations: ["OpenAI", "Телеграм"],
    youtube: null,
    description: "Мониторит актуальные бьюти-тренды и собирает подборки идей для специалистов индустрии красоты."
  },
  {
    id: 43,
    name: "HR‑менеджер по откликам",
    nameEn: "Job Applications HR Manager",
    role: "HR-менеджер",
    integrations: ["API Телеграм", "API ПроТолк", "НН.ру", "Телеграм"],
    youtube: null,
    description: "Автоматически обрабатывает отклики с HH.ru, квалифицирует кандидатов и передаёт лучших HR-специалисту."
  },
  {
    id: 44,
    name: "Контент менеджер для Wildberries",
    nameEn: "Wildberries Content Manager Assistant",
    role: "Личный ассистент",
    integrations: ["Wildberries API", "Телеграм"],
    youtube: null,
    description: "Помогает селлерам Wildberries управлять карточками товаров, создавать описания и отслеживать аналитику через API."
  },
  {
    id: 45,
    name: "Нейро-сотрудник консультант",
    nameEn: "Universal Sales Consultant",
    role: "Консультант",
    integrations: ["WhatsApp", "Телеграм"],
    youtube: null,
    description: "Универсальный консультант для бизнеса: отвечает на вопросы клиентов, квалифицирует запросы и поддерживает продажи."
  }
];
