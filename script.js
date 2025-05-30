const characters = [
    { 
        id: 1, 
        name: 'Super Saiyan God SS Vegito', 
        type: 'ultra',  
        affinity: 'red',  
        affinityImage: 'images/affinitys/red.png',  
        rarezaImage: 'https://i.ibb.co/WpkhLJN4/Gas-txt-Rarity-ULTRA.png',  
        baseStats: {
            hp: 26077,
            strikeAtk: 2724,
            strikeDef: 1685,
            blastAtk: 2570,
            blastDef: 1719,
            pierceResist: 100,
            sliceResist: 100,
            impactResist: 100,
            explodeResist: 100,
            criticalRate: '13.30%',
            kiRecover: '24.91%',
            vanishRecover: '20.00%',
            changeCd: '10s'
        },
        maxStats: {
            hp: 2633228,
            strikeAtk: 275079,
            strikeDef: 170132,
            blastAtk: 259546,
            blastDef: 173546,
            pierceResist: 100,
            sliceResist: 100,
            impactResist: 100,
            explodeResist: 100,
            criticalRate: '13.30%',
            kiRecover: '24.91%',
            vanishRecover: '20.00%',
            changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0554_VegitoSSGSS_554.webp', 
        largeImage: 'images/characters/vegitoblue.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_vegettoblue.mp3'
    },
    { 
        id: 2, 
        name: 'Super Saiyan God SS Gogeta', 
        type: 'ultra',  
        affinity: 'purple',  
        affinityImage: 'images/affinitys/purple.png',  
        rarezaImage: 'https://i.ibb.co/WpkhLJN4/Gas-txt-Rarity-ULTRA.png',  
        baseStats: {    
            hp: 26273,
            strikeAtk: 2730,
            strikeDef: 1682,
            blastAtk: 2463,
            blastDef: 1632,
            pierceResist: 101,
            sliceResist: 99,
            impactResist: 97,
            explodeResist: 103,
            criticalRate: '15.01%',
            kiRecover: '25.58%',
            vanishRecover: '20.00%',
            changeCd: '10s'
        },
        maxStats: {
            hp: 2653053,
            strikeAtk: 275702,
            strikeDef: 169811,
            blastAtk: 248759,
            blastDef: 164837,
            pierceResist: 101,
            sliceResist: 99,
            impactResist: 97,
            explodeResist: 103,
            criticalRate: '15.01%',
            kiRecover: '25.58%',
            vanishRecover: '20.00%',
            changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0508_GogetaSSGSS_508.webp', 
        largeImage: 'images/characters/gogetablue.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_gogetablue.mp3'
    },
    { 
        id: 3, 
        name: 'Turles', 
        type: 'ultra',  
        affinity: 'blue',  
        affinityImage: 'images/affinitys/blue.png',  
        rarezaImage: 'https://i.ibb.co/WpkhLJN4/Gas-txt-Rarity-ULTRA.png', 
        baseStats: {    
            hp: 25304,
            strikeAtk: 2503,
            strikeDef: 1771,
            blastAtk: 2528,
            blastDef: 1780,
            pierceResist: 100,
            sliceResist: 100,
            impactResist: 100,
            explodeResist: 100,
            criticalRate: '14.79%',
            kiRecover: '25.37%',
            vanishRecover: '20.00%',
            changeCd: '10s'
        },
        maxStats: {
            hp: 2633228,
            strikeAtk: 275079,
            strikeDef: 170132,
            blastAtk: 259546,
            blastDef: 173546,
            pierceResist: 100,
            sliceResist: 100,
            impactResist: 100,
            explodeResist: 100,
            criticalRate: '13.30%',
            kiRecover: '24.91%',
            vanishRecover: '20.00%',
            changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0636_Turles_636.webp', 
        largeImage: 'images/characters/turles.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_turles.mp3'
    },
    { 
        id: 4, 
        name: 'Super Saiyan 3 Goku', 
        type: 'legends limited',  
        affinity: 'green',  
        affinityImage: 'images/affinitys/green.png',  
        rarezaImage: 'images/raritys/legendslimited.png',  
        baseStats: {    
            hp: 24800,
    strikeAtk: 2663,
    strikeDef: 1739,
    blastAtk: 2527,
    blastDef: 1705,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.31%',
    kiRecover: '22.13%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2504349,
    strikeAtk: 268942,
    strikeDef: 175641,
    blastAtk: 255203,
    blastDef: 172184,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.31%',
    kiRecover: '22.13%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0652_GokuSS3_652.webp', 
        largeImage: 'images/characters/gokussj2.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/diehard.mp3',
    },
    { 
        id: 5, 
        name: 'Super Saiyan 4 Goku', 
        type: 'legends limited',  
        affinity: 'blue',  
        affinityImage: 'images/affinitys/blue.png',  
        rarezaImage: 'images/raritys/legendslimited.png',  
        baseStats: {    
            hp: 24411,
    strikeAtk: 2662,
    strikeDef: 1681,
    blastAtk: 2393,
    blastDef: 1648,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '15.12%',
    kiRecover: '25.10%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2464978,
    strikeAtk: 268841,
    strikeDef: 169714,
    blastAtk: 241621,
    blastDef: 166372,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '15.12%',
    kiRecover: '25.10%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0670_Gkf_670.webp', 
        largeImage: 'images/characters/gokussj4.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_gokussj4.mp3',
    },
    { 
        id: 6, 
        name: 'Super Vegito', 
        type: 'legends limited',  
        affinity: 'blue',  
        affinityImage: 'images/affinitys/blue.png',  
        rarezaImage: 'images/raritys/legendslimited.png',  
        baseStats: {    
            hp: 24051,
    strikeAtk: 2542,
    strikeDef: 1724,
    blastAtk: 2529,
    blastDef: 1707,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.77%',
    kiRecover: '24.39%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2428680,
    strikeAtk: 256684,
    strikeDef: 174101,
    blastAtk: 255392,
    blastDef: 172377,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.77%',
    kiRecover: '24.39%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0609_VegitoSV_609.webp', 
        largeImage: 'images/characters/goku&vegeta-supervegito.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_supervegito.mp3',
    },
    { 
        id: 7, 
        name: 'Fusion Zamasu', 
        type: 'sparking',  
        affinity: 'green',  
        affinityImage: 'images/affinitys/green.png',  
        rarezaImage: 'images/raritys/sparking.png',  
        baseStats: {    
            hp: 24250,
    strikeAtk: 2607,
    strikeDef: 1619,
    blastAtk: 2380,
    blastDef: 1603,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.33%',
    kiRecover: '22.49%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2448742,
    strikeAtk: 263297,
    strikeDef: 163466,
    blastAtk: 2403309,
    blastDef: 161862,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.33%',
    kiRecover: '24.40%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://es.dblegends.net/assets/card_icons/BChaIco_0516_ZamasM_516.webp', 
        largeImage: 'images/characters/fusionzamasu.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_fusionzamasu.mp3',
    },
    { 
        id: 8, 
        name: 'Pan', 
        type: 'sparking',  
        affinity: 'red',  
        affinityImage: 'images/affinitys/red.png',  
        rarezaImage: 'images/raritys/sparking.png',  
        baseStats: {    
            hp: 23359,
    strikeAtk: 2407,
    strikeDef: 1666,
    blastAtk: 2358,
    blastDef: 1683,
    pierceResist: 102,
    sliceResist: 99,
    impactResist: 101,
    explodeResist: 98,
    criticalRate: '14.23%',
    kiRecover: '24.45%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2358758,
    strikeAtk: 242900,
    strikeDef: 168245,
    blastAtk: 238110,
    blastDef: 169920,
    pierceResist: 102,
    sliceResist: 99,
    impactResist: 101,
    explodeResist: 98,
    criticalRate: '14.23%',
    kiRecover: '24.45%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://es.dblegends.net/assets/card_icons/BChaIco_0500_PanSH_500.webp', 
        largeImage: 'images/characters/pan.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_pan.mp3',
    },
    { 
        id: 9, 
        name: 'Goku Black', 
        type: 'sparking',  
        affinity: 'blue',  
        affinityImage: 'images/affinitys/blue.png',  
        rarezaImage: 'images/raritys/sparking.png',  
        baseStats: {    
            hp: 23711,
    strikeAtk: 2335,
    strikeDef: 1521,
    blastAtk: 2429,
    blastDef: 1567,
    pierceResist: 101,
    sliceResist: 97,
    impactResist: 104,
    explodeResist: 98,
    criticalRate: '14.88%',
    kiRecover: '26.60%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2394353,
    strikeAtk: 235746,
    strikeDef: 153637,
    blastAtk: 245313,
    blastDef: 158274,
    pierceResist: 101,
    sliceResist: 97,
    impactResist: 104,
    explodeResist: 98,
    criticalRate: '14.88%',
    kiRecover: '26.60%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://es.dblegends.net/assets/card_icons/BChaIco_0499_GokuBlack_499.webp', 
        largeImage: 'images/characters/gokublack.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_gokublack.mp3',
    },
    { 
        id: 10, 
        name: 'Super Saiyan Gohan (Teen)', 
        type: 'extreme',  
        affinity: 'blue',  
        affinityImage: 'images/affinitys/blue.png',  
        rarezaImage: 'images/raritys/extreme.png',  
        baseStats: {    
    hp: 24292,
    strikeAtk: 2503,
    strikeDef: 1708,
    blastAtk: 2263,
    blastDef: 1666,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.77%',
    kiRecover: '23.12%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2452980,
    strikeAtk: 252783,
    strikeDef: 172476,
    blastAtk: 228562,
    blastDef: 168241,
    pierceResist: 100,
    sliceResist: 100,
    impactResist: 100,
    explodeResist: 100,
    criticalRate: '13.77%',
    kiRecover: '23.12%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0628_GohanSS1_628.webp', 
        largeImage: 'images/characters/gohansupersaiyan.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_gohansupersaiyan.mp3',
    },
    { 
        id: 11, 
        name: 'Super Saiyan God SS Goku', 
        type: 'extreme',  
        affinity: 'green',  
        affinityImage: 'images/affinitys/green.png',  
        rarezaImage: 'images/raritys/extreme.png',  
        baseStats: {    
     hp: 24739,
    strikeAtk: 2333,
    strikeDef: 1656,
    blastAtk: 2356,
    blastDef: 1697,
    pierceResist: 104,
    sliceResist: 97,
    impactResist: 101,
    explodeResist: 98,
    criticalRate: '13.84%',
    kiRecover: '24.43%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2498183,
    strikeAtk: 235544,
    strikeDef: 167202,
    blastAtk: 237908,
    blastDef: 171393,
    pierceResist: 104,
    sliceResist: 97,
    impactResist: 101,
    explodeResist: 98,
    criticalRate: '13.84%',
    kiRecover: '24.43%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0517_GokuSSGSS_517.webp', 
        largeImage: 'images/characters/gokussgodss.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_gokussgodss.mp3',
    },
    { 
        id: 12, 
        name: 'Super Saiyan God SS Vegeta', 
        type: 'extreme',  
        affinity: 'red',  
        affinityImage: 'images/affinitys/red.png',  
        rarezaImage: 'images/raritys/extreme.png',  
        baseStats: {    
      hp: 24739,
    strikeAtk: 2356,
    strikeDef: 1571,
    blastAtk: 2537,
    blastDef: 1635,
    pierceResist: 99,
    sliceResist: 98,
    impactResist: 101,
    explodeResist: 102,
    criticalRate: '13.70%',
    kiRecover: '23.30%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 2498183,
    strikeAtk: 237908,
    strikeDef: 158677,
    blastAtk: 256188,
    blastDef: 165095,
    pierceResist: 99,
    sliceResist: 98,
    impactResist: 101,
    explodeResist: 102,
    criticalRate: '13.70%',
    kiRecover: '23.30%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: 'https://dblegends.net/assets/card_icons/BChaIco_0518_VegetaSSGSS_518.webp', 
        largeImage: 'images/characters/vegetassgodss.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_vegetassgodss.mp3',
    },
     { 
        id: 13, 
        name: 'Shallot', 
        type: 'hero',  
        affinity: 'light',  
        affinityImage: 'images/affinitys/light.png',  
        rarezaImage: 'images/raritys/hero.png',  
        baseStats: {    
      hp: 14178,
    strikeAtk: 1557,
    strikeDef: 945,
    blastAtk: 1519,
    blastDef: 926,
    pierceResist: 98,
    sliceResist: 98,
    impactResist: 102,
    explodeResist: 102,
    criticalRate: '9.49%',
    kiRecover: '13.43%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        maxStats: {
            hp: 1431770,
    strikeAtk: 157308,
    strikeDef: 95446,
    blastAtk: 153429,
    blastDef: 93551,
    pierceResist: 98,
    sliceResist: 98,
    impactResist: 102,
    explodeResist: 102,
    criticalRate: '9.49%',
    kiRecover: '13.43%',
    vanishRecover: '20.00%',
    changeCd: '10s'
        },
        smallImage: '    https://dblegends.net/assets/card_icons/BChaIco_9000_Shallot_01.webp', 
        largeImage: 'images/characters/shallot.png',
        sound: 'sounds/system/112_sys_Other_Bgs_Option; sys_Other_LoginBonus; sys_tap_s.ogg',
        voiceLine: 'sounds/characters/voiceline_shallot.mp3',
    },

];



document.body.addEventListener('click', function() {
            var audio = document.getElementById('background-music');
            
            audio.play().catch(function(error) {
                console.log('Error al intentar reproducir la música:', error);
            });

            audio.volume = 0.5;
        });


let currentImageIndex = 0;  

document.getElementById('change-image-button').addEventListener('click', function () {
    if (!currentCharacter) return;

    let images = [];

    if (currentCharacter.id === 4) {
        images = [
            'images/characters/gokussj2.png',
            'images/characters/gokussj3.png'
        ];
    } else if (currentCharacter.id === 6) {
        images = [
            'images/characters/goku&vegeta-supervegito.png',
            'images/characters/supervegito.png'
        ];
    } else {
        return; 
    }

    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('modal-image').src = images[currentImageIndex];
});


let soundPlaying = false;
let voiceLinePlaying = false;
let currentCharacter = null; 

window.onload = function() {
    displayCharacters(characters);
};

function displayCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = ''; 
    characters.forEach(function(character) {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');
        characterElement.innerHTML = `
            <img src="${character.smallImage}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        
        characterElement.onclick = function() {
            playSound(character.sound);
            playVoiceLine(character.voiceLine);
            showCharacterModal(character);
        };
        
        characterList.appendChild(characterElement);
    });
}

function playSound(soundURL) {
    if (soundPlaying) return; 
    soundPlaying = true;

    const sound = new Audio(soundURL);
    sound.play();
    
    sound.onended = function() {
        soundPlaying = false;
    };
}

function playVoiceLine(voiceLineURL) {
    if (voiceLinePlaying) return; 
    voiceLinePlaying = true;

    const voiceLine = new Audio(voiceLineURL);
    voiceLine.play();
    
    voiceLine.onended = function() {
        voiceLinePlaying = false;
    };
}

function showCharacterModal(character) {
    currentCharacter = character;
    document.getElementById('modal-name').textContent = character.name;
    document.getElementById('affinity-image').src = character.affinityImage;
    document.getElementById('rareza-image').src = character.rarezaImage;
    displayBaseStats(character);
    document.getElementById('modal-max-stats').innerHTML = generateStatsText(character.maxStats);
    
    document.getElementById('modal-image').src = character.largeImage;

    const changeImageButton = document.getElementById('change-image-button');
if (changeImageButton) {  
    if (character.id === 4 || character.id === 6) {  
        changeImageButton.style.display = 'inline-block';  
    } else {
        changeImageButton.style.display = 'none';  
    }
}


    if (character.transitionImages) {
        startImageTransition(character.transitionImages); 
    }

    document.getElementById('character-modal').style.display = 'flex';
}

// Mostrar las estadísticas base
function generateStatsText(stats) {
    return `
        <strong>HP:</strong> ${stats.hp} <br>
        <strong>Strike ATK:</strong> ${stats.strikeAtk} <br>
        <strong>Strike DEF:</strong> ${stats.strikeDef} <br>
        <strong>Blast ATK:</strong> ${stats.blastAtk} <br>
        <strong>Blast DEF:</strong> ${stats.blastDef} <br>
        <strong>Pierce Resist:</strong> ${stats.pierceResist} <br>
        <strong>Slice Resist:</strong> ${stats.sliceResist} <br>
        <strong>Impact Resist:</strong> ${stats.impactResist} <br>
        <strong>Explode Resist:</strong> ${stats.explodeResist} <br>
        <strong>Critical Rate:</strong> ${stats.criticalRate} <br>
        <strong>Ki Recover:</strong> ${stats.kiRecover} <br>
        <strong>Vanish Recover:</strong> ${stats.vanishRecover} <br>
        <strong>Change CD:</strong> ${stats.changeCd}
    `;
}

function displayBaseStats(character) {
    const baseStatsText = generateStatsText(character.baseStats);
    document.getElementById('modal-base-stats').innerHTML = baseStatsText;
}

function toggleMaxStats() {
    const baseStatsContainer = document.getElementById('modal-base-stats');
    const maxStatsContainer = document.getElementById('modal-max-stats');
    const button = document.getElementById('show-max-stats-button');

    if (baseStatsContainer.style.display === 'none') {
        baseStatsContainer.style.display = 'block';
        maxStatsContainer.style.display = 'none';
        button.textContent = 'Mostrar Max Stats';
    } else {
        baseStatsContainer.style.display = 'none';
        maxStatsContainer.style.display = 'block';
        button.textContent = 'Ocultar Max Stats';
    }
}


function closeModal() {
    document.getElementById('character-modal').style.display = 'none';
}

const modalImage = document.getElementById('modal-image');
modalImage.addEventListener('click', function() {
    if (currentCharacter) {
        playSound(currentCharacter.sound);
        playVoiceLine(currentCharacter.voiceLine);
    }
});

const modal = document.getElementById('character-modal');
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

function filterCharacters(type) {
    const filtered = type === 'all' 
        ? characters 
        : characters.filter(character => character.type === type);

    displayCharacters(filtered);
}