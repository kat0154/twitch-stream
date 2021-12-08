const kitsu = require('node-kitsu');

module.exports = {
    help: {
        name: 'anime',
        requestedBy: 'kat0154'
    },
    run: async (client, channel, tags, message) => {
       let animeName = message.split(' ').slice(1).join(' ');
       kitsu.searchAnime(animeName, 0).then(results => {
           let res = results[0];
           client.send(res.attributes.synopsis.slice(0, 500 - `.....  read more @ https://kitsu.io/anime/${res.attributes.slug}`.length)+ `.... read more @ https://kitsu.io/anime/${res.attributes.slug}`)
       })
    }
}

//{
//     id: '42323',
//     type: 'anime',
//     links: { self: 'https://kitsu.io/api/edge/anime/42323' },
//     attributes: {
//       createdAt: '2019-05-05T06:48:32.704Z',
//       updatedAt: '2021-12-08T03:36:45.685Z',
//       slug: 'mushoku-tensei-isekai-ittara-honki-dasu',
//       synopsis: "Just when an unemployed thirty-four-year-old otaku reaches a dead end in life and decides that it's time to turn over a new leaf—he gets run over by a truck and dies! Shockingly, he finds himself reborn into an infant's body in a strange new world of swords and magic.\n" +
//         '\n' +
// //         'His new identity is Rudeus Grayrat, but he still retains the memories of his previous life. Follow Rudeus from infancy to adulthood, as he struggles to redeem himself in a wondrous yet dangerous world.\n' +
//         '\n' +
//         '(Source: Seven Seas)',
//       description: "Just when an unemployed thirty-four-year-old otaku reaches a dead end in life and decides that it's time to turn over a new leaf—he gets run over by a truck and dies! Shockingly, he finds himself reborn into an infant's body in a strange new world of swords and magic.\n" +
//         '\n' +
//         'His new identity is Rudeus Grayrat, but he still retains the memories of his previous life. Follow Rudeus from infancy to adulthood, as he struggles to redeem himself in a wondrous yet dangerous world.\n' +
//         '\n' +
//         '(Source: Seven Seas)',
//       coverImageTopOffset: 0,
//       titles: {
//         en: 'Mushoku Tensei: Jobless Reincarnation',
//         en_jp: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
//         ja_jp: '無職転生 ～異世界行ったら本気だす～'
//       },
//       canonicalTitle: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
//       abbreviatedTitles: [],
//       averageRating: '82.1',
//       ratingFrequencies: {
//         '2': '416',
// //         '3': '8',
//         '4': '25',
//         '5': '6',
//         '6': '40',
//         '7': '6',
//         '8': '508',
//         '9': '10',
//         '10': '99',
//         '11': '28',
// //         '12': '234',
//         '13': '67',
//         '14': '1670',
//         '15': '263',
//         '16': '1830',
//         '17': '566',
//         '18': '1880',
//         '19': '310',
//         '20': '4121'
//       },
//       userCount: 4740,
//       favoritesCount: 10,
//       startDate: '2021-01-10',
//       endDate: '2021-03-22',
//       nextRelease: null,
//       popularityRank: 2114,
//       ratingRank: 120,
//       ageRating: 'R',
//       ageRatingGuide: '17+ (violence & profanity)',
//       subtype: 'TV',
//       status: 'finished',
//       tba: null,
//       posterImage: {
//         tiny: 'https://media.kitsu.io/anime/poster_images/42323/tiny.jpg',
//         large: 'https://media.kitsu.io/anime/poster_images/42323/large.jpg',
//         small: 'https://media.kitsu.io/anime/poster_images/42323/small.jpg',
//         medium: 'https://media.kitsu.io/anime/poster_images/42323/medium.jpg',
//         original: 'https://media.kitsu.io/anime/poster_images/42323/original.jpg',
//         meta: [Object]
//       },
//       coverImage: {
//         tiny: 'https://media.kitsu.io/anime/cover_images/42323/tiny.jpg',
 //        large: 'https://media.kitsu.io/anime/cover_images/42323/large.jpg',
//         small: 'https://media.kitsu.io/anime/cover_images/42323/small.jpg',
//         original: 'https://media.kitsu.io/anime/cover_images/42323/original.jpg',
//         meta: [Object]
//       },
//       episodeCount: 11,
//       episodeLength: 24,
//       totalLength: 264,
//       youtubeVideoId: 'Qx01pn9l-6g',
//       showType: 'TV',
//       nsfw: false
//     },
//     relationships: {
//       genres: { links: [Object] },
//      categories: { links: [Object] },
//      castings: { links: [Object] },
//      installments: { links: [Object] },
//      mappings: { links: [Object] },
//      reviews: { links: [Object] },
//      mediaRelationships: { links: [Object] },
//      characters: { links: [Object] },
//      staff: { links: [Object] },
//      productions: { links: [Object] },
//      quotes: { links: [Object] },
//      episodes: { links: [Object] },
//      streamingLinks: { links: [Object] },
//      animeProductions: { links: [Object] },
//      animeCharacters: { links: [Object] },
//      animeStaff: { links: [Object] }
//    }
//  }