
import * as assert from 'assert';
import { suite, params } from '@testdeck/mocha';
import { SampleProvider } from './data/SampleProvider';

@suite
class Suite {
    @params(SampleProvider.getData(process.env.TEST_LANG))
    @params.naming(({ data, language }) => `with one language ${language}`)
    test({ data, language }) {
        console.log(`Running assertions for: ${language}`);
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