// var lastWidth = $(window).width();
//     $(window).resize(function () {
//         if ($(window).width() != lastWidth) {
//             location.reload();
//             lastWidth = $(window).width();
//             return false;
//         }
//     });




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
        const textbox = document.createElement('div')
        const name = document.createElement('h3')
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
        const powder = document.createElement('p');
        const closeBt = document.createElement('span');

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
        textbox.className = 'textbox';
        closeBt.className = 'closeBt';
        powder.className = `powder ${me.rarityId}`;

        name.textContent = me.name;
        classId.textContent = me.classId;
        spellType.textContent = `${me.spellSchoolId}`;
        minionType.textContent = `${me.minionTypeId}`;
        cardType.textContent = `${me.cardTypeId}`;
        cardSet.textContent = `${me.cardSetId}`;
        rarityID.textContent = `${me.rarityId}`;
        artistName.textContent = `?????? ???????????? : ${me.artistName}`;
        manaCost.textContent = `${me.manaCost}`;
        text.innerHTML = `${me.text}`;
        flavorText.innerHTML = `${me.flavorText}`;
        attack.textContent = `${me.attack}`;
        health.textContent = `${me.health}`;
        powder.textContent = `${me.rarityId}`;

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
        img.appendChild(textbox);
        textbox.appendChild(rarityID);
        textbox.appendChild(powder);
        section.appendChild(id);
        
        const cardOne = document.querySelector("#eachcard"); 
        const cardTwo = document.querySelector("#eachimg");
        const cardThr = document.querySelector("#eachtextbox");
        
        var eachevent = $(img).on('click',function(){
          cardTwo.prepend(img);
          cardThr.prepend(textbox);
          $(cardOne).show().focus();
        });

        img.addEventListener
        function addOn() {
            eachevent;
        };
        img.addEventListener('click', addOn);

        let removeOn = () => 
        {
            img.remove(eachevent);
            id.prepend(img);
            img.appendChild(textbox);
            $(cardOne).hide();
            $(cardTwo).removechild();
            $(cardThr).removechild();
        };
        closeBt.addEventListener('click', removeOn);
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
  $("p.spellType.undefined").html("?????? ?????? : ??????");

  // ????????????
  $("p.cardType.3").html("?????? ?????? : ?????? ??????");
  $("p.cardType.4").html("?????? ?????? : ?????????");
  $("p.cardType.5").html("?????? ?????? : ??????");
  $("p.cardType.7").html("?????? ?????? : ??????");
  $("p.cardType.39").html("?????? ?????? : ??????");

  // ?????????
  $("p.cardSet.1525").html("?????? ??? : ????????? ???");
  $("p.cardSet.1578").html("?????? ??? : ????????????");
  $("p.cardSet.1626").html("?????? ??? : ????????? ??????");
  $("p.cardSet.1637").html("?????? ??? : ??????");
  $("p.cardSet.1658").html("?????? ??? : ???????????? ???????????? ??????");
  $("p.cardSet.1691").html("?????? ??? : ???????????? ?????? ?????? ??????");

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
  $("p.minionType.undefined").html("?????? : ??????");

  //?????????
  $("p.attack.0").html("????????? : 0");
  $("p.attack.1").html("????????? : 1.");
  $("p.attack.2").html("????????? : 2");
  $("p.attack.3").html("????????? : 3");
  $("p.attack.4").html("????????? : 4");
  $("p.attack.5").html("????????? : 5");
  $("p.attack.6").html("????????? : 6");
  $("p.attack.7").html("????????? : 7");
  $("p.attack.8").html("????????? : 8");
  $("p.attack.9").html("????????? : 9");
  $("p.attack.10+").html("????????? : 10+");


  //??????
  $("p.health.1").html("?????? : 1.");
  $("p.health.2").html("?????? : 2");
  $("p.health.3").html("?????? : 3");
  $("p.health.4").html("?????? : 4");
  $("p.health.5").html("?????? : 5");
  $("p.health.6").html("?????? : 6");
  $("p.health.7").html("?????? : 7");
  $("p.health.8").html("?????? : 8");
  $("p.health.9").html("?????? : 9");
  $("p.health.10").html("?????? : 10+");


  // ???????????????

  $("p.manaCost.0").html("?????? ????????? : 0??????")
  $("p.manaCost.1").html("?????? ????????? : 1??????")
  $("p.manaCost.2").html("?????? ????????? : 2??????")
  $("p.manaCost.3").html("?????? ????????? : 3??????")
  $("p.manaCost.4").html("?????? ????????? : 4??????")
  $("p.manaCost.5").html("?????? ????????? : 5??????")
  $("p.manaCost.6").html("?????? ????????? : 6??????")
  $("p.manaCost.7").html("?????? ????????? : 7??????")
  $("p.manaCost.8").html("?????? ????????? : 8??????")
  $("p.manaCost.9").html("?????? ????????? : 9??????")
  $("p.manaCost.10").html("?????? ????????? : 10+??????")
  $("p.manaCost.12").html("?????? ????????? : 10+??????")
  $("p.manaCost.20").html("?????? ????????? : 10+??????")

  // ?????? ??????

  $("p.powder.1").html("????????? ?????? ?????? : 40")
  $("p.powder.3").html("????????? ?????? ?????? : 100")
  $("p.powder.4").html("????????? ?????? ?????? : 400")
  $("p.powder.5").html("????????? ?????? ?????? : 1600")

  var csschange = {'display': 'flex', 'flex': 'wrap'};

  $(document).ready(function() {
      $("#familysel").on('change',function() {
        loadingProcess();
        var result_family = $('#familysel option:selected').val();
        if (result_family == '92') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '14') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '15') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '17') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '18') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '20') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '21') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '23') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '24') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '26') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == '43') {
          $("#god div:not(:contains('?????? : ???????????????'))").hide(this);
          $("#god div:contains('?????? : ???????????????')").css(csschange);
        } 
        else if (result_family == '92') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
        else if (result_family == 'other') {
          $("#god div:not(:contains('?????? : ??????'))").hide(this);
          $("#god div:contains('?????? : ??????')").css(csschange);
        } 
      });
    }); 

  $(document).ready(function() {
      $("#attacksel").on('change',function() {
        loadingProcess();
        var result_attack = $('#attacksel option:selected').val();
        if (result_attack == '0') {
          $("#god div:not(:contains('????????? : 0'))").hide(this);
          $("#god div:contains('????????? : 0')").css(csschange);
        } 
        else if (result_attack == '1') {
          $("#god div:not(:contains('????????? : 1'))").hide(this);
          $("#god div:contains('????????? : 1')").css(csschange);
        } 
        else if (result_attack == '2') {
          $("#god div:not(:contains('????????? : 2'))").hide(this);
          $("#god div:contains('????????? : 2')").css(csschange);
        } 
        else if (result_attack == '3') {
          $("#god div:not(:contains('????????? : 3'))").hide(this);
          $("#god div:contains('????????? : 3')").css(csschange);
        } 
        else if (result_attack == '4') {
          $("#god div:not(:contains('????????? : 4'))").hide(this);
          $("#god div:contains('????????? : 4')").css(csschange);
        } 
        else if (result_attack == '5') {
          $("#god div:not(:contains('????????? : 5'))").hide(this);
          $("#god div:contains('????????? : 5')").css(csschange);
        } 
        else if (result_attack == '6') {
          $("#god div:not(:contains('????????? : 6'))").hide(this);
          $("#god div:contains('????????? : 6')").css(csschange);
        } 
        else if (result_attack == '7') {
          $("#god div:not(:contains('????????? : 7'))").hide(this);
          $("#god div:contains('????????? : 7')").css(csschange);
        } 
        else if (result_attack == '8') {
          $("#god div:not(:contains('????????? : 8'))").hide(this);
          $("#god div:contains('????????? : 8')").css(csschange);
        } 
        else if (result_attack == '9') {
          $("#god div:not(:contains('????????? : 9'))").hide(this);
          $("#god div:contains('????????? : 9')").css(csschange);
        } 
        else if (result_attack == '10+') {
          $("#god div:not(:contains('????????? : 10+'))").hide(this);
          $("#god div:contains('????????? : 10+')").css(csschange);
        } 
      }); 
    }); 

  $(document).ready(function() {
      $("#healthsel").on('change',function() {
        loadingProcess();
        var result_health = $('#healthsel option:selected').val();
        if (result_health == '1') {
          $("#god div:not(:contains('?????? : 1.'))").hide(this);
          $("#god div:contains('?????? : 1.')").css(csschange);
        } 
        else if (result_health == '2') {
          $("#god div:not(:contains('?????? : 2'))").hide(this);
          $("#god div:contains('?????? : 2')").css(csschange);
        } 
        else if (result_health == '3') {
          $("#god div:not(:contains('?????? : 3'))").hide(this);
          $("#god div:contains('?????? : 3')").css(csschange);
        } 
        else if (result_health == '4') {
          $("#god div:not(:contains('?????? : 4'))").hide(this);
          $("#god div:contains('?????? : 4')").css(csschange);
        } 
        else if (result_health == '5') {
          $("#god div:not(:contains('?????? : 5'))").hide(this);
          $("#god div:contains('?????? : 5')").css(csschange);
        } 
        else if (result_health == '6') {
          $("#god div:not(:contains('?????? : 6'))").hide(this);
          $("#god div:contains('?????? : 6')").css(csschange);
        } 
        else if (result_health == '7') {
          $("#god div:not(:contains('?????? : 7'))").hide(this);
          $("#god div:contains('?????? : 7')").css(csschange);
        } 
        else if (result_health == '8') {
          $("#god div:not(:contains('?????? : 8'))").hide(this);
          $("#god div:contains('?????? : 8')").css(csschange);
        } 
        else if (result_health == '9') {
          $("#god div:not(:contains('?????? : 9'))").hide(this);
          $("#god div:contains('?????? : 9')").css(csschange);
        } 
        else if (result_health == '10+') {
          $("#god div:not(:contains('?????? : 10+'))").hide(this);
          $("#god div:contains('?????? : 10+')").css(csschange);
        } 
      }); 
    }); 

  $(document).ready(function() {
      $("#spellsel").on('change',function() {
        loadingProcess();
        var result_spell = $('#spellsel option:selected').val();
        if (result_spell == '1') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
        else if (result_spell == '2') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
        else if (result_spell == '3') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
        else if (result_spell == '4') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
        else if (result_spell == '5') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
        else if (result_spell == '6') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
        else if (result_spell == '7') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
        else if (result_spell == 'other') {
          $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
          $("#god div:contains('?????? ?????? : ??????')").css(csschange);
        } 
      }); 
    }); 

  $(document).ready(function() {
      $("#raritysel").on('change',function() {
        loadingProcess();
        var result_rarity = $('#raritysel option:selected').val();
        if (result_rarity == '1') {
          $("#god div:not(:contains('????????? : ??????'))").hide(this);
          $("#god div:contains('????????? : ??????')").css(csschange);
        } 
        else if (result_rarity == '3') {
          $("#god div:not(:contains('????????? : ??????'))").hide(this);
          $("#god div:contains('????????? : ??????')").css(csschange);
        } 
        else if (result_rarity == '4') {
          $("#god div:not(:contains('????????? : ??????'))").hide(this);
          $("#god div:contains('????????? : ??????')").css(csschange);
        } 
        else if (result_rarity == '5') {
          $("#god div:not(:contains('????????? : ??????'))").hide(this);
          $("#god div:contains('????????? : ??????')").css(csschange);
        }
      }); 
    }); 

  $(document).ready(function() {
      $("#setsel").on('change',function() {
        loadingProcess();
        var result_set = $('#setsel option:selected').val();
        if (result_set == '1691') {
          $("#god div:not(:contains('?????? ??? : ???????????? ?????? ?????? ??????'))").hide(this);
          $("#god div:contains('?????? ??? : ???????????? ?????? ?????? ??????')").css(csschange);
        } 
        else if (result_set == '1658') {
          $("#god div:not(:contains('?????? ??? : ???????????? ???????????? ??????'))").hide(this);
          $("#god div:contains('?????? ??? : ???????????? ???????????? ??????')").css(csschange);
        } 
        else if (result_set == '1626') {
          $("#god div:not(:contains('?????? ??? : ????????? ??????'))").hide(this);
          $("#god div:contains('?????? ??? : ????????? ??????')").css(csschange);
        } 
        else if (result_set == '1578') {
          $("#god div:not(:contains('?????? ??? : ????????????'))").hide(this);
          $("#god div:contains('?????? ??? : ????????????')").css(csschange);
        } 
        else if (result_set == '1525') {
          $("#god div:not(:contains('?????? ??? : ????????? ???'))").hide(this);
          $("#god div:contains('?????? ??? : ????????? ???')").css(csschange);
        } 
        else if (result_set == '1637') {
          $("#god div:not(:contains('?????? ??? : ??????'))").hide(this);
          $("#god div:contains('?????? ??? : ??????')").css(csschange);
        } 
      }); 
    }); 
}

