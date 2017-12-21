Polymer({
    is: 'home-views',
    properties: {
        response: Object
    },
    observers: [
        '_data(response)'
    ],
    ready: function () {
     
    },
    _data(response){
        console.log(response);
        document.getElementById('spinner').finished = true;
        if (document.getElementById('spinner').finished == true) {
            $('.spinner-own').fadeOut();
        }
    }
});