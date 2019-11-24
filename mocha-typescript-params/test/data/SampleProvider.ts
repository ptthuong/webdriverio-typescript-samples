import { SampleData } from './SampleData'
export class SampleProvider {
    static getDataset(): SampleData[]{
        let dataset: SampleData[] = []
        dataset.push({language:'english', data: { hello: 'hello', world: 'world' }});
        dataset.push({language:'vietnamese', data: { hello: 'Chào thế', world: 'giới' }});
        dataset.push({language:'japanese',data: { hello: 'こんにちは', world: '世界' }});
        return dataset;
    }

    static getData(language: string): SampleData {
        let fs = require('fs');
        let path = require('path');   
        let filePath = path.join(__dirname, './'+language+'/sample.json');
        let value = fs.readFileSync(filePath);
        return JSON.parse(value);
    } 
}