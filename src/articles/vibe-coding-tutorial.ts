// Long-form HTML body for the T1 vibe coding tutorial.
// Kept separate from content.ts to keep the index slim.

export const vibeCodingTutorialHtml = `
<p>
Vibe coding crossed 110,000 monthly Google searches in 2026. Collins Dictionary
named it Word of the Year 2025. The market behind it hit $4.7 billion. And 63%
of the people building apps this way have zero programming background.
</p>
<p>
So this Claude Code tutorial walks you through one specific path: using Claude
Code to go from a blank folder to a deployed full-stack application, without
writing code yourself. Not theory. Not comparisons. The actual steps, with
every tool and prompt spelled out.
</p>
<p>
By the end you'll have a working web app running on your machine, an
understanding of how Plan Mode and CLAUDE.md files work together, and a
repeatable process you can apply to your next ten projects.
</p>
<p>
But first, let's clarify what vibe coding actually means and why Claude Code
is the tool to learn.
</p>

<h2 id="what-is-vibe-coding">What Is Vibe Coding (and Why Claude Code Leads the Pack)</h2>
<p>
Vibe coding is the practice of building working software by describing what
you want in plain English, then letting an AI assistant generate the code.
The vibe coding meaning is right there in the name: you describe the vibe of
what you want, and the AI handles the technical execution. The term was
coined by Andrej Karpathy, former AI director at Tesla and OpenAI co-founder,
in February 2025.
</p>
<p>
Think about how you use a search engine. You type what you want and get
results. Vibe coding works the same way, except the results are functional
applications instead of web pages. You describe a budget tracker. The AI
builds one.
</p>
<p>
Claude Code is Anthropic's implementation of this concept. It runs inside
your terminal or VS Code editor and interacts directly with your project
files. Unlike browser-based tools such as Bolt.new or Lovable, Claude Code
works on your local machine, which means your code lives on your computer,
not on someone else's server.
</p>
<p>
That distinction matters for three reasons. First, you control your files
completely. Second, you can use any framework or library you want. Third,
the project scales without hitting platform limits. Browser tools are great
for quick prototypes, but they start breaking at around 15-20 files. Claude
Code handles projects with hundreds.
</p>
<p>The question is whether this tutorial is right for your skill level. Let's find out.</p>

<h2 id="who-should-use">Who Should Use This Claude Code Tutorial?</h2>
<p>
This guide targets three specific groups of people. First, founders who want
to prototype their product idea without hiring a developer. Second, marketers
or designers who need a custom tool and are tired of waiting for engineering
bandwidth. Third, anyone curious about vibe coding who has opened a terminal
before, even once, and wants to try building something real.
</p>
<p>
You don't need programming experience. You do need a Claude subscription
($20/month on the Pro plan, which includes Claude Code access) and about 90
minutes of focused time.
</p>
<p>
If you already write code daily and want advanced patterns, check out the
FreeCodeCamp Claude Code Handbook instead. This article is Claude Code for
beginners, optimizing for clarity over comprehensiveness.
</p>

<h2 id="prerequisites">What Do You Need Before Starting?</h2>
<p>Four things. That is the entire prerequisite list.</p>
<ol>
  <li><strong>Claude Pro subscription</strong> ($20/month from claude.ai). The free tier doesn't include Claude Code access.</li>
  <li><strong>VS Code</strong> installed on your computer. Download it free from code.visualstudio.com. Mac, Windows, and Linux all work.</li>
  <li><strong>Claude Code installed.</strong> Visit code.claude.ai for the native installer (no Node.js needed) or install via npm if you already have Node.js 18+. The native installer is the simplest option for non-engineers.</li>
  <li><strong>A project idea.</strong> Keep it simple for your first build. A todo list, expense tracker, recipe organizer, or habit tracker works perfectly.</li>
</ol>
<p>
Skip anything that requires payment processing, user authentication with
third-party OAuth, or real-time multiplayer features for now. Those add
complexity that makes a first project frustrating instead of fun.
</p>
<p>Got everything ready? Here's the step-by-step walkthrough.</p>

<h2 id="step-by-step">Step-by-Step: Building Your First App with Claude Code</h2>
<p>This section walks through the entire process from installation to a running application. Follow each step in order.</p>

<h3 id="step-1">Step 1: Install Claude Code in VS Code</h3>
<p>
Open VS Code. Click the Extensions icon on the left sidebar (it looks like
four squares). Search for "Claude Code" and install the official Anthropic
extension. After installation, you will see a Claude icon appear in your sidebar.
</p>
<p>
Click it. A browser window opens asking you to log into your Claude account.
Sign in with the same credentials you use on claude.ai. This authentication
step happens only once.
</p>

<h3 id="step-2">Step 2: Create Your Project Folder</h3>
<p>
Create a new empty folder on your desktop. Name it something descriptive
like "habit-tracker" or "recipe-app". Then in VS Code, click File, then
Open Folder, and select the folder you just created.
</p>
<p>This empty folder is where Claude Code will build your entire application. Every file it creates goes here.</p>

<h3 id="step-3">Step 3: Start a Claude Code Session and Enter Plan Mode</h3>
<p>
Click the Claude icon in VS Code to open a chat panel. Before typing your
project idea, press Shift+Tab twice. This activates Plan Mode, which is the
single most important feature for non-engineers.
</p>
<p>
In Plan Mode, Claude asks you questions before writing any code. It
clarifies your requirements, suggests technical decisions, and creates an
implementation plan. Without Plan Mode, Claude might build something that
works but doesn't match what you actually wanted.
</p>
<p>
Type your project description. Be specific. Bad prompt: "Build me an app."
Good prompt: "Build a personal habit tracker web app where I can add daily
habits, check them off each day, and see a weekly streak counter. Use
Next.js and store data in a local JSON file. Keep the design minimal with a
dark theme."
</p>
<p>
Claude will respond with 5-10 clarifying questions about layout, features,
and edge cases. Answer them directly. If you don't have a preference, say
so. Phrases like "your call" or "whatever works best for a simple v1" are
perfectly acceptable answers.
</p>

<h3 id="step-4">Step 4: Review the Plan and Approve</h3>
<p>
After your Q&amp;A session, Claude produces an implementation plan. It lists
every file it will create, the framework it will use, and the order of
operations. Read this plan carefully.
</p>
<p>
Look for three things. Does the plan match your original vision? Are there
any features you didn't ask for that add unnecessary complexity? Does the
data storage approach make sense?
</p>
<p>
If something looks wrong, say so now. "Remove the social sharing feature, I
don't need that" or "Use a simpler layout with just one column" are the
kinds of feedback that save you an hour of back-and-forth later.
</p>
<p>Once you are satisfied, tell Claude to proceed. "Looks good, go ahead and build it."</p>

<h3 id="step-5">Step 5: Watch Claude Build (and Approve File Changes)</h3>
<p>
Claude starts creating files. For each file, it shows you a preview and asks
permission before saving. You can approve each change individually or click
"Accept All" if you trust the plan.
</p>
<p>
Don't panic if you see code scrolling past that you don't understand. That's
the entire point. Claude handles the syntax; you handle the decisions.
</p>
<p>
This step typically takes 3-8 minutes depending on project complexity. A
simple habit tracker might create 8-12 files. A more complex dashboard could
generate 20+.
</p>

<h3 id="step-6">Step 6: Run Your App Locally</h3>
<p>After Claude finishes building, ask it: "How do I run this?" Claude will provide the exact terminal commands. Usually it is two lines:</p>
<pre><code>npm install
npm run dev</code></pre>
<p>
Your browser opens to localhost:3000 (or whatever port the app uses), and
you see your application running. Take a moment to click around. Test every
feature. Open it on your phone by typing your computer's local IP address
into the mobile browser.
</p>

<h3 id="step-7">Step 7: Request Changes in Plain English</h3>
<p>
Your first build won't be perfect. That's normal and expected. The power of
vibe coding shows up in iteration, not initial generation.
</p>
<p>
Tell Claude exactly what needs changing. "The streak counter resets on
refresh. Fix it so streaks persist between sessions." Or "Change the header
color from blue to dark green." Or "Add a button that exports my habits as a
CSV file."
</p>
<p>
Each request gets processed the same way: Claude shows you its plan, you
approve, it modifies the files. Small changes take seconds. Larger feature
additions take a few minutes.
</p>
<p>
Keep your change requests focused. One request per message works better
than dumping five changes into a single prompt. Claude handles them more
accurately when they arrive individually. This is one of those Claude Code
tips that saves hours of debugging.
</p>

<h3 id="step-8">Step 8: Create Your CLAUDE.md File</h3>
<p>
This is a step that separates beginners from people who get consistent
results. A CLAUDE.md file sits in your project root and gives Claude context
about your project every time you start a new session.
</p>
<p>
Ask Claude: "Create a CLAUDE.md file for this project that describes the
tech stack, file structure, coding conventions, and current status." Claude
generates it based on what it just built.
</p>
<p>
Why does this matter? Claude Code sessions are stateless. Every new
conversation starts fresh. Without CLAUDE.md, Claude doesn't know what your
project is, what framework you are using, or what decisions were already
made. The file fills that gap automatically because Claude reads it at the
start of each session. This is one of the most important Claude Code best
practices that separates frustrating sessions from productive ones.
</p>
<p>Now that you know the process, let's talk about the seven mistakes that trip up almost every beginner.</p>

<h2 id="mistakes">What Mistakes Wreck First-Time Vibe Coding Projects?</h2>
<p>
Watching people fail at vibe coding reveals a pattern. The same mistakes
show up repeatedly across Reddit threads, Discord servers, and Substack
posts. Avoiding these seven will put you ahead of most beginners.
</p>
<ol>
  <li><strong>Starting without Plan Mode.</strong> Jumping straight into code generation produces apps that technically work but miss your actual requirements. Always press Shift+Tab twice first.</li>
  <li><strong>Vague prompts.</strong> "Build me a website" gives Claude nothing to work with. Describe the purpose, target user, core features, and visual style. Three sentences of specificity beats three paragraphs of vague ideas.</li>
  <li><strong>Requesting too many features at once.</strong> Build the core function first. Get it working. Then add features one at a time. A habit tracker needs check-off functionality before it needs data export.</li>
  <li><strong>Skipping the CLAUDE.md file.</strong> Without it, every new session is a cold start. Claude forgets everything. Create this file after your first successful build and keep it updated.</li>
  <li><strong>Trusting generated code without testing.</strong> Code that runs without errors can still contain security holes, logic bugs, or performance problems. Click every button. Fill every form. Break things on purpose.</li>
  <li><strong>Ignoring context window limits.</strong> Claude can only see about 200,000 tokens at a time. For small projects, this doesn't matter. For larger ones, Claude loses track of files it can't see. Keep first projects under 20 files.</li>
  <li><strong>Not using version control.</strong> Set up Git from the start. Claude can do this for you. Type "Initialize a Git repository and make an initial commit." If something breaks badly, you can revert.</li>
</ol>
<p>
With those pitfalls covered, a natural question comes up: is Claude Code
actually the best tool for this, or should you try
<a href="/comparisons/">Cursor or Bolt.new</a> instead?
</p>

<h2 id="comparison">Claude Code vs Cursor vs Bolt.new: Which Vibe Coding Tool Should You Pick?</h2>
<p>
Three tools dominate the vibe coding conversation in 2026. If you search
for "best vibe coding tools," these are the names that show up on every
list. Each works best for a different situation.
</p>
<div class="article-table-wrap">
<table class="article-table">
  <thead>
    <tr><th>Feature</th><th>Claude Code</th><th>Cursor</th><th>Bolt.new</th></tr>
  </thead>
  <tbody>
    <tr><td>Best for</td><td>Full-stack projects, complex logic</td><td>Code editing, existing codebases</td><td>Quick prototypes, landing pages</td></tr>
    <tr><td>Interface</td><td>Terminal + VS Code extension</td><td>Dedicated AI-native IDE</td><td>Browser-based</td></tr>
    <tr><td>Local files</td><td>Yes, full control</td><td>Yes, full control</td><td>No, cloud-hosted</td></tr>
    <tr><td>Framework flexibility</td><td>Any framework</td><td>Any framework</td><td>Limited templates</td></tr>
    <tr><td>File limit</td><td>Hundreds of files</td><td>Hundreds of files</td><td>~15-20 files practical limit</td></tr>
    <tr><td>Pricing</td><td>$20/mo (Claude Pro)</td><td>$20/mo (Pro plan)</td><td>Free tier + $20/mo Pro</td></tr>
    <tr><td>Learning curve</td><td>Medium (terminal required)</td><td>Low-Medium (IDE-like)</td><td>Low (browser, no setup)</td></tr>
    <tr><td>Non-engineer friendly</td><td>Yes, with Plan Mode</td><td>Moderate</td><td>Very friendly</td></tr>
  </tbody>
</table>
</div>
<p>
Pick Bolt.new if you want a simple landing page or prototype in under 30
minutes with zero setup. Pick Cursor if you already write code and want an
AI copilot that speeds up your existing workflow. Pick Claude Code if you
want to build something real, with a proper architecture, that can grow
past the prototype stage.
</p>

<h2 id="project-ideas">What Can You Build with Claude Code This Weekend?</h2>
<p>
Looking for vibe coding examples that actually work? Every project on this
list has been built by non-engineers using Claude Code in 2026. These
Claude Code examples range from three-hour builds to full-weekend projects.
</p>
<ol>
  <li>Personal expense tracker with category breakdowns and monthly charts</li>
  <li>Recipe collection app that imports URLs and strips out the blog fluff</li>
  <li>Habit tracker with daily streaks and a heatmap calendar</li>
  <li>Client invoice generator that outputs PDF files</li>
  <li>Portfolio website with a blog, project gallery, and contact form</li>
  <li>Packing list generator for trips (with weather API integration)</li>
  <li>Bookmark manager that categorizes saved links automatically</li>
  <li>Simple CRM for freelancers to track leads and project status</li>
  <li>Flashcard study tool with spaced repetition logic</li>
  <li>Meeting notes organizer that pulls from calendar integrations</li>
</ol>
<p>
Start with projects 1, 3, or 5. They require the fewest external
dependencies and teach the most about how Claude Code handles different
types of interactions (data persistence, visual layouts, form handling).
</p>

<h2 id="worth-it">Is Vibe Coding with Claude Code Worth the $20/Month?</h2>
<p>The honest evaluation depends entirely on what you plan to build and how often.</p>
<p>
It's absolutely worth it if you build at least one project per month, you
are a founder who needs prototypes fast, you are a non-technical
professional tired of waiting for developer support, or you want to learn
how modern web apps work by doing rather than reading.
</p>
<p>
It's not worth it if you only need a simple landing page (use a website
builder), you need enterprise-grade security and compliance from day one
(hire an engineer), or you want mobile-native iOS/Android apps (web-first
tools like Claude Code add friction for native mobile development).
</p>
<p>
A useful benchmark: if hiring a freelance developer to build your project
would cost more than $400, the $20/month subscription pays for itself on
the first build. For more on cost optimization, see our
<a href="/optimization/">optimization guides</a>.
</p>

<h2 id="market-size">How Big Is Vibe Coding in 2026?</h2>
<p>Three data points frame the current state of the market.</p>
<p>
Search demand is massive and growing. The keyword "vibe coding" pulls
110,000 monthly searches in the US alone. "Claude Code" pulls 301,000.
These aren't niche terms anymore.
</p>
<p>
Adoption has reached critical mass. 92% of US developers use AI coding
tools daily according to a 2026 GitHub survey. Among vibe coding users
specifically, 63% have no traditional programming background (Taskade State
of Vibe Coding 2026 report).
</p>
<p>
The money follows the adoption. The vibe coding tools market hit an
estimated $4.7 billion in 2026 with 38% annual growth. Cursor hit $100
million ARR in just 14 months and has continued scaling rapidly. Lovable
reached $400 million ARR. Replit targets $1 billion by end of year.
</p>
<p>
What this means for you: the ecosystem is mature enough to build real
things, well-funded enough to keep improving, and popular enough that help
resources exist everywhere.
</p>

<h2 id="faq">FAQ: Claude Code and Vibe Coding for Beginners</h2>

<div class="article-faq">
  <h3>Do I need to know how to code to use Claude Code?</h3>
  <p>
    No. Claude Code generates all the code based on your descriptions. You
    need to understand what you want to build, not how to build it. Knowing
    basic concepts like "frontend" and "database" helps, but Claude explains
    these if you ask.
  </p>

  <h3>How much does Claude Code cost in 2026?</h3>
  <p>
    Claude Code is included with the Claude Pro plan at $20/month. Usage
    runs on a 5-hour rolling window based on token consumption, not a fixed
    message count. Light prompts use fewer tokens than code-heavy sessions,
    so the actual number of interactions varies. For heavy building
    sessions, the Max plan at $100/month or $200/month gives significantly
    higher limits.
  </p>

  <h3>Can Claude Code build a mobile app?</h3>
  <p>
    Claude Code can build React Native and Expo mobile apps, but complexity
    increases significantly compared to web apps. For a first project,
    start with a web app. Many web apps built with Claude Code are fully
    responsive and work well on mobile browsers.
  </p>

  <h3>What is the difference between vibe coding and regular coding?</h3>
  <p>
    Traditional coding requires you to write every line of code manually in
    a programming language. Vibe coding replaces that with natural language
    descriptions. You tell the AI what you want; it writes the code. You
    review results and iterate. The output is the same (working software),
    but the input shifts from syntax to conversation.
  </p>

  <h3>Is vibe coding safe for production apps?</h3>
  <p>
    For MVPs and internal tools, yes. For apps handling payments, medical
    data, or sensitive personal information, you should have a professional
    developer review the codebase before launch. Claude Code produces
    working code, but automated code generation doesn't replace
    <a href="/security/">security audits</a>.
  </p>

  <h3>How long does it take to build an app with Claude Code?</h3>
  <p>
    A simple single-page app takes 30-60 minutes. A multi-page app with
    data persistence takes 2-4 hours. A full-stack app with authentication
    and a dashboard takes 4-8 hours spread across multiple sessions. These
    timeframes assume a non-engineer working through Plan Mode carefully.
  </p>
</div>
`;

export const vibeCodingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to know how to code to use Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Claude Code generates all the code based on your descriptions. You need to understand what you want to build, not how to build it. Knowing basic concepts like frontend and database helps, but Claude explains these if you ask.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Claude Code cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Code is included with the Claude Pro plan at $20/month. Usage runs on a 5-hour rolling window based on token consumption, not a fixed message count. For heavy building sessions, the Max plan at $100/month or $200/month gives significantly higher limits.",
      },
    },
    {
      "@type": "Question",
      name: "Can Claude Code build a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Code can build React Native and Expo mobile apps, but complexity increases significantly compared to web apps. For a first project, start with a web app.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between vibe coding and regular coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional coding requires you to write every line of code manually in a programming language. Vibe coding replaces that with natural language descriptions. You tell the AI what you want; it writes the code.",
      },
    },
    {
      "@type": "Question",
      name: "Is vibe coding safe for production apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For MVPs and internal tools, yes. For apps handling payments, medical data, or sensitive personal information, you should have a professional developer review the codebase before launch.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an app with Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple single-page app takes 30-60 minutes. A multi-page app with data persistence takes 2-4 hours. A full-stack app with authentication and a dashboard takes 4-8 hours spread across multiple sessions.",
      },
    },
  ],
};
