pragma solidity ^0.4.24;


contract Greeter {

  event NewGreeting(string greet);

  string greeting;

  constructor(string memory _greeting) public {
    greeting = _greeting;
  }

  function greet() public view returns (string memory) {
    return greeting;
  }

  function changeGreet(string _greeting) public returns (string memory) {
    greeting = _greeting;

    emit NewGreeting(greeting);
  }
}