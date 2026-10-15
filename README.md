# Media Kit — Bruno Motta

Landing page do media kit 2026 de Bruno Motta (car lifestyle e projetos automotivos), feita com Next.js.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Onde editar

- Textos, números e listas: `app/data.ts`
- Seções da página: `app/components/`
- Estilos: `app/globals.css`
- Imagens: `public/images/`

## Segurança

- **Cabeçalhos:** `next.config.mjs` define Content-Security-Policy (tudo só do próprio domínio), HSTS, `X-Frame-Options`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` e `COOP`. Eles valem onde o Next roda (Vercel, Node). Em hospedagem 100% estática, replique esses cabeçalhos na configuração do servidor.
- **CSP e scripts inline:** `script-src` precisa de `'unsafe-inline'` porque o Next injeta scripts inline para iniciar a página. Testamos `script-src 'self'` e a hidratação falha. Nonces exigiriam renderização dinâmica.
- **Dependências:** `npm audit` deve retornar 0 vulnerabilidades, e o Dependabot abre PRs semanais. Mantenha o `next` atualizado.
- **Segredos:** não há chaves nem variáveis de ambiente no projeto. Arquivos `.env*` e chaves estão no `.gitignore`.
- **Contato público:** e-mail e WhatsApp aparecem em texto na página, então podem receber spam.
