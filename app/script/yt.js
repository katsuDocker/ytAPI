let ytdl = require('ytdl-core')

function V2backend(req, res) {
  let link = req.query.link

  if(link != undefined) {
    async function callout() {
      let summon = await ytdl.getInfo(link)
      res.json(summon)
    }

    callout()
  } else {
    res.send('why r u here?')
  }
}

function apiV2(req, res) {
  let link = req.query.link

  if(link != undefined && link != '') {
    async function callout() {
      let summon = await ytdl.getInfo(link)

      let base = summon.videoDetails
      let thumbnailBox = base.thumbnails.reverse()
      let vidBox = summon.formats.reverse()
      let i, vidLink

      for (i=0; i!=-1; i++){
        if (vidBox[i].hasVideo == true) {
          if (vidBox[i].hasAudio == true) {
            vidLink = vidBox[i].url
            break;
          }
        }
      }

      res.json({
        "info": {
          "thumbnail" : thumbnailBox[0].url,
          "title" : base.title,
          "channel" : base.author.name,
          "url" : vidLink
        }
      })
    }

    callout()
  } else {
    res.send('add a link like this <br/> /api/?link=[link]')
  }
}

module.exports = {
  apiV2,
  V2backend
}