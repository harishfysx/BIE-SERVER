const year = 'I';
const _ = require('lodash');

var subjectList = [
  {'code': 01 , 'name' : 'ENGLISH PAPER -I' },
  {'code': 03 , 'name' : 'TELUGU PAPER-I' },
  {'code': 05 , 'name' : 'URDU PAPER-I' },
  {'code': 07 , 'name' : 'HINDI PAPER-I' },
  {'code': 09 , 'name' : 'TAMIL PAER-I' },
  {'code': 11 , 'name' : 'MARATHI PAPER-I' },
  {'code': 13 , 'name' : 'KANNADA PAPER-I' },
  {'code': 15 , 'name' : 'ORIYA PAPER-I' },
  {'code': 17 , 'name' : 'SANSKRIT PAPER-I' },
  {'code': 19 , 'name' : 'PERSIAN PAPER-I' },
  {'code': 21 , 'name' : 'ARABIC PAPER-I' },
  {'code': 23 , 'name' : 'FRENCH PAPER-1' },
  {'code': 25 , 'name' : 'RUSSIAN PAPER - I' },
  {'code': 27 , 'name' : 'GERMAN PAPER - I' },
  {'code': 131, 'name' : 'MATHEMATICS PAPER-I(A)' },
  {'code': 132, 'name' : 'MATHEMATICS PAPER-I(B)' },
  {'code': 33 , 'name' : 'GEOLOGY PAPER-I' },
  {'code': 137, 'name' : 'BOTANY PAPER-I ' },
  {'code': 138, 'name' : 'ZOOLOGY PAPER-I' },
  {'code': 141, 'name' : 'PHYSICS PAPER-I' },
  {'code': 142, 'name' : 'CHEMISTRY PAPER-I' },
  {'code': 45 , 'name' : 'HOME SCIENCE PAPER-I' },
  {'code': 49 , 'name' : 'PSYCHOLOGY PAPER-I' },
  {'code': 51 , 'name' : 'ECONOMICS PAPER-I' },
  {'code': 53 , 'name' : 'LOGIC PAPER-I' },
  {'code': 55 , 'name' : 'COMMERCE PAPER-I' },
  {'code': 57 , 'name' : 'HISTORY PAPER-I' },
  {'code': 61 , 'name' : 'CIVICS PAPER-I' },
  {'code': 63 , 'name' : 'SOCIOLOGY PAPER-I' },
  {'code': 65 , 'name' : 'GEOGRAPHY PAPER-I' },
  {'code': 69 , 'name' : 'PUBLIC ADMINISTRATION-I' },
  {'code': 71 , 'name' : 'ML TELUGU PAPER-I' },
  {'code': 73 , 'name' : 'ML URDU PAPER-I' },
  {'code': 75 , 'name' : 'ML HINDI PAPER-I' },
  {'code': 77 , 'name' : 'ML TAMIL PAPER-I' },
  {'code': 79 , 'name' : 'ML MARATHI PAPER-I' },
  {'code': 81 , 'name' : 'ML KANNADA PAPER-I' },
  {'code': 83 , 'name' : 'ML ORIYA PAPER-I' },
  {'code': 85 , 'name' : 'ML ENGLISH-PAPER-I' },
  {'code': 87 , 'name' : 'CL SANSKRIT PAPER-I' },
  {'code': 89 , 'name' : 'CL PERSIAN PAPER-I' },
  {'code': 91 , 'name' : 'CL ARABIC PAPER-I' },
  {'code': 93 , 'name' : 'FINE ARTS MUSIC PAPER-I' },
  {'code': 02 , 'name' : 'ENGLISH PAPER-II' },
  {'code': 04 , 'name' : 'TELUGU PAPER-II' },
  {'code': 06 , 'name' : 'URDU PAPER-II' },
  {'code': 08 , 'name' : 'HINDI PAPER-II' },
  {'code': 10 , 'name' : 'TAMIL PAPER-II' },
  {'code': 12 , 'name' : 'MARATHI PAPER-II' },
  {'code': 14 , 'name' : 'KANNADA PAPER-II' },
  {'code': 16 , 'name' : 'ORIYA PAPER-II' },
  {'code': 18 , 'name' : 'SANSKRIT PAPER-II' },
  {'code': 20 , 'name' : 'PERSIAN PAPER-II' },
  {'code': 22 , 'name' : 'ARABIC PAPER-II' },
  {'code': 24 , 'name' : 'FRENCH PAPER-II' },
  {'code': 26 , 'name' : 'RUSSIAN PAPER - II' },
  {'code': 28 , 'name' : 'GERMAN PAPER - II' },
  {'code': 231, 'name' : 'MATHEMATICS PAPER-II(A)' },
  {'code': 232, 'name' : 'MATHEMATICS PAPER-II(B)' },
  {'code': 34 , 'name' : 'GEOLOGY PAPER-II' },
  {'code': 35 , 'name' : 'GEOLOGY PRACTICAL-I' },
  {'code': 36 , 'name' : 'GEOLOGY PRACTICAL-II' },
  {'code': 237, 'name' : 'BOTANY PAPER-II' },
  {'code': 238, 'name' : 'ZOOLOGY PAPER-II' },
  {'code': 39 , 'name' : 'BOTANY PRACTICAL ' },
  {'code': 40 , 'name' : 'ZOOLOGY PRACTICAL ' },
  {'code': 241, 'name' : 'PHYSICS PAPER-II' },
  {'code': 242, 'name' : 'CHEMISTRY PAPER-II' },
  {'code': 43 , 'name' : 'PHYSICS PRACTICAL ' },
  {'code': 44 , 'name' : 'CHEMISTRY PRACTICAL' },
  {'code': 46 , 'name' : 'HOME SCIENCE -II' },
  {'code': 47 , 'name' : 'HOME SCIENCE-I PRACTICAL' },
  {'code': 48 , 'name' : 'HOME SCIENCE-II PRACTICAL' },
  {'code': 50 , 'name' : 'PSYCHOLOGY PAPER-II' },
  {'code': 52 , 'name' : 'ECONOMICS PAPER-II' },
  {'code': 54 , 'name' : 'LOGIC PAPER-II' },
  {'code': 56 , 'name' : 'COMMERCE PAPER-II' },
  {'code': 58 , 'name' : 'HISTORY PAPER-II' },
  {'code': 62 , 'name' : 'CIVICS PAPER-II' },
  {'code': 64 , 'name' : 'SOCIOLOGY PAPER-II' },
  {'code': 66 , 'name' : 'GEOGRAPHY PAPER-II' },
  {'code': 67 , 'name' : 'GEOGRAPHY PRACTICAL ' },
  {'code': 70 , 'name' : 'PUBLIC ADMINISTRATION-II' },
  {'code': 72 , 'name' : 'ML TELUGU PAPER-II' },
  {'code': 74 , 'name' : 'ML URDU PAPER-II' },
  {'code': 76 , 'name' : 'ML HINDI PAPER-II' },
  {'code': 78 , 'name' : 'ML TAMIL PAPER-II' },
  {'code': 80 , 'name' : 'ML MARATHI PAPER-II' },
  {'code': 82 , 'name' : 'ML KANNADA PAPER-II' },
  {'code': 84 , 'name' : 'ML ORIYA PAPER-II' },
  {'code': 86 , 'name' : 'ML ENGLISH PAPER-II' },
  {'code': 88 , 'name' : 'CL SANSKRIT PAPER-II' },
  {'code': 90 , 'name' : 'CL PERSIAN PAPER-II' },
  {'code': 92 , 'name' : 'CL ARABIC PAPER-II' },
  {'code': 94 , 'name' : 'FINE ARTS MUSIC-II' },
  {'code': 95 , 'name' : 'MUSIC PRACTICAL' }
];

exports.subjectFnctn =function subjectFnctn(subjCode){
  switch (subjCode) {
    case '31': case '32': case '37': case '38':
    case '41': case '42':

      if(year == 'I'){
        subjCode ='1'+subjCode;
      }
      return  _.find(subjectList,  { 'code':parseInt(subjCode)}).name;
      break;
    case '--':
    return subjCode;
    default:
      return  _.find(subjectList,  { 'code':parseInt(subjCode)}).name;
  }
}

exports.subjectList = subjectList;
