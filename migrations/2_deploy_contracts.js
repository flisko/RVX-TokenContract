var Leagueofstakes = artifacts.require("Leagueofstakes");


module.exports = function(deployer) {
  var losowner = ["0x07dee23b955e7dffff6ba88e8dc632e38c4b23a8"];
  var rvxtoken = "0x97626da35b3290c9c86df26656ede4f56c60d52b";

 deployer.deploy(Leagueofstakes,losowner,rvxtoken);

 /*deployer.deploy(TeamContract,teamcreator,beneficiaryplaceholder,unlockdateteam,teamname);
 deployer.deploy(PrivateSaleContract,privatesalecreator,beneficiaryplaceholder,unlockdateprivate,privatesalename);
 deployer.deploy(EcosystemContract,ecosystemcreator,beneficiaryplaceholder,unlockdateecosystem,ecosystemanme);
 deployer.deploy(FoundationContract,foundationcreator,beneficiaryplaceholder,unlockdatefoundation,foundationname);
 deployer.deploy(PartnerContract,partnerscreator,beneficiaryplaceholder,unlockdatepartner,partnersname);*/

};
