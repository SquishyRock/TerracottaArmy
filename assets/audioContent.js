function objBuilder(id, name, roomName, roomNum, media, text) {
  this.id = id; 
  this.name = name;
  this.roomName = roomName;
  this.roomNum = roomNum;
  this.media = media;
} 


export default audioContent = [
  new objBuilder("ag1", "Introduction", "Timeline", 1, require("../assets/audio/ag01.mp3")),
  new objBuilder("ag2", "The Necropolis", "Terracotta Army Figures", 5, require("../assets/audio/ag02.mp3")),
  new objBuilder("ag3", "Sima Qian", "Timeline", 1, require("../assets/audio/ag03.mp3")),
  new objBuilder("ag4", "The Warring States", "Timeline", 1, require("../assets/audio/ag04.mp3")),
  new objBuilder("ag5", "Rumors of the Court", "About the Empire", 3, require("../assets/audio/ag05.mp3")),
  new objBuilder("ag6", "Accomplishments", "About the Empire", 3, require("../assets/audio/ag06.mp3")),
  new objBuilder("ag7", "Pottery", "About the Empire", 3, require("../assets/audio/ag07.mp3")),
  new objBuilder("ag8", "Palaces", "About the Empire", 3, require("../assets/audio/ag08.mp3")),
  new objBuilder("ag9", "Monetary Systems", "About the Empire", 3, require("../assets/audio/ag09.mp3")),
  new objBuilder("ag10", "Organization of the Empire", "About the Empire", 3, require("../assets/audio/ag10.mp3")),
  new objBuilder("ag11", "Tablet with a Tiger Emblem", "About the Empire", 3, require("../assets/audio/ag11.mp3")),
  new objBuilder("ag12", "The Emperor's Army", "Emperor's Chambers", 4, require("../assets/audio/ag12.mp3")),
  new objBuilder("ag13", "Horses and Cavalrymen", "Emperor's Chambers", 4, require("../assets/audio/ag13.mp3")),
  new objBuilder("ag14", "Old and Young General", "Emperor's Chambers", 4, require("../assets/audio/ag14.mp3")),
  new objBuilder("ag15", "Tombs and Funeral Rites", "Terracotta Army Figures", 5, require("../assets/audio/ag15.mp3")),
  new objBuilder("ag16", "Tumulus", "Terracotta Army Figures", 5, require("../assets/audio/ag16.mp3")),
  new objBuilder("ag17", "Construction of the Funeral Chamber", "Terracotta Army Figures", 5, require("../assets/audio/ag17.mp3")),
  new objBuilder("ag18", "An Intact Funeral Chamber", "Terracotta Army Figures", 5, require("../assets/audio/ag18.mp3")),
  new objBuilder("ag19", "Burial Practices", "Terracotta Army Figures", 5, require("../assets/audio/ag19.mp3")),
  new objBuilder("ag20", "Who Made the Terracotta Statues", "Chariot Room", 6, require("../assets/audio/ag20.mp3")),
  new objBuilder("ag21", "The Modelling of the Parts", "Chariot Room", 6, require("../assets/audio/ag21.mp3")),
  new objBuilder("ag22", "Statue Colors", "Chariot Room", 6, require("../assets/audio/ag22.mp3")),
  new objBuilder("ag23", "Bows", "Building the Terracotta Army", 7, require("../assets/audio/ag23.mp3")),
  new objBuilder("ag24", "Spears", "Building the Terracotta Army", 7, require("../assets/audio/ag24.mp3")),
  new objBuilder("ag25", "Over One Hundred Pits and Burial Sites", "Armory", 8, require("../assets/audio/ag25.mp3")),
  new objBuilder("ag26", "Construction of the Terracotta Army Pits", "Building the Terracotta Army", 7, require("../assets/audio/ag26.mp3")),
  new objBuilder("ag27", "Pit #3 and Pit #4", "Armory", 8, require("../assets/audio/ag27.mp3")),
  new objBuilder("ag28", "The Pit of the Underground Park", "Armory", 8, require("../assets/audio/ag28.mp3")),
  new objBuilder("ag29", "Stone Armors", "The Dig", 9, require("../assets/audio/ag29.mp3")),
  new objBuilder("ag30", "Types of Chariots", "Armory", 8, require("../assets/audio/ag30.mp3")),
  ]