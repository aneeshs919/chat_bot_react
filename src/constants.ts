import eventImage from '@src/assets/event.jpeg'

export const CHAT_DATA = [
  {
    name: 'greeting',
    sender: 'bot',
    triggers: ['hello', 'hi', 'hey'],
    defaultMessage:
      'Hey, I am Bonnie, your assistant for customer events in Palo Alto! I do it all.',
    responses: [
      {
        sender: 'bot',
        message:
          'Hey, I am Bonnie, your assistant for customer events in Palo Alto! I do it all.'
      },
      {
        sender: 'bot',
        message: '',
        options: [
          {
            text: 'Designing an event',
            value: 'Designing an event'
          },
          {
            text: 'Booking a venue',
            value: 'Booking a venue'
          },
          {
            text: 'Managing guests',
            value: 'Managing guests'
          },
          {
            text: 'Finding leads',
            value: 'Finding leads'
          },
          {
            text: 'Tracking ROI',
            value: 'Tracking ROI'
          }
        ]
      },
      {
        sender: 'bot',
        message: 'What kind of customer event are you planning?'
      }
    ]
  },
  {
    name: 'tasks',
    sender: 'bot',
    triggers: ['tasks', 'task'],
    defaultMessage:
      'I can help you with a variety of tasks. What would you like to know?',
    responses: [
      {
        sender: 'bot',
        message:
          'I can help you with a variety of tasks. What would you like to know?'
      }
    ]
  },
  {
    name: 'restaurant_recommendation',
    sender: 'bot',
    triggers: ['restaurants', 'restaurant'],
    defaultMessage:
      "Certainly! There are several great restaurants in the area. Here are a few. Please let me know if you'd like more information about any of them.",
    responses: [
      {
        sender: 'bot',
        message:
          "Certainly! There are several great restaurants in the area. Here are a few. Please let me know if you'd like more information about any of them."
      }
    ]
  },
  {
    name: 'restaurant_info',
    sender: 'bot',
    triggers: ['menu', 'cuisine'],
    defaultMessage:
      'Restaurant A is known for its delicious cuisine and cozy ambiance. They offer a variety of dishes, including pasta, seafood, and desserts. Would you like their contact information or menu?',
    responses: [
      {
        sender: 'bot',
        message:
          'Restaurant A is known for its delicious cuisine and cozy ambiance. They offer a variety of dishes, including pasta, seafood, and desserts. Would you like their contact information or menu?'
      }
    ]
  },
  {
    name: 'dinner',
    sender: 'bot',
    triggers: ['dinner', 'palo', 'downtown'],
    defaultMessage: 'Great! What are your goals for the event?',
    responses: [
      {
        sender: 'bot',
        message: 'Great! What are your goals for the event?'
      },
      {
        sender: 'bot',
        message: '',
        options: [
          {
            text: '- to connect',
            value: 'to connect'
          },
          {
            text: '- generate new leads',
            value: 'generate new leads'
          },
          {
            text: '- convert your sales pipeline',
            value: 'convert your sales pipeline'
          }
        ]
      }
    ]
  },
  {
    name: 'dinner',
    sender: 'bot',
    triggers: ['event', 'party', 'explore', 'events', 'people', 'peoples'],
    defaultMessage: 'Tell me a bit about the elements you want to include.',
    responses: [
      {
        sender: 'bot',
        message: 'Tell me a bit about the elements you want to include.'
      },
      {
        sender: 'bot',
        message: '',
        options: [
          { text: `@ ${eventImage}`, value: 'cocktail' },
          { text: `@ ${eventImage}`, value: 'panel' },
          { text: `@ ${eventImage}`, value: 'presentation' },
          { text: `@ ${eventImage}`, value: 'buffet' }
        ]
      }
    ]
  },
  {
    name: 'dinner',
    sender: 'bot',
    triggers: ['connect', 'leads', 'pipeline', 'connect'],
    defaultMessage: 'Is there a location you ideally want to be close to?',
    responses: [
      {
        sender: 'bot',
        message: 'Is there a location you ideally want to be close to?'
      }
    ]
  },
  {
    name: 'dinner',
    sender: 'bot',
    triggers: ['walking', 'distance'],
    defaultMessage:
      'Approximately how many guests do you want to have at the event?',
    responses: [
      {
        sender: 'bot',
        message:
          'Approximately how many guests do you want to have at the event?'
      }
    ]
  },
  {
    name: 'dinner',
    sender: 'bot',
    triggers: ['cocktail', 'panel', 'presentation', 'buffet'],
    defaultMessage: 'Do you have a budget or any price guidance for the event?',
    responses: [
      {
        sender: 'bot',
        message: 'Do you have a budget or any price guidance for the event?'
      }
    ]
  },
  {
    name: 'dinner',
    sender: 'bot',
    triggers: ['budget', '$', 'more'],
    defaultMessage:
      'Anything else specific you want me to know? If you have a venue that you love or a vision for the event, just let me know.',
    responses: [
      {
        sender: 'bot',
        message:
          'Anything else specific you want me to know? If you have a venue that you love or a vision for the event, just let me know.'
      }
    ]
  },
  {
    name: 'Designing an event',
    sender: 'bot',
    triggers: ['design event', 'event design', 'event planning'],
    defaultMessage:
      'I can provide tips and ideas for designing a successful event.',
    responses: [
      {
        sender: 'bot',
        message:
          'I can provide tips and ideas for designing a successful event.'
      }
    ]
  },
  {
    name: 'Booking a venue',
    sender: 'bot',
    triggers: ['venue', 'booking', 'find event venue', 'venue selection'],
    defaultMessage: 'I can help you find the perfect venue for your event.',
    responses: [
      {
        sender: 'bot',
        message: 'I can help you find the perfect venue for your event.'
      }
    ]
  },
  {
    name: 'Managing guests',
    sender: 'bot',
    triggers: ['manage guests', 'guest list', 'RSVP'],
    defaultMessage: 'I can assist with managing your guest list and RSVPs.',
    responses: [
      {
        sender: 'bot',
        message: 'I can assist with managing your guest list and RSVPs.'
      }
    ]
  },
  {
    name: 'Finding leads',
    sender: 'bot',
    triggers: ['lead generation', 'find leads', 'sales prospects'],
    defaultMessage: 'I can provide strategies for finding and nurturing leads.',
    responses: [
      {
        sender: 'bot',
        message: 'I can provide strategies for finding and nurturing leads.'
      }
    ]
  },
  {
    name: 'Tracking ROI',
    sender: 'bot',
    triggers: ['tracking', 'ROI', 'return_on_investment', 'measure', 'ROI'],
    defaultMessage:
      'I can help you measure and improve the ROI of your activities.',
    responses: [
      {
        sender: 'bot',
        message:
          'I can help you measure and improve the ROI of your activities.'
      }
    ]
  }
]

export const SET_NO_RESULT_OBJECT = {
  isBot: true,
  responses: [
    {
      sender: 'bot',
      message: `Pardon me i didn't understand the message , plz try again`
    }
  ]
}
