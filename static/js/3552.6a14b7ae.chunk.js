"use strict";(self.webpackChunkfestwebsite=self.webpackChunkfestwebsite||[]).push([[3552],{3552:(t,e,a)=>{a.d(e,{Attractor:()=>s});var i=a(4864);class s extends i.Cm{constructor(t){super(t)}clear(){}init(){}interact(t){const e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,i.qS)(t.options.move.attract.distance)*e.retina.pixelRatio);const a=t.attractDistance,s=t.getPosition(),o=e.particles.quadTree.queryCircle(s,a);for(const c of o){if(t===c||!c.options.move.attract.enable||c.destroyed||c.spawning)continue;const e=c.getPosition(),{dx:a,dy:o}=(0,i.If)(s,e),n=t.options.move.attract.rotate,r=a/(1e3*n.x),l=o/(1e3*n.y),u=c.size.value/t.size.value,v=1/u;t.velocity.x-=r*u,t.velocity.y-=l*u,c.velocity.x+=r*v,c.velocity.y+=l*v}}isEnabled(t){return t.options.move.attract.enable}reset(){}}}}]);
//# sourceMappingURL=3552.6a14b7ae.chunk.js.map