

# Rebranding & Theme Change Plan

## 1. Replace "MODEX" → "The Pilito" (7 files, ~8 occurrences)

| File | What changes |
|------|-------------|
| `index.html` | Title + OG/Twitter meta tags |
| `src/pages/Login.tsx` | Heading text |
| `src/components/AppSidebar.tsx` | Sidebar brand name |
| `src/pages/DailyReport.tsx` | Print header |
| `src/pages/PrintSticker.tsx` | Sticker header + invoice header |
| `src/lib/diaryExport.ts` | Two diary export headers |
| `supabase/functions/auth-login/index.ts` | `@modex.ship` → `@thepilito.ship` |

## 2. Theme: White background + Orange accent + Black text (`src/index.css`)

All CSS custom properties updated:

- **Background/cards**: white / very light gray
- **Text (foreground)**: black/near-black
- **Primary**: orange (`25 95% 53%`)
- **Gradients/glows**: orange-based
- **Sidebar**: white background, black text, orange active accent
- **Borders**: light gray
- **Scrollbar**: light track, orange hover thumb

## 3. Update memory files

- `mem://style/branding` → "The Pilito"
- `mem://style/visual-identity` → white + orange theme
- `mem://style/sticker-specifications` → "The Pilito" header
- `mem://auth/email-domain` → `@thepilito.ship`

