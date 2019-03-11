
# Fb Webview Api

![alt](images/webview.png)

The Messenger Platform allows you to open a standard webview, where you can load webpages inside Messenger. This lets you offer experiences and features that might be difficult to offer with message bubbles, such as picking products to buy, seats to book, or dates to reserve.

To integrate webview with KODA Bots platform, we create API that allow update user profile and sent next element in sequence directly from wevbiew.

To authorize use signed request provided by Messenger Extension SDK.

```js
var signedRequest

window.extAsyncInit = function() {
    MessengerExtensions.getContext('1830865073829357', function(result) {
        signedRequest = result.signed_request; // FB SIGNED REQUEST TOKEN
    }, function error(err) {
        alert(err);
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
```

**Important** To correct initialize Messenger Extension SDK, url of webview must be provided on Deploy section on dashboard.kodabots.com.

## Next

When you would like to close webview and sent to user next message use "next" end-point.

`https://fb-webviews.kodabots.com/api/next`

All queries must be served via POST, with the content type application/json. Body should contain valid json object with implements [IFbWebviewNextApi](../next-fb-webviews-api.ts) interface.

| Param  | Type | Description
| -------- | --- |------------- |
| update_user_data | object  | Object with contains data to update e.g. {"key1" : "value1"}. Remember, you can`t overwrite system user variables like first_name.
| sent_block_id | string  | Block with should be sent after close webview. Next block in sequence is automatically passed to webview in "go_after" query param.

### Example request (curl):

```bash
curl -X POST \
  https://fb-webviews.kodabots.com/api/next \
  -H 'content-type: application/json' \
  -H 'fb-signed-request: TOKEN' \
  -d '{
    "update_user_data": {
        "var1": "value 1",
        "var2" : "value 2"
    },
    "sent_block_id": "NEXT_BLOCK_ID"
}'
```

### Errors

Result 400

```json
{
    "status": "error",
    "code": "BAD_SIGNED_REQUEST"
}
```

### Success Response

Result 200
```json
{
    "status": "success",
    "updated_user_data": {
        "var1": "value 1",
        "var2" : "values 2"
    }
```

## Start kit

[Here](https://github.com/kodabots/Docs/tree/master/fb-webview-example) you can download start kit to create own webview.

```js

function sentAndClose(signedRequest) {

    $.ajax({
        method : 'post',
        url: 'https://fb-webviews.kodabots.com/api/next',
        processData : false,
        contentType : 'application/json',
        data : JSON.stringify({
            update_user_data: {
               var1: 'value 1',
               var2: 'value 2'
            },
            sent_block_id: getParameterByName('go_after')
        }),
        headers : {
            'fb-signed-request' : signedRequest
        }
        }).done(function(data) {
            MessengerExtensions.requestCloseBrowser();
        }).fail(function(data){
            console.error(data);
        });
}

```