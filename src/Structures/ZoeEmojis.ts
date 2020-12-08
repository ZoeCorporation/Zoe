export default class ZoeEmojis {
    constructor() {
    this.getEmoji('error')
    }

    getEmoji(name: string) {
        if(typeof name !== 'string') throw new RangeError('Emojis#getEmoji() accept only String')

        const emojis: object = {
            sucess: '<:OkEmoji:761053245572644875>',
            error: '<a:error:734268814954332291>',
            think: '<:zoethink:779836493111099392>',
            disc: '<a:discoZoe:759199892169687061>',
            rage: '<:zoerage:779836095843794945>',
            sad: '<:zoesad:779835477988605992>',
            money: '<:zoemoney:779836402757664798>',
            policeAngry: '<:zoepolice2:779835619089842206>',
            police: '<:zoepolice:779835552681558016>',
            shrug: '<:zoeshrug:779836313468928041>',
            flushed: '<:zoeflushed:779835362864136192>'
        }

        const emoji: string = emojis[name]
        if(emoji === 'null') throw new RangeError('This emoji is Null')
        if(!emoji) throw new RangeError('Not exists any emoji with name: ' + name)

        return emoji
    }
}