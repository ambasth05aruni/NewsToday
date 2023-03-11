import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Nectar Gan",
          "title": "Xi Jinping secures unprecedented third term as China's president in ceremonial vote - CNN",
          "description": "Xi Jinping's unprecedented third term as China's president was officially endorsed by the country's political elite on Friday, solidifying his control and making him the longest-serving head of state of Communist China since its founding in 1949.",
          "url": "https://www.cnn.com/2023/03/09/china/china-xi-jinping-president-third-term-intl-hnk/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230309201138-xi-jingping-file-102322.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-03-10T04:09:00Z",
          "content": "Xi Jinpings unprecedented third term as Chinas president was officially endorsed by the countrys political elite on Friday, solidifying his control and making him the longest-serving head of state of… [+4086 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Eonline.com"
          },
          "author": "Corinne Heller",
          "title": "Vanderpump Rules' Raquel Leviss Sends Legal Letters to Cast Over \"Intimate\" Tom Sandoval FaceTime - E! NEWS",
          "description": "Amid the Tom Sandoval cheating scandal, Raquel Leviss had her lawyer send legal letters to him, Ariana Madix and other Vanderpump Rules co-stars over an \"intimate\" video.",
          "url": "https://www.eonline.com/news/1367404/vanderpump-rules-raquel-leviss-sends-legal-letters-to-cast-over-intimate-tom-sandoval-facetime",
          "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202329/rs_1200x1200-230309143037-1200-Raquel-Leviss-Tom-Sandoval-Ariana-Madix-3.9.23.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
          "publishedAt": "2023-03-10T02:56:00Z",
          "content": "TheTom Sandoval cheating scandal just got messier: Raquel Leviss is SUR-ving legal letters.\r\nHer lawyer alleges that her Vanderpump Rules co-star recorded an \"intimate\" FaceTime session with her with… [+1035 chars]"
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": null,
          "title": "Shooting at Jehovah's Witness hall in Hamburg, Germany; several killed and wounded, police say - CBS News",
          "description": "A police spokesperson said one of the people who died may have been the shooter.",
          "url": "https://www.cbsnews.com/news/hamburg-germany-shooting-jehovahs-witness-hall-gross-borstel/",
          "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/09/3c853a14-dfa6-453a-8ef7-98f9504b6c44/thumbnail/1200x630/615fcdd17bd4c615f9d71bb881251069/gettyimages-1247957333.jpg",
          "publishedAt": "2023-03-10T02:48:00Z",
          "content": "Shots were fired inside a building used by Jehovah's Witnesses in the northern German city of Hamburg on Thursday evening, and an unspecified number of people were killed or wounded, police said. The… [+2522 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cointelegraph"
          },
          "author": "Jesse Coghlan",
          "title": "US bank woes? Silicon Valley Bank stocks plunge 1 day after Silvergate downfall - Cointelegraph",
          "description": "The stock price of Silicon Valley Bank has hit major turbulence, falling 60% in one-day trading just a day after the shuttering of crypto-bank Silvergate Bank.",
          "url": "https://cointelegraph.com/news/us-bank-woes-silicon-valley-bank-stocks-plunge-1-day-after-silvergate-downfall",
          "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-03/ffc95b0d-0edc-4137-b98a-f02c4ff35078.jpg",
          "publishedAt": "2023-03-10T02:41:55Z",
          "content": "Fears have been heightened over the future of another United States bank this week after Silicon Valley Bank (SVB) announced a significant sale of assets and stocks aimed at raising additional capita… [+3665 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Rolling Stone"
          },
          "author": "Nikki McCann Ramirez",
          "title": "George Santos’ Ex-Roommate Says Congressman Ran Credit Card Fraud Scheme - Rolling Stone",
          "description": "A Brazilian man claims Santos spearheaded the scheme he was jailed for, threatened his friends, and stole his bail money, Politico reports.",
          "url": "https://www.rollingstone.com/politics/politics-news/george-santos-roommate-credit-card-fraud-scheme-1234693979/",
          "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/03/George-Santos-Roommate-Credit-Card-Scam.jpg?w=1600&h=900&crop=1",
          "publishedAt": "2023-03-10T01:25:39Z",
          "content": "A Brazilian man who was convicted of credit card fraud and deported from the United States told the FBI that Long Island Congressman George Santos taught him “how to skim card information and how to … [+2474 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NPR"
          },
          "author": "",
          "title": "Biden administration releases Guantánamo prisoner to Saudi Arabia after 20 years - NPR",
          "description": "A Saudi man held at Guantánamo for more than two decades without being put on trial has been released by the U.S., making him the fourth inmate transferred out of Guantánamo in about the past month.",
          "url": "https://www.npr.org/2023/03/09/1162424158/biden-administration-releases-guantanamo-inmate-its-fourth-transfer-in-a-month",
          "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
          "publishedAt": "2023-03-10T01:04:00Z",
          "content": "A Saudi Arabian man held at Guantánamo Bay, Cuba, for more than two decades without being put on trial has been released by the U.S. military, making him the fourth inmate transferred out of Guantána… [+2669 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Big Blue View"
          },
          "author": "Ed Valentine",
          "title": "New York Giants get two compensatory picks, have 11 picks overall - Big Blue View",
          "description": "We now know officially where the Giants will pick in the draft",
          "url": "https://www.bigblueview.com/2023/3/9/23633149/new-york-giants-get-two-compensatory-picks-have-11-picks-overall",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/xa378lWJdWSAfSa6OMsgVfIcJDA=/0x371:5184x3085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24492937/952258192.jpg",
          "publishedAt": "2023-03-10T00:51:43Z",
          "content": "We have expected for a while that the New York Giants would earn a pair of compensatory selections in the 2023 NFL Draft, and that became official on Thursday night. \r\nThe Giants will get a fifth-rou… [+879 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hammer and Rails"
          },
          "author": "GarrettShearman",
          "title": "Purdue Basketball: Rutgers Preview - Hammer and Rails",
          "description": "Following a double bye in the conference tourney, Purdue looks to avenge the season’s first loss against Rutgers in the third round of the Big 10 tournament.",
          "url": "https://www.hammerandrails.com/2023/3/9/23632658/purdue-basketball-rutgers-preview",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/-IVGNy2KeYlg4BX4yeO3-FmhbBw=/0x461:3748x2423/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24491902/1246010739.jpg",
          "publishedAt": "2023-03-10T00:34:08Z",
          "content": "Friday, March 10th, 2023, 12:00 EST\r\nUnited Center, Chicago, Illinois\r\nTV: BTN\r\nRoster\r\nRutgers Starting Lineup\r\n<table><tr><th>Position</th><th>#</th><th>Player</th><th>Class</th><th>Height</th><th>… [+6159 chars]"
        },
        {
          "source": {
            "id": "abc-news",
            "name": "ABC News"
          },
          "author": "Allison Pecorin, Sasha Pezenik",
          "title": "Norfolk Southern CEO faces Senate grilling over toxic train derailment in East Palestine, Ohio - ABC News",
          "description": "Alan Shaw apologized and promised to \"make this right.\"",
          "url": "https://abcnews.go.com/Politics/norfolk-southern-ceo-faces-senate-grilling-toxic-train/story?id=97720843",
          "urlToImage": "https://s.abcnews.com/images/US/alan-shaw-norfolk-train-abc-2-thg-230309_1678376774365_hpMain_16x9_992.jpg",
          "publishedAt": "2023-03-10T00:33:45Z",
          "content": "Norfolk Southern CEO Alan Shaw faced a Senate grilling Thursday as Washington lawmakers held their first hearing on railroad safety about a month after a train carrying toxic chemicals derailed in Ea… [+6507 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "Linda Deutsch",
          "title": "Robert Blake, actor acquitted in wife's killing, dies at 89 - The Associated Press - en Español",
          "description": "LOS ANGELES (AP) — Robert Blake, the Emmy award-winning performer who went from acclaim for his acting to notoriety when he was tried and acquitted in the killing of his wife, died Thursday at age 89.",
          "url": "https://apnews.com/article/robert-blake-dies-ddf7a0c37dae4690ac82bf377e5aec70",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/02fc90edf1164c83bd1e5ecbb8364497/2336.webp",
          "publishedAt": "2023-03-10T00:24:52Z",
          "content": "LOS ANGELES (AP) Robert Blake, the Emmy award-winning performer who went from acclaim for his acting to notoriety when he was tried and acquitted in the killing of his wife, died Thursday at age 89.\r… [+5969 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Jessica Guynn",
          "title": "This is the app that Americans want to delete more than any other, even Facebook - USA TODAY",
          "description": "There were more than 900,000 internet searches in six months on how to delete or deactivate Instagram, even more than Facebook, Snapchat or Twitter.",
          "url": "https://www.usatoday.com/story/tech/2023/03/09/instagram-facebook-apps-delete/11439610002/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/10/USAT/3cfa61fe-536f-4691-bdcc-375d46235920-AP_Instagram.jpg?crop=6925,3896,x0,y352&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2023-03-10T00:16:30Z",
          "content": "Which app do Americans most want to delete from their phones? Instagram. \r\nSecurity website VPNOverview analyzed the internet search trends for the 30 most popular apps to see which ones people were … [+1203 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Los Angeles Times"
          },
          "author": "Hayley Smith, Ian James",
          "title": "California lowering dam water levels, warns of flood threat as storm hits - Los Angeles Times",
          "description": "As yet another series of storms were forecast to hit California, state and federal officials outlined their preparations for flood control Thursday.",
          "url": "https://www.latimes.com/california/story/2023-03-09/california-lowering-dam-water-levels-as-storm-hits",
          "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/88b2948/2147483647/strip/true/crop/5472x2873+0+313/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6f%2Fcb%2Fc4c316be4439ad4f4b63c8da1ffa%2F1244689-me-arcadia-dam-filling-up14-mam.jpg",
          "publishedAt": "2023-03-10T00:15:00Z",
          "content": "With back-to-back storms to hit California in the coming days, state officials are scrambling to make strategic releases from key reservoirs in hopes of preventing a repeat of the flooding that kille… [+8540 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Brie Stimson, Stephanie Nolasco",
          "title": "Harry, Meghan Markle surprised palace aides with ‘highly ironic’ decision to give kids royal titles: expert - Fox News",
          "description": "Experts weighed in on Prince Harry and Meghan Markle's surprise announcement using royal titles for their children, calling it \"highly ironic.\"",
          "url": "https://www.foxnews.com/entertainment/harry-meghan-markle-surprised-palace-aides-highly-ironic-decision-kids-royal-titles-expert",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/harry-meghan-with-archie.jpg",
          "publishedAt": "2023-03-10T00:15:00Z",
          "content": "Prince Harry and Meghan Markle surprised palace aides with their \"highly ironic\" decision to give their two children royal titles this week, an expert told Fox News Digital. \r\n\"It appears that with o… [+5682 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CoinDesk"
          },
          "author": "Krisztian  Sandor",
          "title": "Crypto Traders Suffer Over $300M of Losses in Liquidations Amid Market Crash - CoinDesk",
          "description": "The largest long liquidation in at least a month suggests that Thursday’s crash in crypto prices has caught traders off-guard. Bitcoin traders suffered the most losses, some $112 million in the past 24 hours, while ether liquidations surpassed $73 million, pe…",
          "url": "https://www.coindesk.com/markets/2023/03/09/crypto-traders-suffer-over-300m-of-losses-in-liquidations-amid-market-crash/",
          "urlToImage": "https://www.coindesk.com/resizer/Yuqx0PpceVinm25z7bAXF00zOb4=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/PTVYWUTDE5GAFMA35SWCIDVENY.jpg",
          "publishedAt": "2023-03-09T23:53:00Z",
          "content": "Crypto traders endured some $307 million of liquidations in the past 24 hours, data from Coinglass shows, as crypto markets tanked Thursday on news about crypto-friendly bank Silvergate Capital (SI) … [+1811 chars]"
        },
        {
          "source": {
            "id": "nbc-news",
            "name": "NBC News"
          },
          "author": "Phil Helsel",
          "title": "Alex Murdaugh to appeal murder convictions and life sentence - NBC News",
          "description": "Alex Murdaugh filed a notice Thursday to appeal his convictions in the killings of his wife and one of their sons and the life sentence handed down by a judge.",
          "url": "https://www.nbcnews.com/news/us-news/alex-murdaugh-appeal-murder-convictions-life-sentence-rcna74280",
          "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-03/230303-alex-murdaugh-sentencing-ew-125p-04e3e4.jpg",
          "publishedAt": "2023-03-09T23:32:20Z",
          "content": "Alex Murdaugh filed a notice Thursday to appeal his convictions in the killings of his wife and one of their sons and the life sentence handed down by a judge.\r\nA jury convicted Murdaugh, 54, last we… [+1430 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ESPN"
          },
          "author": "Jeff Borzello",
          "title": "Patrick Ewing out as Georgetown men's basketball coach - ESPN",
          "description": "Patrick Ewing, who was 7-25 this season and had a 75-109 record in six seasons, is out as men's basketball coach at Georgetown.",
          "url": "https://www.espn.com/mens-college-basketball/story/_/id/35823306/patrick-ewing-georgetown-men-basketball-coach",
          "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0124%2Fr965485_1296x729_16%2D9.jpg",
          "publishedAt": "2023-03-09T23:24:31Z",
          "content": "Patrick Ewing will not return as men's basketball coach of the Georgetown Hoyas next season, the school announced Thursday evening.\r\nEwing, one of the greatest college basketball players of all time … [+3012 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NPR"
          },
          "author": "",
          "title": "Fruit fly's complete brain wiring map offers insights into human brain : Shots - Health News - NPR",
          "description": "Researchers have mapped the more than 500,000 connections in the intricate brain of a fruit fly larva. This map, they say, could help scientists figure out how learning changes the human brain, too.",
          "url": "https://www.npr.org/sections/health-shots/2023/03/09/1161645378/scientists-first-wiring-map-fruit-fly-brain-connectome-human-learning",
          "urlToImage": "https://media.npr.org/assets/img/2023/03/09/gettyimages-641597782_wide-4cde999bdee263b54771da273f19001fae0c2e1c-s1400-c100.jpg",
          "publishedAt": "2023-03-09T23:08:45Z",
          "content": "What looks like a pin-headed critter on the right is actually a larval version of the fruit fly on the left. Both have remarkably complex brains, scientists say, with different regions devoted to dec… [+4451 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Rishi Sunak to push Emmanuel Macron on efforts to stop small boat crossings - BBC",
          "description": "However, the two men are not expected to reach a deal on returning migrants to France.",
          "url": "https://www.bbc.com/news/uk-politics-64909510",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12D44/production/_128942177_c00826fbbb1fe55ab1bf704cd0f84dc62d7c9b4d.jpg",
          "publishedAt": "2023-03-09T22:41:33Z",
          "content": "Prime Minister Rishi Sunak is heading to Paris to push for France to \"go further\" on joint efforts to stop migrants crossing the English Channel.\r\nMr Sunak and French President Emmanuel Macron will m… [+4081 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SciTechDaily"
          },
          "author": null,
          "title": "Disturbing Truth: Opioids Dominate as Primary Cause of Poisoning Deaths in Children - SciTechDaily",
          "description": "Researchers find rate of fatal opioid poisonings among children more than doubled over 13-year span Over-the-counter drugs also continue to pose fatal risks to young children despite measures to reduce exposure. Researchers from Children’s Hospital of Philade…",
          "url": "https://scitechdaily.com/disturbing-truth-opioids-dominate-as-primary-cause-of-poisoning-deaths-in-children/",
          "urlToImage": "https://scitechdaily.com/images/Opioid-Drug-Addiction-Death-Concept.jpg",
          "publishedAt": "2023-03-09T22:30:05Z",
          "content": "A study conducted by researchers from Childrens Hospital of Philadelphia (CHOP) found that opioids were responsible for more than half of all fatal poisonings in children under the age of 5, a number… [+4958 chars]"
        },
        {
          "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
          },
          "author": "Andrew Cunningham",
          "title": "Apple will launch a new app exclusively for classical music later this month - Ars Technica",
          "description": "Classical music app will be included with an Apple One or Apple Music sub.",
          "url": "https://arstechnica.com/gadgets/2023/03/apple-will-launch-a-new-app-exclusively-for-classical-music-later-this-month/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/03/apple-music-classical-760x380.jpg",
          "publishedAt": "2023-03-09T22:21:40Z",
          "content": "Enlarge/ The Apple Music Classical logo and app icon.\r\n42 with \r\nApple is launching a version of Apple Music specifically for classical music later this month, the company announced today. The Apple … [+1776 chars]"
        }
      ]
      constructor(){
        super();
        console.log("Hello I'm a constructor from news component");
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        console.log("fresh news on plate")
        let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f7ee44740864e20864ec1148807265c&page=1";
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.articles})

    }
    handlePreviousClick= async ()=>{
console.log("Previous")
let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f7ee44740864e20864ec1148807265c&page=${this.state.page-1}`;
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
        this.setState({
          page:this.state.page-1,
          articles: parsedData.articles
        })
    }
    handleNextClick= async ()=>{
console.log("Next")
let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f7ee44740864e20864ec1148807265c&page=${this.state.page+1}`;
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
        this.setState({
          page:this.state.page+1,
          articles: parsedData.articles
        })
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsToday - Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url }/>
            </div>
            })}
           </div>
<div className="container d-flex justify-content-between ">
<button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
<button type="button" class="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>

</div>
      </div>
    )
  }
}

export default News
