# Rohan Agarwal Interactive Portfolio

Premium, recruiter-friendly portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Stack

- Next.js `15.5.2`
- React `19.1.1`
- Tailwind CSS `4.1.12`
- Framer Motion `12.23.12`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

- `app/`: App Router layout, page, global styles
- `components/`: Reusable section and UI components
- `data/portfolio.ts`: All recruiter-facing content in one place
- `public/resume.pdf`: Downloadable PDF resume
- `public/resume.docx`: Downloadable Word resume

## Customize content

1. Update text content in `data/portfolio.ts`.
2. Replace `public/resume.pdf` and `public/resume.docx` with the final files.
3. Update contact details in the same data file.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Keep the default framework preset as `Next.js`.
4. Build command: `next build`
5. Output setting: leave blank so Vercel uses the Next.js default.
6. Deploy.

## Notes

- The project includes the actual `public/resume.pdf` plus a generated `public/resume.docx`.
- Theme mode defaults to the user's system preference and can be toggled from the navbar.
- This project was scaffolded manually, so run `npm install` once before local development.
