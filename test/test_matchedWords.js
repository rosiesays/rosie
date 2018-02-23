QUnit.module('matchedWords.js');

QUnit.test('All keywords in matched words are lowercase', (assert) => {
    const keywords = WORDS.words.map(word => word.keyword);
    for(let keyword in keywords) {
        assert.deepEqual(keyword, keyword.toLowerCase());
    }
});