import { html, css, LitElement } from "lit-element";
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-input/paper-input.js'

class ConexionElement extends LitElement {
  static get properties() {
    return {
     url:{type:String},
     lcd:{type:String}
    };
  }

  constructor() {
    super();
    this.url = "";
    this.lcd = "";
  }

  static get styles() {
    return css`
    .red{
      margin: 0 auto;
      width: 24px;
      height: 24px;
      background-color: #F00;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px;
      color: black;
      -webkit-animation: blinkRed 1s infinite;
    }
    .green{
      margin: 0 auto;
      width: 24px;
      height: 24px;
      background-color: #ABFF00;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px;
      color:rgb(141, 141, 141);
      -webkit-animation: blinkGreen 1s infinite;
    }
    .blue{
      margin: 0 auto;
      width: 24px;
      height: 24px;
      text-align: center;
      color:#026891;
      background-color: #24E0FF;
      border-radius: 50%;
      box-shadow: rgba(6, 110, 180, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3F8CFF 0 2px 14px;
      -webkit-animation: blinkBlue 1s infinite;
    }
    .yellow{
      margin: 0 auto;
      width: 24px;
      height: 24px;
      background-color: #FF0;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89ff00 0 2px 12px;
      color:rgb(141, 141, 141);
      -webkit-animation: blinkYellow 1s infinite;
      -moz-animation: blinkYellow 1s infinite;
      -ms-animation: blinkYellow 1s infinite;
      -o-animation: blinkYellow 1s infinite;
      animation: blinkYellow 1s infinite;
    }
    .conteiner{
      padding: 50px;
    }
    @-moz-keyframes blinkYellow {
    from { background-color: #FF0; }
    50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
    to { background-color: #FF0; }
  }
    @-webkit-keyframes blinkYellow {
      from { background-color: #FF0; }
      50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
      to { background-color: #FF0; }
  } 
    @keyframes blinkYellow {
      from { background-color: #FF0; }
      50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
      to { background-color: #FF0; }
    }
    @-webkit-keyframes blinkRed {
      from { background-color: #F00; }
      50% { background-color: #B00701; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
      to { background-color: #F00; }
    } 
    @-webkit-keyframes blinkGreen {
      from { background-color: #ABFF00; }
      50% { background-color: #2AFD04; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
      to { background-color: #ABFF00; }
    } 
    @-webkit-keyframes blinkBlue {
      from { background-color: #24E0FF; }
      50% { background-color: #045BFD; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
      to { background-color: #24E0FF; }
    } 
    `;
  }

  render() {
    return html`
      <iron-ajax
        id="con"
        url = "${this.url}"
        handle-as="json"
        on-response="_getled"
        on-error="errorResponse">
      </iron-ajax>
       
      <div class="conteiner">
        <paper-input label="LCD"></paper-input>
        <button class="red" @click="${this.high}"></button>
        <button class="green" @click="${this.green}"></button>
        <button class="blue" @click="${this.blue}"></button>
        <button class="yellow" @click="${this.yellow}"></button>
      </div>  
    `;
  }
  high(){
    this.url = 'http://localhost:3000/red';
    this.shadowRoot.querySelector('#con').generateRequest();
    console.log(this.url);
    let even = new customEvent('led-change',{
      detail: this.url
    });
    this.dispatchEvent(even);
  }
  green(){
    this.url = 'http://localhost:3000/green';
    this.shadowRoot.querySelector('#con').generateRequest();
    console.log(this.url);
    let event = new customEvent('led-green',{
      detail: this.url
    });
    this.dispatchEvent(event);
  }
  blue(){
    this.url = 'http://localhost:3000/blue';
    this.shadowRoot.querySelector('#con').generateRequest();
    console.log(this.url);
  }
  yellow(){
    this.url = 'http://localhost:3000/yellow';
    this.$.querySelector('#con').generateRequest();
    console.log(this.url);
  }

}

window.customElements.define("conexion-element", ConexionElement);
