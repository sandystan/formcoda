var totalSelection = []
var count = 0
window.addEventListener('load', (event) => {
    var games = document.getElementById("games")
    console.log('page is fully loaded');
    var options = ["AOV", "Asphalt 9: Legends", "Astral Guardians:Cyber Fantasy", "Azur Lane", "Badlanders", "BarBarQ", "Basketrio", "Be The King: Judge Destiny", "BELI KODE VOUCHER", "Bigo Live", "Black Desert SEA", "BLEACH Mobile 3D", "Blizzard Balance", "Blockman Go: Blocky Mods", "Call of Duty Mobile", "Candy Crush Saga", "Chaos Crisis", "Chess Rush", "CocoFun", "Contra: Returns", "Cooking Adventure", "Cooking Battle", "Crasher:Origin", "Crisis Action", "Daybreak Legends", "Devil Hunter", "Disorder", "Domino Gaple Qiuqiu Boyaa (Capsa susun)", "Domino Qiu Qiu", "Domino Qiu Qiu", "Domino QiuQiu: Domino 99", "Dragon Brawlers", "Dragon Raja", "Eclipse Isle", "Era of Celestials", "FIFA Points Voucher", "Food Fantasy", "Free Fire", "Game of Sultans", "Garena Shells", "Gemscool", "Genshin Impact", "Goddess MUA", "GoPlay", "HAGO", "Heroes Evolved", "Higgs Domino", "Honkai Impact 3", "Identity V", "Idle Legends", "Idol Party", "Indoplay", "Kode Voucher Google Play", "Kris Destiny: Immortal Sword", "Laplace M", "Last Empire War Z", "League of Legends: Wild Rift", "League of Three Kingdoms", "Legacy of Discord", "Legends of Runeterra", "LifeAfter", "Light of Thel: Glory of Cepheus", "Likee", "LivU", "Lords Mobile", "Love Nikki", "Lumia Saga", "Luxy: Domino and Poker", "Mahjong Soul", "Mango Live", "MARVEL Duel", "MARVEL Super War", "Megaxus", "Minecraft", "Mobile Legends", "Mobile Legends: Adventure", "Modern Combat 5: Blackout", "MoeGirl Go!", "Mr Love: Dream Date", "MU Origin 2", "Need for Speed No Limits", "Nimo TV", "Nintendo eShop (US)", "OK Cupid", "Omega Legends", "Omlet Arcade", "One Punch Man", "Onmyoji Arena", "PlayStation PSN Card", "Point Blank", "Poker Texas Boyaa", "PUBG Mobile", "PUBG Mobile Lite", "PUBG Mobile UC Vouchers", "Ragnarok M", "Ride Out Heroes", "Rise of Empires: Ice and Fire", "Rules of Survival", "Saint Seiya", "Samurai Era: Rise of Empires", "Scroll of Onmyoji: Sakura & Sword", "Speed Drifters", "Spirit Land", "Spotify Premium Voucher", "StarMaker", "Steam Wallet Code", "Super Mecha Champions", "Tinder Direct Top-up", "Tinder Voucher Code", "Tom and Jerry: Chase", "Tumile", "Turbo VPN", "VALORANT", "VIDIO", "Viu", "War of Rings", "WeTV", "World War Heroes", "Xbox Gift Card (US)", "Yong Heroes", "Zepeto"];
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        games.appendChild(el);
    }
});
function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = '';
    var countrys = {
        "Indonesia": ["Alfamart", "Ayopop", "Bank Transfers Indonesia (Doku)", "Bank Transfers Indonesia (Artajasa)",
            "Bukalapak", "Card Payment Indonesia", "DANA", "DOKU Wallet", "GoPay", "Indomaret", "Indosat", " Itemku", "Kredivo"
            , "LinkAja", "OVO", "Shopee-Pay", "Smartfren", "Telkomsel", "Tokopedia", "Tri Indonesia", "True Money Agent Network", "XL"]
    }
    for (var country in countrys[s1.value]) {
        // var pair = countrys[s1.value][country].split("|");
        var newOption = document.createElement("option");
        newOption.value = countrys[s1.value][country];
        newOption.innerHTML = countrys[s1.value][country];
        s2.options.add(newOption);
    }
}
function submit() {
    var can = {
        "country": document.getElementById("category").value,
        "payment-type": document.getElementById("country").value,
        "games": document.getElementById("games").value
    }
    if (can.country === "null" || can["payment-type"] === "null" || can.games === "null") {
        console.log("Empty values are present in dropdown")
    }
    else {
        console.log(can, "this is the variable")
        // console.log("Total Selection Array", totalSelection)
        document.getElementById("submit-button").disabled = true;
        document.getElementById("category").disabled = true;
        document.getElementById("country").disabled = true;
        document.getElementById("games").disabled = true;
        // console.log("sender ID", sender)
        window.parent.postMessage(
            JSON.stringify({
                event_code: "ym-client-event",
                data: JSON.stringify({
                    event: {
                        code: "data",
                        data: {
                            res: can,
                        },
                    },
                }),
            }),
            "*"
        );
        self.location = 'https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=codapayment1601020012.zendesk.com&settings=JTdCJTIyd2ViV2lkZ2V0JTIyJTNBJTdCJTIyY2hhdCUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBbnVsbCUyQyUyMm1lbnVPcHRpb25zJTIyJTNBJTdCJTIyZW1haWxUcmFuc2NyaXB0JTIyJTNBdHJ1ZSU3RCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTdCJTdEJTJDJTIycHJlY2hhdEZvcm0lMjIlM0ElN0IlMjJkZXBhcnRtZW50TGFiZWwlMjIlM0FudWxsJTJDJTIyZ3JlZXRpbmclMjIlM0FudWxsJTdEJTJDJTIyb2ZmbGluZUZvcm0lMjIlM0ElN0IlMjJncmVldGluZyUyMiUzQW51bGwlN0QlMkMlMjJjb25jaWVyZ2UlMjIlM0ElN0IlMjJhdmF0YXJQYXRoJTIyJTNBbnVsbCUyQyUyMm5hbWUlMjIlM0FudWxsJTJDJTIydGl0bGUlMjIlM0FudWxsJTdEJTdEJTJDJTIyY29sb3IlMjIlM0ElN0IlMjJhcnRpY2xlTGlua3MlMjIlM0ElMjIlMjIlMkMlMjJidXR0b24lMjIlM0ElMjIlMjIlMkMlMjJoZWFkZXIlMjIlM0ElMjIlMjIlMkMlMjJsYXVuY2hlciUyMiUzQSUyMiUyMiUyQyUyMmxhdW5jaGVyVGV4dCUyMiUzQSUyMiUyMiUyQyUyMnJlc3VsdExpc3RzJTIyJTNBJTIyJTIyJTJDJTIydGhlbWUlMjIlM0FudWxsJTdEJTdEJTdE&&locale=en-US&title=Web%20Widget%20Live%20Chat';

    }
    // window.location.replace("https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=codapayment1601020012.zendesk.com&settings=JTdCJTIyd2ViV2lkZ2V0JTIyJTNBJTdCJTIyY2hhdCUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBbnVsbCUyQyUyMm1lbnVPcHRpb25zJTIyJTNBJTdCJTIyZW1haWxUcmFuc2NyaXB0JTIyJTNBdHJ1ZSU3RCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTdCJTdEJTJDJTIycHJlY2hhdEZvcm0lMjIlM0ElN0IlMjJkZXBhcnRtZW50TGFiZWwlMjIlM0FudWxsJTJDJTIyZ3JlZXRpbmclMjIlM0FudWxsJTdEJTJDJTIyb2ZmbGluZUZvcm0lMjIlM0ElN0IlMjJncmVldGluZyUyMiUzQW51bGwlN0QlMkMlMjJjb25jaWVyZ2UlMjIlM0ElN0IlMjJhdmF0YXJQYXRoJTIyJTNBbnVsbCUyQyUyMm5hbWUlMjIlM0FudWxsJTJDJTIydGl0bGUlMjIlM0FudWxsJTdEJTdEJTJDJTIyY29sb3IlMjIlM0ElN0IlMjJhcnRpY2xlTGlua3MlMjIlM0ElMjIlMjIlMkMlMjJidXR0b24lMjIlM0ElMjIlMjIlMkMlMjJoZWFkZXIlMjIlM0ElMjIlMjIlMkMlMjJsYXVuY2hlciUyMiUzQSUyMiUyMiUyQyUyMmxhdW5jaGVyVGV4dCUyMiUzQSUyMiUyMiUyQyUyMnJlc3VsdExpc3RzJTIyJTNBJTIyJTIyJTJDJTIydGhlbWUlMjIlM0FudWxsJTdEJTdEJTdE&&locale=en-US&title=Web%20Widget%20Live%20Chat");
    }
