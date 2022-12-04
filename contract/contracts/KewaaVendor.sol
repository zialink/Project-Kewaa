//SPDX-License-Identifier:MIT
//contract addr: 0x52f873bb5757e0640aBD47BBbDFfAc46E807247B
pragma solidity ^0.8.0;

import "./KewaaNFT.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


/**
 * @title Real Estate Token
 * @author osazee oghagbon
 * @notice Implements a real estate tokenization contract with revenue distribution.
 */
contract RealEstateToken is KewaaNFT{
    using SafeMath for uint256;
    KewaaNFT kn = new KewaaNFT();
    FNFToken FN = new FNFToken();
    /**
     * @notice We require to know who are all the stakeholders.
     */
    address[] internal stakeholders;

    /**
     * @notice The accumulated revenue for each stakeholder.
     */
    mapping(address => uint256) internal revenues;

    /**
     * @notice The funds in this contract that haven't been distributed yet.
     */
    uint256 internal accumulated;

    
    constructor()
        public
    {

    }

    /**
     * @notice Method to send Ether to this contract.
     */
    receive ()
        external
        payable
    {
        accumulated += msg.value;
    }

    /**
     * @notice Transfers are only allowed to registered stakeholders.
     * @param uri the Uri of the NFT.
     * @param amount The amount of RealEstateTokens to send.
     */
    function transfer(address to , uint256 uri, uint256 amount)
        public
        returns (bool)
    {
        (bool isStakeholder, ) = isStakeholder(to);
        require(isStakeholder);
        kn.transferFNFToken(msg.sender, uri, amount);
        return true;
    }

    // ---------- STAKEHOLDERS ----------

    /**
     * @notice A method to check if an address is a stakeholder.
     * @param _address The address to verify.
     * @return bool, uint256 Whether the address is a stakeholder,
     * and if so its position in the stakeholders array.
     */
    function isStakeholder(address _address)
        public
        view
        returns(bool, uint256)
    {
        for (uint256 s = 0; s < stakeholders.length; s += 1){
            if (_address == stakeholders[s]) return (true, s);
        }
        return (false, 0);
    }

    /**
     * @notice A method to add a stakeholder.
     * @param _stakeholder The stakeholder to add.
     */
    function addStakeholder(address _stakeholder)
        public
    {
        (bool _isStakeholder, ) = isStakeholder(_stakeholder);
        if (!_isStakeholder) stakeholders.push(_stakeholder);
    }

    /**
     * @notice A method to remove a stakeholder.
     * @param _stakeholder The stakeholder to remove.
     */
    function removeStakeholder(address _stakeholder)
        public
    {
        (bool _isStakeholder, uint256 s) = isStakeholder(_stakeholder);
        if (_isStakeholder){
            stakeholders[s] = stakeholders[stakeholders.length - 1];
            stakeholders.pop();
        }
    }

    /**
     * @notice A simple method that calculates the proportional share for each stakeholder.
     * @param _stakeholder The stakeholder to calculate share for.
     */
    function getShare(address _stakeholder)
        public
        view
        returns(uint256)
    {
        return balanceOf(_stakeholder) / totalSupply();
    }

    // ---------- REVENUE ----------
    /**
     * @notice A method to distribute revenues to all stakeholders.
     */
    function distribute()
        public
    {
        for (uint256 s = 0; s < stakeholders.length; s += 1){
            address stakeholder = stakeholders[s];
            uint256 revenue = address(this).balance * getShare(stakeholder);
            accumulated = accumulated.sub(revenue);
            revenues[stakeholder] = revenues[stakeholder].add(revenue);
        }
    }

    /**
     * @notice A method to allow a stakeholder to withdraw his revenues.
     */
    function withdraw()
        public
    {
        uint256 revenue = revenues[msg.sender];
        revenues[msg.sender] = 0;
        payable(msg.sender).transfer(revenue);
    }
}