async function load(){
    const requestURL = 'https://raw.githubusercontent.com/2ironmini/project/main/carddata.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const CARDDATA = await response.json();

    loadCard(CARDDATA);
}

function loadCard(obj){
    const section = document.querySelector("#sec3 .cardlist .wrap");
    const we = obj.cards
    
    for (const me of we)
    {
        const id = document.createElement('div');
        const closeBt = document.createElement('div');

        id.addEventListener
        function addOn() {
            id.classList.add("on");
        };
        id.addEventListener('click', addOn);

        let removeOn = () => 
        {
            id.remove("on");
        };
        closeBt.addEventListener('click', removeOn);
        
        const textbox = document.createElement('div')
        const name = document.createElement('h4')
        const classId = document.createElement('p');
        const spellType = document.createElement('p');
        const minionType = document.createElement('p');
        const cardType = document.createElement('p');
        const cardSet = document.createElement('p');
        const rarityID = document.createElement('p');
        const artistName = document.createElement('p');
        const manaCost = document.createElement('p');
        const text = document.createElement('p');
        const flavorText = document.createElement('p');
        const attack = document.createElement('p');
        const health = document.createElement('p');
        const img = document.createElement('img');
        img.src = me.image;
        img.alt = me.name;
        img.loading = 'lazy';
        id.className = me.classId;
        id.id = me.id;
        name.className = 'name';
        classId.className = `class ${me.classId}`;
        spellType.className = `spellType ${me.spellSchoolId}`;
        minionType.className = `minionType ${me.minionTypeId}`;
        cardType.className = `cardType ${me.cardTypeId}`;
        cardSet.className = `cardSet ${me.cardSetId}`;
        rarityID.className = `rarity ${me.rarityId}`;
        artistName.className = 'artistName';
        manaCost.className = `manaCost ${me.manaCost}`;
        attack.className = `attack ${me.attack}`;
        health.className = `health ${me.health}`;
        text.className = `text`;
        flavorText.className = `flavorText`;
        closeBt.className = 'closeBt';
        textbox.className = 'textbox';


        name.textContent = me.name;
        classId.textContent = me.classId;
        spellType.textContent = `${me.spellSchoolId}`;
        minionType.textContent = `${me.minionTypeId}`;
        cardType.textContent = `${me.cardTypeId}`;
        cardSet.textContent = `${me.cardSetId}`;
        rarityID.textContent = `${me.rarityId}`;
        artistName.textContent = `?????? ???????????? : ${me.artistName}`;
        manaCost.textContent = `?????? ????????? : ${me.manaCost}??????`;
        
        text.innerHTML = `?????? ?????? : ${me.text}`;
        flavorText.innerHTML = `????????? : ${me.flavorText}`;
        attack.textContent = `????????? : ${me.attack}`;
        health.textContent = `?????? : ${me.health}`;

        id.prepend(img);
        textbox.appendChild(name);
        textbox.appendChild(classId);
        textbox.appendChild(spellType);
        textbox.appendChild(minionType);
        textbox.appendChild(cardType);
        textbox.appendChild(cardSet);
        textbox.appendChild(artistName);
        textbox.appendChild(manaCost);
        textbox.appendChild(text);
        textbox.appendChild(flavorText);
        textbox.appendChild(attack);
        textbox.appendChild(health);
        textbox.appendChild(closeBt);
        id.appendChild(textbox);
        textbox.appendChild(rarityID);
        
        section.appendChild(id);
}
$("p:contains('undefined')").hide(this);

// ????????? ??????
$("p.class.2").html("?????? : ????????????");
$("p.class.3").html("?????? : ?????????");
$("p.class.4").html("?????? : ?????????");
$("p.class.5").html("?????? : ?????????");
$("p.class.6").html("?????? : ??????");
$("p.class.7").html("?????? : ??????");
$("p.class.8").html("?????? : ?????????");
$("p.class.9").html("?????? : ????????????");
$("p.class.10").html("?????? : ??????");
$("p.class.12").html("?????? : ??????");
$("p.class.14").html("?????? : ?????? ?????????");

// ???????????? 
$("p.spellType.1").html("?????? ?????? : ??????");
$("p.spellType.2").html("?????? ?????? : ??????");
$("p.spellType.3").html("?????? ?????? : ??????");
$("p.spellType.4").html("?????? ?????? : ??????");
$("p.spellType.5").html("?????? ?????? : ??????");
$("p.spellType.6").html("?????? ?????? : ??????");
$("p.spellType.7").html("?????? ?????? : ??????");

// ????????????
$("p.cardType.3").html("?????? ?????? : ?????? ??????");
$("p.cardType.4").html("?????? ?????? : ?????????");
$("p.cardType.5").html("?????? ?????? : ??????");
$("p.cardType.7").html("?????? ?????? : ??????");
$("p.cardType.39").html("?????? ?????? : ??????");

// ????????????
$("p.cardSet.1525").html("?????? ?????? : ????????? ???");
$("p.cardSet.1578").html("?????? ?????? : ????????????");
$("p.cardSet.1626").html("?????? ?????? : ????????? ??????");
$("p.cardSet.1637").html("?????? ?????? : ??????");
$("p.cardSet.1658").html("?????? ?????? : ???????????? ???????????? ??????");
$("p.cardSet.1691").html("?????? ?????? : ???????????? ?????? ?????? ??????");

//?????????
$("p.rarity.1").html("????????? : ??????");
$("p.rarity.3").html("????????? : ??????");
$("p.rarity.4").html("????????? : ??????");
$("p.rarity.5").html("????????? : ??????");

//???????????????
$("p.minionType.14").html("?????? : ??????");
$("p.minionType.15").html("?????? : ??????");
$("p.minionType.17").html("?????? : ??????");
$("p.minionType.18").html("?????? : ??????");
$("p.minionType.20").html("?????? : ??????");
$("p.minionType.21").html("?????? : ??????");
$("p.minionType.23").html("?????? : ??????");
$("p.minionType.24").html("?????? : ??????");
$("p.minionType.26").html("?????? : ??????");
$("p.minionType.43").html("?????? : ???????????????");
$("p.minionType.92").html("?????? : ??????");

}


