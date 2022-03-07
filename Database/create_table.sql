use agent_list;

CREATE TABLE user(
   _id INT NOT NULL AUTO_INCREMENT,
   firstName VARCHAR(100) NOT NULL,
   sureName VARCHAR(100) NOT NULL,
   password VARCHAR(100),
   fullName VARCHAR(100) NOT NULL,
   role VARCHAR(100) NOT NULL,
   agentId VARCHAR(100) NOT NULL,
   reating VARCHAR(100) NOT NULL,
   mobileNumber VARCHAR(100) NOT NULL,
   primary key(_id)
);

