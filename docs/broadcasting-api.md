
# Broadcasting Api

Broadcasting Api allow you to sent messages to chatbot users via an http request.

## Authentication

A token generated on "Settings" tab in dashboard.kodabots.com should be passed on each API request in "Authorization" header.

## Send Broadcast

`https://broadcast.kodabots.com/api/send`

All queries to the Broadcasting API must be served via POST, with the content type application/json. Body should contain valid json object with properties:

| Param  | Type | Description
| -------- | --- |------------- |
| to | string[]  | {{platform_user_id}} user var that you should get from "Api Request Block". Max 1000.
| desc (optional) | string | Description with is shown on broadcast stats page .
| message_tag | string | A message tag gives you the ability to send messages to a person outside of the 24h window. https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags.
| block_id (optional) | string | A block id with should be send. 
| elements (optional) | block[] | An array of blocks to send.

At least elements or block_id properties must be set.

Example request:

```shell
curl -X POST \
  https://broadcast.kodabots.com/api/send \
  -H 'Content-Type: application/json' \
  -H 'Authorization: TOKEN' \
  -d '{
    "to" : ["USER_ID_1", "USER_ID_2"],
    "elements" : [{
        "type" : "photo",
        "url" : "https://www.telix.pl/wp-content/uploads/2018/08/Moico.jpg"
    },{
        "type" : "message",
        "text" : "Message 123",
    }],
    "message_tag" : "TICKET_UPDATE"
}'
```

## Element Reference

### Message

Message allow you to send a structured message that includes text and optional buttons.

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'message'
| text | string  | UTF-8-encoded text of up to 640 characters. Text will appear above the buttons.
| buttons (optional) | button[] | Max 3 buttons
| quick_replies (optional) | reply[] | An array of objects the describe the quick reply buttons to send. A maximum of 11 quick replies are supported.

Example

```json
{
    "type" : "message",
    "text" : "Message 123",
    "buttons": [ {
        "type": "url",
        "title": "Link",
        "url": "https://kodabots.com"
    }, {
        "type": "phone_number",
        "title": "Call",
        "prefix": "+48",
        "number": "600123123"
    }]
}
```

### Photo

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'photo'
| url | string  | Image url
| quick_replies (optional) | reply[] | An array of objects the describe the quick reply buttons to send. A maximum of 11 quick replies are supported.

Example

```json
{
    "type" : "photo",
    "url" : "https://url.pl",
}
```

### Gallery

The gallery allows you to send a structured message that includes an image, text and buttons. A gallery with multiple templates described in the elements array will send a horizontally scrollable carousel of items, each composed of an image, text and button

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'gallery'
| elements | element[]  | Specifying multiple elements will send a horizontally scrollable carousel of templates. A maximum of 10 elements is supported.
| quick_replies (optional) | reply[] | An array of objects the describe the quick reply buttons to send. A maximum of 11 quick replies are supported.

#### Element

At least one property must be set in addition to title.

| Param  | Type | Description
| -------- | --- |------------- |
| title | string  | The title to display in the template. 80 character limit.
| subtitle (optional) | string  |  The subtitle to display in the template. 80 character limit. 
| image_url (optional) | string  | The URL of the image to display in the template. Recommended resolution: 955x500px
| default_action_url (optional) | string  | The URL executed when the template is tapped. 
| buttons (optional) | button[]  | An array of buttons to append to the template. A maximum of 3 buttons per element is supported.
| quick_replies (optional) | reply[] | An array of objects the describe the quick reply buttons to send. A maximum of 11 quick replies are supported.

Example

```json
{
    "type" : "gallery",
    "elements" : [{
        "title" : "Title 1",
        "subtitle" : "Subtitle 1",
        "image_url" : "https://www.telix.pl/wp-content/uploads/2018/08/Moico.jpg",
        "default_action_url" : "https://kodabots.com",
        "buttons": [{
            "type": "go_to",
            "title": "Go To",
            "go_to_block": "BLOCK_ID_2"
        }, {
            "type": "url",
            "title": "Link",
            "url": "https://kodabots.com"
        }, {
            "type": "phone_number",
            "title": "Call",
            "prefix": "+48",
            "number": "600123123"
        }]
    }]
}
```

### Audio

#### Properties 

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'audio'
| url | string  | Audio url
| quick_replies (optional) | reply[] | An array of objects the describe the quick reply buttons to send. A maximum of 11 quick replies are supported.

#### Example

```json
{
    "type" : "photo",
    "url" : "https://url.pl",
}
```

### Video

#### Properties 

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'video'
| url | string  | Video url
| quick_replies (optional) | reply[] | An array of objects the describe the quick reply buttons to send. A maximum of 11 quick replies are supported.

#### Example

```json
{
    "type" : "video",
    "url" : "https://url.pl",
}
```

### File

#### Properties 

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'file'
| url | string  | File url
| quick_replies (optional) | reply[] | An array of objects the describe the quick reply buttons to send. A maximum of 11 quick replies are supported.

Example

```json
{
    "type" : "file",
    "url" : "https://url.pl",
}
```

## Button Reference

Button can be used in gallery and message element.

### Url Button

The URL Button opens a web page in the Messenger webview. This allows you to enrich the conversation with a web-based experience, where you have the full development flexibility of the web. For example, you might display a product summary in-conversation, then use the URL button to open the full product page on your website.

#### Properties 

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'url'.
| title | string  | Max 20 characters. Copy with will be shown on the button.
| url | string | Url of the webview.

#### Example

```json
{
    "type" : "url",
    "url" : "https://url.pl",
    "title" : "Click me!"
}
```

### Go to Button

Block with id will be send to user after taping the button.

#### Properties 

| Param  | Type | Description
| -------- | --- |------------- |
| type | string  | Value must be 'go_to'.
| title | string  | Max 20 characters. Copy with will be shown on the button.
| go_to_block | string | Block id 

#### Example 

```json
{
    "type" : "go_to",
    "title" : "Go to block",
    "go_to_block" : "f60ea240-4cda-d1f9-032f-05eba5794059"
}
```

#### Phone Number Button

## Quick Reply Reference

## Example Success Response

## Errors

## Block Id

## Postman examples

You can download here postman example requests.

## Interface

## Contact

