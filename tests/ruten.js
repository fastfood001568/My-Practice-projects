module.exports={
'@tags': ['ruten'],
'@disabled': true,
'ruten serach':function(browser){

    const mainQuery = 'iphone11';
    browser.windowMaximize('current')
      
    const page=browser.page.rutepage();
    
    page
        .navigate()
        .setQuery(mainQuery)
        .search();
         
    browser
        .assert.titleContains('iphone11')

    const resultsPageQuerySelector = `input[ID="searchInput"][value="${mainQuery}"]`; 
    
    browser.assert.visible(resultsPageQuerySelector, 'search: iphone11 is set in the query input');

    browser.saveScreenshot('tests_output/toed.png');
    browser.end();
}
};