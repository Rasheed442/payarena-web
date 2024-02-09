import{s as x,j as e,m as w,B as g,L as Z,r as i,i as E,a as ie,b as ne,A as L}from"./index-35eadc1e.js";import{a as ee,b as le}from"./about-patterns-84f759f4.js";const me="/assets/about1-eb910028.jpeg",oe="/assets/about2-fee1cbd4.jpeg",ce="/assets/about3-70e2447d.png",de=()=>e.jsxs("div",{className:"",children:[e.jsx("h2",{className:"font-roboto text-center text-[3rem] pt-[15rem] text-[#242331] sm:text-[2rem] md:pt-[8rem]",children:"About Payarena"}),e.jsxs("p",{className:"text-center text-[1rem] text-[#797979] mt-[.5rem] sm:hidden",children:["Enabling Seamless payments, elevating shopping experiences, ",e.jsx("br",{})," ","ensuring trustworthiness: where seamless meets security"]}),e.jsx("p",{className:"hidden sm:block text-center text-[1.4vw] text-[#797979] mt-[.5rem] sm:text-[1rem]",children:"Enabling Seamless payments, elevating shopping experiences, ensuring trustworthiness: where seamless meets security"}),e.jsxs(xe,{children:[e.jsx("img",{src:me,alt:"",className:"img1"}),e.jsx("img",{src:oe,alt:"",className:"img2"}),e.jsx("img",{src:ce,alt:"",className:"img3"})]})]}),xe=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin-top: 2rem;

  .img1 {
    grid-area: 1 / 1 / 2/ 2;
    height: 350px;
    border-radius: 2rem;
    width: 100%;
    object-fit: fill;
  }
  .img2 {
    grid-area: 1 / 2 / 2 / 3;
    height: 350px;
    border-radius: 2rem;
    width: 100%;
  }
  .img3 {
    grid-area: 2 / 1 / 3 / 3;
    border-radius: 2rem;
    height: 350px;
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 480px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    .img1,
    .img2,
    .img3 {
      border-radius: 1rem;
    }
    .img3 {
      height: 130px;
    }
    .img1,
    .img2 {
      height: 130px;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 890px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    .img1,
    .img2,
    .img3 {
      border-radius: 1rem;
    }
    .img3 {
      height: 250px;
    }
    .img1,
    .img2 {
      height: 250px;
    }
  }
  @media only screen and (min-width: 891px) and (max-width: 1200px) {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    .img1,
    .img2,
    .img3 {
      border-radius: 1rem;
    }
    .img3 {
      height: 250px;
    }
    .img1,
    .img2 {
      height: 250px;
    }
  }
`,he="/assets/content1bg-5e606400.png",pe="/assets/content1Icon-286f35dd.svg",K=({cardType:t})=>e.jsxs(w.div,{className:"bg-footer  relative h-[100%] rounded-[1.5rem] flex items-center px-[5rem] md:px-[2rem]",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[e.jsx(ge,{$cardType:t,src:he,alt:""}),e.jsxs("div",{className:"",children:[e.jsx("img",{src:pe,alt:"",className:"sm:h-[30px]"}),e.jsx("h2",{className:"font-roboto mt-[2rem] text-white text-[2rem]",children:"Payarena Shopping Mall"}),e.jsxs("p",{className:"mt-[.7rem] text-white leading-relaxed text-[1rem]",children:["You can be sure to discover what you're looking for with our"," ",t==="bigCard"&&e.jsx("br",{}),"wide variety of merchants."," ",t==="bigCard"?e.jsxs("span",{children:["As a Seller, you have easy access to ",e.jsx("br",{}),"your customers. Head over to our mall now!"]}):""]}),e.jsx("a",{href:"https://mall.payarena.com/",target:"_blank",children:e.jsx(g,{text:"Start Shopping",background:"#009bff",width:"170px",height:"50px",fontSize:"15px",icon:ee,iconType:"img",style:{flexDirection:"row-reverse",marginTop:"2rem"}})})]})]}),ge=x.img`
  position: absolute;
  height: ${t=>t.$cardType==="smallCard"?"60%":"100%"};
  right: 0;
  top: ${t=>t.$cardType==="smallCard"?"0":""};
`,ue="/assets/content2bg-4a07674d.png",fe="/assets/content2Icon-91f6412e.svg",O=({cardType:t})=>e.jsxs(w.div,{className:"bg-white relative h-[100%] rounded-[1.5rem] flex items-center px-[3rem] md:px-[2rem]",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[e.jsx(je,{$cardType:t,src:ue,alt:""}),e.jsxs("div",{className:"",children:[e.jsx("img",{src:fe,alt:"",className:"sm:h-[30px]"}),e.jsxs("h2",{className:"font-roboto mt-[2rem] text-black text-[2rem]",children:["Verification Services"," "]}),e.jsxs("p",{className:"mt-[.7rem] text-black leading-relaxed text-[1rem] font-generalsans-light",children:["Validate the credibility and authenticity of information, people,"," ",e.jsx("br",{})," or processes with our professional verification services."]}),e.jsx("a",{href:"https://payarenaverification.com/home",target:"_blank",children:e.jsx(g,{text:"Learn More",background:"#009bff",width:"170px",height:"50px",fontSize:"15px",icon:ee,iconType:"img",style:{flexDirection:"row-reverse",marginTop:"2rem"}})})]})]}),je=x.img`
  position: absolute;
  right: 0;
  top: ${t=>(t.$cardType==="smallCard","0")};
  width: ${t=>t.$cardType==="smallCard"?"70%":"60%"};
  height: ${t=>t.$cardType==="smallCard"?"45%":"70%"};
  /* width: 50%; */
  /* height: 60%; */
`,be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAAEdCAYAAADgqOAiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA89SURBVHgB7d0Jd9Q6Eobh6iSEsAWYAPP//96c4bIEkpCFXBUpE9O43bItyVre55w+zZAMcDv9dakkWd4IENH9/f3GPR3Y/+z/2tedPf/cbDb3gl8vIjCJBfHQPY7k4T20/esDmRdQHz/1nyCPYdbnW/u9G/v6Xc0BJ7QY1AvmE3toAI/kMZS5+xVee2iYb+33bkoPNKGFBlSDeCwP4TzsPddKQ9wPswb5TgpBaBtjFfSpPIZUq2cJlTM2rcLX9tAwZ1uRCW3lLKQn8hBQfa65gobWBfhKMgoxoa2MhbQLKCENS0OsAf7hAnwrKyG0FbCetAspw900tAfuhzhZFSa0hXJB1Z60602PBWu76h6xA0xoC2IV9bl7PBOGvTnrwnspERDazFmPqkHVoS8VtSw6I/3DPS5cgK8lEEKbKRv+vhKCWgvtgbXyXixdEya0GbGq+lIeKiuTSfXS4fOlC++VzEBoM0BVbZZW3HP3uJ5SfQntSnpVlUklKB06n/uEl9AmxhAYe+wNL6FNxJZrdAisa6uEFfvobPP50KwzoY2sF9ZnAkz3V3gJbSSEFYFpaD/rsJnQBkZYEdkloQ2ECSakQmgDcIHVykpYkQShXcA2RbwR1lmREKGdwfpWDSs7mJAcoZ2AvhU5ILSeGAojF4R2D6uuOtH0QoAMENoRLrB64flrYSiMjBDaAVZddSh8IkBmCO0WelfkjtAaeleUgtDK73XXM6G6ogDNh9YFViurrr0y2YQiNBtaGw7rzDBX46AoTYaW4bCgYM2F1gVWtyDqhBPDYRSpqdDaJXQvBShYE6FlswRqUn1o6V9Rm6pD6wKrN1d+KwQWFak2tEw4oVZVhtY2TJwKUKHqQssMMWpXVWgJLFpQTWhdYHVJhy2JqF4VoSWwaEnxoSWwaE3RoSWwaFGxoSWwaFWRoSWwaFlxoSWwaF1RW/xsHZbAomnFVFo2TgAPiggtgQUeZT88tltzEFjAZB1aux72tQD4LdvQ2okTegE718MCPVkGws504ogYYECuVYwbYAE7ZBdamynm1ERgh6xC27uvDoAdsgmtTTwRWGCPLELbm3hiphjYI5eQ6FosE0+Ah9VDy0UAwDSrhpY+FphutdD2+lgAE6xZaXVYTB8LTLRKaF2V1R72hQCYLHlorY99JQBmWaPSMiwGFkgaWhsWs7wDLJAstAyLgTBSVlqGxUAASULLsBgIJ3poGRYDYaWotAyLgYCihtaqLMNiIKDYlZa9xUBg0UJrk08Mi4HAooSWyScgnliVVi8GoMoCEQQPrVVZruABIolRaRkWAxEFDS1LPEB8oSvtGwEQVbDQuip77J6OBUBUISstVRZIIEho2UgBpBOq0jJjDCSyOLRUWSCtEJX2uQBIZlFomTEG0ltaaellgcRmh9Z2P1FlgcSWVFqqLLCCWaFljzGwnrmVlkvvgJXMDe2JAFjF5NCymQJY15xKy2YKYEWTQssyD7C+qZWWZR5gZVNDS5UFVuYdWiaggDxMqbQs8wAZ8AqtTUARWiADvpWWXhbIhG9oWZsFMrE3tKzNAnnxqbT0skBGCC1QmNHQMjQG8rOv0hJYIDNHe77OrHE6N+5xbc+37vFTHj5UN+7xRB4+QI8l3o3AUYjNri+4obG+Of4riO3CPS43m831vm90PxP9eekcg164wZbSRo1VWobGcd25x2efsHbc9967p0sX3h/yMAriqqsGjVVavQseh7fFodX1q4VwNpsofCm0MU0ZC+0HYQgWw4UL6xcJyP2stOd9K/y8mjAYWnsTvBOEducC+z+JxC6fpN+t3K6eln42jo8SkftAuJSHnleHzPS7lSK06eiw+E4ScH/PNxdcDTD97nK6/KaThf2fna6saHaeygoIbTrfJCH7gPjiwqt/75kwZJ5C18i/y8NS3M4P2t6OwaQtyWbgH0I/G94P98P/R1ZEv+ulC+v3qTP7KVuSoUpLlQ3vh6yMfncvraif3Ot0IzNYS6J/xhuJbGhLHKENb9YbIQZ9c7knncG+EHQ0bB/nBrZjH4xfJbKh0D4RhJZkAsqX9mm2VqzhzeYDZSVdYIP8jNyfo8PrK4noj9BaY03P0wgL7//dLz9LZh8sCZ1HmNXXavtTItmutFTZBumwzjZ9nEvEN1uG7mxIG5R9CAT/czvbod13qR7m2UgBrN/VyttKv3su8UQbIm+HdpXF4gYUM4JprN+N9t9nV29FGbVQadMobka+gX73p/vvu5W4vC+7nOJ3aO2id05FiOPELmAvTsX97qLLIj3FDa1QZWPS17noUy0b7HdDiNLX9kPLzHFcxe9C2up3V9/llTubRQ7eWvRDy06ouA7dEPlUKmDh1b3UJfe7h4laluDV9mDHrxHHC/dGqebDcavfLTG8KUaXwftaetr03rrgVvVaW7+rF/iX1u+mmGeIE1pmjpPS1/nMveYvpCKF9rvRRz3uNdEZ96DB7YJKlU1LX/dTPfHS9ntXo7B+90mivjboh9jB1jPS0gvTP7g3zqtS13F36fW7unk+5/AWN0Sm0uZBL0x/b6dLVMUuVcu5300xRA66pZFKmw8dJutw+UOFE1X9fjfqtaYzpNr0EqzadmFlY0U+NLzvK+53P0le/e5Bog/J4KGtqp+qRL/frS28ufW7Ka5uCzbC6ELLaRX50n73jH43quhD5JBbGulpy9Dvd6vabppJv3tU0pbGg9qGXpXTn9UZ/W5wWrSK2dKoDThVtjw6VH5mdw9IdruRFHrnM6c+XF2HyFGuf+0J8udrYJmEKlfN/a6GN2W/W8yWRvYcl6+Vfjd2eIvZ0kilrUft/a6GN3a/W8SWRg0tE1F16dZ3Tyte340V3iK2NDI0rpde+ke/O00RWxoJbd36/W5VZ1pH6neL2NLI8LgN+jP+T+X9rq7xhhgyZ7+lkUrblpr73atA/W72WxoJbZta6He/yzzZb2kktO2qvd/VK4jm9LvZb2kktKDf/VvW67UcM4NOt59Zh5cxbrS8Gu133dPVhP3MSbY0un/P9Zy/i0qLbfrGbr3fzXpLI6HFkH6/W1V4J/S72Q6RCS3GdOGtud/VyjvUCmS7pZHQwke3vltjeK93rO9mu6WR0GKKFvrdc/utbLc0buz2i1XdVwZJaFU6tzd7VWw0oQcM3Nrhc7H/rg9T/j9aaYOdfI6mdP3u24r73egHzc3Z0sjwGEtp71drv5tqrXrSh4OG9l6A5bp+l1Zrukl9LcNjhKSV9rTG9d3IJoeWSovQqu13Y5h6SqNOaVNpEYv2uyc17meOQLc0em3o0ErLC4nY6Hf38660DI+RCv3uiClbGg9sPA2k0vW7Z/S7f/Gqtt06LUNkpKb9W5XruwtMCi3VFmvp+t1XAq9NFlRa5ODXXt/W+13fLY2EFjmh3/WotoQWOWq5393b1xJa5EyHyu8a63cJLYqn79Fm+l2fLY2EFqXo+t13DQyZR09p/BVaSzfBRQn09P/a+12vSqsILUpSbb+7b0tjP7Q3ApSl5n53Z7Wl0qIGNfa7XqGl0qJ0NfW7OzdZ9EN7K0AdusPVi+13x7Y0HvS+iRlk1Kb0fnew2m4focoQGbXRu98du+BGvzdPBIN97dHAN6W6hwkQi25O0PfytS2flGqwiG6HluExSqStnQ4lNaBXLqhVHKGkfa0bIfz1+0OVFihBLdV0sj9Ca7eU12rL8R/ITZXVdI6hW/npJ9hzAdbXbDVVroAO3mtrKLSs12ItVNM/Dc54D4VWX7RTAdLQGdIupMyp/GlwJeev0NqMlX7icRtMxNBd5K2PC6rpMNuG+XToa7tuT896LULT/vQb1dSbzit597SK0CIUwjqRVdmXu76+awgc/bb1aMJ3F9Z/CKw/C+zZ2PcMhtb30GRghN7a8qvAmwX2rezZJzE22US1xVw/XGC/CbzZBQ1aYZ/s+96jka/pkIb7iWKOLwIvFladdPK+fHBfaFn6wVQX3PF9nAVVl3OOxfPu7307Q2v7kG/n/KFoGm3VFpcjvaZXV2Oe2mNRITza83X9ARBaTMFMsSyvpmP2hfZS2NIIfzet7nAKXU3HjIbWhsj6yUm1hY+mbk4es5qO2Vdple5oIbRoXspqOsYntDpEbulWg5ivupUGF1TNiC7HJK2mY/aG1q76YYgMH8WfeGLVtBvyaliz+yDyqbSKWWT4ONCteKWt01o11aDq0Df797lvaJlFhi9943+XjFk11e2C+m/NspqO8Qots8iYIMvQ2mb8E3vo+77Y/tu30ir9QRBa7PPrNP+1L8fbqqb6qOaE0SmhZS8yfOlqw0dJrKZqOmYz5Zvdi6J9LVf+wMdXV22jDpNrrqZjplRapbPIhBY+Tl2obkIPk1uppmMmVVrlXjS9UJfeFj60nfrigjv7yp9Wq+mYOaHVSsvyD6bQYfJ33/VbC6peGN5sNR0zJ7T6Ar4XXkhMo4Htzjr+Y8i8VU2PxePIlZZNDq1yL7Ie78h+ZCzRVV19D1IAJpj7Yl0IsMyhPQjsRLNeMN0hJRwrAqxiyadc1vtLgVrNDq1NJnAeEJDY0n7iXAAktSi0VFsgvRAzd1RbIKHFoaXaAmmFWiOj2gKJBAkt1RZIJ+RuFKotkECw0FJtgTRC7/uk2gKRBQ0t1RaIL8YVFl8FQDTBQ+uq7Y1wMQEQTaxrGb9JY7c9BFKJElq73vabAAgu2qkBdubtjQAIKvZRH0xKAYFFDa0tAXGeFBBQikO1dMMFk1JAINFDy6QUEFaS4yttUoqdUkAAKc+c/SwMk4HFkoXW7uPCMBlYKOnp7gyTgeXWuCUDw2RggeShtWEymy6AmVa5+ZEL7qV7uhQAk615xzKttl43GQbwaLXQ2qaLTwJgklXvDWoXzNPfAhOsfkNfWwbiXreAp1zuwv1F6G8BL1mE1vrbj8L6LbBXLpWW9VvAUzahVbZ+y4HnwIisQqtccPWiAjZeADtkF1qjw2QOhQMGZBna3sYLZpSBLblW2m5iSoPLjDLQk21ole2YYqsj0JN1aJUdw/pZAPySfWgVS0HAo40U5P7+/qV7eiVAw4oKrSK4aF1xoVUEFy0rMrSK4KJVxYZWEVy0qOjQKoKL1hQfWkVw0ZIqQqsILlpRTWgVwUULqgqtcsF94Z5OBahUdaFVLrgn7um1FLJNE5iiytAqF9xD93TmHocCVKTa0CqCixpVHVrlgqtDZB0qnwhQgepD22FmGbX4F8UHtLHJrtezAAAAAElFTkSuQmCC",ye="/assets/content3Icon-9c1370f2.svg",ve="/assets/arrowBlue-dd696851.svg",G=({cardType:t})=>e.jsxs(w.div,{className:"bg-[#2778F5] relative h-[100%] rounded-[1.5rem] flex items-center px-[5rem] md:px-[2rem]",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[e.jsx(we,{$cardType:t,src:be,alt:""}),e.jsxs("div",{children:[e.jsx("img",{src:ye,alt:"",className:"sm:h-[30px]"}),e.jsxs("h2",{className:"font-roboto mt-[1rem] text-white text-[2rem]",children:["Value Added Services"," "]}),e.jsxs("p",{className:"mt-[.7rem] text-white leading-relaxed text-[.9rem]",children:["You can recharge your mobile phone or phone of any chosen beneficiary"," ",t==="bigCard"&&e.jsx("br",{}),"with airtime through payarena®. The service is available for Virtual Top-Up, ",t==="bigCard"&&e.jsx("br",{}),"Logical or Prepaid PINs for the major Telecommunication networks"]}),e.jsx(Z,{to:"/payment/airtime_recharge",children:e.jsx(g,{text:"Start Shopping",background:"#ffffff",width:"170px",height:"50px",fontSize:"15px",icon:ve,iconType:"img",color:"#2778F5",style:{flexDirection:"row-reverse",marginTop:"2rem"}})})]})]}),we=x.img`
  position: absolute;
  height: ${t=>t.$cardType==="smallCard"?"60%":"80%"};
  right: 0;
  bottom: ${t=>(t.$cardType==="smallCard","0")};
`,Ne=({contentIndex:t})=>e.jsxs("div",{className:"shadow-card rounded-[1.5rem] h-[30rem]",children:[t===0&&e.jsx(K,{cardType:"bigCard"}),t===1&&e.jsx(O,{cardType:"bigCard"}),t===2&&e.jsx(G,{cardType:"bigCard"})]}),Se=({contentIndex:t})=>e.jsxs("div",{className:"shadow-card rounded-[1.5rem] h-[26rem] w-[100%]",children:[t===2&&e.jsx(K,{cardType:"smallCard"}),t===0&&e.jsx(O,{cardType:"smallCard"}),t===1&&e.jsx(G,{cardType:"smallCard"})]}),Ae=({contentIndex:t})=>e.jsxs("div",{className:"shadow-card rounded-[1.5rem] h-[26rem] w-[100%]",children:[t===1&&e.jsx(K,{cardType:"smallCard"}),t===2&&e.jsx(O,{cardType:"smallCard"}),t===0&&e.jsx(G,{cardType:"smallCard"})]}),Ve=()=>{const[t,s]=i.useState(0);return i.useEffect(()=>{const r=setInterval(()=>{s(a=>(a+1)%3)},6e3);return()=>{clearInterval(r)}},[]),e.jsxs("div",{className:"mb-[5rem]",children:[e.jsx(Ne,{contentIndex:t}),e.jsxs("div",{className:"flex items-center justify-between gap-[2.5rem] mt-[2.5rem] sm:flex-col",children:[e.jsx(Se,{contentIndex:t}),e.jsx(Ae,{contentIndex:t})]})]})},ke=()=>e.jsxs("div",{className:"mt-[7rem] sm:mt-[2rem]",children:[e.jsx("p",{className:"text-center mx-auto my-0 px-[1.4rem] py-[0.4rem] w-fit  bg-accent2 text-white rounded-lg font-generalsans-semiBold",children:"What we do"}),e.jsx("h2",{className:"text-center font-roboto text-[2.6rem] text-footer mt-[1.8rem] sm:text-[2rem]",children:"One Platform, Multiple Services"}),e.jsxs("p",{className:"text-center text-gray-dark font-generalsans-light text-[1rem]  mt-[1rem] md:hidden",children:["Payarena unifies all your business needs under one virtual roof. Say goodbye to juggling between different ",e.jsx("br",{})," apps and websites to pay bills or make purchases. With Payarena, you can effortlessly handle all"," ",e.jsx("br",{}),"transactions with just a few clicks."]}),e.jsx("p",{className:"text-center text-gray-dark font-generalsans-light text-[1rem]  mt-[1rem] hidden lg:block",children:"Payarena unifies all your business needs under one virtual roof. Say goodbye to juggling between different apps and websites to pay bills or make purchases. With Payarena, you can effortlessly handle all transactions with just a few clicks."}),e.jsx("div",{className:"mt-[3rem]",children:e.jsx(Ve,{})})]}),D="/assets/dollarTag-f4a81151.svg",p="/assets/check-ff2d254c.svg",Pe="/assets/featuresPhone-3586e31e.png",Ce="/assets/shoppingServices-75733ad5.svg",Fe="/assets/shoppingFull-bd914b93.svg",We="/assets/verificationFull-d1afda74.svg",Te="/assets/verificationServices-0848c6a5.svg",Be=()=>{const[t,s]=i.useState("VAS Payments");return e.jsxs("div",{className:t==="VAS Payments"?"bg-gray-light py-[1rem] px-[5rem] md:px-[2rem]":t==="Shopping Mall"||t==="Verification Services"?"bg-gray-light py-[1rem] pl-[5rem] md:px-[2rem]":"",children:[e.jsxs("div",{className:"flex items-center justify-center gap-[3rem] md:hidden",children:[e.jsxs("button",{className:t==="VAS Payments"?"flex items-center bg-black text-white px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg md:hidden":"flex items-center text-gray-dark px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg md:hidden",onClick:()=>s("VAS Payments"),children:[t==="VAS Payments"&&e.jsx("img",{src:D,alt:""}),"VAS Payments"]}),e.jsxs("button",{className:t==="Shopping Mall"?"flex items-center bg-black text-white px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg md:hidden":"flex items-center text-gray-dark px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg md:hidden",onClick:()=>s("Shopping Mall"),children:[t==="Shopping Mall"&&e.jsx("img",{src:D,alt:""}),"Shopping Mall"," "]}),e.jsxs("button",{className:t==="Verification Services"?"flex items-center bg-black text-white px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg md:hidden":"flex items-center text-gray-dark px-[1.8rem] py-[0.8rem] gap-[1rem] font-generalsans-semiBold text-[1.1rem] rounded-lg md:hidden",onClick:()=>s("Verification Services"),children:[t==="Verification Services"&&e.jsx("img",{src:D,alt:""}),"Verification Services"]})]}),e.jsxs("div",{className:"hidden md:flex items-center justify-between",children:[" ",e.jsx(qe,{$active:t,onClick:()=>s("VAS Payments"),children:E.pay}),e.jsx(Ie,{$active:t,onClick:()=>s("Shopping Mall"),children:E.shop}),e.jsx(Re,{$active:t,onClick:()=>s("Verification Services"),children:E.verify})]}),t==="VAS Payments"&&e.jsxs("div",{className:"flex justify-between mt-[5rem] md:flex-col md:gap-[4rem] md:mt-[2rem]",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"font-roboto text-[1.8rem]  md:text-[1.3rem]",children:"Payarena provides delight customers with a seamless payments experience."}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium mt-[1rem] leading-relaxed",children:["Welcome to Payarena, we give our customers the gift of modern, frictionless, ",e.jsx("br",{})," painless payments. Our Value added services let our customers pay for ",e.jsx("br",{})," whatever they want. We are the ultimate all-in-one payment platform designed ",e.jsx("br",{})," to simplify your financial life."]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsx("p",{className:"text-[.88rem] font-generalsans-medium",children:"Create an Account or Sign-up seamlessly"})]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium",children:["Buy or Make Payments with little to no stress."," "]})]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium",children:["We automatically route payments through the most optimal channels, ",e.jsx("br",{}),"ensuring the highest transaction success rates in the market."," "]})]}),e.jsx(Z,{to:"/payment/airtime_recharge",children:e.jsx(g,{text:"Learn more",background:"#009BFF",width:"150px",height:"45px",fontSize:"14px",style:{marginTop:"3rem"}})})]}),e.jsx("div",{children:e.jsx("img",{src:Pe,alt:"",width:"400px"})})]}),t==="Shopping Mall"&&e.jsxs("div",{className:"flex justify-between mt-[5rem] md:flex-col md:gap-[4rem] md:mt-[2rem]",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"font-roboto text-[1.8rem]  md:text-[1.3rem]",children:"Your Comprehensive One-Stop Destination for Infinite Delights!"}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium mt-[1rem] leading-relaxed",children:["Welcome to Payarena, we give our customers the gift of modern, frictionless, ",e.jsx("br",{})," painless payments. Our Value added services let our customers pay for ",e.jsx("br",{})," whatever they want. We are the ultimate all-in-one payment platform designed ",e.jsx("br",{})," to simplify your financial life."]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsx("p",{className:"text-[.88rem] font-generalsans-medium",children:"Create an Account or Sign-up seamlessly"})]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium",children:["Buy or Make Payments with little to no stress."," "]})]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium",children:["We automatically route payments through the most optimal channels, ",e.jsx("br",{}),"ensuring the highest transaction success rates in the market."," "]})]}),e.jsx("a",{href:"https://mall.payarena.com/",target:"_blank",children:e.jsx(g,{text:"Learn more",background:"#009BFF",width:"150px",height:"45px",fontSize:"14px",style:{marginTop:"3rem"}})})]}),e.jsxs("div",{children:[e.jsx("img",{src:Ce,alt:"",className:"w-[500px] sm:hidden"}),e.jsx("img",{src:Fe,alt:"",className:"hidden sm:block"})]})]}),t==="Verification Services"&&e.jsxs("div",{className:"flex justify-between mt-[5rem] md:flex-col md:gap-[4rem] md:mt-[2rem]",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"font-roboto text-[1.8rem] md:text-[1.3rem]",children:"Verified Assurance: Bridging Authenticity and Trust with Impeccable Verification."}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium mt-[1rem] leading-relaxed",children:["Welcome to Payarena, we give our customers the gift of modern, frictionless, ",e.jsx("br",{})," painless payments. Our Value added services let our customers pay for ",e.jsx("br",{})," whatever they want. We are the ultimate all-in-one payment platform designed ",e.jsx("br",{})," to simplify your financial life."]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsx("p",{className:"text-[.88rem] font-generalsans-medium",children:"Create an Account or Sign-up seamlessly"})]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium",children:["Buy or Make Payments with little to no stress."," "]})]}),e.jsxs("span",{className:"flex items-center gap-[1rem] mt-[1.5rem]",children:[e.jsx("img",{src:p,alt:""}),e.jsxs("p",{className:"text-[.88rem] font-generalsans-medium",children:["We automatically route payments through the most optimal channels, ",e.jsx("br",{}),"ensuring the highest transaction success rates in the market."," "]})]}),e.jsx("a",{href:"https://payarenaverification.com/home",target:"_blank",children:e.jsx(g,{text:"Learn more",background:"#009BFF",width:"150px",height:"45px",fontSize:"14px",style:{marginTop:"3rem"}})})]}),e.jsxs("div",{children:[e.jsx("img",{src:Te,alt:"",className:"w-[500px] sm:hidden"}),e.jsx("img",{src:We,alt:"",className:"hidden sm:block"})]})]})]})},Re=x.button`
  background-color: ${t=>(t==null?void 0:t.$active)==="Verification Services"?"#000":"transparent"};
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  /* &:hover svg path {
    transition: all 0.2s ease-in-out;
    fill: #008d30;
  } */
  svg path {
    fill: ${t=>(t==null?void 0:t.$active)==="Verification Services"?"#fff":"#475467"};
  }

  @media screen and (max-width: 390px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 480px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 1020px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 1021px) and (max-width: 1280px) {
    svg {
      width: 30px;
    }
  }
`,Ie=x.button`
  background-color: ${t=>(t==null?void 0:t.$active)==="Shopping Mall"?"#000":"transparent"};
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* &:hover svg path {
    transition: all 0.2s ease-in-out;
    fill: #f58220;
  } */
  svg path {
    fill: ${t=>(t==null?void 0:t.$active)==="Shopping Mall"?"#fff":"#475467"};
  }
  @media screen and (max-width: 390px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 480px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 1020px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 1021px) and (max-width: 1280px) {
    svg {
      width: 30px;
    }
  }
`,qe=x.button`
  background-color: ${t=>(t==null?void 0:t.$active)==="VAS Payments"?"#000":"transparent"};
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* &:hover svg path {
    transition: all 0.2s ease-in-out;
    fill: #009bff;
  } */
  svg path {
    fill: ${t=>(t==null?void 0:t.$active)==="VAS Payments"?"#fff":"#475467"};
  }
  @media screen and (max-width: 390px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 480px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 1020px) {
    svg {
      width: 30px;
    }
  }
  @media screen and (min-width: 1021px) and (max-width: 1280px) {
    svg {
      width: 30px;
    }
  }
`,Ee=()=>e.jsxs("div",{className:"mt-[12rem] md:mt-[6rem]",children:[" ",e.jsx("p",{className:"text-center mx-auto my-0 px-[1.4rem] py-[0.4rem] w-fit  bg-accent2 text-white rounded-lg font-generalsans-semiBold",children:"Features and Benefits"}),e.jsxs("h2",{className:"text-center font-roboto text-[2.6rem] text-footer mt-[1.8rem] leading-snug md:hidden",children:["Our cutting-edge financial solution drives global ",e.jsx("br",{})," business innovation to new frontiers."," "]}),e.jsxs("h2",{className:"text-center font-roboto text-[2.6rem] text-footer mt-[1.8rem] leading-snug md:text-[1.2rem] hidden md:block",children:["Our cutting-edge financial solution drives global business innovation to new frontiers."," "]}),e.jsxs("p",{className:"text-center text-gray-dark font-generalsans-light text-[1rem]  mt-[.7rem] md:text-[0.9rem] md:hidden",children:["We offer our clients cost efficient cutting edge solutions that positively impact ",e.jsx("br",{})," their bottom lines."]}),e.jsx("p",{className:"text-center text-gray-dark font-generalsans-light text-[1rem]  mt-[.7rem] md:text-[0.9rem] hidden sm:block",children:"We offer our clients cost efficient cutting edge solutions that positively impact their bottom lines."}),e.jsx("div",{className:"mt-[4rem]",children:e.jsx(Be,{})})]}),J=i.createContext(),Le=()=>{const{currentIndex:t,goToNext:s,goToPrev:r}=i.useContext(J);return e.jsxs(De,{className:"flex items-center gap-[1.5rem]",children:[e.jsx("div",{className:t===0?"pagination  disabled ":"pagination",onClick:r,children:e.jsx(ie,{})}),e.jsx("div",{className:"dotWrapper flex items-center gap-[.8rem]",children:[0,1,2].map(a=>e.jsx("span",{className:t===a?"dot activeDot":"dot"},`${a}Slide`))}),e.jsx("div",{className:t===2?"pagination  disabled ":"pagination",onClick:s,children:e.jsx(ne,{})})]})},De=x.div`
  .pagination {
    /* border: 1px solid; */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #009bff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    svg {
      font-size: 1.6rem;
      color: #fff;
    }
  }
  .disabled {
    background: #f2f2f2;
    svg {
      color: #667085;
    }
  }
  .dotWrapper {
    .dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #d0d5dd;
    }
    .activeDot {
      background: #f58220;
    }
  }