load();











var mage = "div.4";
var paladin = "div.5";
var demonhunter = "div.14";
var druid = "div.2";
var hunter = "div.3";
var warlock = "div.9";
var warrior = "div.10";
var priest = "div.6";
var rogue = "div.7";
var shaman = "div.8";
var natural = "div.12";



$(".job .magicianpage").click(function(){
    $(mage).show().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .paladinpage").click(function(){
    $(mage).hide().stop();
    $(paladin).show().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .demonhunterpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).show().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .druidpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).show().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .hunterpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).show().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .warlockpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).show().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .warriorpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).show().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .priestpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).show().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .roguepage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).show().stop();
    $(shaman).hide().stop();
    $(natural).hide().stop();
});
$(".job .shamanpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).show().stop();
    $(natural).hide().stop();
});
$(".job .naturalpage").click(function(){
    $(mage).hide().stop();
    $(paladin).hide().stop();
    $(demonhunter).hide().stop();
    $(druid).hide().stop();
    $(hunter).hide().stop();
    $(warlock).hide().stop();
    $(warrior).hide().stop();
    $(priest).hide().stop();
    $(rogue).hide().stop();
    $(shaman).hide().stop();
    $(natural).show().stop();

});

//     // $(mage).toggle().stop();
//     // $(paladin).toggle().stop();
//     // $(demonhunter).toggle().stop();
//     // $(druid).toggle().stop();
//     // $(hunter).toggle().stop();
//     // $(warlock).toggle().stop();
//     // $(warrior).toggle().stop();
//     // $(priest).toggle().stop();
//     // $(rogue).toggle().stop();
//     $(druid).hide().stop();
    
// });


// ??????
// $(".job div:nth(6)").click(function(){
//     $("#god div.14").not(this).hide();
// });    





