// SPDX-License-Identifier: MIT
/**
 * @file KewaaNFT.sol
 * @author Project Kewaa 
 * @date created 1st of Dec 2022

 Kewaa NFT contract address : 0xF988465f53845e38e40d9185D2b42baAF6e6C0E4
 Kewaa Fractional token address: 0x03cf7078691bD9734D10E46c0d419C84060AA3f0
 */

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract KewaaNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Pausable, Ownable, ERC721Burnable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    struct _fnft{
        uint256 tokenId;
        address fractionalToken;
    }

    mapping(uint256 => _fnft) public FNFT;

    constructor() ERC721("KewaaNFT", "FNFT") {}

    function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _baseURI() internal pure override returns (string memory) {
        return "";
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchsize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchsize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    //is the caller of this function the owner of the NFT?
	modifier isNFTOwner(uint256 _tokenURI) {
		require(msg.sender == ownerOf(_tokenURI));
		_;
	}

    function transferFNFToken(
        address _to, 
        uint256 _tokenURI, 
        uint256 _amount) 
        onlyOwner()
        private
        //isNFTOwner(_tokenURI)
    {
        FNFToken _fnftoken = FNFToken(FNFT[_tokenURI].fractionalToken);
        _fnftoken.transfer(_to, _amount);

    }

    function mint(
        address _to,
        string memory tokenURI_, 
        uint256 _totalFractionalTokens
    ) external onlyOwner() {
        _safeMint(_to, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), tokenURI_);

        //Create a ERC20 Token Contract for this newly minted NFT
        FNFToken _fnftoken = (new FNFToken)();                                      //initialize
        _fnftoken.mint(msg.sender, _totalFractionalTokens * 1000000000000000000);   //now mint the fractional tokens and send it to the owner of this NFT           
        _fnft memory fnft;                                                          //constructor
        fnft.tokenId = _tokenIdCounter.current();                           
        fnft.fractionalToken = address(_fnftoken);
        FNFT[_tokenIdCounter.current()]  = fnft;                                    //bind the fractional token address to this NFT token just minted
        _tokenIdCounter.increment();
    }
}

contract FNFToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("FNFToken", "FNT") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}