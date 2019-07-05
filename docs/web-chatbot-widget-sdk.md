
# Web Chatbot Widget SDK

## Example code

```js
<script src="https://web.kodabots.com/widget.js"></script>
<script>
    KBChatbot.init({
        "token": "token-123",
        "mask": {
            "show": false
        }
     });
</script>
```

## Settings Object

<table>
          <thead>
            <tr>
                <th>Field</th>
                <th>Required</th>
                <th>Type</th>
                <th>Default</th>
                <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>token</td>
              <td><strong>Yes</strong></td>
              <td>string</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>user</td>
              <td>No</td>
              <td>User Object</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>mask</td>
              <td>No</td>
              <td>Mask Object</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>promo_message</td>
              <td>No</td>
              <td>PromoMessage Object</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>chat_window</td>
              <td>No</td>
              <td>ChatWindow Object</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>button</td>
              <td>No</td>
              <td>Buton Object</td>
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td>config</td>
              <td>No</td>
              <td>Config Object</td>
              <td>-</td>
              <td></td>
            </tr>
          </tbody>
        </table>

## User Object

<table>
          <thead>
            <tr>
                <th>Field</th>
                <th>Required</th>
                <th>Type</th>
                <th>Default</th>
                <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>first_name</td>
              <td>No</td>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>last_name</td>
              <td>No</td>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

## Mask Object

<table>
          <thead>
            <tr>
                <th>Field</th>
                <th>Required</th>
                <th>Type</th>
                <th>Default</th>
                <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>show</td>
              <td>No</td>
              <td>boolean</td>
              <td>true</td>
              <td></td>
            </tr>
            <tr>
              <td>bg</td>
              <td>No</td>
              <td>string</td>
              <td>rgba(255,255,255,0.3)</td>
              <td></td>
            </tr>
            <tr>
              <td>z_index</td>
              <td>No</td>
              <td>number</td>
              <td>99997</td>
              <td></td>
            </tr>
          </tbody>
        </table>

## PromoMessage Object

<table>
			<thead>
	            <tr>
	                <th>Field</th>
	                <th>Required</th>
	                <th>Type</th>
	                <th>Default</th>
	                <th>Desc</th>
	            </tr>
           </thead>
           <tbody>
			 	<tr>
	                <td>show</td>
	                <td>No</td>
	                <td>boolean</td>
	                <td>false</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>text</td>
	                <td>No</td>
	                <td>string</td>
	                <td>Porozmawiaj ze mną :)</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>show_once</td>
	                <td>No</td>
	                <td>boolean</td>
	                <td>true</td>
	                <td></td>
	            </tr>
	             <tr>
	                <td>show_delay</td>
	                <td>No</td>
	                <td>number</td>
	                <td>1000</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>show_animation_time</td>
	                <td>No</td>
	                <td>string</td>
	                <td>500ms</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>show_triangle</td>
	                <td>No</td>
	                <td>boolean</td>
	                <td>true</td>
	                <td></td>
	            </tr>
	           	<tr>
	                <td>triangle_position</td>
	                <td>No</td>
	                <td>string - ['left', 'top', 'right', 'bottom']</td>
	                <td>top</td
	                <td></td>
	            </tr>
	            <tr>
	                <td>color_triangle</td>
	                <td>No</td>
	                <td>string</td>
	                <td>#fff</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>font_family</td>
	                <td>No</td>
	                <td>string</td>
	                <td>Arial</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>font_size</td>
	                <td>No</td>
	                <td>string</td>
	                <td>12px</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>line_height</td>
	                <td>No</td>
	                <td>string</td>
	                <td>18px</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>color_text</td>
	                <td>No</td>
	                <td>string</td>
	                <td>#000</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>color_bg</td>
	                <td>No</td>
	                <td>string</td>
	                <td>#fff</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>max_width</td>
	                <td>No</td>
	                <td>string</td>
	                <td>400px</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>box_shadow</td>
	                <td>No</td>
	                <td>string</td>
	                <td>0 12px 52px 0 rgba(0, 0, 0, 0.02)</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>padding</td>
	                <td>No</td>
	                <td>string</td>
	                <td>10px</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>border_radius</td>
	                <td>No</td>
	                <td>string</td>
	                <td>5px</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>z_index</td>
	                <td>No</td>
	                <td>number</td>
	                <td>99998</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>screen_position_bottom</td>
	                <td>No</td>
	                <td>string</td>
	                <td>80px</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>screen_position_right</td>
	                <td>No</td>
	                <td>string</td>
	                <td>20px</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>border</td>
	                <td>No</td>
	                <td>string</td>
	                <td>none</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>show_close_icon</td>
	                <td>No</td>
	                <td>boolean</td>
	                <td>true</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>close_icon_color_hover</td>
	                <td>No</td>
	                <td>string</td>
	                <td>rgba(0,0,0,.5)</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>close_icon_color</td>
	                <td>No</td>
	                <td>string</td>
	                <td>rgba(0,0,0,1)</td>
	                <td></td>
	            </tr>
	            <tr>
	                <td>close_icon</td>
	                <td>No</td>
	                <td>string</td>
                  <td><pre class="code-svg" style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#400000; font-weight:bold; '>svg</span> <span style='color:#074726; '>height</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#8c0000; '>24</span><span style='color:#800000; '>"</span> <span style='color:#074726; '>viewBox</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#8c0000; '>0</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>0</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>24</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>24</span><span style='color:#800000; '>"</span> <span style='color:#074726; '>width</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#8c0000; '>24</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#400000; font-weight:bold; '>path</span> <span style='color:#074726; '>d</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#400000; font-weight:bold; '>M</span><span style='color:#8c0000; '>19</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>6.41</span><span style='color:#400000; font-weight:bold; '>L</span><span style='color:#8c0000; '>17.59</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>5</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>12</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>10.59</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>6.41</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>5</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>5</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>6.41</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>10.59</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>12</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>5</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>17.59</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>6.41</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>19</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>12</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>13.41</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>17.59</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>19</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>19</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>17.59</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>13.41</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>12</span><span style='color:#400000; font-weight:bold; '>z</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#400000; font-weight:bold; '>path</span><span style='color:#a65700; '>></span>
    <span style='color:#a65700; '>&lt;</span><span style='color:#400000; font-weight:bold; '>path</span> <span style='color:#074726; '>d</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#400000; font-weight:bold; '>M</span><span style='color:#8c0000; '>0</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>0</span><span style='color:#400000; font-weight:bold; '>h</span><span style='color:#8c0000; '>24</span><span style='color:#400000; font-weight:bold; '>v</span><span style='color:#8c0000; '>24</span><span style='color:#400000; font-weight:bold; '>H</span><span style='color:#8c0000; '>0</span><span style='color:#400000; font-weight:bold; '>z</span><span style='color:#800000; '>"</span> <span style='color:#074726; '>fill</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#007d45; '>none</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#400000; font-weight:bold; '>path</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#400000; font-weight:bold; '>svg</span><span style='color:#a65700; '>></span>
