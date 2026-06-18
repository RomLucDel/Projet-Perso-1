// ═══════════════════════════════════════════
// PRODUCT VISUAL SVGs — représentation exacte de chaque produit
// ═══════════════════════════════════════════
const PRODUCT_IMGS = {

p1: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p1pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6b4226"/><stop offset="40%" stop-color="#a0724a"/><stop offset="70%" stop-color="#c49a6c"/><stop offset="100%" stop-color="#7a5535"/></linearGradient>
  <linearGradient id="p1sb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3a2010"/><stop offset="100%" stop-color="#1e0e06"/></linearGradient>
</defs>
<rect x="38" y="38" width="226" height="142" rx="3" fill="rgba(0,0,0,0.55)"/>
<rect x="32" y="160" width="226" height="14" rx="2" fill="url(#p1sb)"/>
<rect x="258" y="28" width="10" height="134" rx="1" fill="#3a2010"/>
<rect x="32" y="28" width="226" height="134" rx="2" fill="#1a0e06"/>
<rect x="34" y="30" width="222" height="17" rx="1" fill="url(#p1pl)"/><rect x="34" y="49" width="222" height="17" rx="1" fill="url(#p1pl)"/><rect x="34" y="68" width="222" height="17" rx="1" fill="url(#p1pl)"/><rect x="34" y="87" width="222" height="17" rx="1" fill="url(#p1pl)"/><rect x="34" y="106" width="222" height="17" rx="1" fill="url(#p1pl)"/><rect x="34" y="125" width="222" height="17" rx="1" fill="url(#p1pl)"/><rect x="34" y="144" width="222" height="14" rx="1" fill="url(#p1pl)"/>
<line x1="34" y1="47" x2="256" y2="47" stroke="#0f0704" stroke-width="1.5"/><line x1="34" y1="66" x2="256" y2="66" stroke="#0f0704" stroke-width="1.5"/><line x1="34" y1="85" x2="256" y2="85" stroke="#0f0704" stroke-width="1.5"/><line x1="34" y1="104" x2="256" y2="104" stroke="#0f0704" stroke-width="1.5"/><line x1="34" y1="123" x2="256" y2="123" stroke="#0f0704" stroke-width="1.5"/><line x1="34" y1="142" x2="256" y2="142" stroke="#0f0704" stroke-width="1.5"/>
<line x1="72" y1="30" x2="72" y2="47" stroke="rgba(0,0,0,0.25)" stroke-width="1.2"/><line x1="115" y1="49" x2="115" y2="66" stroke="rgba(0,0,0,0.25)" stroke-width="1.2"/><line x1="180" y1="30" x2="180" y2="47" stroke="rgba(0,0,0,0.25)" stroke-width="1.2"/><line x1="210" y1="68" x2="210" y2="85" stroke="rgba(0,0,0,0.25)" stroke-width="1.2"/>
<ellipse cx="95" cy="56" rx="7" ry="5" fill="rgba(0,0,0,0.18)" stroke="rgba(0,0,0,0.1)" stroke-width=".5"/>
<ellipse cx="200" cy="95" rx="5" ry="6" fill="rgba(0,0,0,0.18)"/>
<ellipse cx="140" cy="133" rx="8" ry="4" fill="rgba(0,0,0,0.15)"/>
<rect x="34" y="30" width="222" height="4" fill="rgba(255,255,255,0.05)" rx="1"/>
<rect x="63" y="47" width="28" height="2" fill="#0f0704"/>
<rect x="144" y="47" width="28" height="2" fill="#0f0704"/>
<rect x="224" y="47" width="14" height="2" fill="#0f0704"/>
<rect x="63" y="85" width="28" height="2" fill="#0f0704"/>
<rect x="144" y="85" width="28" height="2" fill="#0f0704"/>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">PALETTE EUR 120×80 · BRUTE DE SCIAGE</text>
</svg>`,

p2: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p2pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8b6540"/><stop offset="45%" stop-color="#d4aa78"/><stop offset="100%" stop-color="#9a7250"/></linearGradient>
  <linearGradient id="p2sb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a3020"/><stop offset="100%" stop-color="#2a1a0e"/></linearGradient>
</defs>
<rect x="38" y="38" width="226" height="142" rx="3" fill="rgba(0,0,0,0.5)"/>
<rect x="32" y="160" width="226" height="14" rx="2" fill="url(#p2sb)"/>
<rect x="258" y="28" width="10" height="134" rx="1" fill="#4a3020"/>
<rect x="32" y="28" width="226" height="134" rx="2" fill="#221508"/>
<rect x="34" y="30" width="222" height="17" rx="1" fill="url(#p2pl)"/><rect x="34" y="49" width="222" height="17" rx="1" fill="url(#p2pl)"/><rect x="34" y="68" width="222" height="17" rx="1" fill="url(#p2pl)"/><rect x="34" y="87" width="222" height="17" rx="1" fill="url(#p2pl)"/><rect x="34" y="106" width="222" height="17" rx="1" fill="url(#p2pl)"/><rect x="34" y="125" width="222" height="17" rx="1" fill="url(#p2pl)"/><rect x="34" y="144" width="222" height="14" rx="1" fill="url(#p2pl)"/>
<line x1="34" y1="47" x2="256" y2="47" stroke="#150d04" stroke-width="1.5"/><line x1="34" y1="66" x2="256" y2="66" stroke="#150d04" stroke-width="1.5"/><line x1="34" y1="85" x2="256" y2="85" stroke="#150d04" stroke-width="1.5"/><line x1="34" y1="104" x2="256" y2="104" stroke="#150d04" stroke-width="1.5"/><line x1="34" y1="123" x2="256" y2="123" stroke="#150d04" stroke-width="1.5"/><line x1="34" y1="142" x2="256" y2="142" stroke="#150d04" stroke-width="1.5"/>
<rect x="34" y="30" width="222" height="5" fill="rgba(255,255,255,0.09)" rx="1"/>
<rect x="34" y="49" width="222" height="3" fill="rgba(255,255,255,0.06)"/>
<rect x="34" y="68" width="222" height="3" fill="rgba(255,255,255,0.06)"/>
<rect x="34" y="87" width="222" height="3" fill="rgba(255,255,255,0.06)"/>
<rect x="63" y="47" width="28" height="2" fill="#150d04"/><rect x="144" y="47" width="28" height="2" fill="#150d04"/><rect x="63" y="85" width="28" height="2" fill="#150d04"/><rect x="144" y="85" width="28" height="2" fill="#150d04"/>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.6)" font-family="monospace" font-size="9" letter-spacing="2">PALETTE EUR · PONCÉE S120</text>
</svg>`,

p3: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#0b0703"/>
<defs>
  <linearGradient id="p3pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#9a6f28"/><stop offset="40%" stop-color="#e8c060"/><stop offset="100%" stop-color="#b08030"/></linearGradient>
  <linearGradient id="p3sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,200,80,0.15)"/><stop offset="100%" stop-color="rgba(255,200,80,0)"/></linearGradient>
</defs>
<rect x="38" y="38" width="226" height="142" rx="3" fill="rgba(0,0,0,0.5)"/>
<rect x="32" y="160" width="226" height="14" rx="2" fill="#5a3e10"/>
<rect x="258" y="28" width="10" height="134" rx="1" fill="#5a3e10"/>
<rect x="32" y="28" width="226" height="134" rx="2" fill="#261800"/>
<rect x="34" y="30" width="222" height="17" rx="1" fill="url(#p3pl)"/><rect x="34" y="49" width="222" height="17" rx="1" fill="url(#p3pl)"/><rect x="34" y="68" width="222" height="17" rx="1" fill="url(#p3pl)"/><rect x="34" y="87" width="222" height="17" rx="1" fill="url(#p3pl)"/><rect x="34" y="106" width="222" height="17" rx="1" fill="url(#p3pl)"/><rect x="34" y="125" width="222" height="17" rx="1" fill="url(#p3pl)"/><rect x="34" y="144" width="222" height="14" rx="1" fill="url(#p3pl)"/>
<rect x="32" y="28" width="226" height="134" rx="2" fill="url(#p3sh)"/>
<line x1="34" y1="47" x2="256" y2="47" stroke="#180f00" stroke-width="1.5"/><line x1="34" y1="66" x2="256" y2="66" stroke="#180f00" stroke-width="1.5"/><line x1="34" y1="85" x2="256" y2="85" stroke="#180f00" stroke-width="1.5"/><line x1="34" y1="104" x2="256" y2="104" stroke="#180f00" stroke-width="1.5"/><line x1="34" y1="123" x2="256" y2="123" stroke="#180f00" stroke-width="1.5"/><line x1="34" y1="142" x2="256" y2="142" stroke="#180f00" stroke-width="1.5"/>
<rect x="34" y="30" width="222" height="6" fill="rgba(255,230,120,0.12)" rx="1"/>
<rect x="34" y="49" width="222" height="4" fill="rgba(255,230,120,0.08)"/>
<rect x="34" y="68" width="222" height="4" fill="rgba(255,230,120,0.08)"/>
<text x="150" y="192" text-anchor="middle" fill="rgba(232,201,80,0.7)" font-family="monospace" font-size="9" letter-spacing="2">PALETTE TEINTÉE · CHÊNE CLAIR · HUILÉE</text>
</svg>`,

p4: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p4pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6b4226"/><stop offset="60%" stop-color="#a07040"/><stop offset="100%" stop-color="#7a5535"/></linearGradient>
</defs>
<!-- planks scattered -->
<g transform="rotate(-8,150,100)"><rect x="20" y="55" width="200" height="18" rx="2" fill="url(#p4pl)"/><line x1="60" y1="55" x2="60" y2="73" stroke="rgba(0,0,0,0.2)" stroke-width="1"/><line x1="110" y1="55" x2="110" y2="73" stroke="rgba(0,0,0,0.2)" stroke-width="1"/><line x1="160" y1="55" x2="160" y2="73" stroke="rgba(0,0,0,0.2)" stroke-width="1"/></g>
<g transform="rotate(5,150,100)"><rect x="30" y="85" width="200" height="18" rx="2" fill="url(#p4pl)"/><line x1="80" y1="85" x2="80" y2="103" stroke="rgba(0,0,0,0.2)" stroke-width="1"/><line x1="140" y1="85" x2="140" y2="103" stroke="rgba(0,0,0,0.2)" stroke-width="1"/></g>
<g transform="rotate(-3,150,100)"><rect x="50" y="112" width="200" height="18" rx="2" fill="url(#p4pl)"/></g>
<g transform="rotate(12,150,100)"><rect x="10" y="25" width="200" height="18" rx="2" fill="url(#p4pl)"/><line x1="70" y1="25" x2="70" y2="43" stroke="rgba(0,0,0,0.2)" stroke-width="1"/></g>
<g transform="rotate(-15,150,100)"><rect x="80" y="138" width="200" height="18" rx="2" fill="url(#p4pl)"/></g>
<!-- nails/screws -->
<circle cx="85" cy="75" r="3" fill="#c8873a" opacity=".8"/><circle cx="170" cy="92" r="3" fill="#c8873a" opacity=".8"/><circle cx="120" cy="58" r="2.5" fill="#c8873a" opacity=".7"/>
<circle cx="85" cy="75" r="1" fill="#fff" opacity=".4"/><circle cx="170" cy="92" r="1" fill="#fff" opacity=".4"/>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">KIT DÉMONTÉE · ~20 PLANCHES · DÉPOINTÉES</text>
</svg>`,

p5: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p5pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6b4226"/><stop offset="50%" stop-color="#a07040"/><stop offset="100%" stop-color="#7a5535"/></linearGradient>
</defs>
<rect x="60" y="38" width="4" height="142" rx="1" fill="rgba(0,0,0,0.4)"/>
<rect x="164" y="42" width="4" height="142" rx="1" fill="rgba(0,0,0,0.3)"/>
<rect x="60" y="162" width="116" height="14" rx="2" fill="#3a2010"/>
<rect x="168" y="28" width="8" height="134" rx="1" fill="#3a2010"/>
<rect x="60" y="28" width="108" height="134" rx="2" fill="#1a0e06"/>
<rect x="62" y="30" width="104" height="17" rx="1" fill="url(#p5pl)"/><rect x="62" y="49" width="104" height="17" rx="1" fill="url(#p5pl)"/><rect x="62" y="68" width="104" height="17" rx="1" fill="url(#p5pl)"/><rect x="62" y="87" width="104" height="17" rx="1" fill="url(#p5pl)"/><rect x="62" y="106" width="104" height="17" rx="1" fill="url(#p5pl)"/><rect x="62" y="125" width="104" height="17" rx="1" fill="url(#p5pl)"/><rect x="62" y="144" width="104" height="14" rx="1" fill="url(#p5pl)"/>
<line x1="62" y1="47" x2="166" y2="47" stroke="#0f0704" stroke-width="1.5"/><line x1="62" y1="66" x2="166" y2="66" stroke="#0f0704" stroke-width="1.5"/><line x1="62" y1="85" x2="166" y2="85" stroke="#0f0704" stroke-width="1.5"/><line x1="62" y1="104" x2="166" y2="104" stroke="#0f0704" stroke-width="1.5"/><line x1="62" y1="123" x2="166" y2="123" stroke="#0f0704" stroke-width="1.5"/><line x1="62" y1="142" x2="166" y2="142" stroke="#0f0704" stroke-width="1.5"/>
<!-- saw cut line on the right -->
<line x1="168" y1="28" x2="168" y2="162" stroke="#e8c98a" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="175" y1="28" x2="175" y2="162" stroke="rgba(232,201,138,0.2)" stroke-width="1" stroke-dasharray="3 4"/>
<!-- saw dust -->
<circle cx="180" cy="90" r="2" fill="rgba(200,135,58,0.4)"/><circle cx="183" cy="100" r="1.5" fill="rgba(200,135,58,0.3)"/><circle cx="178" cy="110" r="1" fill="rgba(200,135,58,0.3)"/>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">DEMI-PALETTE EUR · 40×80 · SECTIONNÉE</text>
</svg>`,

p6: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p6pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6b4226"/><stop offset="50%" stop-color="#a07040"/><stop offset="100%" stop-color="#7a5535"/></linearGradient>
</defs>
<!-- 5 stacked palettes showing depth -->
<!-- palette 5 (bottom) -->
<rect x="35" y="148" width="222" height="24" rx="2" fill="#1a0e06"/><rect x="37" y="150" width="218" height="18" rx="1" fill="url(#p6pl)" opacity=".7"/><line x1="37" y1="160" x2="255" y2="160" stroke="#0f0704" stroke-width="1.2" opacity=".7"/>
<!-- palette 4 -->
<rect x="35" y="122" width="222" height="24" rx="2" fill="#1a0e06"/><rect x="37" y="124" width="218" height="18" rx="1" fill="url(#p6pl)" opacity=".78"/><line x1="37" y1="134" x2="255" y2="134" stroke="#0f0704" stroke-width="1.2" opacity=".78"/>
<!-- palette 3 -->
<rect x="35" y="96" width="222" height="24" rx="2" fill="#1a0e06"/><rect x="37" y="98" width="218" height="18" rx="1" fill="url(#p6pl)" opacity=".86"/><line x1="37" y1="108" x2="255" y2="108" stroke="#0f0704" stroke-width="1.2"/>
<!-- palette 2 -->
<rect x="35" y="68" width="222" height="26" rx="2" fill="#1a0e06"/><rect x="37" y="70" width="218" height="20" rx="1" fill="url(#p6pl)" opacity=".92"/><line x1="37" y1="82" x2="255" y2="82" stroke="#0f0704" stroke-width="1.5"/>
<!-- palette 1 (top - most detailed) -->
<rect x="35" y="36" width="222" height="30" rx="2" fill="#1a0e06"/>
<rect x="37" y="38" width="218" height="23" rx="1" fill="url(#p6pl)"/>
<line x1="37" y1="52" x2="255" y2="52" stroke="#0f0704" stroke-width="1.5"/>
<line x1="37" y1="61" x2="255" y2="61" stroke="#0f0704" stroke-width="1"/>
<rect x="37" y="38" width="218" height="5" fill="rgba(255,255,255,0.08)" rx="1"/>
<ellipse cx="100" cy="48" rx="6" ry="4" fill="rgba(0,0,0,0.2)"/>
<!-- count badge -->
<rect x="244" y="15" width="40" height="22" rx="11" fill="#c8873a"/>
<text x="264" y="30" text-anchor="middle" fill="#fff" font-family="monospace" font-size="11" font-weight="bold">×5</text>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">PACK 5 PALETTES EUR · BRUTES ASSORTIES</text>
</svg>`,

p7: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p7pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#5a3820"/><stop offset="25%" stop-color="#9a6e42"/><stop offset="75%" stop-color="#b08452"/><stop offset="100%" stop-color="#6a4830"/></linearGradient>
  <linearGradient id="p7eg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#c49a6c"/><stop offset="100%" stop-color="#8b6040"/></linearGradient>
</defs>
<rect x="28" y="92" width="248" height="14" rx="1" fill="rgba(0,0,0,0.4)"/>
<!-- shadow under plank -->
<rect x="22" y="93" width="258" height="46" rx="4" fill="rgba(0,0,0,0.5)"/>
<!-- plank body -->
<rect x="22" y="72" width="258" height="46" rx="3" fill="url(#p7pl)"/>
<!-- top highlight -->
<rect x="22" y="72" width="258" height="8" rx="3" fill="rgba(255,255,255,0.06)"/>
<!-- grain lines -->
<line x1="22" y1="82" x2="280" y2="82" stroke="rgba(0,0,0,0.18)" stroke-width="1"/><line x1="22" y1="89" x2="280" y2="89" stroke="rgba(0,0,0,0.12)" stroke-width="1"/><line x1="22" y1="96" x2="280" y2="96" stroke="rgba(0,0,0,0.15)" stroke-width="1"/><line x1="22" y1="103" x2="280" y2="103" stroke="rgba(0,0,0,0.12)" stroke-width="1"/><line x1="22" y1="109" x2="280" y2="109" stroke="rgba(0,0,0,0.1)" stroke-width="1"/>
<!-- knots -->
<ellipse cx="80" cy="91" rx="8" ry="6" fill="rgba(0,0,0,0.22)" stroke="rgba(0,0,0,0.1)" stroke-width=".5"/>
<ellipse cx="200" cy="97" rx="6" ry="8" fill="rgba(0,0,0,0.18)"/>
<!-- end grain (left) -->
<rect x="22" y="72" width="12" height="46" rx="2" fill="url(#p7eg)"/>
<line x1="28" y1="72" x2="28" y2="118" stroke="rgba(0,0,0,0.2)" stroke-width=".8"/>
<!-- dimension annotation -->
<line x1="22" y1="65" x2="280" y2="65" stroke="rgba(200,135,58,0.4)" stroke-width=".8"/>
<line x1="22" y1="62" x2="22" y2="68" stroke="rgba(200,135,58,0.4)" stroke-width=".8"/>
<line x1="280" y1="62" x2="280" y2="68" stroke="rgba(200,135,58,0.4)" stroke-width=".8"/>
<text x="151" y="62" text-anchor="middle" fill="rgba(200,135,58,0.6)" font-family="monospace" font-size="8">120 cm</text>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">PLANCHE BRUTE · 120×14×2.2 CM</text>
</svg>`,

p8: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p8pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7a5535"/><stop offset="30%" stop-color="#c8aa70"/><stop offset="70%" stop-color="#e0c080"/><stop offset="100%" stop-color="#9a7448"/></linearGradient>
  <linearGradient id="p8eg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e8c98a"/><stop offset="100%" stop-color="#b08040"/></linearGradient>
</defs>
<rect x="28" y="94" width="248" height="12" rx="1" fill="rgba(0,0,0,0.35)"/>
<rect x="22" y="73" width="258" height="46" rx="3" fill="url(#p8pl)"/>
<!-- smooth highlight — wider, more uniform -->
<rect x="22" y="73" width="258" height="12" rx="3" fill="rgba(255,255,255,0.12)"/>
<rect x="22" y="73" width="258" height="24" rx="3" fill="rgba(255,255,255,0.04)"/>
<!-- very subtle grain (sanded) -->
<line x1="22" y1="84" x2="280" y2="84" stroke="rgba(255,255,255,0.06)" stroke-width=".6"/><line x1="22" y1="93" x2="280" y2="93" stroke="rgba(255,255,255,0.05)" stroke-width=".6"/><line x1="22" y1="102" x2="280" y2="102" stroke="rgba(255,255,255,0.04)" stroke-width=".6"/><line x1="22" y1="110" x2="280" y2="110" stroke="rgba(255,255,255,0.03)" stroke-width=".6"/>
<!-- end grain left -->
<rect x="22" y="73" width="12" height="46" rx="2" fill="url(#p8eg)"/>
<!-- "S120" label on plank -->
<text x="180" y="100" text-anchor="middle" fill="rgba(120,80,40,0.4)" font-family="monospace" font-size="20" font-weight="bold" letter-spacing="2">S120</text>
<!-- dimension -->
<line x1="22" y1="65" x2="280" y2="65" stroke="rgba(200,135,58,0.4)" stroke-width=".8"/>
<line x1="22" y1="62" x2="22" y2="68" stroke="rgba(200,135,58,0.4)" stroke-width=".8"/>
<line x1="280" y1="62" x2="280" y2="68" stroke="rgba(200,135,58,0.4)" stroke-width=".8"/>
<text x="151" y="62" text-anchor="middle" fill="rgba(200,135,58,0.6)" font-family="monospace" font-size="8">120 cm</text>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.6)" font-family="monospace" font-size="9" letter-spacing="2">PLANCHE RABOTÉE · 120×14 · PRÊTE À L'EMPLOI</text>
</svg>`,

p9: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p9eg" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#d4aa78"/><stop offset="100%" stop-color="#9a7248"/></linearGradient>
</defs>
<rect x="28" y="70" width="248" height="50" rx="1" fill="rgba(0,0,0,0.35)"/>
<!-- plank painted in a warm grey/sage - showing COLOR options -->
<!-- main plank painted RAL 7030 (stone grey) -->
<rect x="22" y="68" width="258" height="50" rx="3" fill="#7a8070"/>
<rect x="22" y="68" width="258" height="10" rx="3" fill="rgba(255,255,255,0.1)"/>
<!-- end grain showing raw wood underneath -->
<rect x="22" y="68" width="14" height="50" rx="2" fill="url(#p9eg)"/>
<!-- paint stroke texture -->
<line x1="36" y1="72" x2="280" y2="72" stroke="rgba(255,255,255,0.08)" stroke-width="2"/><line x1="36" y1="80" x2="280" y2="80" stroke="rgba(255,255,255,0.05)" stroke-width="1.5"/><line x1="36" y1="88" x2="280" y2="88" stroke="rgba(255,255,255,0.04)" stroke-width="1"/><line x1="36" y1="96" x2="280" y2="96" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
<!-- Color swatches at the bottom -->
<text x="60" y="145" fill="rgba(200,135,58,0.7)" font-family="monospace" font-size="8">COLORIS DISPONIBLES :</text>
<rect x="60" y="152" width="18" height="18" rx="3" fill="#7a8070"/><!-- gris pierre -->
<rect x="82" y="152" width="18" height="18" rx="3" fill="#4a6050"/><!-- vert forêt -->
<rect x="104" y="152" width="18" height="18" rx="3" fill="#8b5e3c"/><!-- chêne brut -->
<rect x="126" y="152" width="18" height="18" rx="3" fill="#2a2a2a"/><!-- anthracite -->
<rect x="148" y="152" width="18" height="18" rx="3" fill="#c8873a"/><!-- ambre -->
<rect x="170" y="152" width="18" height="18" rx="3" fill="#6a3a2a"/><!-- terracotta -->
<rect x="192" y="152" width="18" height="18" rx="3" fill="#b8b0a0"/><!-- lin -->
<rect x="214" y="152" width="18" height="18" rx="3" fill="#1a3a5a"/><!-- bleu nuit -->
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">PLANCHE PEINTE · COULEUR AU CHOIX · MAT</text>
</svg>`,

p10: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p10pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6b4226"/><stop offset="50%" stop-color="#a07040"/><stop offset="100%" stop-color="#7a5535"/></linearGradient>
</defs>
<!-- stacked planks from side angle -->
<rect x="26" y="158" width="252" height="12" rx="2" fill="rgba(0,0,0,0.4)"/>
<!-- plank 10 (bottom) -->
<rect x="26" y="148" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".6"/>
<!-- plank 9 --> <rect x="26" y="136" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".65"/>
<!-- plank 8 --> <rect x="26" y="124" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".7"/>
<!-- plank 7 --> <rect x="26" y="112" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".75"/>
<!-- plank 6 --> <rect x="26" y="100" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".8"/>
<!-- plank 5 --> <rect x="26" y="88" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".85"/>
<!-- plank 4 --> <rect x="26" y="76" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".9"/>
<!-- plank 3 --> <rect x="26" y="64" width="252" height="12" rx="1" fill="url(#p10pl)" opacity=".95"/>
<!-- plank 2 --> <rect x="26" y="52" width="252" height="12" rx="1" fill="url(#p10pl)"/>
<!-- plank 1 (top, most detailed) -->
<rect x="26" y="40" width="252" height="12" rx="1" fill="url(#p10pl)"/>
<rect x="26" y="40" width="252" height="4" fill="rgba(255,255,255,0.08)" rx="1"/>
<line x1="70" y1="40" x2="70" y2="52" stroke="rgba(0,0,0,0.2)" stroke-width=".8"/>
<ellipse cx="140" cy="46" rx="7" ry="4" fill="rgba(0,0,0,0.18)"/>
<!-- binding straps -->
<rect x="78" y="36" width="6" height="132" rx="2" fill="#c8873a" opacity=".8"/>
<rect x="78" y="36" width="6" height="132" rx="2" fill="rgba(255,255,255,0.1)"/>
<rect x="216" y="36" width="6" height="132" rx="2" fill="#c8873a" opacity=".8"/>
<!-- count -->
<rect x="248" y="18" width="38" height="22" rx="11" fill="#c8873a"/>
<text x="267" y="33" text-anchor="middle" fill="#fff" font-family="monospace" font-size="11" font-weight="bold">×10</text>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">LOT 10 PLANCHES BRUTES · 120 CM · QUALITÉ A</text>
</svg>`,

p11: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p11pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8b6540"/><stop offset="45%" stop-color="#d4aa78"/><stop offset="100%" stop-color="#9a7450"/></linearGradient>
</defs>
<rect x="26" y="158" width="252" height="12" rx="2" fill="rgba(0,0,0,0.35)"/>
<rect x="26" y="148" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".6"/>
<rect x="26" y="136" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".65"/>
<rect x="26" y="124" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".7"/>
<rect x="26" y="112" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".75"/>
<rect x="26" y="100" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".8"/>
<rect x="26" y="88" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".85"/>
<rect x="26" y="76" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".9"/>
<rect x="26" y="64" width="252" height="12" rx="1" fill="url(#p11pl)" opacity=".95"/>
<rect x="26" y="52" width="252" height="12" rx="1" fill="url(#p11pl)"/>
<rect x="26" y="40" width="252" height="12" rx="1" fill="url(#p11pl)"/>
<rect x="26" y="40" width="252" height="5" fill="rgba(255,255,255,0.1)" rx="1"/>
<rect x="26" y="52" width="252" height="3" fill="rgba(255,255,255,0.07)"/>
<rect x="26" y="64" width="252" height="3" fill="rgba(255,255,255,0.06)"/>
<!-- amber binding straps (rabotées = premium) -->
<rect x="78" y="36" width="7" height="132" rx="3" fill="#e8c98a" opacity=".9"/>
<rect x="78" y="36" width="7" height="132" rx="3" fill="rgba(255,255,255,0.2)"/>
<rect x="216" y="36" width="7" height="132" rx="3" fill="#e8c98a" opacity=".9"/>
<rect x="216" y="36" width="7" height="132" rx="3" fill="rgba(255,255,255,0.2)"/>
<rect x="248" y="18" width="38" height="22" rx="11" fill="#c8873a"/>
<text x="267" y="33" text-anchor="middle" fill="#fff" font-family="monospace" font-size="11" font-weight="bold">×10</text>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.6)" font-family="monospace" font-size="9" letter-spacing="2">LOT 10 PLANCHES RABOTÉES · S120 · CALIBRÉES</text>
</svg>`,

p12: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p12pl" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8b6540"/><stop offset="50%" stop-color="#c8aa70"/><stop offset="100%" stop-color="#9a7448"/></linearGradient>
  <filter id="p12glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect x="28" y="75" width="248" height="48" rx="1" fill="rgba(0,0,0,0.35)"/>
<rect x="22" y="72" width="258" height="48" rx="3" fill="url(#p12pl)"/>
<rect x="22" y="72" width="258" height="8" rx="3" fill="rgba(255,255,255,0.09)"/>
<line x1="22" y1="83" x2="280" y2="83" stroke="rgba(0,0,0,0.1)" stroke-width=".8"/>
<line x1="22" y1="93" x2="280" y2="93" stroke="rgba(0,0,0,0.08)" stroke-width=".8"/>
<line x1="22" y1="103" x2="280" y2="103" stroke="rgba(0,0,0,0.08)" stroke-width=".8"/>
<line x1="22" y1="112" x2="280" y2="112" stroke="rgba(0,0,0,0.07)" stroke-width=".8"/>
<rect x="22" y="72" width="10" height="48" rx="2" fill="#d4aa70"/>
<!-- laser engraving - glowing amber marks -->
<g filter="url(#p12glow)" opacity=".85">
<!-- ornate geometric motif: central diamond -->
<polygon points="150,80 175,92 150,104 125,92" fill="none" stroke="#c8873a" stroke-width="1.5"/>
<!-- inner diamond -->
<polygon points="150,84 168,92 150,100 132,92" fill="none" stroke="#e8c98a" stroke-width=".8"/>
<!-- corner flourishes -->
<path d="M125,92 L110,85 M125,92 L110,99" stroke="#c8873a" stroke-width="1" fill="none"/>
<path d="M175,92 L190,85 M175,92 L190,99" stroke="#c8873a" stroke-width="1" fill="none"/>
<!-- text engraving -->
<text x="150" y="95" text-anchor="middle" fill="#e8c98a" font-family="serif" font-size="8" letter-spacing="4" opacity=".8">PaletteCraft</text>
<!-- dots pattern -->
<circle cx="120" cy="82" r="1.5" fill="#c8873a"/><circle cx="120" cy="102" r="1.5" fill="#c8873a"/>
<circle cx="180" cy="82" r="1.5" fill="#c8873a"/><circle cx="180" cy="102" r="1.5" fill="#c8873a"/>
<!-- horizontal lines -->
<line x1="54" y1="87" x2="118" y2="87" stroke="#c8873a" stroke-width=".8" opacity=".6"/>
<line x1="54" y1="92" x2="118" y2="92" stroke="#c8873a" stroke-width=".5" opacity=".4"/>
<line x1="54" y1="97" x2="118" y2="97" stroke="#c8873a" stroke-width=".8" opacity=".6"/>
<line x1="182" y1="87" x2="246" y2="87" stroke="#c8873a" stroke-width=".8" opacity=".6"/>
<line x1="182" y1="92" x2="246" y2="92" stroke="#c8873a" stroke-width=".5" opacity=".4"/>
<line x1="182" y1="97" x2="246" y2="97" stroke="#c8873a" stroke-width=".8" opacity=".6"/>
</g>
<!-- laser icon top right -->
<text x="266" y="22" fill="rgba(200,135,58,0.7)" font-family="monospace" font-size="9">⚡ LASER CO₂</text>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.6)" font-family="monospace" font-size="9" letter-spacing="2">GRAVURE LASER · MOTIF AU CHOIX · PERSONNALISÉ</text>
</svg>`,

