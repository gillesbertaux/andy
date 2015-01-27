# Andy.scss: Open-Source Collection of Useful SASS Mixins Library.

**Current Version: 1.1** 

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

[NEW] In case you want to include the entire file, you can change the default settings in andy.scss. For example, you can change the base font-size:

```
/* ANDY SETTINGS */

$base-font-size: 16px !default;
```

Additional default settings will be soon added.

--------

**Mixins availables:**
  - Background Gradient
  - Background Size
  - Border Corners
  - Box Sizing
  - Center Block
  - Centering Block: Horizontal, Vertical, Both
  - Clearfix
  - Div Outline
  - Font Face
  - Hardware Acceleration
  - Image Retina
  - Line-Height
  - Media Queries
  - Opacity
  - Opacity Black
  - Opacity White
  - Position
  - Radius
  - Scale
  - Shadows
  - Size
  - Text Shadow
  - Translate-x
  - Translate-y
  - Transition
  - Transitions Snippets

--------

Contributors:
- [@mrjacob](https://github.com/mrjacob)
- [@mknadler](https://github.com/mknadler)