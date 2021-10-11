import { LightningElement, api } from 'lwc';

export default class SimpleCard extends LightningElement {
  @api title = 'LWC Card'
  cardContent = [
    {
      content: 'This is a card created with lightning web component',
      isLink: false
    },
    {
      content: 'Salesforce has a design system which you can check at:',
      isLink: false
    },
    {
      content: 'Salesforce Design System',
      href: 'https://www.lightningdesignsystem.com/guidelines/overview/',
      isLink: true
    }
  ]
}