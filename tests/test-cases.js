tests({

  // Fill this in with your test cases

  'two args start with 0': function() {
    eq("110", addBinary("03,03"));
  },

  '0ne arg start with 0': function() {
    eq("110", addBinary("0000002,2"));
  },

  'two positiv numbers': function() {
    eq("110", addBinary("2,2"));
  },

  'two negative numbers': function() {
    eq("110", addBinary("-2,-2"));
  },

});