p13: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%">
<rect width="300" height="200" fill="#090604"/>
<defs>
  <linearGradient id="p13a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6b4226"/><stop offset="100%" stop-color="#a07040"/></linearGradient>
  <linearGradient id="p13b" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8b6540"/><stop offset="100%" stop-color="#c8aa70"/></linearGradient>
  <linearGradient id="p13c" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#9a6f28"/><stop offset="100%" stop-color="#e8c060"/></linearGradient>
</defs>
<!-- various planks/pieces at different angles — "custom lot" -->
<!-- long plank diagonal -->
<g transform="rotate(-6,150,100)"><rect x="10" y="50" width="195" height="14" rx="2" fill="url(#p13a)"/><line x1="10" y1="59" x2="205" y2="59" stroke="rgba(0,0,0,0.15)" stroke-width="1"/></g>
<!-- medium plank -->
<g transform="rotate(4,150,100)"><rect x="60" y="82" width="140" height="14" rx="2" fill="url(#p13b)"/></g>
<!-- short piece -->
<g transform="rotate(-10,150,100)"><rect x="20" y="115" width="80" height="14" rx="2" fill="url(#p13a)"/></g>
<!-- another piece -->
<g transform="rotate(8,150,100)"><rect x="120" y="110" width="110" height="14" rx="2" fill="url(#p13c)"/></g>
<!-- golden piece different size -->
<g transform="rotate(-3,150,100)"><rect x="180" y="55" width="105" height="20" rx="2" fill="url(#p13c)"/></g>
<!-- measuring tape -->
<rect x="220" y="130" width="55" height="14" rx="7" fill="#e8c98a" opacity=".9"/>
<line x1="228" y1="137" x2="268" y2="137" stroke="rgba(0,0,0,0.4)" stroke-width=".6"/>
<line x1="230" y1="133" x2="230" y2="141" stroke="rgba(0,0,0,0.4)" stroke-width=".6"/>
<line x1="238" y1="134" x2="238" y2="140" stroke="rgba(0,0,0,0.3)" stroke-width=".5"/>
<line x1="246" y1="133" x2="246" y2="141" stroke="rgba(0,0,0,0.4)" stroke-width=".6"/>
<line x1="254" y1="134" x2="254" y2="140" stroke="rgba(0,0,0,0.3)" stroke-width=".5"/>
<line x1="262" y1="133" x2="262" y2="141" stroke="rgba(0,0,0,0.4)" stroke-width=".6"/>
<!-- pencil -->
<g transform="rotate(-30,50,150)"><rect x="20" y="148" width="55" height="7" rx="1" fill="#e8c98a"/><polygon points="20,148 20,155 10,151.5" fill="#c8873a"/><rect x="68" y="149" width="8" height="5" rx=".5" fill="#f4a0a0"/></g>
<!-- "DEVIS" stamp -->
<rect x="105" y="22" width="90" height="30" rx="4" fill="none" stroke="#c8873a" stroke-width="1.5" stroke-dasharray="4 2"/>
<text x="150" y="34" text-anchor="middle" fill="#c8873a" font-family="monospace" font-size="9" font-weight="bold" letter-spacing="3">SUR DEVIS</text>
<text x="150" y="46" text-anchor="middle" fill="rgba(200,135,58,0.6)" font-family="monospace" font-size="7">RÉPONSE SOUS 24H</text>
<text x="150" y="192" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="monospace" font-size="9" letter-spacing="2">LOT PERSONNALISÉ · CÔTES LIBRES · FINITION LIBRE</text>
</svg>`,
};

// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════
const PRODUCTS = [
  { id:'p1', cat:'palette', emoji:'🪵', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=600&h=400&fit=crop&q=80',
    name:'Palette complète brute', desc:'Palette standard EUR 80×120 cm, non traitée, idéale pour projet DIY extérieur/intérieur. Bois pin ou épicéa.',
    variants:['80×120 cm','EUR norme'], price:12, unit:'/ unité' },
  { id:'p2', cat:'palette', emoji:'🪵', badge:'Populaire', badgeCls:'green',
    photo:'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=400&fit=crop&q=80',
    name:'Palette complète rabotée', desc:'Palette EUR poncée fine, prête à peindre ou vernir. Idéale mobilier intérieur. Finition douce.',
    variants:['80×120 cm','Poncée S120'], price:18, unit:'/ unité' },
  { id:'p3', cat:'palette', emoji:'🎨', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80',
    name:'Palette teintée & huilée', desc:'Palette EUR avec traitement huile-cire, couleur naturelle chêne clair. Résistante, prête à l\'emploi.',
    variants:['80×120 cm','Chêne clair'], price:26, unit:'/ unité' },
  { id:'p4', cat:'kit', emoji:'📦', badge:'Éco', badgeCls:'green',
    photo:'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&h=400&fit=crop&q=80',
    name:'Palette en kit (démontée)', desc:'Palette démontée planche par planche, triée et dépointée. Idéale transport & projets créatifs.',
    variants:['~20 planches','Dépointées'], price:8, unit:'/ kit' },
  { id:'p5', cat:'kit', emoji:'📦', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1592585354000-21cba9d8fbbb?w=600&h=400&fit=crop&q=80',
    name:'Demi-palette brute', desc:'Moitié de palette EUR, déjà sectionnée proprement. Parfaite pour petits projets ou tests.',
    variants:['40×120 cm'], price:6, unit:'/ unité' },
  { id:'p6', cat:'kit', emoji:'📦', badge:'Pack', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1531493731738-bd0ad0a4d553?w=600&h=400&fit=crop&q=80',
    name:'Pack 5 palettes brutes', desc:'Lot de 5 palettes brutes assorties, bon état, idéal pour grande production DIY ou revente locale.',
    variants:['5 unités','Assorties'], price:48, unit:'/ lot' },
  { id:'p7', cat:'planche', emoji:'📏', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1587620901003-4a4b14e4b8b6?w=600&h=400&fit=crop&q=80',
    name:'Planche brute 120 cm', desc:'Planche de palette 120×14×2,2 cm, brute de sciage. Lot ou unité. Idéale tasseaux, clattes, supports.',
    variants:['120×14 cm','Brute'], price:2, unit:'/ unité' },
  { id:'p8', cat:'planche', emoji:'📏', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?w=600&h=400&fit=crop&q=80',
    name:'Planche rabotée 120 cm', desc:'Planche poncée fine, épaisseur régulière, prête à coller ou peindre. Qualité ébénisterie légère.',
    variants:['120×14 cm','Rabotée'], price:3.50, unit:'/ unité' },
  { id:'p9', cat:'planche', emoji:'🎨', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1579203785209-4dc3ec2d1dde?w=600&h=400&fit=crop&q=80',
    name:'Planche peinte couleur', desc:'Planche rabotée peinte en finition mate. Couleur au choix (RAL disponibles). Parfaite pour déco.',
    variants:['Couleur au choix','Finition mate'], price:4.50, unit:'/ unité' },
  { id:'p10', cat:'planche', emoji:'📦', badge:'Éco', badgeCls:'green',
    photo:'https://images.unsplash.com/photo-1613490900233-141c5560d75d?w=600&h=400&fit=crop&q=80',
    name:'Lot 10 planches brutes', desc:'Pack de 10 planches brutes 120 cm. Tri qualité A. Économique pour projet de moyenne envergure.',
    variants:['10 planches','120 cm'], price:15, unit:'/ lot' },
  { id:'p11', cat:'planche', emoji:'📦', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&q=80',
    name:'Lot 10 planches rabotées', desc:'Pack de 10 planches poncées 120 cm. Épaisseur calibrée. Excellent rapport qualité/prix.',
    variants:['10 planches','Rabotées'], price:28, unit:'/ lot' },
  { id:'p12', cat:'perso', emoji:'✏️', badge:'Sur mesure', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1615209853186-e4bd96d977ee?w=600&h=400&fit=crop&q=80',
    name:'Planche gravée laser', desc:'Gravure de texte, logo ou motif sur planche rabotée. Personnalisation client sur devis. Cadeau idéal.',
    variants:['Motif au choix','Laser CO₂'], price:6, unit:'/ unité' },
  { id:'p13', cat:'perso', emoji:'🎨', badge:'', badgeCls:'',
    photo:'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=400&fit=crop&q=80',
    name:'Lot personnalisé sur devis', desc:'Palettes ou planches coupées, teintées, gravées selon vos côtes. Devis sous 24h, livraison Besançon.',
    variants:['Côtes libres','Finition libre'], price:0, unit:'sur devis' },
];

// ─── Blueprint SVGs ───────────────────────────
function tableSVG() {
  return `<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:250px">
  <defs>
    <pattern id="tgrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0L0 0 0 20" fill="none" stroke="rgba(200,135,58,0.07)" stroke-width=".5"/>
    </pattern>
    <pattern id="tgrid2" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#tgrid)"/>
      <path d="M100 0L0 0 0 100" fill="none" stroke="rgba(200,135,58,0.18)" stroke-width="1"/>
    </pattern>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0 1L6 4L0 7z" fill="#e8c98a"/>
    </marker>
    <marker id="arrR" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto-start-reverse">
      <path d="M0 1L6 4L0 7z" fill="#e8c98a"/>
    </marker>
  </defs>
  <rect width="540" height="290" fill="url(#tgrid2)"/>

  <!-- Title -->
  <text x="270" y="16" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="9" letter-spacing="3">TABLE BASSE PALETTE — PaletteCraft25</text>

  <!-- === VUE DESSUS === -->
  <text x="130" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8" letter-spacing="1">VUE DESSUS</text>

  <!-- Outer frame -->
  <rect class="draw-el" x="30" y="40" width="200" height="125" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <!-- Palette 1 planks -->
  <line class="draw-el" x1="30" y1="57" x2="230" y2="57" stroke="rgba(200,135,58,0.45)" stroke-width=".9" stroke-dasharray="4 2"/>
  <line class="draw-el" x1="30" y1="74" x2="230" y2="74" stroke="rgba(200,135,58,0.45)" stroke-width=".9" stroke-dasharray="4 2"/>
  <line class="draw-el" x1="30" y1="91" x2="230" y2="91" stroke="rgba(200,135,58,0.45)" stroke-width=".9" stroke-dasharray="4 2"/>
  <!-- Palette 2 separator -->
  <line class="draw-el" x1="30" y1="102" x2="230" y2="102" stroke="#c8873a" stroke-width="1.5"/>
  <line class="draw-el" x1="30" y1="119" x2="230" y2="119" stroke="rgba(200,135,58,0.45)" stroke-width=".9" stroke-dasharray="4 2"/>
  <line class="draw-el" x1="30" y1="136" x2="230" y2="136" stroke="rgba(200,135,58,0.45)" stroke-width=".9" stroke-dasharray="4 2"/>
  <!-- Casters -->
  <circle class="draw-el" cx="42" cy="52" r="8" stroke="#e8c98a" stroke-width="1.2"/>
  <circle class="draw-el" cx="218" cy="52" r="8" stroke="#e8c98a" stroke-width="1.2"/>
  <circle class="draw-el" cx="42" cy="153" r="8" stroke="#e8c98a" stroke-width="1.2"/>
  <circle class="draw-el" cx="218" cy="153" r="8" stroke="#e8c98a" stroke-width="1.2"/>
  <line class="draw-el" x1="36" y1="46" x2="48" y2="58" stroke="#e8c98a" stroke-width=".8"/>
  <line class="draw-el" x1="36" y1="58" x2="48" y2="46" stroke="#e8c98a" stroke-width=".8"/>

  <!-- Dim: width -->
  <line x1="30" y1="175" x2="230" y2="175" stroke="#e8c98a" stroke-width=".8" marker-start="url(#arrR)" marker-end="url(#arr)"/>
  <text x="130" y="187" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9" font-weight="500">100 cm</text>
  <!-- Dim: depth -->
  <line x1="248" y1="40" x2="248" y2="165" stroke="#e8c98a" stroke-width=".8" marker-start="url(#arrR)" marker-end="url(#arr)"/>
  <text x="262" y="105" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9">60 cm</text>
  <!-- Labels -->
  <text x="130" y="72" text-anchor="middle" fill="rgba(200,135,58,0.5)" font-family="DM Mono,monospace" font-size="7">Palette 1</text>
  <text x="130" y="122" text-anchor="middle" fill="rgba(200,135,58,0.5)" font-family="DM Mono,monospace" font-size="7">Palette 2</text>

  <!-- === VUE FACE === -->
  <text x="420" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8" letter-spacing="1">VUE FACE</text>

  <!-- Palette 1 top -->
  <rect class="draw-el" x="300" y="40" width="240" height="40" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <line class="draw-el" x1="340" y1="40" x2="340" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <line class="draw-el" x1="380" y1="40" x2="380" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <line class="draw-el" x1="420" y1="40" x2="420" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <line class="draw-el" x1="460" y1="40" x2="460" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <!-- Palette 2 bottom -->
  <rect class="draw-el" x="300" y="84" width="240" height="40" stroke="#c8873a" stroke-width="1.5" rx="1"/>
  <line class="draw-el" x1="340" y1="84" x2="340" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <line class="draw-el" x1="380" y1="84" x2="380" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <line class="draw-el" x1="420" y1="84" x2="420" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <line class="draw-el" x1="460" y1="84" x2="460" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 3"/>
  <!-- Legs / Blocks -->
  <rect class="draw-el" x="300" y="124" width="22" height="50" stroke="#a06828" stroke-width="1.2" rx="1"/>
  <rect class="draw-el" x="518" y="124" width="22" height="50" stroke="#a06828" stroke-width="1.2" rx="1"/>
  <!-- Casters front -->
  <circle class="draw-el" cx="311" cy="180" r="9" stroke="#e8c98a" stroke-width="1.2"/>
  <circle class="draw-el" cx="529" cy="180" r="9" stroke="#e8c98a" stroke-width="1.2"/>

  <!-- Height dim -->
  <line x1="286" y1="40" x2="286" y2="189" stroke="#e8c98a" stroke-width=".8" marker-start="url(#arrR)" marker-end="url(#arr)"/>
  <text x="272" y="115" text-anchor="end" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9">42 cm</text>

  <!-- Reference projection lines -->
  <line x1="230" y1="40" x2="300" y2="40" stroke="rgba(200,135,58,0.3)" stroke-width=".7" stroke-dasharray="4 4"/>
  <line x1="230" y1="165" x2="300" y2="124" stroke="rgba(200,135,58,0.15)" stroke-width=".7" stroke-dasharray="4 4"/>

  <!-- Labels face view -->
  <text x="420" y="64" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Palette 1 — brute/rabotée</text>
  <text x="420" y="107" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Palette 2 (base)</text>

  <!-- Scale & copyright -->
  <text x="270" y="278" text-anchor="middle" fill="rgba(200,135,58,0.5)" font-family="DM Mono,monospace" font-size="7.5" letter-spacing="1">ÉCHELLE 1:10 — COTES EN CM — © PaletteCraft25 Besançon</text>
