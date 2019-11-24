
import * as assert from 'assert';
import { suite, params, pending, skip } from '@testdeck/mocha';
import { SampleProvider } from './data/SampleProvider';

@suite
class Suite {
    
    @pending(!SampleProvider.dataExists(process.env.TEST_LANG))
    @params(SampleProvider.getData(process.env.TEST_LANG))
    @params.naming(({ data, language }) => `test with ${language} language ${SampleProvider.dataExists(process.env.TEST_LANG)?'':'not yet supported'}`)
    
    test({ data, language }) {
        assert.equal(`こんにちは`, data.hello);
        assert.equal(`世界`, data.world);
    }
}

SampleProvider.getDataset().forEach(entry => {
    @suite
    class Suite {
        @params(entry, `with multiple languages ${entry.language}`)
        test2({ data, language }) {
            assert.equal(`hello in ${language}`, data.hello);
            assert.equal(`world in ${language}`, data.world);
        }
    }
});