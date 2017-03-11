package blackjack;

import java.util.ArrayList;
import java.util.Collections;

public class Deck {
  private ArrayList<Card> cards;

  public Deck(ArrayList<Card> cards) {
    this.cards = cards;
    populate();
  }

  private void populate() {
    for (Suit suit : Suit.values()) {
      for (Rank rank : Rank.values()) {
        cards.add(new Card(rank, suit));
      }
    }
  }

  public void shuffle() {
    Collections.shuffle(cards);
  }

  public Card dealCard(Player player) {
    Card card = cards.get(0);
    player.addCardToHand(card);
    cards.remove(0);
    return card;
  }
}
