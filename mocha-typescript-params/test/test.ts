
import * as assert from 'assert';
import { suite, params, pending, skip } from '@testdeck/mocha';
import { SampleProvider } from './data/SampleProvider';

@suite
class Suite {
    
    @pending(!SampleProvider.dataExists(process.env.TEST_LANG))
    @params(SampleProvider.getData(process.env.TEST_LANG))
    @params.naming(({ data, language }) => `language ${language} supported ${SampleProvider.dataExists(process.env.TEST_LANG)}`)
    test({ data, language }) {
        assert.equal(`hello in ${language}`, data.hello);
        assert.equal(`world in ${language}`, data.world);
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