</pre>
                  </td>
	                <td></td>
	            </tr>
	        </tbody>
        </table>

## ChatWindow Object

<table>
          <thead>
            <tr>
                <th>Field</th>
                <th>Required</th>
                <th>Type</th>
                <th>Default</th>
                <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>screen_position_bottom</td>
              <td>No</td>
              <td>string</td>
              <td>90px</td>
              <td></td>
            </tr>
            <tr>
              <td>screen_position_right</td>
              <td>No</td>
              <td>string</td>
              <td>20px</td>
              <td></td>
            </tr>
            <tr>
              <td>screen_height</td>
              <td>No</td>
              <td>string</td>
              <td>80vh</td>
              <td></td>
            </tr>
            <tr>
              <td>screen_width</td>
              <td>No</td>
              <td>string</td>
              <td>400px</td>
              <td></td>
            </tr>
            <tr>
              <td>screen_max_height</td>
              <td>No</td>
              <td>string</td>
              <td>700px</td>
              <td></td>
            </tr>
            <tr>
              <td>screen_border_radius</td>
              <td>No</td>
              <td>string</td>
              <td>10px</td>
              <td></td>
            </tr>
            <tr>
              <td>color_header_bg</td>
              <td>No</td>
              <td>string</td>
              <td>#f86855</td>
              <td></td>
            </tr>
            <tr>
              <td>color_header_text</td>
              <td>No</td>
              <td>string</td>
              <td>#fff</td>
              <td></td>
            </tr>
            <tr>
              <td>box_shadow</td>
              <td>No</td>
              <td>string</td>
              <td>0 12px 52px 0 rgba(0, 0, 0, 0.02)</td>
              <td></td>
            </tr>
            <tr>
              <td>z_index</td>
              <td>No</td>
              <td>number</td>
              <td>99999</td>
              <td></td>
            </tr>
          </tbody>
        </table>

## Button Object

