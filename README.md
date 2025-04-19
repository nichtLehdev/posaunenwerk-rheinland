# 🧩 Full-Stack Monorepo: T3 + Strapi + Docker

A modern full-stack setup using:

- 🧠 [T3 Stack](https://create.t3.gg/) (Next.js App Router, TypeScript, Tailwind, tRPC, Prisma, Auth.js)
- ✍️ [Strapi](https://strapi.io/) as the headless CMS
- 🐘 PostgreSQL via Docker Compose
- 📦 Monorepo powered by `pnpm`

---

## 📁 Project Structure

```text
my-fullstack-app/
├── apps/
│   ├── web/        # T3 App (Next.js + tRPC + Auth.js)
│   └── cms/        # Strapi CMS
├── docker/
│   └── postgres-init/
│       └── init-users.sh
├── docker-compose.yml
├── pnpm-workspace.yaml
├── .gitignore
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the PostgreSQL database

```bash
docker compose up -d
```

### 3. Start Strapi CMS

```bash
pnpm --filter cms develop
```

### 4. Start the T3 frontend app

```bash
pnpm --filter web dev
```

---

## 🔐 Environment Variables

Each app has its own `.env` file:

- `apps/cms/.env` — Strapi DB credentials
- `apps/web/.env` — Prisma + Auth.js configuration

These are **excluded from version control** via `.gitignore`.

---

## 🛠 Dev Utilities

```bash
# Start both apps (if configured)
pnpm dev

# Recreate and reinitialize the database
docker compose down -v
docker compose up --build
```

---

## 📌 Notes

- PostgreSQL runs in Docker with two users:
  - `strapi_user` → full access to `public` schema
  - `web_user` → full access to `app` schema
- The `init-users.sh` script runs automatically on first DB start.
- Database schemas are separated but share one container for simplicity.

---

## 🧭 Next Steps

- [ ] Add unified authentication via Auth.js
- [ ] Connect frontend to Strapi via REST or GraphQL
- [ ] Build custom tRPC routes with Prisma
