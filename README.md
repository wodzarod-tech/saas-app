This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

#################################################

## Project

* SaaS App Full Course 2025 | Launch Your SaaS in Under 7 Days with Next JS, Supabase & Payments **
https://www.youtube.com/watch?v=XUkNR-JfHwo&t=358s

Web App Converso is a LMS SaaS app (cloud-based Learning Management System as Software as a Service)

* Features:
AI teaching assistant
AI powered learning companion, personal education platform, real-time, voice-driven.
Modern responsive UI
Multiple plans billing

* IDE:
WebStorm: include Junie (AI agent, analyze codebase)
Visual Studio Code

* Development:

- Video Kit: https://jsmastery.com/video-kit/4c101dac-fbff-4bc0-82ec-1e11cbfd03c9

	Code: https://github.com/adrianhajdin/saas-app
		doc/saas-app-main.zip

	Figma Design: https://www.figma.com/design/Qb3bUKeK4yf81ytdjBb7pk/Converso-%E2%80%94-LMS-SaaS-Platform?node-id=2-2&p=f&t=B22vx0eFtkvTffb8-0
	
	Assets: doc/assets.zip

- Create project:
command: npx create-next-app@latest ./
	TypeScript: Yes
	ESLint: Yes
	React Compiler: Yes
	Tailwind CSS: Yes
	src/ directory: No
	App Router: Yes
	Turbopack: Yes
	import alias: No

Next.js App Structure (App Router):
my-next-app/
├─ app/	: App Router = every folder ia a route
│  ├─ layout.tsx : Global layout (wraps all pages)
│  ├─ page.tsx : Home page (/, like index.html), http://localhost:3000/
│  ├─ globals.css : Global styles (like styles.css)
│  ├─ favicon.ico
│  ├─ api : API routes (Backend inside Next.js)
│  └─ (other routes...)
│
├─ public/ : static assets
│  └─ images, fonts, icons...
│
├─ node_modules/
│
├─ package.json : dependencies, scripts
├─ next.config.ts : Framework configuration
├─ jsconfig.json / tsconfig.json
├─ .env.local : Environment variables
└─ README.md

Example:
app/
 └─ exam/
    └─ [id]/
       └─ page.js : URL = /exam/123

page.jsx:
export default function Exam({ params }) {
	return <h1>Exam {params.id}</h1>;
}

.env.local:
	NEXT_PUBLIC_ → browser
	Without it → server only

- Server vs Client Components:
a. Server Component (default): Runs on server

export default function Page() {
  return <h1>Server rendered</h1>;
}

b. Client Component:
Needed for:
	useState
	useEffect
	Click handlers

"use client";

export default function Button() {
  return <button>Click</button>;
}

- Common real-world structure:
app/
├─ (auth)/
│  ├─ login/page.js
│  └─ register/page.js
├─ dashboard/
│  ├─ page.js
│  └─ layout.js
├─ exams/
│  ├─ page.js
│  └─ [id]/page.js
├─ api/
│  └─ exams/route.js
└─ page.js

- Copy subfolders from assets.zip (app, constants, lib, public, types):

app/
	layout.tsx
	page.tsx
	global.css: extract theme and styles from Figma design -> Tailwind CSS 
	course
		Add package tw-animate-css:
			command: npm i tw-animate-css
	favicon.ico: app icon

public/
	icons: .svg
	images: .svg

- Constants/index.ts

- lib/utils.ts
Voice functionalities: configureAssistant

- types/index.d.ts
type definition, interfaces

- Frontend:
CSS framework style: Tailwindcss (for Components, Animations)

CSS components: Shadcn (for Components, work with Tailwindcss)
	command: npx shadcn@latest init // install https://ui.shadcn.com/docs
	
	shadcn@3.6.2
	base color = Neutral
	Use --legacy-peer-deps // deps for Tailwind v4 and React 19
	
	Add button component:
		command: npx shadcn@latest add button
		see components/ui/button.tsx
	
	app/page.tsx

- Run App:
command: npm run dev

- Routes Setup: 19:51 min
app/sign-in/page.tsx

- Load code in Github: saas-app
git init
git add .
git commit -m 'initial commit'
git branch -M main
git remote add origin https://github.com/wodzarod-tech/saas-app.git
git push -u origin main
	
- Develop Navbar: 27:28 min
components/
	Navbar.tsx
	NavItems.tsx







