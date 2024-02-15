// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.0;

contract Campaign{
    enum CampaignStatus{ OPEN, FILLED, CLOSED }
    string public name;
    address public proposer;
    uint256 public amount;
    CampaignStatus public status;

    event DonateEvent(address donor, uint256 amount);
    event WithdrawEvent(uint256 amount);

    constructor(string memory _name, address _proposer, uint256 _amount){
        name = _name;
        proposer = _proposer;
        amount = _amount;
        status = CampaignStatus.OPEN;
    }

    // Modifier to check if the withdrawer is the proposal creator
    modifier onlyProposer() {
        require(msg.sender == proposer, "Not the proposal creator");
        _;
    }

    // Function to donate to campaign
    function donate() public payable {
        require(status != CampaignStatus.CLOSED, "Campaign is closed");
        require(status != CampaignStatus.FILLED, "Campaign is already filled");
        require(msg.value > 0, "Sent value must be greater than 0");

        uint256 total_amount = address(this).balance + msg.value;
        require(total_amount <= amount, "Donated amount exceeds the campaign requirement");

        if (total_amount == amount) {
            status = CampaignStatus.FILLED;
        }

        emit DonateEvent(msg.sender, msg.value);
    }

    // Function to withdraw funds from campaign
    function withdraw() public onlyProposer {
        require(status == CampaignStatus.FILLED, "Campaign is not fully filled.");

        uint256 withdraw_amount = address(this).balance;
        bool result = payable(proposer).send(withdraw_amount);

        if (result) {
            status = CampaignStatus.CLOSED;
        }

        emit WithdrawEvent(withdraw_amount);
    }

    // Function to get the total amount donated for the campaign
    function donatedAmount() public view returns(uint256) {
        return address(this).balance;
    }
}

contract Karna {
    // Struct to represent a proposal
    struct Proposal {
        string name;
        address proposer;
        uint256 amount;
        address[] voters;
        bool executed;
    }

    address[] public members;
    mapping(uint => Proposal) public proposals;
    uint proposalCount = 0;
    mapping(uint => Campaign) public campaigns;
    uint campaignCount = 0;

    event MemberAdded(address member);
    event MemberRemoved(address member);
    event ProposalCreated(uint id);
    event ProposalVoted(address member);
    event CampaignCreated(uint id, address campaign);

    constructor() {
        members.push(msg.sender);
    }

    // Modifier to check if the sender is member of Karna project
    modifier onlyMember() {
        require(isDaoMember(msg.sender), "Not a member of Karna project");
        _;
    }

    // Function to check if the given member is part of Karna project
    function isDaoMember(address member) public view returns(bool) {
        for (uint i = 0; i < members.length; i++) {
            if (members[i] == member) {
                return true;
            }
        }
        return false;
    }

    // Function to add member to the Karna project
    function addMember(address member) public onlyMember {
        require(!isDaoMember(member), "The member is already part of Karna project");
        members.push(member);
        emit MemberAdded(member);
    }

    // Function to remove member from the Karna project
    function removeMember(address member) public onlyMember {
        require(!isDaoMember(member), "Not a member of Karna project");

        for (uint i = 0; i < members.length; i++) {
            if (members[i] == member) {
                members[i] = members[members.length - 1];
                members.pop();
                emit MemberRemoved(member);
                break;
            }
        }
    }

    // Function to create a proposal
    function createProposal(string memory _name, uint256 _amount) public returns(uint256) {
        uint proposalId = proposalCount++;

        // Initialize a new proposal
        proposals[proposalId] = Proposal({
            name: _name,
            amount: _amount,
            proposer: msg.sender,
            voters: new address[](0),
            executed: false
        });

        emit ProposalCreated(proposalId);

        return proposalId;
    }

    // Function to cast a vote for the given proposal
    function vote(uint proposalId) public onlyMember {
        // Ensure the proposal index is valid
        require(proposalId < proposalCount, "Invalid proposal index");
        require(!proposals[proposalId].executed, "Proposal already executed");

        // Ensure the voter has not already voted for the proposal
        for (uint i = 0; i < proposals[proposalId].voters.length; i++) {
            require(proposals[proposalId].voters[i] != msg.sender, "Already voted");
        }

        // Increment add the voter to voted list
        proposals[proposalId].voters.push(msg.sender);
        emit ProposalVoted(msg.sender);

        uint votesRequired = (members.length * 51) / 100;
        if (proposals[proposalId].voters.length >= votesRequired) {
            uint campaignId = campaignCount++;

            // Initialize a new campaign
            campaigns[campaignId] = new Campaign(
                proposals[proposalId].name,
                proposals[proposalId].proposer,
                proposals[proposalId].amount
            );
            emit CampaignCreated(campaignId, address(campaigns[campaignId]));
            proposals[proposalId].executed = true;
        }
    }

    // Function to get the total number of campaigns created
    function totalCampaigns() public view returns(uint256) {
        return campaignCount;
    }

    // Function to get the total number of proposals created
    function totalProposals() public view returns(uint256) {
        return proposalCount;
    }
}