</svg>`;
}

function etagSVG() {
  return `<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:250px">
  <defs>
    <pattern id="egrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0L0 0 0 20" fill="none" stroke="rgba(200,135,58,0.07)" stroke-width=".5"/>
    </pattern>
    <pattern id="egrid2" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#egrid)"/>
      <path d="M100 0L0 0 0 100" fill="none" stroke="rgba(200,135,58,0.18)" stroke-width="1"/>
    </pattern>
    <marker id="earr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 1L6 4L0 7z" fill="#e8c98a"/></marker>
    <marker id="earrR" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto-start-reverse"><path d="M0 1L6 4L0 7z" fill="#e8c98a"/></marker>
  </defs>
  <rect width="540" height="290" fill="url(#egrid2)"/>
  <text x="270" y="16" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="9" letter-spacing="3">ÉTAGÈRE MURALE 3 NIVEAUX — PaletteCraft25</text>

  <!-- === VUE FACE === -->
  <text x="155" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8" letter-spacing="1">VUE FACE</text>

  <!-- Left montant -->
  <rect class="draw-el" x="30" y="40" width="14" height="210" stroke="#a06828" stroke-width="1.5" rx="1"/>
  <!-- Right montant -->
  <rect class="draw-el" x="246" y="40" width="14" height="210" stroke="#a06828" stroke-width="1.5" rx="1"/>
  <!-- Tablette 1 top -->
  <rect class="draw-el" x="30" y="50" width="230" height="18" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <!-- Tablette 2 mid -->
  <rect class="draw-el" x="30" y="130" width="230" height="18" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <!-- Tablette 3 bot -->
  <rect class="draw-el" x="30" y="210" width="230" height="18" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <!-- Plank details tab 1 -->
  <line class="draw-el" x1="80" y1="50" x2="80" y2="68" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="130" y1="50" x2="130" y2="68" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="180" y1="50" x2="180" y2="68" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="80" y1="130" x2="80" y2="148" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="130" y1="130" x2="130" y2="148" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="180" y1="130" x2="180" y2="148" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="80" y1="210" x2="80" y2="228" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="130" y1="210" x2="130" y2="228" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="180" y1="210" x2="180" y2="228" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <!-- Wall anchor marks -->
  <circle class="draw-el" cx="37" cy="60" r="4" stroke="#e8c98a" stroke-width="1"/>
  <circle class="draw-el" cx="37" cy="139" r="4" stroke="#e8c98a" stroke-width="1"/>
  <circle class="draw-el" cx="37" cy="219" r="4" stroke="#e8c98a" stroke-width="1"/>
  <circle class="draw-el" cx="253" cy="60" r="4" stroke="#e8c98a" stroke-width="1"/>
  <circle class="draw-el" cx="253" cy="139" r="4" stroke="#e8c98a" stroke-width="1"/>
  <circle class="draw-el" cx="253" cy="219" r="4" stroke="#e8c98a" stroke-width="1"/>

  <!-- Labels -->
  <text x="145" y="63" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Tablette 1</text>
  <text x="145" y="143" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Tablette 2</text>
  <text x="145" y="223" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Tablette 3</text>
  <!-- Width dim -->
  <line x1="30" y1="263" x2="260" y2="263" stroke="#e8c98a" stroke-width=".8" marker-start="url(#earrR)" marker-end="url(#earr)"/>
  <text x="145" y="275" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9">120 cm</text>
  <!-- Height dim -->
  <line x1="15" y1="40" x2="15" y2="228" stroke="#e8c98a" stroke-width=".8" marker-start="url(#earrR)" marker-end="url(#earr)"/>
  <text x="10" y="138" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9" transform="rotate(-90 10 138)">80 cm</text>

  <!-- === VUE PROFIL === -->
  <text x="420" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8" letter-spacing="1">VUE CÔTÉ</text>

  <rect class="draw-el" x="320" y="40" width="14" height="210" stroke="#a06828" stroke-width="1.5" rx="1"/>
  <rect class="draw-el" x="320" y="50" width="50" height="18" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <rect class="draw-el" x="320" y="130" width="50" height="18" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <rect class="draw-el" x="320" y="210" width="50" height="18" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <!-- Wall symbol -->
  <rect x="490" y="40" width="10" height="210" fill="rgba(200,135,58,0.06)" stroke="rgba(200,135,58,0.3)" stroke-width="1"/>
  <line x1="490" y1="40" x2="500" y2="40" stroke="#c8873a" stroke-width="1"/>
  <line x1="490" y1="250" x2="500" y2="250" stroke="#c8873a" stroke-width="1"/>
  <text x="496" y="155" text-anchor="middle" fill="rgba(200,135,58,0.5)" font-family="DM Mono,monospace" font-size="7" transform="rotate(90 496 155)">MUR</text>
  <!-- Profil dim -->
  <line x1="310" y1="50" x2="310" y2="68" stroke="#e8c98a" stroke-width=".8" marker-start="url(#earrR)" marker-end="url(#earr)"/>
  <line x1="370" y1="50" x2="370" y2="68" stroke="#e8c98a" stroke-width=".8"/>
  <line x1="310" y1="59" x2="370" y2="59" stroke="#e8c98a" stroke-width=".8" marker-start="url(#earrR)" marker-end="url(#earr)"/>
  <text x="340" y="56" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="7">20 cm</text>

  <text x="270" y="278" text-anchor="middle" fill="rgba(200,135,58,0.5)" font-family="DM Mono,monospace" font-size="7.5" letter-spacing="1">ÉCHELLE 1:8 — COTES EN CM — © PaletteCraft25 Besançon</text>