render Navbar component into all pages:
app/layout.tsx, RootLayout
	
- Home Page & Companion Card: 37:14 min

components/CompanionCard.tsx
components/CompanionsList.tsx
components/CTA.tsx
app/page.tsx

- Home Page - Companions List & CTA: 47:37 min

Install shadcn table component:
	command: npx shadcn@latest add table
	https://ui.shadcn.com/docs/components/table

components/CompanionsList.tsx
constants/index.tsx

- Companion Form: 1:05:06
Companion Builder: form to store companions

Install shadcn form component: npx shadcn@latest add form
https://ui.shadcn.com/docs/components/form
	for: @/components/ui/form
	
components/CompanionForm.tsx

Install shadcn form component textarea: npx shadcn@latest add input textarea
	for: @/components/ui/input
	
Install shadcn select component: npx shadcn@latest add select
	for: @/components/ui/select
	
- Clerk Auth: 1:19:16

https://clerk.com/
	dashboard
	
	create application: auth-demo
	
	/*
	Junie: JetBrains coding agent, LLM
		https://www.jetbrains.com/junie/
		
	In WebStorm, press Ctrl + Shift + A, search Junie, copy the prompt
	*/
	
	npm install @clerk/nextjs
	
	.env.local.example
	.env.local // valid keys
		In your Clerk dashboard, Configure, Instance/API keys
			NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
			CLERK_SECRET_KEY
			
	proxy.ts
	
	app/layout.tsx: ClerkProvider
	components/Navbar.tsx
		SignedOut
		SignedIn
		
	Clerk: Build a sign-in-or-up page	
		app/sign-in/[[...sign-in]]/page.tsx
		
		Update your environment variables
			NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
			NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
			NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

	Clerk dashboard/Configure/Account Portal
		Appearance
		
	app/layout.tsx
	
- Clerk Billing: 1:30:33

Clerk dashboard/Billing/Create a plan

	Plan: Free
		Name: Basic Plan
		Key: basic
		Description: Perfect for testing the waters.
			
		Add feature
			Name: 10 Conversations/month
			Name: 3 Active Companions
			Name: Basic Session Recaps
	
	Plan: Core Learner
		Name: Core Learner
		Key: core
		Description: More Companions. More growth.
		
		Monthly base fee: 29.00
		Annual discount - Monthly base fee: 19.00
	
			Add feature:
				Name: Everything in Free
				Name: Unlimited Conversations
				Name: 10 Active Companions
				Name: Save Conversartion History
				Name: Inline Quizzes & Recaps
				Name: Monthly Progress Reports
				
	Plan: Pro Companion
		Name: Pro Companion
		Key: pro
		Description: Your personal AI-powered academy.
		
		Monthly base fee: 39.00
		Annual discount - Monthly base fee: 49.00
	
			Add feature:
				Name: Everything in Core
				Name: Unlimited Companions
				Name: Full Performance Dashboard
				Name: Daily Learning Reminders
				Name: Early Access to New Features
				Name: Priority Support
				
Clerk dashboard/Billing/Settings:
	Enable user Billing
	
	app/subscription/page.tsx
	
- Supabase Setup & Clerk integration: 1:39:25
https://supabase.com/

login/dashboard

create project:
	project name: jsm_converso
	Database password: Serafines@2025
	
Go Clerk dashboard, Configure/Developers/Integration/enable Supabase
	click Manage integration
	
	copy Clerk domain: https://prime-honeybee-20.clerk.accounts.dev
	
	click in "Supabase third-party auth settings."
		Select your project
		Add provider/Clerk, paste Clerk domain
		
		In menu, click Table Editor (2nd option)
		Add table
			name: companions
			name: session_history
			
		In menu, click Authentication/Policies
			companion -> Create policy
			...
			
- Supabase Implementation: 1:47:35

Go Supabase dashboard, open your project "jsm_converso", click Connect, App Framworks
	Framework: Next.js
	Using: App Router
	With: supabase-js
	
	Add the following files below to your application

		.env.local:
			NEXT_PUBLIC_SUPABASE_URL
			NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

	For the next files, use: npm install @supabase/supabase-js // install supabase
		lib/supabase.ts
		lib/actions // server actions
		lib/actions/companion.actions.ts
		app/companions/new/page.tsx
		components/CompanionForm.tsx
		
		test the web: Build Your Companion
			it redirect to: http://localhost:3000/companions/60cecce8-db9b-432d-8068-2dcc420f70d9
			
