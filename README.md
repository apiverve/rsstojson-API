RSS to JSON API
============

RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON format.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [RSS to JSON API](https://apiverve.com/marketplace/api/rsstojson)

---

## Installation
	npm install @apiverve/rsstojson --save

---

## Configuration

Before using the rsstojson API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The RSS to JSON API documentation is found here: [https://docs.apiverve.com/api/rsstojson](https://docs.apiverve.com/api/rsstojson).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var rsstojsonAPI = require('@apiverve/rsstojson');
var api = new rsstojsonAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
  "url": "https://www.nasa.gov/rss/dyn/breaking_news.rss"
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "source": "www.nasa.gov",
    "articles": 10,
    "maxReached": false,
    "feed": [
      {
        "website": "NASA",
        "title": "30 Years Ago: STS-63, First Shuttle and Mir Rendezvous Mission ",
        "pubDate": "Mon, 03 Feb 2025 15:16:04 +0000",
        "description": "The first shuttle mission of 1995, STS-63 included several historic firsts. As part of Phase 1 of the International Space Station program, space shuttle Discovery’s 20th flight conducted the first shuttle rendezvous with the Mir space station, in preparation for future dockings. The six-person crew included Commander James Wetherbee, Pilot Eileen Collins – the first […]",
        "link": "https://www.nasa.gov/history/30-years-ago-sts-63-first-shuttle-and-mir-rendezvous-mission/"
      },
      {
        "website": "NASA",
        "title": "Lagniappe for February 2025",
        "pubDate": "Mon, 03 Feb 2025 14:53:54 +0000",
        "description": "Explore Lagniappe for February 2025 featuring: Gator Speaks Welcome to February, folks! The shortest month of the year is here, but do not let its number of days fool you. The month is full of energy and is welcomed with great enthusiasm. We have dusted ourselves off from a historic snowfall in January. The Super […]",
        "link": "https://www.nasa.gov/centers-and-facilities/stennis/lagniappe-for-february-2025/"
      },
      {
        "website": "NASA",
        "title": "NASA Attends FAN EXPO New Orleans",
        "pubDate": "Mon, 03 Feb 2025 14:52:23 +0000",
        "description": "NASA reached out to inspire members of the Artemis Generation on Jan. 10-12, joining one of the largest comic con producers in the world to host an outreach booth at the 2025 FAN EXPO in New Orleans. Thousands of fans celebrating the best in pop culture such as movies, comics, and video gaming learned about […]",
        "link": "https://www.nasa.gov/image-article/stennis-attends-fan-expo-new-orleans/"
      },
      {
        "website": "NASA",
        "title": "The Drive for Better Fuels NASA Employee",
        "pubDate": "Mon, 03 Feb 2025 14:51:48 +0000",
        "description": "Two words come to Tim Stiglets’ mind when he thinks about NASA’s Stennis Space Center near Bay St. Louis, Mississippi – growth and opportunity. The Waveland, Mississippi, resident has experienced both in his career at the south Mississippi NASA center. He started as a summer intern onsite with Lockheed Martin in 2002. When The University […]",
        "link": "https://www.nasa.gov/image-article/the-drive-for-better-fuels-tim-stiglets/"
      },
      {
        "website": "NASA",
        "title": "Station Nation: Meet Tandra Gill Spain, Computer Resources Senior Project Manager in the Avionics and Software Office ",
        "pubDate": "Mon, 03 Feb 2025 12:00:00 +0000",
        "description": "For astronauts aboard the International Space Station, staying connected to loved ones and maintaining a sense of normalcy is critical. That is where Tandra Gill Spain, a computer resources senior project manager in NASA’s Avionics and Software Office, comes in. Spain leads the integration of applications on Apple devices and the hardware integration on the […]",
        "link": "https://www.nasa.gov/general/station-nation-meet-tandra-gill-spain-computer-resources-senior-project-manager-in-the-avionics-and-software-office/"
      },
      {
        "website": "NASA",
        "title": "NASA to Talk Science, Tech Aboard Next Intuitive Machines Moon Flight",
        "pubDate": "Fri, 31 Jan 2025 21:51:15 +0000",
        "description": "NASA will host a media teleconference at 1 p.m. EST Friday, Feb. 7, to discuss the agency’s science and technology flying aboard Intuitive Machines’ second flight to the Moon. The mission is part of NASA’s CLPS (Commercial Lunar Payload Services) initiative and Artemis campaign to establish a long-term lunar presence. Audio of the call will stream […]",
        "link": "https://www.nasa.gov/news-release/nasa-to-talk-science-tech-aboard-next-intuitive-machines-moon-flight/"
      },
      {
        "website": "NASA",
        "title": "What’s Up: February 2025 Skywatching Tips from NASA",
        "pubDate": "Fri, 31 Jan 2025 19:00:02 +0000",
        "description": "A Month of Bright Planets Venus blazes at its brightest for the year after sunset, then Mars and Jupiter to rule the night amid the menagerie of bright winter stars. Skywatching Highlights All Month – Planet Visibility: Daily Highlights: February 1 – Venus & Moon: The crescent Moon cozies up to brilliant Venus tonight in […]",
        "link": "https://science.nasa.gov/solar-system/skywatching/whats-up-february-2025-skywatching-tips-from-nasa/"
      },
      {
        "website": "NASA",
        "title": "NASA Radar Imagery Reveals Details About Los Angeles-Area Landslides",
        "pubDate": "Fri, 31 Jan 2025 18:31:13 +0000",
        "description": "Analysis of data from NASA radar aboard an airplane shows that the decades-old active landslide area on the Palos Verdes Peninsula has expanded. Researchers at NASA’s Jet Propulsion Laboratory in Southern California used data from an airborne radar to measure the movement of the slow-moving landslides on the Palos Verdes Peninsula in Los Angeles County. […]",
        "link": "https://www.nasa.gov/science-research/earth-science/nasa-radar-imagery-reveals-details-about-los-angeles-area-landslides/"
      },
      {
        "website": "NASA",
        "title": "NASA Flight Tests Wildland Fire Tech Ahead of Demo",
        "pubDate": "Fri, 31 Jan 2025 18:26:46 +0000",
        "description": "NASA is collaborating with the wildfire community to provide tools for some of the most challenging aspects of firefighting – particularly aerial nighttime operations.   In the future, agencies could more efficiently use drones, both remotely piloted and fully autonomous, to help fight wildfires. NASA recently tested technologies with teams across the country that will enable […]",
        "link": "https://www.nasa.gov/aeronautics/nasa-flight-tests-wildland-fire-tech-ahead-of-demonstration/"
      },
      {
        "website": "NASA",
        "title": "Building an Antenna",
        "pubDate": "Fri, 31 Jan 2025 17:15:11 +0000",
        "description": "A crane lowers the 112-foot-wide (34-meter-wide) steel framework for the Deep Space Station 23 (DSS-23) reflector dish into position on Dec. 18, 2024, at the Deep Space Network’s (DSN) Goldstone Space Communications Complex near Barstow, California. Once online in 2026, DSS-23 will be the fifth of six new beam waveguide antennas to be added to […]",
        "link": "https://www.nasa.gov/image-article/building-an-antenna/"
      }
    ]
  },
  "code": 200
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.