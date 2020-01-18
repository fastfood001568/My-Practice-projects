module.exports = {
    '@tags': ['demo'],
    'Demo ruten': function (browser) {
      browser
        .windowMaximize('current') 
        .url('https://www.ruten.com.tw/')     
        .waitForElementVisible('body',1000)
        .assert.titleContains('露天拍賣-台灣 NO.1 拍賣網站')
        .assert.visible('input[ID=keyword]')
        .setValue('input[ID=keyword]', 'iphone11')
        .waitForElementVisible('input[ID=keyword]','1000')
        .assert.visible('input[type=button]')
        .click('input[type=button]')
        .assert.titleContains('iphone11')
        .saveScreenshot('tests_output/ruten.png')
        .end();
    }
  };