# Headless CMS for the Hering App

done with strapi: https://strapi.io/

## Available Scripts

to start it locally:

`yarn develop`

## Endpoints

### single

- calendar-page
- start-page
- impressum-page

### multi

**Sections**
=> auto generate slugs
  
- title: string
- content: markdown
- slug: string
- sorting: number
- icon: image
- menu_name: string

relations:
- chapters: relation to Chapter

**Chapters**

  => auto generate slugs
  
- title: string
- content: markdown
- responsible: Rolle[] (one of: AL, LL, C)
- slug: string
- sorting: number
- icon: image
- menu_name: string

relations:
- section
- tasks
- link

**Tasks**:
- title: string
- days: number (amount of days from the camp -/+) (-1000 means the beginning of the year)
- responsible: Rolle[] (one of: AL, LL, C)
- targets: string[] (the person/institution that receives the task)
- slug: string

relations:
- chapters: relation to Chapter

**Links**
- title: string
- link: url
- key: string

relations:
- chapters: relation to Chapter

## heroku

available on heroku: https://hering-api.herokuapp.com/admin/

deploy to heroku:

`git push heroku main`

db backup

```
heroku pg:backups:capture -a hering-api
heroku pg:backups:download -a hering-api
```