</svg>`;
}

function canapeSVG() {
  return `<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:250px">
  <defs>
    <pattern id="cgrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0L0 0 0 20" fill="none" stroke="rgba(200,135,58,0.07)" stroke-width=".5"/>
    </pattern>
    <pattern id="cgrid2" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#cgrid)"/>
      <path d="M100 0L0 0 0 100" fill="none" stroke="rgba(200,135,58,0.18)" stroke-width="1"/>
    </pattern>
    <marker id="carr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 1L6 4L0 7z" fill="#e8c98a"/></marker>
    <marker id="carrR" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto-start-reverse"><path d="M0 1L6 4L0 7z" fill="#e8c98a"/></marker>
  </defs>
  <rect width="540" height="290" fill="url(#cgrid2)"/>
  <text x="270" y="16" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="9" letter-spacing="3">CANAPÉ PALETTE 2 PLACES — PaletteCraft25</text>

  <!-- === VUE FACE === -->
  <text x="155" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8" letter-spacing="1">VUE FACE</text>

  <!-- Base palette 1 -->
  <rect class="draw-el" x="20" y="145" width="280" height="45" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <line class="draw-el" x1="60" y1="145" x2="60" y2="190" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="100" y1="145" x2="100" y2="190" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="140" y1="145" x2="140" y2="190" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="180" y1="145" x2="180" y2="190" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="220" y1="145" x2="220" y2="190" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="260" y1="145" x2="260" y2="190" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <!-- Assise palette 2 -->
  <rect class="draw-el" x="20" y="100" width="280" height="46" stroke="#c8873a" stroke-width="1.5" rx="1"/>
  <!-- Coussin assise (hatch) -->
  <rect class="draw-el" x="22" y="78" width="276" height="23" stroke="rgba(200,135,58,0.5)" stroke-width="1" rx="2"/>
  <line class="draw-el" x1="60" y1="78" x2="60" y2="101" stroke="rgba(200,135,58,0.2)" stroke-width=".5"/>
  <line class="draw-el" x1="120" y1="78" x2="120" y2="101" stroke="rgba(200,135,58,0.2)" stroke-width=".5"/>
  <line class="draw-el" x1="180" y1="78" x2="180" y2="101" stroke="rgba(200,135,58,0.2)" stroke-width=".5"/>
  <line class="draw-el" x1="240" y1="78" x2="240" y2="101" stroke="rgba(200,135,58,0.2)" stroke-width=".5"/>
  <!-- Dossier -->
  <rect class="draw-el" x="292" y="50" width="50" height="140" stroke="#a06828" stroke-width="1.8" rx="1"/>
  <line class="draw-el" x1="292" y1="85" x2="342" y2="85" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="292" y1="115" x2="342" y2="115" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <!-- Coussin dossier -->
  <rect class="draw-el" x="342" y="52" width="20" height="136" stroke="rgba(200,135,58,0.5)" stroke-width="1" rx="1"/>
  <!-- Legs -->
  <rect class="draw-el" x="20" y="190" width="16" height="45" stroke="#a06828" stroke-width="1.2" rx="1"/>
  <rect class="draw-el" x="284" y="190" width="16" height="45" stroke="#a06828" stroke-width="1.2" rx="1"/>
  <!-- Casters -->
  <circle class="draw-el" cx="28" cy="238" r="9" stroke="#e8c98a" stroke-width="1.2"/>
  <circle class="draw-el" cx="292" cy="238" r="9" stroke="#e8c98a" stroke-width="1.2"/>

  <!-- Dims -->
  <line x1="20" y1="262" x2="342" y2="262" stroke="#e8c98a" stroke-width=".8" marker-start="url(#carrR)" marker-end="url(#carr)"/>
  <text x="181" y="275" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9">160 cm</text>
  <line x1="5" y1="50" x2="5" y2="247" stroke="#e8c98a" stroke-width=".8" marker-start="url(#carrR)" marker-end="url(#carr)"/>
  <text x="0" y="155" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9" transform="rotate(-90 0 155)">70 cm</text>

  <!-- Labels -->
  <text x="160" y="170" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Base (Palette 1)</text>
  <text x="160" y="125" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Assise (Palette 2)</text>
  <text x="160" y="94" text-anchor="middle" fill="rgba(200,135,58,0.4)" font-family="DM Mono,monospace" font-size="7">Coussin assise</text>
  <text x="317" y="135" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7" transform="rotate(-90 317 135)">Dossier</text>

  <!-- === VUE DESSUS === -->
  <text x="460" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8">VUE DESSUS</text>
  <rect class="draw-el" x="400" y="40" width="130" height="90" stroke="#c8873a" stroke-width="1.5" rx="1"/>
  <rect class="draw-el" x="510" y="40" width="25" height="90" stroke="#a06828" stroke-width="1.2" rx="1"/>
  <line class="draw-el" x1="400" y1="70" x2="530" y2="70" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="4 2"/>

  <text x="270" y="278" text-anchor="middle" fill="rgba(200,135,58,0.5)" font-family="DM Mono,monospace" font-size="7.5" letter-spacing="1">ÉCHELLE 1:10 — COTES EN CM — © PaletteCraft25 Besançon</text>
