![](images/avatara.png)

# Avatara

Create simple avatars with text from a simple and composable API.

## Paths

<dl>
<dt>background</dt>
	<dd>Basic shape, will cover all canvas, if not used the background of the image will be transparent.</dd>
	<p align="right">
		<img src="images/background%3Fcolors%3Dblack.png">
	</p>
<dt>rectangle</dt>
	<dd>Rectangular Shape that goes from side to side in the x axis and has margins in the y axis.</dd>
	<p align="right">
		<img src="images/background.rectangle%3Fcolors%3Dblack%2Cgrey.png">
	</p>
<dt>square</dt>
	<dd>Rectangular Shape that will have the same margins in the both axis.</dd>
	<p align="right">
		<img src="images/background.square%3Fcolors%3Dblack%2Cgrey.png">
	</p>
<dt>circle</dt>
	<dd>Elliptical Shape that will have the same margins in the both axis.</dd>
	<p align="right">
		<img src="images/background.circle%3Fcolors%3Dblack%2Cgrey.png">
	</p>
<dt>gradient</dt>
	<dd>Overlays diagonally a linear gradient form transparent to the given color, used with <code>background</code> creates a two color transition.</dd>
	<p align="right">
		<img src="images/background.gradient%3Fcolors%3Dblack%2Cgrey.png">
	</p>

<dt>text</dt>
	<dd>Overlays a string of up to 3 characters, if its longer only the first 3 chars are going to be used. the text to display is passed with the <code>texts</code> parameter.</dd>
	<p align="right">
		<img src="images/background.text%3Fcolors%3Dblack%2Cgrey.png">
	</p>
</dl>

## Options

The following parameters can be passed to all queries.

-   `width` : Number, sets the width of the resulting image (ex. `width=300`)
-   `height` : Number, sets the height of the resulting image (ex. `height=140`)
-   `colors` : String of comma separated CSS parsable colors (ex. `colors=rgb(100,0,200),dodgerblue`), colors in HEX should not be prepended with a #.
-   `texts` : String of comma separated strings (ex. `texts=abc,123,xyz`)
-   `fonts` : String of comma separated strings of [ plex, courier, cousine, pt, roboto ] (ex. font=[pt,cousine])


## Example


`https://avatara.herokuapp.com/v2/circle/text?colors=234567,white&texts=MAD&fonts=courier`

<p align="center">
<img src="images/example.png">
</p>


`https://avatara.herokuapp.com/v2/background/gradient/circle/square/rectangle/gradient?colors=black,grey,blue,yellow,red,green`


<p align="center">
<img src="images/background.gradient.circle.square.rectangle.gradient%3Fcolors%3Dblack%2Cgrey%2Cblue%2Cyellow%2Cred%2Cgreen.png">
</p>



`https://avatara.herokuapp.com/background/circle/square/rectangle/gradient/text?colors=crimson,tan,mediumblue,green,teal,gold&texts=[777]`

<p align="center">
<img src="images/background.circle.square.rectangle.gradient%3Fcolors%3Dcrimson%2Ctan%2Cmediumblue%2Cgreen%2Cteal%26text%3D777%26textColor%3Dgold.png">
</p>
