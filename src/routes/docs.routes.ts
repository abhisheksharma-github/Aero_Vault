import { Router, Request, Response } from 'express';
import { openApiSpec } from '../docs/openapi.js';

const router = Router();

// GET /api/openapi.json - Raw OpenAPI 3.1 JSON Specification
router.get('/openapi.json', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(openApiSpec);
});

// GET /api/docs - Interactive Swagger UI / OpenAPI Documentation
router.get('/', (_req: Request, res: Response) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AeroVault API Reference</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
  <style>
    body {
      margin: 0;
      background: #020617;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .swagger-ui .topbar { display: none; }
    .swagger-ui {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      filter: invert(88%) hue-rotate(180deg);
    }
    .header-banner {
      background: #0f172a;
      border-bottom: 1px solid #1e293b;
      padding: 24px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-title {
      font-size: 20px;
      font-weight: 800;
      color: #38bdf8;
      letter-spacing: 0.05em;
    }
    .badge {
      background: #0284c7;
      color: #ffffff;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 700;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="header-banner">
    <div class="header-title">🛡️ AEROVAULT DEFENSE INTELLIGENCE ENGINE</div>
    <div><span class="badge">OpenAPI 3.1.0</span></div>
  </div>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js"></script>
  <script>
    window.onload = function() {
      SwaggerUIBundle({
        url: '/api/openapi.json',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
        layout: "BaseLayout"
      });
    };
  </script>
</body>
</html>
  `.trim();

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
});

export default router;
