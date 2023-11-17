# Projects related to DOM

## Project link
[Click Here (will be updated)](https://stackblitz.com/edit/dom-project-chaiaurcode-aisqik?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project 2 (BMI Calculator)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <link rel="stylesheet" href="style.css">
    <title>Your Local Time</title>
    
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

### CSS

```css
body {
  background-color: #212121;
  color: #fff;
}
.center {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#clock {
  font-size: 40px;
  background-color: orange;
  padding: 20px 50px;
  margin-top: 10px;
  border-radius: 10px;
}
```

### JavaScript

```javascript
const clock = document.getElementById('clock')

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```