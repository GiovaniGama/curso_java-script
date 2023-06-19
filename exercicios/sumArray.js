const arrayNumbers = [[1,2,3], [3,2,1]]

var maximumWealth = function(accounts) {
    var res = 0;
    for(var i = 0; i < accounts.length; i++){
        var temp = 0;
        for(var j = 0; j < accounts[i].length; j++){
            temp += accounts[i][j]
            console.log(temp)
        }
        res = Math.max(res,temp)
    }
    return res
};

console.log(maximumWealth(arrayNumbers))