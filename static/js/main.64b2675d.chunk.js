(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{11:function(t,e,c){t.exports={root:"ItemDetail_root__1E80m",image:"ItemDetail_image__1wkTw","info-container":"ItemDetail_info-container__K_kcQ",info:"ItemDetail_info__3Y_OQ","black-btn":"ItemDetail_black-btn__3VOTd","go-back-btn":"ItemDetail_go-back-btn__O5Pq9"}},14:function(t,e,c){t.exports={root:"Nav_root__2nb5o",logo:"Nav_logo__2Owe1",icon:"Nav_icon__jX9DX","icon-num":"Nav_icon-num__1fev4","black-text":"Nav_black-text__3atoi"}},15:function(t,e,c){t.exports={root:"CartItem_root__3Iats",info:"CartItem_info__12lNv","qty-btns":"CartItem_qty-btns__32I1o","delete-btn":"CartItem_delete-btn__3ECUs","responsive-image":"CartItem_responsive-image__3fqfd"}},20:function(t,e,c){t.exports={root:"Home_root__RsjOT","white-btn":"Home_white-btn__2aHzJ",github:"Home_github__2yLZa"}},21:function(t,e,c){t.exports={root:"ShopItem_root__3y_6h",info:"ShopItem_info__3x_Vs","responsive-image":"ShopItem_responsive-image__1Zpvw"}},22:function(t,e,c){t.exports={root:"ComingSoon_root__12mLa",container:"ComingSoon_container__1rr3q",text:"ComingSoon_text__ovEK3"}},30:function(t,e,c){t.exports={root:"Shop_root__9mvwR"}},36:function(t,e,c){},46:function(t,e,c){"use strict";c.r(e);var a=c(2),n=c.n(a),i=c(27),o=c.n(i),r=(c(36),c(10)),s=c(31),j=c(19),l=c(5),m=c(3),b=c(13),d=c(14),h=c.n(d),_=c(1),x=function(t){var e=t.cartItemsQty;return Object(_.jsxs)("nav",{className:"".concat(h.a.root," ").concat(h.a["black-text"]),children:[Object(_.jsx)(l.b,{to:"/",children:Object(_.jsx)("h1",{className:h.a.logo,children:"The Real Shop"})}),Object(_.jsx)(l.b,{to:"/shop",children:"Shop"}),Object(_.jsx)(l.b,{to:"/cart",children:Object(_.jsxs)("div",{className:h.a.icon,children:[Object(_.jsx)(b.a,{}),Object(_.jsx)("span",{className:h.a["icon-num"],children:e})]})})]})},p=c(29),O=c(20),u=c.n(O),f=function(){return Object(_.jsxs)("div",{className:u.a.root,children:[Object(_.jsx)(l.b,{to:"/shop",children:Object(_.jsx)("button",{className:u.a["white-btn"],children:"View Catalog"})}),Object(_.jsx)("a",{className:u.a.github,href:"https://github.com/dillonlui/shopping-cart",children:Object(_.jsx)(p.a,{})})]})},g=c(30),N=c.n(g),v=c(21),k=c.n(v);var I=function(t){var e=t.id,c=t.imageId,a=t.itemName,n=t.price;return Object(_.jsxs)("div",{className:k.a.root,children:[Object(_.jsx)(l.b,{to:"/shop/".concat(e),children:Object(_.jsx)("img",{className:k.a["responsive-image"],src:"https://source.unsplash.com/".concat(c,"/400x500"),alt:e})}),Object(_.jsxs)("div",{className:k.a.info,children:[Object(_.jsx)(l.b,{to:"/shop/".concat(e),children:a}),Object(_.jsxs)("p",{children:[n.toFixed(2)," USD"]})]})]})},C=function(t){var e=t.items;return Object(_.jsx)("div",{className:N.a.root,children:e.map((function(t){return Object(_.jsx)(I,Object(r.a)({},t),t.id)}))})},y=c(11),S=c.n(y);var q=function(t){var e=t.item,c=t.addCartItem,n=Object(a.useState)(!1),i=Object(j.a)(n,2),o=i[0],r=i[1],s=Object(m.f)().goBack;return Object(_.jsxs)("div",{className:S.a.root,children:[Object(_.jsx)("img",{className:S.a.image,src:"https://source.unsplash.com/".concat(e.imageId,"/600x700"),alt:e.id}),Object(_.jsx)("div",{className:S.a["info-container"],children:Object(_.jsxs)("div",{className:S.a.info,children:[Object(_.jsx)("h1",{children:e.itemName}),Object(_.jsxs)("p",{children:[e.price.toFixed(2)," USD"]}),Object(_.jsx)("button",{className:S.a["black-btn"],onClick:function(){r(!0),c(e)},children:"Add to Cart"}),o&&Object(_.jsx)(l.b,{to:"/cart",children:Object(_.jsx)("button",{className:S.a["black-btn"],children:"Complete Order"})}),Object(_.jsxs)("button",{className:S.a["go-back-btn"],onClick:s,children:[Object(_.jsx)(b.b,{})," Go Back"]})]})})]})},w=c(15),D=c.n(w);var Q=function(t){var e=t.id,c=t.itemName,a=t.imageId,n=t.price,i=t.qty,o=t.deleteCartItem,r=t.changeQty;return Object(_.jsxs)("div",{className:D.a.root,children:[Object(_.jsx)("img",{className:D.a["responsive-image"],src:"https://source.unsplash.com/".concat(a,"/300x350"),alt:e}),Object(_.jsxs)("div",{className:D.a.info,children:[Object(_.jsx)(l.b,{to:"/shop/".concat(e),children:c}),Object(_.jsxs)("p",{children:[n.toFixed(2)," USD"]}),Object(_.jsxs)("div",{className:D.a["qty-btns"],children:[Object(_.jsx)("button",{onClick:function(){return r(e,-1)},disabled:i<2,children:"-"}),Object(_.jsx)("span",{children:i}),Object(_.jsx)("button",{onClick:function(){return r(e,1)},children:"+"})]}),Object(_.jsx)("button",{className:D.a["delete-btn"],onClick:function(){return o(e)},children:"Delete"})]})]})},T=c(9),B=c.n(T);var H=function(t){var e=t.items,c=t.deleteCartItem,a=t.changeQty,n=Object(m.f)().goBack,i=e.map((function(t){return Object(_.jsx)(Q,Object(r.a)(Object(r.a)({},t),{},{deleteCartItem:c,changeQty:a}),t.id)})),o=e.map((function(t){return t.price*t.qty})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(_.jsxs)("div",{className:B.a.root,children:[Object(_.jsx)("h1",{children:"MY SHOPPING CART"}),e.length>0?Object(_.jsxs)("div",{className:B.a["cart-container"],children:[Object(_.jsx)("div",{className:B.a["cart-items"],children:i}),Object(_.jsxs)("div",{className:B.a["cart-total"],children:[Object(_.jsxs)("button",{className:B.a["go-back-btn"],onClick:n,children:[Object(_.jsx)(b.b,{})," Go Back"]}),Object(_.jsxs)("h2",{className:B.a["total-text"],children:[Object(_.jsx)("span",{className:B.a["total-span"],children:"Total"})," ",o," USD"]}),Object(_.jsx)(l.b,{to:"/coming-soon",children:Object(_.jsx)("button",{className:B.a["black-btn"],children:"Continue"})})]})]}):Object(_.jsx)("div",{className:B.a["empty-cart-container"],children:Object(_.jsx)("h2",{className:B.a["empty-cart-text"],children:"- Your cart is empty -"})})]})},E=c(22),P=c.n(E);var R=function(){return Object(_.jsxs)("div",{className:P.a.root,children:[Object(_.jsx)("h1",{children:"Coming Soon"}),Object(_.jsx)("div",{className:P.a.container,children:Object(_.jsx)("h2",{className:P.a.text,children:"Under construction"})})]})},U=[{id:"black-leather-jacket",itemName:"Black Leather Jacket",imageId:"1Zj-h35UciY",qty:1,price:89.9},{id:"woof-hoodie",itemName:"woof Hoodie",imageId:"5-jX_6kqsaw",qty:1,price:49.9},{id:"beige-t-shirt",itemName:"Beige T-Shirt",imageId:"O4TscN7RnSc",qty:1,price:25.9},{id:"denim-overalls-with-straps",itemName:"Denim Overalls with Straps",imageId:"PJTfOzSo8fQ",qty:1,price:69.9},{id:"grey-onesie",itemName:"Grey Onesie",imageId:"GVaRGYa_cmk",qty:1,price:59.9},{id:"yellow-pom-pom-beanie",itemName:"Yellow Pom Pom Beanie",imageId:"AQRp2NH-O8k",qty:1,price:23.9},{id:"french-fries-t-shirt",itemName:"French Fries T-Shirt",imageId:"mftVVfdXomc",qty:1,price:32.9},{id:"pink-hoodie",itemName:"Pink Hoodie",imageId:"icoKXy3bDBw",qty:1,price:45.9}];var V=function(){var t=Object(a.useState)([]),e=Object(j.a)(t,2),c=e[0],n=e[1],i=function(t){c.map((function(t){return t.id})).includes(t.id)?o(t.id,1):n([].concat(Object(s.a)(c),[t]))},o=function(t,e){n(c.map((function(c){return c.id===t?Object(r.a)(Object(r.a)({},c),{},{qty:c.qty+e}):c})))},b=function(t){n(c.filter((function(e){return e.id!==t})))},d=c.reduce((function(t,e){return t+e.qty}),0);return Object(_.jsxs)(l.a,{children:[Object(_.jsx)(x,{cartItemsQty:d}),Object(_.jsxs)(m.c,{children:[Object(_.jsx)(m.a,{path:"/",exact:!0,component:f}),Object(_.jsx)(m.a,{path:"/shopping-cart",component:f}),Object(_.jsx)(m.a,{path:"/shop",exact:!0,render:function(){return Object(_.jsx)(C,{items:U})}}),Object(_.jsx)(m.a,{path:"/shop/:id",render:function(t){return Object(_.jsx)(q,{item:(e=t.match.params.id,U.find((function(t){return t.id===e}))),addCartItem:i});var e}}),Object(_.jsx)(m.a,{path:"/cart",exact:!0,render:function(){return Object(_.jsx)(H,{items:c,deleteCartItem:b,changeQty:o})}}),Object(_.jsx)(m.a,{path:"/coming-soon",exact:!0,component:R})]})]})};o.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(V,{})}),document.getElementById("root"))},9:function(t,e,c){t.exports={root:"Cart_root__1imIr","cart-container":"Cart_cart-container__1YwKV","cart-items":"Cart_cart-items__L4bK-","cart-total":"Cart_cart-total__qb0dh","total-text":"Cart_total-text__3a8E-","black-btn":"Cart_black-btn__3HEMN","go-back-btn":"Cart_go-back-btn__XhnK5","empty-cart-container":"Cart_empty-cart-container__2rxj-","empty-cart-text":"Cart_empty-cart-text__2IDQ0","total-span":"Cart_total-span__5EqWD"}}},[[46,1,2]]]);
//# sourceMappingURL=main.64b2675d.chunk.js.map