load();




function loadingProcess(){
  openLoading();
  setTimeout(closeLoading,3000);
}

function openLoading(){
  $("#loading").show()
}

function closeLoading() {
  $("#loading").hide()
}

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

$("#sec3 .searchmenu .job .magicianpage").click(function(){
  loadingProcess();
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

$("#sec3 .searchmenu .job .paladinpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .demonhunterpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .druidpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .hunterpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .warlockpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .warriorpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .priestpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .roguepage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .shamanpage").click(function(){
  loadingProcess();
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
$("#sec3 .searchmenu .job .naturalpage").click(function(){
  loadingProcess();
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

$(function(){
    $(".gnb .navmenu .m").on("mouseenter focusin click", function(){
        $("ul",this).show();
        $(this).siblings("li").find("ul").hide().stop();
        
    }).on("mouseleave", function(){
        $(".gnb .navmenu .m ul").hide().add(".gnb .navmenu .m").removeClass("on").stop();
    });
    
});

// -----------------------------------------------------all nav depth


// $("*").removeClass("on").stop().trigger("mouseleave, focusout");




$(".gnb .navmenu .m:first a").click(function(){
    $("#main").addClass("on").siblings().removeClass("on");
});    
$(".gnb .navmenu .m:nth(1) a").click(function(){
    $("#sec2").addClass("on").siblings().removeClass("on");
    $("#heropage .bg.on").removeClass("on");
});    
$(".main .maininner .ha").click(function(){
  $("#sec2").addClass("on").siblings().removeClass("on");
})
// $(".gnb .navmenu .m:nth(2) a").click(function(){
//   loadingProcess();
//     $("#sec3").addClass("on").siblings().removeClass("on");    
// });    
// $(".gnb .navmenu .m:nth(3) a").click(function(){
//     $("#sec1").addClass("on").siblings().removeClass("on");
// });    
$(".gnb .navmenu .m:last a").click(function(){
    $("#sec4").addClass("on").siblings().removeClass("on");
});    

$(".main .maininner .jung .patchimg").click(function(){
    $("#sec4").addClass("on").siblings().removeClass("on").focus("#sec4");
})

$(".gnb .navmenu .m ul").hide();  
    $(".gnb .navmenu .m ul li").hover(function(){
        $(this).addClass("on").stop();
        $(".gnb .navmenu .m ul li").not(this).removeClass("on").stop();
    });


// -----------------------------------------------------

// -----------------------------------------------------nav3 depth




$(".gnb .navmenu .m:nth(3) .snb li:first a").click(function(){
    $("#gamebg").addClass("on").siblings().removeClass("on");
    $("#sec1").addClass("on").siblings().removeClass("on");
});    
$(".gnb .navmenu .m:nth(3) .snb li:last a").click(function(){
  // ?????????????????????????????????????????????????????????????????? li??? ?????????
    $("#gameintroduce").addClass("on").siblings().removeClass("on");
    $("#slide ul.control li:first").addClass("on").siblings().removeClass("on");
    $("#slide ul.right li .guide.on li:first").addClass("on").siblings().removeClass("on");
    $("#slide ul.right li .textguide.on li:first").addClass("on").siblings().removeClass("on");
    // ??????????????????????????????????????????????????????
    $("#sec1").addClass("on").siblings().removeClass("on");
});    



// -----------------------------------------------------

// -----------------------------------------------------HSintro depth

$(function() {
  $("#whatHS .slidebt span:last").click(function(){
    if (!$(".HSintro > li:last").is(":visible")) {
        $(".HSintro > li:visible").hide().next("li").fadeIn(400);
    }

    if ($(".HSintro > li:first").is(":visible")){
        $("#whatHS .slidebt span:last").removeClass("off");
        $("#whatHS .slidebt span:first").addClass("off");
    }
    // if ($(".HSintro > li:nth(1)").is(":visible")){
    //     $("#whatHS .slidebt span:last").removeClass("off");
    //     $("#whatHS .slidebt span:first").removeClass("off");
    // }
    // if ($(".HSintro li:nth(2)").is(":visible")){
    //     $("#whatHS .slidebt span:last").removeClass("off");
    //     $("#whatHS .slidebt span:first").removeClass("off");
    // }
    if ($(".HSintro > li:last").is(":visible")){
        $("#whatHS .slidebt span:last").addClass("off");
        $("#whatHS .slidebt span:first").removeClass("off");
    }
    return false;
  });
  $("#whatHS .slidebt span:first").click(function() {
    if (!$(".HSintro > li").first().is(":visible")) {
        $(".HSintro > li:visible").hide().prev("li").fadeIn(400);
    }
    if ($(".HSintro > li:first").is(":visible")){
      $("#whatHS .slidebt span:last").removeClass("off");
      $("#whatHS .slidebt span:first").addClass("off");
    }
    // if ($(".HSintro > li:nth(1)").is(":visible")){
    //     $("#whatHS .slidebt span:last").removeClass("off");
    //     $("#whatHS .slidebt span:first").removeClass("off");
    // }
    // if ($(".HSintro li:nth(2)").is(":visible")){
    //     $("#whatHS .slidebt span:last").removeClass("off");
    //     $("#whatHS .slidebt span:first").removeClass("off");
    // }
    if ($(".HSintro > li:last").is(":visible")){
        $("#whatHS .slidebt span:last").addClass("off");
        $("#whatHS .slidebt span:first").removeClass("off");
    }
    return false;
  });
});
    
// -----------------------------------------------------

// -----------------------------------------------------nav2 depth

$(".gnb .navmenu .m:nth(2) .snb li:first a").click(function(){
    loadingProcess();
    $("#sec3 .searchmenu .job").addClass("on").siblings().removeClass("on");
    $("#sec3").addClass("on").siblings().removeClass("on");    
    });    

$(".gnb .navmenu .m:nth(2) .snb li:nth(1) a").click(function(){
    loadingProcess();
    $("#sec3 .searchmenu .subform").addClass("on").siblings().removeClass("on");
    $("#sec3").addClass("on").siblings().removeClass("on");    
    });
// -----------------------------------------------------

// -----------------------------------------------------???????????? depth

$(".sec2 .herose .Hr:first a").click(function(){
  $("#magician").addClass("on").siblings().removeClass("on");
  });
$(".sec2 .herose .Hr:nth(1) a").click(function(){
  $("#paladin").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(2) a").click(function(){
    $("#demonhunter").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(3) a").click(function(){
    $("#druid").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(4) a").click(function(){
    $("#hunter").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(5) a").click(function(){
    $("#warlock").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(6) a").click(function(){
    $("#warrior").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(7) a").click(function(){
    $("#priest").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:nth(8) a").click(function(){
    $("#rogue").addClass("on").siblings().stop().removeClass("on");
});    

$(".sec2 .herose .Hr:last a").click(function(){
    $("#shaman").addClass("on").siblings().stop().removeClass("on");
});    

// -----------------------------------------------------

$(function() {
    $("#slide .control li:first").click(function() {
        $(".guide.on  > li:first").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:first").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(1)").click(function() {
        $(".guide.on > li:nth(1)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(1)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(2)").click(function() {
        $(".guide.on > li:nth(2)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(2)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(3)").click(function() {
        $(".guide.on > li:nth(3)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(3)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(4)").click(function() {
        $(".guide.on > li:nth(4)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(4)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(5)").click(function() {
        $(".guide.on > li:nth(5)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(5)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(6)").click(function() {
        $(".guide.on > li:nth(6)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(6)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(7)").click(function() {
        $(".guide.on > li:nth(7)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(7)").addClass("on").siblings().removeClass("on").fadeOut();
    });
    $("#slide .control li:nth(8)").click(function() {
        $(".guide.on > li:nth(8)").addClass("on").siblings().removeClass("on").fadeOut();
        $(".textguide > li:nth(8)").addClass("on").siblings().removeClass("on").fadeOut();
    });
});

$(document).ready(function(index, li){
    $(".slide > .control > li").addClass(function(index){
        return `mana${index+1}`;
    });
});

// -----------------------------------------------------#slide ?????????

$("#slide > .control > li").click(function(){
    $("#slide > .right > li > .guide").addClass("on").siblings();
    $("#slide > .right > li > .textguide").addClass("on").siblings();
});
    
$("ul.guide li:first").show();
    $("ul.control li").click(function() { 
        $(this).addClass("on").siblings().removeClass("on");
    });
// -----------------------------------------------------

// ----------------------------------------------------- introduce



// -----------------------------------------------------

$(document).ready(function(index, li){
    $(".slide > .control > li").addClass(function(index){
        return `mana${index+1}`;
    });
});
    
$(document).ready(function(){  
$(".sec2 > .heropage > .bg > .inner > .skin > .slick").slick({
    centerMode: false,
    centerPadding: 60,
    slidesToShow: 4,
    Infinite : true,
    slidesToScroll : 2,
    speed : 300,
    arrows : true,
    autoplay : true,
    autoplatSpeed : 1000,
    pauseOnHover : true,
    vertical : false,
    centerMode : false,
    centerPadding : 0,
    responsive: [
      {
        breakpoint : 768,
        settings : {
          slidesToShow : 3,
          slidesToScroll : 2
        }
      },
      {
        breakpoint : 600,
        settings : {
          slidesToShow : 2,
          slidesToScroll : 1
        }
      },
      {
        breakpoint : 400,
        settings : {
          slidesToShow : 1,
          slidesToScroll : 1
        }
      }
    ]
  });

  });
    
  const targetF = document.getElementById('familysel');
  const targetA = document.getElementById('attacksel');
  const targetH = document.getElementById('healthsel');
  const targetSp = document.getElementById('spellsel');
  const targetR = document.getElementById('raritysel');
  const targetSe = document.getElementById('setsel');
  const targetMana = document.getElementById('manasel');
  

  function radiocheckFamily() {
    targetF.disabled = false;
    targetA.disabled = true;
    targetH.disabled = true;
    targetSp.disabled = true;
    targetR.disabled = true;
    targetSe.disabled = true;
  }

function radiocheckSpell() {
    targetF.disabled = true;
    targetA.disabled = true;
    targetH.disabled = true;
    targetSp.disabled = false;
    targetR.disabled = true;
    targetSe.disabled = true;
}
function radiocheckRarity() {
    targetF.disabled = true;
    targetA.disabled = true;
    targetH.disabled = true;
    targetSp.disabled = true;
    targetR.disabled = false;
    targetSe.disabled = true;
}
function radiocheckSet() {
    targetF.disabled = true;
    targetA.disabled = true;
    targetH.disabled = true;
    targetSp.disabled = true;
    targetR.disabled = true;
    targetSe.disabled = false;
}
function radiocheckAttack() {
    targetF.disabled = true;
    targetA.disabled = false;
    targetH.disabled = true;
    targetSp.disabled = true;
    targetR.disabled = true;
    targetSe.disabled = true;
}
function radiocheckHealth() {
    targetF.disabled = true;
    targetA.disabled = true;
    targetH.disabled = false;
    targetSp.disabled = true;
    targetR.disabled = true;
    targetSe.disabled = true;
}
function radiocheckMana() {
    targetF.disabled = true;
    targetA.disabled = true;
    targetH.disabled = true;
    targetSp.disabled = true;
    targetR.disabled = true;
    targetSe.disabled = true;
    targetMana.disabled = false;
}

var csschange = {'display': 'flex', 'flex': 'wrap'};

$(document).ready(function(){
  $("#leftradios div input").on('change',function(){
    loadingProcess();
    var radioval = $("#leftradios div input:checked").val();
    if (radioval == '??????') {
      $("#god div:not(:contains('?????? ?????? : ?????????'))").hide(this);
      $("#god div:contains('?????? ?????? : ?????????')").css(csschange);
    }
    else if(radioval =='??????') {
      $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
      $("#god div:contains('?????? ?????? : ??????')").css(csschange);
    }
    else if(radioval =='??????') {
      $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
      $("#god div:contains('?????? ?????? : ??????')").css(csschange);
    }
    else if(radioval =='??????') {
      $("#god div:not(:contains('?????? ?????? : ??????'))").hide(this);
      $("#god div:contains('?????? ?????? : ??????')").css(csschange);
    }
    else if(radioval =='?????? ??????') {
      $("#god div:not(:contains('?????? ?????? : ?????? ??????'))").hide(this);
      $("#god div:contains('?????? ?????? : ?????? ??????')").css(csschange);
    }
  });
});

$("#sec3 .searchmenu .job div").on('click',function(){
  $(this).addClass("on").siblings().removeClass("on");
})


$(function(){
  $("#sec4 .maininner .up .patch").click(function(){
    $(this).toggleClass("on").stop();
  })
})

$(function(){
  $("#sec4 .maininner .down .watch").click(function(){
    $(this).toggleClass("on").stop();
  })
})






















function magicianClick() {
  document.getElementById('clickpage').click(this);
//   // document.getElementsByClassName("magicianpage").click(this);
//   // ??????
}

function showall() {
  $("#god div").show();
}

// ????????? ????????? ???????????? ??? ?????? ????????? ????????????
// var video = document.getElementById('video');

// function Fullscreen() {
//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   }
// }

// video.onended = (event) => {
//   if (document.fullscreenElement) {
//     document.exitFullscreen()
//       // .then(() => console.log("Document Exited from Full screen mode"))
//       // .catch((err) => console.error(err))
//   } 
//   // else {
//   //   document.documentElement.requestFullscreen();
//   // }
// }
// ???????????????????????????????????? ?????? ????????? 
var tag = document.createElement('script');
var closeyt = document.getElementById('closeyt');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  
var player;
  player = new YT.Player('player', {
    width : '100%',
    height : '100%',
    videoId : 'm6kPKwfuzPI',
    playerVars: { 
      'autoplay': 1,
      'controls': 1,
      'playsinline' : 1,
      'rel' : 0,
      'mute': 1,
      'fullscreen' : 1,
      'wmode' : 'transparent'
    },
    events : {
      'onReady' : onPlayerReady,
      'onStateChange' : onPlayerStateChange
    }
  });
}


function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == 0) {
    $("body #player").remove();
    $("#closeyt").remove();
  }
}

$(closeyt).show(10000);


$(closeyt).click(function(){
  $("body #player").remove();
  $(this).remove();
})
// ?????????????????????????????????????????????????????????????????????



// ?????????????????????????????????????????????swiper ?????????
document.addEventListener("DOMContentLoaded", function () {
	gallerySliderSwiper();
});

function gallerySliderSwiper() {
	var gallerySliderSwiper = new Swiper('.swiper-container', {
		navigation: {
			nextEl: '.swiperbt.next',
			prevEl: '.swiperbt.prev',
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
    loop: true
	})
}




$("#sec2 #heropage div.bg .inner .close").click(function(){
  $("#sec2 #heropage div.bg").removeClass("on");
})
// ???????????????????????????????????????????????????????????????????????????????????????????????????


// $(".main .maininner .ha").on('hover focusin',function(){
//   $(".main .maininner .ha div").addClass("on");
// })