<table>
              <thead>
                <tr>
                    <th>Field</th>
                    <th>Required</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Desc</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>width</td>
                  <td>No</td>
                  <td>string</td>
                  <td>50px</td>
                  <td></td>
                </tr>
                <tr>
                  <td>height</td>
                  <td>No</td>
                  <td>string</td>
                  <td>50px</td>
                  <td></td>
                </tr>
                <tr>
                  <td>position_bottom</td>
                  <td>No</td>
                  <td>string</td>
                  <td>20px</td>
                  <td></td>
                </tr>
                <tr>
                  <td>position_right</td>
                  <td>No</td>
                  <td>string</td>
                  <td>20px</td>
                  <td></td>
                </tr>
                <tr>
                  <td>color_bg_hover</td>
                  <td>No</td>
                  <td>string</td>
                  <td>#f7523d</td>
                  <td></td>
                </tr>
                <tr>
                  <td>color_bg</td>
                  <td>No</td>
                  <td>string</td>
                  <td>#f86855</td>
                  <td></td>
                </tr>
                <tr>
                  <td>color_bg_hover</td>
                  <td>No</td>
                  <td>string</td>
                  <td>#f7523d</td>
                  <td></td>
                </tr>
                <tr>
                  <td>color_text_hover</td>
                  <td>No</td>
                  <td>string</td>
                  <td>#fff</td>
                  <td></td>
                </tr>
                <tr>
                  <td>color_text</td>
                  <td>No</td>
                  <td>string</td>
                  <td>#fff</td>
                  <td></td>
                </tr>
                <tr>
                  <td>border_radius</td>
                  <td>No</td>
                  <td>string</td>
                  <td>50%</td>
                  <td></td>
                </tr>
                <tr>
                  <td>box_shadow</td>
                  <td>No</td>
                  <td>string</td>
                  <td>0 12px 52px 0 rgba(0, 0, 0, 0.02)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>bot_icon</td>
                  <td>No</td>
                  <td>string</td>
                  <td style="width: 200px">
<pre class="code-svg" style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#400000; font-weight:bold; '>svg</span> <span style='color:#074726; '>height</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#8c0000; '>24</span><span style='color:#800000; '>"</span> <span style='color:#074726; '>viewBox</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#8c0000; '>0</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>0</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>24</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>24</span><span style='color:#800000; '>"</span> <span style='color:#074726; '>width</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#8c0000; '>24</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>></span>
       <span style='color:#a65700; '>&lt;</span><span style='color:#400000; font-weight:bold; '>path</span> <span style='color:#074726; '>d</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#400000; font-weight:bold; '>M</span><span style='color:#8c0000; '>20</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>2</span><span style='color:#400000; font-weight:bold; '>H</span><span style='color:#8c0000; '>4</span><span style='color:#400000; font-weight:bold; '>c</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>1.1</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>0</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>2</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>.9</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>2</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>2</span><span style='color:#400000; font-weight:bold; '>v</span><span style='color:#8c0000; '>18</span><span style='color:#400000; font-weight:bold; '>l</span><span style='color:#8c0000; '>4</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>4</span><span style='color:#400000; font-weight:bold; '>h</span><span style='color:#8c0000; '>14</span><span style='color:#400000; font-weight:bold; '>c</span><span style='color:#8c0000; '>1.1</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>0</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>2</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>.9</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>2</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>2</span><span style='color:#400000; font-weight:bold; '>V</span><span style='color:#8c0000; '>4</span><span style='color:#400000; font-weight:bold; '>c</span><span style='color:#8c0000; '>0</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>1.1</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>.9</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>2</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>2</span><span style='color:#8c0000; '>-</span><span style='color:#8c0000; '>2</span><span style='color:#400000; font-weight:bold; '>z</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#400000; font-weight:bold; '>path</span><span style='color:#a65700; '>></span>
       <span style='color:#a65700; '>&lt;</span><span style='color:#400000; font-weight:bold; '>path</span> <span style='color:#074726; '>d</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#400000; font-weight:bold; '>M</span><span style='color:#8c0000; '>0</span><span style='color:#e60000; '> </span><span style='color:#8c0000; '>0</span><span style='color:#400000; font-weight:bold; '>h</span><span style='color:#8c0000; '>24</span><span style='color:#400000; font-weight:bold; '>v</span><span style='color:#8c0000; '>24</span><span style='color:#400000; font-weight:bold; '>H</span><span style='color:#8c0000; '>0</span><span style='color:#400000; font-weight:bold; '>z</span><span style='color:#800000; '>"</span> <span style='color:#074726; '>fill</span><span style='color:#806030; '>=</span><span style='color:#800000; '>"</span><span style='color:#007d45; '>none</span><span style='color:#800000; '>"</span><span style='color:#a65700; '>></span><span style='color:#a65700; '>&lt;/</span><span style='color:#400000; font-weight:bold; '>path</span><span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#400000; font-weight:bold; '>svg</span><span style='color:#a65700; '>></span>
