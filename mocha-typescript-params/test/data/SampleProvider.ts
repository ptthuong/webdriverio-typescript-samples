import { SampleData } from './SampleData'
export class SampleProvider {
    static getDataset(): SampleData[]{
        let dataset: SampleData[] = []
        dataset.push(this.getData('english'));
        dataset.push(this.getData('vietnamese'));
        dataset.push(this.getData('japanese'));
        return dataset;
    }

    static getData(language: string): SampleData {
        let fs = require('fs');
        let path = require('path');   
        let filePath = path.join(__dirname, `./${language}/sample.json`);
        let value = fs.readFileSync(filePath);
        return JSON.parse(value);
    } 
}