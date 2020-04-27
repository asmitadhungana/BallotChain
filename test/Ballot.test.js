const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require("../ethereum/build/BallotFactory.json");

const compiledBallot = require("../ethereum/build/Ballot.json");

let accounts;
let factory;
let ballotAddress;
let ballot;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  //create a new instance of BallotFactory
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "3000000" });

  await factory.methods.createBallot("myBallot").send({
    from: accounts[0],
    gas: "3000000",
  });

  [ballotAddress] = await factory.methods.getDeployedBallots().call(); //it'll return an array of addresses | take the first address, addresses[0] and assign it to ballotAddress

  //create an instance of Ballot
  ballot = await new web3.eth.Contract(
    JSON.parse(compiledBallot.interface),
    ballotAddress
  ); //Contract(interface/ABI, address_where_this_ballot_exists)
});

describe("Ballots", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(ballot.options.address);
  });

  it("marks the caller as the ballot manager", async () => {
    const manager = await ballot.methods.manager().call();
    assert.equal(accounts[0], manager); //format: ('what_we_hope_it_is', 'what_it_actually_is')
  });

  it("lets manager add Candidates to the canditates arr", async () => {
    await ballot.methods.addCandidates("Asmee").send({
      from: accounts[0],
      gas: "3000000",
    });

    const candidate = await ballot.methods.candidatesArr(0).call();

    assert.equal("Asmee", candidate.name);
  });

  it("lets manager add Voters to the voters arr", async () => {
    await ballot.methods
      .addVoter("0xD2edCad98d525F89206e0Be5c0512297A42e6076", "Polarz")
      .send({
        from: accounts[0],
        gas: "3000000",
      });

    const voter = await ballot.methods.votersArr(0).call();

    assert.equal(
      "0xD2edCad98d525F89206e0Be5c0512297A42e6076",
      voter.voterAddress
    );
    assert.equal("Polarz", voter.voterName);
  });

  //it("lets manager start the vote and changes the ballot state to 'Voting' ", async () => {});

  it("doesn't let an unregistered voter vote", async () => {
    try {
      await ballot.methods.castVote(0).send({
        from: accounts[0],
        gas: "3000000",
      });
      assert(false); //a failing assertion for a failed test [here, this runs if our try block hadn't thrown an error]
    } catch (err) {
      assert(err); //check for truthiness of error
    }
  });
});

//it("lets voters vote and marks them as 'hasvoted' ", async() => {});

//it("doesn't let voters vote candidates until voting has started", async() => {});

//it("lets increases the voteCount of candidate that voter has voted", async() => {});

//it("doesn't let one voter vote twice", async() => {});
