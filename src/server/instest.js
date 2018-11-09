var test = require('./test.js');

function aaa() {
    var test_a = new test({
        A: '123',
        B: '456',
        C: '789'
    });

    test_a.save(function(err, res) {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Success Res: " + res)
        }
    });
};

function update() {
    //来确定要操作的数据
    var str = { 'A': '123' };
    //更新的数据
    var upstr = { 'B': 'dfg' };
    test.update(str, upstr, function(err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log('Update Res: ' + res)
        }
    })

};

function del() {
    var str = { 'B': 'dfg' };
    test.remove(str, function(err, res) {
        if (err) {
            console.log('Error:' + err);
        } else {
            console.log('Update Res: ' + res);
        }

    })
};

function fin() {
    var str = { 'A': '888' };
    test.find(str, function(err, res) {
        if (err) {
            console.log('Error:' + err);
        } else {
            console.log('Update Res: ' + res);
        }
    })
}

// ---------------------------------
//插入数据
function site() {
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    test.insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        // db.close();
    });
}
//查找所有数据
function findA(data) {
    test.find(function(err, res) {
        data = res;
        return data;
        console.log('res');
    });
    // test.find({}).toArray(function (err, res) {
    //     if (err) throw err;
    //     console.log("文档查找成功");
    //     console.log(res);

    // });
}


// aaa();
// update();
// del();
// fin();
// site();
// findAll();
module.exports = findA;