</pre>
                </td>
                  <td></td>
                </tr>
                <tr>
                  <td>close_icon</td>
                  <td>No</td>
                  <td>string</td>
                  <td>
                  <pre class="code-svg" style="color:#000000;background:#f1f0f0;"><span style="color:#a65700; ">&lt;</span><span style="color:#400000; font-weight:bold; ">svg</span> <span style="color:#074726; ">height</span><span style="color:#806030; ">=</span><span style="color:#800000; ">"</span><span style="color:#8c0000; ">24</span><span style="color:#800000; ">"</span> <span style="color:#074726; ">viewBox</span><span style="color:#806030; ">=</span><span style="color:#800000; ">"</span><span style="color:#8c0000; ">0</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">0</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">24</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">24</span><span style="color:#800000; ">"</span> <span style="color:#074726; ">width</span><span style="color:#806030; ">=</span><span style="color:#800000; ">"</span><span style="color:#8c0000; ">24</span><span style="color:#800000; ">"</span><span style="color:#a65700; ">&gt;</span>
       <span style="color:#a65700; ">&lt;</span><span style="color:#400000; font-weight:bold; ">path</span> <span style="color:#074726; ">d</span><span style="color:#806030; ">=</span><span style="color:#800000; ">"</span><span style="color:#400000; font-weight:bold; ">M</span><span style="color:#8c0000; ">20</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">2</span><span style="color:#400000; font-weight:bold; ">H</span><span style="color:#8c0000; ">4</span><span style="color:#400000; font-weight:bold; ">c</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">1.1</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">0</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">2</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">.9</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">2</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">2</span><span style="color:#400000; font-weight:bold; ">v</span><span style="color:#8c0000; ">18</span><span style="color:#400000; font-weight:bold; ">l</span><span style="color:#8c0000; ">4</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">4</span><span style="color:#400000; font-weight:bold; ">h</span><span style="color:#8c0000; ">14</span><span style="color:#400000; font-weight:bold; ">c</span><span style="color:#8c0000; ">1.1</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">0</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">2</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">.9</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">2</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">2</span><span style="color:#400000; font-weight:bold; ">V</span><span style="color:#8c0000; ">4</span><span style="color:#400000; font-weight:bold; ">c</span><span style="color:#8c0000; ">0</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">1.1</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">.9</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">2</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">2</span><span style="color:#8c0000; ">-</span><span style="color:#8c0000; ">2</span><span style="color:#400000; font-weight:bold; ">z</span><span style="color:#800000; ">"</span><span style="color:#a65700; ">&gt;</span><span style="color:#a65700; ">&lt;/</span><span style="color:#400000; font-weight:bold; ">path</span><span style="color:#a65700; ">&gt;</span>
       <span style="color:#a65700; ">&lt;</span><span style="color:#400000; font-weight:bold; ">path</span> <span style="color:#074726; ">d</span><span style="color:#806030; ">=</span><span style="color:#800000; ">"</span><span style="color:#400000; font-weight:bold; ">M</span><span style="color:#8c0000; ">0</span><span style="color:#e60000; "> </span><span style="color:#8c0000; ">0</span><span style="color:#400000; font-weight:bold; ">h</span><span style="color:#8c0000; ">24</span><span style="color:#400000; font-weight:bold; ">v</span><span style="color:#8c0000; ">24</span><span style="color:#400000; font-weight:bold; ">H</span><span style="color:#8c0000; ">0</span><span style="color:#400000; font-weight:bold; ">z</span><span style="color:#800000; ">"</span> <span style="color:#074726; ">fill</span><span style="color:#806030; ">=</span><span style="color:#800000; ">"</span><span style="color:#007d45; ">none</span><span style="color:#800000; ">"</span><span style="color:#a65700; ">&gt;</span><span style="color:#a65700; ">&lt;/</span><span style="color:#400000; font-weight:bold; ">path</span><span style="color:#a65700; ">&gt;</span>
<span style="color:#a65700; ">&lt;/</span><span style="color:#400000; font-weight:bold; ">svg</span><span style="color:#a65700; ">&gt;</span>
</pre></td>
                  <td></td>
                </tr>
                <tr>
                  <td>z_index</td>
                  <td>No</td>
                  <td>number</td>
                  <td>99998</td>
                  <td></td>
                </tr>
              </tbody>
        </table>

## Config Object

<table>
          <thead>
            <tr>
                <th>Field</th>
                <th>Required</th>
                <th>Type</th>
                <th>Default</th>
                <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>color_bg</td>
              <td>No</td>
              <td>string</td>
              <td>#fff</td>
              <td></td>
            </tr>
            <tr>
              <td>color_main_ui</td>
              <td>No</td>
              <td>string</td>
              <td>#f86855</td>
              <td></td>
            </tr>
          </tbody>
        </table>

## Browser support

- IE 11
- Mozilla Firefox >= 55
- Google Chrome >= 49
- Edge >=15
- Opera >= 47
- Safari (Mac >= 10.11)
- Chrome Mobile
- iOS Safari >= 10.2
- Android Browser >= 5.0
