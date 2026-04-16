# SafeSpace

Soft-light mental health support web app with a Next.js frontend and Express backend.

## Setup

From the project root:

```powershell
npm.cmd install
```

Create `server/.env`:

```env
OPENAI_API_KEY=
PORT=4000
CLIENT_ORIGIN=http://localhost:3000
```
Leave OPENAI_API_KEY empty if you want to test the application frontend

## Run

Terminal in VSC is also fine

```powershell
npm.cmd run dev
```

or 

Use 2 separate terminals.

Terminal 1:

```powershell
npm.cmd run dev --workspace server
```

Terminal 2:

```powershell
npm.cmd run dev --workspace client
```

Open:

- Frontend: `http://localhost:3000`
- Backend check: `http://localhost:4000/api/health`

## Build

```powershell
npm.cmd run build
```

## Notes

- The UI is fixed to soft light by default.
- Leaving `OPENAI_API_KEY` empty is okay for local use.
