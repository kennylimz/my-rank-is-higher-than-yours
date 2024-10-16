const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const languages = ['en', 'zh'];
const outputData = {};

languages.forEach(lang => {
  const dataDir = path.join(__dirname, `../data/${lang}`);
  outputData[lang] = {};

  // Read all CSV files in the language directory
  const csvFiles = fs.readdirSync(dataDir).filter(file => file.endsWith('.csv'));

  csvFiles.forEach(csvFile => {
    const gameName = path.basename(csvFile, '.csv');
    const results = [];

    fs.createReadStream(path.join(dataDir, csvFile))
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        outputData[lang][gameName] = results;
        console.log(`Data for ${gameName} (${lang}) has been processed`);

        // If this is the last file, write the output
        if (lang === languages[languages.length - 1] && csvFile === csvFiles[csvFiles.length - 1]) {
          const outputFile = path.join(__dirname, '../lib/staticData.js');
          const jsContent = `export const staticData = ${JSON.stringify(outputData, null, 2)};`;
          fs.writeFileSync(outputFile, jsContent);
          console.log(`All data has been generated and saved to ${outputFile}`);
        }
      });
  });
});
