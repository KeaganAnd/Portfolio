function display_random_image(type) 
{
    var attackers = [{
        name: "Striker",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/17NnCKm86wr8XUEajrYiOz/c971adfefc7e0910a99b3da91a2573e8/r6s-operators-list-striker.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ZC6qMkmnam9bLc1fZJJ0C/fd0719a5b03789e65aa7f41e7c2dc49c/r6s-operators-badge-striker.png"
    },{
        name: "Deimos",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2TV52rbjzuWtMGezWio1ox/2ec949f545995fc79fb3dc393a650992/r6s-operators-list-deimos.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/18uYWtYnEjmMQBTTdkIfWF/ba8c07729ff3c6de5872ffbcdc7956fb/r6s-operators-badge-deimos.png"
    },{
        name: "Ram",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7uO4bXss6I8nCRVOxYKxEf/5be8def62a24cc353d1342296b9a5f27/r6s-operators-list-ram.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YQiStwC1Qo4wKWmgK6XCH/ac8a0fea30f2996f96ca31b17a0039fa/r6s-operators-badge-ram.png"
    },{
        name: "Brava",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7piw6czbaAsv6NnYXtJZay/02683e035ab9481bbe8cbf669113c84d/r6s-operators-list-brava.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JTzualMKZVGfdROg4XKh8/7989454e62b7972bfd88f09097cc148f/r6s-operators-badge-brava.png"
    },{
        name: "Grim",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fwxcTrdNLQbXkfBJglLaN/38d901042d7debc709c266a46f856d7e/r6s-operators-list-grim.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5VoAYPvRZXIwjcwTD3PWaZ/b9748f007c0c116ca1bcd77b0f91e766/r6s-operators-badge-grim.png"
    },{
        name: "Sens",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ieRqIy6e47QH48sTp1W4a/59f8188d94ae610bf76da26b4fef0b92/r6s-operators-list-sens.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7pqZFaPgQwaLi1pFKuAv7e/d3d9af214737fe6a069e5346c50bfd20/r6s-operators-badge-sens.png"
    },{
        name: "Osa",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Dg95rvyhPtw588r60vIPM/75e609068a0b205cc4dbc7bf3e517f51/r6s-operators-list-osa.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5tt27EFHYjiDLo2qbYEgXG/2f1acbb8209e45b136ca7b0e2e5eb1f9/r6s-operators-badge-osa.png"
    },{
        name: "Flores",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3hXRjYHsrlFOocJjyxyYZY/29eb8f1ad9eab150518a053b775c336f/r6s-operators-list-flores.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/75vqJXXKCM2EDO0iiNqRDe/d6289dc9a4fed72ef72b9c1e11738456/Y6S1_BADGE_Flores_L.png"
    },{
        name: "Zero",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/24jDQIfDdVMLX5K54pKNe5/58dec3b1e7d32a637bc76560e0cf0385/r6s-operator-list-zero.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4ZbzOZt1Sur77RZTFwYVJ4/30037e84b2948449652547f06df146e0/Y5S3_BADGE_Zero_L.png"
    },{
        name: "Ace",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5snW47tH4a5VuPhidr61sm/40b812d32eb85b5c3390865541578bea/r6s-operator-list-ace.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/dgG7GmXY1HgfeEE2gI1H9/06bd3917c8fc19f61654490019ef25fb/Y5S2_BADGE_Ace_L.png"
    },{
        name: "Iana",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6vES8lEllMwW9OaBYRT7YX/39b5fe90684d7ce637a7d025cdd1ec96/r6s-operator-list-iana.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6deSi1vse5iJTkErFksrGq/75bf1038e9698b6b2be75aa0493b092d/Y5S1_BADGE_Iana_L.png"
    },{
        name: "Kali",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/41NACeIbkdnIWgnwq0HzD4/9713f8e58b9a8c253b7507b59169bb3c/r6-operators-list-kali_358317.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6r1hk1EunQirF1IcY4TG8T/0d3fbb7508a7747fd51249b1b8ea9779/Y4S4_BADGE_Kali_L.png"
    },{
        name: "Amaru",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5jumFHxGXFA7HehPNn0uGD/e00f3d67802944d0c7aba72455e1ba6a/r6-operators-list-amaru.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2K1uxROLvHGxOIOMpNRFeU/7b4afc5ded3d1b9a937d1b504b5d4d0d/Y4S3_BADGE_Amaru_L.png"
    },{
        name: "NØKK",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/VeXso9iKMqBDrSmuJ2kBx/b8020ed099ddbdcb31ec809b9d7da152/r6-operators-list-nokk.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2qfSHHTdCRVhx9EWycVDNr/9e361e73fb91e571f7470de21edf5c7a/Y4S2_BADGE_Nokk_L.png"
    },{
        name: "Gridlock",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27gUsHtPmP86NRs4cPug1o/31ea0005ad1afc68a8ebcc477934ded6/r6-operators-list-gridlock.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5LIyheUROsdMDkX6o0zh6R/f201ce65af771459c374ef71c89827b4/Y4S1_BADGE_Gridlock_LL.png"
    },{
        name: "Nomad",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3VHhiyMOUkBOW1u1Zh5eGH/9e603d3e6926fc26ebee494b3040eba7/r6-operators-list-nomad.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/UxfU1gJDoZGDrzT3iBsIp/b1aa522cc08e4631b9a857b52afa4f99/Y3S4_BADGE_Nomad_L.png"
    },{
        name: "Maverick",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1MmaEupq7KOe6it1trqIWP/3f4246349a36e28f4d9299f9368612c1/r6-operators-list-maverick.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3DXiYgVT71qGscYmFMgayj/d6c40a7dabdfecb92b637bec83003a58/Y3S3_BADGE_Maverick_L.png"
    },{
        name: "Lion",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4wYSIOO4AKq0nw1GbulGns/fcd32bda72facd7062a25ad3764f21e9/r6-operators-list-lion.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gfdjXFezusaerCakMpfQ2/4565b28edd241b7fd3b0eba9c97d54f2/Y3S1_BADGE_Lion_L.png"
    },{
        name: "Finka",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6VkZ60XV4HWhbQaoMpfjnw/1bd7667a572622371627e90e5e572455/r6-operators-list-finka.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6CzQHWePD3Mi8HE5bdx5ic/2a6b5a6cc653ebf99d062725368eae2a/Y3S1_BADGE_Finka_L.png"
    },{
        name: "Dokkaebi",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fjUupLXClpcdTyqdvPv24/e4492917c18682ef09f9b0445176b2f2/r6-operators-list-dokkaebi.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/aoQeHLohcuqvubBoyrzsM/d4a230ecba495c58c5521e10d5d84baa/Y2S4_BADGE_Dokkaebi_L.png"
    },{
        name: "Zofia",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/z60t1OJxJoHqm2zp0t5dL/4acc0904444f43b12a17f6a578322cf9/r6-operators-list-zofia.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1k09nbCCu2avlIWpK3cJz9/35d60746d67750230f2a020a7be78795/Y2S3_BADGE_Zofia_L.png"
    },{
        name: "Ying",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/36BxtuVTQFrNh2OPyJ2px3/6db32fa8151b9a925acdd65d289bcf0f/r6-operators-list-ying.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZVB1OJxNgs0pR0Fd7Kzt0/74721fe9fd743167508f98dc280a17a3/Y2S2_BADGE_Ying_L.png"
    },{
        name: "Jackal",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/kbyJly2JDRxFrjFSrptiy/ebbdae24cdfed025b0872742bb6c2a96/r6-operators-list-jackal.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/28k7LKWK70lxib7CimPJaZ/f34b2065811df8f0339838922f8c94b1/Y2S1_BADGE_Jackal_L.png"
    },{
        name: "Hibana",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7mAs4mz2zA4wjPZsNg6tys/e4fbdbfe20406c2655b56ba420b839aa/r6-operators-list-hibana.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1TSA4pMR58vgfrEai69REl/f82b1eba6694b4aa77259d3d0fe8cc08/Y1S4_BADGE_Hibana_L.png"
    },{
        name: "Capitáo",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3AZlhNFA21aKL2MdAIEwa8/abfce9018a7a08c120d707fbc28ae709/r6-operators-list-capitao.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/73R4IrWJyn0xdkJ0fjOODA/fc70d200a7530dccae2847ab7962e394/Y1S3_BADGE_Capitao_L.png"
    },{
        name: "Blackbeard",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5u6Ak7dkTb4yOjaP1hlGuT/0cdd45963fd8c83c62f609c7319bbf05/r6-operators-list-blackbeard.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4BTbmcs1EtoUbnpk5Am22Y/b7bd4d0708245c78b98455505c0d51a8/Y1S2_BADGE_Blackbeard_L.png"
    },{
        name: "Buck",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3k68pZu62GPbCAFOSCej9a/3c3d3da1f7109a396fb59dcf06c5c4c8/r6-operators-list-buck.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2oZZBEZzVLFpRY7Mp85MWq/f62287872dd61b4e0697a93d703b2beb/Y1S1_BADGE_Buck_L.png"
    },{
        name: "Sledge",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6eIdbZWLBIdtCygNAu9uue/8856e29f0e9ebc3b6ed996223586ebce/r6-operators-list-sledge.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4lgK1mOTVAoBhoj5qjYuyd/83c83d56e977f96ac0e9621c0d1c07d2/Y0R6_BADGE_Sledge_L.png"
    },{
        name: "Thatcher",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5QGPM6l25ybaINnaIaLgvm/d018abc75d44758d666ad6bea0a38a9b/r6-operators-list-thatcher.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5NbqTdEPmYy9qOZmN9StVT/f75b0f2610a37f9e5bdcb8ba9d551a38/Y0R6_BADGE_Thatcher_L.png"
    },{
        name: "Ash",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QOEBDfqjtUxVBc31l8L9f/4d9b112565baf81d56d69279b95cd463/r6-operators-list-ash_317253.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/58Y4Q2x7msL8uQUoiA7LGM/b204acc9c5a015029140723ef2e435bb/Y0R6_BADGE_Ash_L.png"
    },{
        name: "Thermite",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3NQW8lJVslVSaYSiBlAleU/09fd8e3e946f2e71f39182b9ff18dd77/r6-operators-list-thermite.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6tow5mqLao5TrJVL52csSc/46aa934c9f3f02189e9c04df0114a081/Y0R6_BADGE_Thermite_L.png"
    },{
        name: "Montagne",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1hxlGxmToB93urkgbIzUvW/fa894cd6ab38358284a3a1858cabbeee/r6-operators-list-montagne.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qWONT0mrNYtUZVTVVT8Yj/e0da552d6bb6548ddf74cf4cc44d75c5/Y0R6_BADGE_Montagne_L.png"
    },{
        name: "Twitch",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Z9R1Anc8MHwbG5iyPoOf2/69fe9aee30e03322a4e09d4b87de15aa/r6-operators-list-twitch.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YgCpOSM2R4SDgExstxm7P/ff84e6ac53bd9f690deee78870f9c23b/Y0R6_BADGE_Twitch_L.png"
    },{
        name: "Blitz",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4NZvCtXwtcCq1s65H7mK5y/8d70872df8319e1d162a31bbf404ed2c/r6-operators-list-blitz.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2YTGfm1Df9PtldLcGodcTV/9a235b550cdf5066d686cef750eba090/Y0R6_BADGE_Blitz_L.png"
    },{
        name: "IQ",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3lP88YKPk0boUyisZD0LT7/6b3ef86531c459ef9e573f056d6eddf5/r6-operators-list-iq.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4xnVj2iZB8Otchiw7j69UO/13c864a4e2eb976c1978dc79411b450c/Y0R6_BADGE_IQ_L.png"
    },{
        name: "Fuze",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/BsiNYFp7htro1mOEgiKf1/eef48a78d9a7c1cb2dcac07e1d06edb1/r6-operators-list-fuze.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1wkdQ0viuTEguji14qXMJG/5858418baa8cca04a6e42a2d6256c093/Y0R6_BADGE_Fuze_L.png"
    },{
        name: "Glaz",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6R6uQlUmkh7KYoFYeeGpvj/fb92cfe1a0501d63a0ffa417c004e84e/r6-operators-list-glaz.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5UAZVgyOutPh6bLTV3fGXf/c59d484fd599d09a947ec423b2119620/Y0R6_BADGE_Glaz_L.png"
    }];

    var defenders = [{
        name: "Skopos",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3lK6qZnfGtclnA6uhyGovV/63e2969f276794c8c240c207c34e41a6/r6s-operators-list-skopos.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/k0AOat3ISkt7WMR6X4dJg/aa4596095d3861f7de24e007730e3f89/r6s-operators-badge-skopos.png"
    },{
        name: "Sentry",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1gOsEc5wt8VRtjEupN4TEL/9e8a27ecb654702bae1b07bf124126b1/r6s-operators-list-sentry.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3RhB8rT969t71r0b3iiiQo/3bf85d17ade85b4e5943712b664b6166/r6s-operators-badge-sentry.png"
    },{
        name: "Tubarão",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ceva9aObGqSk9C9UNehdK/8541f4312f3b363c0692b7ce19e40725/r6s-operators-list-tubarao.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/43VtYmfmTtLwwKDGhalSCO/9673bb50e981ba2684cd649534f00de7/r6s-operators-badge-tubarao.png"
    },{
        name: "Fenrir",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/336St2UBdDDhJnI1Nbcqo9/845b0822369af2bb64e2ff7f2e7292f9/r6s-operators-list-fenrir.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4vtvBhY56S2slW3y0eKsMp/6a0f41807549ad1aa503112d4ad05a52/r6s-operators-badge-fenrir.png"
    },{
        name: "Solis",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2OV2K9FVqJdSNAogr0Wpod/62f2016a6c660714eb9a3c4a1f8196d4/r6s-operators-list-solis.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6YOBUP5JMskklFx9nDJQ49/d9d4b0968f581597feaa0ef4ec0891f3/r6s-operators-badge-solis.png"
    },{
        name: "Azami",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5M7OGhXfAf5Q0Cdo1YJkRE/2e4c141357cf97d54c6840ee38f6bf76/r6s-operators-list-azami.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7KWTXHTk8rxLS5qtyX4Xu4/b51f8691b932fd2b83260ef3fbcd1154/r6s-operators-badge-azami.png"
    },{
        name: "Thorn",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7LbjnSD3wKQXWhoxSXv3vu/238defac906026c3763e93041e3d96f9/r6s-operators-list-thorn.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1pzBJsbL1vQT8is7B0Xjxz/440335c080e54ca28eba24858361a03a/r6s-operators-badge-thorn.png"
    },{
        name: "Thunderbird",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gadEIZqtSfsHstfPMe3bz/424c7e4c21276e99f41a8c75478aa5e5/r6s-operators-list-thunderbird.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/YQfDJ42B2IKcKnb0lRaXq/0cedb53c439b0fe448be95713a836b29/r6s-operators-badge-thunderbird.png"
    },{
        name: "Aruni",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4yfuWCW8O4ja2VqR9tXqaE/c8dd123a6405959cf4f091c3854c9d96/r6s-operators-list-aruni.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5rOLCYQOh5HH0Nv6NHe38H/29681f901ff71ae5decb5ccb1b9f8a29/Y5S4_BADGE_Aruni_L.png"
    },{
        name: "Melusi",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1yoVAGw5rEQ8zPPHoQSDJb/b16a570fadb3342416c5c44847cc651a/r6s-operator-list-melusi.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/74H52a9GMql8wamIy6WqH5/9fddba49258152835da7cdac8c566663/Y5S2_BADGE_Melusi_L.png"
    },{
        name: "Oryx",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3JBOp3MXgGeuEwyoYrkuMi/b7aa3c4a3fa6f165135954aa30252838/r6s-operator-list-oryx.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7mLA8GY9ZKlUfDXrfo9Nek/e3dfd0759414f36866a8c80b61a67722/Y5S1_BADGE_Oryx_L.png"
    },{
        name: "Wamai",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ZSUcKWczIo1w2WwzNan5B/98938e59a958117b46901c57fce98ae7/r6-operators-list-wamai_358318.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1vQZ4WsAjhc6M7qNOS4ahQ/92fc4d89632fb87aec0f102d7adbfe26/Y4S4_BADGE_Wamai_L.png"
    },{
        name: "Goyo",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ylXIr2TxRcFMSKfRhXJXh/5202b0fdfbf43545e8c40a8232a438c3/r6-operators-list-goyo.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6AAY4FZt5piHdabOdDokE4/f7f8bd90c20b8a429c78a08684b75aca/Y4S3_BADGE_Goyo_L.png"
    },{
        name: "Warden",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/72pEJEYxwPGoW221XvdmAJ/ea79dbd58064cbc99a1514e1b1641586/r6-operators-list-warden.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/hx1Ljf1qIWbjpgCNmfJbu/2217283b569ef316dc12b93e86649f8f/Y4S2_BADGE_Warden_L.png"
    },{
        name: "Mozzie",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5NwXzotdPIQuvWugaam4JA/eaf8febf1432c5f2f015318c83890d93/r6-operators-list-mozzie_343537.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/15hUu2PsypX2c1LIJFQNUT/8538c52057420dbf3995cf3117b155c5/Y4S1_BADGE_Mozzie_L.png"
    },{
        name: "Kaid",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/9ATWPlasUTzxyJMNlV9SM/16dd669d06990b12088660ffc77bd6b3/r6-operators-list-kaid.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Qblb1ZqAqkN3Wa0Qw5qBq/05630c80672105a1195282d276e8eb05/Y3S4_BADGE_L.png"
    },{
        name: "Clash",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3tTgRbA9GdeLTmI1mPObsp/5b490d1e9021c37ffa59f3e6bc6f8c7e/r6-operators-list-clash.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7G4lGl5HPLFTTUdcZW8UOK/3901b44cf2a9423486ffd78531e42f87/Y3S3_BADGE_Clash_L.png"
    },{
        name: "Maestro",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6QNXf9qRkqzOdsprj2SWgI/0c4cc3b9423cada4fed0ba5ae2c9c722/r6-operators-list-maestro.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/XK43imgD0tc0xrk0tgTCQ/0402cc95cbd525debafa1aab0fdd8385/Y3S2_BADGE_Maestro_L.png"
    },{
        name: "Alibi",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/11nzEgSwdAXLow3kPl0wom/3fdf2b0aa1c1af7ef785d28cf5d80114/r6-operators-list-alibi.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3DgGV3hETnXiEvVFOYZrbm/55a6be47761b5cf2c7ff8aaa7991cc7f/Y3S2_BADGE_Alibi_L.png"
    },{
        name: "Vigil",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/48ebOPwZWlyktdhawglqlI/819d0565c7f545e97526e4dda0a2f129/r6-operators-list-vigil.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/56A3hXhWZdwO623g3ejeku/a40a0582a7841abfeed723d8fbe238d3/Y2S4_BADGE_Vigil_L.png"
    },{
        name: "Ela",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6110n4X8KghHzBtPrksrKD/28e78ce725b3d1cd35c6f0967c0524b8/r6-operators-list-ela.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7zbkJJWMCOj04DNhYDz994/d2cba213d30d7b8cf2ba8cd568c78f20/Y2S3_BADGE_Ela_L.png"
    },{
        name: "Lesion",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3woPDn0yMuXfkr2RYoymFj/964dfe9277e5299b0125c33b39e165d1/r6-operators-list-lesion.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2CWYSySnPAhsOHdq2OLSjv/f9e54debcfa0c8fe76012d9097b98e6e/Y2S2_BADGE_Lesion_L.png"
    },{
        name: "Mira",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Q9Y4UXzkQfECOw5fX3QrI/bfd6532c840cb06a22e0196f2acfc462/r6-operators-list-mira.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/u1KR6aogjLncAtaVOciTc/ba730583f9c20cad6d3ca996d366a707/Y2S1_BADGE_Mira_L.png"
    },{
        name: "Echo",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MdVMpafww11MfSVMEzyTK/4d4c5d92585c7cf11a28cbf9456e3d9e/r6-operators-list-echo.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3MRqAdUybJ7GR9gX4wPAI4/992938a70a4e53b91478358634e77ca7/Y1S4_BADGE_Echo_L.png"
    },{
        name: "Caviera",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RZ2Vwk7HozKMCtS5gFMp7/e1b930e3c80590a316939d9df0d88660/r6-operators-list-caveira.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4H1dOkcdZIKblKkAWjD390/10e57f4829eabda30f4aa1044e49893d/Y1S3_BADGE_Caveira_L.png"
    },{
        name: "Valkyrie",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7xN3HJXPLVEmWA9PDnQzTV/613b19a897503161f2cf6fe7bbe3408e/r6-operators-list-valkyrie.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/44qXJmZmAwaD4w44JnPuOx/c54c8b9d3a6813ab8ce3e3f1dd4ef408/Y1S2_BADGE_Valkyrie_L.png"
    },{
        name: "Frost",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/33qvDwvWy7y9VGw9k1RYWi/73c4b6e46575b2b649058e2e626c223a/r6-operators-list-frost.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1OWFtfiEXleLSENciCSQQR/8fcced59c0125073e506f2dee0201015/Y1S1_BADGE_Frost_L.png"
    },{
        name: "Mute",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4BWoDVmdDsgrI071YJwqyF/4bcf11da1e22bda96d130a0f0d4d5b48/r6-operators-list-mute.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3exeHnxH1tmUmQTequWRKa/e1b6c6f057eb24722dd7860af0276316/Y0R6_BADGE_Mute_L.png"
    },{
        name: "Smoke",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Tm9rzdq6j9cpdW9qjnnrw/10d42d14755002e1056d1a940841482c/r6-operators-list-smoke.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6mOMxoc3t27R9Gr9wFtt6T/f5f90a6be6a6710bee686ce69df29906/Y0R6_BADGE_Smoke_L.png"
    },{
        name: "Castle",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ETv9XcrmgbAdYWDJ2ZIh0/3f5ad7d030ee411c041c524880176603/r6-operators-list-castle.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/kzznLctjOsXJZAg0F2HPB/dea28fa008515d6ddaa0d2659f4dc253/Y0R6_BADGE_Castle_L.png"
    },{
        name: "Pulse",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1YQb5phSD3uYbWrqhCBJRU/06e5f689777224bf8ca6c7c5cad9db9d/r6-operators-list-pulse.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/ChAeJzdmwxuvhZTrV81rK/8c16116f4c719a3df864df6639e2f52e/Y0R6_BADGE_Pulse_L.png"
    },{
        name: "Doc",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2sCxLIpS9I19PKRz44Phj9/4f96411a556cc41597b8b3e83260cd21/r6-operators-list-doc.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/71Nl3v0LqHyo9eXV6xTFQd/1ba4f057b6acad3ec700ca9e60b53d6c/Y0R6_BADGE_Doc_L.png"
    },{
        name: "Rook",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1aFTx0BJYAKAnS1vyNA7w6/b4fc6421d382c677aa0197f84131eaa5/r6-operators-list-rook.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Yk1noMd9re0RLlrXJSWtR/7a55e80593c487827293a114835dba63/Y0R6_BADGE_Rook_L.png"
    },{
        name: "Jäger",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4kMW2lcoewGifRWbvQVjKy/8f974b5d26db81dc823ea602e31d6273/r6-operators-list-jager.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1cCvTmKwnnovVmpZmDyPkA/b064f5ad6b9e7398d820d9ea90ff9366/Y0R6_BADGE_Jager_L.png"
    },{
        name: "Bandit",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2cFHG0Xk93uoGrm5nTjDPE/2211339df9b36c1b0d9873e480d03fad/r6-operators-list-bandit.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4Vasjq82J1TNjNE38J7LmV/e1725f8d9ea2b85565e40b54faac85b8/Y0R6_BADGE_Bandit_L.png"
    },{
        name: "Tachanka",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5P9kGyOrnsu7lRyr9xC71t/53981da03fa36adf99adf61bc098bd4a/r6s-operators-list-tachanka.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7hpI2mcmvyjC2vG6ieltLo/f217b1dc449c0514b55e471193a38c91/Y0R6_BADGE_Tachanka_L.png"
    },{
        name: "Kapkan",
        portrait: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MofnDHeL1uwsenBVjxplQ/1e5af8fe9cf6f36516c7f6e5d56fcac0/r6-operators-list-kapkan.png",
        icon: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/797q7C5YA89eFqw4RB40ka/f9435d1b4d13d41472e22d305c961cb9/Y0R6_BADGE_Kapkan_L.png"
    }];
    

    // Function to generate random integer between min and max values
    function getRandomInt(min,max) 
    {
        // Generating random integer between min and max
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    }  

    if (type == 'attacker'){
        array = attackers
    } else {array = defenders}

    var randomNumber = getRandomInt(0,array.length-1)

    document.getElementById('operatorPortrait').src = array[randomNumber].portrait

    document.getElementById("icon").src = array[randomNumber].icon

    document.getElementById("operatorName").innerText = array[randomNumber].name

}

document.addEventListener("DOMContentLoaded", function(event){
    display_random_image('attacker')
})
