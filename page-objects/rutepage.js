module.exports={
  url: 'https://www.ruten.com.tw/' ,
  elements:{
    mainQueryInput: 'input[ID="keyword"]',
    button:'input[type="button"]',
  
    },

    commands:[{
        setQuery(value){
            return this.waitForElementVisible('@mainQueryInput', 1000)
                .setValue('@mainQueryInput',value);
        },
        
        search() {
            return this
                .click('@button');
        }

    }]

};