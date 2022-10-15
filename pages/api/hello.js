// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const tweets=[
  {
    username:"maiki",
    avatar:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    message:"God no? God no? God no? God no? God no? God no? God no? God no? God no? God no? God no? God no? God no? "
  },
  {
    username:"jorge",
    avatar:"https://thumbs.dreamstime.com/b/average-joe-smiling-13413414.jpg",
    message:"que vuelvan los milicos"
  },
  {
    username:"pedro",
    avatar:"",
    message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    username:"RRRRRRRRRR",
    avatar:"https://thumbs.dreamstime.com/b/average-joe-smiling-13413414.jpg",
    message:"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
  },
]

export default function handler(req, res) {
  res.status(200).json(tweets)
}
