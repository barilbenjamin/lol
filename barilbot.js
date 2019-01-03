const Discord = require('discord.js');

const client = new Discord.Client();
const antispam = require("discord-anti-spam"); //the main function for the anti spam
const fs = require("fs");

var prefix = '/';

const moment = require('moment');

const OwnerID = '403231435907137537';
const ytdl = require('ytdl-core');
 
const queue = new Map();

var servers = {};




client.login('NDg2NTMxNTM4ODg0ODg2NTQ4.DnAflA.oUG5VNaUK836-lAPUD8WRwJEaNY');
client.on("ready", () => {
    console.log("vener jouer avec baril");
  });
client.on("ready", () => {
    client.user.setStatus("online");
});


client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: ` sur ${client.guilds.size} serveur | /help`,
            type: 'LISTENING'
        },
        status: 'idle'
    })
})
client.on("ready", () => {
    client.user.setActivity("avec le staff | /help", { type: "STREAMING", url: "https://www.twitch.tv/barilbot" })
})
client.on('message', message => {
 
    if(message.content === "Bonjour"){
        message.reply("Wesh, bien ou quoi ?");
        console.log(`Le bot dit bonjour a ${message.author.tag}`);
    }
 
    if(message.content === "fdp"){
        message.reply("a dis quelque chose de pas bien<:refuser:430431447073947648>");
      
    }
 
    if(message.content === "fils de pute"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
      
    }
    
    if(message.content === "connard"){
        message.reply("a dis quelque chose de pas bien<:refuser:430431447073947648>");
       
    }
    
    if(message.content === "nick ta mere"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
       
    }
    if(message.content === "ntm"){
        message.reply("a dis quelque chose de pas bien<:refuser:430431447073947648>");
       
    }
    if(message.content === "Fils de pute"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
       
    }
    if(message.content === "Ntm"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
       
    }
    if(message.content === "Nick ta mere"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
       
    }
    if(message.content === "Connard"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
       
    }
    if(message.content === "Connard"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
       
    }
    if(message.content === "Fdp"){
        message.reply("a dis quelque chose de pas bien <:refuser:430431447073947648>");
       
    }
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0033")
        .setTitle("Voici mes commandes d'aide !")
        .setThumbnail(message.author.avatarURL)
        .addField("<a:coding:529950063879913480> Commande<a:coding:529950063879913480>  ", " Certaine commande comme : /help,Bonjour ,/info , /statistiques /modération  ")
        
        .addField("<a:AshamedWeightyDachshundmax1mb:529950678815342602>Commande fun<a:AshamedWeightyDachshundmax1mb:529950678815342602> ", "/baril,/vcs,/userinfo,/id,/version,/say,/cv,/cvc,/server,/flipoff,/dice,/couleur,/avatar,/partenaire,/invite,/manock,/Hunter,/nice,/testbot,/energi,/staff,/blacklist,/money,/daily,/quiz,/bvn,/aurevoir,/ping,/yesman,/ranks,/rank")
        .setFooter("Menu d'aide.")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a fait la commande d'aide !`)
    }
    if(message.content === prefix + "modération"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#FF0033")
      .setTitle("Voici mes commandes d'aide de modération !")
      .setThumbnail(message.author.avatarURL)
      .addField("/kick", "kick l'utilisateur")
      .addField("/ban", "ban l'utilisateur")
      .addField("/mute @le_nom", "mute l'utilisateur dans le chat")
      .addField("/unmute @le_nom", "unmute l'utilisateur")
      .addField("/clear le nombre de message", "supprime le nombre de message")
      .addField("/everyone ", "permer de mention tout le monde ")
      .addField("/create ", "permer de crée un channel ")
      .addField("/shutdown ","permer d'eteindre le bot" )
      .addField("/setgame", "permer de set la game")
      .addField("/annonce", "permer de faire une annonce")
      .addField("/sondage", "permer de faire un sondage :wink:")
      console.log(` ${message.author.tag} a fait la commande d'aide !`)
  }
 
    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
 
        if(message.mentions.users.size === 0) {
        
            return message.channel.send("<:refuser:430431447073947648> Vous devez mentionner un utilisateur !")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("<:refuser:430431447073947648> Je ne sais pas si l'utilisateur existe :/")
        }
        
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("<:refuser:430431447073947648> Je n'ai pas la permission pour kick !");
        }
 
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`);
        });
    }
 
    if (message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("<:refuser:430431447073947648>Vous n'avez pas la permission !");
 
        if(message.mentions.users.size === 0) {
            return message.channel.send("<:refuser:430431447073947648> Vous devez mentionner un utilisateur");
        }
 
        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("<:refuser:430431447073947648> Je ne sais pas si l'utilisateur existe :/");
        }
 
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("<:refuser:430431447073947648> Je n'ai pas la permission pour BAN :/");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username}`) 
        }
 
 
        )
    }
 
    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Vous n'avez pas la permision");
 
        let args = message.content.split(" ").slice(1);
 
        if(!args[0]) return message.channel.send ("<:refuser:430431447073947648> Tu doit préciser un nombre de message à supprimé !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} message ont été supprimés !  <:accepter:430431434474258444> `)
        })
    }
 
  
 
    if(message.content.startsWith(prefix + "mute")) {
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Vous n'avez pas la permission !");
 
      if(message.mentions.users.size === 0) {
          return message.channel.send('<:refuser:430431447073947648>Vous devez mentionner un utilisateur !');
      }
 
      var mute = message.guild.member(message.mentions.users.first());
      if(!mute) {
          return message.channel.send("<:refuser:430431447073947648> Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
      }
 
      if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Je n'ai pas la permission !");
      message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
          message.channel.send(`${mute.user.username} est mute !  <:accepter:430431434474258444>  `);
          console.log(`${message.author.tag} a utiliser la commande mute`)
      })
  }
 
  if(message.content.startsWith(prefix + "unmute")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(" :x: Vous n'avez pas la permission !");
 
    if(message.mentions.users.size === 0) {
      return message.channel.send("<:refuser:430431447073947648> Vous devez mentionner un utilisateur !");
    }
 
    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
      return message.channel.send("<:refuser:430431447073947648> Je n'ai pas trouvé l'utilisateur ou il n'exite pas !");
    }
 
    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("<:refuser:430431447073947648> Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
      message.channel.send(`${mute.user.username} n'est plus mute  <:accepter:430431434474258444> `)
      console.log(`${message.author.tag} a utiliser la commande unmute`)
    })
  }
 
 
 
    
    if (!message.content.startsWith(prefix)) return;
 
    var args = message.content.substring(prefix.length).split(" ");
 
    switch (args[0].toLowerCase()) {
        case "statistiques":
 
        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;
 
        var stats_embed = new Discord.RichEmbed()
 
        .setColor("#3300FF")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:` , msgauthor, true)
        .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés ! Tu viens de recevoir tes statistiques !")
        message.author.send({embed: stats_embed});
        break;
    } 
    if(message.content === prefix + "partenaire"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#00eeff")
        .setTitle("Voici mes commandes de partenaire !")
        .setThumbnail(message.author.avatarURL)
        .addField("Premier partenaire", "Manock")
        .addField("troisieme", "SenkeyGaming")
        .addField("quatrieme", "Soldat alexandre")
        .addField("cinquime", "Nathan/chaine diverse")
        .addField("sixieme", "StevenGamer05")
        .addField("septieme", "-Nino-")
        .addField("huitieme", "SᴛᴀʀLɪɢʜᴛ 🎁")
        .addField("neuvieme", "WeasleyGAMING")
        .addField("dixieme", "Lorenzo GamerFR")
        .addField("onzieme", "Marioo💔💙🐼")
        .setFooter("Partenaire")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a demander les partenaire !`)
    }
    if(message.content === prefix + "invite"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#23ff00")
        .setTitle("Voici ma commande d'invitation' !")
        .setThumbnail(message.author.avatarURL)
        .addField("Voici mon invitation", "https://discordapp.com/api/oauth2/authorize?client_id=486531538884886548&scope=bot&permissions=0 ")
        .addField("invitation du serveur officiel", "https://discord.gg/bpFS7KT")
        .setImage("https://cdn.discordapp.com/avatars/486531538884886548/79aec9c86ef56b9a55022a56f39cbd3b.png?size=2048")
        .setFooter("Invitation")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a demander l'invitation du bot et du serveur`)
    }
    if(message.content === prefix + "version"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#23ff00")
        .setTitle("3.0.6")
        .setThumbnail(message.author.avatarURL)
        .addField("correction de bug ")
        .addField("ajout de certaine commande comme", "info server")
        .addField("hebergement du bot", "hebergeur OVH")
        .setImage("https://cdn.discordapp.com/avatars/486531538884886548/79aec9c86ef56b9a55022a56f39cbd3b.png?size=2048")
        .setFooter("Invitation")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a demander l'invitation du bot et du serveur`)
    }
   
    if(message.content === prefix + "aideHunter"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0033")
        .setTitle("HUNTER")
        .setThumbnail(message.author.avatarURL)
        .addField("/calme", "te calme")
        .addField("/Hunter ", "te met en rage")
     .setImage("https://cdn.discordapp.com/attachments/518394602512711680/518399397755879434/222.jpg")
        .setFooter("hunter  ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a fait la commande Hunter`)
    }
    if(message.content === prefix + "calme"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0033")
        .setTitle("HUNTER")
        .setThumbnail(message.author.avatarURL)
        .addField("calme", "calme toi mon amour")
       
        .setFooter("https://cdn.discordapp.com/attachments/518394602512711680/518399397755879434/222.jpg ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a fait la commande Hunter`)
    }  
 
  
    if(message.content === prefix + "nice"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0033")
        .setTitle("voici les nice")
        .setThumbnail(message.author.avatarURL)
        .addField("command ban  ", "on")
     
        .setFooter("nice command ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a fait la commande nice`)
    }
    if(message.content === prefix + "testbot"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0034")
        .setTitle("voici les test")
        .setThumbnail(message.author.avatarURL)
        .addField("command kicked  ", "off")
        .addField("command kicked  ", "on")
        .addField("command banned  ", "on")
        .addField("command banned ", "on")
        .addField("command muted ", "on")
        .addField("command unmuted ", "on")
     
        .setFooter("nice command ")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande nice!")
    }
    if(message.content === prefix + "energi"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0034")
        .setTitle("Pour toi energistix")
        .setThumbnail(message.author.avatarURL)
        .addField("le meilleur  ", ":heart:")
        
        .setFooter("nice command ")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a fait la commande nice!")
    }
    if(message.content === prefix + "barilp"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#d500ff")
        .setTitle("Bg")
        .setThumbnail(message.author.avatarURL)
        .addField("baril et un mec de 11ans  ", ":heart:")
        
        .setFooter("baril command ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a fait la commande baril`)
    }
    if(message.content === prefix + "blacklist"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#d500ff")
        .setTitle("BLacklist")
        .setThumbnail(message.author.avatarURL)
        .addField("raidbot ", "raid bot")
        .addField("ღ꧁ jυιακ ꧂ღ (Free bot) ", "infecter le bot Rythm id =469799182736031744")
        .addField("gtaouhy3 ", "spam + here id =466758359693918209")
        .addField("MineY ", "spam + non respect ")
        .setFooter("blacklist command ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a demander les joueur blacklisté!`)
    }
    if(message.content === prefix + "configbot"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#d500ff")
        .setTitle("BLacklist")
        .setThumbnail(message.author.avatarURL)
        .addField("config ", "on")
        .addField("config ", ".json")
        .addField("config ", "blacklist command :white_check_mark:")
        .setFooter("config command ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a demander la config`)
    }
    if(message.content === prefix + "money"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#d500ff")
        .setTitle("money")
        .setThumbnail(message.author.avatarURL)
        .addField("ta money ", "100")
        .addField("a dans 24 heure pour  faire /daily ", "definit")     
        .setFooter("money command ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} a fait la commande money`)
    }
if(message.content === prefix + "staff"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("Staff")
    .setThumbnail(message.author.avatarURL)
    .addField("energistix  ", "manager")   
    .addField(" Gustavo  ", "Moderateur ")
    .addField(" baril  ", "Fondateur") 
    .addField("_Ak47Nino / Joris YTB_" , "Fondateur")
    .addField("Taloux ", "Administrateur")    
    .addField("JunKo And Hirokazu ", "Helper")  
    .addField("Lion3000#3890", "Helper")  
    .addField("serberbe1306#7981", "Administrateur") 
     
    .setFooter("staff command ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a demander les membre du staff`)
}
if(message.content === prefix + "daily"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("tu a recuperer 100de money ", "tu et a 100money")
    
    
    .setFooter("money command ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a fait la commande de money daily`)
}
if(message.content === prefix + "quiz"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("qui et le createur du bot? ", "ses qui")
    .addField("qui et le crea de Sigfaction", "ses qui")
    .addField("le barilbot a eter crée quand ", "indice :le decembre 02 mes quel anée")
    .addField("quelle age a baril", "ses qui")
    .addField("vous aimer le bot ?", "oui a dire")
    .addField("combien d'utilisateur utilise le bot?", "nombre exacte")
    .setFooter("quiz command ")
    .setFooter("quiz command ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} s'amuse avec les quiz` )
}
if(message.content === prefix + "baril"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("bonne reponse! ", "autre reponse")
   
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a apporter la bonne reponse`)
}
if(message.content === prefix + "oui"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("bonne reponse! ", "autre reponse")
   
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a apporter la bonne reponse`)
}
if(message.content === prefix + "alpha"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("bonne reponse! ", "autre reponse")
   
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a apporter la bonne reponse`)
}
if(message.content === prefix + "2018"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("bonne reponse! ", "autre reponse")
   
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a apporter la bonne reponse`)
}
if(message.content === prefix + "11ans"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("bonne reponse! ", "autre reponse")
   
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a apporter la bonne reponse`)
}
if(message.content === prefix + "5000"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("money")
    .setThumbnail(message.author.avatarURL)
    .addField("bonne reponse! ", "autre reponse")
   
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a apporter la bonne reponse`)
}
if(message.content === "/everyone"){
    message.reply("a fait une annonce @everyone");
    console.log(`${message.author.tag} quelqun a fait un everyone`);
}
if(message.content === "/everyoneg"){
    message.reply("a fait une annonce giveaway @everyone");
    console.log(`${message.author.tag} quelqun a fait un everyone`);
}
if(message.content === "/blacklistadd "){
    message.reply("l'utilisateur a bien etait blacklist");
    console.log(`${message.author.tag} a tenter de blacklist quelqun `);
}
if(message.content === prefix + "infraction"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#x5007")
    .setTitle("<:refuser:430431447073947648>Infractions")
    .setThumbnail(message.author.avatarURL)
    .addField("tu a 0 infraction  ", "tu n'est pas blacklist!<a:wassfreestyle:525042162241634314>")
    
    
    .setFooter("infraction ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} quelqun a demander sont nombre d'infraction`)
    
}
if (message.content.startsWith(prefix + "sondage"))
        {
            let splitMessage = message.content.split("-")
            let channel = message.mentions.channels.first();
            if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
                return message.reply("Tu n'a pas la permission requit\nPermission requit: `ADMINISTRATOR`")
            if (!splitMessage[1])
                return message.reply("\nChannel manquant\n/sondage -[channel] -[question]")
            if (!channel)
                return message.reply("Ce channel n'existe pas")
            if (!splitMessage[2])
                return message.reply("\nQuestion manquante\n/sondage -[channel] -[question]")
            client.channels.get(channel.id).send("@everyone")
            var sondage_embed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.username)
            .setTitle("Sondage")
            .setDescription(splitMessage[2])
            .setFooter("barilbot officiel")
            client.channels.get(channel.id).sendEmbed(sondage_embed).then(message =>
                {
                    message.react("✅")
                    message.react("✖")
                })
            return;
        }
        if (message.content.startsWith(prefix + "annonce"))
        {
            let splitMessage = message.content.split("-")
            let channel = message.mentions.channels.first();
            if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
                return message.reply("Tu n'es pas la permission requit\nPermission requit: `ADMINISTRATOR`")
            if (!splitMessage[1])
                return message.reply("\nChannel manquant\n/annonce -[channel] -[annonce]")
            if (!channel)
                return message.reply("Ce channel n'existe pas")
            if (!splitMessage[2])
                return message.reply("\nQuestion manquante\n/annonce -[channel] -[annonce]")
            client.channels.get(channel.id).send("@everyone")
            var sondage_embed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setAuthor(message.author.username)
            .setTitle("Annonce")
            .setDescription(splitMessage[2])
            .setFooter("barilbot officiel")
            client.channels.get(channel.id).sendEmbed(sondage_embed).then(message =>
                {
                    message.react("✅")
                   
                })
            return;
        }
if(message.content === prefix + "ping"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("Pong")
    .setThumbnail(message.author.avatarURL)
    .addField(`:ping_pong:` , ` l'API a mis  ${Math.round(client.ping)}ms pour repondre`);
    
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} quelqun a demander le ping`)
    
}


if(message.content === prefix + "bvn "){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("bienvenue")
    .setThumbnail(message.author.avatarURL)
    .addField(` ${message.author.tag} te souhaite la bvn `, ":wink:  ")
    
    
    .setFooter("Bienvenue ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} a souhaiter la bienvenue`)
    
}
if(message.content === prefix + "yesman"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("yes man challenge")
    .setThumbnail(message.author.avatarURL)
    .addField("je  pense que oui  "
    , ":wink:  ")
    .setFooter("challenge ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} quelqun a fait faire le defis au bot`)
    
}
if(message.content === prefix + "rank"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("Voici ton rank")
    .setThumbnail(message.author.avatarURL)
    .addField("ton rank et de 1 "  , "continue comme sa ")
    .setFooter("level ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} quelqun a voulut voir son rank`)
    
}
if(message.content === prefix + "ranks"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("pour augmenter de level")
    .setThumbnail(message.author.avatarURL)
    .addField("il faut 200xp pour level1"  , "grade membre ")
    .addField("il faut 100000Xp pour level 2"  , "grade membre ")
    .addField("il faut 2000000xp pour level 3"  , "grade membre ")
    .addField("il faut 4000000000xp pour level 4"  , "grade actif ")
    .addField("il faut 1000000000000 pour level 5"  , "grade actif ")
    .addField("il faut 70000000000000 pour level 6"  , "grade actif ")
    .addField("il faut 100000000000000 pour level 7"  , "grade actif ")
    .addField("il faut 2000000000000000 pour level 8"  , "grade actif ")
    .addField("il faut 900000000000000000000 pour level9"  , "grade Vip ")
    .addField("il faut 10000000000000000000000000000 pour level 10"  , "grade Vip+ ")
    .setFooter("level ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} quelqun a voulu voire le nombre d'xp a avoir`)
    
}
if(message.content === prefix + "rankb"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("Voici ton rank")
    .setThumbnail(message.author.avatarURL)
    .addField("ton rank et de 10 "  , "ses bien! ")
    .setFooter("level ")
    message.channel.sendMessage(help_embed);
    console.log("Un utilisateur a utilisé la commande Bienvenue")
    
}
if(message.content === prefix + "moneyb"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#d500ff")
    .setTitle("Voici ta money")
    .setThumbnail(message.author.avatarURL)
    .addField("10000000000000000000000000+2000000000000000000000000000000000000000000 "  , "tu a trop de money mes tu et staff normal! ")
    .setFooter("level ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} la commande Bienvenue`)
    
}
if(message.content === prefix + "aurevoir"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("AUREVOIR")
    .setThumbnail(message.author.avatarURL)
    .addField("Je te dis aurevoir de la part d'un utilisateur"  , "a la prochaine ! ")
    .setFooter("level ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} la commande aurevoir`)
    
}
if(message.content === prefix + "id"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00f0d3")
        .setTitle("Voici l'id  du bot ")
        .addField("id du boy :",`${client.user.id}`)
        .setThumbnail(message.author.avatarURL)
        .setFooter("id commande ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} la commande id`)
    }
if(message.content === prefix + "couleur"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#45ff00")
    .setTitle("AUREVOIR")
    .setThumbnail(message.author.avatarURL)
    .addField("la prochaine couleur seras le bleu :alias:", ":alias: ")
    .setFooter("level ")
    message.channel.sendMessage(help_embed);
    console.log(`${message.author.tag} la commande couleur`)
    
}

if(message.content === prefix + "dice"){
    
    let dice = Math.floor(Math.random() * 7)
    if (dice == 7) {
      dice = 6
    }
    let embed = new Discord.RichEmbed()
      .setTitle("tu as demander un dés")
      .addField("le résultat du dés est",dice)
      .setColor('#00f0d3')
      message.channel.sendMessage(embed);
      console.log(`${message.author.tag} a fais la commande dice`)
  }
      //chat interserveur
      if (message.content.startsWith(prefix + "vcs" ))
      {
          let xoargs = message.content.split(" ").slice(1)
          let xo3 = xoargs.join(" ")
          var xo2 = message.guild.channels.find(ch => ch.name === "vcs-barilbot")
          if (!xo2) return message.reply("le channel `vcs-barilbot` et introuvable <:refuser:430431447073947648>")
          if (message.channel.name != 'vcs-barilbot') return message.reply("la commande marche sur le channel`vcs-barilbot`<a:th:529949415306428434> ")
          if (!xo3) return ("le bot envoie le message sur tout les serveur ou et le channel<a:th:529949415306428434>")
          var IS_embed = new Discord.RichEmbed()
          .setColor("#FF0000")
          .setAuthor(message.author.username + "#" + message.author.discriminator)
          .setTitle("Chat vps")
          .setDescription("communique avec les autre serv")
          .addField("Guild name", message.guild.name)
          .addField("Message", xo3)

          .setFooter(" barilbot  ")
          .setTimestamp()
          message.channel.bulkDelete(1)
          client.channels.findAll('name', 'vcs-barilbot').map(channel => channel.send(IS_embed))
      }
if(message.content === prefix + "avatar"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#00f0d3")
        .setTitle("AVATAR")
        .addField(`Avatar de ${message.author.tag}`,"Stylé faut l'admettre mais pas autant que le mien :")
        .setImage(`${message.author.displayAvatarURL}`)
        .setFooter("avatar ")
        message.channel.sendMessage(help_embed);
        console.log(`${message.author.tag} la commande avatar`)
    }
});      
client.on('message', message => {
  
 
   
    let args = message.content.split(" ").slice(1);
  
    
    if(message.content.startsWith(prefix + "say"))  {
      if (message.channel.type === "dm") return; 
           message.delete()
      message.channel.send(args.join(" "))

   console.log(`${message.author.tag} a utiliser la commande say`)
       }
    });
   
     
    
    client.on('guildMemberAdd', member => {
        member.send(`Bienvenue! tu a rejoins le serveur ${member.guild.name} :wink: ` );
     });
     client.on('guildMemberRemove', member => {
        member.send(`Au non tu a quitter :sob: le serveur ${member.guild.name} `);
     }); 
     ///////////////Music Commands/////////////////
client.on('message', msg => {
	if (msg.content.startsWith(prefix + 'play')) {
		const voiceChannel = msg.member.voiceChannel;
	    if (!voiceChannel) {
	      return msg.reply(`Please be in a voice channel first!`);
	    }
	    voiceChannel.join()
		.then(connnection => {
			let ytLink = msg.content.slice(6);
			let stream = yt(ytLink, {audioonly: true});
			msg.channel.sendMessage('playing: ' + ytLink);
			const dispatcher = connnection.playStream(stream);
			dispatcher.on('end', () => {
				voiceChannel.leave();
		    });
		});
	}
});
client.on('message', msg => {
    if (msg.content.startsWith(prefix) && msg.author.id === OwnerID){
        if (msg.content.startsWith(prefix + 'setgame')) {
            let NewGame = msg.content.slice(8);
            client.user.setGame(NewGame);
        }
        
        if (msg.content.startsWith(prefix + 'shutdown')) {
            msg.channel.sendMessage('D: goodbye master');
            client.destroy();
        }
    }
});
/////////moderation code/////////////////
 
client.on('message', msg => {
    if (msg.content.startsWith(prefix) && msg.author.id === OwnerID){
        if (msg.content.startsWith(prefix + 'loli')) {
            msg.guild.ban(msg.mentions.users.first());
        }
        if (msg.content.startsWith(prefix + "loli")) {
            let number = msg.content.slice(7);
            let messagecount = parseInt(number);
            msg.channel.fetchMessages({limit: messagecount})
            .then(messages => msg.channel.bulkDelete(messages));
        }
        if (msg.content.startsWith(prefix + 'cv')) {
            let ChannelName = msg.content.slice(4);
            msg.guild.createChannel(ChannelName, 'text')
            .then(msg.channel.sendMessage(ChannelName + ' has been succesfully created'));
        }
    
        if (msg.content.startsWith(prefix + 'cvc')) {
            let ChannelName = msg.content.slice(5);
            msg.guild.createChannel(ChannelName, 'voice')
            .then(msg.channel.sendMessage('voice channel ' + ChannelName + ' has been succesfully created'));
        }
    }
});
  ////////////General Commands//////////////
client.on('message', msg => {
    if (msg.content.startsWith(prefix + 'server')) {
        const embed = new Discord.RichEmbed()
        .setTitle('ServerInfo')
        .setAuthor(msg.author.username, 'https://goo.gl/rHndF5')
        /*
            * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
        */
        .setColor('#FF0000')
        .setDescription('nombre de membre ' + msg.guild.memberCount)
        .setFooter('crée le: ' + msg.guild.createdAt, 'https://goo.gl/hkFYh0')
        .setImage(msg.guild.iconURL)
        .setThumbnail(client.user.avatarURL)
        /*
            * Takes a Date object, defaults to current date.
        */
        .setTimestamp()
        .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
        .addField('Server name', msg.guild.name)
        .addField('Fondateur', msg.guild.owner)
        .addField('Region', msg.guild.region)
        .addField('Nombre de categorie et de salons' , msg.guild.channels.size)
        .addField('Verifcation niveaux: ', msg.guild.verificationLevel + ' :eyes:', true)
        
        /*
            * Blank field, useful to create some space.
        */
        .addField('\u200b', '\u200b', true)
 
        msg.channel.sendEmbed(
          embed,
          '',
          { disableEveryone: true }
        );
    }
    
    if (msg.content.startsWith(prefix + 'flipoff')) {
        let FlipOff = msg.mentions.users.first();
        msg.channel.sendMessage("🖕 " + FlipOff);
    }
});

// Commandes
client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(`Args: ${args}\nCommand: ${command}`);
    if (command === "set")
        if (args[0] === "live")
            if (args[1] === "*********")
                client.user.setGame(`${prefix}help | ******** est en live !`, '***************************', 2);
            if (args[1] === "xari0x")
                client.user.setGame(`${prefix}help | Xari0x est en live !`, '***************************', 2);
            if (args[1] === "stop")
                client.user.setGame(`${prefix}help | ${client.guilds.size} serveur(s)`, '***************************', 2);
    if (command === "fortnite")
        if (args[0] === "psn")
            fortnite_client.getInfo(args[1], 'psn').then(data => console.log(data));
        if (args[0] === "pc")
            fortnite_client.getInfo(args[1], 'pc').then(data => console.log(data));
        if (args[0] === "xbl")
            fortnite_client.getInfo(args[1], 'xbl').then(data => console.log(data));
});
antispam(client, {
    warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
    maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
    interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
    warningMessage: "bonjour je suis l'anti spam du bot mercu d'arretter de spam", // Warning message send to the user indicating they are going to fast.
    banMessage: " vous avez etait ban pour spamming ", // Ban message, always tags the banned user in front of it.
    maxDuplicatesWarning: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting warned
    maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
    deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
});
client.on('message', message => {
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'move')) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
    if (message.mentions.users.size === 0) {
    return message.channel.send("......ر : " +prefix+ "move [USER]``")
    }
    if (message.member.voiceChannel != null) {
    if (message.mentions.members.first().voiceChannel != null) {
    var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
    var embed = new Discord.RichEmbed()
    .setTitle("Succes!")
    .setColor("#000000")
    .setDescription(`  <@${usermentioned}>  a bient etait move `)
    var embed = new Discord.RichEmbed()
    .setTitle(`You are Moved in ${message.guild.name}`)
    .setColor("RANDOM")
    .setDescription(`**<@${message.author.id}>a etait mouve dans un channel!\nServer --> ${message.guild.name}**`)
    message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
    message.guild.members.get(usermentioned).send(embed)
    } else {
    message.channel.send("``لا ...... "+ message.mentions.members.first() +" `......`")
    }
    } else {
    message.channel.send("**``.........``**")
    }
    } else {
    message.react(":x:")
    }}});
    
     
    // Voice Logs
    client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
     
        if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
        if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
     
        var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
        if(!logChannel) return;
     
        voiceOld.guild.fetchAuditLogs().then(logs => {
            var userID = logs.entries.first().executor.id;
            var userTag = logs.entries.first().executor.tag;
            var userAvatar = logs.entries.first().executor.avatarURL;
     
    // Server Muted Voice
            if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
                let serverMutev = new Discord.RichEmbed()
                .setTitle('**[VOICE MUTE]**')
                .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
                .setColor('RAIMBOW')
                .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                .setTimestamp()
                .setFooter(userTag, userAvatar)
     
                logChannel.send(serverMutev);
            }
    // Server UnMuted Voice
            if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
                let serverUnmutev = new Discord.RichEmbed()
                .setTitle('**[VOICE UNMUTE]**')
                .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
                .setColor('GREEN')
                .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                .setTimestamp()
                .setFooter(userTag, userAvatar)
     
                logChannel.send(serverUnmutev);
            }
    // Server Deafen Voice
            if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
                let serverDeafv = new Discord.RichEmbed()
                .setTitle('**[VOICE DEAFEN]**')
                .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
                .setColor('RED')
                .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                .setTimestamp()
                .setFooter(userTag, userAvatar)
     
                logChannel.send(serverDeafv);
            }
    // Server UnDeafen Voice
            if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
                let serverUndeafv = new Discord.RichEmbed()
                .setTitle('**[VOICE UNDEAFEN]**')
                .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
                .setColor('GREEN')
                .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
                .setTimestamp()
                .setFooter(userTag, userAvatar)
     
                logChannel.send(serverUndeafv);
            }
        })
    // Join Voice Channel
        if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
            let voiceJoin = new Discord.RichEmbed()
            .setTitle('**[JOIN VOICE ROOM]**')
            .setColor('GREEN')
            .setThumbnail(voiceOld.user.avatarURL)
            .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
            .setTimestamp()
            .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
     
            logChannel.send(voiceJoin);
        }
    // Leave Voice Channel
        if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
            let voiceLeave = new Discord.RichEmbed()
            .setTitle('**[LEAVE VOICE ROOM]**')
            .setColor('GREEN')
            .setThumbnail(voiceOld.user.avatarURL)
            .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
            .setTimestamp()
            .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
     
            logChannel.send(voiceLeave);
        }
    // Changed Voice Channel
        if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
            let voiceLeave = new Discord.RichEmbed()
            .setTitle('**[CHANGED VOICE ROOM]**')
            .setColor('GREEN')
            .setThumbnail(voiceOld.user.avatarURL)
            .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
            .setTimestamp()
            .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
     
            logChannel.send(voiceLeave);
        }
    });
    client.on('messageDelete', message => {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
     
        var logChannel = message.guild.channels.find(c => c.name === 'log');
        if(!logChannel) return;
     
        let messageDelete = new Discord.RichEmbed()
        .setTitle('**[MESSAGE DELETE]**')
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL)
     
        logChannel.send(messageDelete);
    });
       // Roles Logs
       client.on('roleCreate', role => {
     
        if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
        if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
     
        var logChannel = role.guild.channels.find(c => c.name === 'log');
        if(!logChannel) return;
     
        role.guild.fetchAuditLogs().then(logs => {
            var userID = logs.entries.first().executor.id;
            var userAvatar = logs.entries.first().executor.avatarURL;
     
            let roleCreate = new Discord.RichEmbed()
            .setTitle('**[ROLE CREATE]**')
            .setThumbnail(userAvatar)
            .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setColor('GREEN')
            .setTimestamp()
            .setFooter(role.guild.name, role.guild.iconURL)
     
            logChannel.send(roleCreate);
        })
    });
    client.on('roleDelete', role => {
     
        if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
        if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
     
        var logChannel = role.guild.channels.find(c => c.name === 'log');
        if(!logChannel) return;
     
        role.guild.fetchAuditLogs().then(logs => {
            var userID = logs.entries.first().executor.id;
            var userAvatar = logs.entries.first().executor.avatarURL;
     
            let roleDelete = new Discord.RichEmbed()
            .setTitle('**[ROLE DELETE]**')
            .setThumbnail(userAvatar)
            .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setColor('RED')
            .setTimestamp()
            .setFooter(role.guild.name, role.guild.iconURL)
     
            logChannel.send(roleDelete);
        })
    });
    client.on('roleUpdate', (oldRole, newRole) => {
     
        if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
        if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
     
        var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
        if(!logChannel) return;
     
        oldRole.guild.fetchAuditLogs().then(logs => {
            var userID = logs.entries.first().executor.id;
            var userAvatar = logs.entries.first().executor.avatarURL;
     
            if(oldRole.name !== newRole.name) {
                let roleUpdateName = new Discord.RichEmbed()
                .setTitle('**[ROLE NAME UPDATE]**')
                .setThumbnail(userAvatar)
                .setColor('BLUE')
                .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
                .setTimestamp()
                .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
     
                logChannel.send(roleUpdateName);
            }
            if(oldRole.hexColor !== newRole.hexColor) {
                if(oldRole.hexColor === '#000000') {
                    var oldColor = '`Default`';
                }else {
                    var oldColor = oldRole.hexColor;
                }
                if(newRole.hexColor === '#000000') {
                    var newColor = '`Default`';
                }else {
                    var newColor = newRole.hexColor;
                }
                let roleUpdateColor = new Discord.RichEmbed()
                .setTitle('**[ROLE COLOR UPDATE]**')
                .setThumbnail(userAvatar)
                .setColor('BLUE')
                .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
                .setTimestamp()
                .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
     
                logChannel.send(roleUpdateColor);
            }
            if(oldRole.permissions !== newRole.permissions) {
                let roleUpdate = new Discord.RichEmbed()
                .setTitle('**[UPDATE ROLE PERMISSIONS]**')
                .setThumbnail(userAvatar)
                .setColor('BLUE')
                .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
                .setTimestamp()
                .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
               
                logChannel.send(roleUpdate)
            }
        })
    });
     
     
    // Channels Log
    
        // Guild Logs
        client.on('guildBanAdd', (guild, user) => {
     
            if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
         
            var logChannel = guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
         
            guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
         
                if(userID === client.user.id) return;
         
                let banInfo = new Discord.RichEmbed()
                .setTitle('**[BANNED]**')
                .setThumbnail(userAvatar)
                .setColor('DARK_RED')
                .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
                .setTimestamp()
                .setFooter(guild.name, guild.iconURL)
         
                logChannel.send(banInfo);
            })
        });
        client.on('guildBanRemove', (guild, user) => {
            if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
            if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
         
            var logChannel = guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
         
            guild.fetchAuditLogs().then(logs => {
                var userID = logs.entries.first().executor.id;
                var userAvatar = logs.entries.first().executor.avatarURL;
         
                let unBanInfo = new Discord.RichEmbed()
                .setTitle('**[UNBANNED]**')
                .setThumbnail(userAvatar)
                .setColor('GREEN')
                .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
                .setTimestamp()
                .setFooter(guild.name, guild.iconURL)
         
                logChannel.send(unBanInfo);
            })
        });
       
        client.on('guildMemberAdd', member => {
            var logChannel = member.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
           
            let newMember = new Discord.RichEmbed()
            .setTitle('**[NEW MEMBER ADDED]**')
            .setThumbnail(member.user.avatarURL)
            .setColor('GREEN')
            .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
            .setTimestamp()
            .setFooter(member.user.tag, member.user.avatarURL)
           
            logChannel.send(newMember);
          });
          function Days(date) {
              let now = new Date();
              let diff = now.getTime() - date.getTime();
              let days = Math.floor(diff / 86400000);
              return days + (days == 1 ? " day" : " days") + " ago";
          }
          client.on('guildMemberRemove', member => {
            var logChannel = member.guild.channels.find(c => c.name === 'log');
            if(!logChannel) return;
           
            let leaveMember = new Discord.RichEmbed()
            .setTitle('**[LEAVE MEMBER]**')
            .setThumbnail(member.user.avatarURL)
            .setColor('GREEN')
            .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
            .setTimestamp()
            .setFooter(member.user.tag, member.user.avatarURL)
           
            logChannel.send(leaveMember);
          });
       //get data from file
       const state = new Array("rock", "paper", "scissors");
       const state_icon = new Array(":black_medium_small_square: ", ":page_facing_up:", ":scissors:");
       
       function wordToInt(word)
       {
           for(var i = 0, l; l = state[i]; i++)
           {
               if (word === l)
                   return i;
           }
           return -1;
       }
       
       function oneOrToWins(one, two)
       {
           if (one == two)
               return 0;
           else if (one == 0)
               return (two == 1 ? 2 : 1);
           else if (one == 1)
               return (two == 0 ? 1 : 2);
           else if (one == 2)
               return (two == 0 ? 2 : 1);
           return -1;
       }
       
       client.on('message', msg => 
       {
           var toInterpret = msg.content;
           if (toInterpret.charAt(0) == '/')
           {
               var index = toInterpret.indexOf(" ");		
               var command = toInterpret.substr(1, index == -1 ? toInterpret.Length : index - 1);
       
               var args = toInterpret.split(" ");
               if(args[1])
                   console.log("Arg " + args[1]);
               switch(command)
               {
                   case "userinfo":
                 
                       var reg = new RegExp("(\\d+)");
                       var matches = reg.exec(args[1])
                       if (matches && matches[1])
                       {
                           const userinfo = client.fetchUser(matches[1]);
                      
                           userinfo.then(usr => 
                           { 
                               var embed = new Discord.RichEmbed();
                               embed.addField("Username", usr.username + '#' + usr.discriminator, true);
                               embed.addField("ID", usr.id, true);
                               embed.addField("Bot", usr.bot, true);
                               embed.addField("Created Timestamp", usr.createdTimestamp, true);
                               if(usr.presence.game)
                                   embed.addField("Game", usr.presence.game.name, true);
                               embed.addField("Status", usr.presence.status, true);
                               embed.addField("Created At", usr.createdAt, true);
                               if (usr.note)
                                   embed.addField("Note", usr.note, true)
                               embed.addField("Avatar URL", usr.displayAvatarURL, true);
                               embed.setThumbnail(usr.displayAvatarURL);
                               embed.setAuthor(usr.username + "'s info...", usr.displayAvatarURL);
                               embed.setColor(0xFF69B4);
                               msg.channel.sendEmbed(embed);
                           });
                       }
                   break;
                   case "info":
                       var embed = new Discord.RichEmbed();
                       embed.addField("Name", client.user.username, true);
                       embed.addField("Servers", client.guilds.size, true);
                       embed.addField("Channels", client.channels.size, true);
                       embed.addField("Users", client.users.size, true);
                       embed.addField("Verified", client.user.verified, true);
                       embed.addField("Friends", client.user.friends.size, true);
                       embed.addField("ID", client.user.id, true);
                       embed.addField("Emojis", client.emojis.size, true);
                       embed.addField("Ping", client.ping, true);
                       embed.addField("Ready At", client.readyAt, true);
                       embed.addField("Ready Timestamp", client.readyTimestamp, true);
                       embed.addField("Status", client.status, true);
                       embed.addField("Uptime", client.uptime, true);
                       embed.setThumbnail(client.user.displayAvatarURL);
                       embed.setAuthor(client.user.username + "'s info...", client.user.displayAvatarURL);
                       embed.setColor(0xFF69B4);
                       msg.channel.sendEmbed(embed);
                   break;
                   case "channels":
                       var embed = new Discord.RichEmbed();
                       for (var [key, value] of client.guilds) 
                       {
                           if(value.name)
                               embed.addField(value.name, value.channels.size, true);
                       }
                       embed.setColor(0xFF69B4);
                       msg.channel.sendEmbed(embed);
                   break;
                   case "servers":
                       var embed = new Discord.RichEmbed();
                       for (var [key, value] of client.guilds) 
                       {
                           if(value.name)
                               embed.addField(value.name, value.memberCount, true);
                       }
                       embed.setColor(0xFF69B4);
                       msg.channel.sendEmbed(embed);
                   break;
                   case  "code":
                       var embed = new Discord.RichEmbed();
                       embed.addField("Code:", "\\`\\`\\`ending\n//code\n\\`\\`\\`", true);
                       embed.addField("C++:", "\\`\\`\\`cpp\nint i = 0;\nfor(; i < 50; i++)\n{\n\tstd::cout << i << std::endl\n}\n\\`\\`\\`", true);
                       embed.addField("Pascal:", "\\`\\`\\`cpp\nvar\n  i: integer;\nbegin\n  for i := 0 to 50 do\n  begin\n    Writeln(i);\n  end;\nend;\n\\`\\`\\`", true);
                       embed.addField("C++:", "```cpp\nint i = 0;\nfor(; i < 50; i++)\n{\n\tstd::cout << i << std::endl\n}\n```", true);
                       embed.addField("Pascal:", "```cpp\nvar\n  i: integer;\nbegin\n  for i := 0 to 50 do\n  begin\n    Writeln(i);\n  end;\nend;\n```", true);
                       embed.setColor(0xFF69B4);
                       msg.channel.sendEmbed(embed);			
                       break;
                       case "serverinfo":
                       var embed = new Discord.RichEmbed();
                       for (var [key, value] of client.guilds) 
                       {
                           if(value.name)
                               embed.addField(value.name, value.channels.size, true);
                       }
                       embed.setColor(0xFF69B4);
                       msg.channel.sendEmbed(embed);
                   break;
                   case state[0]:
                   case state[1]:
                   case state[2]:
                       var botchoosed = Math.floor(Math.random() * (2 + 1));
                       var iInput = wordToInt(command);
                       msg.reply(" choosed " + state_icon[iInput] + " " + state[iInput] + "\n" + ":robot:  choosed " + state_icon[botchoosed] + " " + state[botchoosed]);
                       var result = oneOrToWins(iInput, botchoosed);
                       
                       if(result == 1)
                           msg.reply(" wins.");
                       else
                           msg.channel.sendMessage(result == 2 ? ":robot: wins." : "no winner.");
                   break;			
               }
       
           }
       });
       module.exports.run = async (bot, message, args) => {
        var args = message.content.split("```erreur merci de marquer quelle que chose avec ").slice(1)
        let user = message.mentions.users.first() || message.author;
        const joinDiscord = moment(user.createdAt).format('llll');
        const joinServer = moment(user.joinedAt).format('llll');
        let embed = new Discord.RichEmbed()
            .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
            .setDescription(`${user}`)
            .setColor(`RANDOM`)
            .setThumbnail(`${user.displayAvatarURL}`)
            .addField('Joined at:', `${moment.utc(user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
            .addField('Status:', user.presence.status, true)
            .addField('Roles:', user.roles.map(r => `${r}`).join(' | '), true)
            .setFooter(`ID: ${user.id}`)
            .setTimestamp();
    
        message.channel.send({ embed: embed });
        return;
    }
    
    module.exports.help = {
        name: 'userinfo'
    }
    client.on('guildMemberAdd', member => {
        const welcomeChannel = member.guild.channels.find(ch => ch.name === '🏡bienvenue-aurevoir🏠');
     
        if(!welcomeChannel) return;
     
        var help_embed = new Discord.RichEmbed()
            .setTitle(`${member.displayName} just joined barilbot officiel bonne chance :wink:`)
            .setColor(0xF5BD6E)
            .setThumbnail(member.user.avatarURL)
            .setTimestamp()
            .setFooter('barilbot officiel © 2019')
            .setDescription(`Welcome to barilbot officiel, ${member.displayName}.\nPlease, check les regle :wink:`);
       
        welcomeChannel.send(help_embed);
    });
    client.on('guildMemberRemove', member => {
        const welcomeChannel = member.guild.channels.find(ch => ch.name === '🏡bienvenue-aurevoir🏠');
     
        if(!welcomeChannel) return;
     
        var help_embed = new Discord.RichEmbed()
            .setTitle(`${member.displayName} a quitter barilbot officiel bonne chance :wink:`)
            .setColor(0xF5BD6E)
            .setThumbnail(member.user.avatarURL)
            .setTimestamp()
            .setFooter('barilbot officiel © 2019')
            .setDescription(` aurevoir a toi, ${member.displayName}.\n`);
       
        welcomeChannel.send(help_embed);
    });
    client.on('messageCreate', message => {
        if(message.author.bot) return;
        if(message.content.startsWith('/')) {
            let command = message.content.substring(1).split(" ")[0];
            let args = message.content.substring(2 + command.length);
            
            if(command == 'leave') {
            client.leaveVoiceChannel; 
            } else if(command == 'streams') {
                message.channel.createMessage(stations);
            } else if(command == 'radio') {
                if(args == '') return message.channel.createMessage(`:exclamation: Please specify the radio stream example: **!radio <stream> or use command **!streams** to see list.`);
             
                    if(!message.member.voiceState.channelID) return message.channel.createMessage(`:exclamation: You need to be in a voice channel to play that stream.`);
                    client.joinVoiceChannel(message.member.voiceState.channelID).then(vc => {
                        if(vc.playing) vc.stopPlaying();
                        message.channel.createMessage(`:radio: You are listening to Streaming station **${args}**. To change the stream use **!radio <stream>**`);
                    })
                } else {
                    return message.channel.createMessage(`:frowning2: I cannot find a radio stream with that name. Make sure it has capitals and the correct spelling. Type **!streams** to see stream list.`);                    
                }                
            }
        }
    )
