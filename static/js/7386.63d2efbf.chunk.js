"use strict";(self.webpackChunkfestwebsite=self.webpackChunkfestwebsite||[]).push([[7386],{7386:(t,e,n)=>{n.d(e,{Bouncer:()=>v});var i=n(4864);const o=2,s=.5,c=Math.PI*s,a=2,r=10;function f(t,e,n,s,a){const r=t.particles.quadTree.query(s,a);for(const f of r)s instanceof i.um?(0,i.ee)((0,i.ch)(f),{position:e,radius:n,mass:n**o*c,velocity:i.Cg.origin,factor:i.Cg.origin}):s instanceof i.Yt&&(0,i.Yh)(f,(0,i.C_)(e,n))}function u(t,e,n,o){(0,i.g$)(n,e,((e,n)=>function(t,e,n,o){const c=document.querySelectorAll(e);c.length&&c.forEach((e=>{const c=e,f=t.retina.pixelRatio,u={x:(c.offsetLeft+c.offsetWidth*s)*f,y:(c.offsetTop+c.offsetHeight*s)*f},l=c.offsetWidth*s*f,d=r*f,v="circle"===n.type?new i.um(u.x,u.y,l+d):new i.Yt(c.offsetLeft*f-d,c.offsetTop*f-d,c.offsetWidth*f+d*a,c.offsetHeight*f+d*a);o(u,l,v)}))}(t,e,n,((e,n,i)=>f(t,e,n,i,o)))))}class l{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}const d="bounce";class v extends i.Ef{constructor(t){super(t)}clear(){}init(){const t=this.container,e=t.actualOptions.interactivity.modes.bounce;e&&(t.retina.bounceModeDistance=e.distance*t.retina.pixelRatio)}interact(){const t=this.container,e=t.actualOptions.interactivity.events,n=t.interactivity.status===i.yG,o=e.onHover.enable,s=e.onHover.mode,c=e.onDiv;n&&o&&(0,i.Sc)(d,s)?function(t,e){const n=t.retina.pixelRatio,o=r*n,s=t.interactivity.mouse.position,c=t.retina.bounceModeDistance;!c||c<0||!s||f(t,s,c,new i.um(s.x,s.y,c+o),e)}(this.container,(t=>this.isEnabled(t))):u(this.container,c,d,(t=>this.isEnabled(t)))}isEnabled(t){var e;const n=this.container,o=n.actualOptions,s=n.interactivity.mouse,c=(null!==(e=null===t||void 0===t?void 0:t.interactivity)&&void 0!==e?e:o.interactivity).events,a=c.onDiv;return!!s.position&&c.onHover.enable&&(0,i.Sc)(d,c.onHover.mode)||(0,i.CY)(d,a)}loadModeOptions(t){t.bounce||(t.bounce=new l);for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(const o of n)t.bounce.load(null===o||void 0===o?void 0:o.bounce)}reset(){}}}}]);
//# sourceMappingURL=7386.63d2efbf.chunk.js.map