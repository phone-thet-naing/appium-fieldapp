const Mocha = requrie('mocha');
const mocha = new Mocha()

mocha.addFile('./test/specs/collection/OverdueCollectionTest.js')

mocha.run(function (failures) {
    process.exitCode = failures ? 1 : 0;
})