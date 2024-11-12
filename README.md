# Dark Mode Library

A simple JavaScript library to toggle between dark and light modes on your website with customizable colors, transitions, and more.

## Features

- Toggle between light and dark modes.
- Customizable colors for light and dark modes.
- Smooth transition effects.
- Toggle button with customizable icons (moon/sun).
- Supports transition types like `ease`, `linear`, `ease-in-out`, etc.
- Customizable transition duration.
- Store user preference in `localStorage` to remember the mode.


## How to Use

1. Download file js and css or clone this repository.
2. Include files in your project.
3. Add the following code to initialize the library:

```javascript
    <script type="module">
        import DarkModeLibrary from './dark-mode-library.js'; ===> مكان ملف js

        const darkModeLibrary = new DarkModeLibrary({
            colors: {
                background: '#000000', لون الخلفية في وضع الدارك مود
                text: '#f0f0f0'  // اللون النص في وضع الدارك مود
            },
            transitionDuration: '0.4s',  // مدة الانتقال بين الأوضاع
            transitionType: 'ease-in-out'  // نوع التحول
        });
    </script>
