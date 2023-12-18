// script.js

// Function to generate a table based on the provided data
    function generateTable(title, data) {
        document.write("<h2>" + title + "：</h2>");
        document.write("<table border='1' class='row'>");
        document.write("<tr><th>英文</th><th>解释</th></tr>");

        for (var i = 0; i < data.length; i++) {
            document.write("<tr>");
            for (var j = 0; j < data[i].length; j++) {
                document.write("<td>" + data[i][j] + "</td>");
            }
            document.write("</tr>");
        }

        document.write("</table>");
    }

    // Sample data for different sections
    var airportData = [
        ["Excuse me, where is the baggage claim area?", "打扰一下，行李认领处在哪？"],
        ["I just got off the plane.", "我刚下飞机。"],
        ["Where can I find the tourist information desk?", "我在哪里可以找到旅游咨询台？"]
    ];

    var taxiData = [
        ["Can you take me to [目的地], please?", "请问你能带我去吗[目的地]"],
        ["Could you drop me off at [目的地], please?", "请问你能让我在下车吗[目的地]"]
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
        ["Excuse me, can you tell me how to get to [地点]?", "请问这里要怎么去呢"]
    ];

    var xData = [
        ["", ""],
        ["", ""]
    ];

    // Call the function with different data for each section
    generateTable("在机场", airportData);
    generateTable("打车与交通", taxiData);
    generateTable("购物", shoppingData);
    generateTable("吃饭", mealData);
    generateTable("问路", askdirData);

/*

        
        <h2>问路：</h2>
        <ul>
            <li>""</li>
            <li>"Is it within walking distance?"</li>
            <li>"Which direction is [地标]?"</li>
        </ul>
        
        <h2>使用Uber或打车应用：</h2>
        <ul>
            <li>"I would like to book a ride to [目的地], please."</li>
            <li>"How long will it take to get there?"</li>
            <li>"Could you please drop me off at [位置]?"</li>
        </ul>
        
        <h2>在旅馆/酒店：</h2>
        <ul>
            <li>办理入住手续： "I have a reservation under [你的名字]."</li>
            <li>房间设施： "Is breakfast included?"</li>
            <li>询问服务： "Could you please send someone to clean the room?"</li>
            <li>结账离店： "What time is check-out?"</li>
        </ul>
        
        <h2>紧急情况：</h2>
        <ul>
            <li>"I need help. Can you please call the police/ambulance?"</li>
            <li>"Is there a hospital near here?"</li>
            <li>"I've lost my [物品]. Can you help me find it?"</li>
        </ul>
*/
