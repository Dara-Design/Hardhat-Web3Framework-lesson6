// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.18; // version of solidity this changes constantly

contract SimpleStorage {
    
    uint256  public favoriteNumber;

    People[] public people;

   

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }
    
    
     function retrieve() public view returns(uint256){
        return favoriteNumber;
     }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        // people.push(People(_favoriteNumber, _name)); 
        // People memory newPerson = People({favoriteNumber: _favoriteNumber, name: _name});
        // people.push(newPerson);
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

  
}

