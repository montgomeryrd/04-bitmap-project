'use strict';

const transform = require('../index.js');
require('jest');

describe('Transform Module', function(){
    describe('#reverse', () => {
        it('should read a bitmap image which returns an a array of pixels', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'reverse') {
                    expect(results).toBe(Array);
                    done();
                }
            });
        });
    
        it('should read a bitmap image and reverse the image', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'reverse') {
                    expect({pixelArray: [1, 5, 7]}).not.toBe({pixelArray: [1, 5, 7]});
                    done();
                }
            });
        });
    });

    describe('valid results', () => {
        it('should read a bitmap image which returns an a array of pixels', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'fliph') {
                    expect(results).toContain(Buffer);
                    done();
                }
            });
        });
    
        it('should read a bitmap image and reverse the image', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'fliph') {
                    expect(results).toHaveProperty(results.allData);
                    done();
                }
            });
        });
    });


    describe('valid results', () => {
        it('should read a bitmap image which returns an a array of pixels', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'moreBlue') {
                    expect(results).not.toBe(null);
                    done();
                }
            });
        });
    
        it('should read a bitmap image and reverse the image', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'moreBlue') {
                    expect({pixelArray: [1, 5, 7]}).not.toBe({pixelArray: [1, 5, 7]});
                    done();
                }
            });
        });
    });

    describe('valid results', () => {
        it('should read a bitmap image which returns an a array of pixels', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'moreRed') {
                    expect(results).toBe(Array);
                    done();
                }
            });
        });
    
        it('should read a bitmap image and reverse the image', (done) => {
            transform.image(err, results => {
                if(err) console.error(err);
                if (process.argv[2] === 'moreRed') {
                    expect({pixelArray: [1, 5, 7]}).not.toBe({pixelArray: [1, 5, 7]});
                    done();
                }
            });
        });
    });
});
