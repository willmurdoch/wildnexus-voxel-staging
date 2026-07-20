import{E as B,P as nt,r as dt,T as w,B as I,A as F,a as Cn,b as st,S as Oe,u as gs,g as Tn,G as bs,H as ws,c as Tt,R as xs,d as ys,U as vs,s as y,e as $n,f as ks,i as le,h as Ln,I as In,j as C,C as zn,k as z,M as An,l as Pn,m as Es,J as Bn,n as Ms,o as Ss,p as ce,q as Cs,t as Ts,v as Ee,w as $s,x as Ls,y as Rn,z as M,D as Is,F as zs,K as As,L as Ps,N as Bs,O as Rs,Q as js,V as qs,W as Ns,X as Hs,Y as Os,Z as D,_ as _s,$ as Ds,a0 as Z,a1 as Me,a2 as Fs,a3 as Ut,a4 as Q,a5 as _e,a6 as Ws,a7 as Us,a8 as Ys,a9 as _,aa as J,ab as de,ac as Gs,ad as Vs,ae as Ks,af as jn,ag as mt,ah as Qs,ai as De,aj as Xs,ak as j,al as Se,am as Fe,an as Zs,ao as Js,ap as ti,aq as qn,ar as Nn,as as ei,at as ni,au as si,av as Y,aw as N,ax as Yt,ay as ii,az as ai,aA as oi,aB as ri,aC as Hn,aD as li,aE as We,aF as Ue,aG as Ye,aH as Gt,aI as ci,aJ as di,aK as pi,aL as hi,aM as bt,aN as rt,aO as lt,aP as On,aQ as _n,aR as K,aS as $t,aT as Dn,aU as ui,aV as Fn,aW as Wn,aX as fi,aY as mi,aZ as Ce,a_ as Te,a$ as Un,b0 as Yn,b1 as Mt,b2 as gi,b3 as $e,b4 as pt,b5 as G,b6 as Le,b7 as Lt,b8 as Gn,b9 as It,ba as Ge,bb as Ve,bc as pe,bd as Ke,be as bi,bf as Vn,bg as wi,bh as xi,bi as yi,bj as vi,bk as ki,bl as Ei,bm as Mi,bn as Si,bo as Vt,bp as Kn,bq as Qn,br as Xn,bs as Ci,bt as Ti,bu as $i,bv as Li,bw as Ii,bx as zi,by as Ai,bz as Pi,bA as ct,bB as Bi,bC as Qe,bD as Ri}from"./game-world-BHuNG43I.js";import{ai as Ie,aj as ze,ak as Zn,al as tt,b as ht,R as ji,d as V,l as qi,am as Ae,o as Pe,an as Jn,f as S,V as Ni,ao as Hi,M as Oi,e as zt,a2 as _i,G as At,c as jt,I as he,Q as ue,E as fe,C as St,A as Di,a as Fi}from"./three-CES_ZQZt.js";const ts=1.81,Wi=1.4,qt=Wi/ts;function gr(i){i.scale.setScalar(qt)}const Xe=.4;function Ui(i){return i.world.get(i.player,nt)?.activeWeapon??"weapon"}function Nt(i){const t=i.world.get(i.player,B);if(t)return t.slots[Ui(i)]??t.slots.weapon??t.slots.weapon2}function br(i){const t=Nt(i)?.baseItemId,e=t?I.get(t)?.attackId:void 0;return e&&F[e]||F.player_slash}function Yi(i){return es(Nt(i))}function es(i){return(i?I.get(i.baseItemId)?.heldKind:null)??null}function Gi(i){const t=i.world.get(i.player,B)?.slots.suit?.baseItemId;return(t?I.get(t)?.skinId:null)??null}function Vi(i){return ns(i.world.get(i.player,B)?.slots.jetpack)}function ns(i){return(i?I.get(i.baseItemId)?.jetpackStyle:null)??null}const Ki={dmgThermal:16747068,dmgCryo:11070719,dmgCorrosive:10477637,dmgVoltaic:9425151},Qi={salvaged:1,fieldMod:1.05,augmented:1.18,resonant:1.3,prototype:1.5,nexusRelic:1.85};function Xi(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Zi(i){return ss(Nt(i))}function ss(i){if(!i)return;let t=null,e=0;for(const n of i.affixes){const s=Cn.get(n.affixId)?.stat,a=s?Ki[s]:void 0;a!=null&&n.value>e&&(e=n.value,t=a)}return{variant:Xi(i.uid),accent:t,glow:Qi[i.rarity]}}function Ze(i){const t=i.world.get(i.player,B),e=i.world.get(i.player,nt);if(!t||!e)return;const n=e.activeWeapon??"weapon";if(t.slots[n]){e.activeWeapon=n;return}e.activeWeapon=t.slots.weapon?"weapon":t.slots.weapon2?"weapon2":"weapon"}function wr(i){const t=i.world.get(i.player,B),e=i.world.get(i.player,nt);if(!t||!e||i.respawn.timer>0||e.meleeWindup||e.groundSlam||(e.swapCd??0)>0)return!1;const s=(e.activeWeapon??"weapon")==="weapon"?"weapon2":"weapon";if(!t.slots[s])return!1;e.activeWeapon=s,e.swapCd=Xe,e.basicCd=Math.max(e.basicCd,Xe),dt(i.world,i.player);const a=Nt(i),o=i.world.get(i.player,w);if(a&&o){const r=a.name??I.get(a.baseItemId)?.name??"Weapon";i.fx.floatText(o.pos,r,"#9ad8ff")}return!0}const Kt=1.05*qt,Je=.34*qt,Ji=1.28*qt;function Qt(i,t){const e=Math.hypot(t.dirX,t.dirZ)||1,n=t.dirX/e,s=t.dirZ/e,a=Math.atan2(t.dirY??0,e),o=Math.cos(a),r=n*o,l=Math.sin(a),c=s*o,d=-s,p=n;return{x:i.x+r*Kt+d*Je,y:i.y+Ji+l*Kt,z:i.z+c*Kt+p*Je}}function xr(i,t,e){const n=Math.hypot(t.dirX,t.dirZ)||1;let s={dirX:t.dirX/n,dirZ:t.dirZ/n},a=Qt(i,s);for(let c=0;c<3;c++){a=Qt(i,s);const d=e.x-a.x,p=e.z-a.z,h=Math.hypot(d,p);if(h<=.05)break;s={dirX:d/h,dirZ:p/h}}a=Qt(i,s);const o=e.x-a.x,r=e.z-a.z,l=Math.hypot(o,r);return l>.05&&(s={dirX:o/l,dirZ:r/l}),{origin:a,aim:s}}const ta={weapon_baton:"Quick melee swipes",weapon_hammer:"Slow overhead slams — the shockwave hits all around",weapon_pistol:"Rapid laser shots",weapon_rifle:"Maintained beam — hold to channel",weapon_carbine:"Steady pulse bolts",weapon_spear:"Long, narrow melee thrusts",weapon_scythe:"Sweeping melee arcs — hits the whole crowd",weapon_fists:"Lightning-fast frozen jabs",weapon_ripsaw:"Grinding melee cuts that corrode",weapon_scattergun:"Point-blank pellet fan",weapon_railgun:"Slow, devastating slugs",weapon_cryocaster:"Bursting frost bolts",weapon_sprayer:"Short acid stream — hold to channel"},ot=40,yr=ot,tn=["weapon","suit","jetpack","lifeSupport","controlModule","neuralInterface","module"],wt=["salvaged","fieldMod","augmented","resonant","prototype","nexusRelic"];function ea(i){let t=i.items.length;for(;t>0&&i.items[t-1]==null;)t--;i.items.length=t}function R(i){const t=i.items.length;i.capacity=t<ot?ot:(Math.floor(t/ot)+1)*ot}function ut(i){return i.items.filter(t=>t!=null)}function na(i,t,e){if(t==="manual")return;const n=ut(i).map((l,c)=>({item:l,index:c})),s=l=>(l.name??I.get(l.baseItemId)?.name??l.baseItemId).toLocaleLowerCase(),a=l=>{const c=I.get(l.baseItemId)?.slot;return c?tn.indexOf(c):tn.length},o=(l,c)=>t==="type"?a(l)-a(c)||s(l).localeCompare(s(c)):t==="rarity"?wt.indexOf(l.rarity)-wt.indexOf(c.rarity)||l.itemLevel-c.itemLevel||s(l).localeCompare(s(c)):t==="level"&&(l.itemLevel-c.itemLevel||wt.indexOf(l.rarity)-wt.indexOf(c.rarity))||s(l).localeCompare(s(c)),r=e==="asc"?1:-1;n.sort((l,c)=>r*o(l.item,c.item)||l.index-c.index),i.items=n.map(({item:l})=>l),R(i)}function Pt(i){return i.items.some(t=>t==null)?!0:(R(i),i.items.length<i.capacity)}function ft(i,t){const e=i.items.findIndex(n=>n==null);return e>=0?i.items[e]=t:i.items.push(t),R(i),!0}function gt(i,t){const e=i.items.findIndex(s=>s?.uid===t);if(e<0)return null;const n=i.items[e];return i.items[e]=null,ea(i),R(i),n}let me=0;function ge(){return`it_${++me}`}function sa(i){const t=/^it_(\d+)$/.exec(i),e=t?Number(t[1]):NaN;Number.isSafeInteger(e)&&(me=Math.max(me,e))}function vr(i){for(const e of i)sa(e.uid);const t=new Set;for(const e of i){if(!e.uid||t.has(e.uid)){let n=ge();for(;t.has(n);)n=ge();e.uid=n}t.add(e.uid)}}const ia=new Set(["power","maxLife","armor","comboMarkDuration","projectiles"]),aa=(i,t)=>ia.has(i)?Math.round(t):Math.round(t*1e3)/1e3;function Be(i,t,e){let n=0;for(const a of t)n+=e(a);let s=i.next()*n;for(const a of t)if(s-=e(a),s<=0)return a;return t[t.length-1]}function oa(i,t){const e=1+Math.max(0,t);return Be(i,xs,n=>n.id==="salvaged"?n.weight:n.weight*e).id}function is(i,t,e,n){const s=t.allowedAffixes.map(l=>Cn.get(l)).filter(l=>!!l&&l.tiers.some(c=>c.minItemLevel<=e)),a=[],o=new Set,r=Math.min(n,s.length);for(let l=0;l<r;l++){const c=s.filter(h=>!o.has(h.group??h.id));if(c.length===0)break;const d=Be(i,c,()=>1);o.add(d.group??d.id);const p=ra(i,d,e);p&&a.push({affixId:d.id,tier:p.tier,value:aa(d.stat,i.range(p.min,p.max))})}return a}function ra(i,t,e){const n=t.tiers.filter(s=>s.minItemLevel<=e);return n.length===0?null:Be(i,n,s=>s.weight)}function be(i,t,e,n){const s=st(n),a=i.int(s.affixMin,s.affixMax),o={uid:ge(),baseItemId:t.id,itemLevel:e,rarity:n,affixes:is(i,t,e,a)};if(n==="resonant"&&Oe.has(t.id)&&(o.setId=Oe.get(t.id)),n==="prototype"||n==="nexusRelic"){const r=gs(t.id,n);r&&(o.uniquePowerId=r.id)}return t.slot!=="module"&&!o.setId&&!o.uniquePowerId&&(o.name=Tn(i,t,n,o.affixes)),o}const la=.55,ca=.09;function da(i){return Math.max(1,Math.round(i*1.8-2))}function en(i){return Math.max(1,Math.round(i*1.4))}function Xt(i,t){if(t&&t.length&&i.chance(la)){const e=new Set(t),n=Tt.filter(s=>e.has(s.slot));if(n.length)return i.pick(n)}return i.pick(Tt)}function pa(i,t,e){const n=s=>{const a=s.map(o=>I.get(o)).filter(o=>!!o);return a.length?i.pick(a):null};return t==="resonant"?n(ys)??Xt(i,e):t==="prototype"||t==="nexusRelic"?n(vs[t])??Xt(i,e):Xt(i,e)}function kr(i,t,e,n=.45,s){const a=i.chance(.55)?i.int(2,6)+Math.round(t*1.5):0;if(!i.chance(Math.min(.95,n*bs*(1+e*.5))))return{item:null,credits:a};const o=oa(i,e),r=i.chance(ca)?i.pick(ws):pa(i,o,s),l=Math.max(r.minItemLevel,da(t)+i.int(-2,2));return{item:be(i,r,l,o),credits:a}}function T(){if(document.getElementById("wn-holo-shared-css"))return;const i=document.createElement("style");i.id="wn-holo-shared-css",i.textContent=`
    .wn-scrim{background:radial-gradient(circle at 50% 58%,rgba(10,30,48,0.8),rgba(3,6,12,0.92)) !important;}
    .wn-glass{position:relative;color:#d6f3ff;overflow:hidden;
      background:linear-gradient(180deg,rgba(34,82,116,0.42),rgba(14,38,60,0.58)) !important;
      border:1px solid rgba(120,220,255,0.5) !important;
      box-shadow:0 0 36px rgba(70,190,255,0.28),inset 0 0 26px rgba(80,200,255,0.08);
      backdrop-filter:blur(6px);animation:wn-glass-pop 0.2s ease,wn-holo-glow 3.6s ease-in-out infinite;}
    /* live display: soft-edged scanlines scroll seamlessly + the glow breathes.
       The overlay is oversized past the panel (clipped by the glass's
       overflow:hidden) and slides down exactly 6px = two full 3px stripe periods
       via a compositor transform, so the loop lands the pattern back on itself —
       no snap, whatever the panel's size. box-shadow is NOT !important: CSS
       animations can't override !important, and the glow animates it. */
    .wn-glass::after{content:'';position:absolute;left:0;right:0;top:-6px;height:calc(100% + 12px);
      pointer-events:none;z-index:6;will-change:transform;
      background:repeating-linear-gradient(0deg,rgba(140,230,255,0.06) 0,rgba(140,230,255,0.06) 0.5px,transparent 2px,transparent 3px);
      animation:wn-scan 2s linear infinite;}
    @keyframes wn-scan{to{transform:translateY(6px);}}
    @keyframes wn-holo-glow{0%,100%{box-shadow:0 0 36px rgba(70,190,255,0.28),inset 0 0 26px rgba(80,200,255,0.08);}
      50%{box-shadow:0 0 46px rgba(70,190,255,0.4),inset 0 0 30px rgba(80,200,255,0.13);}}
    @keyframes wn-glass-pop{from{opacity:0;transform:translateY(7px) scale(0.99);}to{opacity:1;transform:none;}}
    /* lightweight live-display chrome for persistent HUD elements: the same
       seamless scanline scroll WITHOUT the glass frame — the element keeps its
       own background/border/shadow. Pair with .wn-live-glow only where the
       element's shadow is the generic holo glow (the breathing animation
       replaces box-shadow, so bespoke inset glows would be lost). */
    .wn-live{position:relative;overflow:hidden;}
    .wn-live::after{content:'';position:absolute;left:0;right:0;top:-6px;height:calc(100% + 12px);
      pointer-events:none;z-index:6;will-change:transform;
      background:repeating-linear-gradient(0deg,rgba(140,230,255,0.06) 0,rgba(140,230,255,0.06) 0.5px,transparent 2px,transparent 3px);
      animation:wn-scan 2s linear infinite;}
    .wn-live-glow{animation:wn-live-glow 3.6s ease-in-out infinite;}
    @keyframes wn-live-glow{0%,100%{box-shadow:0 0 14px rgba(70,190,255,0.22);}
      50%{box-shadow:0 0 22px rgba(70,190,255,0.36);}}
    /* holo text helpers panels can opt into */
    .wn-holo-h{color:#9fe3ff !important;}
    .wn-holo-dim{color:#7fb0cc !important;}
    /* shared Back button + panel header, matching the device sub-screens */
    .wn-back{background:rgba(20,50,72,0.5);border:1px solid rgba(120,220,255,0.28);color:#bfecff;
      font-size:12px;font-weight:600;cursor:pointer;padding:4px 10px;border-radius:7px;}
    .wn-back:hover{background:rgba(40,90,120,0.8);color:#fff;}
    .wn-phead{position:relative;z-index:1;display:flex;align-items:center;gap:10px;margin-bottom:12px;}
    .wn-phint{margin-left:auto;font-size:10px;color:#6f9fbc;}
    .wn-close-btn{flex:none;width:24px;height:24px;padding:0;border-radius:7px;cursor:pointer;line-height:1;
      display:flex;align-items:center;justify-content:center;font-size:12px;color:#bfecff;
      border:1px solid rgba(120,220,255,0.3);background:rgba(20,50,72,0.62);}
    .wn-close-btn:hover{background:rgba(40,90,120,0.85);color:#fff;}
    /* holo scrollbar for the item grids — a thin, glowing cyan thumb (vertical only) */
    .wn-grid{scrollbar-width:thin;scrollbar-color:rgba(120,220,255,0.55) rgba(8,24,40,0.5);}
    .wn-grid::-webkit-scrollbar{width:9px;}
    .wn-grid::-webkit-scrollbar-track{background:rgba(8,24,40,0.55);border-radius:6px;margin:2px 0;}
    .wn-grid::-webkit-scrollbar-thumb{border-radius:6px;
      background:linear-gradient(180deg,rgba(140,230,255,0.6),rgba(70,160,220,0.45));
      border:1px solid rgba(150,235,255,0.4);box-shadow:0 0 8px rgba(70,190,255,0.5);}
    .wn-grid::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,rgba(170,240,255,0.85),rgba(95,190,240,0.65));}
    /* keyboard/gamepad focus (accessibility): every interactive element gets a
       visible cyan ring — :focus-visible for Tab, .wn-gamepad-focus for the pad */
    button:focus-visible,input:focus-visible,select:focus-visible,[tabindex]:focus-visible{
      outline:2px solid #7fe0ff !important;outline-offset:2px;}
    .wn-gamepad-focus{outline:2px solid #7fe0ff !important;outline-offset:2px;
      box-shadow:0 0 14px rgba(90,200,255,0.55) !important;}
  `,document.head.appendChild(i),as()}function as(){const i="wn-reduced-motion-css",t=document.getElementById(i);if(!y.reducedMotion){t?.remove();return}if(t)return;const e=document.createElement("style");e.id=i,e.textContent=`
    .wn-glass,.wn-glass::after,.wn-live::after,.wn-live-glow{animation:none !important;}
  `,document.head.appendChild(e)}const E=(i,t)=>`<svg class="wn-item-svg wn-item-silhouette" data-item-icon="${i}" viewBox="0 0 32 32" aria-hidden="true">${t}</svg>`,ha=E("unknown",'<path d="M12 11a4 4 0 1 1 7 3c-3 2-3 3-3 5"/><circle class="solid" cx="16" cy="24" r="1.5"/>'),ua={baton:E("weapon-baton",'<path class="solid" d="m8.5 24.5 3 3 3.2-3.2-3-3z"/><path class="energy" d="m12.5 22.5 12-12 2.8-5.8-5.8 2.8-12 12z"/>'),hammer:E("weapon-hammer",'<path class="solid" d="m5 8 4-4 9 4-4 7z"/><path d="m14 13 4 3-8 12-4-3z"/><path class="energy" d="m18 8 5-2 4 4-3 5-7-3"/>'),pistol:E("weapon-pistol",'<path class="solid" d="M5 9h20v7H14l-2 12H7l1-12H5z"/><path class="energy" d="M21 11h6M10 19h4"/>'),rifle:E("weapon-rifle",'<path class="solid" d="M3 12h21l5 3-5 3H14l-4 8H5l2-8H3z"/><path class="energy" d="M10 9h12v3M18 15h9"/>'),carbine:E("weapon-carbine",'<path class="solid" d="M3 11h19l6 4-6 4h-7l-3 7H7l2-7H3z"/><path class="energy" d="m18 12-3 6m6-3h7M7 14h6"/>'),spear:E("weapon-spear",'<path d="M6 27 23 10"/><path class="solid" d="m19 7 10-4-4 10zM4 25l3 3-4 1z"/><path class="energy" d="m19 7 6 6"/>'),scythe:E("weapon-scythe",'<path d="M11 28 20 8"/><path class="solid" d="M18 5c5-2 9 0 11 4-5-1-9 1-12 6l-3-2z"/><path class="energy" d="M18 6c4-1 7 0 9 2"/>'),fists:E("weapon-fists",'<path class="solid" d="M4 13h3V8h4v4h2V7h4v7l-3 9H7l-3-5zm14 2h2v-5h4v4h2v-3h3v8l-4 7h-7z"/><path class="energy" d="M7 19h7m5 2h7"/>'),ripsaw:E("weapon-ripsaw",'<path class="solid" d="m6 24 5-9 7 4-5 9z"/><circle cx="22" cy="11" r="6"/><path d="m22 2 1 3m6 0-3 2m5 5-3-1m0 7-2-3m-6 5 1-3m-7 0 3-2m-5-5 3 1m1-7 2 3"/><circle class="energy" cx="22" cy="11" r="2"/>'),scattergun:E("weapon-scattergun",'<path class="solid" d="M3 10h22l4 4-4 4H14l-4 8H5l2-8H3z"/><path class="energy" d="M8 12h17M8 16h17"/>'),railgun:E("weapon-railgun",'<path class="solid" d="M2 13h24l4 3-4 3H2z"/><path d="m8 13 3-5h7l3 5m-9 6-3 7h6l4-7"/><path class="energy" d="M5 16h24m-15-5h4"/>'),cryocaster:E("weapon-cryocaster",'<path class="solid" d="M3 12h20l6 4-6 4H13l-3 7H5l2-7H3z"/><path class="energy" d="m18 8 0 16m-7-12 14 8m0-8-14 8"/>'),sprayer:E("weapon-sprayer",'<path class="solid" d="M4 13h16l5 3-5 3h-7l-2 8H6l2-8H4z"/><path d="M9 8h8v5H9z"/><path class="energy" d="M25 16h4m-1 3c2 2 2 4 0 5-2-1-2-3 0-5"/>')},nn={castaway:'<path class="energy" d="M12 13h8m-4-4v13"/>',drifter:'<path class="energy" d="m11 12 5-3 5 3m-8 7 3 4 3-4"/>',marauder:'<path class="solid" d="M5 10h7v5H5zm15 0h7v5h-7z"/><path class="energy" d="M11 18h10"/>',zephyr:'<path class="energy" d="m10 12-5 4 6 2m11-6 5 4-6 2M13 10l3 13 3-13"/>',foundry:'<rect class="energy" x="12" y="12" width="8" height="8" rx="1"/><path d="m14 16 2-2 2 2-2 2z"/>',nullwake:'<path class="energy" d="M20 11a6 6 0 1 0 0 10 5 5 0 1 1 0-10Z"/>'};function fa(i="castaway"){const t=nn[i]??nn.castaway;return E(`suit-${i}`,`<circle class="solid" cx="16" cy="6.5" r="4"/><path class="solid" d="m9 11 4-2h6l4 2 4 10-4 2-2-6v12h-4l-1-8-1 8h-4V17l-2 6-4-2z"/>${t}`)}const ma={ranger:E("jetpack-ranger",'<path class="solid" d="M10 7h12v15H10zM5 11h5v11H5zm17 0h5v11h-5z"/><path class="energy" d="m8 23-2 6 5-5m13-1 2 6-5-5M13 4h6v3"/>'),ascension:E("jetpack-ascension",'<path class="solid" d="m16 3 7 7-2 13H11L9 10z"/><path d="M13 11h6v9h-6z"/><path class="energy" d="m12 24-2 6 6-5 6 5-2-6M16 5v5"/>'),turbine:E("jetpack-turbine",'<path class="solid" d="M6 8h20v16H6z"/><circle cx="16" cy="16" r="7"/><path class="energy" d="M16 9v7l5-4m-5 4 0 7m0-7-5 4m5-4 5 4m-5-4-5-4"/><path d="M9 25 7 29m16-4 2 4"/>')},sn={lifeSupport:E("life-support",'<path class="solid" d="M16 27S7 22 7 13a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 9-9 14-9 14Z"/><path class="energy" d="M8 17h5l2-6 3 11 2-5h5"/>'),controlModule:E("control-module",'<rect class="solid" x="6" y="7" width="20" height="18" rx="3"/><path class="energy" d="M10 12h12M10 16h5m3 0h4M10 20h8"/><circle class="energy" cx="22" cy="20" r="2"/>'),neuralInterface:E("neural-interface",'<path class="solid" d="M13 6a5 5 0 0 0-5 5v2a4 4 0 0 0 1 7v2h5v-5h-3m8-11a5 5 0 0 1 5 5v2a4 4 0 0 1-1 7v2h-5v-5h3"/><path class="energy" d="M13 10h6v6h-6zm3 6v8"/>'),module:E("hab-module",'<path class="solid" d="M5 10h22v14H5zM10 6h12v4"/><path class="energy" d="M9 14h5v6H9zm9 0h5v3h-5zM18 21h5M5 12h22"/>')};function ga(i,t){const e=I.get(i);return e?e.slot==="weapon"?ua[e.heldKind??"carbine"]:e.slot==="suit"?fa(e.skinId):e.slot==="jetpack"?ma[e.jetpackStyle??"ranger"]:sn[e.slot]??sn.module:ha}const ba=new Set(["powerPct","critChance","critMult","moveSpeedPct","jetFuelPct","jetRechargePct","xpGain","companionDamage","bondGain","cooldownPct","lifeLeechPct","dmgKinetic","dmgThermal","dmgCryo","dmgCorrosive","dmgVoltaic","resKinetic","resThermal","resCryo","resCorrosive","resVoltaic","resPsionic","resVoid","resAll"]),we={power:"Power",powerPct:"Increased Damage",maxLife:"Life",armor:"Armor",critChance:"Crit Chance",critMult:"Crit Damage",moveSpeedPct:"Move Speed",lifeRegen:"Life Regen",jetFuelPct:"Fuel Capacity",jetLaunchBoost:"Launch Boost",jetRechargePct:"Fuel Recharge",xpGain:"Bonus XP",companionDamage:"Companion Damage",bondGain:"Bond Gain",comboMarkDuration:"Combo Mark Duration",lifeOnKill:"Life per Kill",cooldownPct:"Cooldown Reduction",projectiles:"Extra Projectiles",lifeLeechPct:"Life Leech",dmgKinetic:"Kinetic Damage",dmgThermal:"Thermal Damage",dmgCryo:"Cryo Damage",dmgCorrosive:"Corrosive Damage",dmgVoltaic:"Voltaic Damage",resKinetic:"Kinetic Resist",resThermal:"Thermal Resist",resCryo:"Cryo Resist",resCorrosive:"Corrosive Resist",resVoltaic:"Voltaic Resist",resPsionic:"Psionic Resist",resVoid:"Void Resist",resAll:"All Resist"},wa=new Set(["jetLaunchBoost","lifeRegen"]);function xe(i,t,e=!1){const n=e&&t>0?"+":"";return ba.has(i)?`${n}${Math.round(t*1e3)/10}%`:wa.has(i)?`${n}${Math.round(t*10)/10}`:`${n}${Math.round(t)}`}function os(i){if(i.uniquePowerId){const t=$n.get(i.uniquePowerId);if(t)return t.name}return i.name??I.get(i.baseItemId)?.name??"Unknown"}const H=i=>i.identified===!1;function et(i,t,e="",n={}){const s=Object.entries(t).map(([r,l])=>`data-${r}="${l}"`).join(" ");if(!i)return`<div class="wn-cell empty" ${s}><span>${e}</span></div>`;const a=st(i.rarity).color,o=H(i)?'<span class="wn-unid-mark">?</span>':ga(i.baseItemId);return`<div class="wn-cell${H(i)?" unid":""}" ${n.draggable?'draggable="true" ':""}${s} style="border-color:${a};box-shadow:inset 0 0 12px ${a}33">
    <span class="wn-item-art" style="color:${a}">${o}</span></div>`}function rs(i){let t="";if(i.uniquePowerId){const e=$n.get(i.uniquePowerId);if(e){const n=e.proc?`<div class="wn-unique-d">⚡ ${e.proc.desc}</div>`:"";t+=`<div class="wn-unique"><b>${e.name}</b><div class="wn-unique-d">${e.desc}</div>${n}</div>`}}if(i.setId){const e=ks[i.setId];if(e){const n=e.bonuses.map(s=>`<div class="wn-set-b">(${s.pieces}) ${s.desc}</div>`).join("");t+=`<div class="wn-set"><b>${e.name}</b>${n}</div>`}}return t}function xa(i,t=""){const e=I.get(i.baseItemId),n=st(i.rarity),s=e?.flavor?`<div class="wn-flavor">${e.flavor}</div>`:"";if(H(i))return`
      <div class="wn-tip-h" style="color:${n.color}">Unidentified ${e?.name??"Item"}</div>
      <div class="wn-tip-sub">${n.name} &middot; Item Lv ${i.itemLevel}</div>
      <div class="wn-line dim">Unknown modifiers — appraise at the Artificer.</div>${s}${t}`;const a=le(i),o=Object.entries(a).map(([r,l])=>`<div class="wn-line">${xe(r,l,!0)} ${we[r]}</div>`).join("");return`
    <div class="wn-tip-h" style="color:${n.color}">${os(i)}</div>
    <div class="wn-tip-sub">${n.name} · Item Lv ${i.itemLevel}</div>
    <div class="wn-tip-stats">${o||'<div class="wn-line dim">no modifiers</div>'}</div>${rs(i)}${s}${t}`}class Re{el;constructor(t){Ht(),this.el=document.createElement("div"),this.el.className="wn-tip",this.el.style.display="none",document.body.appendChild(this.el)}show(t,e,n=""){this.el.innerHTML=xa(t,n),this.el.style.display="block",this.move(e)}hide(){this.el.style.display="none"}move(t){this.el.style.display==="block"&&(this.el.style.left=`${Math.min(t.clientX+16,window.innerWidth-260)}px`,this.el.style.top=`${Math.min(t.clientY+16,window.innerHeight-220)}px`)}}function Ht(){if(document.getElementById("wn-item-css"))return;const i=document.createElement("style");i.id="wn-item-css",i.textContent=`
    .wn-cell{width:44px;height:44px;border:1px solid rgba(120,220,255,0.24);border-radius:6px;
      background:rgba(40,96,134,0.18);display:flex;align-items:center;justify-content:center;cursor:pointer;
      transition:background 0.08s, border-color 0.08s, box-shadow 0.08s;}
    .wn-cell:hover{background:rgba(56,124,170,0.32);box-shadow:inset 0 0 13px rgba(90,205,255,0.5) !important;}
    .wn-cell.wn-drag-over{border-color:rgba(150,235,255,0.95) !important;background:rgba(70,150,200,0.42);
      box-shadow:inset 0 0 13px rgba(120,220,255,0.55) !important;}
    .wn-cell[draggable=true]{cursor:grab;}
    .wn-cell.empty{cursor:default;border-style:dashed;border-color:rgba(120,220,255,0.14);background:rgba(20,48,70,0.2);}
    .wn-cell span{font:700 9px ui-monospace,monospace;}
    .wn-cell.empty span{color:#3f6786;font-size:8px;}
    .wn-item-art{display:flex;width:100%;height:100%;align-items:center;justify-content:center;overflow:hidden;
      filter:drop-shadow(0 2px 3px rgba(0,0,0,.6));}
    .wn-item-svg{width:29px;height:29px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linecap:round;
      stroke-linejoin:round;opacity:.94;}
    .wn-item-svg .solid{fill:currentColor;stroke:currentColor;stroke-width:.75;}
    .wn-item-svg .energy{stroke:#d9f7ff;filter:drop-shadow(0 0 2px currentColor);}
    .wn-item-svg .cut{fill:none;}
    .wn-cell.unid .wn-item-art{font-size:15px;animation:wn-unid 1.4s ease-in-out infinite;}
    @keyframes wn-unid{0%,100%{opacity:0.5}50%{opacity:1}}
    .wn-tip{position:fixed;z-index:40;min-width:200px;max-width:240px;padding:10px 12px;border-radius:8px;
      background:linear-gradient(180deg,rgba(20,52,76,0.97),rgba(9,26,42,0.97));color:#d6f3ff;
      border:1px solid rgba(120,220,255,0.45);pointer-events:none;
      font-family:ui-sans-serif,system-ui,sans-serif;box-shadow:0 10px 30px #000a,0 0 22px rgba(70,190,255,0.18);}
    .wn-tip-h{font-weight:800;font-size:14px;}
    .wn-tip-sub{font-size:10px;color:#7fb0cc;margin-bottom:6px;}
    .wn-line{font-size:12px;color:#cfe8f7;line-height:1.5;}
    .wn-line.dim{color:#6f9fbc;}
    .wn-tip-foot{margin-top:8px;border-top:1px solid rgba(120,220,255,0.18);padding-top:6px;font-size:12px;color:#ffe08a;}
    .wn-flavor{margin-top:7px;font-size:11px;font-style:italic;color:#8fb8d4;line-height:1.4;}
    .wn-unique{margin-top:8px;border-top:1px solid rgba(255,138,60,0.3);padding-top:6px;}
    .wn-unique b{color:#ff9a4c;font-size:12px;}
    .wn-unique-d{color:#e7c2a0;font-size:11px;font-style:italic;line-height:1.4;margin-top:2px;}
    .wn-set{margin-top:8px;border-top:1px solid rgba(55,210,122,0.3);padding-top:6px;}
    .wn-set b{color:#5be08a;font-size:12px;}
    .wn-set-b{color:#9fd8b4;font-size:11px;line-height:1.4;}
  `,document.head.appendChild(i)}function Ot(){if(T(),document.getElementById("wn-svc-css"))return;const i=document.createElement("style");i.id="wn-svc-css",i.textContent=`
    .wn-stash-modal,.wn-vendor-modal{position:fixed;inset:0;z-index:30;display:flex;align-items:center;
      justify-content:center;background:radial-gradient(circle at 50% 58%,rgba(10,30,48,0.8),rgba(3,6,12,0.92));
      pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
    /* the box carries wn-glass for its frame; only service layout lives here */
    .wn-svc-box{display:flex;flex-direction:column;gap:14px;padding:20px 24px;border-radius:14px;}
    .wn-svc-box > *{position:relative;z-index:1;}
    .wn-svc-head{display:flex;align-items:center;gap:12px;}
    .wn-svc-head h2{font-size:18px;letter-spacing:0.1em;color:#9fe3ff;font-weight:800;}
    .wn-stash-count,.wn-vendor-credits{font-size:12px;color:#7fb0cc;margin-left:auto;}
    .wn-vendor-credits b{color:#ffe08a;}
    .wn-svc-cols{display:flex;gap:22px;}
    .wn-svc-col h3{font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#9fe3ff;margin-bottom:9px;}
    .wn-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:6px;width:404px;max-height:316px;
      overflow-x:hidden;overflow-y:auto;align-content:start;}
    .wn-svc-foot{font-size:11px;color:#6f9fbc;}
    .wn-svc-foot kbd{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:17px;
      padding:0 4px;border-radius:4px;background:rgba(120,220,255,0.16);border:1px solid rgba(150,220,255,0.32);
      font-size:10px;font-weight:700;color:#cfeeff;}
  `,document.head.appendChild(i)}class ya{constructor(t){this.ctx=t,this.canvas=document.createElement("canvas"),this.canvas.className="wn-character-preview",this.canvas.setAttribute("aria-label","Equipped character preview")}canvas;renderer=null;scene=null;camera=null;character=null;raf=0;last=0;ensureScene(){if(this.scene&&this.camera&&this.character)return;this.scene=new Ie,this.camera=new ze(31,1,.1,100),this.character=Ln(),this.character.object.rotation.y=.38,this.scene.add(this.character.object),this.scene.add(new Zn(12577535,528669,1.7));const t=new tt(16777215,2.1);t.position.set(3,4.5,4),this.scene.add(t);const e=new tt(6937087,2.4);e.position.set(-3,2.4,-2),this.scene.add(e);const n=new ht(new ji(.56,.78,48),new V({color:6478335,transparent:!0,opacity:.28,side:qi,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.015,this.scene.add(n),this.camera.position.set(0,1.25,4.7),this.camera.lookAt(0,.98,0)}show(){this.ensureScene(),this.renderer||(this.renderer=new Ae({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Pe,this.renderer.setClearColor(0,0)),this.canvas.style.display="block",this.syncEquipment(),this.resize(),this.last=performance.now(),this.raf||(this.raf=requestAnimationFrame(this.loop))}hide(){cancelAnimationFrame(this.raf),this.raf=0,this.canvas.style.display="none"}syncEquipment(){this.character&&(this.character.setSuit(Gi(this.ctx)),this.character.setJetpack(Vi(this.ctx)),this.character.setWeapon(Yi(this.ctx),Zi(this.ctx)))}resize(){if(!this.renderer||!this.camera)return;const t=this.canvas.clientWidth||1,e=this.canvas.clientHeight||1;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}loop=t=>{if(!this.renderer||!this.scene||!this.camera||!this.character)return;const e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.character.update(e,In),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.loop)}}const va=["weapon","weapon2","suit","jetpack","lifeSupport","controlModule","neuralInterface"],an={weapon:"Weapon",weapon2:"Weapon 2",suit:"Spacesuit",jetpack:"Jetpack",lifeSupport:"Life Support",controlModule:"Control Module",neuralInterface:"Neural Interface"},Ct=i=>i==="weapon"||i==="weapon2",ls="wn.inventory.sortMode",cs="wn.inventory.sortDirection",ds=["manual","type","rarity","level","name"];function ka(){try{const i=localStorage.getItem(ls);return i&&ds.includes(i)?i:"manual"}catch{return"manual"}}function Ea(){try{return localStorage.getItem(cs)==="asc"?"asc":"desc"}catch{return"desc"}}function Ma(i,t){return i==="weapon"?t.slots.weapon?t.slots.weapon2?"weapon":"weapon2":"weapon":i}class Er{constructor(t,e){this.ctx=e,this.root=t,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-inv wn-scrim",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-inv-box wn-glass">
        <div class="wn-phead"><button class="wn-back" data-close>‹ Back</button><span class="wn-phint">[I] / Esc</span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-inv-cols">
          <div class="wn-col wn-loadout-col">
            <h3>Equipment</h3>
            <div class="wn-paperdoll"><div class="wn-preview-host"></div><div class="wn-equip"></div></div>
            <h3 class="wn-details-title">Character Details</h3><div class="wn-stats"></div>
          </div>
          <div class="wn-col">
            <div class="wn-inv-head">
              <h3>Inventory</h3>
              <div class="wn-sort-controls">
                <label>Sort
                  <select data-sort-mode aria-label="Sort inventory">
                    <option value="manual">Manual</option>
                    <option value="type">Type</option>
                    <option value="rarity">Rarity</option>
                    <option value="level">Item level</option>
                    <option value="name">Name</option>
                  </select>
                </label>
                <button data-sort-direction aria-label="Reverse inventory sort" title="Reverse sort order">↓</button>
              </div>
            </div>
            <div class="wn-grid"></div>
          </div>
        </div>
      </div>`,this.root.appendChild(this.panel),this.preview=new ya(this.ctx),this.panel.querySelector(".wn-preview-host").appendChild(this.preview.canvas),this.equipEl=this.panel.querySelector(".wn-equip"),this.statsEl=this.panel.querySelector(".wn-stats"),this.invEl=this.panel.querySelector(".wn-grid"),this.tip=document.createElement("div"),this.tip.className="wn-tip",this.tip.style.display="none",document.body.appendChild(this.tip),this.panel.addEventListener("click",this.onClick),this.panel.addEventListener("mouseover",this.onOver),this.panel.addEventListener("mouseout",this.onOut),this.panel.addEventListener("mousemove",this.onMove),this.panel.addEventListener("dragstart",this.onDragStart),this.panel.addEventListener("dragover",this.onDragOver),this.panel.addEventListener("drop",this.onDrop),this.panel.addEventListener("dragend",this.onDragEnd),this.panel.addEventListener("change",this.onChange),window.addEventListener("keydown",this.onKey)}root;panel;equipEl;invEl;statsEl;preview;tip;open=!1;dragLoc="";dragKey="";activeZone=null;sortMode=ka();sortDirection=Ea();onBack=null;onDragStart=t=>{const e=t.target.closest(".wn-cell");!e||e.classList.contains("empty")||(this.dragLoc=e.dataset.loc,this.dragKey=e.dataset.key,t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",this.dragKey),this.tip.style.display="none")};dropTarget(t){const e=t.closest(".wn-cell");if(this.dragLoc==="inv"&&e?.dataset.loc==="equip")return e;const n=t.closest(".wn-equip"),s=t.closest(".wn-grid");return this.dragLoc==="inv"&&n?n:this.dragLoc==="equip"&&s?s:null}onDragOver=t=>{if(!this.dragKey)return;const e=this.dropTarget(t.target);this.highlight(e),e&&(t.preventDefault(),t.dataTransfer.dropEffect="move")};onDrop=t=>{if(!this.dragKey)return;const e=this.dropTarget(t.target);if(!e)return;t.preventDefault();const{item:n,slot:s}=this.findItem(this.dragLoc,this.dragKey);if(n){const a=e.dataset.loc==="equip"?e.dataset.key:void 0;this.dragLoc==="inv"?this.equip(n,a):s&&this.unequip(s)}this.clearDrag()};onDragEnd=()=>{this.clearDrag()};highlight(t){t!==this.activeZone&&(this.activeZone?.classList.remove("wn-drop-zone"),this.activeZone=t,t?.classList.add("wn-drop-zone"))}clearDrag(){this.highlight(null),this.dragLoc="",this.dragKey=""}onKey=t=>{t.code==="KeyI"&&this.toggle()};isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render(),this.preview.show()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none",this.tip.style.display="none",this.preview.hide()}render(){this.renderEquipment(),this.renderInventory(),this.renderStats(),this.preview.syncEquipment()}cellHtml(t,e,n,s=""){return et(t,{loc:e,key:n},s,{draggable:t!==null})}renderEquipment(){const t=this.ctx.world.get(this.ctx.player,B),e=this.ctx.world.get(this.ctx.player,nt)?.activeWeapon??"weapon";this.equipEl.innerHTML=va.map(n=>{const s=t?.slots[n]??null,a=Ct(n)&&n===e&&!!s,o=`${an[n]}${a?' <span class="wn-live">● live</span>':""}`;return`<div class="wn-slot${a?" wn-live-slot":""}" data-slot="${n}"><label>${o}</label>${this.cellHtml(s,"equip",n,an[n])}</div>`}).join("")}renderInventory(){const t=this.ctx.world.get(this.ctx.player,C);t&&(this.sortMode==="manual"?R(t):na(t,this.sortMode,this.sortDirection));const e=t?.items??[],n=t?.capacity??40;let s="";for(let r=0;r<n;r++)s+=this.cellHtml(e[r]??null,"inv",e[r]?.uid??`e${r}`);this.invEl.innerHTML=s;const a=this.panel.querySelector("[data-sort-mode]");a&&(a.value=this.sortMode);const o=this.panel.querySelector("[data-sort-direction]");o&&(o.textContent=this.sortDirection==="asc"?"↑":"↓",o.disabled=this.sortMode==="manual")}renderStats(){const{world:t,player:e}=this.ctx,n=t.get(e,zn),s=t.get(e,z),a=t.get(e,An),o=t.get(e,Pn),r=t.get(e,C),l=a?Math.round((a.speed/Es-1)*100):0,c=b=>`${Math.round(b*1e3)/10}%`,d=t.get(e,Bn),p=()=>{const b=[];if(o&&o.lifeRegen>.01&&b.push(["Life Regen",`+${(Math.round(o.lifeRegen*10)/10).toFixed(1)}/s`]),d){const v=Math.round((d.fuelMax/ce-1)*100);v!==0&&b.push(["Fuel Capacity",`${v>0?"+":""}${v}%`]);const L=Math.round((d.launchSpeed-Cs)*10)/10;Math.abs(L)>.01&&b.push(["Launch Boost",`+${L.toFixed(1)}`]);const A=d.fuelMax/ce,q=Math.round((d.rechargeRate/(Ts*A)-1)*100);q!==0&&b.push(["Fuel Recharge",`${q>0?"+":""}${q}%`])}return b},h=[["Power",`${Math.round(n?.power??0)}`],["Life",`${s?.max??0}`],["Armor",`${Math.round(n?.armor??0)}`],["Crit Chance",c(n?.critChance??0)],["Crit Damage",`+${Math.round((n?.critMult??1)*100)}%`],["Move Speed",`${l>=0?"+":""}${l}%`],...p(),["Bonus XP",`+${c(o?.xpGain??0)}`],["Companion Damage",`+${c(o?.companionDamage??0)}`],["Bond Gain",`+${c(o?.bondGain??0)}`]],f=t.get(e,Ms)?.map??{},u=Object.entries(f).filter(([,b])=>Math.abs(b)>1e-6).map(([b,v])=>`<span style="color:${v>=0?"#8fd0ff":"#ff8a7a"}">${b[0].toUpperCase()}${b.slice(1,3)} ${v>=0?"+":""}${c(v)}</span>`).join(" · "),m=t.get(e,B),x=(m?Ss(Object.values(m.slots)).sets:[]).map(b=>{const v=b.def.bonuses.length;return`<div class="wn-setrow"><b>${b.def.name}</b> <span>${b.active.length}/${v}</span></div>`+b.active.map(L=>`<div class="wn-setb">✓ ${L.desc}</div>`).join("")}).join("");this.statsEl.innerHTML=h.map(([b,v])=>`<div class="wn-stat"><span>${b}</span><b>${v}</b></div>`).join("")+(u?`<div class="wn-stat" style="border:none"><span>Resists</span></div><div class="wn-resline">${u}</div>`:"")+(x?`<div class="wn-setbox">${x}</div>`:"")+`<div class="wn-credits">⬡ ${r?.credits??0} credits</div>`}findItem(t,e){const{world:n,player:s}=this.ctx;return t==="equip"?{item:n.get(s,B)?.slots[e]??null,slot:e}:{item:n.get(s,C)?.items.find(o=>o?.uid===e)??null}}onClick=t=>{if(t.target.closest("[data-sort-direction]")){this.sortDirection=this.sortDirection==="asc"?"desc":"asc",this.storeSortPreference(),this.renderInventory(),this.tip.style.display="none";return}if(t.target.closest("[data-exit]")){this.close();return}if(t.target.closest("[data-close]")){this.close(),this.onBack?.();return}const e=t.target.closest(".wn-cell");if(!e)return;const n=e.dataset.loc,s=e.dataset.key,{item:a,slot:o}=this.findItem(n,s);a&&(n==="inv"?this.equip(a):o&&this.unequip(o),this.tip.style.display="none")};onChange=t=>{const e=t.target.closest("[data-sort-mode]");e&&(this.sortMode=ds.includes(e.value)?e.value:"manual",this.sortMode!=="manual"&&(this.sortDirection=this.sortMode==="type"||this.sortMode==="name"?"asc":"desc"),this.storeSortPreference(),this.renderInventory(),this.tip.style.display="none")};storeSortPreference(){try{localStorage.setItem(ls,this.sortMode),localStorage.setItem(cs,this.sortDirection)}catch{}}equip(t,e){const{world:n,player:s}=this.ctx,a=I.get(t.baseItemId);if(!a||a.slot==="module"||H(t))return;const o=n.get(s,B),r=n.get(s,C);R(r);const l=r.items.findIndex(p=>p?.uid===t.uid);if(l<0){this.render();return}const c=e&&Sa(e,a.slot)?e:Ma(a.slot,o),d=o.slots[c]??null;d?r.items[l]=d:gt(r,t.uid),o.slots[c]=t,Ct(c)&&Ze(this.ctx),dt(n,s),this.ctx.bus.emit("item.equipped",{slot:c,baseItemId:t.baseItemId}),this.render()}unequip(t){const{world:e,player:n}=this.ctx,s=e.get(n,B),a=e.get(n,C);R(a);const o=s.slots[t];!o||!Pt(a)||(delete s.slots[t],ft(a,o),Ct(t)&&Ze(this.ctx),dt(e,n),this.render())}onOver=t=>{const e=t.target.closest(".wn-cell");if(!e||e.classList.contains("empty"))return;const{item:n}=this.findItem(e.dataset.loc,e.dataset.key);n&&(this.tip.innerHTML=this.tooltipHtml(n,e.dataset.loc==="inv"),this.tip.style.display="block",this.positionTip(t))};onOut=()=>{this.tip.style.display="none"};onMove=t=>{this.tip.style.display==="block"&&this.positionTip(t)};positionTip(t){const e=Math.min(t.clientX+16,window.innerWidth-260),n=Math.min(t.clientY+16,window.innerHeight-220);this.tip.style.left=`${e}px`,this.tip.style.top=`${n}px`}tooltipHtml(t,e){const n=I.get(t.baseItemId),s=st(t.rarity),a=n?.attackId?ta[n.attackId]:null,o=a?`<div class="wn-line" style="color:#9ad8ff">${a}</div>`:"",r=n?.flavor?`<div class="wn-flavor">${n.flavor}</div>`:"";if(H(t))return`
        <div class="wn-tip-h" style="color:${s.color}">Unidentified ${n?.name??"Item"}</div>
        <div class="wn-tip-sub">${s.name} &middot; Item Lv ${t.itemLevel}</div>
        ${o}
        <div class="wn-line dim">Unknown modifiers — appraise at the Artificer to equip.</div>${r}`;const l=le(t),c=Object.entries(l).map(([h,f])=>`<div class="wn-line">${xe(h,f,!0)} ${we[h]}</div>`).join("");let d="";if(e&&n&&n.slot!=="module"){const h=this.ctx.world.get(this.ctx.player,B),f=n.slot==="weapon"?"weapon":n.slot,u=h?.slots[f]??(n.slot==="weapon"?h?.slots.weapon2:void 0)??null,m=u?le(u):{},x=[...new Set([...Object.keys(l),...Object.keys(m)])].map(b=>{const v=(l[b]??0)-(m[b]??0);return Math.abs(v)<1e-6?"":`<div class="wn-line" style="color:${v>0?"#5be08a":"#ff6a7a"}">${xe(b,v,!0)} ${we[b]}</div>`}).filter(Boolean).join("");d=`<div class="wn-cmp"><div class="wn-cmp-h">If equipped${u?"":" (slot empty)"}:</div>${x||'<div class="wn-line dim">no change</div>'}</div>`}const p=n?.slot==="module"?'<div class="wn-line" style="color:#8ed8ee">Habitat Module — install this cargo at the habitat command terminal.</div>':`<div class="wn-tip-stats">${c||'<div class="wn-line dim">no modifiers</div>'}</div>`;return`
      <div class="wn-tip-h" style="color:${s.color}">${os(t)}</div>
      <div class="wn-tip-sub">${s.name}${n?.slot==="module"?" · Habitat Cargo":` · Item Lv ${t.itemLevel}`}</div>
      ${o}
      ${p}
      ${rs(t)}
      ${r}
      ${d}`}injectStyles(){if(document.getElementById("wn-inv-css"))return;const t=document.createElement("style");t.id="wn-inv-css",t.textContent=`
      .wn-inv{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-inv-box{display:flex;flex-direction:column;gap:14px;padding:18px 24px 22px;border-radius:14px;
        max-width:calc(100vw - 28px);max-height:calc(100vh - 28px);overflow:auto;box-sizing:border-box;}
      .wn-inv-box > *{position:relative;z-index:1;}
      .wn-inv-cols{display:flex;gap:18px;}
      .wn-col h3{font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#9fe3ff;margin-bottom:10px;}
      .wn-inv-head{height:28px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;}
      .wn-sort-controls{display:flex;align-items:center;gap:5px;margin-top:-4px;}
      .wn-sort-controls label{display:flex;align-items:center;gap:6px;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#7fb0cc;}
      .wn-sort-controls select,.wn-sort-controls button{height:25px;border:1px solid rgba(120,220,255,.3);border-radius:5px;background:#102c3f;color:#d9f5ff;font:600 10px ui-sans-serif,system-ui,sans-serif;}
      .wn-sort-controls select{padding:0 22px 0 7px;cursor:pointer;}.wn-sort-controls button{width:27px;padding:0;cursor:pointer;font-size:14px;}
      .wn-sort-controls button:disabled{opacity:.35;cursor:default;}
      .wn-loadout-col{width:430px;min-width:430px;}
      .wn-paperdoll{position:relative;width:430px;height:350px;border:1px solid rgba(120,220,255,0.18);
        border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at 50% 42%,rgba(67,164,205,.2),rgba(5,19,32,.12) 48%,rgba(3,12,22,.62) 100%);
        box-shadow:inset 0 0 42px rgba(48,172,225,.08);}
      .wn-preview-host{position:absolute;inset:6px 76px 0;pointer-events:none;}
      .wn-character-preview{display:block;width:100%;height:100%;filter:drop-shadow(0 14px 16px rgba(0,0,0,.58));}
      .wn-equip{position:absolute;inset:0;z-index:2;}
      .wn-slot{position:absolute;width:72px;display:flex;flex-direction:column;align-items:center;gap:5px;}
      .wn-slot[data-slot=suit]{left:8px;top:18px;}
      .wn-slot[data-slot=lifeSupport]{left:8px;top:118px;}
      .wn-slot[data-slot=weapon]{left:8px;bottom:18px;}
      .wn-slot[data-slot=neuralInterface]{right:8px;top:18px;}
      .wn-slot[data-slot=controlModule]{right:8px;top:118px;}
      .wn-slot[data-slot=weapon2]{right:8px;bottom:18px;}
      .wn-slot[data-slot=jetpack]{left:50%;bottom:8px;transform:translateX(-50%);}
      .wn-slot label{font-size:9px;color:#7fb0cc;text-transform:uppercase;letter-spacing:0.03em;
        text-align:center;white-space:nowrap;}
      .wn-live{color:#7fe0a0;font-weight:700;}
      .wn-live-slot .wn-cell{box-shadow:inset 0 0 12px rgba(90,224,138,0.45),0 0 0 1px rgba(90,224,138,0.6) !important;}
      /* scoped to the inventory so it beats the shared .wn-grid used by stash/vendor.
         fixed 44px columns (never squeeze under the scrollbar) + a reserved gutter. */
      .wn-inv .wn-grid{display:grid;grid-template-columns:repeat(8,44px);gap:6px;width:410px;
        max-height:352px;overflow-x:hidden;overflow-y:auto;scrollbar-gutter:stable;
        justify-content:start;align-content:start;}
      .wn-cell{width:44px;height:44px;border:1px solid rgba(120,220,255,0.24);border-radius:6px;
        background:rgba(40,96,134,0.18);display:flex;align-items:center;justify-content:center;cursor:pointer;
        transition:background 0.08s, border-color 0.08s, box-shadow 0.08s;}
      .wn-cell:hover{background:rgba(56,124,170,0.32);box-shadow:inset 0 0 13px rgba(90,205,255,0.5) !important;}
      .wn-cell.wn-drag-over{border-color:rgba(150,235,255,0.95) !important;background:rgba(70,150,200,0.42);
        box-shadow:inset 0 0 13px rgba(120,220,255,0.55) !important;}
      .wn-cell[draggable=true]{cursor:grab;}
      .wn-equip.wn-drop-zone,.wn-grid.wn-drop-zone{outline:2px dashed rgba(150,235,255,0.7);
        outline-offset:4px;border-radius:8px;}
      .wn-cell.empty{cursor:default;border-style:dashed;border-color:rgba(120,220,255,0.14);background:rgba(20,48,70,0.2);}
      .wn-cell span{font:700 9px ui-monospace,monospace;}
      .wn-cell.empty span{color:#3f6786;font-size:8px;}
      .wn-cell.unid span{font-size:15px;animation:wn-unid 1.4s ease-in-out infinite;}
      @keyframes wn-unid{0%,100%{opacity:0.5}50%{opacity:1}}
      .wn-details-title{margin-top:14px;}
      .wn-stats{width:430px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 14px;}
      .wn-stat{display:flex;justify-content:space-between;font-size:12px;color:#bcdcf0;
        border-bottom:1px solid rgba(120,220,255,0.12);padding-bottom:4px;}
      .wn-stat b{color:#eafaff;}
      .wn-resline{font-size:10px;color:#9fc6dc;line-height:1.5;margin:-2px 0 4px;display:flex;flex-wrap:wrap;gap:4px 8px;}
      .wn-resline,.wn-setbox,.wn-credits{grid-column:1 / -1;}
      .wn-setbox{margin-top:6px;border-top:1px solid rgba(55,210,122,0.25);padding-top:6px;}
      .wn-setrow{font-size:11px;color:#5be08a;font-weight:700;display:flex;justify-content:space-between;}
      .wn-setb{font-size:10px;color:#9fd8b4;line-height:1.4;}
      .wn-credits{margin-top:8px;color:#ffe08a;font-weight:700;font-size:13px;}
      .wn-close{position:absolute;top:8px;right:14px;font-size:10px;color:#6f9fbc;z-index:2;}
      .wn-tip{position:fixed;z-index:40;min-width:200px;max-width:240px;padding:10px 12px;border-radius:8px;
        background:linear-gradient(180deg,rgba(20,52,76,0.97),rgba(9,26,42,0.97));color:#d6f3ff;
        border:1px solid rgba(120,220,255,0.45);pointer-events:none;
        font-family:ui-sans-serif,system-ui,sans-serif;box-shadow:0 10px 30px #000a,0 0 22px rgba(70,190,255,0.18);}
      .wn-tip-h{font-weight:800;font-size:14px;}
      .wn-tip-sub{font-size:10px;color:#7fb0cc;margin-bottom:6px;}
      .wn-line{font-size:12px;color:#cfe8f7;line-height:1.5;}
      .wn-line.dim{color:#6f9fbc;}
      .wn-cmp{margin-top:8px;border-top:1px solid rgba(120,220,255,0.18);padding-top:6px;}
      .wn-cmp-h{font-size:10px;color:#7fb0cc;margin-bottom:3px;}
      @media (max-width:930px){
        .wn-inv-cols{flex-direction:column;align-items:center;}
        .wn-loadout-col{width:min(430px,calc(100vw - 76px));min-width:0;}
        .wn-paperdoll,.wn-stats{width:100%;}
      }
    `,document.head.appendChild(t)}}function Sa(i,t){return t==="weapon"?Ct(i):i===t}const Ca=45,Ta=120,$a=50;function _t(i,t,e={}){const n=t.split(/\s+/).filter(Boolean);i.textContent="";const s=[];for(const p of n){s.length&&i.appendChild(document.createTextNode(" "));const h=document.createElement("span");h.textContent=p,h.style.visibility="hidden",i.appendChild(h),s.push(h)}let a=0,o=0,r=s.length===0;const l=e.wordMs??Ca,c=p=>{if(!r&&(r=!0,window.clearTimeout(o),p)){for(const h of s)h.style.visibility="visible";e.onDone?.()}},d=()=>{if(r)return;if(a>=s.length){r=!0,e.onDone?.();return}const p=n[a];s[a].style.visibility="visible",a++,e.voice?.();const h=/[.!?…]["”']?$/.test(p)?Ta:/[,;:]["”']?$/.test(p)?$a:0;o=window.setTimeout(d,l+h)};return d(),{skip:()=>c(!0),cancel:()=>c(!1),get done(){return r}}}function je(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return 340+(t>>>0)%320}const on=new WeakMap,X=new Jn,Zt=new S;function La(i){const t=on.get(i);if(t)return t;if(i.updateWorldMatrix(!0,!0),X.setFromObject(i,!0),i.getWorldPosition(Zt),X.isEmpty()||!Number.isFinite(X.min.y)||!Number.isFinite(X.max.y))return null;const e={bottom:X.min.y-Zt.y,top:X.max.y-Zt.y};return on.set(i,e),e}function Bt(i,t,e,n,s){const a=i.world.get(t,Ee)?.object;if(a){const r=La(a);if(r)return a.getWorldPosition(n),n.y+=r[e],!0}const o=i.world.get(t,w);return o?(n.set(o.pos.x,o.pos.y+s,o.pos.z),!0):!1}function Ia(i,t,e,n){const s=i.world.get(t,Ee)?.object;if(s)return s.getWorldPosition(e),e.y+=n,!0;const a=i.world.get(t,w);return a?(e.set(a.pos.x,a.pos.y+n,a.pos.z),!0):!1}const za=i=>Math.min(9,2.6+i.length*.045),Aa=3,Pa=3,Ba=20,Ra=612;class Mr{constructor(t,e){this.ctx=e,this.injectStyles(),this.el=document.createElement("div"),this.el.className="wn-b4b3l-bubble",this.body=document.createElement("div"),this.body.className="wn-b4b3l-bubble-body";const n=document.createElement("b");n.textContent="B4B3L",this.textEl=document.createElement("span"),this.body.append(n,this.textEl),this.el.appendChild(this.body),this.el.style.display="none",t.appendChild(this.el),e.bus.on("world.event",s=>this.say($s(s.title,s.subtitle))),e.bus.on("player.leveledUp",({level:s})=>this.say(Ls(s))),e.bus.on("companion.recruited",({companionId:s})=>{const a=M[s],{have:o,total:r}=Rn(this.ctx),l=a?.rarity==="rare"?"A rare one — ":a?.rarity==="uncommon"?"Uncommon, even. ":"";this.say(Is(a?.name??"A creature",l,o,r))}),e.bus.on("companion.bondLeveled",({creatureId:s,level:a})=>{const o=M[s]?.name??"your companion";this.say(zs(o,a,Rs(a)))})}el;body;textEl;tmp=new S;queue=[];timer=0;gap=0;typing=null;showing=!1;say(t){this.queue[this.queue.length-1]?.text!==t&&(this.queue.push({text:t,age:0}),this.queue.length>Pa&&this.queue.shift())}questStarted(t){this.say(As(t))}questReady(t){this.say(Ps(t))}questCompleted(t){this.say(Bs(t))}isVisible(){return this.showing}update(t,e,n,s){for(const c of this.queue)c.age+=s;for(;this.queue.length>0&&this.queue[0].age>Ba;)this.queue.shift();if(this.showing?(this.timer-=s,this.timer<=0&&(this.showing=!1,this.el.style.display="none",this.typing?.cancel(),this.typing=null,this.gap=Aa)):(this.gap-=s,this.queue.length>0&&this.gap<=0&&this.speak(this.queue.shift().text)),!this.showing)return;const a=this.ctx.b4b3l,o=a!=null?this.ctx.world.get(a,w):void 0;if(a==null||!o){this.el.style.display="none";return}if(!Bt(this.ctx,a,"top",this.tmp,1.9))return;if(this.tmp.project(t),this.tmp.z>=1){this.el.style.display="none";return}const r=(this.tmp.x*.5+.5)*e,l=(-this.tmp.y*.5+.5)*n;this.el.style.transform=`translate(-50%,calc(-100% - 8px)) translate(${r}px,${l}px)`,this.el.style.display="block"}speak(t){this.typing?.cancel(),this.typing=_t(this.textEl,t,{voice:()=>this.ctx.bus.emit("ui.voice",{pitch:Ra})}),this.body.classList.remove("wn-b4b3l-bubble-body--in"),this.body.offsetHeight,this.body.classList.add("wn-b4b3l-bubble-body--in"),this.timer=za(t),this.showing=!0}injectStyles(){if(document.getElementById("wn-b4b3l-css"))return;const t=document.createElement("style");t.id="wn-b4b3l-css",t.textContent=`
      .wn-b4b3l-bubble{position:fixed;left:0;top:0;z-index:16;max-width:280px;white-space:normal;text-align:center;
        pointer-events:none;}
      .wn-b4b3l-bubble-body{position:relative;padding:8px 13px;border-radius:12px;
        background:linear-gradient(180deg,rgba(96,72,26,0.92),rgba(52,36,12,0.94));
        border:1px solid rgba(255,201,110,0.55);box-shadow:0 0 18px rgba(255,179,71,0.26);
        font:600 12px ui-sans-serif,system-ui;color:#fff4e0;transform-origin:50% 100%;}
      .wn-b4b3l-bubble-body--in{animation:wn-b4b3l-in 0.2s cubic-bezier(.2,.8,.25,1.2);}
      .wn-b4b3l-bubble b{display:block;color:#ffd490;font-size:11px;letter-spacing:0.04em;margin-bottom:2px;}
      .wn-b4b3l-bubble-body::after{content:'';position:absolute;left:50%;bottom:-6px;transform:translateX(-50%);
        border:6px solid transparent;border-top-color:rgba(255,201,110,0.55);border-bottom:0;}
      @keyframes wn-b4b3l-in{from{opacity:0;transform:translateY(8px) scale(0.92);}to{opacity:1;transform:translateY(0) scale(1);}}
    `,document.head.appendChild(t)}}const ja=9,qa=2.55;function Na(i){return{x:i.left+4,y:i.top+i.height/2}}class Sr{constructor(t){this.ctx=t}near=new S;far=new S;tmp=new S;anchorNdc=new Ni;anchorBeam=null;anchorRevision=-1;anchorWidth=0;anchorHeight=0;update(t,e,n,s,a){const o=this.ctx.b4b3l,r=o!=null?this.ctx.world.get(o,w):null,l=js();if(!r||!l)return;if(l.setProjecting(!1),l.object.scale.setScalar(1),!a){this.anchorBeam=null,this.anchorRevision=-1;return}this.refreshAnchor(a,e,n);const c=this.anchorNdc.x,d=this.anchorNdc.y;this.near.set(c,d,-1).unproject(t),this.far.set(c,d,1).unproject(t),this.tmp.copy(this.far).sub(this.near).normalize();const p=this.near.addScaledVector(this.tmp,qa),h=qs,f=Math.min(1,s*ja);r.pos.x+=(p.x-r.pos.x)*f,r.pos.y+=(p.y-h-r.pos.y)*f,r.pos.z+=(p.z-r.pos.z)*f,r.prevPos.x=r.pos.x,r.prevPos.y=r.pos.y,r.prevPos.z=r.pos.z;const u=t.getWorldPosition(this.tmp),g=Math.atan2(u.x-r.pos.x,u.z-r.pos.z)-r.rotY;r.rotY+=Math.atan2(Math.sin(g),Math.cos(g))*Math.min(1,s*10),r.prevRotY=r.rotY}refreshAnchor(t,e,n){if(this.anchorBeam===t.beam&&this.anchorRevision===t.revision&&this.anchorWidth===e&&this.anchorHeight===n)return;const s=t.beam.getBoundingClientRect(),a=Na(s);this.anchorNdc.set(a.x/Math.max(1,e)*2-1,-(a.y/Math.max(1,n)*2-1)),this.anchorBeam=t.beam,this.anchorRevision=t.revision,this.anchorWidth=e,this.anchorHeight=n}}function Dt(i){const{world:t,player:e}=i,n=t.get(e,An);n&&(n.path.length=0,n.index=0,n.moving=!1,n.drive=!1,n.accelT=0);const s=t.get(e,nt),a=t.get(e,w);if(s&&(s.sprinting=!1,s.dash=0,s.aimHold=0,s.jetHeld=!1,s.meleeWindup=void 0,s.groundSlam=void 0,s.jetAirborne&&a)){const o=Ns(i.hf,a.pos.x,a.pos.z);a.pos.y=o,s.jetAirborne=!1,s.jetLaunchUsed=!1,s.jetVy=0,s.jetGroundY=o}t.remove(e,Hs),t.remove(e,Os),a&&(a.prevPos.x=a.pos.x,a.prevPos.y=a.pos.y,a.prevPos.z=a.pos.z,a.prevRotY=a.rotY)}function ps(i,t){const e=Object.entries(i.moodWeights);let n=0;for(const[,a]of e)n+=a;let s=t.next()*n;for(const[a,o]of e)if(s-=o,s<=0)return a;return e[e.length-1][0]}function Ha(i,t,e=0,n=0){const s=Math.max(2,i.exchanges-n),a=Math.min(45,n*15),o=D(e,0,1);return{archetype:i,interest:D(i.start.interest+o*30-a*.5,0,100),trust:D(i.start.trust+o*20-a*.4,0,100),tension:D(i.start.tension-o*30+a,0,100),exchangesLeft:s,exchangesTotal:s,priorAttempts:n,mood:ps(i,t),status:"ongoing",last:null,lastReaction:null}}function Oa(i,t){const e=["boast","reason","empathize","joke","intimidate"];return t>=i.archetype.bribeCost&&e.push("bribe"),e.push("walk"),e}function _a(i,t,e){if(i.status!=="ongoing")return i;if(t==="walk")return i.status="walked",i.last=null,i.lastReaction=null,i;const n=i.archetype,s=n.matrix[t],a=_s[i.mood];let o=0,r=0,l=1,c=0;const d=a.favored.includes(t),p=a.risky.includes(t);d?(o=12,r=8,l=.4):p&&(o=-8,r=-6,c=14);const h=e.next(),f=h<.12,u=h>.9;f?(o+=8,r+=6,l*=.6):u&&(o-=8,r-=6,c+=8);const m=v=>v+e.range(-n.variance,n.variance),g=m(s.interest+o),x=m(s.trust+r),b=m(s.tension*l+c);return i.interest=D(i.interest+g,0,100),i.trust=D(i.trust+x,0,100),i.tension=D(i.tension+b,0,100),i.exchangesLeft-=1,i.last={interest:g,trust:x,tension:b},i.lastReaction=u?"fumble":f?"crit":d?"favored":p?"risky":"neutral",Da(i),i.status==="ongoing"&&(i.mood=ps(n,e)),i}function Da(i){const t=i.archetype.thresholds;if(i.tension>=100){i.status=i.archetype.failMode==="flee"?"fled":"enraged";return}if(i.interest>=t.interest&&i.trust>=t.trust&&i.tension<t.tensionMax){i.status="recruited";return}i.exchangesLeft<=0&&(i.status=i.archetype.failMode==="flee"?"fled":"rebuffed")}class qe{canvas;renderer=null;scene=new Ie;camera=new ze(32,1,.1,100);rim;model=null;raf=0;last=0;constructor(){this.canvas=document.createElement("canvas"),this.canvas.className="wn-portrait",this.camera.position.set(0,1,4.9),this.camera.lookAt(0,1,0),this.scene.add(new Hi(5265771,.7));const t=new tt(16777215,1.5);t.position.set(2.4,4,3),this.scene.add(t),this.rim=new tt(16777215,2.2),this.rim.position.set(-1.8,2.2,-3),this.scene.add(this.rim)}show(t,e){this.renderer||(this.renderer=new Ae({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Pe),this.clearModel(),this.rim.color.setHex(e),this.model=Ds(t,e),this.model.object.rotation.y=.5,this.scene.add(this.model.object),this.canvas.style.display="block",this.playIntro(),this.resize(),this.last=performance.now(),this.loop()}hide(){cancelAnimationFrame(this.raf),this.raf=0,this.clearModel(),this.canvas.style.display="none"}playIntro(){this.canvas.style.animation="none",this.canvas.offsetWidth,this.canvas.style.animation=""}resize(){if(!this.renderer)return;const t=this.canvas.clientWidth||1,e=this.canvas.clientHeight||1;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.frameModel(),this.camera.updateProjectionMatrix()}frameModel(){if(!this.model)return;const t=new Jn().setFromObject(this.model.object);if(t.isEmpty())return;const e=t.getCenter(new S),n=t.getSize(new S),s=Oi.degToRad(this.camera.fov),a=2*Math.atan(Math.tan(s/2)*this.camera.aspect),o=n.y/2/Math.tan(s/2),r=n.x/2/Math.tan(a/2),l=Math.max(o,r)*1.25+n.z/2;this.camera.position.set(e.x,e.y,e.z+l),this.camera.lookAt(e)}clearModel(){this.model&&(this.scene.remove(this.model.object),Z(this.model.object),this.model=null)}loop=()=>{if(!this.renderer||!this.model)return;const t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.model.update(e),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.loop)}}const Fa={boast:"Boast",reason:"Reason",empathize:"Empathize",joke:"Joke",intimidate:"Intimidate",bribe:"Bribe",walk:"Walk Away"};class Cr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-neg wn-scrim",this.panel.style.display="none",this.panel.appendChild(this.portrait.canvas),this.flashEl=document.createElement("div"),this.flashEl.className="wn-neg-flash",this.panel.appendChild(this.flashEl),this.box=document.createElement("div"),this.box.className="wn-neg-box wn-glass",this.panel.appendChild(this.box),this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick),window.addEventListener("resize",()=>{this.isOpen()&&this.portrait.resize()})}panel;box;flashEl;portrait=new qe;state=null;target=null;creatureId="";currentCue="";currentReaction=null;lastJoke=null;typing=null;isOpen(){return this.state!==null}dismiss(){this.close()}open(t){const e=this.ctx.world.get(t,Me);if(!e)return;const n=M[e.creatureId],s=n.archetypeId?Fs[n.archetypeId]:null;if(!s)return;Dt(this.ctx);const a=this.ctx.world.get(t,z),o=a&&a.max>0?1-a.current/a.max:0,r=this.ctx.world.get(t,Ut)?.attempts??0;this.target=t,this.creatureId=e.creatureId,this.state=Ha(s,this.ctx.rng,o,r),this.currentCue=r>0?Q(Vs,"retry"):Q(_e(this.creatureId,n.faction,this.state.mood),`cue:${this.state.mood}`),this.currentReaction=null,this.ctx.paused=!0,this.panel.style.display="flex",this.portrait.show(n.model,n.color),this.triggerFlash(n.color),this.render()}triggerFlash(t){this.flashEl.style.background=`#${t.toString(16).padStart(6,"0")}`,this.flashEl.style.animation="none",this.flashEl.offsetWidth,this.flashEl.style.animation="wn-neg-flash 0.5s ease-out"}close(){this.state=null,this.target=null,this.ctx.paused=!1,this.typing?.cancel(),this.typing=null,this.portrait.hide(),this.panel.style.display="none"}credits(){return this.ctx.world.get(this.ctx.player,C)?.credits??0}onClick=t=>{if(t.target.closest("[data-exit]")){this.dismiss();return}const e=t.target.closest("[data-action]");if(!e||!this.state)return;const n=e.dataset.action;if(n==="bribe"){const o=this.ctx.world.get(this.ctx.player,C);o&&(o.credits-=this.state.archetype.bribeCost)}_a(this.state,n,this.ctx.rng);const s=M[this.creatureId].faction;this.lastJoke=n==="joke"?Q(Ks,"joke"):null;const a=this.state.lastReaction;this.currentReaction=a?n==="joke"?Q(Ws(this.creatureId,s,a),`jokeReact:${a}`):Q(Us(this.creatureId,s,a),`react:${a}`):null,this.currentCue=Q(_e(this.creatureId,s,this.state.mood),`cue:${this.state.mood}`),this.resolveOutcome()};resolveOutcome(){if(!this.state)return;const t=this.state;if(t.status==="ongoing"){this.render();return}if(t.status==="recruited"){const e=Ys(this.ctx,this.creatureId,this.target??void 0);this.removeTarget();const n=M[this.creatureId].name;this.flash(e==="party"?`${n} joined your party!`:`${n} joined your ${_} collection.`,"#5be08a")}else if(t.status==="enraged")this.enrageTarget(),this.flash(`${M[this.creatureId].name} is enraged — allies answer!`,"#ff6a7a");else if(t.status==="fled"){const e=this.stealFarewellCredits();this.removeTarget(),this.flash(e>0?`${M[this.creatureId].name} fled with ${e}c.`:`${M[this.creatureId].name} fled.`,"#9ad8ff")}else if(t.status==="rebuffed"||t.status==="walked"){this.recordFailedAttempt();const e=M[this.creatureId].name;this.flash(t.status==="rebuffed"?`${e} has heard enough.`:`You walk away from ${e}.`,"#c9b8ff")}this.close()}recordFailedAttempt(){if(this.target===null)return;const t=this.ctx.world.get(this.target,Ut);t?t.attempts+=1:this.ctx.world.add(this.target,Ut,{attempts:1})}enrageTarget(){if(this.target===null)return;const t=M[this.creatureId],e=this.ctx.world.get(this.target,zn);e&&(e.power*=1.35);const n=this.ctx.world.get(this.target,w);if(this.ctx.world.add(this.target,J,{team:"enemy"}),n&&!this.ctx.world.get(this.target,de)&&this.ctx.world.add(this.target,de,{state:"chase",timer:0,attackCd:.2,abilityId:t.enemyAbility,behavior:t.behavior==="coward"?void 0:t.behavior,aggro:!0,homeX:n.pos.x,homeZ:n.pos.z}),!n)return;const s=Object.values(M).filter(a=>a.faction===t.faction);for(let a=0;a<2&&s.length>0;a++){const o=this.ctx.rng.range(0,Math.PI*2),r=this.ctx.rng.range(3.2,5.2);Gs(this.ctx,this.ctx.rng.pick(s).id,n.pos.x+Math.cos(o)*r,n.pos.z+Math.sin(o)*r)}}stealFarewellCredits(){const t=this.ctx.world.get(this.ctx.player,C);if(!t||t.credits<=0||!this.ctx.rng.chance(.45))return 0;const e=Math.min(t.credits,this.ctx.rng.int(3,12));return t.credits-=e,e}removeTarget(){if(this.target===null)return;const t=this.ctx.world.get(this.target,Ee);t&&(this.ctx.scene.remove(t.object),Z(t.object)),this.ctx.world.destroy(this.target),this.target=null}flash(t,e){const n=this.ctx.world.get(this.ctx.player,w);n&&this.ctx.fx.floatText(n.pos,t,e)}render(){if(!this.state)return;const t=this.state,e=M[this.creatureId],n=t.archetype.thresholds,s=(p,h,f,u)=>{const m=f!==null?`<div class="wn-mark" style="left:${f}%"></div>`:"";return`<div class="wn-meter-row"><span>${p}</span>
        <div class="wn-meter">${m}<div class="wn-fill" style="width:${h}%;background:${u}"></div></div></div>`},a=Array.from({length:t.exchangesTotal},(p,h)=>`<span class="wn-dot ${h<t.exchangesLeft?"on":""}"></span>`).join(""),o=this.lastJoke?`<div class="wn-joke">You: “${this.lastJoke}”</div>`:"",r=this.currentReaction&&t.last?`${o}<div class="wn-react"><b>${this.currentReaction}</b> <span class="wn-delta">Interest ${Jt(t.last.interest)} · Trust ${Jt(t.last.trust)} · Tension ${Jt(t.last.tension)}</span></div>`:'<div class="wn-react dim">Read its mood, then choose.</div>',l=this.credits(),c=Oa(t,l).filter(p=>p!=="walk").map(p=>{const h=p==="bribe"&&t.archetype.bribeCost>0?` (${t.archetype.bribeCost}c)`:"";return`<button class="wn-act" data-action="${p}">${Fa[p]}${h}</button>`}).join("");this.box.innerHTML=`
      <div class="wn-neg-top"><div class="wn-neg-head" style="color:#${e.color.toString(16).padStart(6,"0")}">${e.name}</div><button class="wn-close-btn" data-exit style="margin-left:auto">✕</button></div>
      <div class="wn-bio">${e.bio}</div>
      <div class="wn-tell">${t.archetype.tell}</div>
      <div class="wn-mood">▸ ${this.currentCue}</div>
      ${s("Interest",t.interest,n.interest,"#ffd23f")}
      ${s("Trust",t.trust,n.trust,"#5be08a")}
      ${s("Tension",t.tension,n.tensionMax>=100?null:n.tensionMax,"#ff6a7a")}
      <div class="wn-ex">Exchanges: ${a}</div>
      ${r}
      <div class="wn-acts">${c}</div>
      <div class="wn-credits-note">Credits: ${l}</div>`,this.typing?.cancel();const d=this.box.querySelector(".wn-mood");if(d){const p=je(e.name);this.typing=_t(d,`▸ ${this.currentCue}`,{voice:()=>this.ctx.bus.emit("ui.voice",{pitch:p})})}}injectStyles(){if(document.getElementById("wn-neg-css"))return;const t=document.createElement("style");t.id="wn-neg-css",t.textContent=`
      .wn-neg{--wn-portrait-width:33vw;--wn-panel-overlap:10vw;
        position:fixed;inset:0;z-index:32;display:flex;box-sizing:border-box;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      /* The portrait stays planted in the foreground while the conversation
         card sweeps out from behind its right shoulder and across the screen. */
      .wn-neg-box{position:absolute;z-index:3;left:calc(var(--wn-portrait-width) - var(--wn-panel-overlap));
        top:50%;width:66vw;min-height:250px;box-sizing:border-box;
        padding:30px 3vw 30px var(--wn-panel-overlap);overflow:visible;
        border-width:2px !important;border-radius:5px 18px 5px 14px;
        background:linear-gradient(118deg,rgba(20,58,88,0.94),rgba(18,46,75,0.9) 58%,rgba(38,26,72,0.9)) !important;
        box-shadow:0 16px 70px rgba(0,0,0,0.55),0 0 44px rgba(70,190,255,0.34),inset 0 0 42px rgba(80,200,255,0.1);
        transform:translateY(-50%) rotate(-0.6deg);transform-origin:center;
        animation:wn-neg-panel-in 0.34s cubic-bezier(.16,.84,.3,1) both,wn-neg-panel-pulse 3.6s ease-in-out 0.34s infinite;}
      .wn-neg-box::after{top:0;height:100%;border-radius:inherit;}
      .wn-neg-box > *{position:relative;z-index:1;}
      /* SMT-style: the creature rendered big in the foreground, anchored bottom-left */
      .wn-portrait{position:fixed;left:0;bottom:0;width:var(--wn-portrait-width);height:97vh;z-index:4;display:none;
        pointer-events:none;transform-origin:bottom center;
        filter:drop-shadow(0 10px 34px rgba(0,0,0,0.6));
        animation:wn-portrait-in 0.44s cubic-bezier(.16,.84,.3,1) both;}
      .wn-neg-flash{position:fixed;inset:0;z-index:2;pointer-events:none;opacity:0;mix-blend-mode:screen;}
      @keyframes wn-portrait-in{from{opacity:0;transform:translateY(46px) scale(0.72)}to{opacity:1;transform:none}}
      @keyframes wn-neg-panel-in{from{opacity:0;transform:translateY(-44%) translateX(-70px) rotate(-2deg) scale(0.96)}
        to{opacity:1;transform:translateY(-50%) translateX(0) rotate(-0.6deg) scale(1)}}
      @keyframes wn-neg-panel-pulse{0%,100%{box-shadow:0 16px 70px rgba(0,0,0,0.55),0 0 44px rgba(70,190,255,0.34),inset 0 0 42px rgba(80,200,255,0.1)}
        50%{box-shadow:0 18px 74px rgba(0,0,0,0.58),0 0 56px rgba(70,190,255,0.46),inset 0 0 48px rgba(80,200,255,0.15)}}
      @keyframes wn-neg-flash{0%{opacity:0}14%{opacity:0.55}100%{opacity:0}}
      .wn-neg-top{display:flex;align-items:center;margin-bottom:6px;}
      .wn-neg-head{font-weight:950;font-size:22px;letter-spacing:0.07em;text-transform:uppercase;
        text-shadow:0 2px 0 rgba(0,0,0,0.75),0 0 18px currentColor;}
      .wn-bio{font-size:12px;color:#aec4dc;margin:4px 0 10px;line-height:1.4;font-weight:650;}
      .wn-tell{font-size:13px;color:#c6e5f5;font-style:italic;margin-bottom:11px;font-weight:650;}
      .wn-mood{font-size:17px;color:#f5edff;background:linear-gradient(90deg,rgba(81,42,118,0.72),rgba(49,35,91,0.5));
        border:2px solid rgba(211,168,255,0.58);border-radius:3px 11px 3px 8px;padding:13px 16px;margin-bottom:18px;
        font-weight:850;line-height:1.38;text-shadow:0 1px 0 rgba(0,0,0,0.65);box-shadow:6px 7px 0 rgba(6,14,28,0.3);}
      .wn-delta{font-size:11px;color:#7fb0cc;font-weight:400;}
      .wn-meter-row{display:flex;align-items:center;gap:10px;margin-bottom:8px;font-size:12px;color:#cfe8f7;}
      .wn-meter-row span{width:62px;}
      .wn-meter{position:relative;flex:1;height:14px;background:rgba(8,20,32,0.8);border-radius:7px;overflow:hidden;
        border:1px solid rgba(120,220,255,0.2);}
      .wn-fill{height:100%;transition:width 0.25s ease;}
      .wn-mark{position:absolute;top:-2px;width:2px;height:18px;background:#fff;opacity:0.7;z-index:2;}
      .wn-ex{margin:10px 0 4px;font-size:11px;color:#7fb0cc;}
      .wn-dot{display:inline-block;width:10px;height:10px;border-radius:50%;background:rgba(120,220,255,0.18);margin-right:4px;}
      .wn-dot.on{background:#5bd0ff;}
      .wn-react{font-size:12px;color:#aecfe2;min-height:18px;margin-bottom:10px;}
      .wn-joke{font-size:12px;color:#ffe9a8;font-style:italic;margin-bottom:6px;line-height:1.35;}
      .wn-acts{display:flex;flex-wrap:wrap;gap:8px;}
      .wn-act{padding:10px 16px;border-radius:4px 9px 4px 7px;border:2px solid rgba(120,220,255,0.38);
        background:rgba(28,64,92,0.82);color:#eefaff;font-size:13px;font-weight:850;cursor:pointer;
        box-shadow:3px 4px 0 rgba(4,12,24,0.38);text-transform:uppercase;letter-spacing:0.035em;}
      .wn-act:hover{background:rgba(46,100,140,0.85);}
      .wn-credits-note{margin-top:10px;font-size:11px;color:#7fb0cc;}
      @media (max-width:700px){
        .wn-neg-box{min-height:220px;padding-top:26px;padding-bottom:26px;}
        .wn-neg-head{font-size:18px;}
        .wn-mood{font-size:15px;}
      }
    `,document.head.appendChild(t)}}function Jt(i){const t=Math.round(i);return t>=0?`+${t}`:`${t}`}class Tr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-neg wn-scrim",this.panel.style.display="none",this.panel.appendChild(this.portrait.canvas),this.box=document.createElement("div"),this.box.className="wn-neg-box wn-glass",this.panel.appendChild(this.box),this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick),window.addEventListener("resize",()=>{this.isOpen()&&this.portrait.resize()})}panel;box;portrait=new qe;target=null;currentLine="";isOpen(){return this.target!==null}dismiss(){this.close()}open(t,e){Dt(this.ctx),this.target=e,this.currentLine=e.line(this.bumpTalks()),this.ctx.paused=!0,this.panel.style.display="flex",this.portrait.show(e.model,e.color),this.render()}close(){this.target=null,this.ctx.paused=!1,this.portrait.hide(),this.panel.style.display="none"}bumpTalks(){if(!this.target)return 0;const t=jn(this.ctx).npcTalks??={},e=t[`social:${this.target.key}`]??0;return t[`social:${this.target.key}`]=e+1,e}onClick=t=>{const e=t.target;if(e.closest("[data-exit]")){this.close();return}if(this.target&&e.closest("[data-chat]")){this.currentLine=this.target.line(this.bumpTalks()),this.render();return}};render(){if(!this.target)return;const t=this.target,e=`#${t.color.toString(16).padStart(6,"0")}`;this.box.innerHTML=`
      <div class="wn-neg-top"><div class="wn-neg-head" style="color:${e}">CHAT · ${t.name}</div><button class="wn-close-btn" data-exit style="margin-left:auto">✕</button></div>
      ${t.bio?`<div class="wn-bio">${t.bio}</div>`:""}
      <div class="wn-mood">“${this.currentLine}”</div>
      <div class="wn-acts">
        <button class="wn-act" data-chat>Chat</button>
        <button class="wn-act walk" data-exit>Leave</button>
      </div>`}injectStyles(){if(document.getElementById("wn-social-css"))return;const t=document.createElement("style");t.id="wn-social-css",t.textContent="",document.head.appendChild(t)}}class $r{constructor(t,e){this.root=t,this.ctx=e,T(),this.panel=document.createElement("div"),this.panel.className="wn-neg wn-scrim",this.panel.style.display="none",this.panel.appendChild(this.portrait.canvas),this.box=document.createElement("div"),this.box.className="wn-neg-box wn-glass",this.panel.appendChild(this.box),this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick),window.addEventListener("resize",()=>{this.open&&this.portrait.resize()})}panel;box;portrait=new qe;open=!1;pendingContinue=null;shownModel=null;shownColor=-1;typing=null;isOpen(){return this.open}dismiss(){this.close()}show(t){Dt(this.ctx);const e=this.open&&this.shownModel===t.model&&this.shownColor===t.color;this.open=!0,this.ctx.paused=!0,this.pendingContinue=t.onContinue??null;const n=`#${t.color.toString(16).padStart(6,"0")}`;this.panel.style.display="flex",e||(this.portrait.show(t.model,t.color),this.shownModel=t.model,this.shownColor=t.color);const s=t.onContinue?"data-continue":"data-exit";this.box.innerHTML=`
      <div class="wn-neg-top"><div class="wn-neg-head" style="color:${n}">${t.name}</div><button class="wn-close-btn" data-exit style="margin-left:auto">✕</button></div>
      ${t.bio?`<div class="wn-bio">${t.bio}</div>`:""}
      <div class="wn-mood"></div>
      <div class="wn-acts"><button class="wn-act" ${s}>${t.cta??"Continue"}</button></div>`,this.typing?.cancel();const a=this.box.querySelector(".wn-mood"),o=je(t.name);this.typing=_t(a,`“${t.text}”`,{voice:()=>this.ctx.bus.emit("ui.voice",{pitch:o})})}close(){this.open=!1,this.pendingContinue=null,this.shownModel=null,this.shownColor=-1,this.ctx.paused=!1,this.typing?.cancel(),this.typing=null,this.portrait.hide(),this.panel.style.display="none"}onClick=t=>{const e=t.target;if(e.closest("[data-continue]")&&this.pendingContinue){const n=this.pendingContinue;this.pendingContinue=null,n();return}if(e.closest("[data-exit]")){this.close();return}this.typing&&!this.typing.done&&this.typing.skip()}}const Wa=18,rn=.65,Ua=.05,Ya=1.15,Ga=.8,Va=3,Ka=.45;function Rt(i){return i>=1?"Perfected":i>=.7?"Expert":i>=.35?"Adept":"Novice"}function O(i){return i==="player_pulse"?"Pulse":i.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Qa(i){const t=Math.min(1,Math.max(0,i));return t>=1?Ya:rn+(1-rn)*t}function Lr(i,t,e){if(!e.mimicable||e.witnessThreshold==null||i.world.get(t,J)?.team!=="enemy")return;const n=i.world.get(i.player,mt);if(!n||n.learned.includes(e.id))return;const s=i.world.get(i.player,w),a=i.world.get(t,w);if(!s||!a||(i.world.get(i.player,z)?.current??0)<=0||Math.hypot(s.pos.x-a.pos.x,s.pos.z-a.pos.z)>Wa)return;const o=i.world.get(i.player,j),l=(o?Se(o.perks).quickStudy:!1)?Math.max(1,Math.ceil(e.witnessThreshold/2)):e.witnessThreshold,c=(n.witnessed[e.id]??0)+1;n.witnessed[e.id]=c,i.bus.emit("ability.witnessed",{abilityId:e.id,count:c,threshold:l}),i.fx.floatText(s.pos,`Witnessed: ${O(e.id)} ${Math.min(c,l)}/${l}`,"#b79bff"),c>=l&&(n.learned.push(e.id),n.mastery[e.id]=0,i.bus.emit("ability.learned",{abilityId:e.id}),i.fx.floatText(s.pos,`Learned: ${O(e.id)}!`,"#c98aff"))}function Ir(i,t){const e=i.world.get(i.player,mt);if(e){for(const n in e.cooldowns)e.cooldowns[n]>0&&(e.cooldowns[n]=Math.max(0,e.cooldowns[n]-t));e.lastMimicAge!=null&&(e.lastMimicAge+=t)}}function zr(i,t){if(i.respawn.timer>0)return;const e=i.world.get(i.player,mt);if(!e)return;const n=e.slotted[t];if(!n)return;const s=F[n];if(!s||(e.cooldowns[n]??0)>0)return;const a=i.world.get(i.player,w);if(!a)return;let o=Math.sin(a.rotY),r=Math.cos(a.rotY);const l=Qs(i.world,a.pos.x,a.pos.z,"player");if(l!==null){const u=i.world.get(l,w);o=u.pos.x-a.pos.x,r=u.pos.z-a.pos.z;const m=Math.hypot(o,r)||1;o/=m,r/=m}const c=e.mastery[n]??0,d=Qa(c),p={...s,abilityScale:s.abilityScale*d,telegraph:void 0,combo:"mimic"};a.rotY=Math.atan2(o,r),De(i,i.player,p,{dirX:o,dirZ:r}),i.bus.emit("mimic.cast",{abilityId:n,slot:t}),e.lastMimicSlot!=null&&e.lastMimicSlot!==t&&(e.lastMimicAge??1/0)<=Va&&(De(i,i.player,{...p,abilityScale:p.abilityScale*Ka},{dirX:o,dirZ:r}),i.fx.floatText(a.pos,"RESONANCE","#c98aff")),e.lastMimicSlot=t,e.lastMimicAge=0;const h=i.world.get(i.player,Pn)?.cooldownPct??0;e.cooldowns[n]=Xs(s.cooldown*(c>=1?Ga:1),h),e.mastery[n]=Math.min(1,c+Ua);const f=Rt(e.mastery[n]);f!==Rt(c)&&i.fx.floatText(a.pos,f==="Perfected"?`${O(n)} PERFECTED — now better than the original`:`${O(n)} → ${f}`,"#c98aff")}const Xa={kinetic:"#dffaff",thermal:"#ff9b68",cryo:"#8fe8ff",corrosive:"#b8ef65",voltaic:"#ffe36e",psionic:"#d3a0ff",void:"#9e85ff"},Za={fang:'<path d="M7 7l7 5-3 13-5-8m19-10-7 5 3 13 5-8"/><path d="M12 16h8"/>',impact:'<path d="M16 4v8M6 8l6 6M26 8l-6 6M4 18h8m8 0h8"/><path d="m10 27 6-11 6 11-6-3z"/>',blade:'<path d="M7 25 23 6l3 3L10 27zM8 8l7 7m2 2 7 7"/>',projectile:'<path d="M5 16h17M17 10l6 6-6 6"/><path d="M7 11H4m5 5H3m6 5H5"/>',bloom:'<circle cx="16" cy="16" r="3"/><path d="M16 5c4 0 5 5 2 8 4-2 8 1 7 5-1 4-6 4-8 1 1 4-3 8-7 6-4-2-2-7 2-8-4 0-7-4-5-8 2-4 7-2 8 2-2-4 0-8 4-8Z"/>',beam:'<path d="M5 20 22 5l5 6L9 25z"/><path d="m12 18 3 3M19 11l3 3"/>',wave:'<path d="M4 12c4-5 8 5 12 0s8 5 12 0M4 20c4-5 8 5 12 0s8 5 12 0"/>',pulse:'<circle cx="16" cy="16" r="3"/><circle cx="16" cy="16" r="8"/><path d="M16 3v3m0 20v3M3 16h3m20 0h3"/>',motion:'<path d="m7 23 8-15 4 7 7 2-13 8z"/><path d="M5 9h7M3 14h7"/>',coil:'<path d="M24 12c0-6-8-8-13-4-6 5-3 15 4 16 6 1 10-5 7-9-3-4-9-1-7 3 1 2 4 1 4-1"/>',burst:'<path d="m16 3 3 8 8-3-5 8 7 5-9-1-1 9-4-8-8 5 4-8-8-3 9-2z"/>'},P=(i,t)=>t.some(e=>i.includes(e));function Ja(i){return P(i,["bite","maw","pinch"])?"fang":P(i,["slam","quake","stomp","drop"])?"impact":P(i,["slash","lash","strike","cut","flurry","harry","rend","swipe"])?"blade":P(i,["bolt","dart","shot","slug","spit","sting"])?"projectile":P(i,["bloom","spore","hyphal"])?"bloom":P(i,["ray","lance","beam"])?"beam":P(i,["breath","spume","flood","surge","geyser","tide"])?"wave":P(i,["song","scream","ring","pulse","flash"])?"pulse":P(i,["pounce","lunge","dive","ram","roll","spin","charge"])?"motion":P(i,["snare","coil","smear"])?"coil":P(i,["volley","barrage","storm","avalanche","mortar","blast"])?"burst":F[i]?.kind==="melee"?"blade":"projectile"}function to(i){return Xa[F[i]?.dtype??"kinetic"]}function eo(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function ye(i){const t=eo(i),e=Ja(i),n=Array.from({length:1+t%3},(s,a)=>{const o=a*9,r=6+(t>>>o)%21,l=5+(t>>>o+4)%22;return`<circle class="wn-ability-icon__spark" cx="${r}" cy="${l}" r="1"/>`}).join("");return`<svg class="wn-ability-icon" data-ability-icon="${i}" data-icon-kind="${e}" viewBox="0 0 32 32" aria-hidden="true" style="color:${to(i)}"><g class="wn-ability-icon__mark" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${Za[e]}</g><g fill="currentColor" stroke="none" transform="rotate(${t%360} 16 16)">${n}</g></svg>`}function no(i){const t=new Set(i.learned);return[...new Set([...i.learned,...Object.keys(i.witnessed)])].filter(e=>!!F[e]&&(t.has(e)||(i.witnessed[e]??0)>0)).sort((e,n)=>Number(t.has(n))-Number(t.has(e))||O(e).localeCompare(O(n)))}class Ar{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-codex wn-scrim",this.panel.style.display="none",this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick),this.panel.addEventListener("dragstart",this.onDragStart),this.panel.addEventListener("dragover",this.onDragOver),this.panel.addEventListener("drop",this.onDrop),this.panel.addEventListener("dragend",this.onDragEnd),window.addEventListener("keydown",this.onKey)}panel;open=!1;dragId="";activeSlot=null;onBack=null;onKey=t=>{t.code==="KeyK"&&this.toggle()};isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}wl(){return this.ctx.world.get(this.ctx.player,mt)}onClick=t=>{if(t.target.closest("[data-exit]")){this.close();return}if(t.target.closest("[data-close]")){this.close(),this.onBack?.();return}const e=t.target.closest("[data-assign],[data-clear]");if(e){if(e.dataset.clear!=null){const n=this.wl();n&&(n.slotted[Number(e.dataset.clear)]=null),Fe(this.ctx),this.render()}else if(e.dataset.assign){const[n,s]=e.dataset.assign.split("|");this.assignToSlot(n,Number(s))}}};assignToSlot(t,e){const n=this.wl();if(!n||!n.learned.includes(t))return;const s=e===0?1:0;n.slotted[s]===t&&(n.slotted[s]=null),n.slotted[e]=t,Fe(this.ctx),this.ctx.bus.emit("mimic.slotted",{abilityId:t,slot:e}),this.render()}onDragStart=t=>{const e=t.target.closest(".wn-skill-card[draggable]");this.dragId=e?.dataset.id??"",this.dragId&&(t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",this.dragId))};onDragOver=t=>{if(!this.dragId)return;const e=t.target.closest(".wn-slot-cur");this.highlight(e),e&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")};onDrop=t=>{if(!this.dragId)return;const e=t.target.closest(".wn-slot-cur");e&&(t.preventDefault(),this.assignToSlot(this.dragId,Number(e.dataset.slot)),this.dragId="")};onDragEnd=()=>{this.dragId="",this.highlight(null)};highlight(t){t!==this.activeSlot&&(this.activeSlot?.classList.remove("wn-drop-zone"),this.activeSlot=t,t?.classList.add("wn-drop-zone"))}render(){const t=this.wl();if(!t)return;const e=s=>{const a=t.slotted[s],o=a?`${ye(a)}<span class="wn-slot-copy"><b>${O(a)}</b><small>${Rt(t.mastery[a]??0)}</small></span><button class="wn-x" data-clear="${s}">✕</button>`:'<span class="wn-slot-empty">Drop a learned technique here</span>';return`<div class="wn-slot-box"><label>Slot ${s+1}</label><div class="wn-slot-cur" data-slot="${s}">${o}</div></div>`},n=no(t).map(s=>{const a=t.learned.includes(s),o=t.mastery[s]??0,r=t.witnessed[s]??0,l=Math.max(1,F[s]?.witnessThreshold??r),c=a?1:Math.min(1,r/l),d=t.slotted.indexOf(s),p=u=>`<button class="wn-mini ${t.slotted[u]===s?"on":""}" data-assign="${s}|${u}">→${u+1}</button>`,h=Rt(o),f=a?`${h} · ${Math.round(Math.min(1,o)*100)}% mastery`:`Unlock ${r}/${l}`;return`<div class="wn-skill-card ${a?"learned":"witnessed"}" ${a?'draggable="true"':""} data-id="${s}" title="${a?"Drag or assign to a Mimicry slot":`Witness ${Math.max(0,l-r)} more use${l-r===1?"":"s"} to unlock`}">
            <div class="wn-skill-radial" style="--wn-skill-progress:${(c*360).toFixed(1)}deg;--wn-skill-ring:${a?"#c98aff":"#5bd0ff"}">
              <div class="wn-skill-core">${ye(s)}</div>
              <span class="wn-skill-count">${a?"✓":`${r}/${l}`}</span>
            </div>
            <div class="wn-skill-name">${O(s)}${d>=0?`<span>Slot ${d+1}</span>`:""}</div>
            <div class="wn-skill-progress-copy ${h==="Perfected"?"max":""}">${f}</div>
            ${a?`<div class="wn-row-act">${p(0)}${p(1)}</div>`:""}
          </div>`}).join("");this.panel.innerHTML=`
      <div class="wn-codex-box wn-glass">
        <div class="wn-phead"><button class="wn-back" data-close>‹ Back</button><h3 style="margin:0">Mimicry</h3><span class="wn-phint">[K] / Esc</span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-mimic-slots">${e(0)}${e(1)}</div>
        <div class="wn-mimic-subhead"><h4>Techniques in progress</h4><span>Radials fill as attacks are witnessed</span></div>
        <div class="wn-skill-grid">${n||'<div class="wn-empty-mimic">Watch enemies attack to begin learning their techniques.</div>'}</div>
      </div>`}injectStyles(){if(document.getElementById("wn-codex-css"))return;const t=document.createElement("style");t.id="wn-codex-css",t.textContent=`
      .wn-codex{position:fixed;inset:0;z-index:31;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-codex-box{width:min(680px,calc(100vw - 36px));padding:20px 24px;border-radius:14px;}
      .wn-codex-box > *{position:relative;z-index:1;}
      .wn-codex-box h3{font-size:15px;letter-spacing:0.06em;color:#d6c2ff;margin-bottom:12px;}
      .wn-codex-box h4{font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#9fe3ff;margin:0;}
      .wn-mimic-slots{display:flex;gap:12px;}
      .wn-slot-box{flex:1;}
      .wn-slot-box label{font-size:9px;color:#9aa6cf;text-transform:uppercase;letter-spacing:.1em;}
      .wn-slot-cur{margin-top:4px;height:52px;border:1px solid rgba(201,138,255,0.4);border-radius:8px;
        background:rgba(46,30,68,0.5);display:flex;align-items:center;gap:9px;padding:0 10px;color:#f0e6ff;font-size:13px;}
      .wn-slot-cur>.wn-ability-icon{width:31px;height:31px;flex:none;}
      .wn-slot-copy{display:flex;flex:1;min-width:0;flex-direction:column;line-height:1.15;}
      .wn-slot-copy b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
      .wn-slot-copy small{margin-top:3px;color:#9a7fc4;font-size:9px;text-transform:uppercase;letter-spacing:.08em;}
      .wn-slot-empty{margin:auto;color:#6f9fbc;font-size:10px;text-transform:uppercase;letter-spacing:.07em;}
      .wn-slot-cur.wn-drop-zone{outline:2px dashed rgba(150,235,255,0.85);outline-offset:2px;
        background:rgba(70,150,200,0.4);}
      .wn-mimic-subhead{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:17px 0 9px;}
      .wn-mimic-subhead span{font-size:9px;color:#6f9fbc;letter-spacing:.04em;}
      .wn-skill-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:8px;
        max-height:min(52vh,410px);overflow-y:auto;padding:1px 4px 4px 1px;}
      .wn-skill-card{min-width:0;padding:10px 8px 8px;border:1px solid rgba(91,208,255,.18);border-radius:10px;
        background:rgba(8,22,36,.66);display:flex;flex-direction:column;align-items:center;text-align:center;}
      .wn-skill-card.learned{border-color:rgba(201,138,255,.3);background:rgba(40,27,58,.58);cursor:grab;}
      .wn-skill-card[draggable=true]:active{cursor:grabbing;}
      .wn-skill-radial{position:relative;width:62px;height:62px;border-radius:50%;padding:3px;
        background:conic-gradient(from -90deg,var(--wn-skill-ring) 0deg var(--wn-skill-progress),rgba(90,130,155,.16) var(--wn-skill-progress) 360deg);
        box-shadow:0 0 12px color-mix(in srgb,var(--wn-skill-ring) 22%,transparent);}
      .wn-skill-core{width:100%;height:100%;border-radius:50%;display:grid;place-items:center;background:rgba(5,14,24,.96);
        border:1px solid rgba(190,235,255,.11);}
      .wn-skill-core>.wn-ability-icon{width:35px;height:35px;}
      .wn-skill-count{position:absolute;right:-3px;bottom:-2px;min-width:20px;height:17px;padding:0 4px;border-radius:9px;
        display:grid;place-items:center;background:#0a1724;border:1px solid var(--wn-skill-ring);color:var(--wn-skill-ring);
        font:800 8px/1 ui-monospace,monospace;box-shadow:0 1px 4px #000;}
      .wn-skill-name{width:100%;margin-top:8px;color:#dff6ff;font-size:11px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
      .wn-skill-name span{display:inline-block;margin-left:4px;padding:1px 4px;border-radius:7px;background:rgba(201,138,255,.18);
        color:#c98aff;font-size:7px;text-transform:uppercase;vertical-align:1px;}
      .wn-skill-progress-copy{margin-top:3px;color:#6faac8;font-size:8px;text-transform:uppercase;letter-spacing:.04em;}
      .wn-skill-progress-copy.max{color:#ffd23f;text-shadow:0 0 6px rgba(255,210,63,.4);}
      .wn-row-act{display:flex;gap:4px;justify-content:center;margin-top:7px;}
      .wn-mini{padding:3px 7px;border-radius:4px;border:1px solid rgba(201,138,255,0.35);background:rgba(48,32,68,0.8);
        color:#e6d8f8;font-size:11px;font-weight:700;cursor:pointer;}
      .wn-mini.on{background:#7a4fb0;border-color:#c98aff;color:#fff;}
      .wn-x{background:none;border:none;color:#ff8a9a;cursor:pointer;font-size:12px;}
      .wn-empty-mimic{grid-column:1/-1;padding:28px 18px;text-align:center;color:#6f9fbc;font-size:11px;
        border:1px dashed rgba(120,220,255,.18);border-radius:9px;}
      .wn-codex .wn-ability-icon{display:block;overflow:visible;filter:drop-shadow(0 0 4px color-mix(in srgb,currentColor 35%,transparent));}
      .wn-codex .wn-ability-icon__mark>*{fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
      .wn-codex .wn-ability-icon__spark{fill:currentColor;stroke:none;opacity:.72;}
      @media (max-width:560px){.wn-mimic-slots{flex-direction:column}.wn-mimic-subhead span{display:none}.wn-skill-grid{grid-template-columns:repeat(2,1fr)}}
    `,document.head.appendChild(t)}}class Pr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-perks wn-scrim",this.panel.style.display="none",this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick),window.addEventListener("keydown",this.onKey)}panel;open=!1;onBack=null;onKey=t=>{t.code==="KeyP"&&this.toggle()};isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}prog(){return this.ctx.world.get(this.ctx.player,j)}onClick=t=>{const e=t.target;if(e.closest("[data-exit]")){this.close();return}if(e.closest("[data-close]")){this.close(),this.onBack?.();return}if(e.closest("[data-respec]")){const s=this.prog();s&&(Zs(s),dt(this.ctx.world,this.ctx.player),this.render());return}const n=e.closest("[data-perk]");if(n){const s=this.prog();s&&Js(s,n.dataset.perk)&&(dt(this.ctx.world,this.ctx.player),this.render())}};perkRow(t,e){const n=t.perks[e.id]??0,s=ti(t,e.id),a=n>=e.maxRank,o=a?"maxed":s?"locked":"avail",r=Array.from({length:e.maxRank},(c,d)=>`<span class="wn-pip${d<n?" on":""}"></span>`).join(""),l=a?'<span class="wn-perk-tag">MAX</span>':s?`<span class="wn-perk-tag dim">${s}</span>`:`<button class="wn-buy" data-perk="${e.id}">Take ›</button>`;return`<div class="wn-perk ${o}">
        <div class="wn-perk-main">
          <div class="wn-perk-name">${e.name} <span class="wn-pips">${r}</span></div>
          <div class="wn-perk-desc">${e.desc}</div>
        </div>
        <div class="wn-perk-act">${l}</div>
      </div>`}render(){const t=this.prog();if(!t)return;const e=t.level>=qn,n=Nn(t.level),s=e?100:Math.min(100,t.xp/n*100),a=e?"MAX LEVEL":`${t.xp} / ${n} XP`,o=ei.map(l=>{const c=ni[l.id].map(d=>this.perkRow(t,d)).join("");return`<div class="wn-line">
          <div class="wn-line-head"><b>${l.name}</b><span>${l.blurb}</span></div>
          ${c}
        </div>`}).join(""),r=t.perkPoints>0?`<span class="wn-points">${t.perkPoints} perk point${t.perkPoints>1?"s":""} to spend</span>`:'<span class="wn-points dim">No unspent points</span>';this.panel.innerHTML=`
      <div class="wn-perks-box wn-glass">
        <div class="wn-phead">
          <button class="wn-back" data-close>‹ Back</button>
          <h3 style="margin:0">Perks — Level ${t.level}</h3>
          <span class="wn-phint">[P] / Esc</span>
          <button class="wn-close-btn" data-exit>✕</button>
        </div>
        <div class="wn-xp"><div class="wn-xp-fill" style="width:${s}%"></div><span>${a}</span></div>
        <div class="wn-perks-sub">${r}<button class="wn-respec" data-respec>Respec (free)</button></div>
        <div class="wn-lines">${o}</div>
      </div>`}injectStyles(){if(document.getElementById("wn-perks-css"))return;const t=document.createElement("style");t.id="wn-perks-css",t.textContent=`
      .wn-perks{position:fixed;inset:0;z-index:31;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-perks-box{width:520px;max-height:84vh;overflow-y:auto;padding:20px 24px;border-radius:14px;}
      .wn-perks-box > *{position:relative;z-index:1;}
      .wn-perks-box h3{font-size:15px;letter-spacing:0.06em;color:#d6c2ff;}
      .wn-xp{position:relative;height:16px;border:1px solid rgba(120,220,255,0.3);border-radius:5px;
        background:rgba(8,22,36,0.8);overflow:hidden;margin:12px 0 10px;}
      .wn-xp-fill{height:100%;background:linear-gradient(90deg,#5bd0ff,#9a7bff);}
      .wn-xp span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
        font:700 10px ui-monospace,monospace;color:#eafaff;text-shadow:0 1px 2px #000;}
      .wn-perks-sub{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
      .wn-points{font-size:12px;font-weight:700;color:#ffe08a;}
      .wn-respec{font-size:11px;color:#cfe8f7;background:rgba(28,64,92,0.7);border:1px solid rgba(120,220,255,0.26);
        border-radius:7px;padding:5px 10px;cursor:pointer;}
      .wn-respec:hover{background:rgba(46,100,140,0.85);color:#fff;}
      .wn-lines{display:flex;flex-direction:column;gap:14px;}
      .wn-line-head{display:flex;align-items:baseline;gap:8px;margin-bottom:6px;
        border-bottom:1px solid rgba(120,220,255,0.16);padding-bottom:4px;}
      .wn-line-head b{font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#9fe3ff;}
      .wn-line-head span{font-size:10px;color:#6f9fbc;}
      .wn-perk{display:flex;align-items:center;gap:10px;padding:7px 9px;border-radius:8px;margin-bottom:5px;
        border:1px solid rgba(120,220,255,0.12);background:rgba(18,44,66,0.4);}
      .wn-perk.avail{border-color:rgba(201,138,255,0.4);background:rgba(46,30,68,0.4);}
      .wn-perk.maxed{border-color:rgba(125,224,168,0.4);}
      .wn-perk.locked{opacity:0.6;}
      .wn-perk-main{flex:1;}
      .wn-perk-name{font-size:13px;font-weight:700;color:#eafaff;display:flex;align-items:center;gap:8px;}
      .wn-perk-desc{font-size:11px;color:#9fc6dc;margin-top:2px;}
      .wn-pips{display:inline-flex;gap:3px;}
      .wn-pip{width:7px;height:7px;border-radius:50%;border:1px solid rgba(201,138,255,0.5);}
      .wn-pip.on{background:#c98aff;box-shadow:0 0 5px rgba(201,138,255,0.8);}
      .wn-perk-act{flex:0 0 auto;min-width:96px;text-align:right;}
      .wn-buy{font-size:11px;font-weight:700;color:#fff;background:#7a4fb0;border:1px solid #c98aff;
        border-radius:6px;padding:5px 10px;cursor:pointer;}
      .wn-buy:hover{background:#9163c8;}
      .wn-perk-tag{font-size:10px;font-weight:700;letter-spacing:0.06em;color:#7de0a8;}
      .wn-perk-tag.dim{color:#6f9fbc;font-weight:600;}
      .wn-perks .dim{color:#6f9fbc;}
    `,document.head.appendChild(t)}}const ln=2600,it=new Map;function Ft(i,t,e="Sure?"){const n=Date.now(),s=it.get(i);if(s!==void 0&&n<=s)return it.delete(i),!0;so();const a=n+ln;if(it.set(i,a),t){t.classList.add("wn-confirm-armed"),t.dataset.confirm=e;const o=t instanceof HTMLButtonElement,r=o?t.textContent:null;o&&(t.textContent=e),window.setTimeout(()=>{it.get(i)===a&&it.delete(i),t.isConnected&&(t.classList.remove("wn-confirm-armed"),delete t.dataset.confirm,o&&r!==null&&(t.textContent=r))},ln)}return!1}function so(){if(document.getElementById("wn-confirm-css"))return;const i=document.createElement("style");i.id="wn-confirm-css",i.textContent=`
    .wn-confirm-armed{border-color:#ff8f6a !important;color:#ffd2c2 !important;
      box-shadow:0 0 12px rgba(255,120,80,0.35) !important;
      animation:wn-confirm-pulse 0.9s ease-in-out infinite;}
    @keyframes wn-confirm-pulse{50%{box-shadow:0 0 20px rgba(255,120,80,0.6);}}
    /* grid cells keep their content — the label overlays the bottom edge */
    .wn-cell.wn-confirm-armed{position:relative;}
    .wn-cell.wn-confirm-armed::after{content:attr(data-confirm);position:absolute;left:0;right:0;bottom:0;
      padding:2px 0;font-size:10px;font-weight:800;text-align:center;letter-spacing:0.06em;
      color:#ffd2c2;background:rgba(60,16,8,0.85);pointer-events:none;}
  `,document.head.appendChild(i)}const io=[["Move","WASD / arrows, or left-click ground (hold to keep moving)"],["Touch","Left stick to move · drag right to look · tap the hotbar to cast"],["Toggle view","V or middle mouse"],["Zoom","Scroll or - / +"],["Attack","Hold Q (reticle in action / facing in strategy)"],["Your Mimicry","1 · 2"],["Companion abilities","3 · 4 · 5 · 6"],["Jetpack","Hold Space"],["Build base","B to choose a site · B again to build"],["Collect loot","Hold Z"],["Chat","E (near a non-hostile creature)"],["Recruit","Shift+E (near a recruitable)"],["Swap companion","Tab"],[`Companions (${_})`,"C"],["Perks","P"],["Quests (journal)","J"],["Island Map","M"],["Gamepad","Left stick move · right stick camera/aim · LT ADS · RT/X attack · hold A jetpack · B interact · Y recruit"]],ao={aggressive:"defensive",defensive:"passive",passive:"aggressive"},oo={aggressive:"🔥 Hyped",defensive:"🛡 Guarded",passive:"😎 Chill"},te=[512,1024,2048],ee=[.5,.75,1];class Br{constructor(t,e,n,s=null){this.root=t,this.ctx=e,this.deps=n,this.devTools=s,this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-menu",this.panel.style.display="none";const a=`
      <div class="wn-audio-controls" title="Master volume">
        <button class="wn-mute" data-mute type="button" aria-label="Mute"></button>
        <input class="wn-volume" data-audio-volume="masterVolume" type="range" min="0" max="100" step="1" aria-label="Master volume" />
      </div>`,o=this.devTools?`<aside class="wn-dev-panel wn-glass" aria-label="Temporary developer controls">
          <div class="wn-dev-title"><span>DEV</span> World preview</div>
          <label class="wn-dev-row">
            <span>Weather</span>
            <select data-dev-weather aria-label="Preview weather">
              <option value="auto">Automatic</option>
              <option value="radiant">Radiant</option>
              <option value="fair">Fair</option>
              <option value="overcast">Overcast</option>
              <option value="rain">Rain</option>
              <option value="storm">Storm</option>
            </select>
          </label>
          <label class="wn-dev-row">
            <span>Time of day</span>
            <select data-dev-time aria-label="Preview time of day">
              <option value="auto">Automatic</option>
              <option value="sunrise">Sunrise</option>
              <option value="midday">Midday</option>
              <option value="sunset">Sunset</option>
              <option value="midnight">Midnight</option>
            </select>
          </label>
          <div class="wn-dev-note">Preview overrides reset on reload.</div>
        </aside>`:"";this.panel.innerHTML=`
      <div class="wn-device">
        <div class="wn-holo wn-glass">
          <div class="wn-screen wn-home active">
            <div class="wn-os-bar">
              <span class="wn-os-label" title="Projection courtesy of your translator">B4B3L OS</span>
              ${a}
              <span class="wn-clock">9:41</span>
              <button class="wn-x" data-resume title="Resume (Esc)">✕</button>
            </div>
            <div class="wn-apps">
              <button class="wn-app" data-app="inventory"><span class="wn-app-i">🎒</span><span class="wn-app-n">Inventory</span><kbd>I</kbd></button>
              <button class="wn-app" data-app="critter"><span class="wn-badge" title="New ${_} updates"></span><span class="wn-app-i">👽</span><span class="wn-app-n">${_}</span><kbd>C</kbd></button>
              <button class="wn-app" data-app="quests"><span class="wn-app-i">📜</span><span class="wn-app-n">Quests</span><kbd>J</kbd></button>
              <button class="wn-app" data-app="map"><span class="wn-app-i">🗺️</span><span class="wn-app-n">Map</span><kbd>M</kbd></button>
              <button class="wn-app" data-app="skills"><span class="wn-app-i">✦</span><span class="wn-app-n">Mimicry</span><kbd>K</kbd></button>
              <button class="wn-app" data-app="perks"><span class="wn-app-i">★</span><span class="wn-app-n">Perks</span><kbd>P</kbd></button>
              <button class="wn-app" data-app="controls"><span class="wn-app-i">⌨</span><span class="wn-app-n">Controls</span></button>
              <button class="wn-app" data-app="settings"><span class="wn-app-i">⚙</span><span class="wn-app-n">Settings</span></button>
            </div>
            <div class="wn-menu-footer">
              <button class="wn-quit" data-quit type="button">Quit Game</button>
            </div>
          </div>
          <div class="wn-screen wn-critter">
            <div class="wn-sub-head"><button class="wn-back" data-back>‹ Back</button><span class="wn-sub-title">${_} — ${si}</span><button class="wn-x" data-resume style="margin-left:auto">✕</button></div>
            <div class="wn-feed"></div>
          </div>
          <div class="wn-screen wn-controls-screen">
            <div class="wn-sub-head"><button class="wn-back" data-back>‹ Back</button><span class="wn-sub-title">Controls</span><button class="wn-x" data-resume style="margin-left:auto">✕</button></div>
            <div class="wn-ctrl">
              ${io.map(([l,c])=>`<div class="wn-ctrl-row"><span>${l}</span><b>${c}</b></div>`).join("")}
            </div>
          </div>
          <div class="wn-screen wn-settings-screen">
            <div class="wn-sub-head"><button class="wn-back" data-back>‹ Back</button><span class="wn-sub-title">Settings</span><button class="wn-x" data-resume style="margin-left:auto">✕</button></div>
            <div class="wn-ctrl">
              <div class="wn-settings-group">Camera &amp; aiming</div>
              <div class="wn-ctrl-row"><span>Screenshake</span><button class="wn-back" data-setting="screenshake"></button></div>
              <label class="wn-ctrl-row wn-range-row"><span>Shake intensity</span><input data-setting-range="cameraShakeIntensity" type="range" min="0" max="100" step="5" /><output data-setting-range-output="cameraShakeIntensity"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>Action FOV</span><input data-setting-range="actionFov" type="range" min="45" max="70" step="1" /><output data-setting-range-output="actionFov"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>Mouse sensitivity</span><input data-setting-range="mouseSensitivity" type="range" min="25" max="200" step="5" /><output data-setting-range-output="mouseSensitivity"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>ADS sensitivity</span><input data-setting-range="adsLookSensitivity" type="range" min="25" max="100" step="5" /><output data-setting-range-output="adsLookSensitivity"></output></label>
              <div class="wn-ctrl-row"><span>Invert vertical look</span><button class="wn-back" data-setting="invertLookY"></button></div>
              <div class="wn-settings-group">Controller look</div>
              <label class="wn-ctrl-row wn-range-row"><span>Horizontal sensitivity</span><input data-setting-range="gamepadLookSensitivityX" type="range" min="25" max="200" step="5" /><output data-setting-range-output="gamepadLookSensitivityX"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>Vertical sensitivity</span><input data-setting-range="gamepadLookSensitivityY" type="range" min="25" max="200" step="5" /><output data-setting-range-output="gamepadLookSensitivityY"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>Look acceleration</span><input data-setting-range="gamepadLookAcceleration" type="range" min="0" max="100" step="5" /><output data-setting-range-output="gamepadLookAcceleration"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>Inner deadzone</span><input data-setting-range="gamepadInnerDeadzone" type="range" min="5" max="35" step="1" /><output data-setting-range-output="gamepadInnerDeadzone"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>Outer threshold</span><input data-setting-range="gamepadOuterDeadzone" type="range" min="0" max="25" step="1" /><output data-setting-range-output="gamepadOuterDeadzone"></output></label>
              <label class="wn-ctrl-row wn-range-row"><span>Axial deadzone</span><input data-setting-range="gamepadAxialDeadzone" type="range" min="0" max="25" step="1" /><output data-setting-range-output="gamepadAxialDeadzone"></output></label>
              <div class="wn-settings-group">Touch controls</div>
              <div class="wn-ctrl-row"><span>Touch interface</span><button class="wn-back" data-setting-cycle="touchControls"></button></div>
              <label class="wn-ctrl-row wn-range-row"><span>Look sensitivity</span><input data-setting-range="touchLookSensitivity" type="range" min="50" max="200" step="5" /><output data-setting-range-output="touchLookSensitivity"></output></label>
              <div class="wn-ctrl-row"><span>Left-handed layout</span><button class="wn-back" data-setting="touchLeftHanded"></button></div>
              <div class="wn-settings-group">Graphics, accessibility &amp; audio</div>
              <div class="wn-ctrl-row"><span>Reduced motion</span><button class="wn-back" data-setting="reducedMotion" title="Stop the UI's persistent scanline/glow animations"></button></div>
              <div class="wn-ctrl-row"><span>Handmade diorama</span><button class="wn-back" data-setting="handmade" title="Painted materials and miniature depth optics"></button></div>
              <div class="wn-ctrl-row"><span>Bloom</span><button class="wn-back" data-setting="bloom"></button></div>
              <div class="wn-ctrl-row"><span>Shadow quality</span><button class="wn-back" data-setting-cycle="shadowQuality"></button></div>
              <div class="wn-ctrl-row"><span>Resolution</span><button class="wn-back" data-setting-cycle="resolutionScale"></button></div>
              <div class="wn-ctrl-row"><span>Sound</span><button class="wn-back" data-setting="sound"></button></div>
              <label class="wn-ctrl-row wn-volume-row"><span>Master volume</span><input class="wn-volume" data-audio-volume="masterVolume" type="range" min="0" max="100" step="1" aria-label="Master volume" /><output data-audio-volume-output="masterVolume"></output></label>
              <label class="wn-ctrl-row wn-volume-row"><span>Music volume</span><input class="wn-volume" data-audio-volume="musicVolume" type="range" min="0" max="100" step="1" aria-label="Music volume" /><output data-audio-volume-output="musicVolume"></output></label>
              <label class="wn-ctrl-row wn-volume-row"><span>Sound effects volume</span><input class="wn-volume" data-audio-volume="sfxVolume" type="range" min="0" max="100" step="1" aria-label="Sound effects volume" /><output data-audio-volume-output="sfxVolume"></output></label>
            </div>
          </div>
        </div>
        <div class="wn-beam"></div>
      </div>
      ${o}`;for(const l of this.panel.querySelectorAll(".wn-sub-head .wn-x"))l.style.marginLeft="",l.insertAdjacentHTML("beforebegin",`<span class="wn-head-spacer"></span>${a}`);this.root.appendChild(this.panel),this.device=this.panel.querySelector(".wn-device"),this.holo=this.panel.querySelector(".wn-holo"),this.beam=this.panel.querySelector(".wn-beam"),this.feedEl=this.panel.querySelector(".wn-feed"),this.spaceBookApp=this.panel.querySelector('[data-app="critter"]'),this.screens={home:this.panel.querySelector(".wn-home"),critter:this.panel.querySelector(".wn-critter"),controls:this.panel.querySelector(".wn-controls-screen"),settings:this.panel.querySelector(".wn-settings-screen")},this.holo.addEventListener("transitionend",l=>{this.open&&l.propertyName==="height"&&this.projectionRevision++}),this.lastSeenSpaceBookSig=this.spaceBookSignature(),this.refreshSpaceBookBadge(),this.refreshSettings(),this.refreshDevTools(),this.panel.addEventListener("click",this.onClick),this.panel.addEventListener("input",this.onInput),window.addEventListener("keydown",this.onKey,{capture:!0});const r=document.createElement("button");r.className="wn-menu-trigger",r.title="Device (Esc)",r.textContent="⬡",r.addEventListener("click",()=>this.openMenu()),this.root.appendChild(r)}panel;device;holo;beam;screens;feedEl;spaceBookApp;lastSeenSpaceBookSig="";current="home";open=!1;projectionRevision=0;resumeAfterEscape=null;prepareForOpen=null;quitToStart=null;closables=[];isOpen(){return this.open}projectionAnchor(){return{beam:this.beam,revision:this.projectionRevision}}addClosable(t){this.closables.push(t)}setEscGate(t){this.escGate=t}escGate=null;onKey=t=>{if(t.code==="KeyC"){this.open?this.showScreen("critter"):this.ctx.paused||this.openMenu("critter");return}t.code==="Escape"&&(t.preventDefault(),!this.escGate?.()&&(t.repeat||(this.open?this.current!=="home"?(t.stopImmediatePropagation(),this.showScreen("home")):(t.stopImmediatePropagation(),this.close(),this.resumeAfterEscape?.()):(t.stopImmediatePropagation(),this.closeCompetingPanels(),this.openMenu()))))};closeCompetingPanels(){for(const t of[this.deps.inventory,this.deps.codex,this.deps.perks,this.deps.quests,this.deps.map])t.isOpen()&&t.close();this.deps.negotiation.isOpen()&&this.deps.negotiation.dismiss();for(const t of this.closables)t.isOpen()&&t.close()}onClick=t=>{const e=t.target,n=e.closest("button[data-quit]");if(n&&this.quitToStart&&!n.disabled){n.disabled=!0,n.textContent="Saving…",Promise.resolve(this.quitToStart()).finally(()=>{n.disabled=!1,n.textContent="Quit Game"});return}if(e.closest("button[data-mute]")){const c=!y.sound||y.masterVolume<=0;y.sound=c,c&&y.masterVolume<=0&&(y.masterVolume=.8),Y(),this.refreshSettings();return}const a=e.closest("button[data-setting]");if(a){const c=a.dataset.setting;y[c]=!y[c],Y(),c==="reducedMotion"&&as(),this.refreshSettings();return}const o=e.closest("button[data-setting-cycle]");if(o){const c=o.dataset.settingCycle;if(c==="shadowQuality"){const d=te.indexOf(y.shadowQuality);y.shadowQuality=te[(d+1)%te.length]}else if(c==="resolutionScale"){const d=ee.indexOf(y.resolutionScale);y.resolutionScale=ee[(d+1)%ee.length]}else{const d=["auto","on","off"],p=d.indexOf(y.touchControls);y.touchControls=d[(p+1)%d.length]}Y(),this.refreshSettings();return}const r=e.closest("button[data-action]");if(r){const c=r.dataset.action;if((c==="release"||c==="releasecollected"||c==="synthesize")&&!Ft(`${c}:${r.dataset.index}`,r,c==="synthesize"?"Consume one?":"Sure?"))return;this.companionAction(c,Number(r.dataset.index));return}const l=e.closest("[data-resume],[data-app],[data-back]");l&&(l.dataset.resume!=null?this.close():l.dataset.back!=null?this.showScreen("home"):l.dataset.app!=null&&this.launchApp(l.dataset.app))};onInput=t=>{const e=t.target.closest("select[data-dev-weather]");if(e&&this.devTools){this.devTools.setWeatherMode(e.value),this.refreshDevTools();return}const n=t.target.closest("select[data-dev-time]");if(n&&this.devTools){this.devTools.setTimeMode(n.value),this.refreshDevTools();return}const s=t.target.closest("input[data-setting-range]");if(s){const r=s.dataset.settingRange;y[r]=r==="actionFov"?Number(s.value):Number(s.value)/100,Y(),this.refreshSettings();return}const a=t.target.closest("input[data-audio-volume]");if(!a)return;const o=a.dataset.audioVolume;y[o]=Math.max(0,Math.min(1,Number(a.value)/100)),o==="masterVolume"&&(y.sound=y.masterVolume>0),Y(),this.refreshSettings()};launchApp(t){switch(t){case"inventory":this.close(),this.deps.inventory.toggle();break;case"skills":this.close(),this.deps.codex.toggle();break;case"perks":this.close(),this.deps.perks.toggle();break;case"quests":this.close(),this.deps.quests.toggle();break;case"map":this.close(),this.deps.map.toggle();break;case"critter":this.showScreen("critter");break;case"controls":this.showScreen("controls");break;case"settings":this.showScreen("settings");break}}spaceBookSignature(){const t=this.ctx.world.get(this.ctx.player,N);if(!t)return"";const e=n=>[n.creatureId,Gt(n.bond).level,n.stance,n.level,n.loadout.join(","),n.traits.join(",")].join(":");return[t.activeIndex??"none",t.members.map(e).join("|"),t.collected.map(e).join("|")].join("::")}refreshSpaceBookBadge(){const e=this.spaceBookSignature()!==this.lastSeenSpaceBookSig;this.spaceBookApp.classList.toggle("has-update",e),this.spaceBookApp.setAttribute("aria-label",e?`${_}, new updates`:_)}markSpaceBookSeen(){this.lastSeenSpaceBookSig=this.spaceBookSignature(),this.refreshSpaceBookBadge()}refreshSettings(){for(const e of this.panel.querySelectorAll("button[data-setting]")){const n=e.dataset.setting;e.textContent=y[n]?"On":"Off",e.style.opacity=y[n]?"1":"0.55"}for(const e of this.panel.querySelectorAll("input[data-setting-range]")){const n=e.dataset.settingRange;e.value=String(Math.round(n==="actionFov"?y[n]:y[n]*100))}for(const e of this.panel.querySelectorAll("[data-setting-range-output]")){const n=e.dataset.settingRangeOutput;n==="actionFov"?e.value=`${Math.round(y[n])}°`:n==="mouseSensitivity"||n==="touchLookSensitivity"||n==="gamepadLookSensitivityX"||n==="gamepadLookSensitivityY"?e.value=`${y[n].toFixed(2)}×`:e.value=`${Math.round(y[n]*100)}%`}for(const e of this.panel.querySelectorAll("button[data-setting-cycle]")){const n=e.dataset.settingCycle;e.textContent=n==="shadowQuality"?`${y.shadowQuality}`:n==="resolutionScale"?`${Math.round(y.resolutionScale*100)}%`:y.touchControls==="auto"?"Auto":y.touchControls==="on"?"On":"Off",e.style.opacity="1"}const t=!y.sound||y.masterVolume<=0;for(const e of this.panel.querySelectorAll("input[data-audio-volume]")){const n=e.dataset.audioVolume;e.value=String(Math.round(y[n]*100))}for(const e of this.panel.querySelectorAll("[data-audio-volume-output]")){const n=e.dataset.audioVolumeOutput;e.value=`${Math.round(y[n]*100)}%`}for(const e of this.panel.querySelectorAll("button[data-mute]"))e.title=t?"Unmute":"Mute",e.setAttribute("aria-label",t?"Unmute":"Mute"),e.setAttribute("aria-pressed",t?"true":"false"),e.classList.toggle("muted",t)}refreshDevTools(){if(!this.devTools)return;const t=this.panel.querySelector("select[data-dev-weather]"),e=this.panel.querySelector("select[data-dev-time]");t&&(t.value=this.devTools.weatherMode()),e&&(e.value=this.devTools.timeMode())}companionAction(t,e){const n=this.ctx.world.get(this.ctx.player,N);if(t==="active")Yt(this.ctx,e);else if(t==="stance"){const s=n.members[e];s.stance=ao[s.stance]}else if(t==="release")this.release(e);else if(t==="bench")ii(this.ctx,e);else if(t==="toparty")ai(this.ctx,e);else if(t==="releasecollected")oi(this.ctx,e);else if(t==="synthesize"){const s=n.collected.findIndex((a,o)=>o!==e);s>=0&&ri(this.ctx,e,s)}this.renderCritter(),this.markSpaceBookSeen(),this.setHeight(this.screens.critter,!0)}release(t){const e=this.ctx.world.get(this.ctx.player,N),n=e.activeIndex!==null?e.members[e.activeIndex]:null,s=e.activeIndex===t;if(Yt(this.ctx,-1),e.members.splice(t,1),!s&&n){const a=e.members.indexOf(n);a>=0&&Yt(this.ctx,a)}}renderCritter(){const t=this.ctx.world.get(this.ctx.player,N),e=Hn(this.ctx.world.get(this.ctx.player,j));if(t.members.length===0&&t.collected.length===0){this.feedEl.innerHTML=`<div class="wn-empty">
        <div class="wn-empty-emo">👽</div>
        <div>You're not following anyone on ${_} yet.</div>
        <div class="wn-empty-sub">Recruit aliens in the field (Shift+E) to have them follow you.</div>
      </div>`;return}const n=t.members.length>=e,{have:s,total:a}=Rn(this.ctx);let o=`<div class="wn-feed-sec">Followed ${s}/${a} species${s>=a?" — the whole planet knows you 🏆":""}</div>`;o+=`<div class="wn-feed-sec">Party · ${t.members.length}/${e}</div>`,o+=t.members.map((r,l)=>this.postHtml(r,l,l===t.activeIndex)).join("")||'<div class="wn-empty-sub" style="padding:6px 2px">No one in your party — bring someone out from the collection.</div>',t.collected.length>0&&(o+=`<div class="wn-feed-sec">Collection · ${t.collected.length}</div>`,o+=t.collected.map((r,l)=>this.collectedHtml(r,l,n,t.collected.length>1)).join("")),this.feedEl.innerHTML=o}traitPills(t){return t.traits.length?`<div class="wn-traits">${t.traits.map(e=>{const n=li[e];return`<span title="${n.desc}" style="border-color:${n.color};color:${n.color}">${n.name}</span>`}).join("")}</div>`:""}collectedHtml(t,e,n,s){const a=M[t.creatureId],o=a?.name??t.creatureId;return`
      <div class="wn-post wn-post-collected">
        <div class="wn-post-top">
          <div class="wn-avatar" style="background:${a?`#${a.color.toString(16).padStart(6,"0")}`:"#6a7a9a"}">${We(o)}</div>
          <div class="wn-id">
            <div class="wn-handle">@${Ue(o)}</div>
            <div class="wn-pmeta">${o} · Lv ${t.level} · ${a?.faction??"—"}</div>
          </div>
        </div>
        <div class="wn-ptext">${Ye(t.creatureId,{bondLevel:Gt(t.bond).level,benched:!0})}</div>
        ${this.traitPills(t)}
        <div class="wn-pacts">
          <button data-action="toparty" data-index="${e}" data-loc="collected"${n?' disabled title="Party is full"':""}>Bring to party</button>
          <button data-action="synthesize" data-index="${e}" data-loc="collected"${s?"":' disabled title="Need another collected critter"'}>Synthesize</button>
          <button data-action="releasecollected" data-index="${e}" data-loc="collected" class="wn-danger">Release</button>
        </div>
      </div>`}postHtml(t,e,n){const s=M[t.creatureId],a=s?.name??t.creatureId,o=s?`#${s.color.toString(16).padStart(6,"0")}`:"#6a7a9a",r=Gt(t.bond),l=r.max?`♥ Bond ${ci} (max)`:`♥ Bond ${r.level} · ${r.into}/${r.need}`,c=t.loadout.filter(Boolean).length;return`
      <div class="wn-post${n?" live":""}">
        <div class="wn-post-top">
          <div class="wn-avatar" style="background:${o}">${We(a)}</div>
          <div class="wn-id">
            <div class="wn-handle">@${Ue(a)}${n?'<span class="wn-live">● LIVE</span>':""}</div>
            <div class="wn-pmeta">${a} · Lv ${t.level} · ${s?.faction??"—"}</div>
          </div>
        </div>
        <div class="wn-ptext">${Ye(t.creatureId,{bondLevel:r.level,downed:(t.downedTimer??0)>0})}</div>
        ${this.traitPills(t)}
        <div class="wn-pstats">${l} · ${c} ${c===1?"power":"powers"}</div>
        <div class="wn-pacts">
          <button data-action="active" data-index="${e}"${n?" disabled":""}>${n?"● Active":"Bring out"}</button>
          <button data-action="stance" data-index="${e}" class="wn-pill">${oo[t.stance]}</button>
          <button data-action="bench" data-index="${e}">Bench</button>
          <button data-action="release" data-index="${e}" class="wn-danger">Unfollow</button>
        </div>
      </div>`}openMenu(t="home"){this.prepareForOpen?.(),Dt(this.ctx),this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.refreshSpaceBookBadge(),this.refreshSettings(),this.refreshDevTools(),t==="critter"&&this.renderCritter(),this.showScreen(t,!1),this.device.classList.remove("proj"),this.device.offsetWidth,this.device.classList.add("proj"),this.projectionRevision++}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none",this.device.classList.remove("proj")}showScreen(t,e=!0){t==="critter"?(this.renderCritter(),this.markSpaceBookSeen()):this.refreshSpaceBookBadge();for(const n of Object.keys(this.screens))this.screens[n].classList.toggle("active",n===t);this.current=t,this.setHeight(this.screens[t],e),this.projectionRevision++}setHeight(t,e){e?this.holo.style.height=`${t.offsetHeight}px`:(this.holo.style.transition="none",this.holo.style.height=`${t.offsetHeight}px`,this.holo.offsetHeight,this.holo.style.transition="")}injectStyles(){if(T(),document.getElementById("wn-menu-css"))return;const t=document.createElement("style");t.id="wn-menu-css",t.textContent=`
      .wn-menu{position:fixed;inset:0;z-index:33;display:flex;align-items:center;justify-content:center;
        background:transparent;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      /* shifted slightly right of true centre to give the presenter breathing room */
      .wn-device{display:flex;flex-direction:column;align-items:center;position:relative;
        z-index:1;transform:translateX(34px);}
      .wn-device.proj .wn-holo{animation:wn-proj 0.36s cubic-bezier(.2,.7,.2,1),
        wn-holo-glow 3.6s ease-in-out 0.36s infinite;}
      @keyframes wn-proj{0%{opacity:0;transform:translateX(-16px) scaleX(0.65);}
        55%{opacity:1;}65%{opacity:0.65;}100%{opacity:1;transform:none;}}
      /* the frame itself (glass, seamless scanline scroll, breathing glow) is the
         shared .wn-glass holo theme (ui/holo.ts) — the device div carries both
         classes; only projection layout + the height animation live here */
      .wn-holo{width:560px;border-radius:16px;transform-origin:left center;
        text-shadow:0 0 8px rgba(120,220,255,0.3);
        transition:height 0.26s cubic-bezier(.4,0,.2,1);}
      /* Invisible marker for B4B3L's foreground parking position. */
      .wn-beam{position:absolute;left:-64px;top:calc(50% - 36px);width:68px;height:72px;
        pointer-events:none;visibility:hidden;}
      /* Separate from .wn-device so this temporary tooling cannot resize or
         reflow the production app grid or move the B4B3L projection anchor. */
      .wn-dev-panel{position:absolute;left:calc(50% + 350px);top:50%;transform:translateY(-50%);
        width:194px;box-sizing:border-box;padding:13px;border-radius:12px;color:#d6f3ff;
        text-shadow:0 0 8px rgba(120,220,255,.25);}
      .wn-dev-title{display:flex;align-items:center;gap:7px;margin-bottom:11px;color:#9fe3ff;
        font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;}
      .wn-dev-title span{padding:2px 5px;border:1px solid rgba(255,190,85,.5);border-radius:4px;
        color:#ffd58e;background:rgba(92,58,12,.45);}
      .wn-dev-row{display:flex;flex-direction:column;gap:5px;margin-top:9px;font-size:10px;
        color:#8ebbd2;letter-spacing:.04em;}
      .wn-dev-row select{width:100%;padding:7px 8px;border:1px solid rgba(120,220,255,.28);
        border-radius:7px;background:#102d43;color:#dff6ff;font:600 11px ui-sans-serif,system-ui,sans-serif;
        cursor:pointer;outline:none;}
      .wn-dev-row select:focus{border-color:rgba(140,230,255,.72);box-shadow:0 0 10px rgba(80,200,255,.2);}
      .wn-dev-note{margin-top:11px;font-size:9px;line-height:1.35;color:#668fa7;}
      @media(max-width:900px){.wn-dev-panel{left:auto;right:10px;top:auto;bottom:10px;transform:none;width:174px;}}
      .wn-screen{position:absolute;top:0;left:0;right:0;padding:16px 18px 18px;box-sizing:border-box;z-index:1;
        opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity 0.18s ease, transform 0.22s ease;}
      .wn-screen.active{opacity:1;transform:none;pointer-events:auto;}
      .wn-os-bar{display:flex;align-items:center;gap:10px;margin-bottom:14px;}
      .wn-quit{padding:5px 10px;border:1px solid rgba(255,120,140,.38);border-radius:7px;
        background:rgba(76,24,38,.52);color:#ffbdc8;font-size:10px;font-weight:800;letter-spacing:.1em;
        text-transform:uppercase;cursor:pointer;}
      .wn-quit:hover:not(:disabled){background:rgba(112,34,50,.72);border-color:rgba(255,145,160,.72);
        color:#fff;box-shadow:0 0 12px rgba(255,90,120,.18);}
      .wn-quit:disabled{opacity:.64;cursor:wait;}
      .wn-menu-footer{display:flex;justify-content:flex-end;margin-top:14px;padding-top:10px;
        border-top:1px solid rgba(120,220,255,.12);}
      .wn-clock{font-size:11px;color:#7fb8d6;}
      .wn-os-label{font-size:9px;font-weight:900;letter-spacing:.14em;color:rgba(255,212,144,0.75);
        text-shadow:0 0 8px rgba(255,179,71,0.35);cursor:default;}
      .wn-head-spacer{margin-left:auto;}
      .wn-audio-controls{display:flex;align-items:center;gap:7px;flex:none;height:24px;}
      .wn-os-bar .wn-audio-controls{margin-left:auto;}
      .wn-volume{width:104px;height:18px;accent-color:#9fe3ff;cursor:pointer;}
      .wn-settings-screen .wn-volume-row{display:grid;grid-template-columns:minmax(0,1fr) 112px 34px;column-gap:8px;align-items:center;justify-content:normal;}
      .wn-settings-screen .wn-volume-row input{width:112px;justify-self:end;}
      .wn-settings-screen .wn-volume-row output{width:34px;text-align:right;font-variant-numeric:tabular-nums;color:#9fe3ff;}
      .wn-settings-screen .wn-ctrl{max-height:min(68vh,560px);overflow-y:auto;padding-right:6px;}
      .wn-settings-group{margin-top:7px;padding:4px 0 2px;color:#7fb8d6;font-size:9px;font-weight:800;
        letter-spacing:.1em;text-transform:uppercase;}
      .wn-settings-group:first-child{margin-top:0;}
      .wn-settings-screen .wn-range-row{display:grid;grid-template-columns:minmax(0,1fr) 112px 42px;
        column-gap:8px;align-items:center;justify-content:normal;}
      .wn-settings-screen .wn-range-row input{width:112px;height:18px;accent-color:#9fe3ff;cursor:pointer;justify-self:end;}
      .wn-settings-screen .wn-range-row output{width:42px;text-align:right;font-variant-numeric:tabular-nums;color:#9fe3ff;}
      .wn-mute{position:relative;width:24px;height:24px;padding:0;border-radius:7px;border:1px solid rgba(120,220,255,0.3);
        background:rgba(20,50,72,0.6);color:#bfecff;cursor:pointer;line-height:1;flex:none;}
      .wn-mute::before{content:'';position:absolute;left:5px;top:7px;width:14px;height:10px;background:currentColor;
        clip-path:polygon(0 35%,32% 35%,72% 0,72% 100%,32% 65%,0 65%);}
      .wn-mute.muted::after{content:'';position:absolute;left:4px;top:11px;width:17px;height:2px;border-radius:2px;
        background:#ffb3bf;transform:rotate(-45deg);box-shadow:0 0 5px rgba(255,120,140,0.55);}
      .wn-mute:hover{background:rgba(40,90,120,0.8);color:#fff;}
      .wn-x{width:24px;height:24px;border-radius:7px;border:1px solid rgba(120,220,255,0.3);
        background:rgba(20,50,72,0.6);color:#bfecff;font-size:12px;cursor:pointer;line-height:1;}
      .wn-x:hover{background:rgba(40,90,120,0.8);color:#fff;}
      .wn-apps{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;}
      .wn-app{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;
        gap:6px;min-height:78px;padding:12px 6px;border-radius:10px;border:1px solid rgba(120,220,255,0.22);
        background:rgba(40,96,134,0.16);color:#d6f3ff;cursor:pointer;font-size:11px;font-weight:600;}
      .wn-app:hover{background:rgba(64,150,210,0.28);border-color:rgba(120,220,255,0.55);
        box-shadow:0 0 16px rgba(80,200,255,0.25);}
      .wn-badge{position:absolute;top:7px;left:8px;width:9px;height:9px;border-radius:50%;display:none;
        background:#ff4f7a;box-shadow:0 0 0 2px rgba(10,28,44,0.9),0 0 12px rgba(255,79,122,0.9);}
      .wn-app.has-update .wn-badge{display:block;}
      .wn-app-i{font-size:23px;line-height:1;filter:drop-shadow(0 0 6px rgba(120,220,255,0.5));}
      .wn-app kbd{position:absolute;top:5px;right:6px;font:700 8px ui-monospace,monospace;color:#9fe3ff;
        border:1px solid rgba(120,220,255,0.3);border-radius:3px;padding:0 3px;background:rgba(10,30,48,0.5);}
      .wn-sub-head{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
      .wn-sub-title{font-size:12px;font-weight:700;letter-spacing:0.06em;color:#9fe3ff;}
      .wn-back{background:rgba(20,50,72,0.5);border:1px solid rgba(120,220,255,0.28);color:#bfecff;
        font-size:12px;font-weight:600;cursor:pointer;padding:4px 9px;border-radius:7px;}
      .wn-back:hover{background:rgba(40,90,120,0.8);color:#fff;}
      .wn-ctrl{display:flex;flex-direction:column;gap:5px;text-align:left;}
      .wn-ctrl-row{display:flex;justify-content:space-between;font-size:12px;color:#bcdcf0;
        border-bottom:1px solid rgba(120,220,255,0.12);padding-bottom:4px;}
      .wn-ctrl-row b{color:#eafaff;font-weight:600;}
      .wn-feed{display:flex;flex-direction:column;gap:9px;max-height:54vh;overflow-y:auto;}
      .wn-feed-sec{font-size:10px;font-weight:800;letter-spacing:0.09em;text-transform:uppercase;color:#7fb0cc;margin:6px 2px 0;}
      .wn-post{background:rgba(18,44,66,0.55);border:1px solid rgba(120,220,255,0.18);border-radius:13px;padding:11px;}
      .wn-post-collected{opacity:0.9;border-style:dashed;border-color:rgba(120,220,255,0.14);}
      .wn-post.live{border-color:rgba(120,220,255,0.55);box-shadow:0 0 0 1px rgba(120,220,255,0.2);}
      .wn-post-top{display:flex;gap:10px;align-items:center;}
      .wn-avatar{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;
        font-size:12px;font-weight:800;color:#06121c;flex:none;box-shadow:0 0 0 2px #0e2438,0 0 10px rgba(120,220,255,0.3);}
      .wn-handle{font-size:13px;font-weight:700;color:#eafaff;display:flex;align-items:center;gap:7px;}
      .wn-live{font-size:9px;font-weight:800;color:#ff6f8c;letter-spacing:0.04em;text-shadow:0 0 6px rgba(255,90,120,0.6);}
      .wn-pmeta{font-size:10px;color:#7fb0cc;margin-top:1px;text-transform:capitalize;}
      .wn-ptext{font-size:13px;color:#d8eefc;line-height:1.4;margin:8px 2px;}
      .wn-traits{display:flex;flex-wrap:wrap;gap:5px;margin:7px 2px 8px;}
      .wn-traits span{font-size:10px;font-weight:800;border:1px solid rgba(120,220,255,0.26);border-radius:999px;
        padding:2px 6px;background:rgba(8,20,32,0.45);}
      .wn-pstats{font-size:10px;color:#6f9fbc;margin:0 2px 9px;}
      .wn-pacts{display:flex;gap:6px;}
      .wn-pacts button{flex:1;padding:7px 6px;border-radius:8px;border:1px solid rgba(120,220,255,0.26);
        background:rgba(28,64,92,0.7);color:#d6f3ff;font-size:11px;font-weight:600;cursor:pointer;}
      .wn-pacts button:hover:not(:disabled){background:rgba(46,100,140,0.85);}
      .wn-pacts button:disabled{opacity:0.6;cursor:default;color:#9fe3ff;}
      .wn-pacts .wn-pill,.wn-pacts .wn-danger{flex:0 0 auto;}
      .wn-pacts .wn-danger{border-color:rgba(255,120,140,0.3);color:#ffb3bf;}
      .wn-pacts .wn-danger:hover{background:rgba(80,30,40,0.7);}
      .wn-empty{padding:40px 22px;text-align:center;color:#9fc6dc;font-size:13px;}
      .wn-empty-emo{font-size:36px;margin-bottom:10px;}
      .wn-empty-sub{font-size:11px;color:#6f9fbc;margin-top:6px;}
      .wn-menu-trigger{position:fixed;right:12px;bottom:12px;z-index:16;width:38px;height:38px;border-radius:8px;
        border:1px solid rgba(120,220,255,0.3);background:rgba(10,28,44,0.7);color:#9fe3ff;font-size:17px;
        line-height:1;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;
        box-shadow:0 0 12px rgba(70,190,255,0.25);}
      .wn-menu-trigger:hover{background:rgba(24,56,82,0.9);color:#fff;}
    `,document.head.appendChild(t)}}const ro=.34,lo=.14,co=.45,cn=5,po=0,ho=1,xt={up:12,down:13,left:14,right:15};class Rr{constructor(t,e){this.root=t,this.uiOpen=e,window.addEventListener("keydown",this.onKeyDown,!0)}focused=null;held=null;heldFor=0;repeatIn=0;prevA=!1;prevB=!1;update(t){if(!this.uiOpen()){this.blur();return}const e=uo();if(!e)return;const n=fo(e);n!==this.held?(this.held=n,this.heldFor=0,n&&this.step(n)):n&&(this.heldFor+=t,this.heldFor>=ro&&(this.repeatIn-=t,this.repeatIn<=0&&(this.repeatIn=lo,this.step(n))));const s=!!e.buttons[po]?.pressed,a=!!e.buttons[ho]?.pressed;s&&!this.prevA&&this.activate(),a&&!this.prevB&&window.dispatchEvent(new KeyboardEvent("keydown",{code:"Escape",key:"Escape"})),this.prevA=s,this.prevB=a,this.focused&&!this.focused.isConnected&&(this.focused=null)}step(t){if(this.focused?.isConnected&&this.focused instanceof HTMLInputElement&&this.focused.type==="range"&&(t==="left"||t==="right")){const a=this.focused;a.value=String(Number(a.value)+(t==="right"?cn:-cn)),a.dispatchEvent(new Event("input",{bubbles:!0}));return}const e=this.candidates();if(e.length===0)return;const n=document.activeElement instanceof HTMLElement?document.activeElement:null,s=this.focused?.isConnected&&e.includes(this.focused)?this.focused:n&&e.includes(n)?n:null;this.setFocus(s?mo(s,e,t):pn(e))}activate(){const t=this.candidates();if(t.length===0)return;const e=document.activeElement instanceof HTMLElement?document.activeElement:null,n=this.focused?.isConnected&&t.includes(this.focused)?this.focused:e&&t.includes(e)?e:pn(t);this.setFocus(n),n.click()}candidates(){const t=this.root.querySelectorAll('button, input[type="range"], .wn-cell:not(.empty)'),e=[];for(const n of t){if(n instanceof HTMLButtonElement&&n.disabled)continue;const s=n.getBoundingClientRect();if(s.width<2||s.height<2||getComputedStyle(n).pointerEvents==="none"||typeof n.checkVisibility=="function"&&!n.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}))continue;const a=document.elementFromPoint(s.left+s.width/2,s.top+s.height/2);a&&a!==n&&!n.contains(a)&&!a.contains(n)||e.push(n)}return e}setFocus(t){!t||t===this.focused||(this.focused?.classList.remove("wn-gamepad-focus"),this.focused=t,t.classList.add("wn-gamepad-focus"),t.focus({preventScroll:!0}),t.scrollIntoView({block:"nearest",inline:"nearest"}))}blur(){this.focused&&(this.focused.classList.remove("wn-gamepad-focus"),this.focused.blur(),this.focused=null,this.held=null)}onKeyDown=t=>{if(!this.uiOpen())return;const e=t.target;if(e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLInputElement&&e.type!=="range"||e instanceof HTMLElement&&e.isContentEditable)return;const n=t.code==="KeyW"||t.code==="ArrowUp"?"up":t.code==="KeyS"||t.code==="ArrowDown"?"down":t.code==="KeyA"||t.code==="ArrowLeft"?"left":t.code==="KeyD"||t.code==="ArrowRight"?"right":null;if(n){t.preventDefault(),t.stopImmediatePropagation(),this.step(n);return}(t.code==="Enter"||t.code==="NumpadEnter")&&!t.repeat&&(t.preventDefault(),t.stopImmediatePropagation(),this.activate())}}function uo(){if(typeof navigator>"u"||!navigator.getGamepads)return null;for(const i of navigator.getGamepads())if(i&&i.connected)return i;return null}function fo(i){if(i.buttons[xt.up]?.pressed)return"up";if(i.buttons[xt.down]?.pressed)return"down";if(i.buttons[xt.left]?.pressed)return"left";if(i.buttons[xt.right]?.pressed)return"right";const t=i.axes[0]??0,e=i.axes[1]??0;return Math.max(Math.abs(t),Math.abs(e))<co?null:Math.abs(t)>Math.abs(e)?t>0?"right":"left":e>0?"down":"up"}function ve(i){const t=i.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}function mo(i,t,e){const n=ve(i),s=e==="left"?-1:e==="right"?1:0,a=e==="up"?-1:e==="down"?1:0;let o=null,r=1/0;for(const l of t){if(l===i)continue;const c=ve(l),d=c.x-n.x,p=c.y-n.y,h=d*s+p*a;if(h<4)continue;const f=Math.abs(d*a)+Math.abs(p*s),u=h+f*2.2;u<r&&(r=u,o=l)}return o??i}function dn(i){let t=i[0],e=1/0;for(const n of i){const s=ve(n),a=s.y*3+s.x;a<e&&(e=a,t=n)}return t}function pn(i){const t=i.filter(n=>n.matches(".wn-act:not(.walk), .wn-choice-opt, .wn-end-opt, .wn-start-primary, .wn-app, [data-breach], [data-chat], [data-choice]"));if(t.length>0)return dn(t);const e=i.filter(n=>!n.matches("[data-exit], [data-close], [data-back], [data-resume], .wn-close-btn, .wn-x, .wn-back"));return dn(e.length>0?e:i)}const go=2.4,hn=2.6,bo=.55,wo=9.8,xo=.72,yt=2.75,un=2.35;function ne(i){return go-ts*i*xo}const yo=1.55,fn=new S(-.65,.85,1.2),vo=new S(.15,.7,1.2),at="TERRAFORMITY",hs=7,ko=3,Eo={A:["010","101","111","101","101"],E:["111","100","110","100","111"],F:["111","100","110","100","100"],I:["111","010","010","010","111"],M:["101","111","111","101","101"],O:["111","101","101","101","111"],R:["110","101","110","101","101"],T:["111","010","010","010","010"],Y:["101","101","010","010","010"]},Mo=16757575,vt=Array(hs).fill(Mo),mn=new zt,se=new S,ie=new ue,gn=new fe,So=new S(1,1,1);function Co(i){const t=[[.065,.065,.065],[.035,.08,.035],[.035,.075,.035],[.045,.07,.045],[.09,.025,.025],[.045,.045,.045],[.06,.06,.06]];return new jt(...t[i])}function To(i){const t=new St(16777215),e=[i.clone().multiplyScalar(.72),i.clone().multiplyScalar(.46),i.clone().lerp(t,.3),i.clone().multiplyScalar(.34),i.clone(),i.clone().multiplyScalar(.24)],n=[.9,.65,1.1,.5,1.3,.4];return e.map((s,a)=>new Fi({color:s,emissive:s,emissiveIntensity:n[a],roughness:.3,metalness:.04,vertexColors:!0}))}function $o(){const i=new At,t=[],e=[];i.name=`voxel-title-${at.toLowerCase()}`;const n=.155,s=n*4,a=vt.map(()=>[]);for(let d=0;d<at.length;d++){const p=Eo[at[d]],h=d%vt.length;for(let f=0;f<p.length;f++)for(let u=0;u<p[f].length;u++)p[f][u]==="1"&&a[h].push({x:d*s+u*n,y:-f*n,highlight:f===0||u===0,seed:((d+1)*.127+(f+1)*.213+(u+1)*.317)%1})}const o=new zt,r=new St(16777215),l=new St(12105912);a.forEach((d,p)=>{if(d.length===0)return;const h=new St(vt[p]),f=new jt(n*.82,n*.82,n*1.65),u=new he(f,To(h),d.length);u.name=`terraformity-title-element-${p}`,d.forEach((m,g)=>{o.makeTranslation(m.x,m.y,0),u.setMatrixAt(g,o),u.setColorAt(g,m.highlight?r:l)}),u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),i.add(u),t.push({mesh:u,blocks:d})});for(let d=0;d<at.length;d++){const p=d%hs;for(let h=0;h<ko;h++){const f=vt[p],u=new V({color:f,transparent:!0,opacity:.9,depthWrite:!1,blending:Di,toneMapped:!1}),m=new ht(Co(p),u),g=d*s+(h-1)*n*.9+n,x=-n*(.65+h*1.65),b=((d+1)*.173+(h+1)*.317)%1;m.name=`terraformity-title-particle-${p}`,m.position.set(g,x,.13+h*.012),i.add(m),e.push({mesh:m,elementIndex:p,homeX:g,homeY:x,seed:b})}}const c=(at.length-1)*s+n*3;return i.position.set(-c/2+.72,4.92,-.25),i.rotation.x=-.04,{object:i,layers:t,particles:e}}function W(i){return i-Math.floor(i)}function Lo(i,t,e){for(const n of i.layers)n.blocks.forEach((s,a)=>{if(e)se.set(s.x,s.y,0),ie.identity();else{const o=s.seed*Math.PI*2,r=.78+s.seed*.44;se.set(s.x+Math.sin(t*.43+o)*.011*r,s.y+Math.sin(t*.57+o*1.7)*.017*r,Math.sin(t*.39+o*.8)*.027*r),gn.set(Math.sin(t*.31+o)*.014,Math.sin(t*.37+o*1.3)*.02,Math.sin(t*.29+o*.7)*.012),ie.setFromEuler(gn)}mn.compose(se,ie,So),n.mesh.setMatrixAt(a,mn)}),n.mesh.instanceMatrix.needsUpdate=!0}function Io(i,t,e){for(const n of i.particles){const{mesh:s,elementIndex:a,homeX:o,homeY:r,seed:l}=n;if(s.visible=!0,s.material.opacity=.9,s.position.z=.13,s.rotation.set(0,0,0),s.scale.setScalar(1),e){s.position.set(o,r,.13),s.scale.setScalar(.68),s.material.opacity=.58;continue}if(a===0){const c=W(t*.24+l),d=l>.5?1:-1;s.position.set(o+d*c*.22,r+Math.sin(c*Math.PI)*.2,.13+c*.08),s.rotation.set(c*4.2,c*2.6,c*3.4),s.material.opacity=Math.sin(c*Math.PI)*.85}else if(a===1){const c=W(t*.43+l);s.position.set(o+Math.sin(t*5+l*8)*.045,r+c*.58,.14),s.scale.setScalar(.65+Math.sin(t*13+l*9)*.24),s.material.opacity=Math.sin(c*Math.PI)*.95}else if(a===2){const c=W(t*.28+l);s.position.set(o+Math.sin(t*1.7+l*11)*.09,r-c*.48,.14),s.rotation.z=t*(l>.5?1.4:-1.4)+l*4,s.material.opacity=Math.sin(c*Math.PI)*.82}else if(a===3){const c=W(t*.34+l);s.position.set(o+Math.sin(t*2.2+l*7)*.035,r-c*.42,.15),s.scale.set(.82+c*.28,1.25-c*.5,.82+c*.28),s.material.opacity=Math.sin(c*Math.PI)*.9}else if(a===4){const c=Math.floor((t+l)*15),d=W(Math.sin(c*91.17+l*13)*43758.5453)-.5,p=W(Math.sin(c*53.91+l*29)*24634.6345)-.5;s.position.set(o+d*.4,r+p*.32,.18),s.rotation.z=c%2===0?0:Math.PI/2,s.visible=c%4!==0,s.scale.setScalar(c%3===0?1.35:.8)}else if(a===5){const c=t*1.55+l*Math.PI*2;s.position.set(o+Math.cos(c)*.2,r+Math.sin(c)*.14,.18),s.rotation.set(c*.5,c,c*.75),s.scale.setScalar(.72+Math.sin(c*2.2)*.22),s.material.opacity=.65+Math.sin(c*2.2)*.25}else{const c=W(t*.2+l);s.position.set(o+Math.sin(t*1.2+l*9)*.13*(1-c),r-c*.34,.2-c*.25),s.rotation.set(c*2.8,c*4.1,c*1.7),s.scale.setScalar(1.05-c*.72),s.material.opacity=Math.sin(c*Math.PI)*.72}}}function zo(){let i=1369960765;return()=>(i=Math.imul(i^i>>>15,1|i),i^=i+Math.imul(i^i>>>7,61|i),((i^i>>>14)>>>0)/4294967296)}function Ao(i){const t=new At,e=new jt(1,1,.5),n=new V({color:i,depthWrite:!1}),s=new ht(e,n);s.scale.set(.16,.16,.11),t.add(s);for(let a=1;a<=5;a++){const o=1-a/6,r=new V({color:i,transparent:!0,opacity:.08+o*.48,depthWrite:!1}),l=new ht(e,r),c=.045+o*.07;l.position.x=-a*.15,l.scale.set(.12+o*.13,c,.07),t.add(l)}return t.visible=!1,t}function Po(){const i=new At;i.name="start-screen-voxel-night-sky";const t=zo(),e=new jt(1,1,.42),n=[11131391,15398911,16766618],s=[],a=[];for(let u=0;u<n.length;u++){const g=new V({color:n[u],transparent:!0,opacity:.62+u*.1});a.push(g);const x=new he(e,g,38);x.name=`voxel-stars-${u}`;const b=new zt,v=new S,L=new ue,A=new S;for(let q=0;q<38;q++){const Wt=.045+t()*(u===1?.13:.09);v.set(-13+t()*26,-1.2+t()*10.5,-4.5-t()*9),L.setFromEuler(new fe(t()*.35,t()*.35,t()*Math.PI)),A.set(Wt*(.75+t()*.65),Wt,Wt),b.compose(v,L,A),x.setMatrixAt(q,b)}x.instanceMatrix.needsUpdate=!0,s.push(x),i.add(x)}const o=new V({color:4216488,transparent:!0,opacity:.075,depthWrite:!1}),r=new he(e,o,42);r.name="voxel-nebula";const l=new zt;for(let u=0;u<42;u++){const m=t()*Math.PI*2,g=Math.pow(t(),.65)*5.8,x=new S(1.8+Math.cos(m)*g*1.55,4.1+Math.sin(m)*g*.42,-8-t()*3),b=new ue().setFromEuler(new fe(0,0,(t()-.5)*.5)),v=new S(.35+t()*1.2,.18+t()*.5,.2);l.compose(x,b,v),r.setMatrixAt(u,l)}r.instanceMatrix.needsUpdate=!0,i.add(r);const c=[7163079,2330531],d=[],p=[];for(let u=0;u<c.length;u++){const m=new V({color:c[u],transparent:!0,opacity:u===0?.055:.045,depthWrite:!1}),g=new At;g.name=`voxel-nebula-filament-${u}`;for(let x=0;x<28;x++){const b=new ht(e,m),v=-11.5+x*.86,L=(u===0?5.4:2.2)+Math.sin(x*(u===0?.46:.38)+u*1.8)*(u===0?.55:.38);b.position.set(v,L,-9.5-u*1.2),b.rotation.z=Math.cos(x*.42+u)*.2,b.scale.set(.7+t()*.45,.08+t()*.12,.18),g.add(b)}p.push(m),d.push(g),i.add(g)}const f=[{start:[-10,7.35,-4.8],delta:[19,-2.1,.2],at:9,color:13168127}].map((u,m)=>{const g=Ao(u.color);return g.name=`voxel-meteor-${m}`,g.userData.start=new S(...u.start),g.userData.delta=new S(...u.delta),g.userData.startAt=u.at,g.rotation.z=Math.atan2(u.delta[1],u.delta[0]),i.add(g),g});return{object:i,starLayers:s,starMaterials:a,nebula:r,nebulaMaterial:o,nebulaFilaments:d,filamentMaterials:p,meteors:f}}class Bo{canvas;renderer=null;scene=new Ie;camera=new ze(30,1,.1,60);character=Ln();nightSky=Po();title=$o();b4b3l=di();b4b3lHome=fn.clone();skyClock=0;reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;raf=0;last=0;disposed=!1;constructor(){this.canvas=document.createElement("canvas"),this.canvas.className="wn-start-scene",this.canvas.setAttribute("aria-hidden","true"),this.scene.add(this.nightSky.object),this.scene.add(this.title.object),this.scene.add(new Zn(9161471,462872,1.25));const t=new tt(16769720,2.4);t.position.set(-3,7,7),this.scene.add(t);const e=new tt(5560831,3.2);e.position.set(5,4,-4),this.scene.add(e),this.character.object.position.set(-2.15,ne(yt),.6),this.character.object.rotation.y=.52,this.character.object.scale.setScalar(yt),this.scene.add(this.character.object),this.camera.position.set(0,bo,wo),this.camera.lookAt(0,hn,0),this.b4b3l.object.scale.setScalar(yo),this.b4b3l.object.rotation.set(.03,-.18,0),this.b4b3l.object.position.copy(this.b4b3lHome),this.scene.add(this.b4b3l.object)}show(t){this.disposed||(this.renderer||(this.renderer=new Ae({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Pe,this.renderer.toneMapping=_i,this.renderer.toneMappingExposure=1.08,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5))),this.applySaveLook(t),this.canvas.style.display="block",this.resize(),this.last=performance.now(),this.raf||(this.raf=requestAnimationFrame(this.loop)))}hide(){cancelAnimationFrame(this.raf),this.raf=0,this.canvas.style.display="none"}resize(){if(!this.renderer)return;const t=Math.max(1,this.canvas.clientWidth),e=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e;const n=t/e<.9;this.camera.fov=n?36:28,this.b4b3lHome.copy(n?vo:fn),this.title.object.position.set(n?-1.42:-3.18,n?4.42:4.92,-.25),this.title.object.scale.setScalar(n?.38:1),n?(this.character.object.position.set(-1.05,ne(un),.6),this.character.object.scale.setScalar(un)):(this.character.object.position.set(-2.15,ne(yt),.6),this.character.object.scale.setScalar(yt)),this.camera.updateProjectionMatrix()}dispose(){this.disposed||(this.disposed=!0,this.hide(),Z(this.character.object),Z(this.b4b3l.object),Z(this.nightSky.object),Z(this.title.object),this.renderer?.dispose(),this.renderer=null)}applySaveLook(t){const e=t?.player.equipment,n=e?.weapon??e?.weapon2,s=e?.suit?.baseItemId,a=s?I.get(s)?.skinId??null:null;this.character.setSuit(a),this.character.setJetpack(ns(e?.jetpack)),this.character.setWeapon(es(n),ss(n))}renderFrame(t){if(!this.renderer)return;this.character.update(t,In),this.character.poseShowboat(this.skyClock),this.b4b3l.update(t);const e=performance.now();this.updateNightSky(t),this.title.object.rotation.y=Math.sin(this.skyClock*.42)*.018,Lo(this.title,this.skyClock,this.reducedMotion),Io(this.title,this.skyClock,this.reducedMotion),this.camera.position.x=Math.sin(e*22e-5)*.09,this.camera.lookAt(0,hn,0);const n=e*48e-5;this.b4b3l.object.position.set(this.b4b3lHome.x+Math.cos(n)*.14,this.b4b3lHome.y+Math.sin(n*1.3)*.07,this.b4b3lHome.z+Math.sin(n)*.1),this.renderer.render(this.scene,this.camera)}updateNightSky(t){this.skyClock+=t;const e=this.skyClock,n=this.reducedMotion?.18:1;this.nightSky.starLayers.forEach((r,l)=>{const c=l+1;r.position.x=Math.sin(e*(.035+l*.018)+l*1.7)*.13*c*n,r.position.y=Math.cos(e*(.026+l*.015)+l)*.055*c*n,r.rotation.z=Math.sin(e*.018+l)*.0035*c*n;const d=.62+l*.1;this.nightSky.starMaterials[l].opacity=d+Math.sin(e*(.9+l*.27)+l*2.1)*.09*n});const s=Math.sin(e*.22);this.nightSky.nebula.position.x=Math.sin(e*.055)*.28*n,this.nightSky.nebula.position.y=Math.cos(e*.04)*.1*n,this.nightSky.nebula.scale.set(1+s*.025,1-s*.018,1),this.nightSky.nebulaMaterial.opacity=.075+s*.018*n,this.nightSky.nebulaFilaments.forEach((r,l)=>{r.position.x=Math.sin(e*(.025+l*.008)+l*2.4)*.42*n,r.position.y=Math.cos(e*(.02+l*.006)+l)*.12*n,r.rotation.z=Math.sin(e*.018+l*1.7)*.012*n;const c=l===0?.055:.045;this.nightSky.filamentMaterials[l].opacity=c+Math.sin(e*.16+l*2.1)*.016*n});const a=26,o=1.25;for(const r of this.nightSky.meteors){if(this.reducedMotion){r.visible=!1;continue}const l=(e-Number(r.userData.startAt)+a)%a;if(r.visible=l<o,!r.visible)continue;const c=l/o,d=r.userData.start,p=r.userData.delta;r.position.copy(d).addScaledVector(p,c);const h=.9+Math.sin(c*Math.PI)*.28;r.scale.setScalar(h)}}loop=t=>{if(!this.renderer)return;const e=Math.min(.05,Math.max(0,(t-this.last)/1e3));this.last=t,this.renderFrame(e),this.raf=requestAnimationFrame(this.loop)}}const Ro="./intro-placeholder.mp4",jo=[{id:"firstPerson",name:"FIRST PERSON",detail:"IMMERSIVE"},{id:"action",name:"THIRD PERSON",detail:"OVER SHOULDER"},{id:"strategy",name:"STRATEGY",detail:"ISOMETRIC"}];class jr{constructor(t,e,n){this.root=t,this.ctx=e,this.deps=n,this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-start",this.panel.style.display="none",this.root.appendChild(this.panel),this.panel.appendChild(this.scene.canvas),this.panel.addEventListener("click",this.onClick),this.panel.addEventListener("ended",this.onVideoEnded,!0),this.panel.addEventListener("error",this.onVideoEnded,!0),window.addEventListener("resize",()=>{this.isOpen()&&this.scene.resize()})}panel;selected=y.lastDifficulty;selectedView=y.lastViewMode;hasSave=!1;busy=!1;mode="menu";scene=new Bo;isOpen(){return this.panel.style.display!=="none"}async open(){this.ctx.paused=!0,this.mode="menu",this.busy=!0,this.panel.style.display="flex",this.render(),this.scene.show(null);const t=await this.deps.loadSave();this.hasSave=t!==null,this.busy=!1,this.render(),this.scene.show(t)}close(){this.panel.style.display="none",this.scene.dispose(),this.ctx.paused=!1}render(){if(this.mode==="intro"){this.scene.hide(),this.panel.querySelector(".wn-start-box")?.remove(),this.panel.querySelector(".wn-start-video-frame")?.remove(),this.panel.insertAdjacentHTML("beforeend",`
        <div class="wn-start-video-frame">
          <video class="wn-start-video" src="${Ro}" autoplay playsinline muted></video>
          <button class="wn-start-skip" data-skip type="button">Skip</button>
        </div>`),this.panel.querySelector(".wn-start-video")?.play().catch(()=>this.finishNewGame());return}const t=pi.map(n=>{const s=hi[n];return`
        <button class="wn-start-diff${n===this.selected?" on":""}" data-diff="${n}" type="button">
          <span>${s.name}</span>
        </button>`}).join(""),e=jo.map(({id:n,name:s,detail:a})=>{const o=n===this.selectedView;return`
        <button class="wn-start-view${o?" on":""}" data-view="${n}" type="button"
          aria-pressed="${o}">
          <strong>${s}</strong><small>${a}</small>
        </button>`}).join("");this.panel.querySelector(".wn-start-video-frame")?.remove(),this.panel.querySelector(".wn-start-box")?.remove(),this.scene.canvas.parentElement!==this.panel&&this.panel.prepend(this.scene.canvas),this.panel.insertAdjacentHTML("beforeend",`
      <div class="wn-start-box">
        <div class="wn-start-actions">
          <button class="wn-start-primary" data-new type="button"${this.busy?" disabled":""}>New Game</button>
          <button class="wn-start-secondary" data-continue type="button"${this.hasSave&&!this.busy?"":" disabled"}>
            ${this.hasSave?"Continue":"No Save Found"}
          </button>
        </div>
        <div class="wn-start-option-label">PLAY STYLE</div>
        <div class="wn-start-views" aria-label="Play style">
          ${e}
        </div>
        <div class="wn-start-option-label">DIFFICULTY</div>
        <div class="wn-start-diffs" aria-label="Difficulty">
          ${t}
        </div>
      </div>`)}onClick=t=>{const e=t.target,n=e.closest("[data-view]");if(n&&!this.busy){this.selectedView=n.dataset.view,this.ctx.cameraRig.setMode(this.selectedView),this.render();return}const s=e.closest("[data-diff]");if(s&&!this.busy){this.selected=s.dataset.diff,y.lastDifficulty=this.selected,Y(),this.render();return}if(e.closest("[data-continue]")&&this.hasSave&&!this.busy){this.continueGame();return}if(e.closest("[data-new]")&&!this.busy){const a=e.closest("[data-new]");if(this.hasSave&&!Ft("newgame",a,"Overwrite save?"))return;this.mode="intro",this.busy=!0,this.render();return}e.closest("[data-skip]")&&this.mode==="intro"&&this.finishNewGame()};onVideoEnded=t=>{!(t.target instanceof HTMLVideoElement)||!t.target.classList.contains("wn-start-video")||this.mode!=="intro"||this.finishNewGame()};async continueGame(){this.busy=!0,this.render(),await this.deps.onContinue(()=>this.close()),this.close()}async finishNewGame(){this.mode==="intro"&&(this.mode="menu",y.lastDifficulty=this.selected,Y(),await this.deps.onNewGame(this.selected,()=>this.close()),this.close())}injectStyles(){if(document.getElementById("wn-start-css"))return;const t=document.createElement("style");t.id="wn-start-css",t.textContent=`
      /* The hero, B4B3L and voxel title live on the full-viewport 3D canvas;
         the complete control set floats cleanly at right with no backing panel. */
      .wn-start{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;color:#eafaff;
        overflow:hidden;background:
          radial-gradient(ellipse at 58% 42%,rgba(30,43,92,.48) 0%,rgba(8,15,39,.2) 38%,transparent 68%),
          linear-gradient(180deg,#020611 0%,#071126 54%,#02050c 100%);}
      .wn-start::after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;
        background:radial-gradient(circle at 32% 43%,transparent 0 20%,rgba(2,7,13,0.1) 54%,rgba(1,3,9,0.7) 100%);}
      .wn-start-scene{position:absolute;inset:0;width:100%;height:100%;display:block;z-index:3;pointer-events:none;}
      .wn-start-box{position:relative;z-index:4;width:min(500px,44vw);
        margin:clamp(90px,18vh,180px) 0 0 40vw;box-sizing:border-box;
        padding:0;text-align:center;text-transform:uppercase;}
      .wn-start-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;}
      .wn-start-actions button,.wn-start-view,.wn-start-diff,.wn-start-skip{border:1px solid rgba(120,220,255,0.3);
        border-radius:8px;color:#eafaff;cursor:pointer;font-weight:800;text-transform:uppercase;}
      .wn-start-actions button{min-height:46px;font-size:14px;}
      .wn-start-primary{background:linear-gradient(180deg,rgba(76,210,150,0.42),rgba(18,74,58,0.86));}
      .wn-start-secondary{background:rgba(40,96,134,0.22);}
      .wn-start-actions button:hover:not(:disabled),.wn-start-view:hover,.wn-start-diff:hover{border-color:rgba(160,238,255,0.78);
        box-shadow:0 0 14px rgba(80,200,255,0.22);}
      .wn-start-actions button:disabled{opacity:0.48;cursor:default;}
      .wn-start-option-label{margin:12px 0 7px;color:rgba(159,227,255,0.68);font-size:9px;
        font-weight:900;letter-spacing:.16em;}
      .wn-start-views{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;}
      .wn-start-view{display:flex;min-height:54px;padding:8px 12px;flex-direction:column;align-items:center;
        justify-content:center;background:rgba(22,56,78,0.58);text-align:center;}
      .wn-start-view strong{font-size:13px;letter-spacing:.08em;}
      .wn-start-view small{margin-top:3px;color:#87abc5;font-size:9px;letter-spacing:.12em;}
      .wn-start-view.on{border-color:#68e7ff;background:rgba(30,111,137,0.42);
        box-shadow:0 0 18px rgba(80,216,255,0.2),inset 0 0 18px rgba(80,216,255,0.08);}
      .wn-start-view.on small{color:#bcefff;}
      .wn-start-diffs{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;}
      .wn-start-diff{display:flex;min-height:58px;padding:11px;align-items:center;
        justify-content:center;background:rgba(22,56,78,0.58);text-align:center;}
      .wn-start-diff span{font-size:13px;}
      .wn-start-diff.on{border-color:#ffd86a;background:rgba(120,90,30,0.36);box-shadow:0 0 18px rgba(255,216,106,0.18);}
      .wn-start-video-frame{position:fixed;inset:0;z-index:4;background:#02060a;}
      .wn-start-video{width:100%;height:100%;object-fit:cover;display:block;}
      .wn-start-skip{position:fixed;right:18px;bottom:18px;padding:10px 14px;background:rgba(6,18,28,0.72);font-size:12px;}
      @media (max-width:640px){
        .wn-start{align-items:flex-end;justify-content:center;}
        .wn-start::after{background:linear-gradient(180deg,transparent 0 28%,rgba(2,6,11,.82) 64%,#02060b 100%);}
        .wn-start-scene{z-index:2;}
        .wn-start-box{width:calc(100vw - 28px);max-height:calc(100vh - 28px);
          overflow:hidden;z-index:4;margin:0 14px 14px;padding:0;}
        .wn-start-actions{grid-template-columns:1fr 1fr;margin-bottom:10px;}
        .wn-start-option-label{margin:8px 0 5px;}
        .wn-start-diffs{grid-template-columns:repeat(3,1fr);}
        .wn-start-diff{min-height:50px;padding:8px 4px;}
        .wn-start-diff span{font-size:11px;}
      }
    `,document.head.appendChild(t)}}const bn=[{biome:"colony",icon:"🏡",title:"Reclaim it for the Colony",verdict:"A Colony World",tagline:"Terraform Earth Junior into a tidy garden-world for your own kind.",epilogue:"You seed the whole planet green and call it home. Within a season there are picket fences, a functioning postal service, and a heated town-hall debate about parking. A few holdout warlords still object — mostly to the parking — but the Colony endures. Congratulations, Castaway: you've reinvented the suburbs, on an alien world, from scratch."},{biome:"wild",icon:"🌿",title:"Return it to the Wilds",verdict:"A World Gone Feral",tagline:"Give Earth Junior back to the native life that was here first.",epilogue:"You let the Wilds swallow everything — cities, ships, the whole squabbling mess. Earth Junior exhales and goes gloriously feral. You keep a den, a pack, and exactly zero meetings. The other factions beam strongly-worded transmissions into the canopy, where the local megafauna promptly eat the antennas."},{biome:"ashland",icon:"🔥",title:"Crown the Korrathi",verdict:"The Iron Swarm Ascendant",tagline:"Hand the planet to the Iron Swarm and their proving-grounds.",epilogue:"You cede Earth Junior to the Korrathi, who immediately terraform it into one enormous, extremely organized gym. Everything is a proving ground now, including the cafeteria. They name you an honorary warbeast and present you with a very heavy commemorative rock. It is the thought that counts, and it is also a rock."},{biome:"marsh",icon:"💠",title:"Anoint the Vsenn",verdict:"The Crystalline Harmony",tagline:"Let the Crystalline Choir tune the whole world to their frequency.",epilogue:"The Vsenn light the planet up like one vast circuit board and finally get to 'harmonize' everything, at length, with footnotes. Earth Junior hums a single perfect chord, forever. It is deeply beautiful, and — after roughly the first week — deeply annoying. You are issued a small crystal that files your feelings for you."},{biome:"steppe",icon:"🔧",title:"Back the Drifters",verdict:"The Drifters' Salvage",tagline:"Give the salvage to the underclass who kept the lights on.",epilogue:"You hand Earth Junior to the Drifters — the deserters, refugees and odd-jobbers who never wanted a war anyway. They jury-rig the whole planet into a glorious junkyard co-op where everything is half-broken and somehow still works. Rent is cheap. Nobody salutes. Honestly? It might be the best one."}];class qr{constructor(t,e,n){this.root=t,this.ctx=e,this.deps=n,this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-end",this.panel.style.display="none",this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick)}panel;open=!1;isOpen(){return this.open}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.renderChoices()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}renderChoices(){this.panel.innerHTML=`
      <div class="wn-end-card wn-end-choose">
        <div class="wn-end-eyebrow">◈ THE NEXUS CORE</div>
        <h1 class="wn-end-title">Who inherits Earth Junior?</h1>
        <p class="wn-end-lede">The Core answers to one will now, and it will reshape the whole
          world to match. Whatever you choose is permanent — and everyone who wanted something
          else becomes tomorrow's problem. Choose well. Or don't; it's your planet.</p>
        <div class="wn-end-grid">
          ${bn.map(t=>`
            <button class="wn-end-opt" data-biome="${t.biome}">
              <span class="wn-end-ico">${t.icon}</span>
              <span class="wn-end-opt-title">${t.title}</span>
              <span class="wn-end-opt-tag">${t.tagline}</span>
            </button>`).join("")}
        </div>
      </div>`}renderEpilogue(t){this.panel.innerHTML=`
      <div class="wn-end-card wn-end-epi">
        <div class="wn-end-eyebrow">◈ THE FATE OF EARTH JUNIOR</div>
        <div class="wn-end-epi-ico">${t.icon}</div>
        <h1 class="wn-end-title">${t.verdict}</h1>
        <p class="wn-end-epi-text">${t.epilogue}</p>
        <div class="wn-end-epi-note">The world below has been reterraformed. Your work isn't
          done — it never is — but now it's <em>yours</em>.</div>
        <button class="wn-end-go" data-return>Step outside onto the new Earth Junior →</button>
      </div>`}onClick=t=>{const e=t.target,n=e.closest("[data-biome]");if(n){const s=n.dataset.biome,a=bn.find(o=>o.biome===s);if(!a)return;this.deps.onChoose(s),this.renderEpilogue(a);return}e.closest("[data-return]")&&this.close()};injectStyles(){if(document.getElementById("wn-end-css"))return;const t=document.createElement("style");t.id="wn-end-css",t.textContent=`
      .wn-end{position:fixed;inset:0;z-index:40;display:flex;align-items:center;justify-content:center;
        background:radial-gradient(circle at 50% 40%,rgba(38,14,60,0.9),rgba(4,4,10,0.96));
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;color:#e9dcff;
        animation:wn-end-in 0.5s ease;}
      @keyframes wn-end-in{from{opacity:0;}to{opacity:1;}}
      .wn-end-card{width:min(760px,92vw);max-height:90vh;overflow-y:auto;text-align:center;padding:8px 20px;}
      .wn-end-eyebrow{font-size:12px;font-weight:800;letter-spacing:0.24em;color:#c79bff;
        text-shadow:0 0 12px rgba(170,110,255,0.6);margin-bottom:10px;}
      .wn-end-title{font-size:30px;font-weight:800;margin:0 0 12px;color:#fff;
        text-shadow:0 0 22px rgba(150,90,255,0.5);}
      .wn-end-lede{font-size:14px;line-height:1.55;color:#c8b6e6;max-width:560px;margin:0 auto 22px;}
      .wn-end-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;}
      .wn-end-opt{display:flex;flex-direction:column;align-items:center;gap:7px;padding:18px 14px;cursor:pointer;
        border-radius:14px;border:1px solid rgba(170,120,255,0.3);background:rgba(48,26,74,0.5);
        color:#e9dcff;transition:transform 0.12s ease, box-shadow 0.15s ease, border-color 0.15s ease;}
      .wn-end-opt:hover{transform:translateY(-3px);border-color:rgba(190,140,255,0.85);
        box-shadow:0 8px 28px rgba(140,80,255,0.35),inset 0 0 20px rgba(150,90,255,0.12);}
      .wn-end-ico{font-size:34px;line-height:1;filter:drop-shadow(0 0 10px rgba(180,130,255,0.6));}
      .wn-end-opt-title{font-size:15px;font-weight:700;color:#fff;}
      .wn-end-opt-tag{font-size:12px;line-height:1.4;color:#b7a2da;}
      .wn-end-epi{max-width:600px;margin:0 auto;}
      .wn-end-epi-ico{font-size:56px;line-height:1;margin:6px 0 4px;filter:drop-shadow(0 0 16px rgba(180,130,255,0.7));
        animation:wn-end-pop 0.5s cubic-bezier(.2,.9,.3,1.3);}
      @keyframes wn-end-pop{from{transform:scale(0.4);opacity:0;}to{transform:scale(1);opacity:1;}}
      .wn-end-epi-text{font-size:15px;line-height:1.65;color:#d8c8f2;margin:6px auto 18px;max-width:540px;}
      .wn-end-epi-note{font-size:13px;line-height:1.5;color:#a98fd6;font-style:italic;margin-bottom:22px;}
      .wn-end-epi-note em{color:#e6d5ff;font-style:italic;}
      .wn-end-go{padding:13px 26px;border-radius:11px;cursor:pointer;font-size:15px;font-weight:700;
        border:1px solid rgba(190,140,255,0.6);color:#fff;
        background:linear-gradient(180deg,rgba(120,66,190,0.9),rgba(78,40,130,0.9));
        box-shadow:0 0 24px rgba(140,80,255,0.4);}
      .wn-end-go:hover{background:linear-gradient(180deg,rgba(146,86,220,1),rgba(96,52,158,1));
        box-shadow:0 0 32px rgba(160,100,255,0.6);}
    `,document.head.appendChild(t)}}class Nr{constructor(t,e){this.root=t,this.ctx=e,this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-choice",this.panel.style.display="none",this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick)}panel;open=!1;config=null;isOpen(){return this.open}openPanel(t){this.config=t,this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}render(){this.config&&(this.panel.innerHTML=`
      <div class="wn-choice-card">
        <div class="wn-choice-head">
          <h2>${this.config.prompt}</h2>
          <button data-close>Close</button>
        </div>
        <div class="wn-choice-grid">
          ${this.config.options.map(t=>`
            <button class="wn-choice-opt" data-choice="${t.id}">
              <span class="wn-choice-icon">${t.icon}</span>
              <b>${t.title}</b>
              <span>${t.tagline}</span>
            </button>`).join("")}
        </div>
      </div>`)}onClick=t=>{const e=t.target;if(e.closest("[data-close]")){this.close();return}const n=e.closest("[data-choice]");if(!n||!this.config)return;const s=this.config.options.find(a=>a.id===n.dataset.choice);s&&(this.config.onChoose(s),this.close())};injectStyles(){if(document.getElementById("wn-choice-css"))return;const t=document.createElement("style");t.id="wn-choice-css",t.textContent=`
      .wn-choice{position:fixed;inset:0;z-index:42;display:flex;align-items:center;justify-content:center;
        background:rgba(3,8,14,0.82);pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;color:#eafaff;}
      .wn-choice-card{width:min(720px,92vw);padding:18px;border:1px solid rgba(120,220,255,0.28);
        border-radius:12px;background:rgba(12,26,42,0.94);box-shadow:0 18px 60px rgba(0,0,0,0.45);}
      .wn-choice-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:14px;}
      .wn-choice-head h2{font-size:20px;margin:0;letter-spacing:0;color:#fff;}
      .wn-choice-head button{border:1px solid rgba(120,220,255,0.25);background:rgba(64,150,210,0.18);
        color:#cfe8f7;border-radius:7px;padding:6px 10px;cursor:pointer;}
      .wn-choice-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px;}
      .wn-choice-opt{min-height:132px;display:flex;flex-direction:column;align-items:flex-start;gap:8px;text-align:left;
        padding:14px;border-radius:8px;border:1px solid rgba(120,220,255,0.22);
        background:rgba(28,54,74,0.62);color:#dff6ff;cursor:pointer;}
      .wn-choice-opt:hover{border-color:rgba(255,216,106,0.75);background:rgba(52,74,82,0.8);}
      .wn-choice-icon{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;
        background:rgba(255,216,106,0.18);color:#ffe08a;font-weight:800;}
      .wn-choice-opt b{font-size:14px;color:#fff;}
      .wn-choice-opt span:last-child{font-size:12px;line-height:1.35;color:#a9c8d8;}
    `,document.head.appendChild(t)}}class Hr{constructor(t,e){this.root=t,this.ctx=e,Ht(),Ot(),T(),this.panel=document.createElement("div"),this.panel.className="wn-stash-modal",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-svc-box wn-glass">
        <div class="wn-svc-head"><h2>Stash</h2><span class="wn-stash-count"></span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-svc-cols">
          <div class="wn-svc-col"><h3>Inventory</h3><div class="wn-grid wn-inv-grid"></div></div>
          <div class="wn-svc-col"><h3>Stash</h3><div class="wn-grid wn-stash-grid"></div></div>
        </div>
        <div class="wn-svc-foot">Click an item to move it &middot; <kbd>Esc</kbd> to close</div>
      </div>`,this.root.appendChild(this.panel),this.invEl=this.panel.querySelector(".wn-inv-grid"),this.stashEl=this.panel.querySelector(".wn-stash-grid"),this.headEl=this.panel.querySelector(".wn-stash-count"),this.tip=new Re(this.root),this.panel.addEventListener("click",this.onClick),this.panel.addEventListener("mouseover",this.onOver),this.panel.addEventListener("mouseout",()=>this.tip.hide()),this.panel.addEventListener("mousemove",n=>this.tip.move(n))}panel;invEl;stashEl;headEl;tip;open=!1;isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none",this.tip.hide()}render(){const t=this.ctx.world.get(this.ctx.player,C),e=this.ctx.world.get(this.ctx.player,bt);R(t),this.invEl.innerHTML=wn(t.items,t.capacity,"inv"),this.stashEl.innerHTML=wn(e.items,e.capacity,"stash"),this.headEl.textContent=`${e.items.length} / ${e.capacity}`}onClick=t=>{if(t.target.closest("[data-exit]")){this.close();return}const e=t.target.closest(".wn-cell");if(!e||e.classList.contains("empty"))return;const n=e.dataset.loc,s=e.dataset.key;n==="inv"?this.moveToStash(s):this.moveToInv(s),this.tip.hide()};moveToStash(t){const e=this.ctx.world.get(this.ctx.player,C),n=this.ctx.world.get(this.ctx.player,bt);if(n.items.length>=n.capacity)return;const s=gt(e,t);s&&(n.items.push(s),this.render())}moveToInv(t){const e=this.ctx.world.get(this.ctx.player,C),n=this.ctx.world.get(this.ctx.player,bt);if(!Pt(e))return;const s=n.items.findIndex(a=>a.uid===t);s<0||(ft(e,n.items.splice(s,1)[0]),this.render())}onOver=t=>{const e=t.target.closest(".wn-cell");if(!e||e.classList.contains("empty"))return;const n=this.find(e.dataset.loc,e.dataset.key);n&&this.tip.show(n,t)};find(t,e){return(t==="inv"?this.ctx.world.get(this.ctx.player,C).items:this.ctx.world.get(this.ctx.player,bt).items).find(s=>s?.uid===e)??null}}function wn(i,t,e){let n="";for(let s=0;s<t;s++){const a=i[s]??null;n+=et(a,{loc:e,key:a?.uid??`e${s}`})}return n}const qo={salvaged:1,fieldMod:3,augmented:8,resonant:14,prototype:30,nexusRelic:70},Ne=i=>Math.max(0,Math.min(.6,i));function ke(i,t=0){const n=(4+i.itemLevel*2)*qo[i.rarity]*(1+i.affixes.length*.15)*(1+Ne(t));return Math.max(1,Math.round(n))}function xn(i,t=0){return Math.max(1,Math.round(ke(i)*3*(1-Ne(t))))}const us={salvaged:1,fieldMod:2,augmented:4,resonant:6,prototype:10,nexusRelic:16};function yn(i){return Math.max(1,Math.round((1+i.itemLevel*.4)*us[i.rarity]))}function vn(i,t=0){const e=(6+i.itemLevel*1.5)*(us[i.rarity]/2+1)*(1-Ne(t));return Math.max(1,Math.round(e))}const No=16,Ho=["fieldMod","fieldMod","fieldMod","augmented","augmented","resonant"],Oo=4,kn=[["fieldMod",52],["augmented",27],["resonant",13],["prototype",6.5],["nexusRelic",1.5]];class Or{constructor(t,e){this.root=t,this.ctx=e,Ht(),Ot(),T(),this.panel=document.createElement("div"),this.panel.className="wn-vendor-modal",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-svc-box wn-glass">
        <div class="wn-svc-head"><h2>Vendor</h2><span class="wn-vendor-credits"></span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-svc-cols">
          <div class="wn-svc-col"><h3>For Sale — click to buy</h3><div class="wn-grid wn-stock-grid"></div>
            <h3 style="margin-top:12px">Unlabeled Crates — no refunds</h3>
            <div class="wn-grid wn-gamble-grid"></div>
            <div class="wn-gamble-note"></div></div>
          <div class="wn-svc-col"><h3>Inventory — click to sell</h3><div class="wn-grid wn-inv-grid"></div></div>
        </div>
        <div class="wn-svc-foot">Hover for price &middot; <kbd>Esc</kbd> to close</div>
      </div>`,this.root.appendChild(this.panel),this.stockEl=this.panel.querySelector(".wn-stock-grid"),this.invEl=this.panel.querySelector(".wn-inv-grid"),this.creditsEl=this.panel.querySelector(".wn-vendor-credits"),this.gambleEl=this.panel.querySelector(".wn-gamble-grid"),this.gambleNoteEl=this.panel.querySelector(".wn-gamble-note"),this.injectGambleStyles(),this.tip=new Re(this.root),this.panel.addEventListener("click",this.onClick),this.panel.addEventListener("mouseover",this.onOver),this.panel.addEventListener("mouseout",()=>this.tip.hide()),this.panel.addEventListener("mousemove",n=>this.tip.move(n))}panel;stockEl;invEl;creditsEl;tip;open=!1;stock=[];refresh=0;gambles=[];gambleRng=new rt(lt(10107678,0));lastGamble=null;gambleEl;gambleNoteEl;haggle(){const t=this.ctx.world.get(this.ctx.player,j);return t?Se(t.perks).vendorDiscount:0}isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.rollStock(),this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none",this.tip.hide()}rollStock(){const t=new rt(lt(385309,this.refresh++));this.stock=[];const e=en(this.playerLevel());for(let s=0;s<No;s++){const a=t.pick(Tt),o=Math.max(a.minItemLevel,e+t.int(-3,3));this.stock.push(be(t,a,o,t.pick(Ho)))}this.gambleRng=new rt(lt(10107678,this.refresh));const n=this.playerLevel();this.gambles=[];for(let s=0;s<Oo;s++)this.gambles.push({base:this.gambleRng.pick(Tt),price:45+n*9});this.lastGamble=null}playerLevel(){return this.ctx.world.get(this.ctx.player,j)?.level??1}rollGambleRarity(){let t=0;for(const[,n]of kn)t+=n;let e=this.gambleRng.range(0,t);for(const[n,s]of kn)if(e-=s,e<=0)return n;return"fieldMod"}render(){const t=this.ctx.world.get(this.ctx.player,C);R(t),this.stockEl.innerHTML=this.stock.map(n=>et(n,{loc:"stock",key:n.uid})).join("");let e="";for(let n=0;n<t.capacity;n++){const s=t.items[n]??null;e+=et(s,{loc:"inv",key:s?.uid??`e${n}`})}if(this.invEl.innerHTML=e,this.creditsEl.innerHTML=`⬡ <b>${t.credits}</b> credits`,this.gambleEl.innerHTML=this.gambles.map((n,s)=>`<div class="wn-cell wn-gamble" data-gamble="${s}" title="${n.base.name} of unknown quality — ⬡ ${n.price}. What's in the crate? Money out, crate open, that's the deal.">
            <span>?</span></div>`).join(""),this.lastGamble){const n=st(this.lastGamble.rarity);this.gambleNoteEl.innerHTML=`The crate held: <b style="color:${n.color}">${n.name}</b>${this.lastGamble.identified===!1?" (unidentified)":""}`}else this.gambleNoteEl.textContent=this.gambles.length?"Something rattles inside. Probably an item.":""}onClick=t=>{if(t.target.closest("[data-exit]")){this.close();return}const e=t.target.closest(".wn-cell");!e||e.classList.contains("empty")||(e.dataset.gamble!=null?this.gamble(Number(e.dataset.gamble)):e.dataset.loc==="stock"?this.buy(e.dataset.key):this.sell(e.dataset.key,e))};gamble(t){const e=this.ctx.world.get(this.ctx.player,C),n=this.gambles[t];if(!n||!Pt(e)||e.credits<n.price)return;e.credits-=n.price;const s=this.rollGambleRarity(),a=en(this.playerLevel()),o=Math.max(n.base.minItemLevel,a+this.gambleRng.int(-2,4)),r=be(this.gambleRng,n.base,o,s);ft(e,r),this.lastGamble=r,this.gambles.splice(t,1),this.tip.hide(),this.render()}buy(t){const e=this.ctx.world.get(this.ctx.player,C),n=this.stock.find(a=>a.uid===t);if(!n||!Pt(e))return;const s=xn(n,this.haggle());e.credits<s||(e.credits-=s,ft(e,n),this.stock=this.stock.filter(a=>a.uid!==t),this.tip.hide(),this.render())}sell(t,e){const n=this.ctx.world.get(this.ctx.player,C),s=n.items.find(o=>o?.uid===t);!s||(On.includes(s.rarity)||s.setId||s.uniquePowerId)&&!Ft(`sell:${t}`,e,"Sell?")||(n.credits+=ke(s,this.haggle()),gt(n,t),this.tip.hide(),this.render())}injectGambleStyles(){if(document.getElementById("wn-gamble-css"))return;const t=document.createElement("style");t.id="wn-gamble-css",t.textContent=`
      .wn-cell.wn-gamble{border-color:#c9a23f;box-shadow:inset 0 0 12px #c9a23f33;cursor:pointer;}
      .wn-cell.wn-gamble span{color:#ffd23f;font-weight:800;font-size:18px;text-shadow:0 0 8px rgba(255,210,63,0.6);}
      .wn-gamble-note{margin-top:6px;font-size:11px;color:#9fc6dc;font-style:italic;min-height:15px;}
    `,document.head.appendChild(t)}onOver=t=>{const e=t.target.closest(".wn-cell");if(!e||e.classList.contains("empty")||e.dataset.gamble!=null)return;const n=e.dataset.loc,s=e.dataset.key;if(n==="stock"){const a=this.stock.find(o=>o.uid===s);a&&this.tip.show(a,t,`<div class="wn-tip-foot">Buy &middot; ⬡ ${xn(a,this.haggle())}</div>`)}else{const o=this.ctx.world.get(this.ctx.player,C).items.find(r=>r?.uid===s);o&&this.tip.show(o,t,`<div class="wn-tip-foot">Sell &middot; ⬡ ${ke(o,this.haggle())}</div>`)}}}const _o={identify:"Click an unidentified item to appraise it (free).",salvage:"Click an item to break it down into Nexus Dust.",reforge:"Click an item to reroll its modifiers for Nexus Dust."};class _r{constructor(t,e){this.root=t,this.ctx=e,Ht(),Ot(),T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-art-modal",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-svc-box wn-glass">
        <div class="wn-svc-head"><h2>Artificer</h2><span class="wn-art-dust"></span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-art-tabs">
          <button data-tab="identify">Identify</button>
          <button data-tab="salvage">Salvage</button>
          <button data-tab="reforge">Reforge</button>
        </div>
        <div class="wn-art-hint"></div>
        <div class="wn-grid wn-art-grid"></div>
        <div class="wn-svc-foot"><kbd>Esc</kbd> to close</div>
      </div>`,this.root.appendChild(this.panel),this.gridEl=this.panel.querySelector(".wn-art-grid"),this.dustEl=this.panel.querySelector(".wn-art-dust"),this.hintEl=this.panel.querySelector(".wn-art-hint"),this.tabsEl=this.panel.querySelector(".wn-art-tabs"),this.tip=new Re(this.root),this.panel.addEventListener("click",this.onClick),this.panel.addEventListener("mouseover",this.onOver),this.panel.addEventListener("mouseout",()=>this.tip.hide()),this.panel.addEventListener("mousemove",n=>this.tip.move(n))}panel;gridEl;dustEl;hintEl;tabsEl;tip;open=!1;tab="identify";reforgeSeed=0;isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none",this.tip.hide()}craftDiscount(){const t=this.ctx.world.get(this.ctx.player,j);return t?Se(t.perks).craftDiscount:0}mats(){return this.ctx.world.get(this.ctx.player,_n)}inv(){return this.ctx.world.get(this.ctx.player,C)}render(){this.dustEl.innerHTML=`✦ <b>${this.mats().dust}</b> Nexus Dust`;for(const s of this.tabsEl.querySelectorAll("button"))s.classList.toggle("active",s.dataset.tab===this.tab);const t=ut(this.inv()).filter(H).length;this.hintEl.innerHTML=_o[this.tab]+(this.tab==="identify"&&t>0?` <button class="wn-art-all" data-idall>Identify All (${t})</button>`:"");const e=this.inv();R(e);let n="";for(let s=0;s<e.capacity;s++){const a=e.items[s]??null;n+=et(a,{uid:a?.uid??`e${s}`})}this.gridEl.innerHTML=n}onClick=t=>{if(t.target.closest("[data-exit]")){this.close();return}const e=t.target.closest("[data-tab]");if(e){this.tab=e.dataset.tab,this.tip.hide(),this.render();return}if(t.target.closest("[data-idall]")){for(const a of ut(this.inv()))a.identified=!0;this.render();return}const n=t.target.closest(".wn-cell");if(!n||n.classList.contains("empty"))return;const s=this.inv().items.find(a=>a?.uid===n.dataset.uid);s&&(this.tab==="identify"?this.identify(s):this.tab==="salvage"?this.salvage(s,n):this.reforge(s))};identify(t){H(t)&&(t.identified=!0,this.tip.hide(),this.render())}salvage(t,e){if((On.includes(t.rarity)||t.setId||t.uniquePowerId)&&!Ft(`salvage:${t.uid}`,e,"Salvage?"))return;const s=this.inv();gt(s,t.uid)&&(this.mats().dust+=yn(t),this.tip.hide(),this.render())}reforge(t){if(H(t))return;const e=I.get(t.baseItemId);if(!e||e.slot==="module")return;const n=vn(t,this.craftDiscount());if(this.mats().dust<n)return;const s=st(t.rarity),a=new rt(lt(77552,this.reforgeSeed++));t.affixes=is(a,e,t.itemLevel,a.int(s.affixMin,s.affixMax)),!t.setId&&!t.uniquePowerId&&(t.name=Tn(a,e,t.rarity,t.affixes)),this.mats().dust-=n,this.render()}onOver=t=>{const e=t.target.closest(".wn-cell");if(!e||e.classList.contains("empty"))return;const n=this.inv().items.find(a=>a?.uid===e.dataset.uid);if(!n)return;let s="";this.tab==="salvage"?s=`<div class="wn-tip-foot">Salvage &middot; ✦ ${yn(n)} dust</div>`:this.tab==="reforge"&&(s=H(n)?'<div class="wn-tip-foot">Identify before reforging</div>':`<div class="wn-tip-foot">Reforge &middot; ✦ ${vn(n,this.craftDiscount())} dust</div>`),this.tip.show(n,t,s)};injectStyles(){if(document.getElementById("wn-art-css"))return;const t=document.createElement("style");t.id="wn-art-css",t.textContent=`
      .wn-art-modal{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;
        background:radial-gradient(circle at 50% 58%,rgba(10,30,48,0.8),rgba(3,6,12,0.92));
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-art-dust{font-size:12px;color:#cbb8ff;margin-left:auto;}
      .wn-art-dust b{color:#e3d6ff;}
      .wn-art-tabs{display:flex;gap:6px;}
      .wn-art-tabs button{padding:6px 14px;border-radius:7px;border:1px solid rgba(120,220,255,0.22);
        background:rgba(40,96,134,0.16);color:#9fc6dc;font-size:12px;font-weight:600;cursor:pointer;}
      .wn-art-tabs button:hover{background:rgba(64,150,210,0.24);}
      .wn-art-tabs button.active{border-color:rgba(120,220,255,0.55);background:rgba(60,140,200,0.32);color:#eafaff;}
      .wn-art-hint{font-size:11px;color:#7fb0cc;display:flex;align-items:center;gap:10px;min-height:24px;}
      .wn-art-all{padding:4px 10px;border-radius:6px;border:1px solid rgba(120,220,255,0.45);
        background:linear-gradient(180deg,rgba(46,110,150,0.95),rgba(24,60,90,0.95));color:#eafaff;
        font-size:11px;font-weight:700;cursor:pointer;}
      .wn-art-all:hover{background:linear-gradient(180deg,rgba(60,140,190,0.95),rgba(34,80,116,0.95));}
    `,document.head.appendChild(t)}}class Dr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-quest-modal wn-scrim",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-quest-box wn-glass">
        <div class="wn-phead"><button class="wn-back" data-close>‹ Back</button><h3 style="margin:0">Quests</h3><span class="wn-phint">[J] / Esc</span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-quest-list"></div>
      </div>`,this.root.appendChild(this.panel),this.listEl=this.panel.querySelector(".wn-quest-list"),this.panel.addEventListener("click",this.onClick),window.addEventListener("keydown",this.onKey)}panel;listEl;open=!1;onBack=null;onKey=t=>{t.code==="KeyJ"&&this.toggle()};isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}onClick=t=>{t.target.closest("[data-exit]")?this.close():t.target.closest("[data-close]")&&(this.close(),this.onBack?.())};render(){const t=this.ctx.world.get(this.ctx.player,K),e=t.active.map(o=>this.cardHtml(o)).join(""),n=t.completed.map(o=>$t(o)).filter(o=>!!o).map(o=>`<div class="wn-q-card done"><div class="wn-q-name">✓ ${o.name}</div></div>`).join(""),s=t.active.length===0?Dn(t.completed,[]):void 0,a=s?.giver?`<div class="wn-q-card active">
          <div class="wn-q-act">Available</div>
          <div class="wn-q-name">Talk to ${s.giver.name}</div>
          <div class="wn-q-sum">${s.stage.name} awaits on ${s.storyline.island.name}.</div>
        </div>`:"";this.listEl.innerHTML=(e||a||'<div class="wn-q-empty">No active quests right now.</div>')+(n?`<div class="wn-q-sub">Completed</div>${n}`:"")}cardHtml(t){const e=$t(t.questId);if(!e)return"";const n=e.objectives.map(c=>{const d=Math.min(c.count,t.counters[c.id]??0),p=d>=c.count;return`<div class="wn-q-obj${p?" done":""}">
          <span class="wn-q-check">${p?"✓":"○"}</span>
          <span class="wn-q-desc">${c.desc}</span>
          <span class="wn-q-count">${d}/${c.count}</span>
        </div>`}).join(""),s=e.reward,a=`⬡ ${s.credits??0}${s.dust?` &middot; ✦ ${s.dust}`:""}`,o=e.act?`<div class="wn-q-act">${ui[e.act]}</div>`:"",r=t.readyToTurnIn?Fn(t.questId):void 0,l=r?`<div class="wn-q-return">Return to ${r}</div>`:"";return`
      <div class="wn-q-card active">
        ${o}
        <div class="wn-q-name">${e.name}</div>
        <div class="wn-q-sum">${e.summary}</div>
        ${n}
        ${l}
        <div class="wn-q-reward">Reward: ${a}</div>
      </div>`}injectStyles(){if(document.getElementById("wn-quest-css"))return;const t=document.createElement("style");t.id="wn-quest-css",t.textContent=`
      .wn-quest-modal{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-quest-box{width:440px;padding:18px 22px 20px;border-radius:14px;}
      .wn-quest-box > *{position:relative;z-index:1;}
      .wn-quest-list{display:flex;flex-direction:column;gap:10px;max-height:60vh;overflow-y:auto;}
      .wn-q-empty{font-size:13px;color:#7fb0cc;padding:20px 4px;text-align:center;}
      .wn-q-sub{font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:#7fb0cc;margin:6px 0 -2px;}
      .wn-q-card{background:rgba(18,44,66,0.55);border:1px solid rgba(120,220,255,0.2);border-radius:12px;padding:12px 13px;}
      .wn-q-card.done{opacity:0.7;padding:9px 13px;}
      .wn-q-name{font-size:14px;font-weight:700;color:#eafaff;}
      .wn-q-act{font-size:9px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;
        color:#ffd23f;margin-bottom:3px;text-shadow:0 0 6px rgba(255,210,63,0.35);}
      .wn-q-card.done .wn-q-name{color:#7fe0a8;font-size:13px;}
      .wn-q-sum{font-size:11px;color:#9fc6dc;margin:4px 0 9px;line-height:1.4;}
      .wn-q-obj{display:flex;align-items:center;gap:8px;font-size:12px;color:#cfe8f7;margin:3px 0;}
      .wn-q-obj.done{color:#7fe0a8;}
      .wn-q-check{font-size:12px;width:14px;text-align:center;}
      .wn-q-desc{flex:1;}
      .wn-q-count{font-variant-numeric:tabular-nums;color:#9fe3ff;}
      .wn-q-obj.done .wn-q-count{color:#7fe0a8;}
      .wn-q-return{margin-top:8px;font-size:12px;font-weight:800;color:#ffe08a;}
      .wn-q-reward{margin-top:8px;font-size:11px;color:#ffe08a;}
    `,document.head.appendChild(t)}}class Fr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-map-modal wn-scrim",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-map-box wn-glass">
        <div class="wn-phead"><button class="wn-back" data-close>‹ Back</button><h3 style="margin:0">World Map</h3><span class="wn-phint">Ship Console</span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-map"></div>
        <div class="wn-map-status">Select a destination to travel.</div>
      </div>`,this.root.appendChild(this.panel),this.mapEl=this.panel.querySelector(".wn-map"),this.statusEl=this.panel.querySelector(".wn-map-status"),this.panel.addEventListener("click",this.onClick)}panel;mapEl;statusEl;open=!1;onTravel=null;onBack=null;isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}effectiveKind(t){return t.kind}render(){const t=this.ctx.zone,e=this.ctx.world.get(this.ctx.player,K),n=Wn({completedQuestIds:e?.completed??[],endgameUnlocked:this.ctx.worldAllegiance!==null||!!e?.completed.includes("the_descent"),islands:this.ctx.islands}),s=new Map(n.map(r=>[r.id,r])),a=fi(n).map(([r,l])=>{const c=s.get(r),d=s.get(l);return`<line x1="${c.x}" y1="${c.y}" x2="${d.x}" y2="${d.y}" />`}).join(""),o=n.map(r=>{const l=r.id===t,c=this.effectiveKind(r),d=`wn-node ${c}${l?" active":""}`,p=c==="wild"?`${r.sub} · Lv ${mi(r.id,this.ctx.difficulty)}`:r.sub;return`<button class="${d}" data-node="${r.id}" data-kind="${c}" style="left:${r.x}%;top:${r.y}%">
        <span class="wn-node-dot"></span>
        <span class="wn-node-label"><b>${r.name}</b>${l?" <i>(here)</i>":""}<br><span>${p}</span></span>
      </button>`}).join("");this.mapEl.innerHTML=`
      <svg class="wn-map-edges" viewBox="0 0 100 100" preserveAspectRatio="none">${a}</svg>
      ${o}`,this.statusEl.textContent="Select a destination to travel."}onClick=t=>{const e=t.target;if(e.closest("[data-exit]")){this.close();return}if(e.closest("[data-close]")){this.close(),this.onBack?.();return}const n=e.closest("[data-node]");if(!n)return;const s=n.dataset.node;if(n.dataset.kind==="locked"){this.statusEl.textContent=s==="spire"?"Concord Spire opens once you've cleared the Verge for Haven.":s==="bloom"?"The Last Bloom opens when the Drifter steppe is broken.":"That place lies beyond the Verge — sealed for now.";return}if(s===this.ctx.zone){this.statusEl.textContent="You're already here.";return}this.close(),this.onTravel?.(s)};injectStyles(){if(document.getElementById("wn-map-css"))return;const t=document.createElement("style");t.id="wn-map-css",t.textContent=`
      .wn-map-modal{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-map-box{width:460px;padding:18px 22px 20px;border-radius:14px;}
      .wn-map-box > *{position:relative;z-index:1;}
      .wn-map{position:relative;height:300px;border-radius:12px;overflow:hidden;
        background:radial-gradient(circle at 50% 40%,rgba(40,90,130,0.35),rgba(8,18,32,0.6));
        border:1px solid rgba(120,220,255,0.2);}
      .wn-map-edges{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}
      .wn-map-edges line{stroke:rgba(120,220,255,0.35);stroke-width:0.5;stroke-dasharray:2 1.5;}
      .wn-node{position:absolute;transform:translate(-50%,-50%);display:flex;align-items:center;gap:7px;
        background:none;border:none;cursor:pointer;padding:0;color:#d6f3ff;text-align:left;}
      .wn-node-dot{width:13px;height:13px;border-radius:50%;flex:none;border:2px solid #0e2438;
        box-shadow:0 0 8px rgba(120,220,255,0.5);}
      .wn-node.town .wn-node-dot{background:#7ad0ff;}
      .wn-node.wild .wn-node-dot{background:#7fe0a8;}
      .wn-node.locked{cursor:default;opacity:0.55;}
      .wn-node.locked .wn-node-dot{background:#5a6478;box-shadow:none;}
      .wn-node.active .wn-node-dot{box-shadow:0 0 0 3px rgba(255,220,120,0.5),0 0 12px rgba(255,220,120,0.8);
        animation:wn-node-pulse 1.4s ease-in-out infinite;}
      @keyframes wn-node-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
      .wn-node:hover:not(.locked) .wn-node-dot{box-shadow:0 0 14px rgba(150,235,255,0.9);}
      .wn-node-label{font-size:11px;line-height:1.2;}
      .wn-node-label b{font-size:12px;font-weight:700;color:#eafaff;}
      .wn-node-label i{font-size:9px;color:#ffd86a;font-style:normal;}
      .wn-node-label span{font-size:9px;color:#7fb0cc;}
      .wn-node.locked .wn-node-label b{color:#9fb0c4;}
      .wn-map-status{margin-top:10px;font-size:11px;color:#9fc6dc;min-height:14px;}
    `,document.head.appendChild(t)}}const k=2,fs=10;function ms(i,t=i.zone){return t!=="ship"&&t!=="dungeon"&&t!=="incursion"}function He(i,t=i.zone){if(!ms(i,t))return null;const e=jn(i,t),n=Math.ceil(i.hf.width/k),s=Math.ceil(i.hf.depth/k);return(!e.fog||e.fog.cellSize!==k||e.fog.width!==n||e.fog.depth!==s)&&(e.fog={cellSize:k,width:n,depth:s,explored:[]}),e.fog}function Do(i){return new Set(i?.fog?.explored??[])}function Fo(i,t,e,n=fs){const s=He(i);if(!s)return;const a=new Set(s.explored),o=Math.floor(Ce(i.hf,t)/k),r=Math.floor(Te(i.hf,e)/k),l=Math.ceil(n/k),c=n*n;for(let d=-l;d<=l;d++)for(let p=-l;p<=l;p++){const h=o+p,f=r+d;if(h<0||f<0||h>=s.width||f>=s.depth)continue;const u=(h+.5)*k-i.hf.width/2,m=(f+.5)*k-i.hf.depth/2;if((u-t)*(u-t)+(m-e)*(m-e)>c)continue;const g=Math.min(i.hf.width-1,h*k),x=Math.min(i.hf.depth-1,f*k);i.hf.water?.[Un(i.hf,g,x)]||a.add(f*s.width+h)}s.explored=Array.from(a).sort((d,p)=>d-p)}const En=new WeakMap;function Wo(i,t=fs){const e=i.world.get(i.player,w);if(!e)return;const n=He(i);if(!n)return;const s=Math.floor(Ce(i.hf,e.pos.x)/k),a=Math.floor(Te(i.hf,e.pos.z)/k),o=En.get(n);o&&o.cx===s&&o.cz===a||(En.set(n,{cx:s,cz:a}),Fo(i,e.pos.x,e.pos.z,t))}const $=384;class Wr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-island-map-modal wn-scrim",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-island-map-box wn-glass">
        <div class="wn-phead"><button class="wn-back" data-close>Back</button><h3 class="wn-island-map-title">Island Map</h3><span class="wn-phint">[M] / Esc</span><button class="wn-close-btn" data-exit>X</button></div>
        <canvas class="wn-island-map" width="${$}" height="${$}"></canvas>
        <div class="wn-island-map-legend"><span><i class="q available">!</i> Available</span><span><i class="q progress">?</i> Quest</span><span><i class="q ready">?</i> Turn-in</span><span><i class="q event">!</i> Event</span></div>
        <div class="wn-island-map-status"></div>
      </div>`,this.root.appendChild(this.panel),this.canvas=this.panel.querySelector(".wn-island-map"),this.g=this.canvas.getContext("2d"),this.titleEl=this.panel.querySelector(".wn-island-map-title"),this.statusEl=this.panel.querySelector(".wn-island-map-status"),this.panel.addEventListener("click",this.onClick),window.addEventListener("keydown",this.onKey)}panel;canvas;g;titleEl;statusEl;open=!1;onBack=null;isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}onKey=t=>{t.code==="KeyM"&&this.toggle()};onClick=t=>{const e=t.target;if(e.closest("[data-exit]")){this.close();return}e.closest("[data-close]")&&(this.close(),this.onBack?.())};render(){const t=this.g;if(!t)return;const e=Math.min(2,window.devicePixelRatio||1);if(this.canvas.width=$*e,this.canvas.height=$*e,this.canvas.style.width=`${$}px`,this.canvas.style.height=`${$}px`,t.setTransform(e,0,0,e,0,0),t.clearRect(0,0,$,$),t.fillStyle="#07111f",t.fillRect(0,0,$,$),!ms(this.ctx)){this.titleEl.textContent="Island Map",this.statusEl.textContent="Local map data is available once you are on the island surface.",this.emptyMessage(t,"No island signal");return}Wo(this.ctx);const n=He(this.ctx),s=this.ctx.islands[this.ctx.zone],a=Do(s),o=this.ctx.hf,r=Yn(this.ctx.zone);this.titleEl.textContent=r?r.name:"Island Map";const l=18,c=Math.min(($-l*2)/o.width,($-l*2)/o.depth),d=($-o.width*c)/2,p=($-o.depth*c)/2,h=(m,g)=>({x:d+(m+o.width/2)*c,y:p+(g+o.depth/2)*c}),f=(m,g)=>{if(!n)return!1;const x=Math.floor(Ce(o,m)/k),b=Math.floor(Te(o,g)/k);return a.has(b*n.width+x)};if(t.save(),t.beginPath(),t.rect(d,p,o.width*c,o.depth*c),t.clip(),n){for(let m=0;m<n.depth;m++)for(let g=0;g<n.width;g++){const x=m*n.width+g;if(!a.has(x))continue;const b=Math.min(o.width-1,g*k),v=Math.min(o.depth-1,m*k),L=Un(o,b,v),A=!!o.water?.[L],q=A?"#164766":Uo(Mt[gi(o,b,v)].mapColor);t.fillStyle=q,t.globalAlpha=A?.55:.9,t.fillRect(d+g*k*c,p+m*k*c,Math.ceil(k*c)+.5,Math.ceil(k*c)+.5)}t.globalAlpha=1}t.fillStyle="rgba(3,8,15,0.78)";for(let m=0;m<(n?.depth??0);m++)for(let g=0;g<(n?.width??0);g++)a.has(m*n.width+g)||t.fillRect(d+g*k*c,p+m*k*c,Math.ceil(k*c)+.5,Math.ceil(k*c)+.5);this.drawKnownServices(t,h,f),this.drawQuestMarkers(t,h),this.drawEventMarkers(t,h),this.drawPlayer(t,h),t.restore(),t.strokeStyle="rgba(127,216,255,0.28)",t.lineWidth=1,t.strokeRect(d,p,o.width*c,o.depth*c);const u=n?Math.round(a.size/Math.max(1,n.width*n.depth)*100):0;this.statusEl.textContent=`${u}% charted`}drawKnownServices(t,e,n){const s=(a,o,r,l)=>{if(!n(a,o))return;const c=e(a,o);t.fillStyle=r,t.beginPath(),t.arc(c.x,c.y,l,0,Math.PI*2),t.fill()};for(const a of this.ctx.world.iter($e,w)){const o=this.ctx.world.get(a,w);s(o.pos.x,o.pos.z,"#ffd86a",4)}for(const a of this.ctx.world.iter(pt,w)){const o=this.ctx.world.get(a,pt);if(o.kind==="questgiver"||o.kind==="storynpc")continue;const r=this.ctx.world.get(a,w);s(r.pos.x,r.pos.z,"#8fd0ff",3)}}drawQuestMarkers(t,e){for(const n of this.ctx.world.iter(G,w)){const s=this.ctx.world.get(n,G),a=Le(this.ctx,s.storylineId,s.npcId);if(a==="none")continue;const o=this.ctx.world.get(n,w),r=e(o.pos.x,o.pos.z);this.questGlyph(t,r.x,r.y,a)}for(const n of this.ctx.world.iter(Lt,w)){const s=this.ctx.world.get(n,Lt),a=Gn(this.ctx,s);if(a==="none")continue;const o=this.ctx.world.get(n,w),r=e(o.pos.x,o.pos.z);this.questGlyph(t,r.x,r.y,a)}}drawEventMarkers(t,e){for(const n of this.ctx.world.iter(It,w)){const s=this.ctx.world.get(n,It);if(!s.discovered||s.done)continue;const a=this.ctx.world.get(n,w),o=e(a.pos.x,a.pos.z);t.save(),t.shadowColor="#ffb347",t.shadowBlur=14,t.fillStyle="rgba(30,14,4,0.95)",t.strokeStyle="#ffb347",t.lineWidth=2,t.beginPath(),t.moveTo(o.x,o.y-8),t.lineTo(o.x+8,o.y),t.lineTo(o.x,o.y+8),t.lineTo(o.x-8,o.y),t.closePath(),t.fill(),t.stroke(),t.shadowBlur=0,t.fillStyle="#ffb347",t.font="bold 12px ui-sans-serif,system-ui,sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",o.x,o.y+.5),t.restore()}}drawPlayer(t,e){const n=this.ctx.world.get(this.ctx.player,w);if(!n)return;const s=e(n.pos.x,n.pos.z);t.save(),t.translate(s.x,s.y),t.rotate(Math.PI-n.rotY),t.fillStyle="#eafaff",t.shadowColor="#8fd0ff",t.shadowBlur=10,t.beginPath(),t.moveTo(0,-7),t.lineTo(5,6),t.lineTo(-5,6),t.closePath(),t.fill(),t.restore()}questGlyph(t,e,n,s){const a=s==="available",o=s==="ready",r=a?"#ffdf6a":o?"#b7ff7a":"#7fd8ff";t.save(),t.shadowColor=r,t.shadowBlur=o?18:12,t.fillStyle="rgba(7,18,30,0.95)",t.strokeStyle=r,t.lineWidth=o?2.4:1.6,t.beginPath(),t.arc(e,n,o?9:8,0,Math.PI*2),t.fill(),t.stroke(),t.shadowBlur=0,t.fillStyle=r,t.font="bold 15px ui-sans-serif,system-ui,sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(a?"!":"?",e,n),t.restore()}emptyMessage(t,e){t.fillStyle="#9fc6dc",t.font="600 16px ui-sans-serif,system-ui,sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(e,$/2,$/2)}injectStyles(){if(document.getElementById("wn-island-map-css"))return;const t=document.createElement("style");t.id="wn-island-map-css",t.textContent=`
      .wn-island-map-modal{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-island-map-box{width:460px;padding:18px 22px 20px;border-radius:14px;}
      .wn-island-map-box > *{position:relative;z-index:1;}
      .wn-island-map-title{margin:0;}
      .wn-island-map{display:block;width:${$}px;height:${$}px;margin:0 auto;border-radius:10px;
        border:1px solid rgba(120,220,255,0.24);background:#07111f;box-shadow:inset 0 0 26px rgba(0,0,0,0.45);}
      .wn-island-map-legend{display:flex;gap:14px;margin-top:10px;font-size:10px;color:#9fc6dc;align-items:center;}
      .wn-island-map-legend span{display:flex;gap:5px;align-items:center;}
      .wn-island-map-legend .q{display:inline-grid;place-items:center;width:15px;height:15px;border-radius:999px;
        background:rgba(7,18,30,0.95);font-style:normal;font-weight:900;line-height:1;border:1px solid currentColor;}
      .wn-island-map-legend .available{color:#ffdf6a;}
      .wn-island-map-legend .progress{color:#7fd8ff;}
      .wn-island-map-legend .ready{color:#b7ff7a;}
      .wn-island-map-legend .event{color:#ffb347;border-radius:3px;}
      .wn-island-map-status{margin-top:8px;font-size:11px;color:#9fc6dc;min-height:14px;}
    `,document.head.appendChild(t)}}function Uo(i){return`#${i.toString(16).padStart(6,"0")}`}const Yo={sit:.78,lie:.88},Go=1.15;function Vo(i){return Yo[i]}function Ko(){return Go}class Ur{constructor(t,e,n,s,a,o){this.ctx=e,this.input=n,this.speechVisibleFor=s,this.b4b3lSpeechVisible=a,this.interactionDisabled=o,this.injectStyles(),this.el=document.createElement("div"),this.el.className="wn-interact",this.el.style.display="none",this.el.addEventListener("pointerdown",this.onPointerDown),this.el.addEventListener("keydown",this.onKeyDown),this.nameEl=document.createElement("span"),this.nameEl.className="wn-interact-name",this.plateEl=document.createElement("span"),this.plateEl.className="wn-interact-plate",this.plateEl.setAttribute("role","button"),this.plateEl.tabIndex=0,this.keyEl=document.createElement("kbd"),this.keyEl.textContent="E",this.actionEl=document.createElement("span"),this.plateEl.append(this.keyEl,this.actionEl),this.el.append(this.nameEl,this.plateEl),t.appendChild(this.el),this.b4b3lEl=document.createElement("div"),this.b4b3lEl.className="wn-interact",this.b4b3lEl.style.display="none";const r=document.createElement("span");r.className="wn-interact-name",r.textContent="B4B3L",this.b4b3lPlateEl=document.createElement("span"),this.b4b3lPlateEl.className="wn-interact-plate",this.b4b3lPlateEl.setAttribute("role","button"),this.b4b3lPlateEl.tabIndex=0,this.b4b3lPlateEl.setAttribute("aria-label","Talk to B4B3L");const l=document.createElement("kbd");l.textContent="B";const c=document.createElement("span");c.textContent="Talk",this.b4b3lPlateEl.append(l,c),this.b4b3lEl.append(r,this.b4b3lPlateEl);const d=p=>{p.preventDefault(),p.stopPropagation(),this.input.b4b3lInteract?.()};this.b4b3lEl.addEventListener("pointerdown",p=>{p.button===0&&p.target.closest(".wn-interact-plate")&&d(p)}),this.b4b3lEl.addEventListener("keydown",p=>{(p.code==="Enter"||p.code==="Space")&&d(p)}),t.appendChild(this.b4b3lEl)}el;nameEl;plateEl;keyEl;actionEl;b4b3lEl;b4b3lPlateEl;tmp=new S;clickShift=!1;disabled=!1;update(t,e,n){if(this.ctx.paused){this.el.style.display="none",this.b4b3lEl.style.display="none";return}let s=this.input.eventInteractTarget(),a="",o=2.6;if(s!==null?a=this.ctx.world.get(s,pt)?.label??"Interact":s=this.input.nearestInteractable(),a)o=2.6;else if(s!==null){const m=this.ctx.world.get(s,$e),g=this.ctx.world.get(s,pt);a=m?`Travel — ${m.label}`:g?.label??"",m&&(a=m.label),this.ctx.world.has(s,Ge)&&this.ctx.world.has(this.ctx.player,Ve)&&(a=this.ctx.world.get(this.ctx.player,Ve).kind==="lie"?"Get Up":"Stand Up")}else this.input.shiftDown?(s=this.input.recruitTarget(),a=s!==null&&this.canRecruit(s)?"Recruit":"Socialize",o=2.4):(s=this.input.chatTarget(),a="Chat",o=2.4);this.updateB4B3LPlate(t,e,n);const r=s!==null?this.ctx.world.get(s,w):null;if(s===null||!r){this.el.style.display="none";return}const l=this.interactionDisabled(s),c=l?{action:"Repairs Required",name:"Ship Grounded"}:this.promptText(s,a);this.clickShift=a==="Recruit"||a==="Socialize";const d=this.ctx.world.has(s,pe)||this.ctx.world.has(s,G)||this.ctx.world.has(s,Ke);if(d&&this.speechVisibleFor(s)){this.el.style.display="none";return}const p=this.ctx.world.get(s,Ge);if(p&&(o=Vo(p.kind)),!(d||p?Bt(this.ctx,s,"top",this.tmp,o):Ia(this.ctx,s,this.tmp,Ko()))){this.el.style.display="none";return}if(this.tmp.project(t),this.tmp.z>=1){this.el.style.display="none";return}const f=(this.tmp.x*.5+.5)*e,u=(-this.tmp.y*.5+.5)*n;this.renderPrompt(c,this.questGlowColor(s),l),this.el.style.transform=`translate(-50%,calc(-100% - 8px)) translate(${f}px,${u}px)`,this.el.style.display="flex"}onPointerDown=t=>{this.disabled||t.button===0&&t.target.closest(".wn-interact-plate")&&(t.preventDefault(),t.stopPropagation(),this.input.interactFromPrompt(this.clickShift))};onKeyDown=t=>{this.disabled||t.code!=="Enter"&&t.code!=="Space"||(t.preventDefault(),t.stopPropagation(),this.input.interactFromPrompt(this.clickShift))};renderPrompt(t,e,n){this.disabled=n,this.nameEl.textContent=t.name,this.nameEl.style.display=t.name?"":"none",this.actionEl.textContent=t.action,this.plateEl.setAttribute("aria-label",t.name?`${t.action} ${t.name}`:t.action),this.plateEl.setAttribute("aria-disabled",String(n)),this.plateEl.tabIndex=n?-1:0,this.keyEl.textContent=n?"LOCK":"E",this.plateEl.classList.toggle("wn-interact-plate--disabled",n),this.plateEl.classList.toggle("wn-interact-plate--quest",!n&&!!e),e?this.plateEl.style.setProperty("--wn-interact-glow",e):this.plateEl.style.removeProperty("--wn-interact-glow")}promptText(t,e){const n=this.entityName(t);return n?{action:this.splitLabel(e).action,name:n}:this.splitLabel(e)}entityName(t){const e=this.ctx.world.get(t,G);if(e)return bi[e.storylineId]?.cast.find(a=>a.id===e.npcId)?.name??"";const n=this.ctx.world.get(t,Ke);if(n)return`${n.name}, ${n.role}`;const s=this.ctx.world.get(t,pe);return s?M[s.creatureId]?.name??"":""}canRecruit(t){const e=this.ctx.world.get(t,Me)?.creatureId;if(!e||!M[e]?.archetypeId)return!1;const n=this.ctx.world.get(this.ctx.player,N);return!(n&&[...n.members,...n.collected].some(s=>s.creatureId===e))}updateB4B3LPlate(t,e,n){const s=this.ctx.b4b3l,a=s!=null?this.ctx.world.get(s,w):null,o=Vn(this.ctx),r=o!=="none";if(s==null||!a||!r||this.b4b3lSpeechVisible()){this.b4b3lEl.style.display="none";return}if(!Bt(this.ctx,s,"top",this.tmp,1.9)){this.b4b3lEl.style.display="none";return}if(this.tmp.project(t),this.tmp.z>=1){this.b4b3lEl.style.display="none";return}const l=o==="available"?"#ffdf6a":o==="ready"?"#5be08a":"";this.b4b3lPlateEl.classList.toggle("wn-interact-plate--quest",!!l),l?this.b4b3lPlateEl.style.setProperty("--wn-interact-glow",l):this.b4b3lPlateEl.style.removeProperty("--wn-interact-glow");const c=(this.tmp.x*.5+.5)*e,d=(-this.tmp.y*.5+.5)*n;this.b4b3lEl.style.transform=`translate(-50%,calc(-100% - 8px)) translate(${c}px,${d}px)`,this.b4b3lEl.style.display="flex"}questGlowColor(t){const e=this.ctx.world.get(t,G);if(!e)return"";const n=Le(this.ctx,e.storylineId,e.npcId);return n==="available"?"#ffdf6a":n==="progress"?"#8fd0ff":n==="ready"?"#5be08a":""}splitLabel(t){const[e,n]=t.split(/\s+[—-]\s+/,2);return{action:e||t,name:n??""}}injectStyles(){if(document.getElementById("wn-interact-css"))return;const t=document.createElement("style");t.id="wn-interact-css",t.textContent=`
      .wn-interact{position:fixed;left:0;top:0;z-index:15;white-space:nowrap;
        display:flex;flex-direction:column;align-items:center;gap:5px;pointer-events:none;
        font-family:ui-sans-serif,system-ui,sans-serif;font-size:13px;font-weight:600;
        filter:drop-shadow(0 6px 18px #0008);}
      .wn-interact-name{max-width:260px;overflow:hidden;text-overflow:ellipsis;padding:2px 8px;border-radius:6px;
        color:#eaf7ff;background:rgba(4,10,18,0.55);border:1px solid rgba(120,170,255,0.18);
        font-size:12px;font-weight:800;letter-spacing:0.02em;text-align:center;text-shadow:0 1px 2px #000;}
      .wn-interact-plate{display:flex;align-items:center;gap:8px;padding:7px 13px;border-radius:9px;
        background:rgba(10,16,28,0.82);border:1px solid rgba(120,170,255,0.3);color:#eaf2ff;
        box-shadow:0 6px 22px #0008;pointer-events:auto;cursor:pointer;user-select:none;touch-action:none;}
      .wn-interact-plate:hover:not(.wn-interact-plate--disabled){border-color:rgba(170,225,255,0.68);box-shadow:0 6px 22px #0008,0 0 16px rgba(100,205,255,0.34);}
      .wn-interact-plate--disabled{background:rgba(24,25,29,0.82);border-color:rgba(150,155,165,0.24);
        color:#8d929b;box-shadow:0 5px 16px #0007;pointer-events:none;cursor:not-allowed;filter:saturate(0.25);}
      .wn-interact-plate--disabled kbd{background:rgba(110,115,125,0.12);border-color:rgba(150,155,165,0.2);
        color:#777d87;font-size:9px;letter-spacing:0.04em;}
      .wn-interact-plate--quest{border-color:color-mix(in srgb,var(--wn-interact-glow) 72%,white 8%);
        box-shadow:0 6px 22px #0008,0 0 15px color-mix(in srgb,var(--wn-interact-glow) 62%,transparent);
        animation:wn-interact-quest-pulse 1.25s ease-in-out infinite;}
      @keyframes wn-interact-quest-pulse{
        0%,100%{box-shadow:0 6px 22px #0008,0 0 10px color-mix(in srgb,var(--wn-interact-glow) 42%,transparent);}
        50%{box-shadow:0 6px 22px #0008,0 0 24px color-mix(in srgb,var(--wn-interact-glow) 82%,transparent);}
      }
      .wn-interact kbd{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:19px;
        padding:0 5px;border-radius:4px;background:rgba(140,180,255,0.18);border:1px solid rgba(150,185,255,0.34);
        font-family:inherit;font-size:11px;font-weight:700;line-height:1;color:#cfe0ff;}
    `,document.head.appendChild(t)}}const Mn={brix:{title:"B4B3L ONLINE",sub:"That hovering robot is your translator. Press B to talk to them."},parley:{title:"RECRUIT",sub:"Hold Shift and press E near a recruitable creature to win them over."},mimic:{title:"MIMICRY",sub:"Your suit is recording that enemy move. Witness enough of them, then slot it — press K."},companion:{title:"YOUR COMPANION",sub:"Keys 3–6 command it, Tab swaps who is out. Manage stances in SpaceBook (C)."}},Qo=.5,Xo=4500;class Yr{constructor(t,e){this.ctx=t,this.input=e,t.bus.on("ability.witnessed",()=>this.show("mimic")),t.bus.on("companion.recruited",()=>{this.seen("companion")||window.setTimeout(()=>this.show("companion"),Xo)})}pollT=0;update(t){if(!this.ctx.paused){if(this.hasActiveQuest(wi)&&!this.seen("brix")){this.show("brix");return}this.seen("parley")||!this.hasUnfinishedRecruitObjective()||(this.pollT+=t,!(this.pollT<Qo)&&(this.pollT=0,this.input.recruitTarget()!==null&&this.show("parley")))}}resetForNewGame(){const t=this.log();t&&(t.seen=[]),this.pollT=0}hasActiveQuest(t){return this.ctx.world.get(this.ctx.player,K)?.active.some(e=>e.questId===t)??!1}hasUnfinishedRecruitObjective(){const t=this.ctx.world.get(this.ctx.player,K);return t?t.active.some(e=>$t(e.questId)?.objectives.some(n=>n.kind==="recruit"&&(e.counters[n.id]??0)<n.count)):!1}log(){return this.ctx.world.get(this.ctx.player,xi)}seen(t){return this.log()?.seen.includes(t)??!0}show(t){const e=this.log();!e||e.seen.includes(t)||(e.seen.push(t),this.ctx.bus.emit("world.event",{title:Mn[t].title,subtitle:Mn[t].sub}))}}const Zo=i=>Math.min(8,2.4+i.length*.045);class Gr{constructor(t,e){this.ctx=e,this.injectStyles(),this.el=document.createElement("div"),this.el.className="wn-chat-bubble",this.body=document.createElement("div"),this.body.className="wn-chat-bubble-body",this.nameEl=document.createElement("b"),this.textEl=document.createElement("span"),this.body.append(this.nameEl,this.textEl),this.el.appendChild(this.body),this.el.style.display="none",t.appendChild(this.el)}el;body;nameEl;textEl;tmp=new S;target=null;timer=0;turn=0;typing=null;say(t){const e=this.ctx.world.get(t,pe)?.creatureId;e&&this.sayText(t,M[e]?.name??"Creature",yi(e,this.turn++))}sayText(t,e,n){this.nameEl.textContent=e,this.typing?.cancel();const s=je(e);this.typing=_t(this.textEl,n,{voice:()=>this.ctx.bus.emit("ui.voice",{pitch:s})}),this.body.classList.remove("wn-chat-bubble-body--in"),this.body.offsetHeight,this.body.classList.add("wn-chat-bubble-body--in"),this.target=t,this.timer=Zo(n)}isVisibleFor(t){return this.target===t&&this.timer>0}update(t,e,n,s){if(this.target===null)return;const a=this.ctx.world.get(this.target,w),o=this.ctx.world.get(this.target,z);if(this.timer-=s,!a||this.timer<=0||o&&o.current<=0){this.el.style.display="none",this.target=null,this.typing?.cancel(),this.typing=null;return}if(!Bt(this.ctx,this.target,"top",this.tmp,2))return;if(this.tmp.project(t),this.tmp.z>=1){this.el.style.display="none";return}const r=(this.tmp.x*.5+.5)*e,l=(-this.tmp.y*.5+.5)*n;this.el.style.transform=`translate(-50%,calc(-100% - 8px)) translate(${r}px,${l}px)`,this.el.style.display="block"}injectStyles(){if(document.getElementById("wn-chat-css"))return;const t=document.createElement("style");t.id="wn-chat-css",t.textContent=`
      .wn-chat-bubble{position:fixed;left:0;top:0;z-index:16;max-width:240px;white-space:normal;text-align:center;
        pointer-events:none;}
      .wn-chat-bubble-body{position:relative;padding:8px 13px;border-radius:12px;
        background:linear-gradient(180deg,rgba(34,82,116,0.92),rgba(14,38,60,0.94));
        border:1px solid rgba(120,220,255,0.5);box-shadow:0 0 18px rgba(70,190,255,0.28);
        font:600 12px ui-sans-serif,system-ui;color:#eaf7ff;transform-origin:50% 100%;}
      .wn-chat-bubble-body--in{animation:wn-chat-in 0.2s cubic-bezier(.2,.8,.25,1.2);}
      .wn-chat-bubble b{display:block;color:#9fe3ff;font-size:11px;letter-spacing:0.04em;margin-bottom:2px;}
      .wn-chat-bubble-body::after{content:'';position:absolute;left:50%;bottom:-6px;transform:translateX(-50%);
        border:6px solid transparent;border-top-color:rgba(120,220,255,0.5);border-bottom:0;}
      @keyframes wn-chat-in{from{opacity:0;transform:translateY(8px) scale(0.92);}to{opacity:1;transform:translateY(0) scale(1);}}
    `,document.head.appendChild(t)}}const Sn=280;function Jo(){let i=1369960765;return()=>(i=Math.imul(i^i>>>15,1|i),i^=i+Math.imul(i^i>>>7,61|i),((i^i>>>14)>>>0)/4294967296)}function ae(i,t){for(const[e,n]of Object.entries(t))i.style.setProperty(e,n)}function tr(){const i=document.createElement("div");i.className="wn-loading-sky",i.setAttribute("aria-hidden","true");const t=Jo();[42,38,30].forEach((a,o)=>{const r=document.createElement("span");r.className=`wn-loading-stars wn-loading-stars--${o}`;for(let l=0;l<a;l++){const c=document.createElement("i");c.className=`wn-loading-star${l%13===o*2?" wn-loading-star--bright":""}`;const d=1.5+t()*(o===1?3.8:2.8);ae(c,{"--star-x":`${2+t()*96}%`,"--star-y":`${2+t()*90}%`,"--star-w":`${d*(.72+t()*.9)}px`,"--star-h":`${d}px`,"--star-r":`${-24+t()*48}deg`,"--star-alpha":`${.52+t()*.42}`,"--star-beat":`${2.8+t()*4.8}s`,"--star-delay":`${-t()*7}s`}),r.appendChild(c)}i.appendChild(r)});const n=document.createElement("span");n.className="wn-loading-nebula wn-loading-nebula--cloud";for(let a=0;a<38;a++){const o=t()*Math.PI*2,r=Math.pow(t(),.65),l=document.createElement("i");l.className=`wn-loading-nebula-block wn-loading-nebula-block--${a%3}`,ae(l,{"--nebula-x":`${54+Math.cos(o)*r*37}%`,"--nebula-y":`${39+Math.sin(o)*r*17}%`,"--nebula-w":`${3.5+t()*9}vw`,"--nebula-h":`${.8+t()*3.2}vh`,"--nebula-r":`${-16+t()*32}deg`,"--nebula-alpha":`${.07+t()*.09}`}),n.appendChild(l)}return i.appendChild(n),["violet","cyan"].forEach((a,o)=>{const r=document.createElement("span");r.className=`wn-loading-nebula wn-loading-nebula--filament wn-loading-nebula--${a}`;for(let l=0;l<24;l++){const c=document.createElement("i");c.className="wn-loading-nebula-block";const d=(o===0?25:66)+Math.sin(l*(o===0?.47:.39)+o*1.8)*(o===0?6:4);ae(c,{"--nebula-x":`${-5+l*4.75}%`,"--nebula-y":`${d}%`,"--nebula-w":`${4.6+t()*3.8}vw`,"--nebula-h":`${.55+t()*1.15}vh`,"--nebula-r":`${-10+t()*20}deg`,"--nebula-alpha":`${.065+t()*.065}`}),r.appendChild(c)}i.appendChild(r)}),["primary","secondary"].forEach(a=>{const o=document.createElement("span");o.className=`wn-loading-meteor-track wn-loading-meteor-track--${a}`;const r=document.createElement("span");r.className="wn-loading-meteor";for(let l=0;l<6;l++)r.appendChild(document.createElement("i"));o.appendChild(r),i.appendChild(o)}),i}class Vr{el;status;constructor(t){this.injectStyles(),this.el=document.createElement("div"),this.el.className="wn-zone-transition",this.el.setAttribute("aria-hidden","true"),this.el.innerHTML=`
      <span class="wn-zone-transition-status" role="status">Loading destination</span>
      <span class="wn-voxel-spinner" aria-hidden="true">
        <span class="wn-voxel-cube">
          <i class="wn-voxel-face wn-voxel-front"></i>
          <i class="wn-voxel-face wn-voxel-back"></i>
          <i class="wn-voxel-face wn-voxel-right"></i>
          <i class="wn-voxel-face wn-voxel-left"></i>
          <i class="wn-voxel-face wn-voxel-top"></i>
          <i class="wn-voxel-face wn-voxel-bottom"></i>
        </span>
      </span>`,this.el.prepend(tr()),this.status=this.el.querySelector(".wn-zone-transition-status"),t.appendChild(this.el)}async run(t,e,n="Loading destination"){this.status.textContent=n,this.el.setAttribute("aria-hidden","false"),this.el.offsetHeight,this.el.classList.add("wn-zone-transition--active"),await this.waitForFade(),await this.waitForPaint();try{await t(),await this.waitForPaint(),e?.()}finally{this.el.classList.remove("wn-zone-transition--active"),await this.waitForFade(),this.el.setAttribute("aria-hidden","true")}}waitForPaint(){return new Promise(t=>{let e=!1;const n=()=>{e||(e=!0,window.clearTimeout(s),t())},s=window.setTimeout(n,80);window.requestAnimationFrame(()=>window.requestAnimationFrame(n))})}waitForFade(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches?Promise.resolve():new Promise(t=>{const e=window.setTimeout(t,Sn+50);this.el.addEventListener("transitionend",()=>{window.clearTimeout(e),t()},{once:!0})})}injectStyles(){if(document.getElementById("wn-zone-transition-css"))return;const t=document.createElement("style");t.id="wn-zone-transition-css",t.textContent=`
      .wn-zone-transition {
        position: fixed;
        inset: 0;
        z-index: 70;
        pointer-events: none;
        overflow: hidden;
        background:
          radial-gradient(ellipse at 58% 42%, rgba(30,43,92,.48) 0%, rgba(8,15,39,.2) 38%, transparent 68%),
          linear-gradient(180deg, #020611 0%, #071126 54%, #02050c 100%);
        opacity: 0;
        transition: opacity ${Sn}ms ease-in-out;
      }
      .wn-zone-transition::before,
      .wn-zone-transition::after {
        content: "";
        position: absolute;
        inset: -8%;
        pointer-events: none;
      }
      .wn-zone-transition::before {
        z-index: 0;
        background:
          radial-gradient(ellipse at 68% 38%, rgba(64,86,168,.2), transparent 48%),
          radial-gradient(ellipse at 24% 68%, rgba(35,143,163,.09), transparent 42%);
        animation: wn-loading-aurora 18s ease-in-out infinite alternate;
      }
      .wn-zone-transition::after {
        z-index: 2;
        background: radial-gradient(circle at 32% 43%, transparent 0 20%, rgba(2,7,13,.1) 54%, rgba(1,3,9,.7) 100%);
      }
      .wn-zone-transition--active {
        pointer-events: auto;
        opacity: 1;
      }
      .wn-zone-transition-status {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .wn-loading-sky,
      .wn-loading-stars,
      .wn-loading-nebula {
        position: absolute;
        inset: 0;
        display: block;
        pointer-events: none;
      }
      .wn-loading-sky {
        z-index: 1;
        overflow: hidden;
      }
      .wn-loading-stars {
        will-change: transform, opacity;
      }
      .wn-loading-stars--0 {
        animation: wn-loading-star-drift-far 19s ease-in-out infinite alternate;
      }
      .wn-loading-stars--1 {
        animation: wn-loading-star-drift-mid 15s ease-in-out infinite alternate;
      }
      .wn-loading-stars--2 {
        animation: wn-loading-star-drift-near 12s ease-in-out infinite alternate;
      }
      .wn-loading-star {
        position: absolute;
        left: var(--star-x);
        top: var(--star-y);
        width: var(--star-w);
        height: var(--star-h);
        display: block;
        border-radius: 0;
        background: #a9d9ff;
        opacity: var(--star-alpha);
        transform: rotate(var(--star-r));
        box-shadow: 0 0 5px rgba(169,217,255,.38);
        animation: wn-loading-star-twinkle var(--star-beat) ease-in-out var(--star-delay) infinite alternate;
      }
      .wn-loading-stars--1 .wn-loading-star {
        background: #eaf7ff;
        box-shadow: 0 0 7px rgba(234,247,255,.54);
      }
      .wn-loading-stars--2 .wn-loading-star {
        background: #ffd69a;
        box-shadow: 0 0 7px rgba(255,214,154,.46);
      }
      .wn-loading-star--bright::before,
      .wn-loading-star--bright::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        background: inherit;
        transform: translate(-50%, -50%);
        opacity: .62;
      }
      .wn-loading-star--bright::before { width: 220%; height: 1px; }
      .wn-loading-star--bright::after { width: 1px; height: 220%; }
      .wn-loading-nebula {
        will-change: transform, opacity;
      }
      .wn-loading-nebula--cloud {
        animation: wn-loading-nebula-cloud 18s ease-in-out infinite alternate;
      }
      .wn-loading-nebula--filament {
        animation: wn-loading-nebula-filament 22s ease-in-out infinite alternate;
      }
      .wn-loading-nebula--cyan {
        animation-direction: alternate-reverse;
        animation-duration: 27s;
      }
      .wn-loading-nebula-block {
        position: absolute;
        left: var(--nebula-x);
        top: var(--nebula-y);
        width: var(--nebula-w);
        height: var(--nebula-h);
        display: block;
        background: #6d4cc7;
        opacity: var(--nebula-alpha);
        transform: rotate(var(--nebula-r));
        box-shadow: 0 0 18px rgba(109,76,199,.18);
      }
      .wn-loading-nebula--cyan .wn-loading-nebula-block {
        background: #238fa3;
        box-shadow: 0 0 16px rgba(35,143,163,.14);
      }
      .wn-loading-nebula-block--0 { background: #4056a8; }
      .wn-loading-nebula-block--1 { background: #6d4cc7; }
      .wn-loading-nebula-block--2 { background: #238fa3; }
      .wn-loading-meteor-track {
        position: absolute;
        left: -18vw;
        z-index: 2;
        width: 16vw;
        height: 12px;
        opacity: 0;
        will-change: transform, opacity;
      }
      .wn-loading-meteor-track--primary {
        top: 19%;
      }
      .wn-loading-meteor-track--secondary {
        top: 57%;
        transform: scale(.72);
      }
      .wn-zone-transition--active .wn-loading-meteor-track--primary {
        animation: wn-loading-meteor-flight 9s linear infinite;
      }
      .wn-zone-transition--active .wn-loading-meteor-track--secondary {
        animation: wn-loading-meteor-flight-secondary 13s linear 3.8s infinite;
      }
      .wn-loading-meteor {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: clamp(3px, .35vw, 7px);
        transform: rotate(8deg);
        filter: drop-shadow(0 0 6px rgba(200,237,255,.64));
      }
      .wn-loading-meteor i {
        display: block;
        width: clamp(6px, .8vw, 13px);
        height: clamp(2px, .22vw, 4px);
        background: rgba(200,237,255,.9);
      }
      .wn-loading-meteor i:nth-child(1) { width: clamp(5px, .5vw, 8px); height: clamp(5px, .5vw, 8px); }
      .wn-loading-meteor i:nth-child(2) { opacity: .76; }
      .wn-loading-meteor i:nth-child(3) { opacity: .58; transform: scale(.82); }
      .wn-loading-meteor i:nth-child(4) { opacity: .4; transform: scale(.66); }
      .wn-loading-meteor i:nth-child(5) { opacity: .25; transform: scale(.52); }
      .wn-loading-meteor i:nth-child(6) { opacity: .12; transform: scale(.4); }
      .wn-voxel-spinner {
        position: absolute;
        right: clamp(22px, 3vw, 42px);
        bottom: clamp(22px, 3vw, 42px);
        z-index: 3;
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        perspective: 76px;
        filter: drop-shadow(0 0 8px rgba(104,231,255,.46));
      }
      .wn-voxel-cube {
        position: relative;
        width: 16px;
        height: 16px;
        transform-style: preserve-3d;
        animation: wn-voxel-spin 1.05s linear infinite;
      }
      .wn-voxel-face {
        position: absolute;
        inset: 0;
        display: block;
        box-sizing: border-box;
        border: 1px solid rgba(224,249,255,.72);
        background: rgba(77,190,224,.68);
        backface-visibility: visible;
      }
      .wn-voxel-front { transform: translateZ(8px); background: rgba(91,219,236,.82); }
      .wn-voxel-back { transform: rotateY(180deg) translateZ(8px); }
      .wn-voxel-right { transform: rotateY(90deg) translateZ(8px); background: rgba(45,116,176,.82); }
      .wn-voxel-left { transform: rotateY(-90deg) translateZ(8px); background: rgba(59,145,194,.78); }
      .wn-voxel-top { transform: rotateX(90deg) translateZ(8px); background: rgba(223,249,255,.92); }
      .wn-voxel-bottom { transform: rotateX(-90deg) translateZ(8px); background: rgba(18,61,113,.86); }
      @keyframes wn-voxel-spin {
        from { transform: rotateX(-20deg) rotateY(0deg) rotateZ(8deg); }
        to { transform: rotateX(340deg) rotateY(360deg) rotateZ(8deg); }
      }
      @keyframes wn-loading-aurora {
        from { transform: translate3d(-1.5%, -.5%, 0) scale(1); opacity: .76; }
        to { transform: translate3d(1.5%, .8%, 0) scale(1.04); opacity: 1; }
      }
      @keyframes wn-loading-star-drift-far {
        from { transform: translate3d(-.15%, -.1%, 0) rotate(-.05deg); }
        to { transform: translate3d(.22%, .12%, 0) rotate(.05deg); }
      }
      @keyframes wn-loading-star-drift-mid {
        from { transform: translate3d(-.28%, .08%, 0) rotate(-.08deg); }
        to { transform: translate3d(.36%, -.14%, 0) rotate(.08deg); }
      }
      @keyframes wn-loading-star-drift-near {
        from { transform: translate3d(-.42%, -.18%, 0) rotate(-.12deg); }
        to { transform: translate3d(.55%, .2%, 0) rotate(.12deg); }
      }
      @keyframes wn-loading-star-twinkle {
        from { filter: brightness(.72); }
        to { filter: brightness(1.32); }
      }
      @keyframes wn-loading-nebula-cloud {
        from { transform: translate3d(-.8%, -.35%, 0) scale(1); opacity: .8; }
        to { transform: translate3d(1.1%, .5%, 0) scale(1.03,.98); opacity: 1; }
      }
      @keyframes wn-loading-nebula-filament {
        from { transform: translate3d(-1.2%, -.25%, 0) rotate(-.12deg); }
        to { transform: translate3d(1.1%, .3%, 0) rotate(.12deg); }
      }
      @keyframes wn-loading-meteor-flight {
        0% { opacity: 0; transform: translate3d(0, -3vh, 0); }
        3% { opacity: 1; }
        12% { opacity: 1; transform: translate3d(136vw, 17vh, 0); }
        14%, 100% { opacity: 0; transform: translate3d(136vw, 17vh, 0); }
      }
      @keyframes wn-loading-meteor-flight-secondary {
        0%, 30% { opacity: 0; transform: translate3d(0, -2vh, 0) scale(.72); }
        33% { opacity: .8; }
        41% { opacity: .8; transform: translate3d(138vw, 13vh, 0) scale(.72); }
        43%, 100% { opacity: 0; transform: translate3d(138vw, 13vh, 0) scale(.72); }
      }
      @media (prefers-reduced-motion: reduce) {
        .wn-zone-transition { transition: none; }
        .wn-zone-transition::before,
        .wn-loading-stars,
        .wn-loading-star,
        .wn-loading-nebula { animation: none; }
        .wn-loading-meteor-track { display: none; }
        .wn-voxel-cube { animation: none; transform: rotateX(-24deg) rotateY(38deg) rotateZ(8deg); }
      }
    `,document.head.appendChild(t)}}function er(i,t){const e=ki(t);if(e){const s=i.islands[Ei(e.id)]?.choice,a=s?Mi(e.id,s)?.biome:void 0;if(a)return[a]}const n=Yn(t);return i.worldAllegiance&&!e?[i.worldAllegiance]:n?.dominant?[n.dominant]:["wild","ashland","marsh","steppe"]}function nr(i){const t=i.world.get(i.player,K);return Wn({completedQuestIds:t?.completed??[],endgameUnlocked:i.worldAllegiance!==null||!!t?.completed.includes("the_descent"),islands:i.islands}).filter(e=>e.kind==="wild").map(e=>{const n=er(i,e.id).map(vi),s=Array.from(new Set(n.flatMap(a=>Mt[a].spawnPool.map(o=>M[o]?.name??o))));return{id:e.id,name:e.name,subtitle:e.sub,biomeLabel:n.length===1?Mt[n[0]].name:n.map(a=>Mt[a].name).join(" / "),species:s}})}class Kr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-ship-intel-modal wn-scrim",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-ship-intel-box wn-glass">
        <div class="wn-phead"><button class="wn-back" data-close>Back</button><h3 style="margin:0">Island Occupancy</h3><span class="wn-phint">Ship Screen</span><button class="wn-close-btn" data-exit>X</button></div>
        <div class="wn-ship-intel-list"></div>
      </div>`,this.root.appendChild(this.panel),this.listEl=this.panel.querySelector(".wn-ship-intel-list"),this.panel.addEventListener("click",this.onClick),window.addEventListener("keydown",this.onKey)}panel;listEl;open=!1;isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}onKey=t=>{this.open&&t.code==="Escape"&&this.close()};onClick=t=>{t.target.closest("[data-exit],[data-close]")&&this.close()};render(){const t=nr(this.ctx);this.listEl.innerHTML=t.map(e=>`
            <div class="wn-ship-intel-card">
              <div>
                <div class="wn-ship-intel-name">${e.name}</div>
                <div class="wn-ship-intel-sub">${e.subtitle}</div>
              </div>
              <div class="wn-ship-intel-biome">${e.biomeLabel}</div>
              <div class="wn-ship-intel-species">${e.species.join(" · ")}</div>
            </div>`).join("")||'<div class="wn-ship-intel-empty">No islands charted yet.</div>'}injectStyles(){if(document.getElementById("wn-ship-intel-css"))return;const t=document.createElement("style");t.id="wn-ship-intel-css",t.textContent=`
      .wn-ship-intel-modal{position:fixed;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;
        pointer-events:auto;font-family:ui-sans-serif,system-ui,sans-serif;}
      .wn-ship-intel-box{width:520px;padding:18px 22px 20px;border-radius:14px;}
      .wn-ship-intel-box > *{position:relative;z-index:1;}
      .wn-ship-intel-list{display:flex;flex-direction:column;gap:10px;max-height:58vh;overflow-y:auto;}
      .wn-ship-intel-card{border:1px solid rgba(120,220,255,0.22);background:rgba(14,34,52,0.56);
        border-radius:10px;padding:12px 13px;}
      .wn-ship-intel-name{font-size:14px;font-weight:800;color:#eafaff;}
      .wn-ship-intel-sub{font-size:10px;color:#7fb0cc;margin-top:2px;}
      .wn-ship-intel-biome{margin-top:8px;font-size:12px;font-weight:800;color:#ffe08a;}
      .wn-ship-intel-species{margin-top:5px;font-size:11px;line-height:1.35;color:#cfe8f7;}
      .wn-ship-intel-empty{font-size:13px;color:#7fb0cc;padding:20px 4px;text-align:center;}
    `,document.head.appendChild(t)}}function sr(i,t,e){const n=ut(t).find(l=>l.uid===e);if(!n||!Kn(n.baseItemId))return{ok:!1,reason:"Module cargo not found"};Ti(i);const s=Qn(n.baseItemId),a=Xn(i,s);if(!a.ok)return{ok:!1,reason:a.reason,moduleId:s};const o=gt(t,e);if(!o)return{ok:!1,reason:"Module cargo could not be transferred",moduleId:s};const r=$i(i,s);return r.ok?{ok:!0,reason:r.reason,moduleId:s}:(ft(t,o),{ok:!1,reason:r.reason,moduleId:s})}class Qr{constructor(t,e){this.root=t,this.ctx=e,T(),this.injectStyles(),this.panel=document.createElement("div"),this.panel.className="wn-hab-panel wn-scrim",this.panel.style.display="none",this.box=document.createElement("div"),this.box.className="wn-hab-box wn-glass",this.panel.appendChild(this.box),this.root.appendChild(this.panel),this.panel.addEventListener("click",this.onClick)}panel;box;baseId=null;decision=null;isOpen(){return this.baseId!==null}open(t,e){this.ctx.hab&&(this.baseId=t,this.decision=e??null,this.ctx.paused=!0,this.panel.style.display="flex",this.render())}dismiss(){this.baseId=null,this.decision=null,this.ctx.paused=!1,this.panel.style.display="none"}currentBase(){if(!(!this.baseId||!this.ctx.hab))return Si(this.ctx,this.ctx.hab.islandZone,this.baseId)}onClick=t=>{const e=t.target;if(e.closest("[data-exit]")){this.dismiss();return}if(e.closest("[data-island-decision]")&&this.decision?.available){const s=this.decision.onSelect;this.dismiss(),s?.();return}const n=e.closest("[data-module-uid]");n?.dataset.moduleUid&&this.install(n.dataset.moduleUid)};install(t){const e=this.currentBase(),n=this.ctx.world.get(this.ctx.player,C);if(!e||!n)return;const s=sr(e,n,t);if(!s.ok||!s.moduleId){this.ctx.bus.emit("world.event",{title:"MODULE REJECTED",subtitle:s.reason});return}const a=s.moduleId;this.ctx.bus.emit("base.moduleInstalled",{baseId:e.id,moduleId:a}),this.ctx.bus.emit("world.event",{title:"HABITAT EXPANDED",subtitle:`${Vt[a].name} pressure seal confirmed.`}),this.dismiss(),this.ctx.pendingZone="hab",this.ctx.pendingZonePreserve=!0}render(){const t=this.currentBase();if(!t){this.dismiss();return}const e=this.ctx.world.get(this.ctx.player,C),n=e?ut(e).filter(l=>Kn(l.baseItemId)):[],s=t.installed.map(l=>`<span class="wn-hab-chip">${Vt[l.moduleId]?.name??l.moduleId}</span>`).join(""),a=n.map(l=>{const c=Qn(l.baseItemId),d=Xn(t,c),p=Vt[c];return`<button class="wn-hab-cargo ${d.ok?"":"locked"}" data-module-uid="${l.uid}" ${d.ok?"":"disabled"}>
          ${et(l,{loc:"hab",key:l.uid})}
          <span><b>${p.name}</b><small>${d.reason}</small></span>
        </button>`}).join(""),o=Ci[t.hostFaction],r=this.decision?`<div class="wn-hab-section"><h3>ISLAND FATE</h3>
          <p>${this.decision.prompt}</p>
          <button class="wn-hab-decision ${this.decision.available?"":"locked"}" data-island-decision ${this.decision.available?"":"disabled"}>
            <b>${this.decision.available?"Open decision channel":"Decision channel locked"}</b>
            <small>${this.decision.available?"Review the final settlement directives.":this.decision.lockedMessage??"Complete the island campaign to authorize a final directive."}</small>
          </button>
        </div>`:"";this.box.innerHTML=`
      <div class="wn-hab-head"><div><small>HABITAT COMMAND TERMINAL</small><h2>${t.name}</h2></div><button data-exit>✕</button></div>
      <div class="wn-hab-theme" style="color:#${o.accent.toString(16).padStart(6,"0")}">${o.name} · ${o.exterior}</div>
      <div class="wn-hab-section"><h3>CONNECTED MODULES</h3><div class="wn-hab-chips">${s}</div></div>
      <div class="wn-hab-section"><h3>RECOVERED MODULE CARGO</h3>
        <p>The command terminal selects a legal pressure-hull connection. Existing rooms never move.</p>
        <div class="wn-hab-cargo-grid">${a||'<div class="wn-hab-empty">No module cargo aboard. Search hostile sites and faction caches.</div>'}</div>
      </div>
      ${r}`}injectStyles(){if(document.getElementById("wn-hab-css"))return;const t=document.createElement("style");t.id="wn-hab-css",t.textContent=`
      .wn-hab-panel{position:fixed;inset:0;z-index:40;align-items:center;justify-content:center;padding:32px;pointer-events:auto}
      .wn-hab-box{width:min(900px,94vw);max-height:86vh;overflow:auto;padding:24px;color:#e8f7ff}
      .wn-hab-head{display:flex;align-items:flex-start;justify-content:space-between;border-bottom:1px solid #6bc4df55;padding-bottom:12px}
      .wn-hab-head h2{margin:3px 0 0;font-size:28px}.wn-hab-head small,.wn-hab-section h3{letter-spacing:.16em;color:#8ed8ee}
      .wn-hab-head button{background:none;border:1px solid #8ed8ee88;color:#dff8ff;padding:7px 10px;cursor:pointer}
      .wn-hab-theme{margin:12px 0 18px;font-size:13px}.wn-hab-section{margin-top:20px}.wn-hab-section p{color:#a8c5d2;font-size:13px}
      .wn-hab-chips{display:flex;flex-wrap:wrap;gap:7px}.wn-hab-chip{border:1px solid #74bdd055;background:#173441aa;padding:6px 9px;font-size:12px}
      .wn-hab-cargo-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
      .wn-hab-cargo{display:flex;align-items:center;gap:10px;text-align:left;background:#0b202acc;border:1px solid #6bc4df66;color:#e8f7ff;padding:8px;cursor:pointer}
      .wn-hab-cargo .wn-cell{flex:0 0 46px}.wn-hab-cargo span{display:flex;flex-direction:column;gap:3px}.wn-hab-cargo small{color:#8fb4c2}
      .wn-hab-cargo.locked{opacity:.45;cursor:not-allowed}.wn-hab-empty{padding:20px;border:1px dashed #6bc4df55;color:#8fb4c2}
      .wn-hab-decision{width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:4px;text-align:left;background:#2d2712cc;border:1px solid #ffd86a88;color:#fff3c4;padding:12px;cursor:pointer}
      .wn-hab-decision small{color:#d3bd78}.wn-hab-decision.locked{opacity:.5;cursor:not-allowed}
    `,document.head.appendChild(t)}}class Xr{constructor(t,e){this.root=t,this.ctx=e,T(),Ot(),this.panel=document.createElement("div"),this.panel.className="wn-vendor-modal",this.panel.style.display="none",this.panel.innerHTML=`
      <div class="wn-svc-box wn-glass" style="max-width:430px">
        <div class="wn-svc-head"><h2>Nexus Breach</h2><span class="wn-inc-keys"></span><button class="wn-close-btn" data-exit>✕</button></div>
        <div class="wn-inc-body"></div>
        <div class="wn-svc-foot"><kbd>Esc</kbd> to close</div>
      </div>`,this.root.appendChild(this.panel),this.bodyEl=this.panel.querySelector(".wn-inc-body"),this.panel.addEventListener("click",this.onClick)}panel;bodyEl;open=!1;tier=1;mutators=[];rollCount=0;onBreach=null;isOpen(){return this.open}toggle(){this.open?this.close():this.ctx.paused||this.openPanel()}openPanel(){this.open=!0,this.ctx.paused=!0,this.tier=Math.max(1,Math.min(this.tier,this.maxTier())),this.reroll(),this.panel.style.display="flex",this.render()}close(){this.open=!1,this.ctx.paused=!1,this.panel.style.display="none"}maxTier(){return(this.ctx.world.get(this.ctx.player,j)?.incursionTier??0)+1}keys(){return this.ctx.world.get(this.ctx.player,_n)?.keys??0}unlocked(){return this.ctx.world.get(this.ctx.player,K)?.completed.includes(Li)??!1}reroll(){this.mutators=Ii(new rt(lt(5314,this.rollCount++)),this.tier)}onClick=t=>{const e=t.target.closest("[data-exit],[data-up],[data-down],[data-breach]");if(e){if(e.dataset.exit!=null)this.close();else if(e.dataset.up!=null||e.dataset.down!=null){const n=this.tier+(e.dataset.up!=null?1:-1);this.tier=Math.max(1,Math.min(n,this.maxTier())),this.reroll(),this.render()}else if(e.dataset.breach!=null){if(this.keys()<1||!this.onBreach)return;const n=this.tier,s=this.mutators;this.close(),this.onBreach(n,s)}}};render(){if(this.panel.querySelector(".wn-inc-keys").innerHTML=`🗝 <b>${this.keys()}</b> keys`,!this.unlocked()){this.bodyEl.innerHTML=`
        <div style="padding:26px 10px;text-align:center;color:#b9a7d8;font-size:13px;line-height:1.6">
          The Breach is sealed. The Nexus only tears open for those who have
          stood at its Core — <b style="color:#c98aff">press the campaign to its end</b> first.
        </div>`;return}const e=this.ctx.world.get(this.ctx.player,j)?.incursionTier??0,n=this.tier>=this.maxTier(),s=this.keys()<1,a=zi(this.tier);this.bodyEl.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;gap:14px;margin:14px 0 4px">
        <button class="wn-close-btn" data-down ${this.tier<=1?"disabled":""}>−</button>
        <div style="text-align:center;min-width:130px">
          <div style="font:800 26px ui-sans-serif,system-ui;color:#c98aff">TIER ${this.tier}</div>
          <div style="font-size:10px;color:#8f7fb3">monster level ${a}${e>0?` · best clear ${e}`:""}</div>
        </div>
        <button class="wn-close-btn" data-up ${n?"disabled":""}>+</button>
      </div>
      <div style="margin:12px 4px 4px;font:700 10px ui-sans-serif,system-ui;letter-spacing:0.1em;color:#8f7fb3">THIS TEAR IS...</div>
      ${this.mutators.map(o=>`<div style="display:flex;justify-content:space-between;gap:10px;padding:7px 10px;margin:4px;
            border:1px solid rgba(180,130,255,0.28);border-radius:8px;background:rgba(60,30,100,0.25);font-size:12px">
            <b style="color:#d8bfff">${o.name}</b><span style="color:#b9a7d8">${o.desc}</span></div>`).join("")}
      <div style="margin:6px 4px;font-size:11px;color:#8f7fb3">Clear the boss: high-tier loot, keys back, paragon XP — and Tier ${this.tier+1} unlocks.</div>
      <button data-breach ${s?"disabled":""} style="display:block;width:calc(100% - 8px);margin:10px 4px 4px;padding:12px;
        border-radius:10px;border:1px solid rgba(200,150,255,0.55);cursor:${s?"default":"pointer"};
        background:linear-gradient(180deg,rgba(110,60,190,0.75),rgba(60,25,110,0.85));color:#f0e4ff;
        font:800 14px ui-sans-serif,system-ui;letter-spacing:0.08em;opacity:${s?.5:1};
        box-shadow:0 0 18px rgba(150,80,255,0.35)">
        ${s?"NO KEYS — champions and bosses drop them":"BREACH — consume 1 key"}
      </button>`}}function Zr(i,t,e){const n=!t&&i.family==="none"?"precision":i.family,s=i.family==="scatter"?Math.max(20,i.spreadRadiusPx*2):i.family==="beam"?14:i.family==="rail"?Math.max(30,i.spreadRadiusPx*2):18;return{family:n,sizePx:t?s:Math.max(21,s),opacity:t?e||i.hot?1:.72:.92,strategy:!t}}function ir(i,t=Math.max(1,i.pellets??1)){return i.kind==="melee"?"none":i.id==="weapon_railgun"?"rail":i.kind==="beam"?"beam":t>1?"scatter":"precision"}function ar(i,t,e,n){if(t<=1)return 0;const s=i.pelletSpread??Ai,a=(t-1)/2*s,o=n*Math.PI/360,r=e/2/Math.tan(Math.max(.01,o));return Math.max(8,Math.tan(a)*r)}function Jr(i,t){return t?"kill":i?"critical":"hit"}function tl(i){const t=!!i.aim?.assisted&&!i.blocked,e=i.cooldownDuration??i.ability.cooldown,n=e<=0?1:D(1-i.cooldownRemaining/e,0,1);return{family:ir(i.ability,i.projectileCount),aimState:i.blocked?"blocked":t?"hot":"free",hot:t,ready:i.cooldownRemaining<=.001,recovery:n,effectiveRange:i.ability.range,targetRange:i.aim?.target!==null&&i.aim?.target!==void 0?i.aim.rangeDistance:null,spreadRadiusPx:ar(i.ability,i.projectileCount,i.viewportHeight,i.verticalFovDeg)}}function or(i,t,e,n){return i==="on"?!0:i==="off"?!1:t||e>0&&n<=1100}function rr(i,t,e){const n=Math.max(1,e),s=Math.min(n,Math.hypot(i,t));if(s<=n*.12)return{x:0,y:0,magnitude:0};const a=Math.hypot(i,t)||1,o=Math.min(1,(s/n-.12)/.88);return{x:i/a*o,y:t/a*o,magnitude:o}}const lr=i=>i==="firstPerson"?"FIRST PERSON":i==="action"?"THIRD PERSON":"STRATEGY";class el{constructor(t,e){this.host=t,this.actions=e,this.injectStyles(),this.root.className="wn-touch-controls",this.root.setAttribute("aria-label","Touch controls"),this.lookZone.className="wn-touch-look",this.lookZone.setAttribute("aria-label","Drag to look"),this.lookZone.addEventListener("pointerdown",this.onLookDown),this.lookZone.addEventListener("pointermove",this.onLookMove),this.lookZone.addEventListener("pointerup",this.onLookUp),this.lookZone.addEventListener("pointercancel",this.onLookUp),this.stick.className="wn-touch-stick",this.stick.setAttribute("aria-label","Move"),this.nub.className="wn-touch-stick__nub",this.stick.appendChild(this.nub),this.stick.addEventListener("pointerdown",this.onStickDown),this.stick.addEventListener("pointermove",this.onStickMove),this.stick.addEventListener("pointerup",this.onStickUp),this.stick.addEventListener("pointercancel",this.onStickUp);const n=document.createElement("div");n.className="wn-touch-actions";const s=this.makeHoldButton("ATTACK","wn-touch-action--fire",r=>this.actions.fire(r)),a=this.makeHoldButton("JET","wn-touch-action--jet",r=>this.actions.jet(r));this.interactButton=this.makeInteractButton();const o=this.makeTapButton("SWAP","wn-touch-action--swap",()=>this.actions.swapWeapon());n.append(s,a,this.interactButton,o),this.viewButton=this.makeTapButton("STRATEGY","wn-touch-view",()=>this.actions.nextView()),this.root.append(this.lookZone,this.stick,n,this.viewButton),this.host.appendChild(this.root)}root=document.createElement("div");stick=document.createElement("div");nub=document.createElement("div");lookZone=document.createElement("div");interactButton;viewButton;enabledNow=!1;state=null;stickPointer=null;stickOrigin={x:0,y:0};lookPointer=null;lookLast={x:0,y:0};interactTimer=0;interactLongFired=!1;coarsePointer=window.matchMedia?.("(pointer: coarse)").matches??!1;visibleNow=!1;lastLeftHanded=null;lastViewMode=null;lastCanInteract=null;get enabled(){return this.enabledNow}sync(t){this.state=t;const e=or(t.setting,this.coarsePointer,navigator.maxTouchPoints??0,window.innerWidth);this.enabledNow=e;const n=e&&!t.paused;if(n!==this.visibleNow){const s=this.visibleNow;this.visibleNow=n,this.root.classList.toggle("is-visible",n),document.body.classList.toggle("wn-touch-active",n),document.body.classList.toggle("wn-touch-left-handed",n&&t.leftHanded),s&&!n&&this.releaseAll()}if(t.leftHanded!==this.lastLeftHanded&&(this.lastLeftHanded=t.leftHanded,this.root.classList.toggle("is-left-handed",t.leftHanded),n&&document.body.classList.toggle("wn-touch-left-handed",t.leftHanded)),t.viewMode!==this.lastViewMode){this.lastViewMode=t.viewMode,this.root.classList.toggle("is-strategy",t.viewMode==="strategy");const s=lr(t.viewMode);this.viewButton.textContent=s,this.viewButton.setAttribute("aria-label",`Change view: ${s}`)}t.canInteract!==this.lastCanInteract&&(this.lastCanInteract=t.canInteract,this.interactButton.classList.toggle("is-available",t.canInteract),this.interactButton.textContent=t.canInteract?"USE":"TALK")}destroy(){this.visibleNow&&this.releaseAll(),window.clearTimeout(this.interactTimer),this.root.remove(),document.body.classList.remove("wn-touch-active","wn-touch-left-handed")}releaseAll(){this.stickPointer=null,this.lookPointer=null,this.nub.style.transform="",this.actions.move(0,0,!1),this.actions.fire(!1),this.actions.jet(!1)}onStickDown=t=>{if(!this.enabledNow||this.state?.paused||this.stickPointer!==null)return;t.preventDefault(),t.stopPropagation(),this.stickPointer=t.pointerId,this.stick.setPointerCapture(t.pointerId);const e=this.stick.getBoundingClientRect();this.stickOrigin={x:e.left+e.width/2,y:e.top+e.height/2},this.updateStick(t.clientX,t.clientY,e.width*.36)};onStickMove=t=>{if(t.pointerId!==this.stickPointer)return;t.preventDefault();const e=this.stick.getBoundingClientRect();this.updateStick(t.clientX,t.clientY,e.width*.36)};onStickUp=t=>{t.pointerId===this.stickPointer&&(t.preventDefault(),this.stickPointer=null,this.nub.style.transform="",this.actions.move(0,0,!1))};updateStick(t,e,n){const s=rr(t-this.stickOrigin.x,e-this.stickOrigin.y,n);this.nub.style.transform=`translate(${s.x*n}px,${s.y*n}px)`,this.actions.move(s.x,s.y,s.magnitude>.88)}onLookDown=t=>{!this.enabledNow||this.state?.paused||this.lookPointer!==null||(t.preventDefault(),this.lookPointer=t.pointerId,this.lookLast={x:t.clientX,y:t.clientY},this.lookZone.setPointerCapture(t.pointerId))};onLookMove=t=>{if(t.pointerId!==this.lookPointer)return;t.preventDefault();const e=this.state?.lookSensitivity??1;this.actions.look((t.clientX-this.lookLast.x)*e,(t.clientY-this.lookLast.y)*e),this.lookLast={x:t.clientX,y:t.clientY}};onLookUp=t=>{t.pointerId===this.lookPointer&&(t.preventDefault(),this.lookPointer=null)};makeHoldButton(t,e,n){const s=this.makeButton(t,e),a=r=>{r.preventDefault(),r.stopPropagation(),s.setPointerCapture(r.pointerId),s.classList.add("is-held"),n(!0)},o=r=>{r.preventDefault(),r.stopPropagation(),s.classList.remove("is-held"),n(!1)};return s.addEventListener("pointerdown",a),s.addEventListener("pointerup",o),s.addEventListener("pointercancel",o),s.addEventListener("lostpointercapture",()=>{s.classList.remove("is-held"),n(!1)}),s}makeTapButton(t,e,n){const s=this.makeButton(t,e);return s.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),s.classList.add("is-held"),s.setPointerCapture(a.pointerId)}),s.addEventListener("pointerup",a=>{a.preventDefault(),a.stopPropagation(),s.classList.remove("is-held"),n()}),s.addEventListener("pointercancel",()=>s.classList.remove("is-held")),s}makeInteractButton(){const t=this.makeButton("TALK","wn-touch-action--interact");t.title="Tap to interact or talk; hold to persuade",t.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),t.setPointerCapture(n.pointerId),t.classList.add("is-held"),this.interactLongFired=!1,window.clearTimeout(this.interactTimer),this.interactTimer=window.setTimeout(()=>{this.interactLongFired=!0,this.actions.interact(!0)},520)});const e=n=>{n.preventDefault(),n.stopPropagation(),t.classList.remove("is-held"),window.clearTimeout(this.interactTimer),this.interactLongFired||this.actions.interact(!1)};return t.addEventListener("pointerup",e),t.addEventListener("pointercancel",n=>{this.interactLongFired=!0,e(n)}),t}makeButton(t,e){const n=document.createElement("button");return n.type="button",n.className=`wn-touch-action ${e}`,n.textContent=t,n.setAttribute("aria-label",t),n}injectStyles(){if(document.getElementById("wn-touch-controls-style"))return;const t=document.createElement("style");t.id="wn-touch-controls-style",t.textContent=`
      .wn-touch-controls { position:fixed;inset:0;z-index:17;display:none;pointer-events:none;touch-action:none;user-select:none;-webkit-user-select:none; }
      .wn-touch-controls.is-visible { display:block; }
      .wn-touch-look { position:absolute;right:0;top:8%;bottom:0;width:58%;pointer-events:auto;touch-action:none; }
      .wn-touch-controls.is-strategy .wn-touch-look { pointer-events:none; }
      .wn-touch-stick { position:absolute;left:max(18px,env(safe-area-inset-left));bottom:max(24px,calc(env(safe-area-inset-bottom) + 18px));width:clamp(104px,18vw,144px);aspect-ratio:1;border:2px solid rgba(150,225,255,.42);border-radius:50%;background:radial-gradient(circle,rgba(50,125,170,.18),rgba(8,24,39,.38));box-shadow:0 0 22px rgba(65,190,255,.13),inset 0 0 22px rgba(70,190,255,.12);pointer-events:auto;touch-action:none; }
      .wn-touch-stick__nub { position:absolute;left:50%;top:50%;width:42%;aspect-ratio:1;transform:translate(0,0);translate:-50% -50%;border:1px solid rgba(190,240,255,.7);border-radius:50%;background:linear-gradient(145deg,rgba(120,215,255,.72),rgba(35,95,145,.62));box-shadow:0 0 15px rgba(80,205,255,.38);will-change:transform; }
      .wn-touch-actions { position:absolute;right:max(18px,env(safe-area-inset-right));bottom:max(22px,calc(env(safe-area-inset-bottom) + 16px));width:clamp(150px,25vw,202px);height:clamp(168px,29vw,224px);pointer-events:none; }
      .wn-touch-action { position:absolute;display:grid;place-items:center;min-width:50px;min-height:50px;border:1px solid rgba(170,232,255,.62);border-radius:50%;background:linear-gradient(150deg,rgba(37,94,132,.78),rgba(8,27,45,.88));box-shadow:0 0 15px rgba(70,190,255,.2),inset 0 0 12px rgba(120,220,255,.12);color:#e9faff;font:900 9px ui-sans-serif,system-ui;letter-spacing:.06em;text-shadow:0 1px 3px #000;pointer-events:auto;touch-action:none; }
      .wn-touch-action.is-held { transform:scale(.92);filter:brightness(1.35); }
      .wn-touch-action--fire { right:0;bottom:24%;width:clamp(72px,12vw,92px);height:clamp(72px,12vw,92px);border-color:rgba(255,128,142,.78);background:linear-gradient(150deg,rgba(160,45,65,.8),rgba(55,13,28,.9));box-shadow:0 0 18px rgba(255,70,100,.28); }
      .wn-touch-action--jet { right:43%;bottom:0;width:clamp(58px,9vw,72px);height:clamp(58px,9vw,72px); }
      .wn-touch-action--interact { right:48%;bottom:50%;width:clamp(56px,8vw,68px);height:clamp(56px,8vw,68px);opacity:.72; }
      .wn-touch-action--interact.is-available { opacity:1;border-color:rgba(255,222,105,.85);color:#ffdf6a;box-shadow:0 0 18px rgba(255,210,75,.28); }
      .wn-touch-action--swap { right:8%;bottom:0;width:52px;height:52px; }
      .wn-touch-view { top:max(12px,env(safe-area-inset-top));right:max(14px,env(safe-area-inset-right));width:auto;height:38px;min-width:104px;padding:0 13px;border-radius:18px;font-size:8px; }
      .wn-touch-controls.is-left-handed .wn-touch-look { left:0;right:auto; }
      .wn-touch-controls.is-left-handed .wn-touch-stick { left:auto;right:max(18px,env(safe-area-inset-right)); }
      .wn-touch-controls.is-left-handed .wn-touch-actions { right:auto;left:max(18px,env(safe-area-inset-left));transform:scaleX(-1); }
      .wn-touch-controls.is-left-handed .wn-touch-actions .wn-touch-action { transform:scaleX(-1); }
      .wn-touch-controls.is-left-handed .wn-touch-actions .wn-touch-action.is-held { transform:scaleX(-1) scale(.92); }
      .wn-touch-controls.is-left-handed .wn-touch-view { right:auto;left:max(14px,env(safe-area-inset-left)); }
      .wn-touch-active .wn-hotbar-slot { pointer-events:auto!important;touch-action:none; }
      .wn-touch-active .wn-hotbar-wrap { z-index:19!important;bottom:max(10px,env(safe-area-inset-bottom))!important;transform:translateX(-50%) scale(.84)!important;transform-origin:bottom center; }
      @media (max-width:760px) and (orientation:landscape) {
        .wn-touch-active .wn-hotbar-wrap { bottom:max(7px,env(safe-area-inset-bottom))!important;transform:translateX(-50%) scale(.72)!important; }
        .wn-touch-active .wn-hud-level-row,.wn-touch-active .wn-hud-hp { display:none!important; }
      }
      @media (orientation:portrait) {
        .wn-touch-active .wn-hotbar-wrap { bottom:max(190px,calc(env(safe-area-inset-bottom) + 184px))!important;transform:translateX(-50%) scale(.62)!important; }
        .wn-touch-active .wn-hud-level-row,.wn-touch-active .wn-hud-hp { display:none!important; }
      }
    `,document.head.appendChild(t)}}const oe="linear-gradient(180deg,rgba(34,82,116,0.5),rgba(14,38,60,0.72))",kt="rgba(120,220,255,0.5)",Et="0 0 14px rgba(70,190,255,0.22)";function cr(i,t){const e=Math.max(0,Math.min(1,(i.jetFuel??t)/t));return!!i.jetHeld||!!i.sprinting||e<.995||i.dodgeCd>.01}function dr(i,t=0){return Math.min(11e3,3600+i.trim().length*55)+t}const pr=i=>{const t=i.split("_").pop()??i;return t.charAt(0).toUpperCase()+t.slice(1)},re=['The island files this under "natural causes."',"Your suit auto-drafts an apology to your organs.","Gravity remains undefeated.","The local wildlife adds you to their highlight reel.","Cause of death: optimism.","The respawn system pretends not to judge. It judges.","Somewhere, Brix updates the casualty whiteboard.","Earth Junior 1, visitor 0.","Do not worry — the ground broke your fall.",'Your beacon lists you as "temporarily embarrassed."'];class nl{constructor(t,e){this.root=t,this.ctx=e,T();const n=document.createElement("div");n.className="wn-hotbar-wrap",n.style.cssText="position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:15;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none;",this.b4b3lQuestPrompt=document.createElement("div"),this.b4b3lQuestPrompt.className="wn-live wn-live-glow",this.b4b3lQuestPrompt.innerHTML='<span style="font-weight:900">[B]</span>&nbsp; PRESS B TO TALK TO B4B3L',this.b4b3lQuestPrompt.style.cssText="display:none;padding:6px 13px;border:1px solid rgba(255,223,106,.72);border-radius:7px;background:rgba(20,28,39,.9);box-shadow:0 0 15px rgba(255,223,106,.24);font:800 11px ui-monospace,monospace;color:#ffdf6a;letter-spacing:.045em;text-shadow:0 1px 3px #000;";const s=document.createElement("div");s.className="wn-hud-level-row",s.style.cssText="display:flex;align-items:center;gap:8px;width:380px;",this.levelEl=document.createElement("div"),this.levelEl.style.cssText="font:700 11px ui-monospace,monospace;color:#b79bff;white-space:nowrap;text-shadow:0 1px 2px #000;";const a=document.createElement("div");a.style.cssText="flex:1;height:6px;border:1px solid rgba(120,220,255,0.3);border-radius:3px;background:rgba(8,22,36,0.72);overflow:hidden;",this.xpFill=document.createElement("div"),this.xpFill.style.cssText="height:100%;width:0%;background:linear-gradient(90deg,#5bd0ff,#9a7bff);transition:width 0.3s ease;",a.appendChild(this.xpFill),s.append(this.levelEl,a);const o=document.createElement("div");o.className="wn-live wn-live-glow wn-hud-hp",o.style.cssText=`width:380px;height:18px;border:1px solid ${kt};border-radius:5px;background:rgba(8,22,36,0.72);overflow:hidden;position:relative;box-shadow:${Et};`,this.hpChip=document.createElement("div"),this.hpChip.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:rgba(255,220,190,0.55);",this.hpFill=document.createElement("div"),this.hpFill.style.cssText="position:absolute;left:0;top:0;height:100%;width:100%;background:linear-gradient(90deg,#ff5b6e,#ff8a5b);box-shadow:0 0 10px rgba(255,90,110,0.5);",this.hpText=document.createElement("div"),this.hpText.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:600 11px ui-monospace,monospace;color:#fff;text-shadow:0 1px 2px #000;",o.append(this.hpChip,this.hpFill,this.hpText),this.vignette=document.createElement("div"),this.vignette.style.cssText="position:fixed;inset:0;z-index:12;pointer-events:none;opacity:0;background:radial-gradient(ellipse at center,transparent 52%,rgba(255,30,50,0.55) 100%);",this.root.appendChild(this.vignette);const r=document.createElement("div");r.style.cssText="display:flex;gap:16px;align-items:flex-end;",r.appendChild(this.makeGroup("You",[0,1],!0)),r.appendChild(this.makeGroup("Companion",[2,3,4,5],!1)),n.append(this.b4b3lQuestPrompt,s,o,r),this.root.appendChild(n);const l=document.createElement("div");l.style.cssText="position:fixed;left:12px;bottom:14px;z-index:15;pointer-events:none;",this.compFrame=document.createElement("div"),this.compFrame.className="wn-live wn-live-glow",this.compFrame.style.cssText=`min-width:240px;padding:11px 14px;border-radius:10px;background:${oe};border:1px solid ${kt};box-shadow:${Et};font:700 14px ui-sans-serif,system-ui;color:#d6f3ff;`,this.rosterEl=document.createElement("div"),this.rosterEl.style.cssText="display:flex;gap:7px;margin-top:8px;",this.questTracker=document.createElement("div"),this.questTracker.className="wn-live wn-live-glow",this.questTracker.style.cssText=`position:fixed;right:12px;top:172px;min-width:220px;max-width:260px;padding:9px 12px;border-radius:10px;background:${oe};border:1px solid ${kt};box-shadow:${Et};font:600 11px ui-sans-serif,system-ui;color:#d6f3ff;display:none;pointer-events:none;z-index:15;`,l.append(this.compFrame,this.rosterEl),this.root.appendChild(l),this.root.appendChild(this.questTracker),this.banner=document.createElement("div"),this.banner.style.cssText="position:fixed;left:50%;top:38%;transform:translate(-50%,-50%);z-index:16;display:none;text-align:center;pointer-events:none;",this.bannerBox=document.createElement("div"),this.bannerBox.style.cssText="display:inline-flex;align-items:flex-start;gap:8px;";const c=document.createElement("div");c.style.cssText="text-align:center;",this.bannerTitle=document.createElement("div"),this.bannerTitle.style.cssText="font:800 34px ui-sans-serif,system-ui;color:#ff6a7a;text-shadow:0 2px 10px #000;letter-spacing:0.04em;",this.bannerTitle.textContent="YOU FELL",this.bannerQuip=document.createElement("div"),this.bannerQuip.style.cssText="margin-top:8px;font:600 13px ui-sans-serif,system-ui;color:#e8c8d0;letter-spacing:0.01em;text-shadow:0 1px 6px #000;font-style:italic;",c.append(this.bannerTitle,this.bannerQuip),this.bannerBox.append(c),this.banner.appendChild(this.bannerBox),this.root.appendChild(this.banner),this.bossBar=document.createElement("div"),this.bossBar.style.cssText="position:fixed;left:50%;top:60px;transform:translateX(-50%);z-index:15;width:440px;display:none;pointer-events:none;text-align:center;",this.bossName=document.createElement("div"),this.bossName.style.cssText="font:800 15px ui-sans-serif,system-ui;color:#ffb0bf;letter-spacing:0.06em;margin-bottom:4px;text-shadow:0 1px 6px #000";const d=document.createElement("div");d.style.cssText="height:14px;border:1px solid rgba(255,120,150,0.6);border-radius:5px;background:rgba(28,8,16,0.8);overflow:hidden;box-shadow:0 0 16px rgba(255,60,110,0.45);",this.bossFill=document.createElement("div"),this.bossFill.style.cssText="height:100%;width:100%;background:linear-gradient(90deg,#ff3b6e,#ff7a3c);",d.appendChild(this.bossFill),this.bossBar.append(this.bossName,d),this.root.appendChild(this.bossBar),this.compBar=document.createElement("div"),this.compBar.id="wn-comp-bar",this.compBar.style.cssText="position:absolute;left:0;top:0;width:54px;height:6px;border:1px solid rgba(120,220,255,0.6);border-radius:3px;background:rgba(8,20,32,0.85);overflow:hidden;pointer-events:none;display:none;z-index:14;box-shadow:0 0 8px rgba(70,190,255,0.4);",this.compFill=document.createElement("div"),this.compFill.style.cssText="height:100%;width:100%;background:#5be08a;",this.compBar.appendChild(this.compFill),this.root.appendChild(this.compBar),this.jetGauge=document.createElement("div"),this.jetGauge.style.cssText="position:absolute;left:0;top:0;width:8px;height:42px;border:1px solid rgba(130,220,255,0.78);border-radius:5px;background:rgba(6,18,34,0.78);overflow:hidden;pointer-events:none;display:none;z-index:15;box-shadow:0 0 10px rgba(80,190,255,0.48), inset 0 0 8px rgba(80,190,255,0.18);",this.jetGaugeFill=document.createElement("div"),this.jetGaugeFill.style.cssText="position:absolute;left:0;bottom:0;width:100%;height:100%;background:linear-gradient(180deg,#c9f7ff,#4fbfff 45%,#2a74ff);box-shadow:0 0 10px rgba(90,210,255,0.75);",this.jetGauge.appendChild(this.jetGaugeFill),this.root.appendChild(this.jetGauge)}onAbility=null;hpFill;hpChip;hpText;vignette;chipFrac=1;lastNow=0;pulseT=0;levelEl;xpFill;b4b3lQuestPrompt;slotEls=[];slotLabels=[];slotCd=[];slotFrames=[];slotAbilityIds=[];jetGauge;jetGaugeFill;compFrame;rosterEl;banner;bannerBox;bannerTitle;bannerQuip;lastQuip=-1;wasFallen=!1;deathTimer=0;deathAnim=null;compBar;compFill;questTracker;bossBar;bossFill;bossName;enemyBars=[];enemyLabels=[];tmp=new S;lastLevelHtml="";lastCompanionHtml="";lastRosterHtml="";lastQuestHtml="";lastHpText="";lastHpWidth="";lastChipWidth="";lastVignetteOpacity="";lastXpWidth="";lastCompFillWidth="";lastCompFillColor="";lastBossWidth="";slotAngles=[];panelPoll=0;hasSystemMessage(){return this.banner.style.display!=="none"}dismissSystemMessage(){this.banner.style.display!=="none"&&this.dismissDeathBanner()}showDeathBanner(){if(this.ctx.respawn.cause==="drown")this.bannerTitle.textContent="YOU DROWNED",this.bannerQuip.textContent="Probably should have stuck with swim lessons...";else{this.bannerTitle.textContent="YOU FELL";let e=Math.floor(Math.random()*re.length);e===this.lastQuip&&(e=(e+1)%re.length),this.lastQuip=e,this.bannerQuip.textContent=re[e]}this.banner.style.display="block",window.clearTimeout(this.deathTimer),this.deathAnim?.cancel(),this.deathAnim=this.bannerBox.animate([{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"translateY(0)"}],{duration:220,easing:"cubic-bezier(.2,.7,.2,1)",fill:"both"});const t=dr(`${this.bannerTitle.textContent} ${this.bannerQuip.textContent}`,1200);this.deathTimer=window.setTimeout(()=>this.dismissDeathBanner(),t)}dismissDeathBanner(){window.clearTimeout(this.deathTimer),this.banner.style.display!=="none"&&(this.deathAnim?.cancel(),this.deathAnim=this.bannerBox.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-8px)"}],{duration:260,easing:"ease-in",fill:"forwards"}),this.deathTimer=window.setTimeout(()=>this.banner.style.display="none",280))}makeGroup(t,e,n){const s=document.createElement("div");s.style.cssText="display:flex;flex-direction:column;align-items:center;gap:4px;";const a=document.createElement("div");a.style.cssText=`font:700 8px ui-sans-serif,system-ui;letter-spacing:0.14em;text-transform:uppercase;color:${n?"#c98aff":"#7fb0ff"};`,a.textContent=t;const o=document.createElement("div");o.style.cssText="display:flex;gap:6px;";for(const r of e)o.appendChild(this.makeSlot(r,n));return s.append(a,o),s}makeSlot(t,e){const n=e?"rgba(201,138,255,0.7)":kt,s=e?"rgba(201,138,255,0.18)":"rgba(120,200,255,0.16)",a=document.createElement("div");a.className="wn-live wn-hotbar-slot",a.style.cssText=`position:relative;width:48px;height:48px;border:1px solid ${n};border-radius:7px;background:${oe};box-shadow:${Et}, inset 0 0 10px ${s};overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;`;const o=document.createElement("div");o.style.cssText="position:absolute;z-index:5;top:2px;left:4px;font:700 9px ui-monospace,monospace;color:#7fb0cc;",o.textContent=`${t+1}`;const r=document.createElement("div");r.style.cssText="position:relative;z-index:2;width:30px;height:30px;display:grid;place-items:center;opacity:.32;filter:drop-shadow(0 0 4px rgba(160,225,255,.3));";const l=document.createElement("div");l.style.cssText="position:absolute;z-index:4;inset:0;display:grid;place-items:center;padding:0 3px;font:800 8px ui-sans-serif,system-ui;color:#e7f8ff;text-align:center;letter-spacing:.02em;text-shadow:0 1px 3px #02070c,0 0 4px #02070c;pointer-events:none;";const c=document.createElement("div");return c.style.cssText="position:absolute;z-index:3;inset:0;border-radius:inherit;--wn-cooldown-angle:0deg;background:conic-gradient(from -90deg,rgba(4,10,18,.88) 0deg var(--wn-cooldown-angle),transparent var(--wn-cooldown-angle) 360deg);box-shadow:inset 0 0 0 1px rgba(180,230,255,.1);",a.append(r,c,l,o),a.addEventListener("pointerdown",d=>{document.body.classList.contains("wn-touch-active")&&(d.preventDefault(),d.stopPropagation(),a.animate([{transform:"scale(.9)",filter:"brightness(1.35)"},{transform:"scale(1)",filter:"brightness(1)"}],{duration:150,easing:"ease-out"}),this.onAbility?.(t))}),this.slotEls[t]=r,this.slotLabels[t]=l,this.slotCd[t]=c,this.slotFrames[t]=a,a}update(t,e,n){const{world:s,player:a}=this.ctx,o=performance.now(),r=this.lastNow?Math.min(.1,(o-this.lastNow)/1e3):0;this.lastNow=o;const l=s.get(a,z);if(l){const p=Math.max(0,l.current)/l.max,h=`${p*100}%`;h!==this.lastHpWidth&&(this.hpFill.style.width=h,this.lastHpWidth=h);const f=`${Math.max(0,Math.ceil(l.current))} / ${l.max}`;f!==this.lastHpText&&(this.hpText.textContent=f,this.lastHpText=f),this.chipFrac=p>this.chipFrac?p:Math.max(p,this.chipFrac-r*.45);const u=`${this.chipFrac*100}%`;u!==this.lastChipWidth&&(this.hpChip.style.width=u,this.lastChipWidth=u),this.pulseT+=r;const m=Math.max(0,(.4-p)/.4),g=p<.2&&p>0?(Math.sin(this.pulseT*5.5)+1)*.1:0,b=this.ctx.respawn.timer>0?"0":String(Math.min(1,m*.85+g));b!==this.lastVignetteOpacity&&(this.vignette.style.opacity=b,this.lastVignetteOpacity=b)}const c=s.get(a,j);if(c){const p=c.level>=qn,h=p?Pi(c.paragon??0):Nn(c.level),f=p?c.paragonXp??0:c.xp,u=`${Math.min(100,f/h*100)}%`;u!==this.lastXpWidth&&(this.xpFill.style.width=u,this.lastXpWidth=u);const m=`Lv ${c.level}`+((c.paragon??0)>0?` <span style="color:#c98aff" title="Paragon points">◆${c.paragon}</span>`:"")+(c.perkPoints>0?` <span style="color:#ffe08a" title="Unspent perk points — press P">●${c.perkPoints}</span>`:"");m!==this.lastLevelHtml&&(this.levelEl.innerHTML=m,this.lastLevelHtml=m)}this.updateHotbar(),this.panelPoll-=r,this.panelPoll<=0&&(this.panelPoll=.1,this.updateB4B3LQuestPrompt(),this.updateCompanion(),this.updateRoster(),this.updateQuestTracker());const d=this.ctx.respawn.timer>0;d&&!this.wasFallen&&this.showDeathBanner(),this.wasFallen=d,this.updateBossBar(),this.updateJetGauge(t,e,n),this.updateCompanionBar(t,e,n),this.updateEnemyBars(t,e,n)}fadeState=new Map;fade(t,e){let n=this.fadeState.get(t);n||(n={shown:t.style.display!=="none"&&t.style.display!=="",timer:0},t.style.transition="opacity 0.16s ease",this.fadeState.set(t,n)),e!==n.shown&&(n.shown=e,window.clearTimeout(n.timer),e?(t.style.display="block",t.style.opacity="0",requestAnimationFrame(()=>{n.shown&&(t.style.opacity="1")})):(t.style.opacity="0",n.timer=window.setTimeout(()=>{n.shown||(t.style.display="none")},180)))}updateJetGauge(t,e,n){if(this.ctx.cameraRig.isThirdPerson){this.fade(this.jetGauge,!1);return}const{world:s,player:a}=this.ctx,o=s.get(a,nt),r=s.get(a,w);if(!o||!r||this.ctx.respawn.timer>0){this.fade(this.jetGauge,!1);return}const l=s.get(a,Bn)?.fuelMax??ce,c=Math.max(0,Math.min(1,(o.jetFuel??l)/l)),d=o.dodgeCd>.01;if(!cr(o,l)){this.fade(this.jetGauge,!1);return}if(this.tmp.set(r.pos.x,r.pos.y+1.25,r.pos.z).project(t),this.tmp.z>=1){this.fade(this.jetGauge,!1);return}const h=(this.tmp.x*.5+.5)*e,f=(-this.tmp.y*.5+.5)*n;this.jetGauge.style.transform=`translate(28px,-50%) translate(${h}px,${f}px)`,this.jetGauge.style.filter=d&&!o.jetAirborne?"saturate(0.5) brightness(0.8)":"",this.jetGaugeFill.style.height=`${c*100}%`,this.fade(this.jetGauge,!0)}updateB4B3LQuestPrompt(){const t=Vn(this.ctx),e=t!=="none"&&this.ctx.respawn.timer<=0;if(e){const n=t==="ready"?"#5be08a":t==="progress"?"#8fd0ff":"#ffdf6a";this.b4b3lQuestPrompt.style.color=n,this.b4b3lQuestPrompt.style.borderColor=n,this.b4b3lQuestPrompt.style.boxShadow=`0 0 15px ${n}42`}this.fade(this.b4b3lQuestPrompt,e)}updateCompanionBar(t,e,n){const{world:s,player:a}=this.ctx,o=s.get(a,N),r=o?.activeEntity??null;if(r===null||o?.activeIndex==null){this.fade(this.compBar,!1);return}const l=s.get(r,z),c=s.get(r,ct),d=s.get(r,w);if(!l||!d||l.current<=0||c?.downed){this.fade(this.compBar,!1);return}if(this.tmp.set(d.pos.x,d.pos.y+2.4,d.pos.z).project(t),this.tmp.z>=1){this.fade(this.compBar,!1);return}const p=(this.tmp.x*.5+.5)*e,h=(-this.tmp.y*.5+.5)*n;this.compBar.style.transform=`translate(-50%,-50%) translate(${p}px,${h}px)`,this.fade(this.compBar,!0);const f=`${l.current/l.max*100}%`;f!==this.lastCompFillWidth&&(this.compFill.style.width=f,this.lastCompFillWidth=f);const u=`#${M[o.members[o.activeIndex].creatureId].color.toString(16).padStart(6,"0")}`;u!==this.lastCompFillColor&&(this.compFill.style.background=u,this.lastCompFillColor=u)}updateHotbar(){const{world:t,player:e}=this.ctx,n=t.get(e,Bi),s=t.get(e,N),a=t.get(e,mt),o=s?.activeEntity!=null?t.get(s.activeEntity,ct):null;for(let r=0;r<6;r++){const l=n?.slots[r]??null;if(this.slotAbilityIds[r]!==l){this.slotAbilityIds[r]=l,this.slotEls[r].innerHTML=l?ye(l):r<2?"<span>—</span>":"";const p=this.slotEls[r].querySelector(".wn-ability-icon");p&&(p.style.width="30px",p.style.height="30px"),this.slotLabels[r].textContent=l?pr(l):"",this.slotFrames[r].title=l?O(l):r<2?"Empty Mimicry slot":""}let c=0;l&&(c=(r<2?a?.cooldowns[l]??0:o?.cooldowns[l]??0)/(F[l]?.cooldown??1));const d=`${Math.max(0,Math.min(1,c))*360}deg`;d!==this.slotAngles[r]&&(this.slotAngles[r]=d,this.slotCd[r].style.setProperty("--wn-cooldown-angle",d))}}updateCompanion(){const{world:t,player:e}=this.ctx,n=t.get(e,N);let s;if(!n||n.activeIndex===null||n.activeEntity==null)s='<span style="color:#7f93b3">No companion — recruit one with Shift+E</span>';else{const a=n.members[n.activeIndex],o=M[a.creatureId],r=t.get(n.activeEntity,z),l=t.get(n.activeEntity,ct),c=`#${o.color.toString(16).padStart(6,"0")}`,d=r?Math.max(0,r.current)/r.max:0,p=l?.downed?` <span style="color:#ff6a7a">(downed ${Math.ceil(l.downedTimer)}s)</span>`:"";s=`<div style="color:${c}">${o.name}${p}</div><div style="margin-top:7px;height:12px;background:rgba(8,20,32,0.85);border-radius:6px;overflow:hidden;border:1px solid rgba(120,220,255,0.28)">
        <div style="height:100%;width:${d*100}%;background:${c}"></div></div>`}s!==this.lastCompanionHtml&&(this.compFrame.innerHTML=s,this.lastCompanionHtml=s)}updateBossBar(){const{world:t}=this.ctx;let e=null;for(const a of t.iter(Qe,z))if(t.get(a,z).current>0){e=a;break}if(e===null){this.fade(this.bossBar,!1);return}const n=t.get(e,z);this.bossName.textContent=t.get(e,Qe).name;const s=`${Math.max(0,n.current)/n.max*100}%`;s!==this.lastBossWidth&&(this.bossFill.style.width=s,this.lastBossWidth=s),this.fade(this.bossBar,!0)}updateQuestTracker(){const t=this.ctx.world.get(this.ctx.player,K),e=(t?.active??[]).slice(0,3);if(e.length===0){const s=Dn(t?.completed??[],[]);if(!s?.giver){this.questTracker.style.display="none";return}this.setQuestTrackerHtml(`
        <div style="color:#ffe08a;font-weight:800;margin-bottom:4px">Talk to ${s.giver.name}</div>
        <div style="color:#9fe3ff;font-size:12px">${s.storyline.island.name}</div>
        <div style="color:#cfe8f7;font-size:11px;margin-top:2px">${s.stage.name}</div>`),this.questTracker.style.display="block";return}const n=e.map((s,a)=>{const o=$t(s.questId);if(!o)return"";const r=s.readyToTurnIn?Fn(s.questId):void 0,l=o.objectives.map(d=>{const p=Math.min(d.count,s.counters[d.id]??0),h=p>=d.count;return`<div style="display:flex;justify-content:space-between;gap:8px;color:${h?"#7fe0a8":"#cfe8f7"}">
              <span>${h?"✓":"•"} ${d.desc}</span><span style="color:#9fe3ff">${p}/${d.count}</span></div>`}).join(""),c=r?`<div style="margin-top:4px;color:#ffe08a;font-weight:700">Return to ${r}</div>`:"";return`<div style="color:#9fe3ff;font-weight:700;margin:${a>0?"7px":"0"} 0 4px">${o.name}</div>${l}${c}`}).join("");this.setQuestTrackerHtml(n),this.questTracker.style.display="block"}setQuestTrackerHtml(t){t!==this.lastQuestHtml&&(this.questTracker.innerHTML=t,this.lastQuestHtml=t)}updateRoster(){const t=this.ctx.world.get(this.ctx.player,N),e=Hn(this.ctx.world.get(this.ctx.player,j));let n="";for(let s=0;s<e;s++){const a=t?.members[s],o=t?.activeIndex===s,r=a?`#${M[a.creatureId].color.toString(16).padStart(6,"0")}`:"#2b3a52";n+=`<div title="${a?M[a.creatureId].name:"empty"}" style="width:14px;height:14px;border-radius:50%;
        background:${r};border:2px solid ${o?"#fff":"transparent"};opacity:${a?1:.4}"></div>`}n+=t&&t.members.length>1?'<span style="font-size:9px;color:#7f93b3;margin-left:4px">Tab: swap</span>':"",n!==this.lastRosterHtml&&(this.rosterEl.innerHTML=n,this.lastRosterHtml=n)}updateEnemyBars(t,e,n){const{world:s}=this.ctx;let a=0;for(const o of s.iter(w,J,z)){if(s.get(o,J).team!=="enemy")continue;const r=s.get(o,z);if(r.current<=0||r.current>=r.max)continue;const l=s.get(o,w);if(this.tmp.set(l.pos.x,l.pos.y+2.2,l.pos.z).project(t),this.tmp.z>=1)continue;const c=(this.tmp.x*.5+.5)*e,d=(-this.tmp.y*.5+.5)*n,p=a++,h=this.getBar(p);this.fade(h,!0),h.style.transform=`translate(-50%,-50%) translate(${c}px,${d}px)`,h.firstElementChild.style.width=`${r.current/r.max*100}%`;const f=s.get(o,Ri),u=this.enemyLabels[p];f?(h.style.width="64px",h.style.borderColor="#ffcf5a",h.style.boxShadow="0 0 8px rgba(255,200,80,0.6)",u&&(u.textContent=f.name,u.style.display="block",u.style.transform=`translate(-50%,-50%) translate(${c}px,${d-13}px)`)):(h.style.width="46px",h.style.borderColor="rgba(0,0,0,0.6)",h.style.boxShadow="none",u&&(u.style.display="none"))}for(let o=a;o<this.enemyBars.length;o++)this.fade(this.enemyBars[o],!1),this.enemyLabels[o]&&(this.enemyLabels[o].style.display="none")}getBar(t){let e=this.enemyBars[t];if(!e){e=document.createElement("div"),e.style.cssText="position:absolute;left:0;top:0;width:46px;height:5px;border:1px solid rgba(0,0,0,0.6);border-radius:2px;background:rgba(20,10,14,0.8);overflow:hidden;pointer-events:none;";const n=document.createElement("div");n.style.cssText="height:100%;width:100%;background:#ff5b6e;",e.appendChild(n),this.root.appendChild(e),this.enemyBars[t]=e;const s=document.createElement("div");s.style.cssText="position:absolute;left:0;top:0;white-space:nowrap;pointer-events:none;display:none;font:700 10px ui-sans-serif,system-ui;color:#ffd86a;text-shadow:0 1px 3px #000;",this.root.appendChild(s),this.enemyLabels[t]=s}return e}}const U=148,hr=42,ur=.12;class sl{constructor(t,e){this.ctx=e,T(),this.canvas=document.createElement("canvas");const n=Math.min(2,window.devicePixelRatio||1);this.canvas.width=U*n,this.canvas.height=U*n,this.canvas.className="wn-minimap-canvas";const s=document.createElement("div");s.className="wn-minimap wn-live wn-live-glow";const a=document.createElement("style");a.textContent=`
      .wn-minimap{position:fixed;top:12px;right:12px;z-index:14;width:${U}px;height:${U}px;
        border-radius:50%;border:1px solid rgba(120,220,255,0.35);pointer-events:none;
        background:rgba(6,16,26,0.55);box-shadow:0 0 14px rgba(70,190,255,0.2);}
      .wn-minimap-canvas{display:block;width:100%;height:100%;border-radius:50%;
        box-shadow:inset 0 0 20px rgba(0,0,0,0.4);}
    `,document.head.appendChild(a),s.appendChild(this.canvas),t.appendChild(s),this.g=this.canvas.getContext("2d"),this.g&&this.g.scale(n,n)}canvas;g;timer=0;update(t){this.timer-=t,!(this.timer>0)&&(this.timer=ur,this.draw())}draw(){const t=this.g;if(!t)return;const{world:e,player:n}=this.ctx,s=e.get(n,w);if(!s)return;const a=U/2,o=a/hr;t.clearRect(0,0,U,U),t.save(),t.beginPath(),t.arc(a,a,a-1,0,Math.PI*2),t.clip(),t.strokeStyle="rgba(120,220,255,0.12)",t.beginPath(),t.arc(a,a,a*.5,0,Math.PI*2),t.stroke();const r=(d,p,h,f)=>{const u=(d-s.pos.x)*o,m=(p-s.pos.z)*o;Math.hypot(u,m)>a-3||(t.fillStyle=h,t.beginPath(),t.arc(a+u,a+m,f,0,Math.PI*2),t.fill())},l=(d,p,h)=>{if(h==="none")return;let f=(d-s.pos.x)*o,u=(p-s.pos.z)*o;const m=Math.hypot(f,u),g=a-10;m>g&&(f=f/m*g,u=u/m*g);const x=a+f,b=a+u,v=h==="ready",L=h==="available",A=L?"#ffdf6a":v?"#b7ff7a":"#7fd8ff";t.save(),t.shadowColor=A,t.shadowBlur=v?14:9,t.fillStyle="rgba(7,18,30,0.92)",t.strokeStyle=A,t.lineWidth=v?2:1.4,t.beginPath(),t.arc(x,b,v?7:6,0,Math.PI*2),t.fill(),t.stroke(),t.shadowBlur=0,t.fillStyle=A,t.font="bold 11px ui-sans-serif,system-ui,sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(L?"!":"?",x,b+.2),t.restore()},c=(d,p)=>{let h=(d-s.pos.x)*o,f=(p-s.pos.z)*o;const u=Math.hypot(h,f),m=a-10;u>m&&(h=h/u*m,f=f/u*m);const g=a+h,x=a+f;t.save(),t.shadowColor="#ffb347",t.shadowBlur=10,t.fillStyle="rgba(30,14,4,0.92)",t.strokeStyle="#ffb347",t.lineWidth=1.6,t.beginPath(),t.moveTo(g,x-6),t.lineTo(g+6,x),t.lineTo(g,x+6),t.lineTo(g-6,x),t.closePath(),t.fill(),t.stroke(),t.shadowBlur=0,t.fillStyle="#ffb347",t.font="bold 9px ui-sans-serif,system-ui,sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",g,x+.2),t.restore()};for(const d of e.iter($e,w)){const p=e.get(d,w);r(p.pos.x,p.pos.z,"rgba(255,210,63,0.9)",3)}for(const d of e.iter(pt,w)){const p=e.get(d,w);r(p.pos.x,p.pos.z,"rgba(255,210,63,0.55)",2.4)}for(const d of e.iter(G,w)){const p=e.get(d,G),h=Le(this.ctx,p.storylineId,p.npcId),f=e.get(d,w);l(f.pos.x,f.pos.z,h)}for(const d of e.iter(Lt,w)){const p=e.get(d,Lt),h=Gn(this.ctx,p),f=e.get(d,w);l(f.pos.x,f.pos.z,h)}for(const d of e.iter(It,w)){const p=e.get(d,It);if(!p.discovered||p.done)continue;const h=e.get(d,w);c(h.pos.x,h.pos.z)}for(const d of e.iter(de,w,J,z)){if(e.get(d,z).current<=0)continue;const p=e.get(d,w),h=e.get(d,J).team;h==="enemy"?r(p.pos.x,p.pos.z,e.get(d,Me)?"#c98aff":"#ff5f6e",2.2):h==="neutral"&&r(p.pos.x,p.pos.z,"#7fd8ff",2.2)}for(const d of e.iter(ct,w)){if(e.get(d,ct).downed)continue;const p=e.get(d,w);r(p.pos.x,p.pos.z,"#5be08a",2.4)}t.fillStyle="#eafaff",t.save(),t.translate(a,a),t.rotate(Math.PI-s.rotY),t.beginPath(),t.moveTo(0,-4.4),t.lineTo(3.2,3.6),t.lineTo(-3.2,3.6),t.closePath(),t.fill(),t.restore(),t.restore()}}export{_r as A,Gr as B,Ar as C,yr as D,Br as E,Mr as F,Rr as G,nl as H,Er as I,Ur as J,jr as K,ge as L,sl as M,Cr as N,Wo as O,$r as P,Dr as Q,Yi as R,Tr as S,el as T,Zi as U,Or as V,Fr as W,Gi as X,Vi as Y,Vr as Z,Sr as _,R as a,ft as b,be as c,vr as d,Lr as e,br as f,Qt as g,Pt as h,zr as i,xr as j,tl as k,Jr as l,Zr as m,gr as n,Qr as o,Pr as p,Wr as q,kr as r,wr as s,Ir as t,Kr as u,Hr as v,Nr as w,Xr as x,qr as y,Yr as z};
