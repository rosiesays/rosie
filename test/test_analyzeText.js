QUnit.module('analyzeText.js');

QUnit.test('Remove code with one set of html tags', (assert) => {
    let htmlString = "<p>this is a test</p>";
    htmlString = removeCode(htmlString);
    assert.deepEqual(htmlString, "this is a test");
});

QUnit.test('Remove code with two sets of html tags', (assert) => {
    let htmlString = "<p><div>this is a test</div></p>";
    htmlString = removeCode(htmlString);
    assert.deepEqual(htmlString, "this is a test");
});