- Companion Library: 1:58:27
http://localhost:3000/companions

app/companions/page.tsx
lib/actions/companion.actions.ts

Add Filters:
	components/SearchInput.tsx
	components/SubjectFilter.tsx

components/SearchInput.tsx
	Install @jsmatery/utils: package that simplifies the management of search params
		https://www.npmjs.com/package/@jsmastery/utils
		npm install @jsmastery/utils
		formUrlQuery()
		removeKeysFromUrlQuery()
		
- Vapi Setup: 2:23:17
AI voice
https://vapi.ai/

user = zarod2019@gmail.com

Open your Dashboard/Assistants/Riley
	Talk to Assistant
	
Vapi administrate internal API Key for provider.

API Keys option:
	Create Public Key:
		Name: converso-saas-app
		API Key (auto-generated): ed42867a-04a4-4623-b212-defe8736990b
		
		copy in .env.local: NEXT_PUBLIC_VAPI_WEB_TOKEN

Install Vapi in your project: npm install @vapi-ai/web

create file vapi.sdk.ts
lib/actions/companion.actions.ts
	getCompanion()
	
app/companions/[id]/page.tsx

- Companion Component (AI Conversation): 2:36:56

Vapi SDK will send an event every time when the AI is speaking,
and we can use that event to add nice animations to keep our users more engaged.

Animations: LottieFiles https://lottiefiles.com/
	AI builder animations
	
	search: sound wave
	
Get stored image in Clerk: next.config.ts

constants/soundwaves.json

Add CompanionComponent:
	components/CompanionComponent.tsx
		install animation: npm install lottie-react
		
	app/companions/[id]/page.tsx

Add Vapi AI voice:
	lib/utils.ts
	constants/index.ts

- Sentry Setup: 3:14:41
Monitoring software.
Improve user experience.
User keep subscribe long time.

https://sentry.io/jsmastery/?
	
	https://jsmpro.sentry.io/
	dashboard: https://jsmpro.sentry.io/onboarding

Automatic Configuration: npx @sentry/wizard@latest -i nextjs --saas --org wodzarod --project javascript-nextjs
	Sentry authentication token:
		SENTRY_AUTH_TOKEN=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
		
		paste in .env.local: SENTRY_AUTH_TOKEN
	
	validate:
		restart app: npm run dev
		go: http://localhost:3000/sentry-example-page

see: sentry-example-page

- Conversation/Session history: 3:21:32
Store conversation in session history

CompanionComponent.tsx

lib/actions/companion.actions.tsx:
	addToSessionHistory
	getRecentSessions
	getUserSessions
	
Fetch all companions of the recent sessions:
	app/page.tsx
	
- Profile Page / My Journey: 3:30:33
http://localhost:3000/my-journey

Add accordion component: npx shadcn@latest add accordion

app/my-journey/page.tsx
	Add: npm install @opentelemetry/core

components/CompanionsList.tsx

- Clerk subscription checks: 3:40:36
Force the rules of subscription.

B2C SaaS: Business-to-Consumer Software as a Service

http://localhost:3000/subscription

lib/actions/companion.actions.tsx:
	newCompanionPermissions
	
app/companions/new/page.tsx

- Bookmarks: 3:50:35
Allows to add to your companion library.

CompanionCard.tsx

Error: - Pending
1. My Companions/Launch
Could not find the table 'public.bookmarks' in the schema cache
lib\actions\companion.actions.ts (186:11)
	await supabase.from("bookmarks").insert({
	
Same error when click Bookmark

Cambios sin bookmarks:
	app/my-journey/page.tsx
	CompanionCard.tsx
	index.d.ts

- Deployment: 3:51:20

1. Create a GitHub repo with your project.

2. Go https://vercel.com/wodzarod-techs-projects

Import your GitHub project

Add Environment Variables
	from: .env.local

Click Deploy
	If happens error, go next.config.tsx and add:
		typescript: {
			ignoreBuildErrors: true
		},
		eslint: {
			ignoreDuringBuilds: true
		}

- differences:
supabase.ts
tsconfig.json
select.tsx
button.tsx
globals.css
global-error.tsx
route.ts

- errors:
1. My Companions/Launch
Could not find the table 'public.bookmarks' in the schema cache
lib\actions\companion.actions.ts (186:11)

Same error when click Bookmark
