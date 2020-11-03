# React Boilerplate

## 目录结构

```sh
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── api
│   │   ├── index.js
│   │   └── request.js
│   ├── common
│   │   ├── action.js
│   │   ├── routes.js
│   │   └── state.js
│   ├── components
│   │   ├── Loading
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   └── index.js
│   ├── config
│   │   ├── development.js
│   │   ├── index.js
│   │   └── production.js
│   ├── hooks
│   │   ├── countDown.js
│   │   ├── http.js
│   │   └── index.js
│   ├── images
│   │   └── icon_wechat.png
│   ├── pages
│   │   ├── Home
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   ├── NoMatch
│   │   │   └── index.js
│   │   ├── User
│   │   │   ├── Login.js
│   │   │   ├── Login.module.css
│   │   │   ├── User.js
│   │   │   ├── User.module.css
│   │   │   ├── Users.js
│   │   │   └── Users.module.css
│   │   └── index.js
│   ├── utils
│   │   ├── china-area-data.json
│   │   ├── format.js
│   │   ├── index.js
│   │   ├── sign.js
│   │   ├── storage.js
│   │   └── verification.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── README.md
└── yarn.lock
```

## 假设后端返回数据结构

### 请求成功-普通数据

```json
{
  "code": 0,
  "message": "登录成功",
  "data": {
    "tokenType": "Bearer",
    "accessToken": "******",
    "expiresIn": 3600000
  }
}
```

### 请求成功-列表数据

```json
{
  "code": 0,
  "message": "",
  "data": {
    "page": 1,
    "totalPage": 2,
    "size": 2,
    "totalCount": 3,
    "rows": [
      {
        "id": "28ae1605-73b8-4f9c-b393-d38d2e1addc7",
        "nickname": "rose"
      },
      {
        "id": "a22824b3-c6eb-4757-a93c-6bff97337824",
        "nickname": "jack"
      }
    ]
  }
}
```

### 请求失败

```json
{
  "code": 4001,
  "message": "登录失败，用户名不存在",
  "errors": ["record not found"]
}
```
