// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber false cases
test(`'1111111' is not a valid phone number`, ()=>{
    expect(functions.isPhoneNumber('1111111')).not.toBe(true);
});
test(`'298041230948092348094234' is not a valid phone number`, ()=>{
    expect(functions.isPhoneNumber('298041230948092348094234')).not.toBe(true);
});

//isPhoneNumber true cases
test(`'(858)534-4357' is a valid phone number`, ()=>{
    expect(functions.isPhoneNumber('(858)534-4357')).toBe(true);
});
test(`'(818)619-4724' is a valid phone number`, ()=>{
    expect(functions.isPhoneNumber('(818)619-4724')).toBe(true);
});

//isEmail false cases
test(`'asdg@dsfa@@@@' is not  a valid email`, ()=>{
    expect(functions.isEmail('asdg@dsfa@@@@')).not.toBe(true);
});
test(`'ohmeohmy.sir' is not a valid email`, ()=>{
    expect(functions.isEmail('ohmeohmy.sir')).not.toBe(true);
});

//isEmail true cases
test(`'noreply@ucsd.edu' is a valid email`, ()=>{
    expect(functions.isEmail('noreply@ucsd.edu')).toBe(true);
});
test(`'hellomynameisdanielsmithandilikewaffles@navygov' is a valid email`, ()=>{
    expect(functions.isEmail('hellomynameisdanielsmithandilikewaffles@navy.gov')).toBe(true);
});

//isStrongPassword false cases
test(`'aa' is not a strong password since it is too short`, ()=>{
    expect(functions.isStrongPassword('aa')).not.toBe(true);
});
test(`'1234567890' is not a valid password since it begins with a number`, ()=>{
    expect(functions.isStrongPassword('1234567890')).not.toBe(true);
});
//isStrongPassword true cases
test(`'shortbutgood' is a strong password`, ()=>{
    expect(functions.isStrongPassword('shortbutgood')).toBe(true);
});
test(`'b1OR06ks' is a strong password`, ()=>{
    expect(functions.isStrongPassword('b1OR06ks')).toBe(true);
});


//isDate false cases
test(`'ME/OW/MEOW' is not a valid date.`, ()=>{
    expect(functions.isDate('ME/OW/MEOW')).not.toBe(true);
});
test(`'2012/06/14' is not a valid datetimestamp`, ()=>{
    expect(functions.isDate('2012/06/14')).not.toBe(true);
});
//isDate true cases
test(`'11/19/2020' is a valid date`, ()=>{
    expect(functions.isDate('11/19/2020')).toBe(true);
});
test(`'99/20/9999' might not be a possible date, but it is a correct date format`, ()=>{
    expect(functions.isDate('99/20/9999')).toBe(true);
0});


//isHexColor false cases
test(`'#EEEEEEE' is not valid hexadecimal.`, ()=>{
    expect(functions.isHexColor('#EEEEEEE')).not.toBe(true);
});
test(`'#12AF4C5C' is not a valid hex color`, ()=>{
    expect(functions.isHexColor('#12AF4C5C')).not.toBe(true);
});
//isHexColor true cases
test(`'#bdc1c6' is a valid hex color`, ()=>{
    expect(functions.isHexColor('#bdc1c6')).toBe(true);
});
test(`'#12ad4d' is a valid hex color`, ()=>{
    expect(functions.isHexColor('#12ad4d')).toBe(true);
0});