export function createResumeDocument(resumeHtml: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 48px clamp(24px, 6vw, 72px) 72px;
        color: #202124;
        background: #ffffff;
        font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        font-size: 14px;
        line-height: 1.65;
      }
      #document { max-width: 760px; margin: 0 auto; }
      .section { margin-top: 24px; }
      .firstsection { margin-top: 0; }
      .name { font-size: 25px; font-weight: 700; letter-spacing: -0.025em; line-height: 1.2; }
      .heading { margin: 26px 0 10px; border-bottom: 1px solid #d9dde3; padding-bottom: 6px; }
      .sectiontitle { font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
      p { margin: 8px 0; }
      ul, ol { margin: 8px 0; padding-left: 22px; }
      table { width: 100%; border-collapse: collapse; }
      td, th { padding: 4px 8px; vertical-align: top; }
      a { color: inherit; text-decoration: none; }
    </style>
  </head>
  <body>${resumeHtml}</body>
</html>`;
}
