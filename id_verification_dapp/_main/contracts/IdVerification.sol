// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityVerification {
    struct User {
        bytes32 docHash;
        bool isVerified;
    }

    mapping(address => User) public users;

    function register(bytes32 _docHash) public {
        users[msg.sender] = User(_docHash, false);
    }

    function verify(address _user) public {
        users[_user].isVerified = true;
    }

    function getStatus(address _user) public view returns (bool) {
        return users[_user].isVerified;
    }
}
