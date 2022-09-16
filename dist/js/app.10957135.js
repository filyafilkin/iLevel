(function(){"use strict";var a={761:function(a,n,e){var m=e(963),i=e(252);function r(a,n,e,m,r,t){const o=(0,i.up)("RegistrationSection");return(0,i.wg)(),(0,i.iD)("main",null,[(0,i.Wm)(o)])}const t={class:"registration"};function o(a,n,e,m,r,o){const u=(0,i.up)("InputSearch");return(0,i.wg)(),(0,i.iD)("section",t,[(0,i.Wm)(u)])}const u={class:"autocomplete"},l=(0,i._)("label",{class:"autocomplete__label",for:"search"}," Country: ",-1),s={key:0,id:"country"},c=["onClick","onKeyup","value"],d=(0,i._)("input",{type:"reset",value:"clear"},null,-1);function h(a,n,e,r,t,o){return(0,i.wg)(),(0,i.iD)("form",u,[l,(0,i.wy)((0,i._)("input",{class:"autocomplete__input",type:"text",id:"search",placeholder:"Type here..","onUpdate:modelValue":n[0]||(n[0]=a=>r.searchTerm=a),autocomplete:"off",list:"country"},null,512),[[m.nr,r.searchTerm]]),r.searchCountries.length?((0,i.wg)(),(0,i.iD)("datalist",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.searchCountries,(a=>((0,i.wg)(),(0,i.iD)("option",{key:a.name,onClick:n=>r.selectCountry(a.name),onKeyup:(0,m.D2)((n=>r.selectCountry(a.name)),["enter"]),value:a.name},null,40,c)))),128))])):(0,i.kq)("",!0),d])}var p=e(262),g=JSON.parse('[{"name":"Albania"},{"name":"Åland Islands"},{"name":"Algeria"},{"name":"American Samoa"},{"name":"Andorra"},{"name":"Angola"},{"name":"Anguilla"},{"name":"Antarctica"},{"name":"Antigua and Barbuda"},{"name":"Argentina"},{"name":"Armenia"},{"name":"Aruba"},{"name":"Australia"},{"name":"Austria"},{"name":"Azerbaijan"},{"name":"Bahamas "},{"name":"Bahrain"},{"name":"Bangladesh"},{"name":"Barbados"},{"name":"Belarus"},{"name":"Belgium"},{"name":"Belize"},{"name":"Benin"},{"name":"Bermuda"},{"name":"Bhutan"},{"name":"Bolivia"},{"name":"Bonaire, Sint Eustatius and Saba"},{"name":"Bosnia and Herzegovina"},{"name":"Botswana"},{"name":"Bouvet Island"},{"name":"Brazil"},{"name":"British Indian Ocean Territory "},{"name":"Brunei Darussalam"},{"name":"Bulgaria"},{"name":"Burkina Faso"},{"name":"Burundi"},{"name":"Cabo Verde"},{"name":"Cambodia"},{"name":"Cameroon"},{"name":"Canada"},{"name":"Cayman Islands "},{"name":"Central African Republic "},{"name":"Chad"},{"name":"Chile"},{"name":"China"},{"name":"Christmas Island"},{"name":"Cocos (Keeling) Islands "},{"name":"Colombia"},{"name":"Comoros "},{"name":"Congo"},{"name":"Congo "},{"name":"Cook Islands "},{"name":"Costa Rica"},{"name":"Croatia"},{"name":"Cuba"},{"name":"Curaçao"},{"name":"Cyprus"},{"name":"Czechia"},{"name":"Côte d\'Ivoire"},{"name":"Denmark"},{"name":"Djibouti"},{"name":"Dominica"},{"name":"Dominican Republic "},{"name":"Ecuador"},{"name":"Egypt"},{"name":"El Salvador"},{"name":"Equatorial Guinea"},{"name":"Eritrea"},{"name":"Estonia"},{"name":"Eswatini"},{"name":"Ethiopia"},{"name":"Falkland Islands"},{"name":"Faroe Islands "},{"name":"Fiji"},{"name":"Finland"},{"name":"France"},{"name":"French Guiana"},{"name":"French Polynesia"},{"name":"French Southern Territories"},{"name":"Gabon"},{"name":"Gambia "},{"name":"Georgia"},{"name":"Germany"},{"name":"Ghana"},{"name":"Gibraltar"},{"name":"Greece"},{"name":"Greenland"},{"name":"Grenada"},{"name":"Guadeloupe"},{"name":"Guam"},{"name":"Guatemala"},{"name":"Guernsey"},{"name":"Guinea"},{"name":"Guinea-Bissau"},{"name":"Guyana"},{"name":"Haiti"},{"name":"Heard Island and McDonald Islands"},{"name":"Holy See "},{"name":"Honduras"},{"name":"Hong Kong"},{"name":"Hungary"},{"name":"Iceland"},{"name":"India"},{"name":"Indonesia"},{"name":"Iran"},{"name":"Iraq"},{"name":"Ireland"},{"name":"Isle of Man"},{"name":"Israel"},{"name":"Italy"},{"name":"Jamaica"},{"name":"Japan"},{"name":"Jersey"},{"name":"Jordan"},{"name":"Kazakhstan"},{"name":"Kenya"},{"name":"Kiribati"},{"name":"Korea"},{"name":"Korea"},{"name":"Kuwait"},{"name":"Kyrgyzstan"},{"name":"Lao People\'s Democratic Republic"},{"name":"Latvia"},{"name":"Lebanon"},{"name":"Lesotho"},{"name":"Liberia"},{"name":"Libya"},{"name":"Liechtenstein"},{"name":"Lithuania"},{"name":"Luxembourg"},{"name":"Macao"},{"name":"Madagascar"},{"name":"Malawi"},{"name":"Malaysia"},{"name":"Maldives"},{"name":"Mali"},{"name":"Malta"},{"name":"Marshall Islands"},{"name":"Martinique"},{"name":"Mauritania"},{"name":"Mauritius"},{"name":"Mayotte"},{"name":"Mexico"},{"name":"Micronesia"},{"name":"Moldova "},{"name":"Monaco"},{"name":"Mongolia"},{"name":"Montenegro"},{"name":"Montserrat"},{"name":"Morocco"},{"name":"Mozambique"},{"name":"Myanmar"},{"name":"Namibia"},{"name":"Nauru"},{"name":"Nepal"},{"name":"Netherlands "},{"name":"New Caledonia"},{"name":"New Zealand"},{"name":"Nicaragua"},{"name":"Niger "},{"name":"Nigeria"},{"name":"Niue"},{"name":"Norfolk Island"},{"name":"Northern Mariana Islands"},{"name":"Norway"},{"name":"Oman"},{"name":"Pakistan"},{"name":"Palau"},{"name":"Palestine"},{"name":"Panama"},{"name":"Papua New Guinea"},{"name":"Paraguay"},{"name":"Peru"},{"name":"Philippines "},{"name":"Pitcairn"},{"name":"Poland"},{"name":"Portugal"},{"name":"Puerto Rico"},{"name":"Qatar"},{"name":"Republic of North Macedonia"},{"name":"Romania"},{"name":"Russian Federation"},{"name":"Rwanda"},{"name":"Réunion"},{"name":"Saint Barthélemy"},{"name":"Saint Helena"},{"name":"Saint Kitts and Nevis"},{"name":"Saint Lucia"},{"name":"Saint Martin"},{"name":"Saint Pierre and Miquelon"},{"name":"Saint Vincent and the Grenadines"},{"name":"Samoa"},{"name":"San Marino"},{"name":"Sao Tome and Principe"},{"name":"Saudi Arabia"},{"name":"Senegal"},{"name":"Serbia"},{"name":"Seychelles"},{"name":"Sierra Leone"},{"name":"Singapore"},{"name":"Sint Maarten"},{"name":"Slovakia"},{"name":"Slovenia"},{"name":"Solomon Islands"},{"name":"Somalia"},{"name":"South Africa"},{"name":"South Georgia and the South Sandwich Islands"},{"name":"South Sudan"},{"name":"Spain"},{"name":"Sri Lanka"},{"name":"Sudan "},{"name":"Suriname"},{"name":"Svalbard and Jan Mayen"},{"name":"Sweden"},{"name":"Switzerland"},{"name":"Syrian Arab Republic"},{"name":"Taiwan"},{"name":"Tajikistan"},{"name":"Tanzania"},{"name":"Thailand"},{"name":"Timor-Leste"},{"name":"Togo"},{"name":"Tokelau"},{"name":"Tonga"},{"name":"Trinidad and Tobago"},{"name":"Tunisia"},{"name":"Turkey"},{"name":"Turkmenistan"},{"name":"Turks and Caicos Islands"},{"name":"Tuvalu"},{"name":"Uganda"},{"name":"Ukraine"},{"name":"United Arab Emirates "},{"name":"United Kingdom of Great Britain and Northern Ireland"},{"name":"United States Minor Outlying Islands"},{"name":"United States of America"},{"name":"Uruguay"},{"name":"Uzbekistan"},{"name":"Vanuatu"},{"name":"Venezuela"},{"name":"Viet Nam"},{"name":"Virgin Islands"},{"name":"Wallis and Futuna"},{"name":"Western Sahara"},{"name":"Yemen"},{"name":"Zambia"},{"name":"Zimbabwe"}]'),f={name:"InputSearch",methods:{},setup(){let a=(0,p.iH)("");const n=(0,i.Fl)((()=>""===a.value?[]:g.filter((n=>{if(n.name.toLowerCase().includes(a.value.toLowerCase()))return n})))),e=n=>{r.value=n,a.value=""},m=a=>{r.value=a,a=""};let r=(0,p.iH)("");return{countries:g,searchTerm:a,searchCountries:n,selectCountry:e,selectedCountry:r,clearInput:m}}},b=e(744);const y=(0,b.Z)(f,[["render",h]]);var S=y,v={name:"RegistrationSection",components:{InputSearch:S}};const C=(0,b.Z)(v,[["render",o]]);var I=C,M={name:"App",components:{RegistrationSection:I}};const w=(0,b.Z)(M,[["render",r]]);var k=w;(0,m.ri)(k).mount("#app")}},n={};function e(m){var i=n[m];if(void 0!==i)return i.exports;var r=n[m]={exports:{}};return a[m](r,r.exports,e),r.exports}e.m=a,function(){var a=[];e.O=function(n,m,i,r){if(!m){var t=1/0;for(s=0;s<a.length;s++){m=a[s][0],i=a[s][1],r=a[s][2];for(var o=!0,u=0;u<m.length;u++)(!1&r||t>=r)&&Object.keys(e.O).every((function(a){return e.O[a](m[u])}))?m.splice(u--,1):(o=!1,r<t&&(t=r));if(o){a.splice(s--,1);var l=i();void 0!==l&&(n=l)}}return n}r=r||0;for(var s=a.length;s>0&&a[s-1][2]>r;s--)a[s]=a[s-1];a[s]=[m,i,r]}}(),function(){e.d=function(a,n){for(var m in n)e.o(n,m)&&!e.o(a,m)&&Object.defineProperty(a,m,{enumerable:!0,get:n[m]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){var a={143:0};e.O.j=function(n){return 0===a[n]};var n=function(n,m){var i,r,t=m[0],o=m[1],u=m[2],l=0;if(t.some((function(n){return 0!==a[n]}))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(u)var s=u(e)}for(n&&n(m);l<t.length;l++)r=t[l],e.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return e.O(s)},m=self["webpackChunkautocomplete"]=self["webpackChunkautocomplete"]||[];m.forEach(n.bind(null,0)),m.push=n.bind(null,m.push.bind(m))}();var m=e.O(void 0,[998],(function(){return e(761)}));m=e.O(m)})();
//# sourceMappingURL=app.10957135.js.map