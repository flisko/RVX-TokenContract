var Leagueofstakes = artifacts.require("Leagueofstakes");


module.exports = function(deployer) {
  var losowner = ["0x5a8c5062a877791b9fe5b8851a5a4834c6f43bbb"];
  var rvxtoken = "0xcb72ef349870780fdc4786e8c86aab5b4fa36b73";

 deployer.deploy(Leagueofstakes,losowner,rvxtoken);

 /*deployer.deploy(TeamContract,teamcreator,beneficiaryplaceholder,unlockdateteam,teamname);
 deployer.deploy(PrivateSaleContract,privatesalecreator,beneficiaryplaceholder,unlockdateprivate,privatesalename);
 deployer.deploy(EcosystemContract,ecosystemcreator,beneficiaryplaceholder,unlockdateecosystem,ecosystemanme);
 deployer.deploy(FoundationContract,foundationcreator,beneficiaryplaceholder,unlockdatefoundation,foundationname);
 deployer.deploy(PartnerContract,partnerscreator,beneficiaryplaceholder,unlockdatepartner,partnersname);*/

};
