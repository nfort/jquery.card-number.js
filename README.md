# jquery.card-number.js
[![NPM](https://nodei.co/npm/jquery.card-number.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jquery.card-number.js/)

flexible input card number with prefix and logo

![jquery.card-number](http://new.tinygrab.com/28d197985fdd4b7247cf59c562a34e127a0fcbc6ae.png)

You can see [example in action](https://cdn.rawgit.com/nfort/jquery.card-number.js/master/example/index.html)


```
$(function () {
    $('.js-card-number').card({
        prefix: '1234 00',
        placeholder: '00 0000 0000',
        background_color: '#C70017',
        name: 'partners_field',
        src: 'http://4vector.com/i/free-vector-mastercard-logo_090839_MasterCard_logo.png'
    })
})
```
