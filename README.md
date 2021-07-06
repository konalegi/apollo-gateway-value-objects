# Setup

Install node dependencies
`yarn install`

Install foreman
`gem install foreman`

Run everything
`foreman start`


# Testing
```
curl --request POST \
  --url http://localhost:4001/ \
  --header 'Content-Type: application/json' \
  --data '{"query":"query {\n  me {\n    photo {\n      image\n    }\n  }\n  photo {\n    image\n  }\n}"}'
```
