export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { html } = req.body;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  res.send(`
    <!DOCTYPE html>
    <html lang="he" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>Print</title>

      <style>
        body{
          direction: rtl;
          font-family: Arial;
          margin:0;
          padding:20px;
        }
      </style>
    </head>

    <body>

      ${html}

      <script>
        window.onload = () => {
          setTimeout(() => {
            window.print();
          }, 500);
        };
      </script>

    </body>
    </html>
  `);
}
