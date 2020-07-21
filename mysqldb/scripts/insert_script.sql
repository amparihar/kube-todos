INSERT INTO `group` (id,name) 
    VALUES
        ('G1', 'To Do/Upcomming'),
        ('G2', 'Doing/InProgress'),
        ('G3', 'Done/Completed');

INSERT INTO task (id, name, groupId)
    VALUES 
        ('T1', 'Build serverless services with AWS Api Gateway','G1'),
        ('T2', 'React Front End','G3'),
        ('T3', 'Deploy React App with AWS','G3'),
        ('T4', 'Build docker container for node express with mysql','G2'),
        ('T5', 'AWS Lambda using Node & DynamoDB','G2');