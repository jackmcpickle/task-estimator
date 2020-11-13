import { writeFile } from './utils/writefile';
import path from 'path';
import { parseAsync }  from 'json2csv';


export const writeEstimateToDisk = async (data) => {
    const fileJSON = path.resolve(process.cwd(), 'data/estimates.json');
    const fileCSV = path.resolve(process.cwd(), 'data/estimates.csv');
    const csvData = await parseAsync(data)
    await writeFile(fileJSON, JSON.stringify(data));
    await writeFile(fileCSV, csvData);
    console.log('Successfully wrote data');

}