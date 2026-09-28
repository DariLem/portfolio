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
    name: "Нейро-сотрудник для мебельной фабрики Мебельрус",
    nameEn: "Mebelrus Furniture Factory Consultant",
    role: "Консультант",
    integrations: ["WhatsApp", "Битрикс24", "Сайт", "Телеграм"],
    youtube: null,
    description: "Консультирует покупателей по каталогу мебели, помогает с подбором и передаёт заявки менеджерам в Битрикс24."
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
