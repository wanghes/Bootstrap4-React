const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// 设置请求的延时时间
Mock.setup({timeout:'0-10'});
// mock一组数据
const produceNewsData = () => {
    let articles = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }

    return {
        articles
    }
}

// mock一组数据
const cards = () => {
    let cards = [];
    for (let i = 0; i < 5; i++) {
        let card = {
            title: Random.csentence(30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('286x180', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        cards.push(card)
    }

    return {
        cards
    }
}

Mock.mock('/api/posts', 'post', produceNewsData);
Mock.mock('/api/cards', 'post', cards);

