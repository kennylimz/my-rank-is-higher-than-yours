const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const languages = ['en', 'zh'];
const outputData = {};

// Function to process CSV files
function processCSVFiles(lang) {
  return new Promise((resolve, reject) => {
    const dataDir = path.join(__dirname, `../data/${lang}`);
    outputData[lang] = {};

    // Check if the directory exists
    if (!fs.existsSync(dataDir)) {
      console.warn(`Directory not found: ${dataDir}`);
      resolve();
      return;
    }

    // Read all CSV files in the language directory
    const csvFiles = fs.readdirSync(dataDir).filter(file => file.endsWith('.csv'));

    if (csvFiles.length === 0) {
      console.warn(`No CSV files found in ${dataDir}`);
      resolve();
      return;
    }

    let processedFiles = 0;

    csvFiles.forEach(csvFile => {
      const gameName = path.basename(csvFile, '.csv');
      const results = [];

      fs.createReadStream(path.join(dataDir, csvFile))
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          outputData[lang][gameName] = results;
          console.log(`Data for ${gameName} (${lang}) has been processed`);

          processedFiles++;
          if (processedFiles === csvFiles.length) {
            resolve();
          }
        })
        .on('error', (error) => {
          console.error(`Error processing ${csvFile}: ${error}`);
          reject(error);
        });
    });
  });
}

// Main function to generate static data
async function generateStaticData() {
  try {
    for (const lang of languages) {
      await processCSVFiles(lang);
    }

    const outputDir = path.join(__dirname, '../public');
    const outputFile = path.join(outputDir, 'staticData.js');

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const jsContent = `export const staticData = ${JSON.stringify(outputData, null, 2)}; export default staticData;`;
    fs.writeFileSync(outputFile, jsContent);
    console.log(`All data has been generated and saved to ${outputFile}`);
  } catch (error) {
    console.error('Error generating static data:', error);
    process.exit(1);
  }
}

generateStaticData();
