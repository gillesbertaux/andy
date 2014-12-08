# Andy.scss: Open-Source Collection of Useful SASS Mixins Library.

**Current Version: 1.0.4** 

Homepage: [http://gillesbertaux.com/andy](http://gillesbertaux.com/andy)
 
The purpose of Andy is to gather useful mixins and avoid enless researches or heavy framework use. Feel free to fork it on Github and add your own mixins: https://github.com/gillesbertaux/andy


## Installation

Download or use Bower:

```
$ bower install andy
```

or

```
gem 'rails-assets-andy'
```

## How to use

You can either pick the mixins you find useful or include the entire file in your SASS project.

Put this mixin in your helper file:

```
@mixin hover($time) {
  -webkit-transition: all $time ease-in-out;
  -o-transition: all $time ease-in-out;
  -moz-transition: all $time ease-in-out;
  transition: all $time ease-in-out;
}
```
Then call it like:

```
@include hover(.3s);
```

--------

**Mixins availables:**
  - Background Gradient
  - Background Size
  - Borders
  - Border Corners
  - Box Sizing
  - Center Block
  - Centering Block: Horizontal, Vertical, Both
  - Clearfix
  - Div Outline
  - Font Face
  - Hardware Acceleration
  - Hover
  - Image Retina
  - Line-Height
  - Media Queries
  - Opacity Black
  - Opacity White
  - Position
  - Radius
  - Scale
  - Shadows
  - Size
  - Text Shadow 
  - TranslateX
  - TranslateY
  - Transitions

--------

Contributors:
- [@mrjacob](https://github.com/mrjacob)
- [@mknadler](https://github.com/mknadler)