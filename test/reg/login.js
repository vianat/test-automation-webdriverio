// import { assert } from 'chai';
// // import assert from 'assert';
//
// let maxLenght = 45;
//
// describe('Login', function () {
//
//     describe('Email', function () {
//
//         it('Max Characters', function () {
//             browser.url('/');
//             let input = $('#email');
//             input.addValue('j'.repeat(maxLenght));
//             let actual = input.getValue().length;
//             input.clearValue();
//             assert.equal(actual, maxLenght);
//         })
//
//         it('Max Characters + 1', function () {
//             let input = $('#email');
//             input.addValue('j'.repeat(maxLenght + 1));
//             let actual = input.getValue().length;
//             assert.equal(actual, maxLenght);
//         })
//
//     });
//
// });
import { assert } from 'chai';

describe('Login', function() {

    it('Works', function() {
        browser.url('/');
        $('#email').setValue('testreacttest@gmail.com');
        $('#pass').setValue('testTest');
        $('#login').click();
        let newBug = $('#new_bug');
        newBug.waitForDisplayed(5000);
        assert.isTrue(newBug.isDisplayed());
    })

});
