// todo add privet fields
/* element */
class AspectRatio extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                box-sizing: content-box !important;
            }
            :host > .wrapper {
                display:grid;
                min-height:inherit;
                max-height:inherit;

                flex: 1 1 auto; /* if host is a flex-container */
            }
            :host > .wrapper > slot {
                grid-area: 1/1;
                display:flex;
                flex-direction:column;
            }
            :host > .wrapper > .spacer {
                grid-area: 1/1;
                min-height:inherit;
                max-height:inherit;
                overflow:hidden;
                display:block;
            }
            :host > .wrapper > .spacer::after {
                content: '';
                display: block;
                box-sizing: border-box;
                padding-bottom: calc( var(--u1-ratio) * 100% );
                height: 0;
                width: 0;
            }
            ::slotted(.-body) {
                flex:1 1 auto;
            }
        </style>
        <div class=wrapper>
            <div class=spacer></div>
            <slot></slot>
        </div>
        `;
    }
}

customElements.define('u1-aspect-ratio', AspectRatio)
