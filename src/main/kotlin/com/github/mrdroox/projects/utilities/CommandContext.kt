package com.github.mrdroox.projects.utilities

import com.github.mrdroox.projects.utils.ZoeTranslates
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class CommandContext(event: GuildMessageReceivedEvent?, args: ArrayList<String>) {
    private var event: GuildMessageReceivedEvent? = null
    private var args: ArrayList<String>? = null

    var guild = getEvent()?.guild
    var selfGuildMember = guild?.selfMember
    var textChannel = getEvent()?.channel
    var message = getEvent()?.message
    var author = getEvent()?.author
    var member = getEvent()?.member
    var instance = getEvent()?.jda
    var shardManager = getEvent()?.jda?.shardManager
    var selfUser = getEvent()?.jda?.selfUser
    var translates = ZoeTranslates()


    init {
        this.event = event
        this.args = args
    }

    private fun getEvent(): GuildMessageReceivedEvent? {
        return event
    }

    fun getArgs(): ArrayList<String>? {
        return args
    }
}