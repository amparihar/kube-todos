export const InitialState = {
  events: [],
  todos: {
    groups: [
    ],
    tasks: [
      {
        name: 'Build serverless services with AWS Api Gateway',
        id: 'T1',
        group: 'G1',
        isComplete: false
      },
      {
        name: 'React Front End',
        id: 'T2',
        group: 'G3',
        isComplete: true
      },
      {
        name: 'Deploy React App with AWS',
        id: 'T3',
        group: 'G3',
        isComplete: true
      },
      {
        name: 'AWS Lambda using Node & DynamoDB',
        id: 'T4',
        group: 'G2',
        isComplete: false
      }
    ],
    comments: [
      {
        id: 'C1',
        task: 'T1',
        content: 'Great work!'
      }
    ]
  }
};
