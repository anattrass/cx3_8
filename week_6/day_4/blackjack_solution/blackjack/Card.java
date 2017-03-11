package blackjack;

public class Card {
  private Rank rank;
  private Suit suit;

  public Card(Rank rank, Suit suit) {
    this.rank = rank;
    this.suit = suit;
  }

  public int getValue() {
    int value = rank.ordinal() + 1;
    if (value > 10) value = 10;
    return value;
  }

  @Override
  public String toString() {
    return rank + " of " + suit;
  }
}