</svg>`;
}

function litSVG() {
  return `<svg viewBox="0 0 540 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:250px">
  <defs>
    <pattern id="lgrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0L0 0 0 20" fill="none" stroke="rgba(200,135,58,0.07)" stroke-width=".5"/>
    </pattern>
    <pattern id="lgrid2" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#lgrid)"/>
      <path d="M100 0L0 0 0 100" fill="none" stroke="rgba(200,135,58,0.18)" stroke-width="1"/>
    </pattern>
    <marker id="larr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 1L6 4L0 7z" fill="#e8c98a"/></marker>
    <marker id="larrR" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto-start-reverse"><path d="M0 1L6 4L0 7z" fill="#e8c98a"/></marker>
  </defs>
  <rect width="540" height="290" fill="url(#lgrid2)"/>
  <text x="270" y="16" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="9" letter-spacing="3">LIT DOUBLE PALETTE — PaletteCraft25</text>

  <!-- === VUE DESSUS === -->
  <text x="155" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8" letter-spacing="1">VUE DESSUS (140×190)</text>

  <!-- Tête de lit -->
  <rect class="draw-el" x="20" y="40" width="280" height="40" stroke="#a06828" stroke-width="2" rx="1"/>
  <line class="draw-el" x1="60" y1="40" x2="60" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="113" y1="40" x2="113" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="166" y1="40" x2="166" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="219" y1="40" x2="219" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="267" y1="40" x2="267" y2="80" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <!-- Lit row 1 -->
  <rect class="draw-el" x="20" y="82" width="280" height="42" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <line class="draw-el" x1="60" y1="82" x2="60" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="113" y1="82" x2="113" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="166" y1="82" x2="166" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="219" y1="82" x2="219" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="267" y1="82" x2="267" y2="124" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <!-- Lit row 2 -->
  <rect class="draw-el" x="20" y="126" width="280" height="42" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <line class="draw-el" x1="60" y1="126" x2="60" y2="168" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="113" y1="126" x2="113" y2="168" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="166" y1="126" x2="166" y2="168" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="219" y1="126" x2="219" y2="168" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="267" y1="126" x2="267" y2="168" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <!-- Lit row 3 -->
  <rect class="draw-el" x="20" y="170" width="280" height="42" stroke="#c8873a" stroke-width="1.8" rx="1"/>
  <line class="draw-el" x1="60" y1="170" x2="60" y2="212" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="113" y1="170" x2="113" y2="212" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="166" y1="170" x2="166" y2="212" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="219" y1="170" x2="219" y2="212" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <line class="draw-el" x1="267" y1="170" x2="267" y2="212" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>

  <!-- Matelas outline -->
  <rect x="23" y="85" width="274" height="124" fill="rgba(200,135,58,0.04)" stroke="rgba(200,135,58,0.2)" stroke-width="1" stroke-dasharray="5 3" rx="3"/>

  <!-- Dims -->
  <line x1="20" y1="225" x2="300" y2="225" stroke="#e8c98a" stroke-width=".8" marker-start="url(#larrR)" marker-end="url(#larr)"/>
  <text x="160" y="237" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9">140 cm</text>
  <line x1="5" y1="40" x2="5" y2="212" stroke="#e8c98a" stroke-width=".8" marker-start="url(#larrR)" marker-end="url(#larr)"/>
  <text x="0" y="130" text-anchor="middle" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9" transform="rotate(-90 0 130)">190 cm</text>

  <!-- Labels -->
  <text x="160" y="62" text-anchor="middle" fill="rgba(200,135,58,0.55)" font-family="DM Mono,monospace" font-size="7">Tête de lit (2 palettes debout)</text>
  <text x="160" y="135" text-anchor="middle" fill="rgba(200,135,58,0.4)" font-family="DM Mono,monospace" font-size="7">Cadre — 4 palettes (2×2)</text>
  <text x="160" y="150" text-anchor="middle" fill="rgba(200,135,58,0.3)" font-family="DM Mono,monospace" font-size="7">Matelas 140×190 cm (non fourni)</text>

  <!-- === VUE FACE === -->
  <text x="440" y="34" text-anchor="middle" fill="#c8873a" font-family="DM Mono,monospace" font-size="8">VUE FACE</text>
  <!-- Face view: headboard + frame -->
  <rect class="draw-el" x="360" y="40" width="160" height="75" stroke="#a06828" stroke-width="2" rx="1"/>
  <rect class="draw-el" x="360" y="118" width="160" height="50" stroke="#c8873a" stroke-width="1.5" rx="1"/>
  <line class="draw-el" x1="360" y1="143" x2="520" y2="143" stroke="rgba(200,135,58,0.45)" stroke-width=".7" stroke-dasharray="3 2"/>
  <!-- Legs face -->
  <rect class="draw-el" x="360" y="168" width="14" height="50" stroke="#a06828" stroke-width="1.2" rx="1"/>
  <rect class="draw-el" x="506" y="168" width="14" height="50" stroke="#a06828" stroke-width="1.2" rx="1"/>
  <!-- Height dim face -->
  <line x1="346" y1="40" x2="346" y2="218" stroke="#e8c98a" stroke-width=".8" marker-start="url(#larrR)" marker-end="url(#larr)"/>
  <text x="340" y="133" text-anchor="end" fill="#e8c98a" font-family="DM Mono,monospace" font-size="9">36 cm</text>

  <text x="270" y="278" text-anchor="middle" fill="rgba(200,135,58,0.5)" font-family="DM Mono,monospace" font-size="7.5" letter-spacing="1">ÉCHELLE 1:12 — COTES EN CM — © PaletteCraft25 Besançon</text>
