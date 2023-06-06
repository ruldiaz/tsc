const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Specify the local file path
  const filePath = './01.pdf';

  const fileURL = `${filePath}`;

  await page.goto(fileURL, { waitUntil: 'networkidle0' });

  // Generate a PDF preview
  await page.pdf({
    path: './preview.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
  console.log('Preview generated successfully.');
})();