`,Qe="/assets/vas-f87b8afb.jpeg",Ye="/assets/verification-fe73b819.jpeg",Ze="/assets/shop-65b91995.jpeg",Ke="/assets/yvonne-9aa178e9.jpeg",Oe="/assets/emmy-d30aaa16.jpeg",Ge="/assets/tope-f49fc770.jpeg",Je=()=>{const{currentIndex:t,goToNext:s,goToPrev:r,direction:a}=i.useContext(J);return e.jsxs("div",{className:"bg-[#F9FAFB] mt-[5rem] px-[9rem] py-[4rem] md:px-[1.4rem]",children:[e.jsxs("p",{className:"px-[1.4rem] py-[0.4rem] w-fit  bg-accent2 text-white rounded-lg font-generalsans-semiBold sm:text-left md:text-center mx-auto",children:["What makes us stand-out"," "]}),e.jsx("h2",{className:"font-roboto text-[2.2rem] text-[#1D2939] mt-[1.7rem] sm:text-left md:text-center",children:"Testimonials"}),e.jsxs("div",{className:"flex items-center justify-between md:flex-col md:gap-[4rem]",children:[e.jsxs("p",{className:"text-[#344054]",children:["We take security seriously, and our platform is designed to protect your ",e.jsx("br",{})," business and your customers from fraud and data breaches."]}),e.jsx(Le,{})]}),e.jsxs("div",{className:"w-[100%] max-w-[100%] overflow-hidden",children:[e.jsx(L,{custom:a,children:t===0&&e.jsxs(w.div,{className:"flex items-center justify-between mt-[5rem] px-[0] md:flex-col md:px-[0rem] md:gap-[3rem] md:mt-[2rem]",initial:{x:a==="left"?300:-300},animate:{x:0},transition:{duration:.8},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-[1.8rem] text-[#101828] font-roboto-regular lg:text-[1.2rem]",children:["Using this payment service has been ",e.jsx("br",{})," an absolute game-changer for me! The ",e.jsx("br",{})," seamless and secure transactions have ",e.jsx("br",{})," made managing my finances a breeze."]}),e.jsxs("div",{className:"flex items-center gap-[1rem] mt-[2rem]",children:[e.jsx("img",{src:Ke,alt:"",className:"w-[60px] h-[60px] rounded-[50%]"}),e.jsxs("div",{children:[e.jsxs("h3",{className:"font-roboto-regular text-[#101828]",children:["Yvonne Ede"," "]}),e.jsx("p",{className:"font-generalsans-extralight text-[#667085] text-[.9rem]",children:"Product Manager."})]})]}),e.jsx(Z,{to:"/payment/airtime_recharge",children:e.jsx(g,{text:"Try Payarena",background:"#009BFF",style:{marginTop:"3rem",borderRadius:"0.6rem"},width:"160px",height:"50px"})})]}),e.jsx("div",{children:e.jsx("img",{src:Qe,alt:"",className:"w-[30rem]"})})]})}),e.jsx(L,{custom:a,children:t===1&&e.jsxs(w.div,{className:"flex items-center justify-between mt-[5rem] px-[0]  md:flex-col md:px-[0rem] md:gap-[3rem] md:mt-[2rem]",initial:{x:a==="left"?300:-300,opacity:.4},animate:{x:0,opacity:1},transition:{duration:.8},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-[1.8rem] text-[#101828] font-roboto-regular lg:text-[1.2rem] ",children:["The simplicity of the shopping service and the ",e.jsx("br",{})," ","responsive customer support are highly ",e.jsx("br",{})," appreciated. We rely on it every single day."]}),e.jsxs("div",{className:"flex items-center gap-[1rem] mt-[2rem]",children:[e.jsx("img",{src:Ge,alt:"",className:"w-[60px] h-[60px] rounded-[50%]"}),e.jsxs("div",{children:[e.jsxs("h3",{className:"font-roboto-regular text-[#101828]",children:["Temitope Alli"," "]}),e.jsx("p",{className:"font-generalsans-extralight text-[#667085] text-[.9rem]",children:"Product Designer."})]})]}),e.jsx("a",{href:"https://mall.payarena.com/",target:"_blank",children:e.jsx(g,{text:"Try Payarena",background:"#009BFF",style:{marginTop:"3rem",borderRadius:"0.6rem"},width:"160px",height:"50px"})})]}),e.jsx("div",{children:e.jsx("img",{src:Ze,alt:"",className:"w-[32rem]"})})]})}),e.jsx(L,{custom:a,children:t===2&&e.jsxs(w.div,{className:"flex items-center justify-between mt-[5rem] px-[0]  md:flex-col md:px-[0rem] md:gap-[3rem] md:mt-[2rem]",initial:{x:a==="left"?300:-300,opacity:.4},animate:{x:0,opacity:1},transition:{duration:.8},children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-[1.8rem] text-[#101828] font-roboto-regular lg:text-[1.2rem] ",children:["We are incredibly reliant on this verification ",e.jsx("br",{})," service"," ","due to its user-friendly nature and ",e.jsx("br",{})," excellent customer support that is always available."]}),e.jsxs("div",{className:"flex items-center gap-[1rem] mt-[2rem]",children:[e.jsx("img",{src:Oe,alt:"",className:"w-[60px] h-[60px] rounded-[50%]"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-roboto-regular text-[#101828]",children:"Emmanuel Owolabi"}),e.jsx("p",{className:"font-generalsans-extralight text-[#667085] text-[.9rem]",children:"Frontend Engineer."})]})]}),e.jsx("a",{href:"https://payarenaverification.com/home",target:"_blank",children:e.jsx(g,{text:"Try Payarena",background:"#009BFF",style:{marginTop:"3rem",borderRadius:"0.6rem"},width:"160px",height:"50px"})})]}),e.jsx("div",{children:e.jsx("img",{src:Ye,alt:"",className:"w-[32rem]"})})]})})]})]})},Xe=({children:t})=>{const[s,r]=i.useState(0),[a,l]=i.useState(""),u=()=>{s!==2&&(r(d=>(d+1)%3),l("left"))},c=()=>{s!==0&&(r(d=>(d-1+3)%3),l("right"))};return e.jsx(J.Provider,{value:{currentIndex:s,goToNext:u,goToPrev:c,direction:a},children:t})};var z=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,Me=(t,s)=>{var r={};for(var a in t)ze.call(t,a)&&s.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&z)for(var a of z(t))s.indexOf(a)<0&&Ue.call(t,a)&&(r[a]=t[a]);return r},He=Object.defineProperty,$e=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,M=(t,s,r)=>s in t?He(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,Q=(t,s)=>{for(var r in s||(s={}))et.call(s,r)&&M(t,r,s[r]);if(U)for(var r of U(s))tt.call(s,r)&&M(t,r,s[r]);return t},Y=(t,s)=>$e(t,_e(s)),H=typeof window>"u"?i.useEffect:i.useLayoutEffect,st=({isPlaying:t,duration:s,startAt:r=0,updateInterval:a=0,onComplete:l,onUpdate:u})=>{let[c,d]=i.useState(r),F=i.useRef(r*-1e3),h=i.useRef(null),f=i.useRef(null),v=i.useRef(null),m=i.useRef({elapsedTimeRef:0,startAtRef:r,durationRef:s,updateIntervalRef:a});m.current=Y(Q({},m.current),{durationRef:s,updateIntervalRef:a});let j=o=>{let n=o/1e3;if(f.current===null){f.current=n,h.current=requestAnimationFrame(j);return}let{durationRef:b,elapsedTimeRef:q,updateIntervalRef:y,startAtRef:B}=m.current,se=n-f.current,R=q+se;f.current=n,m.current=Y(Q({},m.current),{elapsedTimeRef:R});let re=B+(y===0?R:(R/y|0)*y),ae=B+R,X=typeof b=="number"&&ae>=b;d(X?b:re),X||(h.current=requestAnimationFrame(j))},W=()=>{h.current&&cancelAnimationFrame(h.current),v.current&&clearTimeout(v.current),f.current=null},T=i.useCallback(o=>{let n=typeof o=="number"?o:r;W(),m.current=Y(Q({},m.current),{elapsedTimeRef:0,startAtRef:n}),d(n),t&&(h.current=requestAnimationFrame(j))},[t,r]);return H(()=>{if(u==null||u(c),s&&c>=s){F.current+=s*1e3;let{shouldRepeat:o=!1,delay:n=0,newStartAt:b}=(l==null?void 0:l(F.current/1e3))||{};o&&(v.current=setTimeout(()=>T(b),n*1e3))}},[c,s]),H(()=>(t&&(h.current=requestAnimationFrame(j)),W),[t]),{elapsedTime:c,reset:T}},te={easeInCubic:(t,s,r,a)=>(t/=a,r*t*t*t+s),easeOutCubic:(t,s,r,a)=>(t/=a,t--,r*(t*t*t+1)+s),linear:(t,s,r,a)=>r*t/a+s},rt=te.easeOutCubic,at=t=>typeof t=="function"?t:te[t],it=(t,s)=>{if(typeof t=="number")return typeof s=="number"?s:2},$=(t,s)=>t.replace(/\B(?=(\d{3})+(?!\d))/g,s),_=t=>(t.toString().split(".")[1]||"").length,nt=(t,s)=>{let r=_(t),a=_(s||1);return r>=a?r:a},lt=({isCounting:t=!1,start:s=0,end:r,duration:a,decimalPlaces:l=nt(s,r),decimalSeparator:u=".",thousandsSeparator:c="",onComplete:d,easing:F=rt,formatter:h,updateInterval:f,onUpdate:v})=>{let m=it(r,a),j=o=>{let n;if(m===0&&typeof r=="number")n=r;else if(typeof r=="number"&&typeof m=="number"){let y=at(F),B=o<m?o:m;n=y(B,s,r-s,m)}else n=s+o;if(typeof h=="function")return h(n);if(l===0){let y=Math.round(n).toString();return $(y,c)}let[b,q]=n.toFixed(l).split(".");return`${$(b,c)}${u}${q}`},{elapsedTime:W,reset:T}=st({isPlaying:t,duration:m,onComplete:d,updateInterval:f,onUpdate:typeof v=="function"?o=>v(j(o)):void 0});return{value:j(W),reset:T}},I=t=>{var s=t,{children:r}=s,a=Me(s,["children"]);let l=lt(a);return typeof r=="function"?r(l):l.value};I.displayName="CountUp";const mt=()=>{const t=i.useRef(),[s,r]=i.useState(!1),[a,l]=i.useState(!1);return i.useEffect(()=>{const u=new IntersectionObserver(c=>{const d=c[0];r(d.isIntersecting)});l(!!s),u.observe(t.current)},[s]),e.jsxs(ot,{children:[e.jsx("h2",{children:"Unleash the full power of Payarena"}),e.jsxs("p",{children:["Everything you need in one platform, make ",e.jsx("br",{})," ",e.jsx("span",{children:"Payment"}),",",e.jsx("span",{children:"Shop"}),", and ",e.jsx("span",{children:"Verify"}),"."]}),e.jsxs("div",{className:"numbersContainer",ref:t,children:[e.jsxs("div",{className:"child child1",children:[e.jsxs("h1",{children:[e.jsx(I,{isCounting:a,onComplete:()=>{if(s)return{shouldRepeat:!0,delay:5}},end:200,duration:3}),"K+"]}),e.jsx("p",{children:"Transactions"})]}),e.jsxs("div",{className:"child child2",children:[e.jsxs("h1",{children:[" ",e.jsx(I,{isCounting:a,onComplete:()=>{if(s)return{shouldRepeat:!0,delay:5}},end:500,duration:3}),"+"]}),e.jsx("p",{children:"Integrations with billers"})]}),e.jsxs("div",{className:"child child3",children:[e.jsxs("h1",{children:[" ",e.jsx(I,{isCounting:a,onComplete:()=>{if(s)return{shouldRepeat:!0,delay:5}},end:600,duration:3}),"%"]}),e.jsx("p",{children:"Faster Transaction Time"})]})]})]})},ot=x.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h2 {
    font-family: "Roboto-Bold", sans-serif;
    color: #101828;
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  p {
    font-family: "GeneralSans-Light";
    color: #000000;
    font-size: 16px;
    text-align: center;

    span {
      font-weight: bold;
      font-family: "GeneralSans-Bold";
    }
  }

  .numbersContainer {
    margin-top: 4rem;
    display: flex;

    .child {
      padding: 0.3rem 2rem;
      h1,
      p {
        text-align: center;
      }
      h1 {
        font-size: 3rem;
        font-family: "Roboto-Bold", sans-serif;
        color: #24b0ff;
        span {
          font-size: 40px;
        }
      }
      p {
        margin-top: 0.1rem;
        font-family: "GeneralSans-Regular", sans-serif;
        font-size: 13px;
        color: #000;
      }
    }
    .child1 {
      border-right: 1px solid #eaecf0;
    }
    .child3 {
      border-left: 1px solid #eaecf0;
    }
  }

  @media only screen and (max-width: 900px) {
    .arrow5 {
      position: absolute;
      left: 0;
      bottom: 5px;
      height: 80px;
      width: 100px;
    }
  }
  @media only screen and (max-width: 700px) {
    .arrow5 {
      display: none;
    }
    .numbersContainer {
      .child {
        padding: 0.3rem 1.5rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    margin: 5rem 0 3rem;

    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 12px;
    }
    .numbersContainer {
      .child {
        padding: 0.3rem 1rem;
        h1,
        h1 {
          font-size: 1.4rem;
          font-family: "Roboto-Bold", sans-serif;
          color: #24b0ff;
          span {
            font-size: 10px;
          }
        }
        p {
          margin-top: 0.1rem;
          font-family: "GeneralSans-Regular", sans-serif;
          font-size: 11px;
          color: #000;
        }
      }
    }
  }
`,N="/assets/tm30-6447fea5.svg",S="/assets/airtel-41ba0ab8.svg",A="/assets/amex-296291a9.svg",V="/assets/mastercard-95a94cbc.svg",k="/assets/mtn-358b9a82.svg",P="/assets/union-591a1f82.svg",C="/assets/visa-eafc95c9.svg",ct=()=>e.jsx(dt,{children:e.jsx("div",{className:"partners",children:e.jsx("div",{className:"marquee",children:e.jsxs("div",{className:"exts",children:[e.jsxs("div",{className:"flex1",children:[e.jsx("img",{src:N,alt:""}),e.jsx("img",{src:S,alt:""}),e.jsx("img",{src:A,alt:""}),e.jsx("img",{src:k,alt:""}),e.jsx("img",{src:P,alt:""}),e.jsx("img",{src:C,alt:""}),e.jsx("img",{src:V,alt:""})]}),e.jsxs("div",{className:"flex1",children:[e.jsx("img",{src:N,alt:""}),e.jsx("img",{src:S,alt:""}),e.jsx("img",{src:A,alt:""}),e.jsx("img",{src:k,alt:""}),e.jsx("img",{src:P,alt:""}),e.jsx("img",{src:C,alt:""}),e.jsx("img",{src:V,alt:""})]}),e.jsxs("div",{className:"flex1",children:[e.jsx("img",{src:N,alt:""}),e.jsx("img",{src:S,alt:""}),e.jsx("img",{src:A,alt:""}),e.jsx("img",{src:k,alt:""}),e.jsx("img",{src:P,alt:""}),e.jsx("img",{src:C,alt:""}),e.jsx("img",{src:V,alt:""})]}),e.jsxs("div",{className:"flex1",children:[e.jsx("img",{src:N,alt:""}),e.jsx("img",{src:S,alt:""}),e.jsx("img",{src:A,alt:""}),e.jsx("img",{src:k,alt:""}),e.jsx("img",{src:P,alt:""}),e.jsx("img",{src:C,alt:""}),e.jsx("img",{src:V,alt:""})]}),e.jsxs("div",{className:"flex1",children:[e.jsx("img",{src:N,alt:""}),e.jsx("img",{src:S,alt:""}),e.jsx("img",{src:A,alt:""}),e.jsx("img",{src:k,alt:""}),e.jsx("img",{src:P,alt:""}),e.jsx("img",{src:C,alt:""}),e.jsx("img",{src:V,alt:""})]})]})})})}),dt=x.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;

  .partners {
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: #f9fafb80; */
    flex-shrink: 1 0 auto;
    padding: 3rem 0rem;
    border-radius: 20px;
    gap: 1rem;
    .section1 {
      padding: 1rem 2rem 1rem 0.5rem;
      color: #7e7e7e;
      p {
        font-family: "cabinet-grotesk-bold";
      }
    }
    .marquee {
      width: 90%;
      overflow-x: hidden;

      .exts {
        width: 420%;
        display: flex;
        align-items: center;
        gap: 8rem;
        justify-content: space-between;
        padding-left: 1rem;
        animation: 60s marquee infinite linear;

        .flex1 {
          display: flex;
          width: 50%;
          align-items: center;
          gap: 5rem;

          img {
            width: 70px;
          }
        }
        &:hover {
          animation-play-state: paused;
        }
      }

      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    padding: 0 1rem;
    top: -2rem;
    .partners {
      padding: 1.5rem 0.3rem;
      border-radius: 10px;

      .section1 {
        padding: 0.3rem 0.2rem 0.3rem 0.5rem;

        p {
          font-size: 0.5rem;
        }
      }
      .marquee {
        .exts {
          gap: 2rem;
          width: 570%;

          .flex1 {
            gap: 2rem;

            img {
              width: 70px;
              height: 20px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 4rem;
    .partners {
      padding: 2rem 0rem;
    }
  }
  @media only screen and (max-width: 890px) {
    padding: 0 1rem;
    /* top: -2rem; */
    margin-top: 1rem;

    .partners {
      padding: 1.5rem 0.3rem;
      border-radius: 10px;

      .section1 {
        padding: 0.3rem 0.2rem 0.3rem 0.5rem;

        p {
          font-size: 0.5rem;
        }
      }
      .marquee {
        .exts {
          gap: 5rem;
          width: 640%;

          .flex1 {
            gap: 2rem;

            img {
              width: 70px;
              height: 20px;
            }
          }
        }
      }
    }
  }
`,xt="/assets/stars-c645a71a.svg",ht=()=>e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("span",{className:"flex items-center gap-[.6rem]",children:[e.jsx("p",{className:"text-[.8rem]",children:"Trusted By 20,000+ clients"}),e.jsx("img",{src:xt,alt:""})]}),e.jsx("h2",{className:"font-roboto text-[2.5rem] sm:text-[1.4rem]",children:"They Trust Us."})]}),e.jsx(ct,{})]}),ut=()=>e.jsxs("section",{className:"w-full max-w-[1440px] mx-auto relative",children:[e.jsx("img",{src:le,alt:"",className:"w-screen absolute z-[-1] lg:hidden"}),e.jsxs("div",{className:"px-[9rem] md:px-[1.5rem]",children:[e.jsx(de,{}),e.jsx(ke,{}),e.jsx(Ee,{})]}),e.jsxs("div",{children:[e.jsx(Xe,{children:e.jsx(Je,{})}),e.jsx(mt,{}),e.jsx(ht,{})]})]});export{ut as default};
