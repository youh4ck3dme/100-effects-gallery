<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1mWonUHr33H2Sf_EmgVKlaAPcHpi27cDf

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Hosting on Vercel

To host this project on Vercel, follow these steps:

1. Sign in or create an account at [Vercel](https://vercel.com/).
2. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
3. Run the Vercel setup command in your project directory:
   ```bash
   vercel
   ```
4. Follow the interactive setup prompts to link your project to your Vercel account.
5. Set the required environment variables in the Vercel dashboard, including `GEMINI_API_KEY`.
6. Once the setup is complete, Vercel will provide a live URL for your hosted app.