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

    // Call the function with different data for each section
    generateTable("在机场", airportData);
    generateTable("打车与交通", taxiData);
    generateTable("购物", shoppingData);
