module.exports = {

    token: "XXX", //Token bot

    idbot: "XXX", //Bot ID

    prefix: "!", //Bot prefix - (!) Preferred Prefix (Replaceable) -

    basiclang: "en", //The basic language of the bot, "fr" for French and "en" for English

    embeds: {
        color: "BLACK", //Embed color (in English)
        footers: "Bot Developer by Deleted User 61b08a7f#0001" //Embed footer
    },

    start: {
        loading: "XXX", //Loading status
        activity: "XXX" //Status
    },

    events: {
        addcolor: "GREEN", //The color of the event add (in English)
        remcolor: "RED" //The color of the event remove (in English)
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord

    grole: "Giveaways", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here

    auth: {
        support: "https://discord.gg/E5vJE2trn8", 
        dperms: "8" //The permissions that the bot asks on we want to add it on a Discord server (8 = Administrator)
    },
};
