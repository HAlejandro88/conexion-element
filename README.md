# <conexion-element>
![Lit-Element  badged](https://img.shields.io/badge/Lit/Element-1.x-green.svg)
![version](https://img.shields.io/badge/Conexion-1.0-purple.svg)

> This is an example file with default selections.

### Properties
     
| Properties | Value | Description          |   
|------------|-------|----------------------|
| url        | ""    | define url           |
| lcd        | ""    | define the paragraph |

### Events
     
| Event       | Description of event                                             |
|-------------|------------------------------------------------------------------|
| led-change  | changes the element the arduino selected, in this case led-red   |
| led-change  | changes the element the arduino selected, in this case led-green |
| lcd-clicked | print on the lcd screen what you wrote in the text field         |   

### Styles

| Name                      | Type  | Use in case                                               |
|---------------------------|-------|-----------------------------------------------------------|
| -conexion-led1-style       | Mixin | change  style for led1                                    |
| --conexion-led2-style      | Mixin | change  style for led2                                    |
| --conexion-element-style   | Mixin | change style for lcd                                      |
| --conexion--background-size | var   | change style for background-size in the conteiner elemnts |
| --container-padding       | var   | change padding for container  buttons                     |
| --ledbox-height           | var   | change heigh for led                                      |
| --ledbox-with             | var   | change with for led                                       |
## Install

html
    <script type="module">
        import '@element/conexion-element.js';
    </script>
```

## Usage

- `npm start` - Developing server (Refresh the browser, because the first time is not serving). I'm on it.
- `npm run lint` - Linter for LitElement
- `npm run format` - Format prettier
- `npm test` - Run unit testing

## Contributing

PRs accepted. Please, contributing

## License

MIT © Alejandro Soto