</svg>`;
}

const PLANS = [
  { id:'table', icon:'☕', name:'Table basse palette', subtitle:'L100 × l60 × H42 cm',
    specs:['L 100 cm','l 60 cm','H 42 cm','Palette EUR'],
    desc:'Table basse minimaliste à partir de 2 palettes empilées. Idéale salon ou terrasse. Roulettes optionnelles.',
    materials:[
      { name:'2× Palettes complètes brutes', price:'24 €', id:'p1' },
      { name:'4× Roulettes pivotantes (lot 4)', price:'8,90 €', id:'hw6' },
      { name:'1× Ponceuse orbitale', price:'24,90 €', id:'hw9' },
      { name:'1× Vernis incolore', price:'9,90 €', id:'hw12' },
    ],
    steps:[
      'Poncer les 2 palettes (grain 80 puis 120). Dépoussiérer soigneusement.',
      'Visser les 4 roulettes sous la palette du bas (1 à chaque coin).',
      'Empiler la 2e palette dessus. Fixer avec 4 vis 6×80 mm aux coins.',
      'Appliquer 2 couches de vernis ou huile. Laisser sécher 24h entre chaque.',
      'Option : poser un plateau en verre ou bois sur le dessus.',
    ],
    svg: tableSVG },
  { id:'etagere', icon:'📚', name:'Étagère murale', subtitle:'L120 × H80 × P20 cm',
    specs:['L 120 cm','H 80 cm','P 20 cm','3 niveaux'],
    desc:'Étagère 3 niveaux en planches de palette fixée au mur. Moderne, légère, modulable à l\'infini.',
    materials:[
      { name:'8× Planches rabotées 120 cm', price:'28 €', id:'p11' },
      { name:'Lot équerres de fixation (8 pcs)', price:'6,50 €', id:'hw2' },
      { name:'Cheville à frapper (sac 50)', price:'4,50 €', id:'hw5' },
      { name:'Vernis ou peinture au choix', price:'9,90 €', id:'hw12' },
    ],
    steps:[
      'Couper 2 planches à H=80 cm pour les montants latéraux.',
      'Tracer au niveau à bulle 3 lignes horizontales pour les tablettes.',
      'Fixer les équerres sur les montants aux positions marquées.',
      'Poser et visser les 3 tablettes horizontales (120 cm) sur les équerres.',
      'Percer le mur, cheviller, accrocher les montants. Vérifier la verticalité.',
      'Poncer, teinter ou peindre selon votre goût.',
    ],
    svg: etagSVG },
  { id:'canape', icon:'🛋️', name:'Canapé palette 2 places', subtitle:'L160 × P80 × H70 cm',
    specs:['L 160 cm','P 80 cm','H 70 cm','3 palettes'],
    desc:'Canapé d\'extérieur ou salon avec 2 palettes en base et dossier amovible. Coussins non fournis.',
    materials:[
      { name:'3× Palettes complètes rabotées', price:'54 €', id:'p2' },
      { name:'4× Roulettes pivotantes (lot 4)', price:'8,90 €', id:'hw6' },
      { name:'Vis à bois 6×80 mm (boîte 100)', price:'6,50 €', id:'hw1b' },
      { name:'Huile de lin ou vernis ext.', price:'12,90 €', id:'hw11' },
    ],
    steps:[
      'Poncer les 3 palettes (grain 80 → 120 → 180).',
      'Assembler 2 palettes côte à côte pour la base assise. Visser entre elles.',
      'Fixer les 4 roulettes (ou pieds) sous la base.',
      'Redresser la 3e palette à 90° en fond : c\'est le dossier. Fixer avec des équerres.',
      'Traiter avec huile de lin (2 couches, 24h entre). Idéal pour extérieur.',
      'Ajouter coussins 80×80 cm à l\'assise et 80×40 cm au dossier.',
    ],
    svg: canapeSVG },
  { id:'lit', icon:'🛏️', name:'Lit double palette', subtitle:'140×190 + tête de lit',
    specs:['140×190 cm','Tête de lit','6 palettes'],
    desc:'Lit double avec tête de lit intégrée à partir de 6 palettes. Plancher renforcé. Design brut chic.',
    materials:[
      { name:'6× Palettes complètes rabotées', price:'108 €', id:'p2' },
      { name:'Vis à bois 6×80 mm (boîte 200)', price:'8,90 €', id:'hw1b' },
      { name:'Équerres renforcées (lot 8)', price:'6,50 €', id:'hw2' },
      { name:'Ponceuse orbitale', price:'24,90 €', id:'hw9' },
    ],
    steps:[
      'Disposer 4 palettes 2×2 pour le cadre de lit (140×190 cm). Visser entre elles.',
      'Ajouter une rangée de planches transversales sur le dessus pour le plancher.',
      'Fabriquer la tête de lit : 2 palettes debout, fixées verticalement à l\'arrière.',
      'Assembler tête de lit au cadre avec 4 équerres renforcées.',
      'Poncer l\'ensemble, insister sur les bords et arêtes.',
      'Finir à la cire ou huile. Poser le matelas (140×190 cm, non inclus).',
    ],
    svg: litSVG },
];

const HARDWARE = [
  { id:'hw1', cat:'visserie', icon:'🔩', name:'Vis à bois 4×40 mm', desc:'Boîte de 200 vis fraisées, acier zingué. Idéales assemblage planches palette.', price:5.90 },
  { id:'hw1b', cat:'visserie', icon:'🔩', name:'Vis à bois 6×80 mm', desc:'Boîte de 100 vis fraisées renforcées pour assemblage palettes et structures lourdes.', price:6.50 },
  { id:'hw2', cat:'fixation', icon:'📐', name:'Équerre de fixation', desc:'Lot de 8 équerres acier galvanisé 40×40 mm. Fixation angle droit, résistante.', price:6.50 },
  { id:'hw3', cat:'fixation', icon:'🔘', name:'Tourillons bois 8 mm', desc:'Sac de 50 tourillons en bouleau ø8 mm. Assemblage invisible, très résistant.', price:3.90 },
  { id:'hw4', cat:'fixation', icon:'🔗', name:'Plaque d\'assemblage', desc:'Lot de 6 plaques zinguées 80×40 mm pour renforcer les jonctions de palettes.', price:5.50 },
  { id:'hw5', cat:'fixation', icon:'🪝', name:'Chevilles à frapper', desc:'Sac de 50 chevilles nylon ø8 mm pour fixation murale. Charge 30 kg.', price:4.50 },
  { id:'hw6', cat:'fixation', icon:'⚙️', name:'Roulettes pivotantes', desc:'Lot de 4 roulettes ø50 mm avec frein, charge 25 kg/unité. Idéales tables basses.', price:8.90 },
  { id:'hw7', cat:'outil', icon:'🔨', name:'Marteau menuisier', desc:'Marteau 500g manche bois. Solide, équilibré. L\'outil indispensable du bricoleur.', price:12.90 },
  { id:'hw8', cat:'outil', icon:'📏', name:'Niveau à bulle 60 cm', desc:'Niveau aluminium 60 cm, 3 bulles. Précis et robuste pour tous vos montages.', price:8.90 },
  { id:'hw9', cat:'outil', icon:'⚡', name:'Ponceuse orbitale', desc:'Ponceuse 125 mm, 230W, ø8 trous. Livré avec 5 disques grain 80/120/180.', price:24.90 },
  { id:'hw10', cat:'outil', icon:'🔧', name:'Perceuse-visseuse', desc:'Perceuse sans fil 18V, 2 vitesses, mandrin 13 mm. Batterie et chargeur inclus.', price:49.90 },
  { id:'hw11', cat:'finition', icon:'🧴', name:'Huile de lin naturelle', desc:'1 litre d\'huile de lin cuite. Protège, nourrit, sublime le bois. Usage extérieur/intérieur.', price:12.90 },
  { id:'hw12', cat:'finition', icon:'🎨', name:'Vernis incolore satiné', desc:'0,75 L vernis acrylique incolore satiné, intérieur. Séchage 2h, résistant.', price:9.90 },
  { id:'hw13', cat:'finition', icon:'🌿', name:'Papier abrasif assorti', desc:'Lot de 20 feuilles grains 60, 80, 120, 180, 240. Ponçage main toutes surfaces.', price:6.90 },
];

// ═══════════════════════════════════════════
// CART STATE
// ═══════════════════════════════════════════
let cart = JSON.parse(localStorage.getItem('palettecraft_cart') || '[]');
function saveCart() { localStorage.setItem('palettecraft_cart', JSON.stringify(cart)); }
function getTotal() { return cart.reduce((t, i) => t + i.price * i.qty, 0); }
function formatPrice(p) { return p.toFixed(2).replace('.', ',') + ' €'; }

// ═══════════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════════
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = PRODUCTS.map((p, idx) => `
    <div class="product-card reveal" data-cat="${p.cat}" id="prod-${p.id}" style="transition-delay:${(idx % 4) * 0.06}s">
      <div class="product-img">
        ${PRODUCT_IMGS[p.id] || ''}
        <div class="product-img-gradient"></div>
        ${p.badge ? `<div class="product-badge ${p.badgeCls}">${p.badge}</div>` : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">// ${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-variants">${p.variants.map(v => `<span class="variant-chip">${v}</span>`).join('')}</div>
      </div>
      <div class="product-footer">
        <div class="product-price">${p.price > 0 ? formatPrice(p.price) : 'Sur devis'}<small>${p.unit}</small></div>
        ${p.price > 0
          ? `<button class="add-cart-btn" onclick="addToCart('${p.id}','product')">+ Panier</button>`
          : `<a href="#contact" class="add-cart-btn">✉️ Devis</a>`}
      </div>
    </div>
  `).join('');
  initCardTilt('.product-card');
  observeReveal();
}

function filterProducts(cat, btn) {
  document.querySelectorAll('#productGrid .product-card').forEach(c => {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
  });
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

// ═══════════════════════════════════════════
// RENDER HARDWARE
// ═══════════════════════════════════════════
function renderHardware() {
  const grid = document.getElementById('hardwareGrid');
  grid.innerHTML = HARDWARE.map((h, idx) => `
    <div class="hw-card reveal" data-cat="${h.cat}" id="hw-${h.id}" style="transition-delay:${(idx % 5) * 0.05}s">
      <div class="hw-icon">${h.icon}</div>
      <div class="hw-cat">${h.cat}</div>
      <div class="hw-name">${h.name}</div>
      <div class="hw-desc">${h.desc}</div>
      <div class="hw-footer">
        <div class="hw-price">${formatPrice(h.price)}</div>
        <button class="hw-add" onclick="addToCart('${h.id}','hardware')" title="Ajouter au panier">+</button>
      </div>
    </div>
  `).join('');
  initCardTilt('.hw-card');
  observeReveal();
}

// ═══════════════════════════════════════════
// RENDER PLANS — BLUEPRINT CARDS
// ═══════════════════════════════════════════
function renderPlans() {
  const grid = document.getElementById('plansGrid');
  grid.innerHTML = PLANS.map((plan, idx) => `
    <div class="plan-card reveal" id="plan-${plan.id}" style="transition-delay:${idx * 0.1}s">
      <div class="plan-bp-preview" id="preview-${plan.id}">
        ${plan.svg()}
      </div>
      <div class="plan-card-body">
        <div class="plan-header">
          <div class="plan-icon">${plan.icon}</div>
          <div>
            <h3>${plan.name}</h3>
            <p>${plan.subtitle}</p>
          </div>
        </div>
        <div class="plan-specs">${plan.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}</div>
        <div class="plan-desc">${plan.desc}</div>
        <div class="plan-materials">
          <h4>// Matériaux nécessaires</h4>
          <ul>${plan.materials.map(m => `<li>${m.name}<strong>${m.price}</strong></li>`).join('')}</ul>
        </div>
        <div class="plan-footer">
          <span class="plan-free">📄 Plan GRATUIT</span>
          <button class="btn-plan" onclick="openPlanModal('${plan.id}')">Voir le plan complet</button>
        </div>
      </div>
    </div>
  `).join('');
  initCardTilt('.plan-card');
  initBlueprintAnimation();
  observeReveal();
}

// ═══════════════════════════════════════════
// PLAN MODAL
// ═══════════════════════════════════════════
function openPlanModal(id) {
  const plan = PLANS.find(p => p.id === id);
  if (!plan) return;
  document.getElementById('modalTitle').textContent = `📐 ${plan.name}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="schema-svg-container">${plan.svg()}</div>
    <h4 style="font-family:'Playfair Display',serif;color:var(--cream);margin-bottom:1rem;font-size:1.1rem">Étapes de montage</h4>
    <ol class="steps-list">${plan.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    <div class="modal-cart-section">
      <h4>🛒 Commander les matériaux nécessaires</h4>
      <div class="modal-materials-list">
        ${plan.materials.map(m => {
          const item = [...PRODUCTS, ...HARDWARE].find(x => x.id === m.id);
          return `<div class="modal-material-item">
            <span>${m.name}</span>
            <div style="display:flex;align-items:center;gap:.5rem">
              <span class="price">${m.price}</span>
              ${item ? `<button class="hw-add" onclick="addToCart('${m.id}','${PRODUCTS.find(x=>x.id===m.id)?'product':'hardware'}')" style="font-size:.8rem;width:auto;padding:.2rem .6rem;height:auto;border-radius:6px">+ Panier</button>` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
      <button class="add-kit-btn" onclick="addKitToCart('${plan.id}')">🛒 Ajouter tous les matériaux au panier</button>
    </div>
  `;
  document.getElementById('planModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  // animate SVG in modal
  setTimeout(() => {
    const svg = document.querySelector('.schema-svg-container svg');
    if (svg) animateSVGElements(svg);
  }, 200);
}
function closePlanModal() {
  document.getElementById('planModal').classList.remove('open');
  document.body.style.overflow = '';
}
function addKitToCart(planId) {
  const plan = PLANS.find(p => p.id === planId);
  plan.materials.forEach(m => {
    const isHW = HARDWARE.find(x => x.id === m.id);
    if (isHW || PRODUCTS.find(x => x.id === m.id)) {
      addToCart(m.id, isHW ? 'hardware' : 'product', true);
    }
  });
  showToast(`✅ Kit « ${plan.name} » ajouté au panier !`);
  closePlanModal();
}

// ═══════════════════════════════════════════
// CART LOGIC
// ═══════════════════════════════════════════
function addToCart(id, type, silent = false) {
  const source = type === 'hardware' ? HARDWARE : PRODUCTS;
  const item = source.find(x => x.id === id);
  if (!item || item.price <= 0) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name: item.name, price: item.price, qty: 1, emoji: item.emoji || item.icon }); }
  saveCart(); renderCart();
  if (!silent) showToast(`🛒 ${item.name} ajouté !`);
}
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); renderCart(); }
function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(); renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalCount = cart.reduce((t, i) => t + i.qty, 0);
  if (totalCount > 0) { countEl.textContent = totalCount; countEl.classList.add('visible'); }
  else { countEl.classList.remove('visible'); }
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div><p>Votre panier est vide</p></div>`;
    footer.style.display = 'none'; return;
  }
  footer.style.display = 'block';
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.emoji}</div>
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <small>${formatPrice(item.price)} / unité</small>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')">🗑</button>
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('');
  const total = getTotal();
  document.getElementById('cartSubtotal').textContent = formatPrice(total);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ═══════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════
function openCheckout() {
  const token = localStorage.getItem("token");
  if (!token) { showToast("🔒 Connecte-toi pour accéder au paiement"); openLogin(); return; }
  if (cart.length === 0) return;
  const total = getTotal();
  document.getElementById('checkoutTotalDisplay').textContent = formatPrice(total);
  const lines = cart.map(i => `<div class="order-line"><span>${i.name} ×${i.qty}</span><span>${formatPrice(i.price*i.qty)}</span></div>`).join('');
  document.getElementById('orderSummaryLines').innerHTML = lines +
    `<div class="order-line"><span>Livraison Besançon</span><span style="color:var(--green)">Gratuite</span></div>
     <div class="order-line"><span>Total TTC</span><span>${formatPrice(total)}</span></div>`;
  document.getElementById('checkoutOverlay').classList.add('open');
  toggleCart();
  initPayPal(total);
}
function closeCheckout() { document.getElementById('checkoutOverlay').classList.remove('open'); }
function initPayPal(total) {
  const container = document.getElementById('paypal-button-container');
  container.innerHTML = '';
  if (typeof paypal !== 'undefined') {
    paypal.Buttons({
      createOrder: (data, actions) => actions.order.create({
        purchase_units:[{ amount:{ value: total.toFixed(2), currency_code:'EUR' }, description:`Commande PaletteCraft25` }]
      }),
      onApprove: (data, actions) => actions.order.capture().then(() => onPaymentSuccess()),
      onError: () => alert('Erreur PayPal. Veuillez réessayer.'),
    }).render('#paypal-button-container');
    document.querySelector('.paypal-fallback').style.display = 'none';
  }
}
function simulatePayment() { closeCheckout(); setTimeout(onPaymentSuccess, 300); }
function onPaymentSuccess() { cart = []; saveCart(); renderCart(); document.getElementById('successOverlay').classList.add('open'); }
function closeSuccess() { document.getElementById('successOverlay').classList.remove('open'); }

// ═══════════════════════════════════════════
// MOBILE NAV
// ═══════════════════════════════════════════
function toggleMobileNav() { document.getElementById('mobileNav').classList.toggle('open'); }

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ═══════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════
function observeReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════
// NEWSLETTER
// ═══════════════════════════════════════════
function submitNewsletter(e) {
  e.preventDefault();
  showToast('✅ Inscription confirmée ! Merci !');
  e.target.reset();
}

// ═══════════════════════════════════════════
// ESC CLOSE
// ═══════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLogin(); closePlanModal(); closeCheckout(); closeSuccess();
    if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
  }
});

// ═══════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════
function openLogin(tab = 'login') {
  document.getElementById('authOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  switchTab(tab);
}
function closeLogin() {
  document.getElementById('authOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('userMenu')?.classList.remove('open');
}
function handleOverlayClick(e) {
  if (e.target === document.getElementById('authOverlay')) closeLogin();
}
function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tabLogin').classList.toggle('active', isLogin);
  document.getElementById('tabRegister').classList.toggle('active', !isLogin);
  document.getElementById('formLogin').classList.toggle('hidden', !isLogin);
  document.getElementById('formRegister').classList.toggle('hidden', isLogin);
  document.getElementById('tabIndicator').style.transform = isLogin ? 'translateX(0)' : 'translateX(100%)';
}

async function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  if (!email || !password) { showToast("⚠️ Remplis tous les champs"); return; }
  try {
    const res = await fetch("http://localhost:3000/login", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", data.email || email);
      closeLogin(); showToast("👤 Connecté !"); updateUserUI();
    } else { showToast("❌ " + (data.message || "Identifiants incorrects")); }
  } catch { showToast("❌ Serveur indisponible"); }
}

function togglePassword(inputId, eyeElement) {
  const input = document.getElementById(inputId);
  const eyeOpen = eyeElement.querySelector(".eye-open");
  const eyeClosed = eyeElement.querySelector(".eye-closed");
  const isHidden = input.type === "password";
  input.type = isHidden ? "text" : "password";
  eyeOpen.style.display = isHidden ? "none" : "block";
  eyeClosed.style.display = isHidden ? "block" : "none";
}

async function register() {
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  if (!email || !password) { showToast("⚠️ Remplis tous les champs"); return; }
  if (password.length < 6) { showToast("⚠️ Mot de passe trop court (min. 6 car.)"); return; }
  try {
    const res = await fetch("http://localhost:3000/register", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) { showToast("✅ Compte créé ! Connecte-toi."); switchTab('login'); document.getElementById("loginEmail").value = email; }
    else { showToast("❌ " + (data.message || "Erreur lors de l'inscription")); }
  } catch { showToast("❌ Serveur indisponible"); }
}

function logout() {
  localStorage.removeItem("token"); localStorage.removeItem("userEmail");
  updateUserUI(); showToast("👋 Déconnecté");
  document.getElementById('userMenu')?.classList.remove('open');
}
function toggleUserMenu() { document.getElementById('userMenu').classList.toggle('open'); }
document.addEventListener('click', e => {
  const chip = document.querySelector('.user-chip');
  const menu = document.getElementById('userMenu');
  if (menu && chip && !chip.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('open');
});
function updateUserUI() {
  const email = localStorage.getItem("userEmail");
  const guestEl = document.getElementById("authGuest");
  const userEl = document.getElementById("authUser");
  if (email) {
    guestEl.style.display = "none"; userEl.style.display = "flex";
    document.getElementById("userAvatar").textContent = email.charAt(0).toUpperCase();
    const shortName = email.split('@')[0];
    document.getElementById("userEmailShort").textContent = shortName.length > 10 ? shortName.slice(0,10)+'…' : shortName;
    document.getElementById("userMenuEmail").textContent = email;
  } else { guestEl.style.display = "flex"; userEl.style.display = "none"; }
}

// ═══════════════════════════════════════════
// 3D CARD TILT
// ═══════════════════════════════════════════
function initCardTilt(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// ═══════════════════════════════════════════
// MAGNETIC BUTTONS
// ═══════════════════════════════════════════
function initMagneticButtons() {
  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width/2) * 0.25;
      const y = (e.clientY - rect.top - rect.height/2) * 0.25;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

// ═══════════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════════
function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = Date.now();
      const tick = setInterval(() => {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * end) + suffix;
        if (progress >= 1) clearInterval(tick);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════
// BLUEPRINT SVG ANIMATION
// ═══════════════════════════════════════════
function animateSVGElements(svg) {
  const els = svg.querySelectorAll('.draw-el');
  els.forEach((el, i) => {
    let len = 600;
    try { len = el.getTotalLength ? el.getTotalLength() : 600; } catch(e) {}
    el.style.strokeDasharray = len;
    el.style.strokeDashoffset = len;
    el.style.transition = `stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1) ${i * 0.04}s`;
    requestAnimationFrame(() => { el.style.strokeDashoffset = 0; });
  });
}

function initBlueprintAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const card = e.target;
      const svg = card.querySelector('.plan-bp-preview svg');
      if (svg) {
        setTimeout(() => animateSVGElements(svg), 200);
      }
      observer.unobserve(card);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.plan-card').forEach(c => observer.observe(c));
}

// ═══════════════════════════════════════════
// PARALLAX ABOUT
// ═══════════════════════════════════════════
function initParallax() {
  const bg = document.getElementById('aboutBg');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    const section = bg.closest('.section-about');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const progress = -rect.top / (window.innerHeight + rect.height);
    bg.style.transform = `translateY(${progress * 60}px)`;
  }, { passive: true });
}

// ═══════════════════════════════════════════
// HEADER SCROLL
// ═══════════════════════════════════════════
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ═══════════════════════════════════════════
// THREE.JS HERO 3D
// ═══════════════════════════════════════════
function initHero3D() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const W = canvas.clientWidth || window.innerWidth;
  const H = canvas.clientHeight || window.innerHeight;
  const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 200);
  camera.position.set(0, 0, 14);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // Lights
  const ambient = new THREE.AmbientLight(0xffe0b0, 0.6);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xfff5e0, 2.5);
  key.position.set(8, 10, 8);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xc8873a, 0.5);
  fill.position.set(-8, -4, 4);
  scene.add(fill);
  const back = new THREE.PointLight(0x7a4f27, 1, 40);
  back.position.set(0, -8, -6);
  scene.add(back);

  // Palette plank geometry
  const plankGeo = new THREE.BoxGeometry(5, 0.18, 0.9);
  const crossGeo = new THREE.BoxGeometry(0.9, 0.22, 2.8);

  const woodMats = [
    new THREE.MeshStandardMaterial({ color: 0x8B5E3C, roughness: 0.95, metalness: 0.0 }),
    new THREE.MeshStandardMaterial({ color: 0xA0714F, roughness: 0.88, metalness: 0.0 }),
    new THREE.MeshStandardMaterial({ color: 0x7A4F2E, roughness: 0.92, metalness: 0.0 }),
    new THREE.MeshStandardMaterial({ color: 0xC49A6C, roughness: 0.85, metalness: 0.0 }),
    new THREE.MeshStandardMaterial({ color: 0x6B4226, roughness: 0.96, metalness: 0.0 }),
  ];

  const planks = [];

  // Create palette-like assemblies
  for (let i = 0; i < 20; i++) {
    const mat = woodMats[i % woodMats.length];
    const geo = Math.random() > 0.3 ? plankGeo : crossGeo;
    const plank = new THREE.Mesh(geo, mat);

    plank.position.set(
      (Math.random() - 0.5) * 22,
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 8 - 2
    );
    plank.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    plank.userData = {
      rotX: (Math.random() - 0.5) * 0.004,
      rotY: (Math.random() - 0.5) * 0.007,
      rotZ: (Math.random() - 0.5) * 0.003,
      floatAmp: 0.02 + Math.random() * 0.04,
      floatSpeed: 0.3 + Math.random() * 0.6,
      floatOffset: Math.random() * Math.PI * 2,
      initY: plank.position.y,
    };
    scene.add(plank);
    planks.push(plank);
  }

  // Sawdust particles
  const partCount = 600;
  const positions = new Float32Array(partCount * 3);
  for (let i = 0; i < partCount * 3; i++) positions[i] = (Math.random() - 0.5) * 28;
  const partGeo = new THREE.BufferGeometry();
  partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const partMat = new THREE.PointsMaterial({ color: 0xE8C98A, size: 0.035, transparent: true, opacity: 0.35 });
  scene.add(new THREE.Points(partGeo, partMat));

  // Mouse parallax
  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    // Gentle camera parallax
    camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.025;
    camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);

    planks.forEach(p => {
      p.rotation.x += p.userData.rotX;
      p.rotation.y += p.userData.rotY;
      p.rotation.z += p.userData.rotZ;
      p.position.y = p.userData.initY + Math.sin(time * p.userData.floatSpeed + p.userData.floatOffset) * p.userData.floatAmp;
    });

    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  const onResize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize, { passive: true });
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
// ═══════════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════════
function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let rx = cx, ry = cy;

  window.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; }, { passive: true });

  function updateCursor() {
    dot.style.left  = cx + 'px'; dot.style.top  = cy + 'px';
    rx += (cx - rx) * 0.14;  ry += (cy - ry) * 0.14;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
}

// ═══════════════════════════════════════════
// SCROLL PROGRESS BAR
// ═══════════════════════════════════════════
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderHardware();
  renderPlans();
  renderCart();
  observeReveal();
  updateUserUI();
  initHero3D();
  initMagneticButtons();
  initCounters();
  initParallax();
  initHeaderScroll();
  initCursor();
  initScrollProgress();
});
