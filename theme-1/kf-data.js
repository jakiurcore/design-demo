(function(){
const T=(es,en,ca)=>({es,en,ca:ca||es});
const O=(id,n,d)=>({id,n,d:d||0});
const cats=[
{id:'kebab',n:T('Kebab y dürüm','Kebab & dürüm','Kebab i dürüm')},
{id:'plates',n:T('Platos','Plates','Plats')},
{id:'burgers',n:T('Hamburguesas','Burgers','Hamburgueses')},
{id:'pizza',n:T('Pizzas','Pizzas','Pizzes')},
{id:'sides',n:T('Para picar','Sides & starters','Per picar')},
{id:'drinks',n:T('Bebidas','Drinks','Begudes')}];
const allergens={gluten:T('Gluten','Gluten','Gluten'),milk:T('Lácteos','Dairy','Lactis'),egg:T('Huevo','Egg','Ou'),sesame:T('Sésamo','Sesame','Sèsam'),mustard:T('Mostaza','Mustard','Mostassa'),soy:T('Soja','Soy','Soia')};
const groups={
meat:{type:'radio',req:true,n:T('Elige la carne','Choose your meat','Tria la carn'),opts:[O('chicken',T('Pollo','Chicken','Pollastre')),O('beef',T('Ternera','Beef','Vedella')),O('mixed',T('Mixto','Mixed','Mixt'),0.5),O('falafel',T('Falafel','Falafel','Falàfel'))]},
sauce:{type:'check',max:2,n:T('Salsas','Sauces','Salses'),opts:[O('yog',T('Yogur','Yogurt','Iogurt')),O('hot',T('Picante','Hot chilli','Picant')),O('garlic',T('Ajo','Garlic','All')),O('bbq',T('Barbacoa','BBQ','Barbacoa'))]},
exDurum:{type:'check',n:T('Extras','Extras','Extres'),opts:[O('cheese',T('Queso extra','Extra cheese','Formatge extra'),1),O('fries',T('Patatas dentro','Fries inside','Patates a dins'),0.8),O('noonion',T('Sin cebolla','No onion','Sense ceba'))]},
size:{type:'radio',req:true,n:T('Tamaño','Size','Mida'),opts:[O('reg',T('Normal','Regular','Normal')),O('lg',T('Grande','Large','Gran'),2.5)]},
salad:{type:'check',n:T('Añade proteína','Add protein','Afegeix proteïna'),opts:[O('chk',T('Pollo a la brasa','Grilled chicken','Pollastre a la brasa'),2),O('fal',T('3 falafels','3 falafels','3 falàfels'),1.5),O('feta',T('Queso feta','Feta cheese','Formatge feta'),1.2)]},
side:{type:'radio',req:true,n:T('Acompañamiento','Side','Acompanyament'),opts:[O('fries',T('Patatas fritas','Fries','Patates fregides')),O('salad',T('Ensalada','Side salad','Amanida')),O('wedges',T('Patatas gajo','Potato wedges','Patates gallet'),0.8)]},
burgerEx:{type:'check',n:T('Extras','Extras','Extres'),opts:[O('bacon',T('Bacon','Bacon','Bacó'),1.2),O('double',T('Doble carne','Double patty','Doble carn'),2.5),O('cheddar',T('Cheddar extra','Extra cheddar','Cheddar extra'),0.9)]},
drink:{type:'radio',req:true,n:T('Bebida','Drink','Beguda'),opts:[O('cola',T('Coca-Cola','Coca-Cola','Coca-Cola')),O('zero',T('Coca-Cola Zero','Coca-Cola Zero','Coca-Cola Zero')),O('fanta',T('Fanta naranja','Fanta orange','Fanta taronja')),O('water',T('Agua','Water','Aigua'))]},
pizzaSize:{type:'radio',req:true,n:T('Tamaño','Size','Mida'),opts:[O('m',T('Mediana · 30 cm','Medium · 30 cm','Mitjana · 30 cm')),O('f',T('Familiar · 40 cm','Family · 40 cm','Familiar · 40 cm'),4)]},
pizzaEx:{type:'check',n:T('Extras','Extras','Extres'),opts:[O('mozz',T('Extra de mozzarella','Extra mozzarella','Extra de mozzarella'),1.5),O('mush',T('Champiñones','Mushrooms','Xampinyons'),1),O('olive',T('Aceitunas negras','Black olives','Olives negres'),0.8)]},
spice:{type:'radio',req:true,n:T('Nivel de picante','Spice level','Nivell de picant'),opts:[O('mild',T('Suave','Mild','Suau')),O('hot',T('Picante','Hot','Picant')),O('xhot',T('Muy picante','Extra hot','Molt picant'))]},
wings:{type:'radio',req:true,n:T('Unidades','Pieces','Unitats'),opts:[O('6',T('6 alitas','6 wings','6 aletes')),O('12',T('12 alitas','12 wings','12 aletes'),6)]},
soda:{type:'radio',req:true,n:T('Sabor','Flavour','Sabor'),opts:[O('cola',T('Coca-Cola','Coca-Cola','Coca-Cola')),O('zero',T('Coca-Cola Zero','Coca-Cola Zero','Coca-Cola Zero')),O('fanta',T('Fanta naranja','Fanta orange','Fanta taronja')),O('nestea',T('Nestea','Nestea','Nestea'))]}
};
const I='assets/food/';
const items=[
{id:'durum-grat',cat:'kebab',img:I+'durum.png',pos:'50% 60%',price:7.9,popular:true,r:4.8,rc:126,al:['gluten','milk','sesame'],groups:['meat','sauce','exDurum'],
 n:T('Dürüm gratinado','Gratinated dürüm','Dürüm gratinat'),d:T('Nuestro dürüm más pedido: pan lavash enrollado, gratinado al horno con queso fundido y salsa de tomate.','Our best seller: rolled lavash bread, baked under melted cheese and tomato sauce.','El nostre dürüm més demanat: pa lavash enrotllat, gratinat al forn amb formatge fos i salsa de tomàquet.')},
{id:'durum-pollo',cat:'kebab',img:I+'durum.png',pos:'20% 70%',price:6.5,r:4.7,rc:98,al:['gluten','milk','sesame'],groups:['meat','sauce','exDurum'],
 n:T('Dürüm clásico','Classic dürüm','Dürüm clàssic'),d:T('Carne a la brasa, lechuga, tomate, cebolla y salsa de yogur, enrollado en pan lavash.','Flame-grilled meat, lettuce, tomato, onion and yogurt sauce, wrapped in lavash.','Carn a la brasa, enciam, tomàquet, ceba i salsa de iogurt, enrotllat en pa lavash.')},
{id:'plato-mixto',cat:'plates',img:I+'plates.png',pos:'10% 90%',price:9.9,r:4.6,rc:74,al:['gluten','milk','sesame'],groups:['size','sauce'],
 n:T('Plato kebab mixto','Mixed kebab plate','Plat kebab mixt'),d:T('Pollo y ternera a la brasa con patatas fritas, ensalada fresca y pan de pita.','Grilled chicken and beef with fries, fresh salad and pita bread.','Pollastre i vedella a la brasa amb patates fregides, amanida fresca i pa de pita.')},
{id:'plato-falafel',cat:'plates',img:I+'plates.png',pos:'62% 55%',price:8.5,veg:true,r:4.7,rc:51,al:['gluten','sesame'],groups:['size','sauce'],
 n:T('Plato falafel','Falafel plate','Plat de falàfel'),d:T('Cinco falafels caseros de garbanzo con ensalada, patatas fritas y salsa de yogur.','Five homemade chickpea falafels with salad, fries and yogurt sauce.','Cinc falàfels casolans de cigró amb amanida, patates fregides i salsa de iogurt.')},
{id:'cheeseburger',cat:'burgers',img:I+'burger-house.png',pos:'45% 55%',price:8.9,r:4.5,rc:63,al:['gluten','milk','egg','mustard','sesame'],groups:['side','burgerEx'],
 n:T('Cheeseburger Factory','Factory cheeseburger','Cheeseburger Factory'),d:T('Ternera de 180 g, cheddar fundido, tomate, lechuga y pepinillos en pan brioche. Con patatas.','180 g beef patty, melted cheddar, tomato, lettuce and pickles on a brioche bun. With fries.','Vedella de 180 g, cheddar fos, tomàquet, enciam i cogombrets en pa brioix. Amb patates.')},
{id:'combo',cat:'burgers',img:I+'combo.png',pos:'35% 60%',price:12.9,popular:true,r:4.6,rc:88,al:['gluten','milk','egg','mustard'],groups:['drink','burgerEx'],
 n:T('Combo Factory','Factory combo','Combo Factory'),d:T('Hamburguesa clásica, patatas fritas, 4 nuggets de pollo y un refresco. Para los días de mucha hambre.','Classic burger, fries, 4 chicken nuggets and a soft drink. For the really hungry days.','Hamburguesa clàssica, patates, 4 nuggets de pollastre i un refresc. Per als dies de molta gana.')},
{id:'margarita',cat:'pizza',img:I+'pizza.png',pos:'50% 50%',price:9.5,veg:true,r:4.6,rc:57,al:['gluten','milk'],groups:['pizzaSize','pizzaEx'],
 n:T('Pizza margarita','Margherita pizza','Pizza margarida'),d:T('Salsa de tomate, mozzarella fundida, tomates cherry y albahaca fresca.','Tomato sauce, melted mozzarella, cherry tomatoes and fresh basil.','Salsa de tomàquet, mozzarella fosa, tomàquets cherry i alfàbrega fresca.')},
{id:'pizza-kebab',cat:'pizza',img:I+'pizza.png',pos:'80% 30%',price:11.5,r:4.4,rc:39,al:['gluten','milk'],groups:['pizzaSize','pizzaEx'],
 n:T('Pizza kebab','Kebab pizza','Pizza kebab'),d:T('Tomate, mozzarella, carne de kebab, cebolla morada y salsa de yogur por encima.','Tomato, mozzarella, kebab meat, red onion and a drizzle of yogurt sauce.','Tomàquet, mozzarella, carn de kebab, ceba morada i salsa de iogurt per sobre.')},
{id:'alitas',cat:'sides',img:I+'wings.png',pos:'50% 50%',price:7.5,spicy:true,r:4.7,rc:81,al:['egg','milk'],groups:['spice','wings'],
 n:T('Alitas picantes','Spicy wings','Aletes picants'),d:T('Alitas de pollo marinadas y crujientes, con patatas y salsa de ajo para mojar.','Crispy marinated chicken wings with fries and a garlic dip.','Aletes de pollastre marinades i cruixents, amb patates i salsa d\u2019all per sucar.')},
{id:'ensalada',cat:'sides',img:I+'salad.png',pos:'50% 50%',price:6.9,veg:true,r:4.4,rc:22,al:['mustard'],groups:['salad'],
 n:T('Ensalada de la casa','House salad','Amanida de la casa'),d:T('Lechuga, tomate, pepino, cebolla morada y maíz con vinagreta de mostaza.','Lettuce, tomato, cucumber, red onion and sweetcorn with a mustard vinaigrette.','Enciam, tomàquet, cogombre, ceba morada i blat de moro amb vinagreta de mostassa.')},
{id:'refresco',cat:'drinks',price:1.8,r:4.8,rc:40,al:[],groups:['soda'],n:T('Refresco en lata','Soft drink (can)','Refresc de llauna'),d:T('33 cl, bien frío.','33 cl, ice cold.','33 cl, ben fred.')},
{id:'agua',cat:'drinks',price:1.2,r:4.9,rc:18,al:[],groups:[],n:T('Agua mineral','Still water','Aigua mineral'),d:T('50 cl.','50 cl.','50 cl.')},
{id:'ayran',cat:'drinks',price:2,r:4.7,rc:15,al:['milk'],groups:[],n:T('Ayran','Ayran','Ayran'),d:T('Bebida de yogur fresca y ligeramente salada.','Chilled, lightly salted yogurt drink.','Beguda de iogurt fresca i lleugerament salada.')}
];
const addresses=[
{id:'a1',label:'Carrer de Guifré, 301, Badalona',km:0.8},
{id:'a2',label:'Carrer del Mar, 45, Badalona',km:1.2},
{id:'a3',label:'Rambla de Sant Adrià, 12, Sant Adrià de Besòs',km:1.9},
{id:'a4',label:'Av. de Martí Pujol, 210, Badalona',km:2.8},
{id:'a5',label:'Carrer de Francesc Layret, 88, Badalona',km:3.6},
{id:'a8',label:'Av. del Maresme, 150, Badalona',km:4.3},
{id:'a6',label:'Passeig de Gràcia, 55, Barcelona',km:9.4},
{id:'a7',label:'Rambla de Catalunya, 20, Barcelona',km:8.7}];
const riders=[
{id:'r1',name:'Karim Benali',short:'Karim B.',phone:'+34 634 118 902',active:true,today:9},
{id:'r2',name:'Lucía Martín',short:'Lucía M.',phone:'+34 677 240 515',active:true,today:7},
{id:'r3',name:'Pau Roca',short:'Pau R.',phone:'+34 655 903 377',active:false,today:0}];
const reviews=[
{id:'v1',name:'Marc Puig',stars:5,text:'El dürüm gratinat és espectacular. Ha arribat calent i en 20 minuts.',date:'14/09/2026',ref:'KF-2398',status:'published',reply:''},
{id:'v2',name:'Sara López',stars:4,text:'Muy buena cantidad y bien de precio. Las patatas llegaron un poco blandas, pero el kebab mixto, de diez.',date:'18/09/2026',ref:'KF-2411',status:'published',reply:'¡Gracias, Sara! Ya estamos probando un envase con ventilación para las patatas.'},
{id:'v3',name:'Ahmed R.',stars:3,text:'Food was tasty but delivery took almost 45 minutes on a Friday night.',date:'19/09/2026',ref:'KF-2420',status:'published',reply:''},
{id:'v4',name:'Nerea Gil',stars:5,text:'Las alitas picantes pican de verdad. Repetiremos seguro.',date:'22/09/2026',ref:'KF-2447',status:'published',reply:''},
{id:'v5',name:'Jordi Mas',stars:4,text:'Pizza margarita muy buena, masa fina. El repartidor muy amable.',date:'26/09/2026',ref:'KF-2475',status:'pending',reply:''}];
const coupons=[
{code:'FACTORY10',pct:10,desc:T('10 % en todo el pedido','10% off the whole order','10 % en tota la comanda'),uses:42,active:true},
{code:'BIENVENIDA',amt:3,desc:T('3 € en tu primer pedido','3 € off your first order','3 € a la primera comanda'),uses:118,active:true},
{code:'VERANO25',pct:25,desc:T('25 % campaña de verano','25% summer campaign','25 % campanya d\u2019estiu'),uses:301,active:false}];
const hours=[
{d:T('lunes','Monday','dilluns'),h:'12:30–23:30'},{d:T('martes','Tuesday','dimarts'),h:'12:30–23:30'},{d:T('miércoles','Wednesday','dimecres'),h:'12:30–23:30'},{d:T('jueves','Thursday','dijous'),h:'12:30–23:30'},{d:T('viernes','Friday','divendres'),h:'12:30–24:00'},{d:T('sábado','Saturday','dissabte'),h:'12:30–24:00'},{d:T('domingo','Sunday','diumenge'),h:'12:30–23:30'}];
function item(id){return items.find(i=>i.id===id)}
function defaultSel(id){const s={};(item(id).groups||[]).forEach(g=>{const G=groups[g];s[g]=G.type==='radio'?G.opts[0].id:[]});return s}
function unit(id,sel,ov){const it=item(id);let p=ov!=null?ov:it.price;(it.groups||[]).forEach(g=>{const G=groups[g],v=sel&&sel[g];if(v==null)return;(Array.isArray(v)?v:[v]).forEach(o=>{const op=G.opts.find(x=>x.id===o);if(op)p+=op.d})});return Math.round(p*100)/100}
function mkOrder(o,now){
 const lines=o.lines.map((l,i)=>({key:'l'+i,itemId:l[0],qty:l[1],sel:Object.assign(defaultSel(l[0]),l[2]||{}),note:l[3]||''}));
 const subtotal=lines.reduce((a,l)=>a+unit(l.itemId,l.sel)*l.qty,0);
 const fee=o.type==='pickup'?0:(o.km<=2?1.5:2.9);
 const placedAt=now-o.ago*60000;
 const order=Object.assign({id:'o'+o.ref,ref:'KF-'+o.ref,lang:'es',mine:false,type:'delivery',lines,subtotal:Math.round(subtotal*100)/100,fee,discount:0,paid:o.pay==='online',placedAt,riderId:null,eta:null,collected:null,review:null,notifs:[],notify:['whatsapp'],changeFor:null,addressNote:''},o);
 order.ref='KF-'+o.ref;order.id='o'+o.ref;
 order.total=Math.round((order.subtotal+fee)*100)/100;
 const flow=['placed','accepted','preparing','assigned','out','delivered'];
 const idx=flow.indexOf(o.status);order.history=[];
 for(let i=0;i<=idx;i++){if(o.type==='pickup'&&(flow[i]==='assigned'||flow[i]==='out'))continue;order.history.push({s:flow[i],at:placedAt+i*Math.min(5,o.ago/(idx+1))*60000})}
 if(idx>=1&&!order.eta)order.eta=25;
 if(order.eta)order.etaAt=placedAt+(order.eta+2)*60000;
 delete order.lines;delete order.ago;order.lines=lines;return order;
}
function seedOrders(now){return [
 {ref:2481,status:'placed',ago:1,customer:'Marta Giménez',phone:'+34 611 402 877',address:'Carrer de Guifré, 120, Badalona',km:0.9,pay:'cash',changeFor:50,lines:[['durum-grat',2,{meat:'mixed',sauce:['yog','hot']}],['refresco',2]]},
 {ref:2480,status:'accepted',ago:6,eta:25,customer:'Oriol Vidal',phone:'+34 622 918 340',address:'Av. d\u2019Alfons XIII, 44, Badalona',km:1.7,pay:'pos',lines:[['cheeseburger',1,{burgerEx:['bacon']}],['alitas',1,{spice:'hot'}]]},
 {ref:2479,status:'preparing',ago:11,eta:15,type:'pickup',customer:'Fatima Zahra El Idrissi',phone:'+34 688 305 116',address:'',km:0,pay:'online',lines:[['plato-falafel',1,{},'Sin cebolla, por favor'],['ayran',1]]},
 {ref:2478,status:'assigned',ago:17,eta:25,riderId:'r2',customer:'Daniel Romero',phone:'+34 699 551 204',address:'Carrer del Mar, 12, Badalona',km:1.3,pay:'online',lines:[['combo',2,{drink:'zero'}]]},
 {ref:2477,status:'out',ago:26,eta:30,riderId:'r1',customer:'Carla Serra',phone:'+34 610 774 289',address:'Av. de Martí Pujol, 180, Badalona',km:2.6,pay:'cash',changeFor:50,addressNote:'3º 2ª · timbre no funciona, llamar',lines:[['margarita',1,{pizzaSize:'f'}],['alitas',1,{wings:'12'}]]},
 {ref:2476,status:'delivered',ago:58,eta:25,riderId:'r1',customer:'Iván Torres',phone:'+34 644 120 877',address:'Carrer de Francesc Layret, 60, Badalona',km:3.3,pay:'pos',collected:{method:'pos'},lines:[['durum-pollo',1,{meat:'beef'}],['agua',1]]},
 {ref:2475,status:'delivered',ago:84,eta:25,riderId:'r2',customer:'Jordi Mas',phone:'+34 655 870 112',address:'Rambla de Sant Adrià, 30, Sant Adrià de Besòs',km:1.8,pay:'cash',collected:{method:'cash'},review:{stars:4},lines:[['margarita',1]]},
 {ref:2419,status:'delivered',ago:20160,eta:25,riderId:'r1',mine:true,customer:'Laura Pérez',phone:'+34 612 345 678',address:'Carrer de Guifré, 301, Badalona',km:0.8,pay:'cash',collected:{method:'cash'},review:{stars:5},lines:[['durum-grat',1,{meat:'chicken',sauce:['yog']}],['alitas',1,{spice:'hot'}]]}
].map(o=>mkOrder(o,now))}
function seedAudit(now){const m=x=>now-x*60000;return [
 {at:m(1),who:'Web',role:'Customer',action:'Order placed',target:'KF-2481'},
 {at:m(4),who:'Adrián Soler',role:'Staff',action:'Accepted order · ETA 25 min',target:'KF-2480'},
 {at:m(9),who:'Adrián Soler',role:'Staff',action:'Assigned to Lucía M.',target:'KF-2478'},
 {at:m(22),who:'Karim Benali',role:'Rider',action:'Status → Out for delivery',target:'KF-2477'},
 {at:m(52),who:'Karim Benali',role:'Rider',action:'Delivered · card (POS) collected',target:'KF-2476'},
 {at:m(95),who:'Sara Molina',role:'Manager',action:'Marked unavailable today',target:'Pizza kebab'},
 {at:m(180),who:'Sara Molina',role:'Manager',action:'Price 7,50 € → 7,90 €',target:'Dürüm gratinado'},
 {at:m(300),who:'Sara Molina',role:'Manager',action:'Coupon deactivated',target:'VERANO25'}]}

const c={};
c.es={
vCustomer:'Cliente',vAdmin:'Admin',vRider:'Repartidor',proto:'PROTOTIPO',protoTitle:'Kebab Factory · pedidos online',reset:'Reiniciar demo',
menu:'Menú',myOrders:'Mis pedidos',cart:'Tu pedido',open:'Abierto',closesAt:'cierra a las',closed:'Cerrado ahora',opensAt:'Abrimos a las 12:30',
reviewsVerified:'reseñas verificadas',eta:'20–30 min',deliveryFrom:'Envío desde 1,50 €',noMin:'Sin pedido mínimo',
delivery:'A domicilio',pickup:'Recoger en local',deliverySub:'20–30 min · desde 1,50 €',pickupSub:'Listo en 15 min · gratis',
heroSub:'Dürüm, kebab, burgers y pizzas hechos al momento en Badalona. Pide directo al local: mismo precio que en barra y sin comisiones.',
hello:'Hola, Laura',reorderTitle:'Repite tu último pedido',reorderBtn:'Repetir pedido',
search:'Buscar en el menú',all:'Todo',unavailable:'No disponible hoy',popular:'El más pedido',veg:'Vegetariano',spicy:'Picante',
addToOrder:'Añadir al pedido',add:'Añadir',required:'Obligatorio',optional:'Opcional',pickOne:'Elige 1',upTo:'Elige hasta',
quantity:'Cantidad',notesLbl:'Nota para la cocina',notesPh:'Ej.: sin tomate, salsa aparte…',
allergens:'Alérgenos',allergyHelp:'¿Alergia grave? Llámanos antes de pedir: +34 930 00 00 00',noAllergens:'Sin alérgenos declarados',
emptyCart:'Tu pedido está vacío',emptyCartSub:'Añade algo rico del menú para empezar.',subtotal:'Subtotal',deliveryFee:'Envío',discount:'Descuento',
total:'Total',vatIncl:'IVA incluido (10 %)',checkout:'Tramitar pedido',viewOrder:'Ver pedido',products:'productos',product:'producto',
anyDrink:'¿Algo de beber?',feeAfter:'se calcula con tu dirección',free:'Gratis',
back:'Volver al menú',checkoutTitle:'Finalizar pedido',step1:'Entrega',step2:'Tus datos',step3:'Pago',
address:'Dirección de entrega',addressPh:'Calle y número, p. ej. Carrer del Mar 45',saved:'Guardadas',
addrOk:'Entregamos aquí',addrOut:'Fuera de nuestra zona de reparto',addrOutSub:'Repartimos hasta 5 km del local. Puedes pasar a recogerlo tú.',switchPickup:'Cambiar a recogida',
addrNotFound:'No encontramos esa dirección. Prueba con calle y número.',zone1:'Zona 1 · hasta 2 km',zone2:'Zona 2 · 2–5 km',change:'Cambiar',
addrExtra:'Piso, puerta o indicaciones (opcional)',addrExtraPh:'Ej.: 3º 2ª, timbre no funciona',
pickupAt:'Recoges en',pickupAddr:'Kebab Factory Unit-3 · Badalona',seeMap:'Ver en Google Maps',
when:'¿Cuándo?',asap:'Lo antes posible',schedule:'Programar',closedNotice:'Ahora estamos cerrados. Programa tu pedido y lo preparamos al abrir.',
guest:'Seguir como invitado',login:'Iniciar sesión',continueAs:'Continuar como Laura Pérez',loggedAs:'Sesión iniciada como',logout:'Salir',accountHint:'Guarda direcciones y repite pedidos en un toque.',
name:'Nombre',phone:'Teléfono',email:'Email (para el recibo)',notifyBy:'Avísame del estado por',
payCash:'Efectivo',payCashSub:'Pagas al repartidor al recibirlo',payPos:'Tarjeta al recibir',payPosSub:'El repartidor lleva datáfono',payOnline:'Pagar ahora online',payOnlineSub:'Tarjeta o Bizum · pasarela Redsys',
changeFor:'¿Con cuánto pagas? (opcional)',exact:'Justo',
coupon:'¿Tienes un cupón?',couponPh:'Código',apply:'Aplicar',couponBad:'Este cupón no es válido o ha caducado.',couponOk:'aplicado',
secure:'Pago seguro con Redsys. Nunca vemos ni guardamos los datos de tu tarjeta.',trustRating:'4,6 de 5 · 318 reseñas verificadas',trustDirect:'Pides directo al local, sin comisiones',
confirm:'Confirmar pedido',payNow:'Pagar',summary:'Resumen',needAddress:'Añade una dirección dentro de la zona para continuar.',needName:'Añade tu nombre y teléfono.',needSlot:'Elige una hora para tu pedido.',
redirecting:'Pasarela segura de tu banco',rsMerchant:'Comercio',rsAmount:'Importe',rsOrder:'Pedido',rsCard:'Número de tarjeta',rsExp:'Caducidad',rsCvv:'CVV',rsPay:'Pagar',rsCancel:'Cancelar',rsNote:'Esta página es de la pasarela Redsys. Kebab Factory no recibe ni guarda los datos de tu tarjeta.',rsProcessing:'Procesando pago…',rsBizum:'Pagar con Bizum',
orderReceived:'¡Pedido recibido!',orderRef:'Número de pedido',statusLink:'Enlace de seguimiento',copy:'Copiar',copied:'Copiado',trackOrder:'Seguir mi pedido',
notifSent:'Te hemos enviado la confirmación por',arrivesAt:'Llega hacia las',readyAt:'Listo hacia las',waitingAccept:'Esperando a que el local acepte',
st_placed:'Recibido',st_accepted:'Aceptado',st_preparing:'Preparando',st_assigned:'Repartidor asignado',st_out:'En reparto',st_delivered:'Entregado',st_rejected:'Rechazado',st_collected:'Recogido',
sd_placed:'El local está revisando tu pedido.',sd_accepted:'Confirmado. Empezamos enseguida.',sd_preparing:'Tu comida se está haciendo al momento.',sd_out:'Tu pedido va de camino.',sd_delivered:'¡Que aproveche!',sd_collected:'¡Que aproveche!',sd_ready:'Pasa a recogerlo al local.',
riderOnWay:'va de camino',riderWillPick:'recogerá tu pedido en breve',call:'Llamar',notifications:'Avisos enviados',
rateTitle:'¿Qué tal todo?',rateSub:'Tu opinión ayuda a otros vecinos a decidir.',rateBtn:'Valorar pedido',reviewLocked:'Podrás valorar tu pedido cuando te lo entreguemos.',verifiedOrder:'Reseña verificada · pedido',
tag1:'Llegó caliente',tag2:'Buena cantidad',tag3:'Muy rápido',tag4:'Bien empaquetado',tag5:'Trato amable',commentPh:'Cuéntanos más (opcional)',send:'Enviar reseña',
thanks:'¡Gracias por tu reseña!',thanksSub:'La publicaremos en el menú en cuanto el local la revise.',starsLbl:'Tu puntuación',
account:'Mi cuenta',history:'Historial de pedidos',savedAddr:'Direcciones guardadas',reorder:'Repetir',track:'Seguir',rate:'Valorar',home:'Casa',work:'Trabajo',
cookieTitle:'Tu privacidad',cookieText:'Usamos cookies necesarias para que funcione tu pedido y, solo si aceptas, cookies de análisis para mejorar la web.',accept:'Aceptar todas',reject:'Rechazar opcionales',
allergenInfo:'Información de alérgenos',privacy:'Privacidad',cookies:'Cookies',hoursLbl:'Horario',today:'Hoy',
demoHint:'Demo: abre la vista Admin (arriba) para aceptar este pedido y verlo avanzar aquí.',
noResults:'No hay platos que coincidan con',clearSearch:'Borrar búsqueda',remove:'Quitar',
paidOnline:'Pagado online',payOnDelivery:'Pago al recibir',rejectedMsg:'Lo sentimos, el local no puede atender tu pedido ahora. No se te ha cobrado nada.',
errTitle:'No hemos podido cargar el menú',errSub:'Revisa tu conexión e inténtalo de nuevo.',retry:'Reintentar',
neighbours:'Lo que dicen los vecinos',orderLbl:'Pedido',addedToast:'Añadido a tu pedido',ofTotal:'de',items:'Productos',deliveryTo:'Entrega en',placedAt:'Pedido a las',
chWhatsapp:'WhatsApp',chSms:'SMS',chEmail:'Email',sentTo:'enviado a',
msg_placed:'Hemos recibido tu pedido {ref}. Te avisamos en cuanto el local lo acepte.',
msg_accepted:'¡Aceptado! Tu pedido {ref} llega hacia las {time}.',
msg_out:'{rider} va de camino con tu pedido {ref}. Síguelo en kebabfactory.es/pedido/{ref}',
msg_delivered:'Pedido {ref} entregado. ¿Qué tal todo? Valóralo aquí: kebabfactory.es/pedido/{ref}/valorar',
msg_rejected:'Lo sentimos, no podemos atender tu pedido {ref}. No se ha realizado ningún cargo.'
};
c.en={
vCustomer:'Customer',vAdmin:'Admin',vRider:'Rider',proto:'PROTOTYPE',protoTitle:'Kebab Factory · online ordering',reset:'Reset demo',
menu:'Menu',myOrders:'My orders',cart:'Your order',open:'Open',closesAt:'closes at',closed:'Closed now',opensAt:'We open at 12:30',
reviewsVerified:'verified reviews',eta:'20–30 min',deliveryFrom:'Delivery from 1,50 €',noMin:'No minimum order',
delivery:'Delivery',pickup:'Pick up',deliverySub:'20–30 min · from 1,50 €',pickupSub:'Ready in 15 min · free',
heroSub:'Dürüm, kebab, burgers and pizza made to order in Badalona. Order direct from the restaurant: counter prices, no commission.',
hello:'Hi, Laura',reorderTitle:'Order your last meal again',reorderBtn:'Reorder',
search:'Search the menu',all:'All',unavailable:'Unavailable today',popular:'Best seller',veg:'Vegetarian',spicy:'Spicy',
addToOrder:'Add to order',add:'Add',required:'Required',optional:'Optional',pickOne:'Choose 1',upTo:'Choose up to',
quantity:'Quantity',notesLbl:'Note for the kitchen',notesPh:'E.g. no tomato, sauce on the side…',
allergens:'Allergens',allergyHelp:'Severe allergy? Call us before ordering: +34 930 00 00 00',noAllergens:'No declared allergens',
emptyCart:'Your order is empty',emptyCartSub:'Add something tasty from the menu to get started.',subtotal:'Subtotal',deliveryFee:'Delivery',discount:'Discount',
total:'Total',vatIncl:'VAT included (10%)',checkout:'Go to checkout',viewOrder:'View order',products:'items',product:'item',
anyDrink:'Something to drink?',feeAfter:'calculated from your address',free:'Free',
back:'Back to menu',checkoutTitle:'Checkout',step1:'Delivery',step2:'Your details',step3:'Payment',
address:'Delivery address',addressPh:'Street and number, e.g. Carrer del Mar 45',saved:'Saved',
addrOk:'We deliver here',addrOut:'Outside our delivery area',addrOutSub:'We deliver up to 5 km from the restaurant. You can pick it up yourself instead.',switchPickup:'Switch to pick up',
addrNotFound:'We couldn\u2019t find that address. Try street and number.',zone1:'Zone 1 · up to 2 km',zone2:'Zone 2 · 2–5 km',change:'Change',
addrExtra:'Floor, door or directions (optional)',addrExtraPh:'E.g. 3rd floor, door 2, bell broken',
pickupAt:'Pick up at',pickupAddr:'Kebab Factory Unit-3 · Badalona',seeMap:'View on Google Maps',
when:'When?',asap:'As soon as possible',schedule:'Schedule',closedNotice:'We\u2019re closed right now. Schedule your order and we\u2019ll make it when we open.',
guest:'Continue as guest',login:'Log in',continueAs:'Continue as Laura Pérez',loggedAs:'Logged in as',logout:'Log out',accountHint:'Save addresses and reorder in one tap.',
name:'Name',phone:'Phone',email:'Email (for your receipt)',notifyBy:'Send me status updates by',
payCash:'Cash',payCashSub:'Pay the rider on arrival',payPos:'Card on delivery',payPosSub:'The rider carries a card machine',payOnline:'Pay now online',payOnlineSub:'Card or Bizum · Redsys gateway',
changeFor:'Paying with? (optional)',exact:'Exact',
coupon:'Got a coupon?',couponPh:'Code',apply:'Apply',couponBad:'This coupon isn\u2019t valid or has expired.',couponOk:'applied',
secure:'Secure payment via Redsys. We never see or store your card details.',trustRating:'4.6 out of 5 · 318 verified reviews',trustDirect:'Ordering direct, no commission',
confirm:'Place order',payNow:'Pay',summary:'Summary',needAddress:'Add an address inside our delivery area to continue.',needName:'Add your name and phone.',needSlot:'Choose a time for your order.',
redirecting:'Your bank\u2019s secure gateway',rsMerchant:'Merchant',rsAmount:'Amount',rsOrder:'Order',rsCard:'Card number',rsExp:'Expiry',rsCvv:'CVV',rsPay:'Pay',rsCancel:'Cancel',rsNote:'This page belongs to the Redsys gateway. Kebab Factory never receives or stores your card details.',rsProcessing:'Processing payment…',rsBizum:'Pay with Bizum',
orderReceived:'Order received!',orderRef:'Order number',statusLink:'Tracking link',copy:'Copy',copied:'Copied',trackOrder:'Track my order',
notifSent:'We\u2019ve sent your confirmation by',arrivesAt:'Arrives around',readyAt:'Ready around',waitingAccept:'Waiting for the restaurant to accept',
st_placed:'Received',st_accepted:'Accepted',st_preparing:'Preparing',st_assigned:'Rider assigned',st_out:'Out for delivery',st_delivered:'Delivered',st_rejected:'Rejected',st_collected:'Collected',
sd_placed:'The restaurant is reviewing your order.',sd_accepted:'Confirmed. We\u2019re starting right away.',sd_preparing:'Your food is being made fresh.',sd_out:'Your order is on its way.',sd_delivered:'Enjoy your meal!',sd_collected:'Enjoy your meal!',sd_ready:'Come and pick it up.',
riderOnWay:'is on the way',riderWillPick:'will pick up your order shortly',call:'Call',notifications:'Updates sent',
rateTitle:'How was it?',rateSub:'Your review helps your neighbours decide.',rateBtn:'Rate this order',reviewLocked:'You can review your order once it has been delivered.',verifiedOrder:'Verified review · order',
tag1:'Arrived hot',tag2:'Generous portions',tag3:'Really fast',tag4:'Well packed',tag5:'Friendly service',commentPh:'Tell us more (optional)',send:'Submit review',
thanks:'Thanks for your review!',thanksSub:'We\u2019ll publish it on the menu once the restaurant has checked it.',starsLbl:'Your rating',
account:'My account',history:'Order history',savedAddr:'Saved addresses',reorder:'Reorder',track:'Track',rate:'Rate',home:'Home',work:'Work',
cookieTitle:'Your privacy',cookieText:'We use essential cookies so your order works and, only if you accept, analytics cookies to improve the site.',accept:'Accept all',reject:'Reject optional',
allergenInfo:'Allergen information',privacy:'Privacy',cookies:'Cookies',hoursLbl:'Opening hours',today:'Today',
demoHint:'Demo: open the Admin view (top bar) to accept this order and watch it move here.',
noResults:'No dishes match',clearSearch:'Clear search',remove:'Remove',
paidOnline:'Paid online',payOnDelivery:'Pay on delivery',rejectedMsg:'Sorry, the restaurant can\u2019t take your order right now. You haven\u2019t been charged.',
errTitle:'We couldn\u2019t load the menu',errSub:'Check your connection and try again.',retry:'Try again',
neighbours:'What the neighbours say',orderLbl:'Order',addedToast:'Added to your order',ofTotal:'of',items:'Items',deliveryTo:'Delivering to',placedAt:'Ordered at',
chWhatsapp:'WhatsApp',chSms:'SMS',chEmail:'Email',sentTo:'sent to',
msg_placed:'We\u2019ve received your order {ref}. We\u2019ll let you know as soon as the restaurant accepts it.',
msg_accepted:'Accepted! Your order {ref} arrives around {time}.',
msg_out:'{rider} is on the way with your order {ref}. Track it at kebabfactory.es/pedido/{ref}',
msg_delivered:'Order {ref} delivered. How was it? Rate it here: kebabfactory.es/pedido/{ref}/valorar',
msg_rejected:'Sorry, we can\u2019t take your order {ref}. You haven\u2019t been charged.'
};
c.ca=Object.assign({},c.es,{
vCustomer:'Client',vRider:'Repartidor',proto:'PROTOTIP',protoTitle:'Kebab Factory · comandes en línia',reset:'Reinicia la demo',
menu:'Menú',myOrders:'Les meves comandes',cart:'La teva comanda',open:'Obert',closesAt:'tanca a les',closed:'Tancat ara',opensAt:'Obrim a les 12:30',
reviewsVerified:'ressenyes verificades',deliveryFrom:'Enviament des d\u20191,50 €',noMin:'Sense comanda mínima',
delivery:'A domicili',pickup:'Recollir al local',deliverySub:'20–30 min · des d\u20191,50 €',pickupSub:'A punt en 15 min · gratis',
heroSub:'Dürüm, kebab, burgers i pizzes fets al moment a Badalona. Demana directament al local: mateix preu que a la barra i sense comissions.',
hello:'Hola, Laura',reorderTitle:'Repeteix la teva última comanda',reorderBtn:'Repeteix la comanda',
search:'Cerca al menú',all:'Tot',unavailable:'No disponible avui',popular:'El més demanat',veg:'Vegetarià',spicy:'Picant',
addToOrder:'Afegeix a la comanda',add:'Afegeix',required:'Obligatori',optional:'Opcional',pickOne:'Tria\u2019n 1',upTo:'Tria\u2019n fins a',
quantity:'Quantitat',notesLbl:'Nota per a la cuina',notesPh:'Ex.: sense tomàquet, salsa a part…',
allergens:'Al·lèrgens',allergyHelp:'Al·lèrgia greu? Truca\u2019ns abans de demanar: +34 930 00 00 00',noAllergens:'Sense al·lèrgens declarats',
emptyCart:'La teva comanda és buida',emptyCartSub:'Afegeix alguna cosa bona del menú per començar.',deliveryFee:'Enviament',discount:'Descompte',
vatIncl:'IVA inclòs (10 %)',checkout:'Tramita la comanda',viewOrder:'Veure comanda',products:'productes',product:'producte',
anyDrink:'Alguna cosa per beure?',feeAfter:'es calcula amb la teva adreça',free:'Gratis',
back:'Torna al menú',checkoutTitle:'Finalitza la comanda',step1:'Lliurament',step2:'Les teves dades',step3:'Pagament',
address:'Adreça de lliurament',addressPh:'Carrer i número, p. ex. Carrer del Mar 45',saved:'Desades',
addrOk:'Hi repartim',addrOut:'Fora de la nostra zona de repartiment',addrOutSub:'Repartim fins a 5 km del local. Pots passar a recollir-la tu.',switchPickup:'Canvia a recollida',
addrNotFound:'No trobem aquesta adreça. Prova amb carrer i número.',zone1:'Zona 1 · fins a 2 km',zone2:'Zona 2 · 2–5 km',change:'Canvia',
addrExtra:'Pis, porta o indicacions (opcional)',addrExtraPh:'Ex.: 3r 2a, el timbre no funciona',
pickupAt:'Recull a',seeMap:'Veure a Google Maps',
when:'Quan?',asap:'Com més aviat millor',schedule:'Programa',closedNotice:'Ara som tancats. Programa la comanda i la preparem en obrir.',
guest:'Continua com a convidat',login:'Inicia sessió',continueAs:'Continua com a Laura Pérez',loggedAs:'Sessió iniciada com',logout:'Surt',accountHint:'Desa adreces i repeteix comandes amb un toc.',
name:'Nom',phone:'Telèfon',email:'Correu (per al rebut)',notifyBy:'Avisa\u2019m de l\u2019estat per',
payCash:'Efectiu',payCashSub:'Pagues al repartidor en rebre-la',payPos:'Targeta en rebre-la',payPosSub:'El repartidor porta datàfon',payOnline:'Paga ara en línia',payOnlineSub:'Targeta o Bizum · passarel·la Redsys',
changeFor:'Amb quant pagues? (opcional)',exact:'Just',
coupon:'Tens un cupó?',couponPh:'Codi',apply:'Aplica',couponBad:'Aquest cupó no és vàlid o ha caducat.',couponOk:'aplicat',
secure:'Pagament segur amb Redsys. Mai veiem ni desem les dades de la teva targeta.',trustRating:'4,6 de 5 · 318 ressenyes verificades',trustDirect:'Demanes directament al local, sense comissions',
confirm:'Confirma la comanda',payNow:'Paga',summary:'Resum',needAddress:'Afegeix una adreça dins la zona per continuar.',needName:'Afegeix el teu nom i telèfon.',needSlot:'Tria una hora per a la comanda.',
redirecting:'Passarel·la segura del teu banc',rsMerchant:'Comerç',rsAmount:'Import',rsOrder:'Comanda',rsCard:'Número de targeta',rsExp:'Caducitat',rsPay:'Paga',rsCancel:'Cancel·la',rsNote:'Aquesta pàgina és de la passarel·la Redsys. Kebab Factory no rep ni desa les dades de la teva targeta.',rsProcessing:'Processant el pagament…',rsBizum:'Paga amb Bizum',
orderReceived:'Comanda rebuda!',orderRef:'Número de comanda',statusLink:'Enllaç de seguiment',copy:'Copia',copied:'Copiat',trackOrder:'Segueix la comanda',
notifSent:'T\u2019hem enviat la confirmació per',arrivesAt:'Arriba cap a les',readyAt:'A punt cap a les',waitingAccept:'Esperant que el local l\u2019accepti',
st_placed:'Rebuda',st_accepted:'Acceptada',st_preparing:'Preparant',st_assigned:'Repartidor assignat',st_out:'En repartiment',st_delivered:'Lliurada',st_rejected:'Rebutjada',st_collected:'Recollida',
sd_placed:'El local està revisant la teva comanda.',sd_accepted:'Confirmada. Comencem de seguida.',sd_preparing:'El teu menjar s\u2019està fent al moment.',sd_out:'La teva comanda és de camí.',sd_delivered:'Bon profit!',sd_collected:'Bon profit!',
riderOnWay:'és de camí',riderWillPick:'recollirà la teva comanda aviat',call:'Truca',notifications:'Avisos enviats',
rateTitle:'Què tal tot?',rateSub:'La teva opinió ajuda altres veïns a decidir.',rateBtn:'Valora la comanda',reviewLocked:'Podràs valorar la comanda quan te la lliurem.',verifiedOrder:'Ressenya verificada · comanda',
tag1:'Ha arribat calenta',tag2:'Bona quantitat',tag3:'Molt ràpid',tag4:'Ben empaquetada',tag5:'Tracte amable',commentPh:'Explica\u2019ns més (opcional)',send:'Envia la ressenya',
thanks:'Gràcies per la teva ressenya!',thanksSub:'La publicarem al menú quan el local l\u2019hagi revisat.',starsLbl:'La teva puntuació',
account:'El meu compte',history:'Historial de comandes',savedAddr:'Adreces desades',reorder:'Repeteix',track:'Segueix',rate:'Valora',home:'Casa',work:'Feina',
cookieTitle:'La teva privacitat',cookieText:'Fem servir galetes necessàries perquè funcioni la comanda i, només si acceptes, galetes d\u2019anàlisi per millorar el web.',accept:'Accepta-les totes',reject:'Rebutja les opcionals',
allergenInfo:'Informació d\u2019al·lèrgens',privacy:'Privacitat',cookies:'Galetes',hoursLbl:'Horari',today:'Avui',
demoHint:'Demo: obre la vista Admin (a dalt) per acceptar aquesta comanda i veure-la avançar aquí.',
noResults:'No hi ha plats que coincideixin amb',clearSearch:'Esborra la cerca',remove:'Treu',
paidOnline:'Pagat en línia',payOnDelivery:'Pagament en rebre-la',rejectedMsg:'Ho sentim, el local no pot atendre la teva comanda ara. No se t\u2019ha cobrat res.',
errTitle:'No hem pogut carregar el menú',errSub:'Revisa la connexió i torna-ho a provar.',retry:'Torna-ho a provar',
neighbours:'Què diuen els veïns',orderLbl:'Comanda',addedToast:'Afegit a la teva comanda',items:'Productes',deliveryTo:'Lliurament a',placedAt:'Comanda a les',
sentTo:'enviat a',
msg_placed:'Hem rebut la teva comanda {ref}. T\u2019avisem quan el local l\u2019accepti.',
msg_accepted:'Acceptada! La teva comanda {ref} arriba cap a les {time}.',
msg_out:'{rider} és de camí amb la teva comanda {ref}. Segueix-la a kebabfactory.es/pedido/{ref}',
msg_delivered:'Comanda {ref} lliurada. Què tal? Valora-la aquí: kebabfactory.es/pedido/{ref}/valorar',
msg_rejected:'Ho sentim, no podem atendre la teva comanda {ref}. No s\u2019ha fet cap càrrec.'
});
const s={};
s.en={
console:'Restaurant console',dashboard:'Dashboard',orders:'Orders',menu:'Menu',settings:'Settings',riders:'Riders',reports:'Reports',reviews:'Reviews',audit:'Audit log',
manager:'Manager',staff:'Staff',role:'Role',today:'Today',ordersToday:'Orders today',revenue:'Revenue today',avgTicket:'Average ticket',avgDelivery:'Avg. delivery time',rating:'Rating',
needsAction:'Needs action',needsActionSub:'New orders waiting to be accepted',allCaught:'All caught up — no new orders waiting.',pipeline:'Live pipeline',ridersNow:'Riders now',
accept:'Accept',reject:'Reject',eta:'ETA',startPrep:'Start preparing',assignTo:'Assign to',markOut:'Mark out for delivery',markDelivered:'Mark delivered',markCollected:'Mark collected',withRider:'With rider',
st_placed:'Placed',st_accepted:'Accepted',st_preparing:'Preparing',st_assigned:'Rider assigned',st_out:'Out for delivery',st_delivered:'Delivered',st_rejected:'Rejected',st_collected:'Collected',
cash:'Cash',pos:'Card on delivery',online:'Paid online',pickup:'Pickup',delivery:'Delivery',items:'items',noOrders:'No orders here',
customer:'Customer',address:'Address',payment:'Payment',rider:'Rider',timeline:'Timeline',close:'Close',available:'available',jobs:'jobs',onDelivery:'on delivery',offShift:'off shift',
filterAll:'All',changeFor:'Change for',collected:'Collected',toCollect:'To collect',notSent:'Notifications sent',
menuTitle:'Menu management',modGroups:'Modifier groups',price:'Price',category:'Category',allergens:'Allergens',modifiers:'Modifiers',availability:'Availability',availableTag:'Available',soldOut:'Sold out today',edit:'Edit',save:'Save changes',cancel:'Cancel',editItem:'Edit item',description:'Description (ES)',requiredG:'Required · single choice',optionalG:'Optional · multi choice',
hours:'Opening hours',storeStatus:'Store status',acceptingOrders:'Accepting orders',storeClosedNow:'Store closed — customers can only schedule',closeStore:'Pause orders',openStore:'Resume orders',
zones:'Delivery zones',zone:'Zone',radius:'Radius',fee:'Fee',outside:'Outside 5 km: not served — customers are offered pickup',minOrder:'Minimum order',none:'None',
orderTypes:'Order types',payMethods:'Payment methods',coupons:'Coupons',code:'Code',uses:'Uses',status:'Status',active:'Active',inactive:'Inactive',
notifications:'Customer notifications',event:'Event',
ev_placed:'Order received',ev_accepted:'Order accepted + ETA',ev_out:'Out for delivery',ev_delivered:'Delivered + review invite',ev_rejected:'Order rejected',
ridersTitle:'Riders',onShift:'On shift',deliveriesToday:'Deliveries today',currentJobs:'Current jobs',cashHeld:'Cash to settle',noJobs:'No active jobs',
reportsTitle:'Reports',exportCsv:'Export CSV',salesChart:'Sales',paymentMix:'Payment mix',topItems:'Top items',sold:'sold',ordersL:'Orders',cancelRate:'Rejected',r_today:'Today',r_7d:'Last 7 days',r_30d:'Last 30 days',
reviewsTitle:'Reviews moderation',published:'Published',pending:'Pending',hidden:'Hidden',publish:'Publish',hide:'Hide',reply:'Reply',replyPh:'Write a public reply…',send:'Send',verified:'Verified order',restaurantReply:'Restaurant reply',
auditTitle:'Audit log',time:'Time',user:'User',action:'Action',target:'Target',
requiresManager:'This area requires the Manager role.',requiresManagerSub:'Switch role at the top right to see how access changes.',
newOrderToast:'New order',langLbl:'Language',
myJobs:'My jobs',doneToday:'Done today',shiftOn:'On shift',shiftOff:'Off shift',startShift:'Start shift',offShiftMsg:'You\u2019re off shift',offShiftSub:'Start your shift to receive jobs.',
openMaps:'Open in Maps',callCustomer:'Call',paidAlready:'Already paid online',startDelivery:'Start delivery',confirmArrival:'I\u2019ve arrived · hand over',
collectTitle:'Collect payment',collectCash:'Cash',collectCard:'Card (POS)',received:'Amount received',giveChange:'Change to give',posApproved:'Payment approved on the card machine',
confirmDelivered:'Confirm delivered',deliveredDone:'Delivered',deliveredSub:'Payment status saved. The customer has been sent a review invite.',backJobs:'Back to jobs',
noJobsTitle:'No jobs right now',noJobsSub:'New jobs appear here as soon as the restaurant assigns them.',orderL:'Order',note:'Note',km:'km',jobFor:'Job',handover:'Hand over the order',ago:'ago',min:'min'
};
s.es={
console:'Consola del restaurante',dashboard:'Resumen',orders:'Pedidos',menu:'Menú',settings:'Ajustes',riders:'Repartidores',reports:'Informes',reviews:'Reseñas',audit:'Registro',
manager:'Encargada',staff:'Personal',role:'Rol',today:'Hoy',ordersToday:'Pedidos hoy',revenue:'Ventas hoy',avgTicket:'Ticket medio',avgDelivery:'Entrega media',rating:'Valoración',
needsAction:'Requiere acción',needsActionSub:'Pedidos nuevos pendientes de aceptar',allCaught:'Todo al día: no hay pedidos nuevos esperando.',pipeline:'Pedidos en curso',ridersNow:'Repartidores ahora',
accept:'Aceptar',reject:'Rechazar',eta:'Tiempo',startPrep:'Empezar a preparar',assignTo:'Asignar a',markOut:'Marcar en reparto',markDelivered:'Marcar entregado',markCollected:'Marcar recogido',withRider:'Con repartidor',
st_placed:'Recibido',st_accepted:'Aceptado',st_preparing:'Preparando',st_assigned:'Repartidor asignado',st_out:'En reparto',st_delivered:'Entregado',st_rejected:'Rechazado',st_collected:'Recogido',
cash:'Efectivo',pos:'Tarjeta al recibir',online:'Pagado online',pickup:'Recogida',delivery:'Domicilio',items:'productos',noOrders:'Sin pedidos',
customer:'Cliente',address:'Dirección',payment:'Pago',rider:'Repartidor',timeline:'Historial',close:'Cerrar',available:'libre',jobs:'encargos',onDelivery:'en reparto',offShift:'fuera de turno',
filterAll:'Todos',changeFor:'Cambio para',collected:'Cobrado',toCollect:'Por cobrar',notSent:'Avisos enviados',
menuTitle:'Gestión del menú',modGroups:'Grupos de opciones',price:'Precio',category:'Categoría',allergens:'Alérgenos',modifiers:'Opciones',availability:'Disponibilidad',availableTag:'Disponible',soldOut:'Agotado hoy',edit:'Editar',save:'Guardar cambios',cancel:'Cancelar',editItem:'Editar producto',description:'Descripción (ES)',requiredG:'Obligatorio · una opción',optionalG:'Opcional · varias',
hours:'Horario',storeStatus:'Estado del local',acceptingOrders:'Aceptando pedidos',storeClosedNow:'Local cerrado: solo pedidos programados',closeStore:'Pausar pedidos',openStore:'Reanudar pedidos',
zones:'Zonas de reparto',zone:'Zona',radius:'Radio',fee:'Tarifa',outside:'Más de 5 km: sin reparto, se ofrece recogida',minOrder:'Pedido mínimo',none:'Ninguno',
orderTypes:'Tipos de pedido',payMethods:'Métodos de pago',coupons:'Cupones',code:'Código',uses:'Usos',status:'Estado',active:'Activo',inactive:'Inactivo',
notifications:'Avisos al cliente',event:'Evento',
ev_placed:'Pedido recibido',ev_accepted:'Pedido aceptado + tiempo',ev_out:'En reparto',ev_delivered:'Entregado + invitación a reseña',ev_rejected:'Pedido rechazado',
ridersTitle:'Repartidores',onShift:'En turno',deliveriesToday:'Entregas hoy',currentJobs:'Encargos actuales',cashHeld:'Efectivo por liquidar',noJobs:'Sin encargos activos',
reportsTitle:'Informes',exportCsv:'Exportar CSV',salesChart:'Ventas',paymentMix:'Métodos de pago',topItems:'Más vendidos',sold:'vendidos',ordersL:'Pedidos',cancelRate:'Rechazados',r_today:'Hoy',r_7d:'Últimos 7 días',r_30d:'Últimos 30 días',
reviewsTitle:'Moderación de reseñas',published:'Publicada',pending:'Pendiente',hidden:'Oculta',publish:'Publicar',hide:'Ocultar',reply:'Responder',replyPh:'Escribe una respuesta pública…',send:'Enviar',verified:'Pedido verificado',restaurantReply:'Respuesta del local',
auditTitle:'Registro de auditoría',time:'Hora',user:'Usuario',action:'Acción',target:'Objeto',
requiresManager:'Esta sección requiere el rol de Encargada.',requiresManagerSub:'Cambia el rol arriba a la derecha para ver cómo cambia el acceso.',
newOrderToast:'Pedido nuevo',langLbl:'Idioma',
myJobs:'Mis encargos',doneToday:'Hechos hoy',shiftOn:'En turno',shiftOff:'Fuera de turno',startShift:'Empezar turno',offShiftMsg:'Estás fuera de turno',offShiftSub:'Empieza tu turno para recibir encargos.',
openMaps:'Abrir en Maps',callCustomer:'Llamar',paidAlready:'Ya pagado online',startDelivery:'Salir a repartir',confirmArrival:'He llegado · entregar',
collectTitle:'Cobrar el pedido',collectCash:'Efectivo',collectCard:'Tarjeta (datáfono)',received:'Importe recibido',giveChange:'Cambio a devolver',posApproved:'Pago aprobado en el datáfono',
confirmDelivered:'Confirmar entrega',deliveredDone:'Entregado',deliveredSub:'Cobro registrado. Hemos enviado al cliente la invitación a valorar.',backJobs:'Volver a encargos',
noJobsTitle:'Ahora no tienes encargos',noJobsSub:'Aparecerán aquí en cuanto el local te asigne uno.',orderL:'Pedido',note:'Nota',km:'km',jobFor:'Encargo',handover:'Entrega el pedido',ago:'hace',min:'min'
};
window.KF={cats,allergens,groups,items,addresses,riders,reviews,coupons,hours,item,defaultSel,unit,seedOrders,seedAudit,i18n:{c,s},
 fmt:n=>(Math.round(n*100)/100).toFixed(2).replace('.',',')+'\u00a0€',
 mapsStore:'https://www.google.com/maps/search/?api=1&query=41.46341,2.2491358'};
})();
