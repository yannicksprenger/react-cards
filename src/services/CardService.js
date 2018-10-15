import cards from './cards.json';

export default class CardService {
    static getCards() {
        return cards ? cards : [];
    }
}