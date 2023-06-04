import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export default function handler(req, res) {
    const csvFilePath = path.resolve('./public/', 'patents.csv');  // replace with your CSV file path
    const csvFileContent = fs.readFileSync(csvFilePath, 'utf8');

    const results = Papa.parse(csvFileContent, { header: true });
    res.status(200).json(results.data);
}



