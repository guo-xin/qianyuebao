var data = {
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "id": 2,
      "title": "json-server",
      "author": "typicode2"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  },
  "coupon-recommend": {
    "respcd": "0000",
    "resperr": "",
    "respmsg": "",
    "data": {
      // 活动的名
      "title": "x",
      // 活动的预算
      "total_amt": "1100",
      // 活动的最小的金额
      "amt_min": "990",
      // 活动的最大的金额
      "amt_max": "1499",
      // 活动的领取门槛
      "obtain_threshold": "1100",
      // 活动的使用门槛
      "use_threshold": "1600",
      // 活动的领取量
      "obtain_num": "233",
      // 活动的使用量
      "use_num": "143",
      // 活动的使用率,单位:万分之n
      "use_per": "5690",
      // 红包的消费总金额
      "coupon_trade_amt": "169810",
      // 人均消费
      "avg_spend": "1500",
      // 店铺的行业
      "industry": "休闲餐饮类",
      // 活动的开始时间，时间戳
      "start_time": "1462424726",
      // 活动的结束时间，时间戳
      "expire_time": "1462434726"
    }
  }
}

module.exports = function () {
  return data;
}

