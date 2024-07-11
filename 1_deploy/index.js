require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "nitishdeshmukh",
    "id": 113561515,
    "node_id": "U_kgDOBsTPqw",
    "avatar_url": "https://avatars.githubusercontent.com/u/113561515?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nitishdeshmukh",
    "html_url": "https://github.com/nitishdeshmukh",
    "followers_url": "https://api.github.com/users/nitishdeshmukh/followers",
    "following_url": "https://api.github.com/users/nitishdeshmukh/following{/other_user}",
    "gists_url": "https://api.github.com/users/nitishdeshmukh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nitishdeshmukh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nitishdeshmukh/subscriptions",
    "organizations_url": "https://api.github.com/users/nitishdeshmukh/orgs",
    "repos_url": "https://api.github.com/users/nitishdeshmukh/repos",
    "events_url": "https://api.github.com/users/nitishdeshmukh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nitishdeshmukh/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-09-14T22:48:54Z",
    "updated_at": "2024-05-16T08:13:46Z"
  }
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('nitishdeshmukh')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login our website</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> this is youtube</h2>')
})

app.get('/github', ( req, res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})