var expect=require('expect');

var {generateMessage}=require('./message')

describe('generateMessage',()=>{
   it('should generate correct message object',()=>{
      var res=generateMessage("alice","bob");
      expect(res.from == "alice");
      expect(res.text == "bob");
    //  expect(res.createdAt).toBeA('number');
      expect(res).toInclude({from,text});
   });
});
