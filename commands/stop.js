const {MessageEmbed} = require("discord.js")
const lang = require("../lang.json");
const musicembed = new MessageEmbed()
.setFooter({ text: `${lang.botname}` });
module.exports = {
    name: "stop",
    arguments: 'none',
    usage: [`${process.env.PREFIX} stop`],
    description: "Stops the music",
    run: (client, message, args) => {
        if (!message.member.voice.channel){
            musicembed.setFields({ name: `${lang.error}`, value: `${lang.userNotInVoiceChannel}` },);
            message.channel.send(({ embeds: [musicembed] }))
        }
        else {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.stop();
        musicembed.setFields({ name: `${lang.stop}`, value: `${lang.queueStop}` },);
        musicembed.setColor('GREEN')
        message.channel.send(({ embeds: [musicembed] }))
    }
}
}
exports.name = "stop";

