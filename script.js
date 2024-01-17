// script.js


function generateTable(title, data) {
    document.write("<h2>" + title + "：</h2>");
    document.write("<table border='1' class='row'>");
    document.write("<tr><th>英文</th><th>解释</th></tr>");

    for (var i = 0; i < data.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < data[i].length; j++) {
            var text = data[i][j];
            
            /*
            var isQuoted = text.startsWith('"') && text.endsWith('"');

            // 如果文本被引号包裹，添加 "readable" 类
            var cellClass = isQuoted ? 'readable' : '';
            */
            
            document.write("<td class='readable'>" + text + "</td>");
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

var testElement = document.querySelector('.readable');
testElement.click();  // 确保这会触发朗读

// Sample data for different sections
var airportData = [
    ["Excuse me, where is the baggage claim area?", "打扰一下，行李认领处在哪？"],
    ["I just got off the plane.", "我刚下飞机。"],
    ["Where can I find the tourist information desk?", "我在哪里可以找到旅游咨询台？"]
];


var shoppingData = [
    ["Excuse me, how much is this [商品]?, please?", "请问这个多少钱？"],
    ["May I try this on, please?", "我可以试穿一下吗？"]
];

var mealData = [
    ["Do I need a reservation?", "需要预定吗？"],
    ["I'd like to order [菜名], please.", "我想要点这个。"],
    ["I'm ready to pay now. Could you bring me the bill?", "我准备付钱了，可以给我帐单吗？"]
];

var askdirData = [
    ["Is it within walking distance?", "我们可以走路过去吗？"],
    ["Excuse me, can you tell me how to get to the University of Cambridge?", "请问剑桥大学要怎么去呢"]
];

var OxfordapartmentData = [
    ["How can I get to the Oxford street 2 bed apartment - Hyde Park by bus?", "我怎么坐公交到牛津街海德公园的2床公寓？"]
];

var checkInData = [  
    ["Check-in", "办理登机手续"],  
    ["I would like to check in", "我要办理登机手续"],  
    ["Please show me your ticket and passport", "请出示您的机票和护照"],  
    ["Here you are. I would like a window seat", "给您，我想要靠窗的座位"],  
    ["No problem, please put your luggage on the scale", "没问题，把行李放在磅称上"],  
    ["All done. Here are your ticket, boarding pass, passport, and luggage claim tag. Please board at Gate 8, your boarding time is 9:00 AM", "可以了，这是您的机票、登机牌、护照和行李领取牌，请在8号登记门登机，您的登机时间是早上9:00"],  
    ["What time should I check in?", "我应该什么时候办理登机手续？"],  
    ["Excuse me, where is the check-in counter for China Airlines?", "请问中华航空公司的登机柜台在哪里？"],  
    ["Is this the check-in area for the flight to Guangzhou?", "这里是去广州的航班登记处吗？"],  
    ["Could you please show me your ticket and passport?", "请出示机票和护照好吗？"],  
    ["I would like to check in", "我要办理登机手续"],  
    ["Do I have to pay the airport tax?", "我要付机场税吗？"],  
    ["I would like a window seat", "我要靠窗的座位"],  
    ["I would like an aisle seat", "我要靠走道的座位"],  
    ["Do you have any luggage to check in?", "您有行李需要托运吗？"],  
    ["How many pieces of luggage do you have to check in?", "您有几件行李需要托运？"],  
    ["How many pieces of free luggage am I allowed?", "请问可以携带几件免费行李？"],  
    ["Can I carry this bag with me?", "我可以随身携带这个包吗？"]  
];//已添加


var airportAnnouncements = [  
    ["请通过安检门", "Please pass through the security gate."],  
    ["请把你的包打开，我们要检查一下", "Please open your bag for inspection."],  
    ["我只是要确认你有没有携带液体", "I just need to confirm if you are carrying any liquids."],  
    ["行李再过一次X光机", "Your luggage needs to go through the X-ray machine again."],  
    ["什么时候可以登机？", "When can I board the plane?"],  
    ["你的航班可能误点了", "Your flight might be delayed."],  
    ["各位旅客请注意，飞往伦敦的cz303航班已经开始登机，请头等舱的旅客前往登机门。", "Attention passengers, flight CZ303 to London has begun boarding. First class passengers, please proceed to the boarding gate."],  
    ["请经济舱的旅客前往登机门。", "Economy class passengers, please proceed to the boarding gate."],  
    ["各位旅客请注意，由于天气不佳，所有飞往伦敦的航班都将延后起飞，我们对此深表歉意，并感谢您的配合与耐心，我们将尽快通知您航班新的起飞时间，谢谢。", "Attention passengers, due to inclement weather, all flights to London will be delayed. We deeply apologize for the inconvenience and appreciate your cooperation and patience. We will notify you of the new departure time as soon as possible. Thank you."],  
];  //已添加
  
var airportTerms = [  
    ["登机柜台", "Check-in Counter"],  
    ["查验护照", "Passport Check"],  
    ["安全检查", "Security Check"],  
    ["进入登机门", "Proceed to Boarding Gate"],  
    ["登机", "Boarding"],  
    ["经济舱", "Economy Class"],  
    ["商务舱", "Business Class"],  
    ["头等舱", "First Class"],  
    ["机上电影", "In-flight Movie"],  
    ["洗手间", "Restroom"],  
    ["洗手间有人使用", "Restroom Occupied"],  
    ["洗手间没人使用", "Restroom Vacant"],  
    ["救生衣", "Life Jacket"],  
    ["氧气罩", "Oxygen Mask"],  
    ["气流", "Turbulence"],  
    ["呕吐", "Vomiting"],  
    ["晕机", "Airsickness"],  
    ["耳鸣", "Tinnitus"],  
    ["紧急出口", "Emergency Exit"],  
    ["素食", "Vegetarian"],  
    ["牛肉", "Beef"],  
    ["猪肉", "Pork"],  
    ["鱼肉", "Fish"],  
    ["面包", "Bread"],  
    ["时差", "Jet Lag"],  
    ["国际日期变更线", "International Date Line"],  
    ["高度", "Altitude"],  
    ["地面温度", "Ground Temperature"],  
    ["机长", "Captain"],  
    ["全体机员", "All Crew Members"],  
    ["驾驶舱", "Cockpit"],  
];  //已添加

var Lunchtime = [  
    ["午餐有什么可以选？", "What are the lunch options?"],  
    ["有牛肉饭和鲜鱼面，你要哪一种？", "We have beef rice and fresh fish noodles. Which one would you like?"],  
    ["我要鲜鱼面。", "I'll have the fresh fish noodles."],  
    ["要不要喝点咖啡或茶呢？", "Would you like some coffee or tea?"],  
    ["请给我咖啡。", "I'll have coffee, please."],  
    ["请问需要什么吗？", "Is there anything you need?"],  
    ["我觉得不太舒服，麻烦给我一个呕吐袋。", "I'm not feeling well. Could I have a sickness bag, please?"],  
    ["需要喝点水吗？", "Would you like some water?"],  
    ["我可以跟你换座位吗？", "Could I swap seats with you?"],  
    ["不好意思，你坐我的位置了。", "Excuse me, you're in my seat."],  
    ["可以帮我把行李放上去吗？", "Could you help me put my luggage up there?"],  
    ["可以帮我把行李拿下来吗？", "Could you help me take my luggage down?"],  
    ["上面的置物箱都满了，我的行李要放哪边？", "The overhead bins are full. Where should I put my luggage?"],  
    ["您可以将行李放在前面的座位下面。", "You can put your luggage under the seat in front of you."],  
    ["麻烦教我怎么系安全带好吗？", "Could you show me how to fasten the seat belt, please?"],  
    ["请问安全带要怎么解开？", "How do I unfasten the seat belt?"],  
    ["我要怎么把椅背放下来？", "How do I recline my seat?"],  
    ["请竖直椅背好吗？", "Could you please put your seat back up?"],  
    ["这副耳机是坏的，麻烦给我一副新的。", "These headphones are broken. Could I have a new pair, please?"],  
    ["请问灯怎么开？", "How do I switch on the light?"],  
    ["请再给我一条毯子好吗？", "Could I have another blanket, please?"],  
    ["请再给我一个枕头。", "Could I have another pillow, please?"],  
    ["机上电影什么时候开始播放？", "When does the in-flight movie start?"],  
    ["什么时候可以使用电子产品？", "When can I use electronic devices?"]  
];  //已添加

var Restaurant = [  
    ["请问洗手间在哪里？", "Where is the restroom, please?"],  
    ["我觉得不舒服。", "I'm not feeling well."],  
    ["我想吐。", "I feel like vomiting."],  
    ["你们有晕机药吗？", "Do you have any medication for airsickness?"],  
    ["你们有头痛药吗？", "Do you have any medication for headaches?"],  
    ["请问晚餐几点开始供应？", "What time does dinner start being served?"],  
    ["请问你要吃牛肉还是猪肉？", "Would you like beef or pork?"],  
    ["还要再来一点面包吗？", "Would you like some more bread?"],  
    ["可以再给我一些面包吗？", "Can I have some more bread, please?"],  
    ["想喝点什么饮料吗？", "Would you like a drink?"],  
    ["我要橙汁。", "I'll have orange juice."],  
    ["想喝点酒吗？", "Would you like an alcoholic drink?"],  
    ["还要再来一点咖啡吗？", "Would you like some more coffee?"],  
    ["可以给我一杯加柠檬片的汽水吗？", "Can I have a soda with a lemon slice, please?"],  
    ["请问您吃完了吗？", "Have you finished eating?"],  
    ["我吃完了。", "I've finished."], 
    ["我可以刷信用卡付款吗？", "Can I use my credit card for payment?"],  
    ["请问如何填写这份表格？", "How do I fill out this form?"],  
    ["现在当地时间是几点？", "What is the current local time?"]  
]; //已添加

var Airport = [  
    ["过境停留时间", "Transit time"],  
    ["入镜卡", "Entry card"],  
    ["关税申报表", "Customs declaration form"],  
    ["海关", "Customs"],  
    ["通关", "Customs clearance"],  
    ["居民", "Resident"],  
    ["非居民", "Non-resident"],  
    ["外国人", "Foreigner"],  
    ["行李检查", "Luggage inspection"],  
    ["行李遗失招领处", "Luggage lost and found"],  
    ["关税", "Tariff"],  
    ["免税的", "Duty-free"],  
    ["免税额", "Duty-free allowance"],  
    ["付税", "Paying taxes"],  
    ["私人物品", "Personal belongings"],  
    ["自己要用的", "For personal use"],  
    ["违禁品", "Prohibited items"],  
    ["入镜柜台", "Entry desk"],  
    ["请出示您的护照和入镜登记表", "Please show me your passport and entry registration form"],  
    ["给您。您来的目的是什么？我是来观光的。你打算在这里呆几天？七天，好的，谢谢。", "Here you go. What's the purpose of your visit? I'm here for sightseeing. How many days do you plan to stay here? Seven days, okay, thank you."],  
    ["这个航班上有卖免费商品吗？", "Are there any free items for sale on this flight?"], 
    ["行李检查", "Luggage inspection"],  
    ["请把你的行李拿过来检查。好的，先生。你所有的行李都在这里了吗？是的，一个相机包一个旅行袋和一个行李箱。有什么要申报的吗？没有，我只有一些私人用品。", "Please bring your luggage for inspection. Alright, sir. Are all your luggage here? Yes, a camera bag, a travel bag and a suitcase. Do you have anything to declare? No, I only have some personal belongings."],  
    ["在哪里可以换钱？", "Where can I change money?"],  
    ["请问我可以到哪里换钱？到那边的银行。请问哪一个窗口可以兑换外币，请到8号窗口办理。", "Excuse me, where can I change money? At the bank over there. Excuse me, which window can I exchange foreign currency at? Please go to window 8."],  
    ["换小钞", "Split the money."],
    ["麻烦你帮我换成零钱。我想兑换¥100元，钱在这里。你要怎么换？我要八张¥10元的，其他的换零钱。如果我的英镑用不完该怎么办？", "Could you help me change the money into smaller denominations? I want to exchange ¥100. Here's the money. How do you want me to change it? I want eight ¥10 bills and the rest in smaller denominations. What should I do if I can't use all my British pounds?"]  
];  //已添加

var TaxiData = [  
    ["搭计程车", "Take a taxi"],  
    ["女士要去哪里？请到邦德街，我要赶傍晚6:00的火车。邦德街到了。", "Where to, ma'am? Please take me to Bond Street. I need to catch the 6:00 pm train. We've arrived at Bond Street."],  
    ["先生，请问要去哪里？到这个地方。唐人街呀，没问题。车程大概多久，大概20分钟。饭店到了。", "Sir, where to? Take me to this place. It's Chinatown. No problem. How long will the ride take, about 20 minutes. We've arrived at the restaurant."],  
    ["到机场要多少钱？我们是照表收费的。好吧，请上车麻烦打开后备箱，好吗？现在司机和前排乘客必须记上安全带，请问要去哪里？牛津街2床公寓。可以送我们去大英博物馆吗？请送我去这个地址请到这个地方。", "How much does it cost to the airport? We charge by the meter. Alright, please get in the car. Could you open the trunk, please? Now, both the driver and front passengers must wear seat belts. Where to? The 2-bed apartment on Oxford Street. Can you take us to the British Museum? Please take me to this address. Please go to this place."],
    ["请问你能带我去吗[目的地]","Can you take me to [目的地], please?"],
    ["请问你能让我在下车吗[目的地]","Could you drop me off at [目的地], please?"]
]; //已添加

var Waytohotel = [  
    ["到机场要多少钱？我们是照表收费的。好吧，请上车麻烦打开后备箱，好吗？", "How much does it cost to the airport? We charge by the meter. Alright, please get in the car. Could you open the trunk, please? "],  
    ["现在司机和前排乘客必须记上安全带，请问要去哪里？牛津街2床公寓。可以送我们去大英博物馆吗？请送我去这个地址请到这个地方。","Now, both the driver and front passengers must wear seat belts. Where to? The 2-bed apartment on Oxford Street. Can you take us to the British Museum? Please take me to this address. Please go to this place."],
    ["我必须在9:00前赶到机场可以赶到吗？不要开太快哦，我们遇到堵车了，酒店到了请在这里停车在这里让我下车，我自己走路去公园。", "Can we make it to the airport before 9:00? Please don't drive too fast, we're stuck in traffic. Please stop the car here. I'll walk to the park."],
    ["我要在下个十字路口下车，麻烦停在大本钟前面对不起，我不能在伦敦桥停车，伦敦桥不准停车。我该付你多少钱？","I need to get off at the next intersection. Could you please pull over in front of Big Ben? Sorry, but I can't park at London Bridge, it's not allowed. How much do I owe you?"],
];  //已添加

var TrainStation = [  
    ["在英国坐火车", "Taking the train in the UK"],  
    ["赶火车", "Catching the train"],  
    ["售票处", "Ticket office"],  
    ["票价", "Ticket price"],  
    ["单程票", "Single ticket"],  
    ["往返票", "Return ticket"],  
    ["卧铺车", "Sleeper train"],  
    ["换车", "Changing trains"],  
    ["直达车", "Direct train"],  
    ["慢车", "Slow train"],  
    ["退票", "Refunding a ticket"],  
    ["普通车厢", "Standard class"],  
    ["短程旅行", "Short trip"],  
    ["早安，请告诉我去科茨沃尔德的火车发车时间。", "Good morning, could you tell me what time the trains to Cotswolds depart?"],  
    ["好的7:59 9:18和10:32各有一趟", "Sure, there are trains at 7:59, 9:18, and 10:32."],  
    ["7:59的火车几点到科茨沃尔德？", "What time does the 7:59 train arrive in Cotswolds?"],  
    ["9:36分。", "At 9:36."],  
    ["回程的时间呢，我想在晚上7:00左右回来。", "What about the return times? I want to come back around 7:00 pm."],  
    ["晚上7:10有一趟，在下一班是7:40分。", "There's a train at 7:10 pm, and the next one is at 7:40 pm."],  
    ["往返票多少钱？", "How much is a return ticket?"],  
    ["如果您在下午4:00之前或6:00之后上车，有票价为九英镑的优惠往返票，普通往返票要16英镑。", "If you board before 4:00 pm or after 6:00 pm, there's a discounted return ticket for £9. The standard return ticket is £16."],  
    ["请给我普通往返票。", "I'll take the standard return ticket, please."]  
];  //已添加

var TrainSchedule = [  
    ["请问离这里最近的火车站在哪里？", "Excuse me, where is the nearest train station?"],  
    ["请问离这里最近的地铁站在哪里？", "Excuse me, where is the nearest subway station?"],  
    ["我可以定位吗？", "Can I get directions?"],  
    ["那趟车不必订位，因为从来就做不满。", "That train doesn't require reservations because it never fills up."],  
    ["去剑桥大学该搭哪一趟车？", "Which train should I take to Cambridge University?"],  
    ["去伦敦可以坐这趟车吗？", "Can I take this train to London?"],  
    ["请问到唐人街要搭哪一条线？", "Which line should I take to get to Chinatown?"],  
    ["先搭蓝线第七街再转红线。", "Take the blue line to 7th Street and transfer to the red line."],  
    ["这趟车会停西敏寺吗？", "Does this train stop at Westminster?"],  
    ["火车何时进站？", "When does the train arrive?"],  
    ["下一趟到牛津的车几点开？", "What time does the next train to Oxford leave?"],  
    ["下一趟车6:30从20号站台开出。", "The next train departs from platform 20 at 6:30."],  
    ["火车什么时候到伦敦？几点会到那里？", "When does the train arrive in London? What time will it get there?"],  
    ["按照列车时刻表是11:50到，中午会到。我可以看一下时刻表吗？", "According to the train schedule, it's scheduled to arrive at 11:50. It should be there by noon. Can I see the schedule?"],  
    ["对不起，我想请问一下去剑桥的火车时刻。", "Excuse me, I was wondering about the train schedule to Cambridge."]  
]; //已添加
  
// 示例：如何使用这些数据  
function displayConversationPairs() {  
    conversations.forEach(function(pair) {  
        console.log("中文: " + pair[0] + " — 英文: " + pair[1]);  
    });  
}  
  
displayConversationPairs();

var xData = [
    ["", ""],
    ["", ""]
];

// Call the function with different data for each section
generateTable("在机场", airportData);
generateTable("机场过关",airportAnnouncement);
generateTable("登机篇",checkInData);
generateTable("机场词汇",airportTerms);
generateTable("机场第二篇",Airport);
generateTable("去牛津街海德公园住处", OxfordapartmentData);
generateTable("去酒店路上",Waytohotel);
generateTable("打车",TaxiData);
generateTable("打车与交通", taxiData);
generateTable("购物", shoppingData);
generateTable("吃饭", mealData);
generateTable("午餐",Lunchtime);
generateTable("餐馆对话",Restaurant);
generateTable("问路", askdirData);
generateTable("火车行程表",TrainSchedule);
generateTable("火车站询问",TrainStation);




