(function($) {
    var $body,
        signedRequest;

    function togglePreloader() {
        $body.toggleClass('show-preloader');
    }

    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    function sentAndClose() {
        togglePreloader();


        $.ajax({
            method : 'post',
            url: 'https://fb-webviews.kodabots.com/api/next',
            processData : false,
            contentType : 'application/json',
            data : JSON.stringify({
                update_user_data: {
                    zywiec_code : $('input').val()
                },
                sent_block_id: getParameterByName('go_after')
            }),
            headers : {
               'fb-signed-request' : signedRequest
            }
          }).done(function(data) {
            MessengerExtensions.requestCloseBrowser(function success() {}, function error(err) {});
          }).fail(function(data){
             console.error(data);
          });
    }

    function onInit(singedReq) {
        signedRequest = singedReq;
        togglePreloader();

        let code = getParameterByName('code');

        if(code !== null) {
            $('.add-code__input').val(code);
        }

        $('form').on('submit', function(e){
            e.preventDefault();
            sentAndClose();
        });
    }

    /* Init
       ========================================================================== */

    window.extAsyncInit = function() {
        MessengerExtensions.getContext('1830865073829357', function(result) {
            onInit(result.signed_request);
         }, function error(err) {
            alert(err);
            // document.body.innerHTML = JSON.stringify(err);
        });
    };

    $(document).ready(function() {
        $body = $(document.body);

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.com/en_US/messenger.Extensions.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'Messenger'));
    });

})(jQuery);
